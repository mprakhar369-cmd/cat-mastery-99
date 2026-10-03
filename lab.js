// CAT MASTERY 99 — lazy chunk: test engine, training lab, schedule, mocks.
// Loaded on demand via ensureLab(). Operates on core bindings (activeTest,
// triageState) and core helpers (switchView, getTopicQuestions, ...).
// TIMED TEST ENGINE (Daily Challenge, Topic Tests, Full Mocks)
// CAT scheme: MCQ +3 / -1, TITA +3 / 0. Sections run in fixed order.
// ==========================================================================
// (owned by core: let activeTest = null;)

function fmtClock(totalSec) {
  const m = Math.floor(Math.max(0, totalSec) / 60);
  const s = Math.max(0, totalSec) % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startTimedTest(cfg) {
  activeTest = {
    key: cfg.key,
    title: cfg.title,
    subtitle: cfg.subtitle || '',
    sections: cfg.sections,
    showPercentile: !!cfg.showPercentile,
    historyKey: cfg.historyKey || null,
    meta: cfg.meta || {},
    secIdx: 0,
    curQ: 0,
    answers: {},
    flags: {},
    qTimes: {},
    qStamp: Date.now(),
    secLeft: 0,
    timerInt: null,
    submitted: false,
    result: null
  };
  activeTest.sections.forEach((s, si) => {
    activeTest.answers[si] = {};
    activeTest.flags[si] = {};
    activeTest.qTimes[si] = {};
  });
  switchView('test');
  startTestSection(0);
}

function startTestSection(si) {
  const t = activeTest;
  if (!t || t.submitted) return;
  t.secIdx = si;
  t.curQ = 0;
  t.secLeft = t.sections[si].minutes * 60;
  t.qStamp = Date.now();
  if (t.timerInt) clearInterval(t.timerInt);
  t.timerInt = setInterval(testTick, 1000);
  renderTestRunner();
}

function testTick() {
  const t = activeTest;
  if (!t || t.submitted) return;
  t.secLeft--;
  const el = document.getElementById('test-timer');
  if (el) {
    el.innerText = fmtClock(t.secLeft);
    el.classList.toggle('timer-danger', t.secLeft <= 60);
  }
  if (t.secLeft % 10 === 0) {
    const pl = document.getElementById('pace-line');
    if (pl) pl.innerHTML = renderPaceLine();
  }
  if (t.secLeft <= 0) {
    submitTestSection(true);
  }
}

function stampTestQTime() {
  const t = activeTest;
  if (!t || t.submitted) return;
  const now = Date.now();
  const k = t.curQ;
  t.qTimes[t.secIdx][k] = (t.qTimes[t.secIdx][k] || 0) + (now - t.qStamp);
  t.qStamp = now;
}

function currentTestQ() {
  const t = activeTest;
  return t.sections[t.secIdx].questions[t.curQ];
}

function selectTestAnswer(val) {
  const t = activeTest;
  if (!t || t.submitted) return;
  stampTestQTime();
  t.answers[t.secIdx][t.curQ] = val;
  renderTestRunner();
}

function navTestQ(i) {
  const t = activeTest;
  if (!t || t.submitted) return;
  stampTestQTime();
  t.curQ = i;
  renderTestRunner();
}

function flagTestQ() {
  const t = activeTest;
  if (!t || t.submitted) return;
  const k = t.curQ;
  t.flags[t.secIdx][k] = !t.flags[t.secIdx][k];
  renderTestRunner();
}

function submitTestSection(auto) {
  const t = activeTest;
  if (!t || t.submitted) return;
  stampTestQTime();
  if (!auto) { confirmAsync('Submit this section? You cannot return to it.', 'Submit section').then(ok => { if (ok) submitTestSection(true); }); return; }
  if (t.secIdx < t.sections.length - 1) {
    startTestSection(t.secIdx + 1);
  } else {
    finishTest();
  }
}

function gradeTestQuestion(q, val) {
  if (val === undefined || val === null || String(val).trim() === '') {
    return { status: 'blank', marks: 0 };
  }
  const ok = isAnswerMatch(val, q.finalAnswer);
  if (ok) return { status: 'correct', marks: 3 };
  if (q.isTita) return { status: 'wrong', marks: 0 };
  return { status: 'wrong', marks: -1 };
}

function finishTest() {
  const t = activeTest;
  if (!t || t.submitted) return;
  t.submitted = true;
  if (t.timerInt) clearInterval(t.timerInt);

  let score = 0, max = 0, correct = 0, wrong = 0, blank = 0, totalMs = 0, timedN = 0;
  const secRows = [];
  const topicMap = {};
  const timed = [];
  const wrongList = [];
  const perQ = [];

  t.sections.forEach((sec, si) => {
    let sScore = 0, sMax = sec.questions.length * 3, sC = 0, sW = 0, sB = 0;
    sec.questions.forEach((q, qi) => {
      const g = gradeTestQuestion(q, t.answers[si][qi]);
      score += g.marks; sScore += g.marks;
      max += 3;
      if (g.status === 'correct') { correct++; sC++; }
      else if (g.status === 'wrong') { wrong++; sW++; wrongList.push({ sec: sec.name, qi, q, val: t.answers[si][qi] }); }
      else { blank++; sB++; }
      const ms = t.qTimes[si][qi] || 0;
      if (ms > 0) { totalMs += ms; timedN++; }
      timed.push({ sec: sec.name, qi, q, ms });
      perQ.push({ sec: sec.name, qi, ms, status: g.status, topic: q.topicLabel || sec.name, title: q.title || '' });
      const label = q.topicLabel || sec.name;
      if (!topicMap[label]) topicMap[label] = { c: 0, n: 0 };
      topicMap[label].n++;
      if (g.status === 'correct') topicMap[label].c++;
    });
    secRows.push({ name: sec.name, score: sScore, max: sMax, c: sC, w: sW, b: sB, n: sec.questions.length });
  });

  timed.sort((a, b) => b.ms - a.ms);
  const acc = (correct + wrong) > 0 ? Math.round(100 * correct / (correct + wrong)) : 0;
  const result = {
    key: t.key, title: t.title,
    date: new Date().toISOString(),
    score, max, correct, wrong, blank, acc,
    avgSec: timedN > 0 ? Math.round(totalMs / timedN / 1000) : 0,
    secRows, topicMap, perQ,
    slowest: timed.filter(x => x.ms > 0).slice(0, 5),
    wrongList,
    percentile: t.showPercentile ? estimatePercentile(score / max) : null
  };
  t.result = result;

  logActivity(correct, correct + wrong + blank, Math.round(totalMs / 1000));

  if (t.historyKey) {
    try {
      const h = JSON.parse(localStorage.getItem(t.historyKey) || '[]');
      h.unshift(result);
      localStorage.setItem(t.historyKey, JSON.stringify(h.slice(0, 30)));
    } catch (e) { console.warn('history save failed', e); }
  }
  // F13: anonymous benchmark sync (no-op offline)
  try {
    const kind = (t.key || '').split('-')[0] || 'test';
    queueSyncAttempt(kind, t.title, score, max, acc);
  } catch (e) {}
  if (typeof t.meta.onDone === 'function') {
    try { t.meta.onDone(result); } catch (e) { console.warn('onDone failed', e); }
  }
  renderTestReport();
}

// Practice percentile model fitted to CAT 2023-25 score-vs-percentile shape.
// Approximation for practice only — real CAT uses normalized scaled scores.
function estimatePercentile(frac) {
  const table = [
    [0.62, 99.5], [0.55, 99], [0.48, 98], [0.42, 96], [0.36, 94],
    [0.30, 90], [0.24, 85], [0.18, 78], [0.12, 65], [0.06, 55], [0, 40]
  ];
  for (const [f, p] of table) {
    if (frac >= f) return p;
  }
  return 40;
}

function testSectionTabs() {
  const t = activeTest;
  return t.sections.map((s, i) => {
    const cls = i < t.secIdx ? 'tsec done' : (i === t.secIdx ? 'tsec active' : 'tsec locked');
    const lock = i > t.secIdx ? ' 🔒' : (i < t.secIdx ? ' ✓' : '');
    return `<div class="${cls}">${s.name}${lock}</div>`;
  }).join('');
}

function renderTestRunner() {
  const t = activeTest;
  if (!t) return;
  document.getElementById('test-report').style.display = 'none';
  const runner = document.getElementById('test-runner');
  runner.style.display = 'block';
  const sec = t.sections[t.secIdx];
  const q = sec.questions[t.curQ];
  const n = sec.questions.length;
  const ans = t.answers[t.secIdx][t.curQ];
  const flagged = t.flags[t.secIdx][t.curQ];

  const pills = sec.questions.map((_, i) => {
    const a = t.answers[t.secIdx][i] !== undefined;
    const f = t.flags[t.secIdx][i];
    const c = i === t.curQ ? 'tq-pill current' : (a ? 'tq-pill done' : (f ? 'tq-pill flagged' : 'tq-pill todo'));
    return `<button class="${c}" onclick="navTestQ(${i})">${i + 1}</button>`;
  }).join('');

  let answerHtml = '';
  if (q.isTita || !q.options || q.options.length < 2) {
    answerHtml = `
      <input type="text" id="test-tita-input" class="tita-input" placeholder="Type answer (TITA, no negative marking)"
        value="${ans !== undefined ? String(ans).replace(/"/g, '&quot;') : ''}" autocomplete="off"
        oninput="activeTest.answers[activeTest.secIdx][activeTest.curQ] = this.value; refreshTestPills();" />
    `;
  } else {
    answerHtml = `<div class="options-list">` + q.options.map(o => `
      <button class="option-btn ${ans === o ? 'selected' : ''}" onclick="selectTestAnswer(${JSON.stringify(o).replace(/"/g, '&quot;')})">${o}</button>
    `).join('') + `</div>`;
  }

  runner.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${t.subtitle}</div>
          <h2 style="font-size:1.35rem; font-weight:800; margin:2px 0;">${t.title}</h2>
        </div>
        <div class="stopwatch-box" style="font-size:1.05rem;">⏱️ <span id="test-timer">${fmtClock(t.secLeft)}</span></div>
      </div>
      <div class="pace-line" id="pace-line">${renderPaceLine()}</div>
      <div class="tsec-row">${testSectionTabs()}</div>
    </div>
    <div class="practice-container">
      <div class="question-card">
        <div class="question-header">
          <div class="q-badge">${sec.name} • Question ${t.curQ + 1} of ${n}</div>
          <div class="provenance-pill">${q.topicLabel || sec.name}</div>
        </div>
        <div class="question-text">${renderMarkdownLite(q.problem)}</div>
        ${answerHtml}
        <div class="sprint-action-bar">
          <div style="display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn-start-sprint" style="width:auto;" onclick="navTestQ(Math.max(0, activeTest.curQ - 1))">← Prev</button>
            <button class="btn-start-sprint" style="width:auto; background:var(--accent-amber); color:#080d1a;" onclick="flagTestQ()">${flagged ? '★ Flagged' : '⚑ Flag'}</button>
            <button class="btn-start-sprint" style="width:auto;" onclick="navTestQ(Math.min(${n - 1}, activeTest.curQ + 1))">Next →</button>
          </div>
          <button class="btn-start-sprint" style="width:auto; background:var(--accent-emerald); color:#080d1a;" onclick="submitTestSection(false)">
            ${t.secIdx < t.sections.length - 1 ? 'Submit Section →' : 'Finish Test ✓'}
          </button>
        </div>
      </div>
      <div class="palette-card">
        <h4 style="font-weight:800; margin:0 0 10px;">${sec.name} Palette</h4>
        <div class="palette-grid">${pills}</div>
        <div class="palette-summary-stats" style="margin-top:10px;">${Object.keys(t.answers[t.secIdx]).length}/${n} answered</div>
      </div>
    </div>
  `;
  runKaTeX(runner);
}

function refreshTestPills() {
  const t = activeTest;
  if (!t || t.submitted) return;
  stampTestQTime();
  const sec = t.sections[t.secIdx];
  const grid = document.querySelector('#view-test .palette-grid');
  if (grid) {
    grid.innerHTML = sec.questions.map((_, i) => {
      const a = t.answers[t.secIdx][i] !== undefined && String(t.answers[t.secIdx][i]).trim() !== '';
      const f = t.flags[t.secIdx][i];
      const c = i === t.curQ ? 'tq-pill current' : (a ? 'tq-pill done' : (f ? 'tq-pill flagged' : 'tq-pill todo'));
      return `<button class="${c}" onclick="navTestQ(${i})">${i + 1}</button>`;
    }).join('');
  }
}

function renderMarkdownLite(text) {
  if (!text) return '';
  let h = String(text)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
  return h;
}

// ==========================================================================
// F6 — MOCK AUTOPSY REPORT (score, accuracy, time, traps, bulk diary log)
// ==========================================================================
function renderTestReport() {
  const t = activeTest;
  const r = t.result;
  if (!r) return;
  if (t.timerInt) clearInterval(t.timerInt);
  document.getElementById('test-runner').style.display = 'none';
  const rep = document.getElementById('test-report');
  rep.style.display = 'block';

  const pctHtml = r.percentile !== null ? `
    <div class="audit-hero-num">${r.percentile}<span style="font-size:1rem;">%ile</span></div>
    <div class="dash-metric-sub">Practice estimate (CAT 2023–25 curve, not normalized)</div>` : '';

  const secRows = r.secRows.map(s => `
    <div class="audit-sec-row">
      <span><strong>${s.name}</strong> <span class="dash-score-badge">${s.c}✓ ${s.w}✗ ${s.b}○</span></span>
      <span class="audit-score">${s.score}<span class="dash-score-badge">/${s.max}</span></span>
    </div>
    <div class="audit-bar"><div class="audit-fill" style="width:${s.max ? Math.max(0, Math.round(100 * s.score / s.max)) : 0}%;"></div></div>
  `).join('');

  const topicRows = Object.keys(r.topicMap).map(k => {
    const v = r.topicMap[k];
    const p = v.n ? Math.round(100 * v.c / v.n) : 0;
    return `
      <div class="audit-sec-row">
        <span>${k} <span class="dash-score-badge">${v.c}/${v.n}</span></span>
        <span class="audit-score">${p}%</span>
      </div>
      <div class="audit-bar"><div class="audit-fill ${p < 50 ? 'weak' : ''}" style="width:${p}%;"></div></div>
    `;
  }).join('');

  const slowRows = r.slowest.length ? r.slowest.map(s => `
    <div class="audit-sec-row"><span>${s.sec} • Q${s.qi + 1} — ${String(s.q.title || '').slice(0, 42)}</span><span class="dash-score-badge">${Math.round(s.ms / 1000)}s</span></div>
  `).join('') : '<div class="dash-metric-sub">No timing data captured.</div>';

  const wrongRows = r.wrongList.length ? r.wrongList.map((w, i) => `
    <div class="card" style="margin-bottom:12px; border-left:4px solid var(--accent-rose);">
      <div style="font-weight:800; margin-bottom:6px;">${w.sec} • Q${w.qi + 1} — ${w.q.title || ''}</div>
      <div class="question-text" style="font-size:0.88rem;">${renderMarkdownLite(String(w.q.problem || '').slice(0, 400))}</div>
      <div style="font-size:0.85rem; margin-top:8px;">Your answer: <strong style="color:var(--accent-rose);">${String(w.val).slice(0, 60)}</strong> • Correct: <strong style="color:var(--accent-emerald);">${String(w.q.finalAnswer).slice(0, 60)}</strong></div>
      ${w.q.method2 ? `<div style="font-size:0.85rem; color:var(--text-secondary); margin-top:6px;">⚡ ${renderMarkdownLite(String(w.q.method2).slice(0, 300))}</div>` : ''}
      ${w.q.trap ? `<div style="font-size:0.8rem; color:var(--accent-amber); margin-top:4px;">⚠️ Trap: ${renderMarkdownLite(String(w.q.trap).slice(0, 200))}</div>` : ''}
    </div>
  `).join('') : '<div class="card" style="text-align:center; padding:24px; color:var(--accent-emerald); font-weight:700;">Flawless — zero wrong answers. 🎯</div>';

  rep.innerHTML = `
    <div class="card" style="margin-bottom:16px; text-align:center; padding:28px;">
      <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${r.title} — Autopsy Report</div>
      <div class="audit-hero-num">${r.score}<span class="dash-score-badge">/${r.max}</span></div>
      <div style="display:flex; justify-content:center; gap:18px; flex-wrap:wrap; margin-top:8px; font-size:0.9rem;">
        <span>✅ ${r.correct}</span><span>❌ ${r.wrong}</span><span>○ ${r.blank}</span>
        <span>🎯 ${r.acc}% accuracy</span><span>⏱️ ${r.avgSec}s / Q avg</span>
      </div>
      ${pctHtml}
      <div style="display:flex; justify-content:center; gap:10px; flex-wrap:wrap; margin-top:18px;">
        ${r.wrongList.length ? `<button class="btn-start-sprint" style="width:auto; background:var(--accent-rose); color:#fff;" onclick="logTestMistakesToDiary()">📌 Log ${r.wrongList.length} mistake(s) to Chook Diary</button>` : ''}
        <button class="btn-start-sprint" style="width:auto;" onclick="retakeActiveTest()">↻ Retake</button>
        <button class="btn-start-sprint" style="width:auto; background:transparent; border-color:var(--border-subtle); color:var(--text-secondary);" onclick="switchView('dashboard')">Dashboard →</button>
      </div>
    </div>
    <div class="audit-grid">
      <div class="card"><h3 style="font-weight:800; margin-bottom:12px;">Section Breakdown</h3>${secRows}</div>
      <div class="card"><h3 style="font-weight:800; margin-bottom:12px;">Topic Accuracy</h3>${topicRows}</div>
    </div>
    <div class="card" style="margin-top:16px;"><h3 style="font-weight:800; margin-bottom:12px;">⏱️ Slowest Questions</h3>${slowRows}</div>
    <div style="margin-top:16px;"><h3 style="font-weight:800; margin-bottom:12px;">❌ Wrong Answers — Autopsy</h3>${wrongRows}</div>
  `;
  runKaTeX(rep);
  rep.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function logTestMistakesToDiary() {
  const t = activeTest;
  if (!t || !t.result) return;
  const today = new Date().toISOString().split('T')[0];
  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  t.result.wrongList.forEach(w => {
    entries.unshift({
      id: 'ERR_' + Date.now() + '_' + Math.floor(Math.random() * 1e6),
      date: today,
      subject: w.sec.toUpperCase(),
      topic: w.q.topicLabel || w.q.title || 'Test Review',
      tag: '[TRP]',
      questionSummary: String(w.q.problem || '').substring(0, 150) + '...',
      correctAnswer: w.q.finalAnswer || '',
      lesson: 'Test autopsy: revisit the Method 2 shortcut and trap note.',
      qRef: (w.q.qSubject && (w.q.qTopic || w.q.qCaselet)) ? { subject: w.q.qSubject, topicId: w.q.qTopic || null, qNum: w.q.qNum, caselet: w.q.qCaselet || null } : null,
      t1: false, t7: false, t21: false, resolved: false
    });
  });
  localStorage.setItem('cat_chook_diary', JSON.stringify(entries));
  updateDashboardStats();
  toast(t.result.wrongList.length + ' mistake(s) logged to Chook Diary for spaced review.');
}

function retakeActiveTest() {
  const t = activeTest;
  if (!t) return;
  const cfg = { key: t.key, title: t.title, subtitle: 'Retake', sections: t.sections, showPercentile: t.showPercentile, historyKey: t.historyKey, meta: t.meta };
  startTimedTest(cfg);
}

// ==========================================================================
// F1 — DAILY CHALLENGE (date-seeded, streak-tracked, offline-first)
// ==========================================================================
function dailySeedInt() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}
function dailyDateKey(offsetDays) {
  const d = new Date();
  d.setDate(d.getDate() + (offsetDays || 0));
  return d.toISOString().split('T')[0];
}
function seededPick(arr, seed, count) {
  // Deterministic rotation: no repeats until the bank cycles
  const out = [];
  if (!arr || !arr.length) return out;
  let s = seed;
  const pool = arr.slice();
  for (let i = 0; i < Math.min(count, pool.length); i++) {
    s = (s * 1103515245 + 12345) % 2147483648;
    out.push(pool.splice(s % pool.length, 1)[0]);
  }
  return out;
}

function buildDailyChallenge() {
  const seed = dailySeedInt();
  const sections = [];
  // QA: 4 questions spread across topics
  let qaPool = [];
  window.QA_TOPICS_DATA.forEach(t => {
    (t.questions || []).forEach(q => qaPool.push(Object.assign({}, q, { topicLabel: t.title, qSubject: 'qa', qTopic: t.id })));
  });
  const qaQs = seededPick(qaPool, seed, 4);
  if (qaQs.length) sections.push({ name: 'Quant', minutes: 8, tag: 'qa', questions: qaQs });
  // DILR: 1 full caselet
  let caselets = [];
  window.DILR_ARCHETYPES_DATA.forEach(a => {
    (a.caselets || []).forEach(c => caselets.push({ arch: a, c }));
  });
  const pick = seededPick(caselets, seed + 7, 1)[0];
  if (pick) {
    const qs = pick.c.questions.map(q => ({
      qNum: q.qNum, title: pick.c.title, topicLabel: pick.arch.title,
      qSubject: 'dilr', qTopic: pick.arch.id, qCaselet: pick.c.title,
      problem: `**Context:** ${pick.c.context}\n\n**Question:** ${q.statement}`,
      concept: 'CAT DILR Logical Deduction', method1: q.solution, method2: q.shortcut,
      finalAnswer: q.correctAnswer, trap: q.trap, isTita: false, options: q.options
    }));
    sections.push({ name: 'DILR Set', minutes: 10, tag: 'dilr', questions: qs });
  }
  // VARC: 2 drills rotating through the 6-drill bank
  let drills = [];
  window.VARC_MODULES_DATA.forEach(m => {
    (m.drills || []).forEach((d, idx) => drills.push({ m, d, idx }));
  });
  const vPicks = seededPick(drills, seed + 13, 2);
  const vQs = vPicks.map(({ m, d, idx }) => {
    let stmt = d.paragraph || d.passage || (d.sentences ? d.sentences.join('\n') : d.context || '');
    return {
      qNum: idx + 1, title: m.title, topicLabel: m.title,
      qSubject: 'varc', qTopic: m.id,
      problem: `${stmt}\n\n${d.question || ''}`,
      concept: 'VARC Scope & Structural Logic', method1: d.explanation, method2: d.shortcut,
      finalAnswer: d.correctAnswer, trap: d.trap,
      isTita: !d.options || d.options.length === 0, options: d.options || []
    };
  });
  if (vQs.length) sections.push({ name: 'VARC', minutes: 7, tag: 'varc', questions: vQs });
  return sections;
}

function startDailyChallenge() {
  if (!window.QA_TOPICS_DATA) return;
  const key = 'daily-' + dailyDateKey(0);
  startTimedTest({
    key, title: "Today's Challenge", subtitle: 'Daily • ~25 min',
    sections: buildDailyChallenge(),
    showPercentile: false,
    historyKey: 'cat_daily_history',
    meta: {
      onDone: (r) => {
        try {
          localStorage.setItem('cat_daily_done_' + dailyDateKey(0), JSON.stringify({ score: r.score, max: r.max }));
          const yKey = 'cat_daily_done_' + dailyDateKey(-1);
          let streak = 1;
          if (localStorage.getItem(yKey)) {
            streak = parseInt(localStorage.getItem('cat_daily_streak') || '0', 10) + 1;
          }
          localStorage.setItem('cat_daily_streak', String(streak));
          localStorage.setItem('cat_streak_days', String(streak));
          const done = parseInt(localStorage.getItem('cat_qs_solved') || '0', 10) + r.correct;
          localStorage.setItem('cat_qs_solved', String(done));
          updateDashboardStats();
        } catch (e) { console.warn('daily persist failed', e); }
      }
    }
  });
}

function renderDailyLanding() {
  const root = document.getElementById('daily-root');
  if (!root) return;
  const todayKey = 'cat_daily_done_' + dailyDateKey(0);
  const done = localStorage.getItem(todayKey);
  const streak = localStorage.getItem('cat_daily_streak') || '0';
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('cat_daily_history') || '[]').slice(0, 7); } catch (e) {}
  const doneInfo = done ? JSON.parse(done) : null;
  const histRows = hist.length ? hist.map(h => `
    <div class="audit-sec-row"><span>${h.date.slice(0, 10)}</span><span class="audit-score">${h.score}<span class="dash-score-badge">/${h.max}</span> <span class="dash-score-badge">${h.acc}%</span></span></div>
  `).join('') : '<div class="dash-metric-sub">No attempts yet — today is day one.</div>';

  root.innerHTML = `
    <div class="dash-hero">
      <div class="dash-hero-content">
        <div class="dash-hero-pill"><span class="dash-pulse-dot"></span><span>Fresh set every day • ${dailyDateKey(0)}</span></div>
        <h2 class="dash-hero-title">Daily Challenge — ${doneInfo ? 'Completed ✅' : 'Live Now'}</h2>
        <p class="dash-hero-desc">4 Quant + 1 DILR set + 2 VARC drills, ~25 minutes. Streak: <strong>${streak} day(s)</strong>${doneInfo ? ` • Today: ${doneInfo.score}/${doneInfo.max}` : ''}.</p>
        <div class="dash-hero-actions">
          <button class="btn-dash-primary" onclick="startDailyChallenge()">
            <span>${doneInfo ? '↻ Retake Today’s Set' : '⚡ Start Today’s Challenge'}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="card" style="margin-top:16px;"><h3 style="font-weight:800; margin-bottom:12px;">Last 7 Days</h3>${histRows}</div>
  `;
}

// ==========================================================================
// F2 — TOPIC TESTS (Foundational / Advanced split per chapter)
// ==========================================================================
function startTopicTest(subject, topicId, level) {
  const { topic, questions } = getTopicQuestions(subject, topicId);
  if (!topic || !questions.length) return;
  let qs = questions, label = 'Full Drill Set';
  if (subject === 'dilr' && questions.length >= 4) {
    // Split by caselet so a set never straddles both tests
    const groups = [];
    const seen = {};
    questions.forEach(q => {
      const k = q.caseletId || q.title;
      if (!seen[k]) { seen[k] = []; groups.push(seen[k]); }
      seen[k].push(q);
    });
    const half = Math.ceil(groups.length / 2);
    const pick = level === 'foundation' ? groups.slice(0, half) : groups.slice(half);
    qs = pick.flat();
    label = level === 'foundation' ? 'Foundational Test' : 'Advanced Test';
  } else if (questions.length >= 6) {
    const half = Math.ceil(questions.length / 2);
    if (level === 'foundation') { qs = questions.slice(0, half); label = 'Foundational Test'; }
    else { qs = questions.slice(half); label = 'Advanced Test'; }
  }
  qs = qs.map(q => Object.assign({}, q, { topicLabel: topic.title, qSubject: subject, qTopic: topicId, qCaselet: q.caseletId || null }));
  const mins = Math.max(5, Math.round(qs.length * 1.5));
  startTimedTest({
    key: `topictest-${subject}-${topicId}-${level}`,
    title: `${topic.title} — ${label}`,
    subtitle: `Topic Test • ${qs.length} Qs • ${mins} min`,
    sections: [{ name: label, minutes: mins, tag: subject, questions: qs.map(q => Object.assign({}, q, { topicLabel: topic.title })) }],
    showPercentile: false,
    historyKey: 'cat_topictest_history',
    meta: {}
  });
}

// ==========================================================================
// F3 — FULL SYLLABUS MOCK (VARC → DILR → Quant, section locks, percentile)
// ==========================================================================
function startFullMock() {
  if (!window.QA_TOPICS_DATA) return;
  const seed = dailySeedInt();
  const sections = [];
  // VARC: whole 6-drill bank, 15 min
  let vQs = [];
  window.VARC_MODULES_DATA.forEach(m => {
    (m.drills || []).forEach((d, idx) => {
      let stmt = d.paragraph || d.passage || (d.sentences ? d.sentences.join('\n') : d.context || '');
      vQs.push({
        qNum: idx + 1, title: m.title, topicLabel: m.title,
        qSubject: 'varc', qTopic: m.id,
        problem: `${stmt}\n\n${d.question || ''}`,
        concept: 'VARC Scope & Structural Logic', method1: d.explanation, method2: d.shortcut,
        finalAnswer: d.correctAnswer, trap: d.trap,
        isTita: !d.options || d.options.length === 0, options: d.options || []
      });
    });
  });
  if (vQs.length) sections.push({ name: 'VARC', minutes: 15, tag: 'varc', questions: vQs });
  // DILR: 4 seeded caselets ≈ 16 Qs, 40 min
  let caselets = [];
  window.DILR_ARCHETYPES_DATA.forEach(a => {
    (a.caselets || []).forEach(c => caselets.push({ arch: a, c }));
  });
  let dQs = [];
  seededPick(caselets, seed, 4).forEach(({ arch, c }) => {
    (c.questions || []).forEach(q => dQs.push({
      qNum: q.qNum, title: c.title, topicLabel: arch.title,
      qSubject: 'dilr', qTopic: arch.id, qCaselet: c.title,
      problem: `**Context:** ${c.context}\n\n**Question:** ${q.statement}`,
      concept: 'CAT DILR Logical Deduction', method1: q.solution, method2: q.shortcut,
      finalAnswer: q.correctAnswer, trap: q.trap, isTita: false, options: q.options
    }));
  });
  if (dQs.length) sections.push({ name: 'DILR', minutes: 40, tag: 'dilr', questions: dQs });
  // Quant: 22 seeded across topics, 40 min
  let qaPool = [];
  window.QA_TOPICS_DATA.forEach(t => {
    (t.questions || []).forEach(q => qaPool.push(Object.assign({}, q, { topicLabel: t.title, qSubject: 'qa', qTopic: t.id })));
  });
  const qaQs = seededPick(qaPool, seed + 29, 22);
  if (qaQs.length) sections.push({ name: 'Quant', minutes: 40, tag: 'qa', questions: qaQs });

  const totalQ = sections.reduce((a, s) => a + s.questions.length, 0);
  startTimedTest({
    key: 'fullmock-' + dailyDateKey(0) + '-' + seed,
    title: 'Full Syllabus Mock',
    subtitle: `CAT order • ${totalQ} Qs • 95 min • +3/-1`,
    sections,
    showPercentile: true,
    historyKey: 'cat_mock_history',
    meta: {}
  });
}

function renderMockHubExtra() {
  const area = document.getElementById('fullmock-launch');
  if (!area) return;
  let hist = [];
  try { hist = JSON.parse(localStorage.getItem('cat_mock_history') || '[]').slice(0, 5); } catch (e) {}
  const rows = hist.length ? hist.map(h => `
    <div class="audit-sec-row"><span>${h.date.slice(0, 10)} • ${h.correct}✓/${h.wrong}✗</span><span class="audit-score">${h.score}<span class="dash-score-badge">/${h.max}</span> <span class="dash-score-badge">${h.percentile}%ile</span></span></div>
  `).join('') : '<div class="dash-metric-sub">No full mocks yet — percentiles appear here.</div>';
  area.innerHTML = `
    <div class="card" style="margin-bottom:24px; border-left:4px solid var(--accent-cyan);">
      <h2>🏆 Full Syllabus Mock (CAT Order)</h2>
      <p style="color:var(--text-secondary); margin:8px 0 16px;">VARC → DILR → Quant with hard section locks, CAT marking, and a practice percentile modelled on CAT 2023–25 curves. ~44 questions, 95 minutes.</p>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn-start-sprint" style="width:auto; padding:12px 24px; background:var(--accent-cyan); color:#080d1a;" onclick="startFullMock()">Launch Full Mock ➔</button>
        <button class="btn-start-sprint" style="width:auto; padding:12px 24px; background:transparent; border:1px solid var(--accent-rose); color:var(--accent-rose);" onclick="startFullMockStrict()" title="Fullscreen, no pause, clock never stops">🔒 Exam-Hall Strict</button>
      </div>
    </div>
    <div class="card" style="margin-bottom:24px;"><h3 style="font-weight:800; margin-bottom:6px;">🎯 Pace Targets (attempts per section)</h3>
      <div class="dash-metric-sub" style="margin-bottom:10px;">The runner shows live behind/ahead vs elapsed time.</div>
      <div id="pace-form" style="display:flex; gap:14px; flex-wrap:wrap; align-items:center;"></div>
    </div>
    <div class="card" style="margin-bottom:24px;"><h3 style="font-weight:800; margin-bottom:12px;">Recent Full Mocks</h3>${rows}</div>
    <div class="card" style="margin-bottom:24px;"><h3 style="font-weight:800; margin-bottom:6px;">🌍 Peer Benchmarks</h3>
      <div class="dash-metric-sub" style="margin-bottom:10px;">Your last-10 accuracy vs opted-in peers (30-day window).</div>
      <div id="bench-strip">
        <div class="audit-sec-row" id="bench-mock"><span>MOCK</span><span class="dash-score-badge">…</span></div>
        <div class="audit-sec-row" id="bench-daily"><span>DAILY</span><span class="dash-score-badge">…</span></div>
        <div class="audit-sec-row" id="bench-trap"><span>TRAP</span><span class="dash-score-badge">…</span></div>
      </div>
    </div>
    <div class="card" style="margin-bottom:24px;"><h3 style="font-weight:800; margin-bottom:12px;">⏪ Attempt Replays</h3><div id="replay-list"></div></div>
    <div class="card" style="margin-bottom:24px;"><h3 style="font-weight:800; margin-bottom:6px;">📄 PYQ Paper Library</h3>
      <div class="dash-metric-sub" style="margin-bottom:10px;">Import official papers as JSON to sit them offline with full autopsy.</div>
      <div id="pyq-list"></div>
      <textarea id="pyq-import-box" rows="3" placeholder='{"title":"CAT 2024 Slot 1","year":"2024","slot":"Slot 1","questions":[{...}]}' style="width:100%; margin-top:10px; padding:10px; border-radius:10px; border:1px solid var(--border-subtle); background:var(--bg-subtle); color:var(--text-primary); font-family:var(--font-mono); font-size:0.75rem;"></textarea>
      <button class="btn-start-sprint" style="width:auto; padding:8px 16px; margin-top:8px;" onclick="importPyqJson()">📥 Import Paper JSON</button>
    </div>
  `;
  renderPaceTargets();
  renderReplayList();
  renderPyqLibrary();
  renderBenchmarks();
}

// ==========================================================================
// F4 — SCHEDULE GENERATOR (countdown to CAT + week-by-week Tier S→A plan)
// ==========================================================================
const CAT_EXAM_DATE = new Date('2026-11-29T09:00:00+05:30');

function scheduleUnits() {
  const units = [];
  if (window.QA_TOPICS_DATA) window.QA_TOPICS_DATA.forEach(t => units.push({ id: 'qa:' + t.id, label: t.title, kind: 'Quant', tier: t.tier || 'Tier A' }));
  if (window.DILR_ARCHETYPES_DATA) window.DILR_ARCHETYPES_DATA.forEach(a => units.push({ id: 'dilr:' + a.id, label: a.title, kind: 'DILR', tier: a.tier || 'Tier A' }));
  if (window.VARC_MODULES_DATA) window.VARC_MODULES_DATA.forEach(m => units.push({ id: 'varc:' + m.id, label: m.title, kind: 'VARC', tier: m.tier || 'Tier A' }));
  units.sort((a, b) => (a.tier === b.tier ? 0 : (a.tier === 'Tier S' ? -1 : 1)));
  return units;
}

function getScheduleState() {
  try { return JSON.parse(localStorage.getItem('cat_schedule_state') || '{"done":[],"started":null}'); }
  catch (e) { return { done: [], started: null }; }
}
function saveScheduleState(s) { localStorage.setItem('cat_schedule_state', JSON.stringify(s)); }

function buildScheduleWeeks() {
  const units = scheduleUnits();
  const now = new Date();
  const daysLeft = Math.max(1, Math.ceil((CAT_EXAM_DATE - now) / 86400000));
  const weeks = Math.max(1, Math.ceil(daysLeft / 7));
  const perWeek = Math.ceil(units.length / weeks);
  const out = [];
  for (let w = 0; w < weeks; w++) {
    out.push({
      n: w + 1,
      units: units.slice(w * perWeek, (w + 1) * perWeek),
      mock: (w % 2 === 1) || w === weeks - 1
    });
  }
  return { weeks: out, daysLeft, totalWeeks: weeks };
}

function toggleScheduleUnit(id) {
  const s = getScheduleState();
  if (!s.started) s.started = dailyDateKey(0);
  const i = s.done.indexOf(id);
  if (i >= 0) s.done.splice(i, 1); else s.done.push(id);
  saveScheduleState(s);
  renderSchedule();
  updateDashboardStats();
}
function resetSchedule() {
  return confirmAsync('Reset the whole study plan? All ticks will be cleared.', 'Reset plan').then(ok => { if (!ok) return; saveScheduleState({ done: [], started: dailyDateKey(0) }); renderSchedule(); });
  saveScheduleState({ done: [], started: dailyDateKey(0) });
  renderSchedule();
}

function renderSchedule() {
  const root = document.getElementById('schedule-root');
  if (!root) return;
  const { weeks, daysLeft, totalWeeks } = buildScheduleWeeks();
  const st = getScheduleState();
  const totalUnits = weeks.reduce((a, w) => a + w.units.length, 0);
  const doneCount = st.done.length;
  const pct = totalUnits ? Math.round(100 * doneCount / totalUnits) : 0;
  root.innerHTML = `
    <div class="dash-hero">
      <div class="dash-hero-content">
        <div class="dash-hero-pill"><span class="dash-pulse-dot"></span><span>CAT 2026 • 29 Nov • Tier S first</span></div>
        <h2 class="dash-hero-title">${daysLeft} days to CAT</h2>
        <p class="dash-hero-desc">${doneCount}/${totalUnits} units done (${pct}%) across ${totalWeeks} week(s). Tick units as you finish their 4-phase sprint.</p>
        <div class="due-progress-track"><div class="due-progress-fill" style="width:${pct}%;"></div></div>
        <div class="dash-hero-actions" style="margin-top:12px;">
          <button class="btn-dash-tertiary" onclick="resetSchedule()">↻ Reset Plan</button>
        </div>
      </div>
    </div>
    <div style="margin-top:16px;">
      ${weeks.map(w => `
        <div class="card" style="margin-bottom:12px;">
          <h3 style="font-weight:800; margin-bottom:10px;">Week ${w.n} ${w.mock ? '<span class="dash-due-pill">+ Mock & Review</span>' : ''}</h3>
          ${w.units.map(u => `
            <label class="sched-row">
              <input type="checkbox" ${st.done.includes(u.id) ? 'checked' : ''} onchange="toggleScheduleUnit('${u.id}')" />
              <span class="sched-label">${u.label}</span>
              <span class="tier-pill ${u.tier === 'Tier S' ? 'tier-s' : 'tier-a'}">${u.tier.replace('Tier ', '')}</span>
              <span class="dash-score-badge">${u.kind}</span>
            </label>
          `).join('') || '<div class="dash-metric-sub">Review + mock week — clear Chook Diary dues.</div>'}
          ${w.mock ? `<div class="dash-metric-sub" style="margin-top:8px;">📝 Sit a sectional or full mock, then autopsy every miss.</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================================================
// F5 — VIDEO WATCH PROGRESS (check-off, chapter counts, resume, channels)
// ==========================================================================
function getVideoProgress() {
  try { return JSON.parse(localStorage.getItem('cat_video_progress') || '{}'); }
  catch (e) { return {}; }
}
function chapterProgress(ch) {
  const p = getVideoProgress();
  const done = ch.videos.filter(v => p[v.id] && p[v.id].watched).length;
  return { done, total: ch.videos.length };
}
function toggleVideoWatched(vidId, chId) {
  const p = getVideoProgress();
  if (p[vidId] && p[vidId].watched) delete p[vidId];
  else p[vidId] = { watched: true, chId, at: dailyDateKey(0) };
  localStorage.setItem('cat_video_progress', JSON.stringify(p));
  renderResourceLessonsList();
  renderResourceChapterList();
}
function resumeNextVideo() {
  if (!window.PERCENTYL_RESOURCES_DATA) return;
  const p = getVideoProgress();
  const list = window.PERCENTYL_RESOURCES_DATA.filter(c => c.section.toLowerCase() === currentResourceSection.toLowerCase());
  for (const ch of list) {
    const idx = ch.videos.findIndex(v => !(p[v.id] && p[v.id].watched));
    if (idx >= 0) {
      activeResourceChapterId = ch.id;
      activeResourceVideoIdx = idx;
      isResourceVideoPlaying = false;
      renderResourcesView();
      document.getElementById('res-player-container').scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
  }
  toast('All caught up in this section! 🎉');
}
function videoChannels() {
  if (!window.PERCENTYL_RESOURCES_DATA) return [];
  const s = new Set();
  window.PERCENTYL_RESOURCES_DATA.forEach(c => c.videos.forEach(v => { if (v.channel) s.add(v.channel); }));
  return Array.from(s);
}

// ==========================================================================
// F4 — TRAP TAXONOMY DRILLS (one trap family per drill, from bank data)
// ==========================================================================
const TRAP_FAMILIES = [
  { id: 'percent', label: '%-point vs % trap', keys: ['percent', '%', 'percentage point', 'pp'] },
  { id: 'reciprocal', label: 'Reciprocal / inverse slip', keys: ['reciprocal', 'inverse', '+25%', '-20%', 'consumption'] },
  { id: 'domain', label: 'Domain & boundary check', keys: ['domain', 'boundary', 'parity', 'verify', 'extraneous', 'log'] },
  { id: 'units', label: 'Units & scale misread', keys: ['unit', 'scale', 'digit', 'cyclicity'] },
  { id: 'extreme', label: 'Extreme / edge cases', keys: ['maxima', 'minima', 'extreme', 'edge', 'chocolate', 'venn'] },
  { id: 'time', label: 'Time-pressure rushing', keys: ['shortcut', 'bail', '90', 'traffic'] }
];
function trapFamilyOf(q) {
  const hay = `${q.trap || ''} ${q.problem || ''} ${q.title || ''}`.toLowerCase();
  for (const f of TRAP_FAMILIES) {
    if (f.keys.some(k => hay.includes(k))) return f.id;
  }
  return 'general';
}
function startTrapDrill(familyId) {
  let pool = [];
  const tag = (q, label) => Object.assign({}, q, { topicLabel: label });
  window.QA_TOPICS_DATA.forEach(t => (t.questions || []).forEach(q => pool.push(Object.assign({}, q, { topicLabel: t.title, qSubject: 'qa', qTopic: t.id }))));
  window.DILR_ARCHETYPES_DATA.forEach(a => (a.caselets || []).forEach(c => (c.questions || []).forEach(q => pool.push({
    qNum: q.qNum, title: c.title, topicLabel: a.title,
    qSubject: 'dilr', qTopic: a.id, qCaselet: c.title,
    problem: `**Context:** ${c.context}\n\n**Question:** ${q.statement}`,
    concept: 'CAT DILR Logical Deduction', method1: q.solution, method2: q.shortcut,
    finalAnswer: q.correctAnswer, trap: q.trap, isTita: false, options: q.options
  }))));
  let fam = pool.filter(q => trapFamilyOf(q) === familyId);
  if (fam.length < 4) fam = pool; // fallback: mixed drill if family is thin
  const qs = seededPick(fam, dailySeedInt() + familyId.length * 31, 8);
  const label = (TRAP_FAMILIES.find(f => f.id === familyId) || { label: 'Mixed traps' }).label;
  startTimedTest({
    key: 'trap-' + familyId + '-' + dailyDateKey(0),
    title: 'Trap Drill — ' + label,
    subtitle: `8 Qs • 12 min • one trap family`,
    sections: [{ name: 'Trap Set', minutes: 12, tag: 'trap', questions: qs }],
    showPercentile: false, historyKey: 'cat_trap_history', meta: {}
  });
}
function renderTrapFamilies() {
  const el = document.getElementById('trap-grid');
  if (!el) return;
  el.innerHTML = TRAP_FAMILIES.map(f => `
    <div class="topic-card" onclick="startTrapDrill('${f.id}')">
      <div class="topic-card-header"><span class="tier-pill tier-s">Trap</span></div>
      <div class="topic-card-title" style="font-size:1rem;">${f.label}</div>
      <div class="topic-meta"><span>8 Qs • 12 min</span></div>
      <button class="btn-start-sprint">Start Drill →</button>
    </div>
  `).join('');
}

// ==========================================================================
// F5 — SKIP-TRIAGE TRAINER (decide fast: Do-Now / Later / Skip, then execute)
// ==========================================================================
// (owned by core: let triageState = null;)
function startTriageDrill() {
  let pool = [];
  window.QA_TOPICS_DATA.forEach(t => (t.questions || []).forEach(q => pool.push(Object.assign({}, q, { topicLabel: t.title, qSubject: 'qa', qTopic: t.id }))));
  const qs = seededPick(pool, dailySeedInt() + 5, 8);
  triageState = { qs, idx: 0, calls: {}, t0: Date.now(), phase: 'triage', left: 15, timerInt: null };
  switchView('test');
  renderTriage();
  triageState.timerInt = setInterval(() => {
    if (!triageState || triageState.phase !== 'triage') return;
    triageState.left--;
    const el = document.getElementById('triage-timer');
    if (el) el.innerText = triageState.left + 's';
    if (triageState.left <= 0) {
      // Undecided default to Later
      triageState.qs.forEach((_, i) => { if (!triageState.calls[i]) triageState.calls[i] = 'later'; });
      finishTriagePhase();
    }
  }, 1000);
}
function triageCall(call) {
  const s = triageState;
  if (!s || s.phase !== 'triage') return;
  s.calls[s.idx] = call;
  if (s.idx < s.qs.length - 1) { s.idx++; renderTriage(); }
  else finishTriagePhase();
}
function finishTriagePhase() {
  const s = triageState;
  if (!s || s.phase !== 'triage') return;
  s.phase = 'execute';
  clearInterval(s.timerInt);
  const doNow = s.qs.map((q, i) => ({ q, i })).filter(x => s.calls[x.i] === 'now').map(x => x.q);
  const qs = doNow.length ? doNow : s.qs.slice(0, 3);
  startTimedTest({
    key: 'triage-' + dailyDateKey(0), title: 'Triage Execution', subtitle: `${qs.length} Do-Now Qs • 1.5 min each`,
    sections: [{ name: 'Execute', minutes: Math.max(3, Math.round(qs.length * 1.5)), tag: 'triage', questions: qs }],
    showPercentile: false, historyKey: 'cat_triage_history',
    meta: { triageCalls: Object.assign({}, s.calls), triageTotal: s.qs.length }
  });
}
function renderTriage() {
  const s = triageState;
  const runner = document.getElementById('test-runner');
  document.getElementById('test-report').style.display = 'none';
  runner.style.display = 'block';
  const q = s.qs[s.idx];
  runner.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div><div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">TRIAGE • decide, don’t solve</div>
        <h2 style="font-size:1.3rem; font-weight:800;">Q${s.idx + 1} of ${s.qs.length} — ${q.topicLabel}</h2></div>
        <div class="stopwatch-box">⏱️ <span id="triage-timer">${s.left}s</span></div>
      </div>
    </div>
    <div class="question-card">
      <div class="q-badge">${q.title || 'Question'}</div>
      <div class="question-text">${renderMarkdownLite(String(q.problem || '').slice(0, 600))}</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:16px;">
        <button class="btn-start-sprint" style="flex:1; background:var(--accent-emerald); color:#080d1a;" onclick="triageCall('now')">⚡ Do Now</button>
        <button class="btn-start-sprint" style="flex:1;" onclick="triageCall('later')">⏳ Later</button>
        <button class="btn-start-sprint" style="flex:1; background:transparent; border-color:var(--border-subtle); color:var(--text-secondary);" onclick="triageCall('skip')">🚫 Skip</button>
      </div>
      <div class="dash-metric-sub" style="margin-top:10px;">Rule of thumb: 2-mark-in-60-seconds → Now. Concept fog or 3+ steps → Later. Trap smell + long stem → Skip.</div>
    </div>
  `;
  runKaTeX(runner);
}

// ==========================================================================
// F8 — SPACED RECALL QUIZ (due cards become re-attempts, not re-reads)
// ==========================================================================
function resolveDiaryRef(entry) {
  if (!entry || !entry.qRef) return null;
  const { subject, topicId, qNum, caselet } = entry.qRef;
  const { questions } = getTopicQuestions(subject, topicId);
  if (subject === 'dilr' && caselet) {
    const hit = questions.find(q => String(q.qNum) === String(qNum) && (q.caseletId === caselet || q.title === caselet));
    if (hit) return hit;
  }
  return questions.find(q => String(q.qNum) === String(qNum)) || null;
}
function startRecallQuiz() {
  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  const due = entries.filter(e => isEntryDueToday(e));
  const qs = [];
  due.forEach(e => {
    const q = resolveDiaryRef(e);
    if (q) qs.push(Object.assign({}, q, { topicLabel: e.topic || 'Recall', diaryId: e.id, qSubject: q.qSubject || (e.qRef && e.qRef.subject), qTopic: q.qTopic || (e.qRef && e.qRef.topicId), qCaselet: q.qCaselet || (e.qRef && e.qRef.caselet) || null }));
  });
  if (!qs.length) { toast('No due cards with solvable questions. Log misses from tests to build recallable cards.'); return; }
  startTimedTest({
    key: 'recall-' + dailyDateKey(0), title: 'Spaced Recall Quiz', subtitle: `${qs.slice(0, 10).length} due cards • re-attempt, don’t re-read`,
    sections: [{ name: 'Recall', minutes: Math.max(5, qs.slice(0, 10).length * 2), tag: 'recall', questions: qs.slice(0, 10) }],
    showPercentile: false, historyKey: 'cat_recall_history',
    meta: {
      onDone: (r) => {
        try {
          const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
          const okIds = new Set();
          r.wrongList.forEach(() => {});
          // Mark correctly-recalled cards reviewed: reset their cycle by touching t-flags date
          (r.perQ || []).forEach(() => {});
          localStorage.setItem('cat_chook_diary', JSON.stringify(entries));
        } catch (e) {}
      }
    }
  });
}

// ==========================================================================
// F6 — PACE PLANNER (attempt targets + live behind/ahead tracker)
// ==========================================================================
function getPaceTargets() {
  try { return JSON.parse(localStorage.getItem('cat_pace_targets') || '{"VARC":16,"DILR":14,"Quant":14}'); }
  catch (e) { return { VARC: 16, DILR: 14, Quant: 14 }; }
}
function savePaceTargets(t) { localStorage.setItem('cat_pace_targets', JSON.stringify(t)); }
function paceStatus() {
  const t = activeTest;
  if (!t || t.submitted) return null;
  const targets = getPaceTargets();
  const sec = t.sections[t.secIdx];
  const key = sec.tag === 'qa' ? 'Quant' : (sec.tag === 'dilr' ? 'DILR' : (sec.tag === 'varc' ? 'VARC' : null));
  if (!key) return null;
  const target = targets[key] || sec.questions.length;
  const answered = Object.keys(t.answers[t.secIdx]).length;
  const elapsed = sec.minutes * 60 - t.secLeft;
  const expect = Math.floor((elapsed / (sec.minutes * 60)) * target);
  return { target, answered, expect, delta: answered - expect };
}
function renderPaceTargets() {
  const el = document.getElementById('pace-form');
  if (!el) return;
  const p = getPaceTargets();
  el.innerHTML = ['VARC', 'DILR', 'Quant'].map(k => `
    <label style="display:flex; align-items:center; gap:8px; font-size:0.85rem; font-weight:700;">${k}
      <input type="number" min="1" max="30" value="${p[k]}" id="pace-${k}" style="width:64px; padding:6px 8px; border-radius:8px; border:1px solid var(--border-subtle); background:var(--bg-subtle); color:var(--text-primary);" />
    </label>
  `).join('') + `<button class="btn-start-sprint" style="width:auto; padding:8px 16px;" onclick="savePaceForm()">Save Targets</button>`;
}
function savePaceForm() {
  const g = id => Math.max(1, parseInt((document.getElementById(id) || {}).value || '0', 10) || 0);
  savePaceTargets({ VARC: g('pace-VARC'), DILR: g('pace-DILR'), Quant: g('pace-Quant') });
  toast('Pace targets saved.');
}

// ==========================================================================
// F13 CLIENT — anonymous benchmark sync (offline-safe, opt-in via setup)
// Setup: localStorage cat_sync_url + cat_sync_secret (see worker/README notes
// in worker/src/index.js). Without them the app stays fully local.
// ==========================================================================
function getClientId() {
  let id = null;
  try {
    id = localStorage.getItem('cat_client_id');
    if (!id) {
      id = 'c' + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36);
      localStorage.setItem('cat_client_id', id);
    }
  } catch (e) { id = 'c-anon'; }
  return id;
}
function queueSyncAttempt(kind, title, score, max, acc) {
  let url = null, secret = '';
  try {
    url = localStorage.getItem('cat_sync_url');
    secret = localStorage.getItem('cat_sync_secret') || '';
  } catch (e) { return; }
  if (!url) return; // offline-only mode
  try {
    fetch(url.replace(/\/$/, '') + '/api/attempts', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-sync-secret': secret },
      body: JSON.stringify({ client_id: getClientId(), kind, title, score, max, acc })
    }).catch(() => {});
  } catch (e) {}
}
function renderBenchmarks() {
  const el = document.getElementById('bench-strip');
  if (!el) return;
  let url = null;
  try { url = localStorage.getItem('cat_sync_url'); } catch (e) {}
  if (!url) {
    el.innerHTML = `<div class="dash-metric-sub">📶 Offline mode — set <span class="mono-val">cat_sync_url</span> in site data after deploying the benchmark worker to compare with peers.</div>`;
    return;
  }
  el.innerHTML = `<div class="dash-metric-sub">Loading peer benchmarks…</div>`;
  ['mock', 'daily', 'trap'].forEach(kind => {
    fetch(url.replace(/\/$/, '') + '/api/benchmarks?kind=' + kind).then(r => r.json()).then(b => {
      const mine = myAvgAcc(kind);
      const row = document.getElementById('bench-' + kind);
      if (row && b && b.n) row.innerHTML = `<span>${kind.toUpperCase()} peers: n=${b.n}</span><span class="audit-score">you ${mine}% • p50 ${b.p50}% • p90 ${b.p90}%</span>`;
      else if (row) row.innerHTML = `<span>${kind.toUpperCase()}</span><span class="dash-score-badge">no peer data yet</span>`;
    }).catch(() => {});
  });
}
function myAvgAcc(kind) {
  const map = { mock: 'cat_mock_history', daily: 'cat_daily_history', trap: 'cat_trap_history' };
  try {
    const h = JSON.parse(localStorage.getItem(map[kind]) || '[]').slice(0, 10);
    if (!h.length) return 0;
    return Math.round(h.reduce((a, x) => a + (x.acc || 0), 0) / h.length);
  } catch (e) { return 0; }
}
function renderPaceLine() {
  const p = paceStatus();
  if (!p) return '';
  const state = p.delta >= 0 ? 'ahead' : 'behind';
  const diff = Math.abs(p.delta);
  return `🎯 Target ${p.target} • answered ${p.answered} • <strong class="pace-${state}">${diff === 0 ? 'on pace' : diff + ' ' + state}</strong>`;
}

// ==========================================================================
// F7 — ATTEMPT REPLAY (timeline of a saved mock/test)
// ==========================================================================
function openReplay(historyKey, idx) {
  let h = [];
  try { h = JSON.parse(localStorage.getItem(historyKey) || '[]'); } catch (e) {}
  const r = h[idx];
  if (!r || !r.perQ) { toast('No per-question timeline stored for this attempt.'); return; }
  switchView('test');
  document.getElementById('test-runner').style.display = 'none';
  const rep = document.getElementById('test-report');
  rep.style.display = 'block';
  const rows = r.perQ.map((q, i) => {
    const dot = q.status === 'correct' ? '🟢' : (q.status === 'wrong' ? '🔴' : '⚪');
    const secs = Math.round((q.ms || 0) / 1000);
    return `<div class="audit-sec-row"><span>${dot} ${q.sec} • Q${q.qi + 1} <span class="dash-score-badge">${String(q.title).slice(0, 30)}</span></span><span class="dash-score-badge">${secs}s</span></div>
    <div class="audit-bar"><div class="audit-fill ${secs > 120 ? 'weak' : ''}" style="width:${Math.min(100, Math.round(100 * secs / 180))}%;"></div></div>`;
  }).join('');
  rep.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">REPLAY • ${r.title} • ${String(r.date).slice(0, 10)}</div>
      <h2 style="font-size:1.35rem; font-weight:800;">Where the minutes went — ${r.score}/${r.max}</h2>
      <div class="dash-metric-sub">Bars scale to 3 min per question. Red bars bled time — set a 90-second bail rule for lookalikes.</div>
      <div style="margin-top:12px;"><button class="btn-start-sprint" style="width:auto;" onclick="switchView('mock')">← Back to Mocks</button></div>
    </div>
    <div class="card">${rows}</div>
  `;
  rep.scrollIntoView({ behavior: 'smooth' });
}
function renderReplayList() {
  const el = document.getElementById('replay-list');
  if (!el) return;
  let items = [];
  [['cat_mock_history', 'Full Mock'], ['cat_daily_history', 'Daily'], ['cat_topictest_history', 'Topic Test']].forEach(([k, label]) => {
    try {
      JSON.parse(localStorage.getItem(k) || '[]').forEach((h, i) => {
        if (h.perQ) items.push({ k, i, label, date: h.date, score: h.score, max: h.max });
      });
    } catch (e) {}
  });
  items = items.slice(0, 10);
  el.innerHTML = items.length ? items.map((x, n) => `
    <div class="audit-sec-row"><span>${x.label} • ${String(x.date).slice(0, 10)} <span class="dash-score-badge">${x.score}/${x.max}</span></span>
    <button class="btn-topic-test" style="flex:none; padding:6px 12px;" onclick="openReplay('${x.k}', ${x.i})">▶ Replay</button></div>
  `).join('') : '<div class="dash-metric-sub">Finish any timed test — its timeline lands here.</div>';
}

// ==========================================================================
// F11 — EXAM-HALL STRICT MODE (fullscreen, no Mercy rule messaging)
// ==========================================================================
function startFullMockStrict() {
  try {
    const de = document.documentElement;
    if (de.requestFullscreen && !document.fullscreenElement) de.requestFullscreen().catch(() => {});
  } catch (e) {}
  startFullMock();
  setTimeout(() => {
    const banner = document.getElementById('test-runner');
    if (banner) {
      const d = document.createElement('div');
      d.className = 'hall-banner';
      d.innerText = '🔒 EXAM-HALL MODE — no pause, no section revisit. Esc exits fullscreen; the clock keeps running.';
      banner.prepend(d);
    }
  }, 300);
}

// ==========================================================================
// F3 — PYQ PAPER LIBRARY (import real papers as JSON + replay saved mocks)
// ==========================================================================
function getPyqLibrary() {
  try { return JSON.parse(localStorage.getItem('cat_pyq_library') || '[]'); }
  catch (e) { return []; }
}
function renderPyqLibrary() {
  const el = document.getElementById('pyq-list');
  if (!el) return;
  const lib = getPyqLibrary();
  // Saved full mocks double as re-sittable papers
  let mocks = [];
  try { mocks = JSON.parse(localStorage.getItem('cat_mock_history') || '[]').slice(0, 5); } catch (e) {}
  el.innerHTML = `
    ${lib.length ? lib.map((p, i) => `
      <div class="audit-sec-row"><span>📄 ${p.title} <span class="dash-score-badge">${p.questions.length} Qs • ${p.year || ''} ${p.slot || ''}</span></span>
      <button class="btn-topic-test" style="flex:none; padding:6px 12px;" onclick="startPyqPaper(${i})">▶ Sit Paper</button></div>
    `).join('') : '<div class="dash-metric-sub">No imported papers yet — paste a PYQ JSON below, or re-sit a saved mock.</div>'}
    <div style="margin-top:10px; font-weight:800; font-size:0.9rem;">Your saved mocks (re-sit)</div>
    ${mocks.length ? mocks.map((m, i) => `
      <div class="audit-sec-row"><span>🏆 ${m.title} • ${String(m.date).slice(0, 10)} <span class="dash-score-badge">${m.score}/${m.max}</span></span>
      <button class="btn-topic-test" style="flex:none; padding:6px 12px;" onclick="openReplay('cat_mock_history', ${i})">▶ Replay</button></div>
    `).join('') : '<div class="dash-metric-sub">No saved mocks yet.</div>'}
  `;
}
function importPyqJson() {
  const ta = document.getElementById('pyq-import-box');
  if (!ta || !ta.value.trim()) { toast('Paste a PYQ JSON first. Format: {"title","year","slot","questions":[{problem,options,finalAnswer,isTita,method1,method2,trap}]}'); return; }
  try {
    const p = JSON.parse(ta.value);
    if (!p.questions || !p.questions.length) throw new Error('no questions');
    const lib = getPyqLibrary();
    lib.unshift({ title: p.title || 'Imported Paper', year: p.year || '', slot: p.slot || '', questions: p.questions });
    localStorage.setItem('cat_pyq_library', JSON.stringify(lib.slice(0, 10)));
    ta.value = '';
    renderPyqLibrary();
    toast('Paper imported. Sit it anytime, offline.');
  } catch (e) { toast('Invalid PYQ JSON: ' + e.message); }
}
function startPyqPaper(i) {
  const p = getPyqLibrary()[i];
  if (!p) return;
  const qs = p.questions.map((q, n) => Object.assign({}, q, { qNum: n + 1, topicLabel: p.title, title: q.title || ('Q' + (n + 1)) }));
  const mins = Math.max(10, Math.round(qs.length * 1.5));
  startTimedTest({
    key: 'pyq-' + i + '-' + Date.now(), title: p.title, subtitle: `${qs.length} Qs • ${mins} min • ${p.year || ''} ${p.slot || ''}`,
    sections: [{ name: 'Paper', minutes: mins, tag: 'pyq', questions: qs }],
    showPercentile: false, historyKey: 'cat_pyq_history', meta: {}
  });
}


