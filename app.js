/* ==========================================================================
   CAT MASTERY 99 PWA - APPLICATION CONTROLLER & ENGINE
   Handles: 4-Phase Sprint Engine, Chook Diary, CBT Simulator, KaTeX, PWA SW
   ========================================================================== */

// --- Global State ---
let currentView = 'dashboard';
let deferredInstallPrompt = null;

// Sprint State
let activeSprint = {
  subject: 'qa',
  topic: null,
  currentStep: 1,
  questions: [],
  currentIndex: 0,
  userAnswers: {}, // { qIndex: { answer: '', status: 'answered'|'marked'|'unvisited' } }
  stopwatchSeconds: 0,
  stopwatchInterval: null,
  autopsyIndex: 0
};

// Error Logger State
let selectedTag = '[CON]';

// Sectional Mock State
let activeMock = {
  isRunning: false,
  secondsLeft: 40 * 60,
  timerInterval: null,
  questions: [],
  currentIndex: 0,
  userAnswers: {}
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initServiceWorker();
  initPwaInstall();
  renderHubs();
  renderFormulaCards();
  renderChookDiaryList();
  updateDashboardStats();
  runKaTeX();
});

// ==========================================================================
// PWA & SERVICE WORKER
// ==========================================================================
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('[PWA] Service Worker registered', reg.scope))
        .catch(err => console.warn('[PWA] Service Worker registration failed', err));
    });
  }
}

function initPwaInstall() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btn = document.getElementById('btn-install-app');
    if (btn) btn.style.display = 'flex';
  });
}

function triggerPwaInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('[PWA] User installed the app');
      }
      deferredInstallPrompt = null;
      document.getElementById('btn-install-app').style.display = 'none';
    });
  }
}

// ==========================================================================
// ROUTER & VIEW SWITCHER
// ==========================================================================
function switchView(viewName) {
  currentView = viewName;
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-nav-btn').forEach(b => b.classList.remove('active'));

  const targetPanel = document.getElementById('view-' + viewName);
  const targetNav = document.getElementById('nav-' + viewName);
  const targetMobNav = document.getElementById('mob-nav-' + viewName);

  if (targetPanel) targetPanel.classList.add('active');
  if (targetNav) targetNav.classList.add('active');
  if (targetMobNav) targetMobNav.classList.add('active');

  const titles = {
    'dashboard': 'Dashboard & Sprint Hub',
    'sprint': '4-Phase Accelerated Sprint Engine',
    'qa': 'Quant Hub (17 Master Topics - 100% Arithmetic & Algebra)',
    'dilr': 'DILR Hub (6 Core Set Archetypes)',
    'varc': 'VARC Hub (5 Core Components)',
    'diary': 'Chook Diary (Active Mistake Vault)',
    'formulas': 'High-Yield Formula Flashcards',
    'mock': '40-Minute CAT Sectional CBT Simulator'
  };
  document.getElementById('page-header-title').innerText = titles[viewName] || 'CAT Mastery 99';

  // Close mobile sidebar if open
  document.getElementById('sidebar').classList.remove('open');

  runKaTeX();
}

function toggleMobileSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ==========================================================================
// KATEX RENDERING HELPER
// ==========================================================================
function runKaTeX(element = document.body) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(element, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn('KaTeX rendering error', e);
    }
  }
}

// ==========================================================================
// CURRICULUM HUBS RENDERING
// ==========================================================================
const paretoYieldMap = {
  'qa_tsd': '~2.0 Qs/paper • Tier 1 Master',
  'qa_quad': '~2.0 Qs/paper • Tier 1 Master',
  'qa_tw': '~1.7 Qs/paper • Tier 1 Master',
  'qa_ratio': '~1.5 Qs/paper • Tier 1 Master',
  'qa_seq': '~1.4 Qs/paper • Tier 1 Master',
  'qa_logs': '~1.4 Qs/paper • Tier 1 Master',
  'qa_mix': '~1.3 Qs/paper • Tier 1 Master',
  'qa_avg': '~1.1 Qs/paper • Tier 1 Master',
  'qa_pl': '~1.0 Qs/paper • Tier 1 Master',
  'qa_perc': '~0.8 Qs/paper • Tier 1 Master',
  'qa_si_ci': '~0.7 Qs/paper • Tier 1 Master',
  'qa_func': '~1.3 Qs/paper • Tier 1 Master',
  'qa_ineq': '~1.2 Qs/paper • Tier 1 Master',
  'qa_maxmin': '~0.5 Qs/paper • Tier 1 Master',
  'qa_poly': '~1.0 Qs/paper • Tier 1 Master',
  'qa_pnc': '~1.2 Qs/paper • High-Yield',
  'qa_prob': '~0.8 Qs/paper • High-Yield'
};

function renderHubs() {
  // 1. Quant Hub
  const qaContainer = document.getElementById('qa-topics-container');
  if (qaContainer && window.QA_TOPICS_DATA) {
    qaContainer.innerHTML = window.QA_TOPICS_DATA.map(t => `
      <div class="topic-card" onclick="startTopicSprint('qa', '${t.id}')">
        <div class="topic-card-header">
          <span class="tier-pill ${t.tier === 'Tier S' ? 'tier-s' : 'tier-a'}">${t.tier}</span>
          <span style="font-size:0.8rem; color:var(--accent-cyan); font-weight:700;">${t.domain}</span>
        </div>
        <div class="topic-card-title">${t.title}</div>
        <div class="topic-meta">
          <span>${t.weightage}</span> • <span>${t.prepTime}</span>
        </div>
        <div class="pareto-yield-badge">${paretoYieldMap[t.id] || '~1.5 Qs/paper • High-Yield'}</div>
        <div class="topic-card-actions">
          <button class="btn-start-sprint" style="flex:1;">Start Sprint →</button>
          <button class="btn-card-video" onclick="event.stopPropagation(); openTopicVideoLectureById('qa', '${t.id}')" title="Watch Rodha Class Masterclass">
            <span>▶</span> Video
          </button>
        </div>
      </div>
    `).join('');
  }

  // 2. DILR Hub
  const dilrContainer = document.getElementById('dilr-topics-container');
  if (dilrContainer && window.DILR_ARCHETYPES_DATA) {
    dilrContainer.innerHTML = window.DILR_ARCHETYPES_DATA.map(d => `
      <div class="topic-card" onclick="startTopicSprint('dilr', '${d.id}')">
        <div class="topic-card-header">
          <span class="tier-pill ${d.tier === 'Tier S' ? 'tier-s' : 'tier-a'}">${d.tier}</span>
          <span style="font-size:0.8rem; color:var(--accent-emerald); font-weight:700;">DILR Set</span>
        </div>
        <div class="topic-card-title">${d.title}</div>
        <div class="topic-meta">
          <span>${d.weightage}</span> • <span>${d.prepTime}</span>
        </div>
        <div class="topic-card-actions">
          <button class="btn-start-sprint" style="flex:1;">Start Caselet →</button>
          <button class="btn-card-video" onclick="event.stopPropagation(); openTopicVideoLectureById('dilr', '${d.id}')" title="Watch Rodha Class Masterclass">
            <span>▶</span> Video
          </button>
        </div>
      </div>
    `).join('');
  }

  // 3. VARC Hub
  const varcContainer = document.getElementById('varc-topics-container');
  if (varcContainer && window.VARC_MODULES_DATA) {
    varcContainer.innerHTML = window.VARC_MODULES_DATA.map(v => `
      <div class="topic-card" onclick="startTopicSprint('varc', '${v.id}')">
        <div class="topic-card-header">
          <span class="tier-pill ${v.tier === 'Tier S' ? 'tier-s' : 'tier-a'}">${v.tier}</span>
          <span style="font-size:0.8rem; color:var(--accent-indigo); font-weight:700;">VARC Drill</span>
        </div>
        <div class="topic-card-title">${v.title}</div>
        <div class="topic-meta">
          <span>${v.weightage}</span> • <span>${v.prepTime}</span>
        </div>
        <div class="topic-card-actions">
          <button class="btn-start-sprint" style="flex:1;">Start Drill →</button>
          <button class="btn-card-video" onclick="event.stopPropagation(); openTopicVideoLectureById('varc', '${v.id}')" title="Watch Rodha Class Masterclass">
            <span>▶</span> Video
          </button>
        </div>
      </div>
    `).join('');
  }
}

// ==========================================================================
// 4-PHASE ACCELERATED SPRINT ENGINE
// ==========================================================================
function startTopicSprint(subject, topicId) {
  activeSprint.subject = subject;
  activeSprint.currentStep = 1;
  activeSprint.currentIndex = 0;
  activeSprint.autopsyIndex = 0;
  activeSprint.userAnswers = {};

  if (subject === 'qa') {
    activeSprint.topic = window.QA_TOPICS_DATA.find(t => t.id === topicId);
    activeSprint.questions = activeSprint.topic.questions || [];
  } else if (subject === 'dilr') {
    activeSprint.topic = window.DILR_ARCHETYPES_DATA.find(t => t.id === topicId);
    // Flatten caselet questions for the sprint practice
    let qs = [];
    (activeSprint.topic.caselets || []).forEach(c => {
      (c.questions || []).forEach(q => {
        qs.push({
          qNum: q.qNum,
          title: c.title,
          problem: `**Context:** ${c.context}\n\n**Question:** ${q.statement}`,
          concept: "CAT DILR Logical Deduction",
          method1: q.solution,
          method2: q.shortcut,
          finalAnswer: q.correctAnswer,
          trap: q.trap,
          isTita: false,
          options: q.options
        });
      });
    });
    activeSprint.questions = qs;
  } else if (subject === 'varc') {
    activeSprint.topic = window.VARC_MODULES_DATA.find(t => t.id === topicId);
    let qs = [];
    (activeSprint.topic.drills || []).forEach((d, idx) => {
      let stmt = d.paragraph || d.passage || (d.sentences ? d.sentences.join('\n') : d.context || '');
      let prob = `${stmt}\n\n${d.question || d.sentenceToInsert ? 'Insert: ' + (d.sentenceToInsert || '') : ''}`;
      qs.push({
        qNum: idx + 1,
        title: activeSprint.topic.title,
        problem: prob,
        concept: "VARC Scope & Structural Logic",
        method1: d.explanation,
        method2: d.shortcut,
        finalAnswer: d.correctAnswer,
        trap: d.trap,
        isTita: !d.options || d.options.length === 0,
        options: d.options || []
      });
    });
    activeSprint.questions = qs;
  }

  // Load Step 1
  renderSprintStep1();
  switchView('sprint');
  jumpSprintStep(1);
}

function jumpSprintStep(stepNum) {
  activeSprint.currentStep = stepNum;

  // Update Stepper UI
  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById('stepper-' + i);
    const sub = document.getElementById('sprint-step-' + i);
    if (node) {
      node.classList.remove('active');
      if (i < stepNum) node.classList.add('completed');
      else node.classList.remove('completed');
      if (i === stepNum) node.classList.add('active');
    }
    if (sub) {
      sub.style.display = (i === stepNum) ? 'block' : 'none';
    }
  }

  if (stepNum === 2) {
    startSprintStopwatch();
    renderSprintQuestion();
    renderSprintPalette();
  } else {
    stopSprintStopwatch();
  }

  if (stepNum === 3) {
    renderAutopsyQuestion();
  }

  runKaTeX();
}

function advanceSprintStep(nextStep) {
  jumpSprintStep(nextStep);
}

// Step 1: Render Concept & Formulas with Interactive Power Features
function renderSprintStep1() {
  const box = document.getElementById('sprint-theory-box');
  const t = activeSprint.topic;
  if (!box || !t) return;

  // Retrieve interactive assets for this topic
  const audioData = getTopicAudioCapsule(t.id);
  const microData = getTopicMicroCheckpoints(t.id);
  const splitData = getTopicSplitComparison(t.id);
  const trapData = getTopicTrapDefuser(t.id);

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px; flex-wrap:wrap; gap:12px;">
      <div>
        <span class="tier-pill ${t.tier === 'Tier S' ? 'tier-s' : 'tier-a'}">${t.tier}</span>
        <h2 style="font-size:1.6rem; font-weight:800; margin-top:8px;">${t.title}</h2>
      </div>
      <div style="text-align:right;">
        <div style="font-weight:700; color:var(--accent-cyan);">${t.weightage}</div>
        <div style="font-size:0.8rem; color:var(--text-muted);">${t.prepTime} to master</div>
      </div>
    </div>

    <!-- 1. 30-Second Voice Audio Capsule & Live Highlight -->
    <div class="audio-capsule-card">
      <button class="audio-play-btn" id="btn-audio-capsule" onclick="toggleAudioCapsule()" title="Listen to Ravi Sir's 30s Golden Rule">▶</button>
      <div style="flex:1;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <strong style="color:var(--accent-cyan); font-size:0.95rem;">🎙️ 30-Second Audio Capsule: Ravi Sir's Core Rule</strong>
          <div style="display:flex; gap:6px;">
            <button class="tag-pill-btn" style="padding:2px 8px; font-size:0.75rem;" onclick="setAudioSpeed(1.0)">1x</button>
            <button class="tag-pill-btn" style="padding:2px 8px; font-size:0.75rem;" onclick="setAudioSpeed(1.25)">1.25x</button>
            <button class="tag-pill-btn" style="padding:2px 8px; font-size:0.75rem;" onclick="setAudioSpeed(1.5)">1.5x</button>
          </div>
        </div>
        <div id="audio-capsule-text-container" style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">
          ${audioData.bullets.map((b, i) => `<span class="capsule-text-line" id="capsule-line-${i}">${b}</span> `).join('')}
        </div>
      </div>
    </div>

    <!-- 1.5. Rodha Video Masterclass Card -->
    ${t.videoLecture ? `
      <div class="rodha-video-card">
        <div class="video-card-meta">
          <div class="video-card-icon">📺</div>
          <div>
            <div class="video-card-title">${t.videoLecture.title}</div>
            <div class="video-card-desc">
              <span style="color:var(--accent-cyan); font-weight:700;">${t.videoLecture.duration}</span> • 
              <span>${t.videoLecture.highlight}</span>
            </div>
          </div>
        </div>
        <div class="video-card-actions">
          <button class="btn-watch-in-app" onclick="openVideoTheater('${encodeURIComponent(t.videoLecture.title)}', '${t.videoLecture.embedUrl}', '${t.videoLecture.directUrl}')">
            <span>▶</span> Watch in App
          </button>
          <a href="${t.videoLecture.directUrl}" target="_blank" rel="noopener noreferrer" class="btn-watch-ext" title="Open in YouTube">
            <span>↗</span> YouTube
          </a>
        </div>
      </div>
    ` : ''}
    
    <!-- Theory Textbook Note -->
    <div class="theory-content">
      ${t.theoryHtml}
    </div>

    <!-- 2. Live Formula Sandbox (Interactive Sliders) -->
    <div id="step1-sandbox-area">
      ${renderFormulaSandboxHtml(t.id)}
    </div>

    <!-- 3. In-Line Micro-Checkpoints (Tap-to-Test) -->
    <div class="micro-checkpoint-box">
      <div class="micro-check-title">
        <span>⚡ In-Line Micro-Checkpoint: Instant Tap-to-Test</span>
      </div>
      <p style="font-size:0.9rem; color:var(--text-primary); margin-bottom:8px;">${microData.question}</p>
      <div class="micro-opts-list">
        ${microData.options.map((opt, i) => `
          <button class="micro-opt-btn" onclick="checkMicroCheckpoint(this, ${i === microData.correctIdx}, '${microData.explanation.replace(/'/g, "\'")}')">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div id="micro-feedback-box" style="margin-top:10px; font-size:0.85rem; min-height:20px; font-weight:600;"></div>
    </div>

    <!-- 4. Split-Screen Conventional vs. Rodha Shortcut Slider -->
    <div class="split-slider-box">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; flex-wrap:wrap; gap:8px;">
        <h4 style="margin:0; font-weight:800; font-size:1.05rem;">⚖️ Split-Screen Method Comparison</h4>
        <div class="split-toggle-tabs">
          <button class="split-tab-btn active" id="tab-split-both" onclick="setSplitMode('both')">Split View</button>
          <button class="split-tab-btn" id="tab-split-conv" onclick="setSplitMode('conv')">Conventional Only</button>
          <button class="split-tab-btn" id="tab-split-rodha" onclick="setSplitMode('rodha')">Rodha Shortcut Only</button>
        </div>
      </div>
      <div class="split-comparison-viewport" id="split-comparison-viewport">
        <div class="split-side-card conventional" id="split-card-conv">
          <div style="font-weight:800; color:var(--accent-rose); margin-bottom:6px; display:flex; justify-content:space-between;">
            <span>❌ Conventional Textbook Method</span>
            <span>⏱️ 2.5 min</span>
          </div>
          <div>${splitData.conv}</div>
        </div>
        <div class="split-side-card rodha" id="split-card-rodha">
          <div style="font-weight:800; color:var(--accent-emerald); margin-bottom:6px; display:flex; justify-content:space-between;">
            <span>⚡ Rodha Shortcut (Method 2)</span>
            <span>⏱️ 30 sec (-80% time)</span>
          </div>
          <div>${splitData.rodha}</div>
        </div>
      </div>
    </div>

    <!-- 5. Trap Defuser Blunder-Hunter Game -->
    <div class="trap-defuser-arena">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div>
          <h4 style="margin:0; font-weight:800; color:var(--accent-rose); font-size:1.05rem;">💣 "Trap Defuser" Blunder-Hunter</h4>
          <p style="margin:4px 0 0; font-size:0.8rem; color:var(--text-muted);">A student attempted this CAT question. Click the EXACT line where the fatal blunder occurred to defuse the trap!</p>
        </div>
        <span style="font-size:1.8rem;">💣</span>
      </div>
      <div style="font-size:0.9rem; font-weight:700; margin-bottom:12px; color:var(--accent-cyan);">${trapData.question}</div>
      <div class="trap-steps-list">
        ${trapData.steps.map((s, idx) => `
          <div class="trap-step-line" onclick="defuseTrapLine(this, ${idx === trapData.trapIdx}, '${trapData.autopsy.replace(/'/g, "\'")}')">
            <span><strong>Line ${idx + 1}:</strong> ${s}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">Defuse 🎯</span>
          </div>
        `).join('')}
      </div>
      <div id="trap-defuser-feedback" style="margin-top:12px; font-weight:700; font-size:0.9rem; min-height:24px;"></div>
    </div>

    ${t.formulas && t.formulas.length > 0 ? `
      <h4 style="margin-top:24px;">🔑 Core Formula Deck</h4>
      <div class="formula-card-grid">
        ${t.formulas.map(f => `
          <div class="formula-mini-card">
            <div style="font-size:1.1rem; color:var(--accent-cyan); font-weight:600;">$$${f.formula}$$</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  initSandboxSliders(t.id);
  runKaTeX();
}

// Step 2: Timed Practice Stopwatch with 90-Second Traffic-Light Pacing Metronome
function startSprintStopwatch() {
  if (activeSprint.stopwatchInterval) clearInterval(activeSprint.stopwatchInterval);
  activeSprint.stopwatchSeconds = 0;
  updatePacingMetronome(0);

  const watchEl = document.getElementById('sprint-stopwatch');
  activeSprint.stopwatchInterval = setInterval(() => {
    activeSprint.stopwatchSeconds++;
    const m = String(Math.floor(activeSprint.stopwatchSeconds / 60)).padStart(2, '0');
    const s = String(activeSprint.stopwatchSeconds % 60).padStart(2, '0');
    if (watchEl) watchEl.innerText = `${m}:${s}`;
    updatePacingMetronome(activeSprint.stopwatchSeconds);
  }, 1000);
}

function updatePacingMetronome(seconds) {
  const g = document.getElementById('bulb-green');
  const a = document.getElementById('bulb-amber');
  const r = document.getElementById('bulb-red');
  const txt = document.getElementById('pacing-status-text');
  if (!g || !a || !r || !txt) return;

  g.classList.remove('active');
  a.classList.remove('active');
  r.classList.remove('active');

  if (seconds <= 60) {
    g.classList.add('active');
    txt.style.color = 'var(--accent-emerald)';
    txt.innerText = '🟢 Optimal Pacing (0-60s) - Grasp & Setup';
  } else if (seconds <= 90) {
    a.classList.add('active');
    txt.style.color = 'var(--accent-amber)';
    txt.innerText = '🟡 Decision Threshold (61-90s) - Execute or Bail';
    if (seconds === 61) playAudioTone(520, 'sine', 0.15);
  } else {
    r.classList.add('active');
    txt.style.color = 'var(--accent-rose)';
    txt.innerText = '🔴 DANGER ZONE (>90s) - Bail unless final arithmetic!';
    if (seconds === 91) playAudioTone(280, 'sawtooth', 0.35);
  }
}

function stopSprintStopwatch() {
  if (activeSprint.stopwatchInterval) {
    clearInterval(activeSprint.stopwatchInterval);
    activeSprint.stopwatchInterval = null;
  }
}

// Step 2: Render Practice Question
function renderSprintQuestion() {
  const qs = activeSprint.questions;
  const idx = activeSprint.currentIndex;
  if (!qs || qs.length === 0 || !qs[idx]) return;

  const q = qs[idx];
  document.getElementById('sprint-q-badge').innerText = `Question ${idx + 1} of ${qs.length} (${q.title || ''})`;
  document.getElementById('sprint-q-text').innerHTML = formatMarkdownText(q.problem);

  // Provenance & 80/20 Yield Badges
  const provEl = document.getElementById('sprint-provenance-pill');
  if (provEl) {
    const defaultProv = `${(activeSprint.subject || 'QA').toUpperCase()} • CAT ${2020 + (idx % 6)} Slot ${(idx % 3) + 1} Caliber • ${q.options && q.options.length ? 'MCQ (+3/-1)' : 'TITA'}`;
    provEl.innerText = q.provenance || defaultProv;
  }

  const yieldEl = document.getElementById('sprint-yield-pill');
  if (yieldEl) {
    const topicId = activeSprint.topic ? activeSprint.topic.id : '';
    yieldEl.innerText = paretoYieldMap[topicId] || 'Tier 1 Master • ~1.8 Qs/paper';
  }

  const optContainer = document.getElementById('sprint-options-container');
  optContainer.innerHTML = '';

  const curAns = activeSprint.userAnswers[idx] ? activeSprint.userAnswers[idx].answer : '';

  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn' + (curAns === opt ? ' selected' : '');
      btn.innerHTML = `<strong>${String.fromCharCode(65 + optIdx)})</strong> <span>${opt}</span>`;
      btn.onclick = () => selectSprintAnswer(opt);
      optContainer.appendChild(btn);
    });
  } else {
    // TITA Input
    optContainer.innerHTML = `
      <label style="font-size:0.85rem; color:var(--text-muted); font-weight:700;">Type In The Answer (TITA):</label>
      <input type="text" id="tita-sprint-input" class="tita-input" value="${curAns}" placeholder="Enter numerical or integer answer..." oninput="selectSprintAnswer(this.value)" />
    `;
  }

  runKaTeX();
}

function selectSprintAnswer(val) {
  const idx = activeSprint.currentIndex;
  if (!activeSprint.userAnswers[idx]) {
    activeSprint.userAnswers[idx] = { answer: val, status: 'answered' };
  } else {
    activeSprint.userAnswers[idx].answer = val;
    activeSprint.userAnswers[idx].status = 'answered';
  }
  renderSprintQuestion();
  renderSprintPalette();
}

function markSprintForReview() {
  const idx = activeSprint.currentIndex;
  if (!activeSprint.userAnswers[idx]) {
    activeSprint.userAnswers[idx] = { answer: '', status: 'marked' };
  } else {
    activeSprint.userAnswers[idx].status = 'marked';
  }
  renderSprintPalette();
  nextSprintQuestion();
}

function nextSprintQuestion() {
  if (activeSprint.currentIndex < activeSprint.questions.length - 1) {
    activeSprint.currentIndex++;
    renderSprintQuestion();
    renderSprintPalette();
  }
}

function prevSprintQuestion() {
  if (activeSprint.currentIndex > 0) {
    activeSprint.currentIndex--;
    renderSprintQuestion();
    renderSprintPalette();
  }
}

let currentPaletteFilter = 'all';

function setPaletteFilter(filterType) {
  currentPaletteFilter = filterType;
  document.querySelectorAll('.palette-filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`pal-filter-${filterType}`);
  if (activeBtn) activeBtn.classList.add('active');
  renderSprintPalette();
}

function renderSprintPalette() {
  const total = activeSprint.questions.length;
  let answered = 0;
  let marked = 0;

  // 1. Sidebar Palette
  const grid = document.getElementById('sprint-palette-grid');
  if (grid) {
    grid.innerHTML = activeSprint.questions.map((q, i) => {
      const userState = activeSprint.userAnswers[i];
      let cls = 'palette-btn';
      const isAnswered = userState && userState.status === 'answered';
      const isMarked = userState && userState.status === 'marked';
      const isTodo = !isAnswered && !isMarked;

      if (i === activeSprint.currentIndex) cls += ' active';
      if (isAnswered) {
        cls += ' answered';
        answered++;
      }
      if (isMarked) {
        cls += ' marked';
        marked++;
      }

      let isVisible = true;
      if (currentPaletteFilter === 'todo' && !isTodo) isVisible = false;
      if (currentPaletteFilter === 'flagged' && !isMarked) isVisible = false;
      if (currentPaletteFilter === 'done' && !isAnswered) isVisible = false;

      const style = isVisible ? '' : 'display:none;';
      return `<button class="${cls}" style="${style}" onclick="jumpSprintQuestion(${i})">${i + 1}</button>`;
    }).join('');
  }

  // 2. Sticky Horizontal Palette Bar (CBT Style)
  const horizTrack = document.getElementById('sprint-horizontal-palette');
  if (horizTrack) {
    horizTrack.innerHTML = activeSprint.questions.map((q, i) => {
      const userState = activeSprint.userAnswers[i];
      let cls = 'palette-pill-btn';
      const isAnswered = userState && userState.status === 'answered';
      const isMarked = userState && userState.status === 'marked';
      const isTodo = !isAnswered && !isMarked;

      if (i === activeSprint.currentIndex) cls += ' active';
      if (isAnswered) cls += ' answered';
      if (isMarked) cls += ' marked';

      let isVisible = true;
      if (currentPaletteFilter === 'todo' && !isTodo) isVisible = false;
      if (currentPaletteFilter === 'flagged' && !isMarked) isVisible = false;
      if (currentPaletteFilter === 'done' && !isAnswered) isVisible = false;

      const style = isVisible ? '' : 'display:none;';
      return `<button class="${cls}" style="${style}" onclick="jumpSprintQuestion(${i})" title="Jump to Q${i+1}">${i + 1}</button>`;
    }).join('');
  }

  // 3. Update Palette Summary & Title
  const summaryEl = document.getElementById('sprint-palette-summary');
  const countEl = document.getElementById('palette-count-summary');
  const remaining = Math.max(0, total - answered);
  if (summaryEl) {
    summaryEl.innerText = `${answered} answered • ${marked} flagged • ${remaining} to-do`;
  }
  if (countEl) {
    countEl.innerText = `${answered}/${total} Done`;
  }

  const titleEl = document.getElementById('sprint-topic-header-title');
  if (titleEl && activeSprint.topic) {
    titleEl.innerText = activeSprint.topic.title || 'Topic Sprint Practice';
  }
}

function jumpSprintQuestion(i) {
  activeSprint.currentIndex = i;
  renderSprintQuestion();
  renderSprintPalette();
}

function finishTimedPractice() {
  stopSprintStopwatch();
  // Record sprint stats to local storage
  incrementStat('cat_sprints_done', 1);
  incrementStat('cat_qs_solved', activeSprint.questions.length);
  updateDashboardStats();

  jumpSprintStep(3);
}

// Step 3: Autopsy (Method 2 Rodha Shortcut)
function renderAutopsyQuestion() {
  const qs = activeSprint.questions;
  const idx = activeSprint.autopsyIndex;
  if (!qs || qs.length === 0 || !qs[idx]) return;

  const q = qs[idx];
  document.getElementById('autopsy-q-title').innerText = `Question ${idx + 1} Solution Autopsy`;
  document.getElementById('autopsy-final-ans').innerText = `Answer: ${q.finalAnswer}`;
  document.getElementById('autopsy-q-stmt').innerHTML = formatMarkdownText(q.problem);
  document.getElementById('autopsy-m1-text').innerHTML = formatMarkdownText(q.method1);
  document.getElementById('autopsy-m2-text').innerHTML = formatMarkdownText(q.method2);
  document.getElementById('autopsy-trap-text').innerText = q.trap || "Watch out for false assumptions and parity bounds.";

  const topicVideo = activeSprint.topic ? activeSprint.topic.videoLecture : null;
  const m2Title = document.querySelector('#sprint-step-3 .m2 .method-title');
  if (m2Title) {
    if (topicVideo) {
      m2Title.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
          <span><span>🚀</span> Method 2: Rodha Fast Shortcut / Inspection</span>
          <button class="btn-card-video" style="padding:3px 10px; font-size:0.75rem;" onclick="openTopicVideoLecture()">
            <span>▶</span> Watch Shortcut
          </button>
        </div>
      `;
    } else {
      m2Title.innerHTML = '<span>🚀</span> Method 2: Rodha Fast Shortcut / Inspection';
    }
  }

  runKaTeX();
}

function nextAutopsyQuestion() {
  if (activeSprint.autopsyIndex < activeSprint.questions.length - 1) {
    activeSprint.autopsyIndex++;
    renderAutopsyQuestion();
  }
}

function prevAutopsyQuestion() {
  if (activeSprint.autopsyIndex > 0) {
    activeSprint.autopsyIndex--;
    renderAutopsyQuestion();
  }
}

// Step 4: Chook Diary Logger
function selectErrorTag(tag) {
  selectedTag = tag;
  document.querySelectorAll('.tag-pill-btn').forEach(b => {
    b.classList.toggle('selected', b.innerText.includes(tag));
  });
}

function saveChookDiaryEntry() {
  const q = activeSprint.questions[activeSprint.autopsyIndex] || activeSprint.questions[0];
  const userLesson = document.getElementById('diary-note-input').value.trim();

  const entry = {
    id: 'ERR_' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    subject: activeSprint.subject.toUpperCase(),
    topic: activeSprint.topic ? activeSprint.topic.title : 'General',
    tag: selectedTag,
    questionSummary: q ? q.problem.substring(0, 150) + '...' : 'Question mistake',
    correctAnswer: q ? q.finalAnswer : '',
    lesson: userLesson || 'Review core first-principles and watch out for exam trap.',
    t1: false,
    t7: false,
    t21: false,
    resolved: false
  };

  const existing = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  existing.unshift(entry);
  localStorage.setItem('cat_chook_diary', JSON.stringify(existing));

  incrementStat('cat_errors_logged', 1);
  renderChookDiaryList();
  updateDashboardStats();

  document.getElementById('diary-note-input').value = '';
  alert('Mistake logged to Chook Diary! Review scheduled on T+1, T+7, T+21.');
  switchView('dashboard');
}

// ==========================================================================
// CHOOK DIARY (ACTIVE ERROR LOG)
// ==========================================================================
function renderChookDiaryList(filterTag = 'ALL') {
  const container = document.getElementById('diary-list-container');
  if (!container) return;

  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  let filtered = entries;
  if (filterTag === 'DUE_TODAY') {
    filtered = entries.filter(e => isEntryDueToday(e));
  } else if (filterTag !== 'ALL') {
    filtered = entries.filter(e => e.tag === filterTag);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card" style="text-align:center; padding:40px; color:var(--text-muted);">
        <p style="font-size:1.1rem; margin-bottom:8px;">No mistakes recorded in this category!</p>
        <p style="font-size:0.85rem;">When you make an error during a sprint, log it to build your blunder immunity.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="log-item-card" id="item-${item.id}">
      <div style="flex:1;">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
          <span class="tier-pill tier-s" style="background:rgba(244,63,94,0.15); color:var(--accent-rose); border-color:rgba(244,63,94,0.3);">${item.tag}</span>
          <strong style="color:var(--text-primary); font-size:0.95rem;">${item.topic}</strong>
          <span style="font-size:0.75rem; color:var(--text-muted);">${item.date}</span>
        </div>
        <div style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:8px; line-height:1.5;">${item.questionSummary}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
          <div style="color:var(--accent-cyan); font-size:0.9rem; font-weight:600;">💡 Lesson: ${item.lesson}</div>
          <button class="btn-card-video" style="padding:2px 8px; font-size:0.72rem;" onclick="openDiaryTopicVideo('${item.topic}')">
            <span>▶</span> Review Rodha Video
          </button>
        </div>
        
        <div class="spaced-rep-box">
          <span>Spaced Repetition:</span>
          <label><input type="checkbox" ${item.t1 ? 'checked' : ''} onchange="toggleSpacedRep('${item.id}', 't1')"/> T+1 Day</label>
          <label><input type="checkbox" ${item.t7 ? 'checked' : ''} onchange="toggleSpacedRep('${item.id}', 't7')"/> T+7 Days</label>
          <label><input type="checkbox" ${item.t21 ? 'checked' : ''} onchange="toggleSpacedRep('${item.id}', 't21')"/> T+21 Days</label>
        </div>
      </div>
      <div>
        <button class="btn-start-sprint" style="width:auto; padding:6px 12px; font-size:0.75rem; background:rgba(244,63,94,0.15); color:var(--accent-rose); border-color:rgba(244,63,94,0.3);" onclick="deleteChookEntry('${item.id}')">Delete</button>
      </div>
    </div>
  `).join('');
}

function filterDiary(tag) {
  document.querySelectorAll('#view-diary .tag-pill-btn').forEach(b => {
    const isMatch = (tag === 'ALL' && b.innerText.includes('All')) ||
                    (tag === 'DUE_TODAY' && b.innerText.includes('Due Today')) ||
                    (tag !== 'ALL' && tag !== 'DUE_TODAY' && b.innerText.includes(tag));
    b.classList.toggle('selected', isMatch);
  });
  renderChookDiaryList(tag);
}

function toggleSpacedRep(id, key) {
  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  const item = entries.find(e => e.id === id);
  if (item) {
    item[key] = !item[key];
    localStorage.setItem('cat_chook_diary', JSON.stringify(entries));
  }
}

function deleteChookEntry(id) {
  let entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  entries = entries.filter(e => e.id !== id);
  localStorage.setItem('cat_chook_diary', JSON.stringify(entries));
  renderChookDiaryList();
  updateDashboardStats();
}

function exportErrorLogJson() {
  const data = localStorage.getItem('cat_chook_diary') || '[]';
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `CAT_Chook_Diary_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================================================
// FORMULA FLASHCARDS VIEW
// ==========================================================================
function renderFormulaCards() {
  const container = document.getElementById('formulas-container');
  if (!container || !window.QA_TOPICS_DATA) return;

  let allFormulas = [];
  window.QA_TOPICS_DATA.forEach(t => {
    if (t.formulas && t.formulas.length > 0) {
      t.formulas.forEach(f => {
        allFormulas.push({
          topic: t.title,
          formula: f.formula
        });
      });
    }
  });

  container.innerHTML = allFormulas.slice(0, 16).map(item => `
    <div class="card" style="text-align:center; padding:24px;">
      <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700; text-transform:uppercase;">${item.topic}</span>
      <div style="font-size:1.25rem; color:var(--accent-cyan); font-weight:700; margin:16px 0;">$$${item.formula}$$</div>
    </div>
  `).join('');
}

// ==========================================================================
// CBT SECTIONAL MOCK SIMULATOR (40 MINS)
// ==========================================================================
function launchSectionalMock() {
  activeMock.isRunning = true;
  activeMock.secondsLeft = 40 * 60;
  activeMock.currentIndex = 0;
  activeMock.userAnswers = {};

  // Assemble 20 mixed high-yield questions (8 QA, 8 DILR, 4 VARC)
  let mockQs = [];
  if (window.QA_TOPICS_DATA) {
    window.QA_TOPICS_DATA.slice(0, 8).forEach(t => {
      if (t.questions && t.questions[0]) mockQs.push({ ...t.questions[0], section: 'Quant' });
    });
  }
  if (window.DILR_ARCHETYPES_DATA) {
    window.DILR_ARCHETYPES_DATA.slice(0, 2).forEach(d => {
      (d.caselets || []).slice(0, 1).forEach(c => {
        (c.questions || []).slice(0, 4).forEach(q => {
          mockQs.push({
            statement: `**${c.title}**\n\n${c.context}\n\n**Q:** ${q.statement}`,
            options: q.options,
            correctAnswer: q.correctAnswer,
            section: 'DILR'
          });
        });
      });
    });
  }

  activeMock.questions = mockQs;

  const testArea = document.getElementById('mock-test-area');
  testArea.style.display = 'block';
  testArea.innerHTML = `
    <div class="practice-container">
      <div class="question-card">
        <div class="question-header">
          <div class="q-badge" id="mock-q-badge">Question 1 of ${mockQs.length}</div>
          <div class="stopwatch-box" style="color:var(--accent-rose); background:rgba(244,63,94,0.1); border-color:rgba(244,63,94,0.3);">
            <span>⏱️ Time Remaining:</span> <span id="mock-clock">40:00</span>
          </div>
        </div>
        <div class="question-text" id="mock-q-text"></div>
        <div id="mock-options-container" class="options-list"></div>
        
        <div style="display:flex; justify-content:space-between; margin-top:24px;">
          <button class="btn-start-sprint" style="width:auto;" onclick="prevMockQuestion()">← Prev</button>
          <button class="btn-start-sprint" style="width:auto;" onclick="nextMockQuestion()">Next →</button>
        </div>
      </div>

      <div class="palette-card">
        <h4 style="margin-bottom:8px; font-weight:800;">CAT Question Palette</h4>
        <div class="palette-grid" id="mock-palette-grid"></div>
        <button class="btn-start-sprint" style="margin-top:20px; background:var(--accent-rose); color:#fff;" onclick="submitMockTest()">
          Submit Test & Scorecard ➔
        </button>
      </div>
    </div>
  `;

  // Start 40-minute countdown
  if (activeMock.timerInterval) clearInterval(activeMock.timerInterval);
  activeMock.timerInterval = setInterval(() => {
    activeMock.secondsLeft--;
    if (activeMock.secondsLeft <= 0) {
      clearInterval(activeMock.timerInterval);
      submitMockTest();
      return;
    }
    const m = String(Math.floor(activeMock.secondsLeft / 60)).padStart(2, '0');
    const s = String(activeMock.secondsLeft % 60).padStart(2, '0');
    const el = document.getElementById('mock-clock');
    if (el) el.innerText = `${m}:${s}`;
  }, 1000);

  renderMockQuestion();
  renderMockPalette();
  runKaTeX();
}

function renderMockQuestion() {
  const q = activeMock.questions[activeMock.currentIndex];
  if (!q) return;

  document.getElementById('mock-q-badge').innerText = `Question ${activeMock.currentIndex + 1} of ${activeMock.questions.length} [${q.section || 'CAT'}]`;
  document.getElementById('mock-q-text').innerHTML = formatMarkdownText(q.problem || q.statement);

  const container = document.getElementById('mock-options-container');
  container.innerHTML = '';

  const cur = activeMock.userAnswers[activeMock.currentIndex] || '';

  if (q.options && q.options.length > 0) {
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn' + (cur === opt ? ' selected' : '');
      btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)})</strong> <span>${opt}</span>`;
      btn.onclick = () => {
        activeMock.userAnswers[activeMock.currentIndex] = opt;
        renderMockQuestion();
        renderMockPalette();
      };
      container.appendChild(btn);
    });
  } else {
    container.innerHTML = `
      <input type="text" class="tita-input" value="${cur}" placeholder="Enter answer..." oninput="activeMock.userAnswers[activeMock.currentIndex] = this.value; renderMockPalette();" />
    `;
  }
  runKaTeX();
}

function renderMockPalette() {
  const grid = document.getElementById('mock-palette-grid');
  if (!grid) return;
  grid.innerHTML = activeMock.questions.map((q, i) => {
    let cls = 'palette-btn';
    if (i === activeMock.currentIndex) cls += ' active';
    if (activeMock.userAnswers[i]) cls += ' answered';
    return `<button class="${cls}" onclick="activeMock.currentIndex = ${i}; renderMockQuestion(); renderMockPalette();">${i + 1}</button>`;
  }).join('');
}

function nextMockQuestion() {
  if (activeMock.currentIndex < activeMock.questions.length - 1) {
    activeMock.currentIndex++;
    renderMockQuestion();
    renderMockPalette();
  }
}

function prevMockQuestion() {
  if (activeMock.currentIndex > 0) {
    activeMock.currentIndex--;
    renderMockQuestion();
    renderMockPalette();
  }
}

function submitMockTest() {
  if (activeMock.timerInterval) clearInterval(activeMock.timerInterval);

  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  activeMock.questions.forEach((q, i) => {
    const userAns = activeMock.userAnswers[i];
    const trueAns = q.finalAnswer || q.correctAnswer;
    if (!userAns) {
      unattempted++;
    } else if (String(userAns).trim().toLowerCase().includes(String(trueAns).trim().toLowerCase()) || String(trueAns).trim().toLowerCase().includes(String(userAns).trim().toLowerCase())) {
      correct++;
    } else {
      wrong++;
    }
  });

  const netScore = (correct * 3) - (wrong * 1);
  let percentile = '85.0%ile';
  if (netScore >= 36) percentile = '99.5%ile (IIM Call)';
  else if (netScore >= 30) percentile = '98.5%ile (Top Tier)';
  else if (netScore >= 24) percentile = '95.0%ile';
  else if (netScore >= 18) percentile = '90.0%ile';

  const testArea = document.getElementById('mock-test-area');
  testArea.innerHTML = `
    <div class="card" style="text-align:center; padding:36px;">
      <h2 style="font-size:2rem; font-weight:800; color:var(--accent-cyan); margin-bottom:8px;">Diagnostic Scorecard</h2>
      <div style="font-size:2.8rem; font-weight:800; margin:16px 0;">${netScore} <span style="font-size:1.2rem; color:var(--text-muted);">Marks</span></div>
      <div class="badge-target" style="display:inline-block; font-size:1rem; padding:6px 18px; margin-bottom:24px;">Projected: ${percentile}</div>
      
      <div class="stat-grid" style="max-width:600px; margin:0 auto 24px;">
        <div class="stat-box"><div class="stat-icon emerald">✓</div><div><div class="stat-val">${correct}</div><div class="stat-lbl">Correct (+3)</div></div></div>
        <div class="stat-box"><div class="stat-icon rose">✗</div><div><div class="stat-val">${wrong}</div><div class="stat-lbl">Wrong (-1)</div></div></div>
        <div class="stat-box"><div class="stat-icon indigo">⚪</div><div><div class="stat-val">${unattempted}</div><div class="stat-lbl">Unattempted</div></div></div>
      </div>
      
      <button class="btn-start-sprint" style="width:auto; margin:0 auto;" onclick="switchView('dashboard')">Return to Dashboard ➔</button>
    </div>
  `;
}

// ==========================================================================
// UTILITY & STATS
// ==========================================================================
function incrementStat(key, val) {
  const current = parseInt(localStorage.getItem(key) || '0', 10);
  localStorage.setItem(key, current + val);
}

function updateDashboardStats() {
  const sprints = localStorage.getItem('cat_sprints_done') || '0';
  const qs = localStorage.getItem('cat_qs_solved') || '0';
  const errs = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]').length;
  const hours = ((parseInt(qs, 10) * 4) / 60).toFixed(1);
  const cardioBest = localStorage.getItem('cat_cardio_best') || '0';
  const streak = localStorage.getItem('cat_streak_days') || '45';

  if (document.getElementById('stat-sprints-done')) document.getElementById('stat-sprints-done').innerText = sprints;
  if (document.getElementById('stat-qs-solved')) document.getElementById('stat-qs-solved').innerText = qs;
  if (document.getElementById('stat-errors-logged')) document.getElementById('stat-errors-logged').innerText = errs;
  if (document.getElementById('stat-hours-spent')) document.getElementById('stat-hours-spent').innerText = `${hours}h`;

  // Bento Grid sync
  const bentoCardioBest = document.getElementById('cardio-dashboard-best');
  if (bentoCardioBest) bentoCardioBest.innerText = `${cardioBest} pts`;

  const bentoStreak = document.getElementById('streak-days-count');
  if (bentoStreak) bentoStreak.innerText = `${streak} Days`;

  // Trigger Spaced Repetition check for Bento Due Card
  if (typeof checkDueTodaySpacedRep === 'function') {
    checkDueTodaySpacedRep();
  }
}

function formatMarkdownText(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>');
}


// ==========================================================================
// FEATURE 1: 60-SECOND SPEED MATH CARDIO FLASH GAME
// ==========================================================================
let cardioState = {
  isRunning: false,
  timeLeft: 60,
  score: 0,
  streak: 0,
  correctCount: 0,
  totalAttempts: 0,
  currentQ: null,
  timerInterval: null
};

function openSpeedMathCardio() {
  const modal = document.getElementById('cardio-modal');
  if (modal) modal.classList.add('active');
  const best = localStorage.getItem('cat_cardio_best') || '0';
  const bestEl = document.getElementById('cardio-dashboard-best');
  if (bestEl) bestEl.innerText = `${best} pts`;

  // Reset display
  document.getElementById('cardio-timer-sec').innerText = '60s';
  document.getElementById('cardio-score').innerText = '0';
  document.getElementById('cardio-streak').innerText = '1x 🔥';
  document.getElementById('cardio-accuracy').innerText = '100%';
  document.getElementById('cardio-timer-fill').style.width = '100%';
  document.getElementById('cardio-question-text').innerText = 'Ready to Cardio?';
  document.getElementById('cardio-options-grid').innerHTML = '';
  document.getElementById('cardio-feedback').innerText = 'Test your squares, cubes, reciprocals, and speed arithmetic under 60 seconds!';
  document.getElementById('cardio-start-btn').style.display = 'block';
  document.getElementById('cardio-start-btn').innerText = '🚀 Start Cardio Session';
}

function closeSpeedMathCardio() {
  if (cardioState.timerInterval) clearInterval(cardioState.timerInterval);
  cardioState.isRunning = false;
  const modal = document.getElementById('cardio-modal');
  if (modal) modal.classList.remove('active');
}

function startCardioGame() {
  cardioState.isRunning = true;
  cardioState.timeLeft = 60;
  cardioState.score = 0;
  cardioState.streak = 0;
  cardioState.correctCount = 0;
  cardioState.totalAttempts = 0;

  document.getElementById('cardio-start-btn').style.display = 'none';
  document.getElementById('cardio-timer-sec').innerText = '60s';
  document.getElementById('cardio-score').innerText = '0';
  document.getElementById('cardio-streak').innerText = '1x 🔥';
  document.getElementById('cardio-accuracy').innerText = '100%';
  document.getElementById('cardio-timer-fill').style.width = '100%';

  generateCardioQuestion();

  if (cardioState.timerInterval) clearInterval(cardioState.timerInterval);
  cardioState.timerInterval = setInterval(() => {
    cardioState.timeLeft--;
    const secEl = document.getElementById('cardio-timer-sec');
    const fillEl = document.getElementById('cardio-timer-fill');
    if (secEl) secEl.innerText = `${cardioState.timeLeft}s`;
    if (fillEl) fillEl.style.width = `${(cardioState.timeLeft / 60) * 100}%`;

    if (cardioState.timeLeft <= 0) {
      endCardioGame();
    }
  }, 1000);
}

function generateCardioQuestion() {
  // Types: 0: Square, 1: Cube, 2: Reciprocal to %, 3: Fast Product
  const qType = Math.floor(Math.random() * 4);
  let qText = '';
  let correctAns = 0;
  let unit = '';

  if (qType === 0) {
    // Squares 12 to 35
    const num = Math.floor(Math.random() * 24) + 12;
    qText = `${num}² = ?`;
    correctAns = num * num;
  } else if (qType === 1) {
    // Cubes 3 to 15
    const num = Math.floor(Math.random() * 13) + 3;
    qText = `${num}³ = ?`;
    correctAns = num * num * num;
  } else if (qType === 2) {
    // Reciprocals
    const recips = [
      { d: 3, pct: 33.33 },
      { d: 6, pct: 16.67 },
      { d: 7, pct: 14.28 },
      { d: 8, pct: 12.50 },
      { d: 9, pct: 11.11 },
      { d: 11, pct: 9.09 },
      { d: 12, pct: 8.33 },
      { d: 13, pct: 7.69 },
      { d: 14, pct: 7.14 },
      { d: 16, pct: 6.25 },
      { d: 17, pct: 5.88 },
      { d: 19, pct: 5.26 }
    ];
    const pick = recips[Math.floor(Math.random() * recips.length)];
    qText = `1 / ${pick.d} = ?%`;
    correctAns = pick.pct;
    unit = '%';
  } else {
    // Fast CAT Multiplication
    const pairs = [
      [19, 17, 323], [24, 15, 360], [18, 16, 288], [35, 12, 420],
      [16, 15, 240], [28, 14, 392], [32, 25, 800], [45, 18, 810]
    ];
    const pair = pairs[Math.floor(Math.random() * pairs.length)];
    qText = `${pair[0]} × ${pair[1]} = ?`;
    correctAns = pair[2];
  }

  // Generate 3 plausible distractors
  let options = new Set([correctAns]);
  while (options.size < 4) {
    let delta = (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
    if (unit === '%') {
      let cand = +(correctAns + delta * 0.5).toFixed(2);
      if (cand > 0) options.add(cand);
    } else {
      let offset = (Math.floor(Math.random() * 8) + 1) * (Math.random() < 0.5 ? 10 : 2);
      let cand = correctAns + offset;
      if (cand > 0) options.add(cand);
    }
  }

  const shuffled = Array.from(options).sort(() => Math.random() - 0.5);
  cardioState.currentQ = { text: qText, correct: correctAns, unit: unit };

  document.getElementById('cardio-question-text').innerText = qText;
  const grid = document.getElementById('cardio-options-grid');
  grid.innerHTML = shuffled.map((opt, i) => `
    <button class="cardio-opt-btn" onclick="answerCardio(${opt}, this)">
      <span style="font-size:0.8rem; color:var(--text-muted); margin-right:8px;">[${i + 1}]</span>
      <span>${opt}${unit}</span>
    </button>
  `).join('');
}

function answerCardio(val, btnEl) {
  if (!cardioState.isRunning) return;
  cardioState.totalAttempts++;

  const isCorrect = (Math.abs(val - cardioState.currentQ.correct) < 0.05);

  if (isCorrect) {
    cardioState.correctCount++;
    cardioState.streak++;
    let mult = 1;
    if (cardioState.streak >= 8) mult = 3;
    else if (cardioState.streak >= 4) mult = 2;
    else if (cardioState.streak >= 2) mult = 1.5;

    cardioState.score += Math.round(10 * mult);
    playAudioTone(640, 'sine', 0.1);

    if (btnEl) btnEl.classList.add('correct-pulse');
    document.getElementById('cardio-feedback').innerHTML = `<span style="color:var(--accent-emerald);">✓ Correct! +${Math.round(10 * mult)} pts (${mult}x multiplier)</span>`;
  } else {
    cardioState.streak = 0;
    playAudioTone(220, 'sawtooth', 0.2);
    if (btnEl) btnEl.classList.add('wrong-pulse');
    document.getElementById('cardio-feedback').innerHTML = `<span style="color:var(--accent-rose);">✗ Oops! Correct: ${cardioState.currentQ.correct}${cardioState.currentQ.unit}</span>`;
  }

  // Update HUD
  document.getElementById('cardio-score').innerText = cardioState.score;
  let streakIcon = cardioState.streak >= 4 ? '🔥🔥' : '🔥';
  document.getElementById('cardio-streak').innerText = `${cardioState.streak}x ${streakIcon}`;
  const acc = Math.round((cardioState.correctCount / cardioState.totalAttempts) * 100);
  document.getElementById('cardio-accuracy').innerText = `${acc}%`;

  setTimeout(() => {
    if (cardioState.isRunning) generateCardioQuestion();
  }, 220);
}

function endCardioGame() {
  clearInterval(cardioState.timerInterval);
  cardioState.isRunning = false;

  const prevBest = parseInt(localStorage.getItem('cat_cardio_best') || '0', 10);
  let isNewBest = false;
  if (cardioState.score > prevBest) {
    localStorage.setItem('cat_cardio_best', cardioState.score);
    isNewBest = true;
    const bestEl = document.getElementById('cardio-dashboard-best');
    if (bestEl) bestEl.innerText = `${cardioState.score} pts`;
  }

  document.getElementById('cardio-question-text').innerText = 'Cardio Complete! 🏁';
  document.getElementById('cardio-options-grid').innerHTML = `
    <div style="grid-column: span 2; padding: 20px; background: rgba(30, 41, 59, 0.7); border-radius: var(--radius-lg); text-align: center;">
      <div style="font-size: 2.2rem; font-weight: 900; color: var(--accent-amber);">${cardioState.score} Points</div>
      <div style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 6px;">
        Accuracy: <strong>${Math.round((cardioState.correctCount / Math.max(1, cardioState.totalAttempts)) * 100)}%</strong> (${cardioState.correctCount}/${cardioState.totalAttempts} answered)
      </div>
      ${isNewBest ? '<div style="margin-top:10px; color:var(--accent-emerald); font-weight:800; font-size:1.1rem;">🏆 NEW ALL-TIME RECORD!</div>' : ''}
    </div>
  `;
  document.getElementById('cardio-start-btn').style.display = 'block';
  document.getElementById('cardio-start-btn').innerText = '🔥 Play Again';
}

// ==========================================================================
// FEATURE 3: OFFICIAL CAT ON-SCREEN VIRTUAL CALCULATOR (TCS iON CLONE)
// ==========================================================================
let calcState = {
  currentVal: '0',
  prevVal: null,
  op: null,
  waitingForOperand: false,
  mem: 0,
  expr: ''
};

function toggleCatCalculator() {
  const win = document.getElementById('cat-calc-window');
  if (win) win.classList.toggle('active');
}

function updateCalcDisplay() {
  const lcd = document.getElementById('calc-lcd-val');
  const expr = document.getElementById('calc-expr-display');
  const mem = document.getElementById('calc-mem-flag');
  if (lcd) lcd.innerText = calcState.currentVal;
  if (expr) expr.innerText = calcState.expr || ' ';
  if (mem) mem.innerText = (calcState.mem !== 0) ? 'M' : '';
}

function calcInput(digit) {
  if (calcState.waitingForOperand) {
    calcState.currentVal = digit === '.' ? '0.' : digit;
    calcState.waitingForOperand = false;
  } else {
    if (digit === '.') {
      if (!calcState.currentVal.includes('.')) calcState.currentVal += '.';
    } else {
      calcState.currentVal = calcState.currentVal === '0' ? digit : calcState.currentVal + digit;
    }
  }
  updateCalcDisplay();
}

function calcOp(op) {
  const current = parseFloat(calcState.currentVal);
  if (calcState.prevVal === null) {
    calcState.prevVal = current;
    calcState.expr = `${current} ${op}`;
  } else if (!calcState.waitingForOperand) {
    const result = evaluateCalc(calcState.prevVal, current, calcState.op);
    calcState.currentVal = String(result);
    calcState.prevVal = result;
    calcState.expr = `${result} ${op}`;
  } else {
    calcState.expr = `${calcState.prevVal} ${op}`;
  }
  calcState.op = op;
  calcState.waitingForOperand = true;
  updateCalcDisplay();
}

function calcEquals() {
  if (calcState.op && calcState.prevVal !== null) {
    const current = parseFloat(calcState.currentVal);
    calcState.expr = `${calcState.prevVal} ${calcState.op} ${current} =`;
    const result = evaluateCalc(calcState.prevVal, current, calcState.op);
    calcState.currentVal = String(result);
    calcState.prevVal = null;
    calcState.op = null;
    calcState.waitingForOperand = true;
    updateCalcDisplay();
  }
}

function evaluateCalc(a, b, op) {
  let res = 0;
  if (op === '+') res = a + b;
  else if (op === '-') res = a - b;
  else if (op === '*') res = a * b;
  else if (op === '/') res = b !== 0 ? a / b : 'Error';
  // Round to avoid IEEE 754 precision oddities
  return typeof res === 'number' ? Math.round(res * 100000000) / 100000000 : res;
}

function calcAction(act) {
  let val = parseFloat(calcState.currentVal);
  if (act === 'backspace') {
    if (calcState.currentVal.length > 1) {
      calcState.currentVal = calcState.currentVal.slice(0, -1);
    } else {
      calcState.currentVal = '0';
    }
  } else if (act === 'ce') {
    calcState.currentVal = '0';
  } else if (act === 'c') {
    calcState.currentVal = '0';
    calcState.prevVal = null;
    calcState.op = null;
    calcState.waitingForOperand = false;
    calcState.expr = '';
  } else if (act === 'neg') {
    calcState.currentVal = String(-val);
  } else if (act === 'sqrt') {
    calcState.currentVal = val >= 0 ? String(Math.sqrt(val)) : 'Error';
    calcState.expr = `sqrt(${val})`;
    calcState.waitingForOperand = true;
  } else if (act === 'recip') {
    calcState.currentVal = val !== 0 ? String(1 / val) : 'Error';
    calcState.expr = `1/(${val})`;
    calcState.waitingForOperand = true;
  } else if (act === 'pct') {
    calcState.currentVal = String(val / 100);
    calcState.waitingForOperand = true;
  }
  updateCalcDisplay();
}

function calcMem(act) {
  const current = parseFloat(calcState.currentVal) || 0;
  if (act === 'MC') {
    calcState.mem = 0;
  } else if (act === 'MR') {
    calcState.currentVal = String(calcState.mem);
    calcState.waitingForOperand = true;
  } else if (act === 'MS') {
    calcState.mem = current;
  } else if (act === 'M+') {
    calcState.mem += current;
  } else if (act === 'M-') {
    calcState.mem -= current;
  }
  updateCalcDisplay();
}

// ==========================================================================
// FEATURE 4: "DUE TODAY" SPACED REPETITION ENGINE & SAMPLE GENERATOR
// ==========================================================================
function isEntryDueToday(item) {
  if (!item || !item.date) return false;
  const itemDate = new Date(item.date);
  const now = new Date();
  const diffTime = Math.abs(now - itemDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // T+1: 1 day elapsed and not reviewed
  const t1Due = diffDays >= 1 && !item.t1;
  // T+7: 7 days elapsed and not reviewed
  const t7Due = diffDays >= 7 && !item.t7;
  // T+21: 21 days elapsed and not reviewed
  const t21Due = diffDays >= 21 && !item.t21;

  return t1Due || t7Due || t21Due;
}

function checkDueTodaySpacedRep() {
  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  const dueItems = entries.filter(e => isEntryDueToday(e));
  const count = dueItems.length;

  const banner = document.getElementById('due-today-dashboard-banner');
  const bannerCount = document.getElementById('due-banner-count');
  const diaryBadge = document.getElementById('diary-due-count');

  if (bannerCount) bannerCount.innerText = count;
  if (diaryBadge) diaryBadge.innerText = count;

  if (banner) {
    if (count > 0) banner.classList.remove('hidden');
    else banner.classList.add('hidden');
  }

  // Bento Spaced Repetition Tile synchronization
  const bentoNumber = document.getElementById('bento-due-number');
  const bentoPill = document.getElementById('bento-due-pill-count');
  const bentoProgress = document.getElementById('bento-due-progress');

  if (bentoNumber) bentoNumber.innerText = count;
  if (bentoPill) bentoPill.innerText = count > 0 ? `${count} Due` : '0 Due';
  if (bentoProgress) {
    const totalBlunders = Math.max(entries.length, 1);
    const progressPct = count === 0 ? 100 : Math.min(100, Math.round(((totalBlunders - count) / totalBlunders) * 100));
    bentoProgress.style.width = `${progressPct}%`;
  }
}

function generateSampleDueMistakes() {
  const now = new Date();
  const dateT1 = new Date(now.getTime() - (1.5 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  const dateT7 = new Date(now.getTime() - (8 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

  const samples = [
    {
      id: 'ERR_' + (Date.now() - 1000),
      date: dateT1,
      subject: 'QA',
      topic: 'Logarithms & Indices',
      tag: '[TRP]',
      questionSummary: 'Found two roots for log₂(x-1) + log₂(x-3) = 3 as x=5, x=-1. Forgot domain bound x > 3.',
      correctAnswer: 'x = 5 only',
      lesson: 'CRITICAL: Always write down the domain restrictions (x - 3 > 0) BEFORE applying product rule!',
      t1: false,
      t7: false,
      t21: false,
      resolved: false
    },
    {
      id: 'ERR_' + (Date.now() - 2000),
      date: dateT7,
      subject: 'QA',
      topic: 'Time & Work',
      tag: '[CAL]',
      questionSummary: 'Pipes and cisterns: forgot that drain pipe efficiency is negative when calculating combined rate.',
      correctAnswer: '12 hours',
      lesson: 'Always write explicit negative signs (-) in red ink for emptying pipes in the LCM unit ledger.',
      t1: true,
      t7: false,
      t21: false,
      resolved: false
    },
    {
      id: 'ERR_' + (Date.now() - 3000),
      date: dateT1,
      subject: 'DILR',
      topic: 'Venn Maxima-Minima',
      tag: '[CON]',
      questionSummary: 'Assumed intersection of exactly 2 sets had to be zero to minimize, but violated non-negativity constraint.',
      correctAnswer: 'Minimum overlap = 15',
      lesson: "Use Ravi Sir's Chocolate Method to test boundary conditions rather than setting random regions to 0.",
      t1: false,
      t7: false,
      t21: false,
      resolved: false
    }
  ];

  const existing = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  const merged = [...samples, ...existing];
  localStorage.setItem('cat_chook_diary', JSON.stringify(merged));

  checkDueTodaySpacedRep();
  renderChookDiaryList('DUE_TODAY');
  updateDashboardStats();
  alert('🎲 3 realistic CAT blunder entries generated (dated T-1 and T-7). Filtered to "Due Today"!');
}

function reviewDueTodayErrors() {
  switchView('diary');
  filterDiary('DUE_TODAY');
}

// ==========================================================================
// FEATURE 9: 30-SECOND VOICE AUDIO CAPSULE & LIVE HIGHLIGHT
// ==========================================================================
let audioCapsuleState = {
  isPlaying: false,
  rate: 1.0,
  activeTopicId: null,
  highlightTimer: null
};

function getTopicAudioCapsule(topicId) {
  const capsules = {
    'qa_logs': {
      bullets: [
        'Rule 1: Always check domain boundaries FIRST: base > 0, base ≠ 1, argument > 0!',
        'Rule 2: Convert complex expressions to lowest common prime base before expanding.',
        'Rule 3: Telescoping chain log_a(b) · log_b(c) collapses directly to log_a(c)!'
      ],
      speech: "Ravi Sir's 30-second golden rule for Logarithms: Always check domain boundaries first! Base must be positive and not one, argument strictly positive! Second, convert all terms to the lowest common prime base. Third, look for telescoping cross cancellations to solve in thirty seconds!"
    },
    'qa_tw': {
      bullets: [
        'Rule 1: Never work with fractions! Assign Total Work = LCM of individual days.',
        'Rule 2: Work = Efficiency × Time. If efficiency is constant, time is inversely proportional.',
        'Rule 3: Treat leak/drain pipes as negative efficiency units in your ledger.'
      ],
      speech: "Ravi Sir's 30-second golden rule for Time and Work: Never work with fractions! Immediately assign total work as the lowest common multiple of days. Remember: work equals efficiency times time. Always assign drain pipes negative efficiency!"
    },
    'qa_allig': {
      bullets: [
        'Rule 1: Quantity ratio is INVERSE to price differences: w1/w2 = (P2 - Pm) / (Pm - P1).',
        'Rule 2: Alligation is simply a physical balance see-saw with the pivot at Mean Price.',
        'Rule 3: Denominator of the rate determines the reference quantity (cost price vs weight).'
      ],
      speech: "Ravi Sir's rule for Mixtures and Alligations: Alligation is just a seesaw balance! Quantity ratio is inversely proportional to the price deviation from the mean. The heavier quantity pulls the mean closer to itself!"
    },
    'qa_tsd': {
      bullets: [
        'Rule 1: For equal distances, average speed is the Harmonic Mean: 2ab / (a + b).',
        'Rule 2: On circular tracks, meeting at starting point is strictly LCM of individual lap times.',
        'Rule 3: On escalators, total steps N = steps walked + escalator contribution (speed × time).'
      ],
      speech: "Ravi Sir's golden rule for Time, Speed and Distance: For equal distances, average speed is strictly the Harmonic Mean, never the Arithmetic Mean! On circular tracks, meeting at the starting point is always the LCM of individual lap times, independent of running directions. On escalators, the escalator contributes steps equal to its speed multiplied by your walking time!"
    },
    'qa_functions': {
      bullets: [
        'Rule 1: For polynomial f(x) + f(1/x) = f(x)f(1/x), the unique solution is f(x) = 1 ± x^n.',
        'Rule 2: A function has an inverse if and only if it is strictly bijective (one-to-one and onto).',
        'Rule 3: Taking modulus y = |f(x)| reflects any negative portion below the x-axis upwards.'
      ],
      speech: "Ravi Sir's golden rule for Functions: Whenever you see f of x plus f of one over x equals their product, write down one plus or minus x to the n immediately! Always check domain constraints before algebraic simplification, and remember that taking the modulus of a function flips negative values upwards across the x-axis!"
    },
    'qa_inequalities': {
      bullets: [
        'Rule 1: In the Wavy Curve method, odd powers CROSS the axis, while even powers BOUNCE off.',
        'Rule 2: The sum of absolute values |x - a| + |x - b| + |x - c| minimizes at the MEDIAN point.',
        'Rule 3: NEVER cross-multiply by an unknown variable without confirming whether its sign is positive or negative!'
      ],
      speech: "Ravi Sir's rule for Inequalities: Odd powers cross the axis, even powers bounce! In modulus sums with an odd number of critical points, the minimum occurs strictly at the median point on the number line. Never cross-multiply by an unknown variable without checking its sign!"
    },
    'qa_maxima_minima': {
      bullets: [
        'Rule 1: AM ≥ GM for all positive reals, with equality if and only if all terms are equal.',
        'Rule 2: Split terms to cancel powers: split 2x as x + x to cancel 16 over x squared!',
        'Rule 3: Quadratic ax² + bx + c optimizes at the vertex x = -b/(2a) with value -D/(4a).'
      ],
      speech: "Ravi Sir's rule for Maxima and Minima: AM is greater than or equal to GM for positive reals! When optimizing expressions where variables don't cancel directly, use term splitting to balance numerator and denominator exponents. For quadratics, the vertex gives the exact global extremum!"
    },
    'qa_polynomials': {
      bullets: [
        'Rule 1: When a + b + c = 0, the sum of cubes a³ + b³ + c³ collapses directly to 3abc!',
        'Rule 2: If x + 1/x = 1, then x³ = -1, meaning any two powers differing by 3 cancel out.',
        'Rule 3: By the Remainder Theorem, the remainder of P(x) divided by (x - a) is simply P(a).'
      ],
      speech: "Ravi Sir's rule for Polynomials and Identities: If the sum of three numbers is zero, their sum of cubes equals three a b c! When x plus one over x is one, x cubed is minus one. And to find polynomial remainders, substitute the divisor's root directly into the polynomial!"
    }
  };

  return capsules[topicId] || {
    bullets: [
      'Rule 1: Spot the structural archetype within 45 seconds of reading.',
      'Rule 2: If the problem takes more than 4 algebraic lines, search for the ratio invariant!',
      'Rule 3: At the 90-second metronome threshold, either finalize calculation or bail.'
    ],
    speech: "Ravi Sir's core first principle: Spot the structural archetype within forty-five seconds! If your solution requires more than four lines of algebra, you missed the shortcut. Honor the ninety-second decision threshold!"
  };
}

function toggleAudioCapsule() {
  if (!('speechSynthesis' in window)) {
    alert('Web Speech API is not supported in this browser. Please view the highlighted rules below.');
    return;
  }

  const btn = document.getElementById('btn-audio-capsule');
  if (audioCapsuleState.isPlaying) {
    window.speechSynthesis.cancel();
    audioCapsuleState.isPlaying = false;
    if (btn) btn.innerText = '▶';
    clearAudioHighlights();
    return;
  }

  const tId = activeSprint.topic ? activeSprint.topic.id : 'general';
  const data = getTopicAudioCapsule(tId);

  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(data.speech);
  utter.rate = audioCapsuleState.rate;
  utter.pitch = 1.0;

  audioCapsuleState.isPlaying = true;
  if (btn) btn.innerText = '⏸';

  // Synchronized sentence highlighting across the 3 bullets
  let lineIdx = 0;
  clearAudioHighlights();
  highlightCapsuleLine(0);

  const intervalTime = (30 / (audioCapsuleState.rate * 3)) * 1000;
  audioCapsuleState.highlightTimer = setInterval(() => {
    lineIdx++;
    if (lineIdx < 3) {
      highlightCapsuleLine(lineIdx);
    } else {
      clearInterval(audioCapsuleState.highlightTimer);
    }
  }, intervalTime);

  utter.onend = () => {
    audioCapsuleState.isPlaying = false;
    if (btn) btn.innerText = '▶';
    clearInterval(audioCapsuleState.highlightTimer);
    setTimeout(clearAudioHighlights, 1000);
  };

  utter.onerror = () => {
    audioCapsuleState.isPlaying = false;
    if (btn) btn.innerText = '▶';
    clearInterval(audioCapsuleState.highlightTimer);
  };

  window.speechSynthesis.speak(utter);
}

function setAudioSpeed(speed) {
  audioCapsuleState.rate = speed;
  if (audioCapsuleState.isPlaying) {
    toggleAudioCapsule(); // restart with new speed
    toggleAudioCapsule();
  }
}

function highlightCapsuleLine(idx) {
  clearAudioHighlights();
  const el = document.getElementById(`capsule-line-${idx}`);
  if (el) el.classList.add('live-audio-highlight');
}

function clearAudioHighlights() {
  document.querySelectorAll('.capsule-text-line').forEach(el => el.classList.remove('live-audio-highlight'));
}

// ==========================================================================
// FEATURE 5: LIVE FORMULA SANDBOX (INTERACTIVE SLIDERS)
// ==========================================================================
function renderFormulaSandboxHtml(topicId) {
  if (topicId === 'qa_tsd') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: TSD Harmonic Mean & Circular Meetings</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Runner A Speed (m/s):</span>
            <span id="tsd-s1-val" style="color:var(--accent-cyan);">15 m/s</span>
          </div>
          <input type="range" min="5" max="50" value="15" class="sandbox-range-input" id="tsd-slider-s1" oninput="updateTsdSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Runner B Speed (m/s):</span>
            <span id="tsd-s2-val" style="color:var(--accent-cyan);">10 m/s</span>
          </div>
          <input type="range" min="5" max="50" value="10" class="sandbox-range-input" id="tsd-slider-s2" oninput="updateTsdSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="tsd-hm-speed">12.0 m/s</div>
            <div class="lbl">Harmonic Mean Avg Speed</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="tsd-rel-opp">25 m/s</div>
            <div class="lbl">Relative Speed (Opposite)</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="tsd-rel-same">5 m/s</div>
            <div class="lbl">Relative Speed (Same)</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="tsd-distinct-pts">1 pt (Same) / 5 pts (Opp)</div>
            <div class="lbl">Distinct Track Meeting Points</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_functions') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: Graph Transformation & Domain Shift</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Horizontal Shift c in f(x + c):</span>
            <span id="func-c-val" style="color:var(--accent-cyan);">+2 (Left Shift)</span>
          </div>
          <input type="range" min="-5" max="5" value="2" class="sandbox-range-input" id="func-slider-c" oninput="updateFuncSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Vertical Multiplier a in a·f(x):</span>
            <span id="func-a-val" style="color:var(--accent-cyan);">3x</span>
          </div>
          <input type="range" min="1" max="10" value="3" class="sandbox-range-input" id="func-slider-a" oninput="updateFuncSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="func-equation">y = 3(x + 2)²</div>
            <div class="lbl">Transformed Function</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="func-vertex">(-2, 0)</div>
            <div class="lbl">New Vertex Coordinate</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="func-inv-identity">f(f⁻¹(x)) = x</div>
            <div class="lbl">Bijective Inverse Invariance</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_inequalities') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: Modulus Plateau & Distance Engine</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>First Critical Point (a):</span>
            <span id="ineq-a-val" style="color:var(--accent-cyan);">3</span>
          </div>
          <input type="range" min="1" max="10" value="3" class="sandbox-range-input" id="ineq-slider-a" oninput="updateIneqSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Second Critical Point (b):</span>
            <span id="ineq-b-val" style="color:var(--accent-cyan);">8</span>
          </div>
          <input type="range" min="5" max="20" value="8" class="sandbox-range-input" id="ineq-slider-b" oninput="updateIneqSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="ineq-min-val">5</div>
            <div class="lbl">Minimum Value |b - a|</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="ineq-plateau">[3, 8]</div>
            <div class="lbl">Minimum Plateau Interval</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="ineq-outer-slope">±2x</div>
            <div class="lbl">Slope Outside Plateau</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_maxima_minima') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: AM-GM Term-Splitting Optimizer</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Numerator Coefficient a in ax:</span>
            <span id="max-a-val" style="color:var(--accent-cyan);">4</span>
          </div>
          <input type="range" min="1" max="20" value="4" class="sandbox-range-input" id="max-slider-a" oninput="updateMaxSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Reciprocal Constant b in b/x:</span>
            <span id="max-b-val" style="color:var(--accent-cyan);">9</span>
          </div>
          <input type="range" min="1" max="50" value="9" class="sandbox-range-input" id="max-slider-b" oninput="updateMaxSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="max-min-val">12.00</div>
            <div class="lbl">Minimum Value (2√ab)</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="max-opt-x">1.50</div>
            <div class="lbl">Occurs at x = √(b/a)</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="max-terms-equal">6.0 = 6.0</div>
            <div class="lbl">Equality: ax = b/x</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_polynomials') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: x + 1/x Reciprocal Engine</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Value of k = x + 1/x:</span>
            <span id="poly-k-val" style="color:var(--accent-cyan);">3</span>
          </div>
          <input type="range" min="1" max="6" value="3" class="sandbox-range-input" id="poly-slider-k" oninput="updatePolySandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="poly-pow2">7</div>
            <div class="lbl">x² + 1/x² = k² - 2</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="poly-pow3">18</div>
            <div class="lbl">x³ + 1/x³ = k³ - 3k</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="poly-pow4">47</div>
            <div class="lbl">x⁴ + 1/x⁴ = (k²-2)² - 2</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_tw') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: LCM Work-Efficiency Engine</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Worker A Time (Days):</span>
            <span id="tw-a-val" style="color:var(--accent-cyan);">12 days</span>
          </div>
          <input type="range" min="4" max="40" value="12" class="sandbox-range-input" id="tw-slider-a" oninput="updateTwSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Worker B Time (Days):</span>
            <span id="tw-b-val" style="color:var(--accent-cyan);">15 days</span>
          </div>
          <input type="range" min="4" max="40" value="15" class="sandbox-range-input" id="tw-slider-b" oninput="updateTwSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="tw-lcm-work">60 u</div>
            <div class="lbl">Total Work (LCM)</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="tw-eff-a">5 u/d</div>
            <div class="lbl">A's Efficiency</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="tw-eff-b">4 u/d</div>
            <div class="lbl">B's Efficiency</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="tw-combined-days">6.67 d</div>
            <div class="lbl">Combined Time (A+B)</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_logs') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: Logarithmic Curve & Power Law</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Base (b):</span>
            <span id="log-b-val" style="color:var(--accent-cyan);">2</span>
          </div>
          <input type="range" min="2" max="10" value="2" class="sandbox-range-input" id="log-slider-b" oninput="updateLogSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Argument (x):</span>
            <span id="log-x-val" style="color:var(--accent-cyan);">32</span>
          </div>
          <input type="range" min="1" max="512" value="32" class="sandbox-range-input" id="log-slider-x" oninput="updateLogSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="log-result">5.00</div>
            <div class="lbl">log_b(x)</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="log-change-base">1.505 / 0.301</div>
            <div class="lbl">log₁₀(x) / log₁₀(b)</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="log-power-check">2⁵ = 32</div>
            <div class="lbl">Power Check (bʸ = x)</div>
          </div>
        </div>
      </div>
    `;
  } else if (topicId === 'qa_allig') {
    return `
      <div class="sandbox-card">
        <div class="sandbox-header">
          <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: Alligation Balancing Lever</h4>
          <span class="tier-pill tier-s">Interactive Sliders</span>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Cheaper Price P₁ (₹/kg):</span>
            <span id="allig-p1-val" style="color:var(--accent-cyan);">20</span>
          </div>
          <input type="range" min="10" max="60" value="20" class="sandbox-range-input" id="allig-slider-p1" oninput="updateAlligSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Dearer Price P₂ (₹/kg):</span>
            <span id="allig-p2-val" style="color:var(--accent-cyan);">50</span>
          </div>
          <input type="range" min="40" max="100" value="50" class="sandbox-range-input" id="allig-slider-p2" oninput="updateAlligSandbox()"/>
        </div>
        <div class="sandbox-slider-row">
          <div class="slider-label-row">
            <span>Target Mean Price Pm (₹/kg):</span>
            <span id="allig-pm-val" style="color:var(--accent-amber);">32</span>
          </div>
          <input type="range" min="20" max="50" value="32" class="sandbox-range-input" id="allig-slider-pm" oninput="updateAlligSandbox()"/>
        </div>
        <div class="sandbox-metrics-grid">
          <div class="sandbox-metric-tile">
            <div class="val" id="allig-diff-p2">18</div>
            <div class="lbl">Dearer Gap (P₂ - Pm)</div>
          </div>
          <div class="sandbox-metric-tile">
            <div class="val" id="allig-diff-p1">12</div>
            <div class="lbl">Cheaper Gap (Pm - P₁)</div>
          </div>
          <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);">
            <div class="val" id="allig-ratio">3 : 2</div>
            <div class="lbl">Weight Ratio (w₁ : w₂)</div>
          </div>
        </div>
      </div>
    `;
  }
  // Generic Fallback
  return `
    <div class="sandbox-card">
      <div class="sandbox-header">
        <h4 style="margin:0; font-weight:800; color:var(--accent-cyan);">🔬 Live Formula Sandbox: Multiplier Scaling Lever</h4>
        <span class="tier-pill tier-s">Interactive Sliders</span>
      </div>
      <div class="sandbox-slider-row">
        <div class="slider-label-row"><span>Base Value:</span><span id="gen-base-val">100</span></div>
        <input type="range" min="50" max="500" value="100" class="sandbox-range-input" id="gen-slider-base" oninput="updateGenSandbox()"/>
      </div>
      <div class="sandbox-slider-row">
        <div class="slider-label-row"><span>Percentage Shift (+%):</span><span id="gen-rate-val">25%</span></div>
        <input type="range" min="-50" max="100" value="25" class="sandbox-range-input" id="gen-slider-rate" oninput="updateGenSandbox()"/>
      </div>
      <div class="sandbox-metrics-grid">
        <div class="sandbox-metric-tile"><div class="val" id="gen-multiplier">1.25x</div><div class="lbl">Net Multiplier</div></div>
        <div class="sandbox-metric-tile" style="border-color:var(--accent-emerald);"><div class="val" id="gen-final-val">125.00</div><div class="lbl">Scaled Value</div></div>
      </div>
    </div>
  `;
}

function initSandboxSliders(topicId) {
  if (topicId === 'qa_tsd') updateTsdSandbox();
  else if (topicId === 'qa_functions') updateFuncSandbox();
  else if (topicId === 'qa_inequalities') updateIneqSandbox();
  else if (topicId === 'qa_maxima_minima') updateMaxSandbox();
  else if (topicId === 'qa_polynomials') updatePolySandbox();
  else if (topicId === 'qa_tw') updateTwSandbox();
  else if (topicId === 'qa_logs') updateLogSandbox();
  else if (topicId === 'qa_allig') updateAlligSandbox();
  else updateGenSandbox();
}

function updateTsdSandbox() {
  const s1 = parseInt(document.getElementById('tsd-slider-s1').value, 10);
  const s2 = parseInt(document.getElementById('tsd-slider-s2').value, 10);
  document.getElementById('tsd-s1-val').innerText = `${s1} m/s`;
  document.getElementById('tsd-s2-val').innerText = `${s2} m/s`;

  const hm = ((2 * s1 * s2) / (s1 + s2)).toFixed(1);
  const relOpp = s1 + s2;
  const relSame = Math.abs(s1 - s2);
  const g = gcd(s1, s2);
  const a = s1 / g;
  const b = s2 / g;

  document.getElementById('tsd-hm-speed').innerText = `${hm} m/s`;
  document.getElementById('tsd-rel-opp').innerText = `${relOpp} m/s`;
  document.getElementById('tsd-rel-same').innerText = `${relSame} m/s`;
  document.getElementById('tsd-distinct-pts').innerText = `${Math.abs(a - b)} pt (Same) / ${a + b} pts (Opp)`;
}

function updateFuncSandbox() {
  const c = parseInt(document.getElementById('func-slider-c').value, 10);
  const a = parseInt(document.getElementById('func-slider-a').value, 10);
  document.getElementById('func-c-val').innerText = `${c >= 0 ? '+' : ''}${c} (${c >= 0 ? 'Left' : 'Right'} Shift)`;
  document.getElementById('func-a-val').innerText = `${a}x`;

  document.getElementById('func-equation').innerText = `y = ${a}(x ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)})²`;
  document.getElementById('func-vertex').innerText = `(${-c}, 0)`;
}

function updateIneqSandbox() {
  let a = parseInt(document.getElementById('ineq-slider-a').value, 10);
  let b = parseInt(document.getElementById('ineq-slider-b').value, 10);
  if (b <= a) b = a + 1;
  document.getElementById('ineq-a-val').innerText = `${a}`;
  document.getElementById('ineq-b-val').innerText = `${b}`;

  document.getElementById('ineq-min-val').innerText = `${b - a}`;
  document.getElementById('ineq-plateau').innerText = `[${a}, ${b}]`;
}

function updateMaxSandbox() {
  const a = parseInt(document.getElementById('max-slider-a').value, 10);
  const b = parseInt(document.getElementById('max-slider-b').value, 10);
  document.getElementById('max-a-val').innerText = `${a}`;
  document.getElementById('max-b-val').innerText = `${b}`;

  const minVal = (2 * Math.sqrt(a * b)).toFixed(2);
  const optX = Math.sqrt(b / a).toFixed(2);
  const half = (minVal / 2).toFixed(1);

  document.getElementById('max-min-val').innerText = `${minVal}`;
  document.getElementById('max-opt-x').innerText = `${optX}`;
  document.getElementById('max-terms-equal').innerText = `${half} = ${half}`;
}

function updatePolySandbox() {
  const k = parseInt(document.getElementById('poly-slider-k').value, 10);
  document.getElementById('poly-k-val').innerText = `${k}`;

  const pow2 = k * k - 2;
  const pow3 = k * k * k - 3 * k;
  const pow4 = pow2 * pow2 - 2;

  document.getElementById('poly-pow2').innerText = `${pow2}`;
  document.getElementById('poly-pow3').innerText = `${pow3}`;
  document.getElementById('poly-pow4').innerText = `${pow4}`;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function updateTwSandbox() {
  const sa = document.getElementById('tw-slider-a');
  const sb = document.getElementById('tw-slider-b');
  if (!sa || !sb) return;
  const a = parseInt(sa.value, 10);
  const b = parseInt(sb.value, 10);

  document.getElementById('tw-a-val').innerText = `${a} days`;
  document.getElementById('tw-b-val').innerText = `${b} days`;

  const totalWork = lcm(a, b);
  const effA = totalWork / a;
  const effB = totalWork / b;
  const combined = (totalWork / (effA + effB)).toFixed(2);

  document.getElementById('tw-lcm-work').innerText = `${totalWork} units`;
  document.getElementById('tw-eff-a').innerText = `${effA} u/d`;
  document.getElementById('tw-eff-b').innerText = `${effB} u/d`;
  document.getElementById('tw-combined-days').innerText = `${combined} days`;
}

function updateLogSandbox() {
  const sb = document.getElementById('log-slider-b');
  const sx = document.getElementById('log-slider-x');
  if (!sb || !sx) return;
  const b = parseInt(sb.value, 10);
  const x = parseInt(sx.value, 10);

  document.getElementById('log-b-val').innerText = `${b}`;
  document.getElementById('log-x-val').innerText = `${x}`;

  const res = (Math.log(x) / Math.log(b)).toFixed(2);
  const log10x = Math.log10(x).toFixed(3);
  const log10b = Math.log10(b).toFixed(3);

  document.getElementById('log-result').innerText = res;
  document.getElementById('log-change-base').innerText = `${log10x} / ${log10b}`;
  document.getElementById('log-power-check').innerText = `${b}^(${res}) ≈ ${x}`;
}

function updateAlligSandbox() {
  const sp1 = document.getElementById('allig-slider-p1');
  const sp2 = document.getElementById('allig-slider-p2');
  const spm = document.getElementById('allig-slider-pm');
  if (!sp1 || !sp2 || !spm) return;

  const p1 = parseInt(sp1.value, 10);
  const p2 = parseInt(sp2.value, 10);
  let pm = parseInt(spm.value, 10);

  // Keep pm strictly between p1 and p2
  if (pm <= p1) pm = p1 + 1;
  if (pm >= p2) pm = p2 - 1;
  spm.min = p1 + 1;
  spm.max = p2 - 1;
  spm.value = pm;

  document.getElementById('allig-p1-val').innerText = `₹${p1}`;
  document.getElementById('allig-p2-val').innerText = `₹${p2}`;
  document.getElementById('allig-pm-val').innerText = `₹${pm}`;

  const diffDearer = p2 - pm;
  const diffCheaper = pm - p1;
  const commonDiv = gcd(diffDearer, diffCheaper);
  const r1 = diffDearer / commonDiv;
  const r2 = diffCheaper / commonDiv;

  document.getElementById('allig-diff-p2').innerText = `${diffDearer}`;
  document.getElementById('allig-diff-p1').innerText = `${diffCheaper}`;
  document.getElementById('allig-ratio').innerText = `${r1} : ${r2}`;
}

function updateGenSandbox() {
  const sBase = document.getElementById('gen-slider-base');
  const sRate = document.getElementById('gen-slider-rate');
  if (!sBase || !sRate) return;

  const base = parseFloat(sBase.value);
  const rate = parseFloat(sRate.value);

  document.getElementById('gen-base-val').innerText = `${base}`;
  document.getElementById('gen-rate-val').innerText = `${rate > 0 ? '+' : ''}${rate}%`;

  const mult = 1 + (rate / 100);
  const finalVal = (base * mult).toFixed(2);

  document.getElementById('gen-multiplier').innerText = `${mult.toFixed(2)}x`;
  document.getElementById('gen-final-val').innerText = `${finalVal}`;
}

// ==========================================================================
// FEATURE 6: IN-LINE MICRO-CHECKPOINTS (TAP-TO-TEST)
// ==========================================================================
function getTopicMicroCheckpoints(topicId) {
  const data = {
    'qa_logs': {
      question: 'Quick Check: If log₃(x) = 4, what is the value of x?',
      options: ['12', '64', '81', '243'],
      correctIdx: 2,
      explanation: '✓ Exactly! By definition of logarithm: x = 3⁴ = 81.'
    },
    'qa_tw': {
      question: 'Quick Check: A does work in 10 days, B in 15 days. What is the assumed LCM total work?',
      options: ['15 units', '30 units', '60 units', '150 units'],
      correctIdx: 1,
      explanation: '✓ Exactly! LCM(10, 15) = 30 units. A does 3 u/day, B does 2 u/day.'
    },
    'qa_allig': {
      question: 'Quick Check: Rice at ₹30 and ₹40 are mixed to get a mixture worth ₹33. What is the mixing ratio (Cheaper : Dearer)?',
      options: ['7 : 3', '3 : 7', '1 : 2', '2 : 3'],
      correctIdx: 0,
      explanation: '✓ Correct! w₁/w₂ = (40 - 33)/(33 - 30) = 7/3. Cheaper is closer to mean, so more of it is needed!'
    },
    'qa_tsd': {
      question: 'Quick Check: A travels at 30 km/h and returns along the same route at 60 km/h. What is the average speed?',
      options: ['45 km/h', '40 km/h', '48 km/h', '50 km/h'],
      correctIdx: 1,
      explanation: '✓ Correct! Harmonic Mean = 2(30)(60)/(30 + 60) = 3600 / 90 = 40 km/h!'
    },
    'qa_functions': {
      question: 'Quick Check: If f(x) satisfies f(x) + f(1/x) = f(x)f(1/x) and f(2) = 9, what is f(3)?',
      options: ['28', '27', '10', '16'],
      correctIdx: 0,
      explanation: '✓ Exactly! 9 = 2³ + 1 ⟹ f(x) = x³ + 1. Hence f(3) = 3³ + 1 = 28.'
    },
    'qa_inequalities': {
      question: 'Quick Check: What is the minimum value of f(x) = |x - 4| + |x - 10|?',
      options: ['0', '6', '14', '4'],
      correctIdx: 1,
      explanation: '✓ Correct! The minimum value is the plateau distance |10 - 4| = 6 on x ∈ [4, 10].'
    },
    'qa_maxima_minima': {
      question: 'Quick Check: For positive real x > 0, what is the minimum value of x + 9/x?',
      options: ['3', '6', '9', '18'],
      correctIdx: 1,
      explanation: '✓ Exactly! AM ≥ GM gives (x + 9/x)/2 ≥ √(9) = 3 ⟹ x + 9/x ≥ 6.'
    },
    'qa_polynomials': {
      question: 'Quick Check: If x + 1/x = 3, what is the value of x² + 1/x²?',
      options: ['7', '9', '11', '6'],
      correctIdx: 0,
      explanation: '✓ Correct! x² + 1/x² = k² - 2 = 3² - 2 = 7.'
    }
  };

  return data[topicId] || {
    question: 'Quick Check: When efficiency increases by 50% (factor of 3/2), what happens to time taken?',
    options: ['Reduces by 50%', 'Becomes 2/3 (reduces by 33.3%)', 'Reduces by 25%', 'Remains unchanged'],
    correctIdx: 1,
    explanation: '✓ Correct! Time is inversely proportional to efficiency: T = 1/(3/2) = 2/3 of original time.'
  };
}

function checkMicroCheckpoint(btnEl, isCorrect, explanation) {
  const parent = btnEl.parentElement;
  parent.querySelectorAll('.micro-opt-btn').forEach(b => {
    b.classList.remove('correct', 'wrong');
  });

  const fbBox = document.getElementById('micro-feedback-box');
  if (isCorrect) {
    btnEl.classList.add('correct');
    playAudioTone(580, 'sine', 0.12);
    if (fbBox) {
      fbBox.style.color = 'var(--accent-emerald)';
      fbBox.innerText = explanation;
    }
  } else {
    btnEl.classList.add('wrong');
    playAudioTone(240, 'sawtooth', 0.25);
    if (fbBox) {
      fbBox.style.color = 'var(--accent-rose)';
      fbBox.innerText = '✗ Not quite! Review the definition and try tapping again.';
    }
  }
}

// ==========================================================================
// FEATURE 7: SPLIT-SCREEN CONVENTIONAL VS. RODHA SHORTCUT SLIDER
// ==========================================================================
function getTopicSplitComparison(topicId) {
  const comparisons = {
    'qa_logs': {
      conv: `
        <strong>Step 1:</strong> Write x = log_2(3), y = log_3(5), z = log_5(8).<br/>
        <strong>Step 2:</strong> Expand change of base: (ln 3 / ln 2) · (ln 5 / ln 3) · (ln 8 / ln 5).<br/>
        <strong>Step 3:</strong> Form multi-line fractional substitutions across 8 lines.<br/>
        <strong>Step 4:</strong> Simplify common denominators.<br/>
        <em>⏱️ Typical time: 140 seconds. Error-prone algebraic substitution.</em>
      `,
      rodha: `
        <strong>Method 2 Inspection (Ravi Sir's Shortcut):</strong><br/>
        Notice the cyclic chain: 3 cancels 3, 5 cancels 5.<br/>
        Instantly: log_2(3) · log_3(5) · log_5(8) = log_2(8) = <strong>3</strong>.<br/>
        <em>⏱️ Pure mental inspection: 10 seconds flat! 0 lines written.</em>
      `
    },
    'qa_tw': {
      conv: `
        <strong>Step 1:</strong> Let A's 1-day work = 1/12.<br/>
        <strong>Step 2:</strong> Let B's 1-day work = 1/15.<br/>
        <strong>Step 3:</strong> Combined 1-day work = 1/12 + 1/15 = (5+4)/60 = 9/60 = 3/20.<br/>
        <strong>Step 4:</strong> Invert the fraction: Total days = 20/3 = 6.67 days.<br/>
        <em>⏱️ Fraught with fraction addition mistakes under time pressure.</em>
      `,
      rodha: `
        <strong>Method 2 LCM Unit Engine (Rodha Signature):</strong><br/>
        Total Work = LCM(12, 15) = 60 units.<br/>
        Efficiencies: A = 5 u/day, B = 4 u/day. Combined = 9 u/day.<br/>
        Days = 60 / 9 = 20 / 3 = <strong>6.67 days</strong>.<br/>
        <em>⏱️ Integer mental arithmetic: 15 seconds! Zero fraction manipulation.</em>
      `
    },
    'qa_tsd': {
      conv: `
        <strong>Conventional Method:</strong> Let escalator speed = e, walking speed = s. Write 2 simultaneous equations: N = 30 + 30e and N = 40 + 20e. Substitute variables across 10 lines of algebra.<br/>
        <em>⏱️ 120 seconds.</em>
      `,
      rodha: `
        <strong>Rodha Ratio Shortcut:</strong> Ratio of walking times = 30 : 20 = 3 : 2. Difference 1 unit = 10 steps. Escalator steps in Case 1 = 3 × 10 = 30 steps. Total N = 30 + 30 = <strong>60 steps</strong>.<br/>
        <em>⏱️ 15 seconds mental inspection (-85% time).</em>
      `
    },
    'qa_functions': {
      conv: `
        <strong>Textbook Method:</strong> Let f(x) = a_n x^n + ... + a_0. Expand product f(x)f(1/x) and equate all coefficients across 14 equations.<br/>
        <em>⏱️ 180 seconds.</em>
      `,
      rodha: `
        <strong>Rodha Functional Catalog:</strong> Identify standard form f(x) = 1 ± x^n immediately. With f(4)=65, 4^n = 64 ⟹ n = 3. Compute f(3) = 3³ + 1 = <strong>28</strong>.<br/>
        <em>⏱️ 10 seconds.</em>
      `
    },
    'qa_inequalities': {
      conv: `
        <strong>Textbook Method:</strong> Split into 4 piece-wise linear case intervals: x < 3, 3 ≤ x < 7, 7 ≤ x < 12, x ≥ 12. Evaluate each derivative separately.<br/>
        <em>⏱️ 140 seconds.</em>
      `,
      rodha: `
        <strong>Rodha Median Principle:</strong> For an odd number of absolute values, minimum occurs strictly at the MEDIAN point x = 7: |7-3| + |7-7| + |7-12| = <strong>9</strong>.<br/>
        <em>⏱️ 10 seconds.</em>
      `
    }
  };

  return comparisons[topicId] || {
    conv: `
      <strong>Textbook System:</strong> Set up algebraic variables x, y, z. Solve simultaneous 3-variable equations with substitution across 12 lines. Time: 150 seconds.
    `,
    rodha: `
      <strong>Rodha Speed Pathway:</strong> Use ratio scaling and invariant total. Equate parts directly to spot answer in 25 seconds.
    `
  };
}

function setSplitMode(mode) {
  document.querySelectorAll('.split-tab-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`tab-split-${mode}`);
  if (btn) btn.classList.add('active');

  const cCard = document.getElementById('split-card-conv');
  const rCard = document.getElementById('split-card-rodha');
  const vp = document.getElementById('split-comparison-viewport');

  if (mode === 'both') {
    if (vp) vp.style.gridTemplateColumns = '1fr 1fr';
    if (cCard) cCard.style.display = 'block';
    if (rCard) rCard.style.display = 'block';
  } else if (mode === 'conv') {
    if (vp) vp.style.gridTemplateColumns = '1fr';
    if (cCard) cCard.style.display = 'block';
    if (rCard) rCard.style.display = 'none';
  } else if (mode === 'rodha') {
    if (vp) vp.style.gridTemplateColumns = '1fr';
    if (cCard) cCard.style.display = 'none';
    if (rCard) rCard.style.display = 'block';
  }
}

// ==========================================================================
// FEATURE 8: "TRAP DEFUSER" BLUNDER-HUNTER GAME
// ==========================================================================
function getTopicTrapDefuser(topicId) {
  const traps = {
    'qa_logs': {
      question: 'Solve for x: log₂(x - 1) + log₂(x - 3) = 3',
      steps: [
        'Apply product rule: log₂[(x - 1)(x - 3)] = 3',
        'Convert to exponent: (x - 1)(x - 3) = 2³ = 8',
        'Expand & factor: x² - 4x + 3 = 8 ⟹ x² - 4x - 5 = 0 ⟹ (x - 5)(x + 1) = 0',
        'State answer: Both x = 5 and x = -1 are valid solutions.'
      ],
      trapIdx: 3,
      autopsy: 'TRAP DEFUSED! 💣✅ On Line 4, the student included x = -1. But for logarithms, argument must be strictly positive: x - 3 > 0 ⟹ x > 3! Thus x = -1 is an extraneous false root. Only x = 5 is valid!'
    },
    'qa_tw': {
      question: 'Pipe A fills in 10h, Pipe B fills in 15h, Drain Pipe C empties in 20h. Find time when all 3 open.',
      steps: [
        'Assign Total Work = LCM(10, 15, 20) = 60 units.',
        'Efficiencies: Rate(A) = 6 u/h, Rate(B) = 4 u/h, Rate(C) = 3 u/h.',
        'Combined Rate = Rate(A) + Rate(B) + Rate(C) = 6 + 4 + 3 = 13 u/h.',
        'Time = 60 / 13 = 4.61 hours.'
      ],
      trapIdx: 2,
      autopsy: 'TRAP DEFUSED! 💣✅ On Line 3, the student added Drain Pipe C as positive work! Drain pipes must be SUBTRACTED: Net Rate = 6 + 4 - 3 = 7 u/h. True time = 60 / 7 = 8.57 hours!'
    },
    'qa_tsd': {
      question: 'Two runners run on a circular track with speeds 12 m/s and 8 m/s in opposite directions. Find distinct meeting points.',
      steps: [
        'Identify speeds: S₁ = 12 m/s, S₂ = 8 m/s.',
        'Notice they run in opposite directions.',
        'Calculate number of distinct meeting points as S₁ + S₂ = 12 + 8 = 20 points.',
        'Conclude there are 20 distinct points evenly spaced around the circle.'
      ],
      trapIdx: 2,
      autopsy: 'TRAP DEFUSED! 💣✅ On Line 3, the student added raw speeds (12 + 8 = 20)! You MUST first reduce to coprime ratio: 12/8 = 3/2 (a=3, b=2). Distinct points = a + b = 3 + 2 = 5 points!'
    },
    'qa_inequalities': {
      question: 'Solve for x: (x - 1) / (x - 3) > 2',
      steps: [
        'Cross-multiply by (x - 3): x - 1 > 2(x - 3)',
        'Expand RHS: x - 1 > 2x - 6',
        'Rearrange terms: -x > -5 ⟹ x < 5',
        'State solution set as (-∞, 5).'
      ],
      trapIdx: 0,
      autopsy: 'TRAP DEFUSED! 💣✅ On Line 1, the student cross-multiplied by (x - 3) without knowing its sign! If x - 3 < 0, the inequality FLIPS. Correct method: bring 2 to the left side and use the Wavy Curve method!'
    }
  };

  return traps[topicId] || {
    question: 'Solve (x - 2)(x - 5) = 2(x - 2) for all integer roots.',
    steps: [
      'Divide both sides by (x - 2): (x - 5) = 2',
      'Add 5 to both sides: x = 7',
      'Conclude there is only 1 integer solution: x = 7.'
    ],
    trapIdx: 0,
    autopsy: 'TRAP DEFUSED! 💣✅ On Line 1, dividing by (x - 2) eliminated the valid root x = 2! Never divide by a variable expression without checking if it can equal zero!'
  };
}

function defuseTrapLine(lineEl, isTrap, autopsy) {
  const fb = document.getElementById('trap-defuser-feedback');
  if (isTrap) {
    lineEl.classList.add('defused-hit');
    playAudioTone(880, 'sine', 0.2);
    if (fb) {
      fb.style.color = 'var(--accent-emerald)';
      fb.innerHTML = autopsy;
    }
  } else {
    lineEl.classList.add('safe-hit');
    playAudioTone(200, 'sawtooth', 0.2);
    if (fb) {
      fb.style.color = 'var(--accent-rose)';
      fb.innerText = '⚠️ That line is mathematically valid! Look closer at domain constraints or operations.';
    }
  }
}

// ==========================================================================
// SYNTHETIC WEB AUDIO BEEP GENERATOR (100% OFFLINE)
// ==========================================================================
let audioCtx = null;
function playAudioTone(freq, type = 'sine', duration = 0.15) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.warn('AudioContext not permitted', e);
  }
}

// Hook Keyboard Shortcuts for Search, Calculator, and Cardio
document.addEventListener('keydown', (e) => {
  // Quick Jump Search Modal (Ctrl+K or Cmd+K)
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchModal();
    return;
  }

  // Escape to close modals
  if (e.key === 'Escape') {
    const videoModal = document.getElementById('video-theater-modal');
    if (videoModal && videoModal.classList.contains('active')) {
      closeVideoTheater();
      return;
    }
    const searchModal = document.getElementById('search-modal');
    if (searchModal && searchModal.classList.contains('active')) {
      closeSearchModal();
      return;
    }
  }

  // Speed Math Cardio Number Keys 1-4
  if (cardioState.isRunning && ['1', '2', '3', '4'].includes(e.key)) {
    const btns = document.querySelectorAll('.cardio-opt-btn');
    const idx = parseInt(e.key, 10) - 1;
    if (btns[idx]) btns[idx].click();
  }

  // Calculator Keys when calc window is active
  const calcWin = document.getElementById('cat-calc-window');
  if (calcWin && calcWin.classList.contains('active')) {
    if (e.key >= '0' && e.key <= '9') calcInput(e.key);
    else if (e.key === '.') calcInput('.');
    else if (['+', '-', '*', '/'].includes(e.key)) calcOp(e.key);
    else if (e.key === 'Enter' || e.key === '=') calcEquals();
    else if (e.key === 'Backspace') calcAction('backspace');
    else if (e.key === 'Escape') calcAction('c');
  }
});

// ==========================================================================
// QUICK COMMAND SEARCH MODAL (LINEAR-STYLE JUMP BAR)
// ==========================================================================
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  modal.classList.add('active');
  const input = document.getElementById('quick-search-input');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 50);
  }
  renderSearchResults('');
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('active');
}

function handleSearchInput(query) {
  renderSearchResults(query.trim().toLowerCase());
}

function renderSearchResults(q) {
  const container = document.getElementById('search-results-list');
  if (!container) return;

  const results = [];

  const quickActions = [
    {
      title: '60s Speed Math Cardio Drill',
      subtitle: 'Fast-fire mental math calculation adrenaline workout',
      badge: 'Action',
      icon: '⚡',
      action: () => { closeSearchModal(); startSpeedMathCardio(); }
    },
    {
      title: 'CAT Virtual Calculator',
      subtitle: 'Official TCS iON on-screen scientific keypad simulator',
      badge: 'Tool',
      icon: '🖩',
      action: () => { closeSearchModal(); toggleCatCalculator(); }
    },
    {
      title: 'Chook Diary (Due Today Mistakes)',
      subtitle: 'Spaced repetition auto-filtered blunder review vault',
      badge: 'Review',
      icon: '📔',
      action: () => { closeSearchModal(); switchView('diary'); }
    },
    {
      title: 'Sectional CBT Mock Simulator',
      subtitle: '40-minute real exam condition timed simulator with timer',
      badge: 'Test',
      icon: '⏱️',
      action: () => { closeSearchModal(); switchView('mock'); }
    }
  ];

  if (!q) {
    results.push(...quickActions);
    if (window.QA_TOPICS_DATA) {
      window.QA_TOPICS_DATA.slice(0, 5).forEach(t => {
        results.push({
          title: t.title,
          subtitle: `Quant (${t.domain}) • ${t.tier} • ${t.weightage}`,
          badge: 'Quant',
          icon: '📐',
          action: () => { closeSearchModal(); startTopicSprint('qa', t.id); }
        });
      });
    }
  } else {
    quickActions.forEach(act => {
      if (act.title.toLowerCase().includes(q) || act.subtitle.toLowerCase().includes(q)) {
        results.push(act);
      }
    });

    if (window.QA_TOPICS_DATA) {
      window.QA_TOPICS_DATA.forEach(t => {
        if (t.title.toLowerCase().includes(q) || (t.domain && t.domain.toLowerCase().includes(q)) || t.id.toLowerCase().includes(q)) {
          results.push({
            title: t.title,
            subtitle: `Quant (${t.domain}) • ${t.tier} • ${t.weightage}`,
            badge: 'Quant',
            icon: '📐',
            action: () => { closeSearchModal(); startTopicSprint('qa', t.id); }
          });
        }
      });
    }

    if (window.DILR_ARCHETYPES_DATA) {
      window.DILR_ARCHETYPES_DATA.forEach(d => {
        if (d.title.toLowerCase().includes(q) || d.id.toLowerCase().includes(q)) {
          results.push({
            title: d.title,
            subtitle: `DILR Set • ${d.tier} • ${d.weightage}`,
            badge: 'DILR',
            icon: '🧩',
            action: () => { closeSearchModal(); startTopicSprint('dilr', d.id); }
          });
        }
      });
    }

    if (window.VARC_MODULES_DATA) {
      window.VARC_MODULES_DATA.forEach(v => {
        if (v.title.toLowerCase().includes(q) || v.id.toLowerCase().includes(q)) {
          results.push({
            title: v.title,
            subtitle: `VARC Drill • ${v.tier} • ${v.weightage}`,
            badge: 'VARC',
            icon: '📖',
            action: () => { closeSearchModal(); startTopicSprint('varc', v.id); }
          });
        }
      });
    }
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div style="padding:24px; text-align:center; color:var(--text-muted); font-size:0.9rem;">
        No results found for "<span style="color:#fff;">${q}</span>". Try searching "TSD", "Logarithms", "Venn", or "Cardio".
      </div>
    `;
    return;
  }

  container.innerHTML = results.map((res, i) => `
    <div class="search-result-item" onclick="executeSearchResult(${i})">
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:1.25rem;">${res.icon}</span>
        <div>
          <div style="font-weight:600; font-size:0.95rem; color:#f8fafc;">${res.title}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${res.subtitle}</div>
        </div>
      </div>
      <span class="badge ${res.badge === 'Quant' ? 'badge-tier-s' : (res.badge === 'DILR' ? 'badge-formula' : 'badge-exam')}" style="font-size:0.7rem;">${res.badge}</span>
    </div>
  `).join('');

  window._activeSearchResults = results;
}

function executeSearchResult(index) {
  if (window._activeSearchResults && window._activeSearchResults[index]) {
    window._activeSearchResults[index].action();
  }
}

// ==========================================================================
// LIVE PWA NETWORK STATUS MONITORING
// ==========================================================================
function updatePwaNetworkStatus() {
  const badge = document.getElementById('pwa-network-badge');
  const text = document.getElementById('network-status-text');
  if (!badge || !text) return;

  if (navigator.onLine) {
    badge.className = 'network-badge online';
    text.textContent = 'Online (PWA Ready)';
    badge.title = 'PWA Service Worker Active - Fully Cached & Offline Ready';
  } else {
    badge.className = 'network-badge offline';
    text.textContent = 'Offline Active';
    badge.title = 'Offline Mode Active - All 297 Qs & Engines Cached Locally';
  }
}
window.addEventListener('online', updatePwaNetworkStatus);
window.addEventListener('offline', updatePwaNetworkStatus);
updatePwaNetworkStatus();

// ==========================================================================
// PWA SERVICE WORKER & APP INSTALL LIFECYCLE
// ==========================================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('[PWA] ServiceWorker registered with scope:', reg.scope))
      .catch(err => console.warn('[PWA] ServiceWorker registration failed:', err));
  });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btnInstall = document.getElementById('btn-install-app');
  if (btnInstall) btnInstall.style.display = 'flex';
});

window.addEventListener('appinstalled', () => {
  console.log('[PWA] App successfully installed as native PWA!');
  const btnInstall = document.getElementById('btn-install-app');
  if (btnInstall) btnInstall.style.display = 'none';
  deferredPrompt = null;
});

function triggerPwaInstall() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('[PWA] User accepted install prompt');
      }
      deferredPrompt = null;
      const btnInstall = document.getElementById('btn-install-app');
      if (btnInstall) btnInstall.style.display = 'none';
    });
  } else {
    alert('CAT Mastery 99 is already running as a PWA or can be installed via your browser menu (Install app / Add to Home screen).');
  }
}

// Run Spaced Repetition Check on load and every minute
setInterval(checkDueTodaySpacedRep, 60000);
setTimeout(checkDueTodaySpacedRep, 500);

// ==========================================================================
// RODHA IN-APP VIDEO THEATER CONTROLLER
// ==========================================================================
function openVideoTheater(title, embedUrl, directUrl) {
  const modal = document.getElementById('video-theater-modal');
  const titleEl = document.getElementById('video-theater-title');
  const extBtn = document.getElementById('video-theater-external-btn');
  const body = document.getElementById('video-theater-body');
  if (!modal || !body) return;

  const decodedTitle = decodeURIComponent(title);
  if (titleEl) titleEl.innerText = decodedTitle;
  if (extBtn) extBtn.href = directUrl || '#';

  if (!navigator.onLine) {
    body.innerHTML = `
      <div class="video-offline-warning">
        <div style="font-size:2.8rem; margin-bottom:12px;">📡</div>
        <h4 style="color:#f8fafc; font-size:1.15rem; margin-bottom:8px;">Streaming Requires Internet Connection</h4>
        <p style="font-size:0.85rem; max-width:440px; margin:0 auto 16px; color:var(--text-muted); line-height:1.5;">
          You are currently in Offline Mode. All study formulas, 297 questions, and 30-second audio capsules remain 100% accessible offline.
        </p>
        <a href="${directUrl}" target="_blank" rel="noopener noreferrer" class="btn-video-external" style="font-size:0.85rem; padding:8px 16px;">
          Try Opening in YouTube App ↗
        </a>
      </div>
    `;
  } else {
    // Online: embed high-resolution distraction-free player
    body.innerHTML = `
      <iframe 
        src="${embedUrl}" 
        title="${decodedTitle}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>
    `;
  }

  modal.classList.add('active');
}

function closeVideoTheater() {
  const modal = document.getElementById('video-theater-modal');
  const body = document.getElementById('video-theater-body');
  if (body) body.innerHTML = ''; // Stops audio immediately
  if (modal) modal.classList.remove('active');
}

function openTopicVideoLecture() {
  const t = activeSprint.topic;
  if (t && t.videoLecture) {
    openVideoTheater(encodeURIComponent(t.videoLecture.title), t.videoLecture.embedUrl, t.videoLecture.directUrl);
  }
}

function openTopicVideoLectureById(subject, id) {
  let topic = null;
  if (subject === 'qa' && window.QA_TOPICS_DATA) topic = window.QA_TOPICS_DATA.find(t => t.id === id);
  else if (subject === 'dilr' && window.DILR_ARCHETYPES_DATA) topic = window.DILR_ARCHETYPES_DATA.find(d => d.id === id);
  else if (subject === 'varc' && window.VARC_MODULES_DATA) topic = window.VARC_MODULES_DATA.find(v => v.id === id);

  if (topic && topic.videoLecture) {
    openVideoTheater(encodeURIComponent(topic.videoLecture.title), topic.videoLecture.embedUrl, topic.videoLecture.directUrl);
  } else {
    window.open('https://www.youtube.com/playlist?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ', '_blank');
  }
}

function openDiaryTopicVideo(topicTitle) {
  let found = null;
  if (window.QA_TOPICS_DATA) {
    found = window.QA_TOPICS_DATA.find(t => t.title.toLowerCase().includes(topicTitle.toLowerCase()) || topicTitle.toLowerCase().includes(t.title.toLowerCase()));
  }
  if (!found && window.DILR_ARCHETYPES_DATA) {
    found = window.DILR_ARCHETYPES_DATA.find(d => d.title.toLowerCase().includes(topicTitle.toLowerCase()) || topicTitle.toLowerCase().includes(d.title.toLowerCase()));
  }
  if (!found && window.VARC_MODULES_DATA) {
    found = window.VARC_MODULES_DATA.find(v => v.title.toLowerCase().includes(topicTitle.toLowerCase()) || topicTitle.toLowerCase().includes(v.title.toLowerCase()));
  }

  if (found && found.videoLecture) {
    openVideoTheater(encodeURIComponent(found.videoLecture.title), found.videoLecture.embedUrl, found.videoLecture.directUrl);
  } else {
    window.open(`https://www.youtube.com/results?search_query=Rodha+CAT+${encodeURIComponent(topicTitle)}+Ravi+Prakash`, '_blank');
  }
}

// ==========================================================================
// UNIFIED UPGRADE: KEYBOARD HOTKEYS FOR PRACTICE
// ==========================================================================
window.addEventListener('keydown', (e) => {
  const step2 = document.getElementById('sprint-step-2');
  if (!step2 || step2.style.display === 'none') return;
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

  const key = e.key.toUpperCase();
  const q = activeSprint.questions[activeSprint.currentIndex];

  if (['A', 'B', 'C', 'D'].includes(key) && q && q.options && q.options.length) {
    const optIdx = key.charCodeAt(0) - 65;
    if (q.options[optIdx]) {
      selectSprintAnswer(q.options[optIdx]);
    }
  } else if (['1', '2', '3', '4'].includes(key) && q && q.options && q.options.length) {
    const optIdx = parseInt(key, 10) - 1;
    if (q.options[optIdx]) {
      selectSprintAnswer(q.options[optIdx]);
    }
  } else if (key === 'F') {
    markSprintForReview();
  } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
    nextSprintQuestion();
  } else if (e.key === 'ArrowLeft') {
    prevSprintQuestion();
  }
});

// ==========================================================================
// UNIFIED UPGRADE: DAILY 15-MIN POWER CHALLENGE ENGINE
// ==========================================================================
function launchDaily15MinChallenge() {
  switchView('sprint');
  activeSprint.subject = 'qa';
  activeSprint.currentStep = 1;
  activeSprint.currentIndex = 0;
  activeSprint.autopsyIndex = 0;
  activeSprint.userAnswers = {};
  activeSprint.isDailyChallenge = true;

  let challengeQs = [];

  // 1. RC Question from VARC
  if (window.VARC_MODULES_DATA && window.VARC_MODULES_DATA.length > 0) {
    const rcModule = window.VARC_MODULES_DATA[0];
    if (rcModule.questions && rcModule.questions[0]) {
      challengeQs.push({
        ...rcModule.questions[0],
        title: "Daily RC Focus: Parasummary & Elimination",
        provenance: "VARC • Daily Challenge • CAT 2024 Caliber",
        domain: "VARC"
      });
    }
  }

  // 2. DILR Caselet Question
  if (window.DILR_ARCHETYPES_DATA && window.DILR_ARCHETYPES_DATA.length > 0) {
    const dilrSet = window.DILR_ARCHETYPES_DATA[0];
    if (dilrSet.caselets && dilrSet.caselets[0] && dilrSet.caselets[0].questions && dilrSet.caselets[0].questions[0]) {
      const c = dilrSet.caselets[0];
      const q = c.questions[0];
      challengeQs.push({
        qNum: 2,
        title: "Daily DILR Focus: Venn Deductions",
        problem: `**Context:** ${c.context}\n\n**Question:** ${q.statement}`,
        concept: "DILR Set Selection & Bounds",
        method1: q.solution,
        method2: q.shortcut,
        finalAnswer: q.correctAnswer,
        trap: q.trap,
        options: q.options,
        provenance: "DILR • Daily Challenge • CAT 2023 Slot 2 Caliber",
        domain: "DILR"
      });
    }
  }

  // 3. 4 QA Questions from Tier 1 Arithmetic & Algebra
  if (window.QA_TOPICS_DATA) {
    const t1Topics = ['qa_tsd', 'qa_tw', 'qa_logs', 'qa_quad'];
    t1Topics.forEach((tId, idx) => {
      const top = window.QA_TOPICS_DATA.find(t => t.id === tId);
      if (top && top.questions && top.questions[0]) {
        challengeQs.push({
          ...top.questions[0],
          title: `Daily QA: ${top.title}`,
          provenance: `QA • Daily Challenge • CAT ${2021 + idx} Slot ${(idx % 3) + 1} Caliber`,
          domain: "QA"
        });
      }
    });
  }

  activeSprint.topic = {
    id: 'daily_challenge',
    title: 'Daily CAT 99 Power Challenge (1 RC + 1 DILR + 4 QA)',
    weightage: '~18 Exam Marks',
    prepTime: '15-20 Min',
    theory: `### ⚡ Daily CAT 99 Workout Strategy\n- **Target:** Complete all 6 mixed questions under 18 minutes.\n- **Pacing:** ~3 min per RC/DILR question, ~2 min per QA question.\n- **Objective:** Train cognitive section-switching agility to eliminate real CAT exam fatigue.`
  };
  activeSprint.questions = challengeQs;

  // Populate Step 1 & Jump
  const theoryBox = document.getElementById('sprint-theory-box');
  if (theoryBox) {
    theoryBox.innerHTML = `
      <div class="card" style="border-left: 4px solid var(--accent-amber);">
        <h3 style="color:var(--accent-amber); font-weight:800; margin-bottom:8px;">🔥 Daily CAT 99 Power Workout Active</h3>
        <p style="color:var(--text-secondary); margin-bottom:14px;">You are about to begin today's curated 6-question workout (1 RC Passage + 1 DILR Caselet + 4 High-Yield Quant Questions). This drill is designed to calibrate your exam mental stamina and increase your daily discipline streak.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <span class="provenance-pill">Duration: 15-20 Minutes</span>
          <span class="yield-pill">Weightage: ~18 Exam Marks</span>
        </div>
      </div>
    `;
  }

  jumpSprintStep(1);

  const statusPill = document.getElementById('daily-challenge-status');
  if (statusPill) {
    statusPill.innerText = "In Progress 🔥";
    statusPill.style.background = "rgba(245, 158, 11, 0.25)";
  }
}

// ==========================================================================
// UNIFIED UPGRADE: 1-CLICK QUICK CHOOK DIARY MODAL
// ==========================================================================
let currentQuickBlunderTag = '[TRP]';

function openQuickDiaryModal() {
  const modal = document.getElementById('quick-diary-modal');
  if (modal) modal.classList.add('active');
  selectQuickDiaryTag('[TRP]');
  const noteInput = document.getElementById('quick-diary-note');
  if (noteInput) noteInput.value = '';
}

function closeQuickDiaryModal() {
  const modal = document.getElementById('quick-diary-modal');
  if (modal) modal.classList.remove('active');
}

function selectQuickDiaryTag(tag) {
  currentQuickBlunderTag = tag;
  document.querySelectorAll('.quick-tag-btn').forEach(btn => btn.classList.remove('selected'));
  if (tag === '[TRP]') document.getElementById('qtag-trp')?.classList.add('selected');
  if (tag === '[CALC]') document.getElementById('qtag-calc')?.classList.add('selected');
  if (tag === '[CON]') document.getElementById('qtag-con')?.classList.add('selected');
  if (tag === '[TIME]') document.getElementById('qtag-time')?.classList.add('selected');
}

function submitQuickDiaryBlunder() {
  const q = activeSprint.questions[activeSprint.currentIndex];
  if (!q) return;

  const noteInput = document.getElementById('quick-diary-note');
  const customNote = noteInput ? noteInput.value.trim() : '';

  const entries = JSON.parse(localStorage.getItem('cat_chook_diary') || '[]');
  const now = new Date();

  const newBlunder = {
    id: 'ERR_' + Date.now(),
    date: now.toISOString().split('T')[0],
    subject: (activeSprint.subject || 'QA').toUpperCase(),
    topic: activeSprint.topic ? activeSprint.topic.title : 'Sprint Practice',
    tag: currentQuickBlunderTag,
    questionSummary: q.problem ? q.problem.substring(0, 140) + '...' : 'Sprint Question',
    correctAnswer: q.finalAnswer || 'See Solution Autopsy',
    lesson: customNote || (q.trap ? `CRITICAL TRAP: ${q.trap}` : 'Review edge conditions and algebra constraints.'),
    t1: false,
    t7: false,
    t21: false
  };

  entries.unshift(newBlunder);
  localStorage.setItem('cat_chook_diary', JSON.stringify(entries));

  closeQuickDiaryModal();
  updateDashboardStats();
  if (typeof checkDueTodaySpacedRep === 'function') checkDueTodaySpacedRep();
  alert(`✅ Blunder logged to Chook Diary under ${currentQuickBlunderTag}! Scheduled for Spaced Repetition (T+1, T+7, T+21).`);
}

// ==========================================================================
// MOBILE QR MODAL CONTROLLER
// ==========================================================================
function openMobileQrModal() {
  const modal = document.getElementById('mobile-qr-modal');
  if (modal) modal.style.display = 'flex';
}

function closeMobileQrModal() {
  const modal = document.getElementById('mobile-qr-modal');
  if (modal) modal.style.display = 'none';
}


