window.DILR_ARCHETYPES_DATA = [
  {
    "id": "dilr_chocolate",
    "title": "Venn Maxima-Minima (Ravi Sir's Chocolate Method)",
    "tier": "Tier S",
    "weightage": "1 Full Set (5 Qs | 15 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. Concept Genesis: Why the Chocolate Method?</h4>\n<div class='theory-block'>When CAT asks **Maxima and Minima** problems across multiple attributes (e.g., 100 students: 80 passed English, 75 passed Math, 70 passed Science, 65 passed History; find min/max passing at least 3 subjects):\n- Traditional Venn diagrams require solving indeterminate systems of 16 inequalities.\n- **Ravi Sir's Chocolate Method** converts the problem into **distributing discrete items (chocolates) into $N$ buckets (people)**.\n\n---</div>\n<h4>2. The Chocolate Model Translation</h4>\n<div class='theory-block'>- Total students $= N = 100$.\n- Passing a subject is treated as **receiving 1 chocolate**.\n- Total chocolates available:\n  $$C_{\\text{total}} = 80 + 75 + 70 + 65 = 290 \\text{ chocolates}$$\n- Each of the 100 students can receive between $0$ and $4$ chocolates:\n  $$0 \\le c_i \\le 4 \\quad \\text{for } i = 1, 2, \\dots, 100$$\n- We want to optimize the number of people having $\\ge 3$ chocolates (i.e., having either 3 or 4 chocolates).\n\n---</div>\n<h4>3. The Two Optimization Extremes</h4>\n<div class='theory-block'>### 3.1 Case 1: MINIMIZING the Number of People with $\\ge 3$ Chocolates\nTo make the group with $\\ge 3$ chocolates as **SMALL** as possible:\n- We must dump as many chocolates as legally permissible into as few people as possible:\n  - Give the **maximum allowed** ($4$ chocolates) to a group of size $x$.\n- Give the **maximum possible without qualifying** ($2$ chocolates) to all the remaining $(100 - x)$ people.\n- Set up the conservation equation:\n  $$4x + 2(100 - x) = 290$$\n  $$4x + 200 - 2x = 290 \\implies 2x = 90 \\implies \\mathbf{x = 45}$$\n- **Result:** A minimum of **45 students** passed at least 3 subjects! *(Solved in 15 seconds without Venn diagrams).*\n\n### 3.2 Case 2: MAXIMIZING the Number of People with $\\ge 3$ Chocolates\nTo make the group with $\\ge 3$ chocolates as **LARGE** as possible:\n- Give **barely enough to qualify** ($3$ chocolates) to as many people $y$ as possible.\n- Give the rest $0$ chocolates:\n  $$3y \\le 290 \\implies y = \\left\\lfloor \\frac{290}{3} \\right\\rfloor = 96$$\n  $$290 - 3(96) = 290 - 288 = 2 \\text{ extra chocolates}$$\n- Distribute the remaining 2 chocolates by making two students receive 4 chocolates instead of 3.\n- All 96 students still have $\\ge 3$ chocolates!\n- **Result:** A maximum of **96 students** can pass at least 3 subjects.\n\n---</div>\n<h4>4. Universal Formulation Rule</h4>\n<div class='theory-block'>For $N$ students, $K$ total subjects, total chocolates $C$:\n$$\\begin{array}{|l|l|}\n\\hline\n\\textbf{Objective} & \\textbf{Bucket Allocation Strategy} \\\\\n\\hline\n\\textbf{Minimizing } (\\ge m) & \\text{Fill with maximum possible } K \\text{ and buffer at } (m - 1) \\\\\n\\hline\n\\textbf{Maximizing } (\\ge m) & \\text{Fill with exactly } m \\text{ and balance remainder at } 0 \\\\\n\\hline\n\\end{array}$$</div>",
    "formulas": [
      {
        "formula": "C_{\\text{total}} = 80 + 75 + 70 + 65 = 290 \\text{ chocolates}"
      },
      {
        "formula": "0 \\le c_i \\le 4 \\quad \\text{for } i = 1, 2, \\dots, 100"
      },
      {
        "formula": "4x + 2(100 - x) = 290"
      },
      {
        "formula": "4x + 200 - 2x = 290 \\implies 2x = 90 \\implies \\mathbf{x = 45}"
      },
      {
        "formula": "3y \\le 290 \\implies y = \\left\\lfloor \\frac{290}{3} \\right\\rfloor = 96"
      },
      {
        "formula": "290 - 3(96) = 290 - 288 = 2 \\text{ extra chocolates}"
      }
    ],
    "caselets": [
      {
        "caseletNum": 48,
        "title": "Maxima and Minima by Chocolate Distribution | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the core transformation of Ravi Sir's Chocolate Distribution Method?",
            "options": [
              "A) Transforming set intersections into Venn circle geometry",
              "B) Converting multi-attribute pass counts into discrete chocolates distributed into N candidate buckets",
              "C) Using binomial probability expansion",
              "D) Applying standard deviation to scores"
            ],
            "correctAnswer": "B",
            "solution": "The Chocolate Method eliminates indeterminate 16-region Venn systems by viewing each attribute passed as 1 chocolate awarded. Conservation of total chocolates then enables instant linear optimization.",
            "shortcut": "Total chocolates = Sum of all individual attribute counts.",
            "trap": "Trying to draw 4-circle Venn diagrams on exam paper."
          },
          {
            "qNum": 2,
            "statement": "In a group of N people with K total criteria and total passes C, what is the equation to MINIMIZE the number of people x satisfying at least m criteria?",
            "options": [
              "A) Kx + (m - 1)(N - x) = C",
              "B) mx + K(N - x) = C",
              "C) x = C / m",
              "D) x = N - C / K"
            ],
            "correctAnswer": "A",
            "solution": "To minimize the qualifying group x, maximize the chocolates dumped on them (give all K to x), and give non-qualifiers the maximum allowable without qualifying (give m - 1 to N - x). Conservation gives Kx + (m - 1)(N - x) = C.",
            "shortcut": "Saturate qualifiers with K; buffer non-qualifiers at (m - 1).",
            "trap": "Giving 0 chocolates to non-qualifiers in minimization."
          },
          {
            "qNum": 3,
            "statement": "In a 3-set Venn diagram, if S_1 = sum of individual sets and S_2 = sum of pairwise intersections, what is the count of elements in EXACTLY TWO sets?",
            "options": [
              "A) S_2 - S_3",
              "B) S_2 - 3(S_3)",
              "C) S_1 - 2(S_2)",
              "D) S_2 / 2"
            ],
            "correctAnswer": "B",
            "solution": "Each pairwise intersection n(A cap B) contains elements in exactly two sets plus the central region common to all three (S_3). Summing the 3 pairwise intersections counts S_3 three times. Thus II = S_2 - 3(S_3).",
            "shortcut": "II = S_2 - 3 * III.",
            "trap": "Subtracting S_3 only once instead of three times."
          },
          {
            "qNum": 4,
            "statement": "When is the Chocolate Distribution Method preferred over drawing traditional Venn diagrams?",
            "options": [
              "A) When individual 3-way intersection values are explicitly given",
              "B) When there are 4 or more sets and questions ask for Maxima/Minima of 'at least k' conditions",
              "C) Only when N < 50",
              "D) Only for percentages"
            ],
            "correctAnswer": "B",
            "solution": "Venn diagrams become geometrically non-trivial beyond 3 sets. The Chocolate Method solves 4, 5, or 6-set Maxima/Minima problems in under 30 seconds using single-variable linear conservation.",
            "shortcut": ">= 4 sets + Maxima/Minima = Chocolate Method.",
            "trap": "Using Venn circles for 4 sets."
          }
        ]
      },
      {
        "caseletNum": 49,
        "title": "Maxima and Minima: Chocolate, At Least Three | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the core transformation of Ravi Sir's Chocolate Distribution Method?",
            "options": [
              "A) Transforming set intersections into Venn circle geometry",
              "B) Converting multi-attribute pass counts into discrete chocolates distributed into N candidate buckets",
              "C) Using binomial probability expansion",
              "D) Applying standard deviation to scores"
            ],
            "correctAnswer": "B",
            "solution": "The Chocolate Method eliminates indeterminate 16-region Venn systems by viewing each attribute passed as 1 chocolate awarded. Conservation of total chocolates then enables instant linear optimization.",
            "shortcut": "Total chocolates = Sum of all individual attribute counts.",
            "trap": "Trying to draw 4-circle Venn diagrams on exam paper."
          },
          {
            "qNum": 2,
            "statement": "In a group of N people with K total criteria and total passes C, what is the equation to MINIMIZE the number of people x satisfying at least m criteria?",
            "options": [
              "A) Kx + (m - 1)(N - x) = C",
              "B) mx + K(N - x) = C",
              "C) x = C / m",
              "D) x = N - C / K"
            ],
            "correctAnswer": "A",
            "solution": "To minimize the qualifying group x, maximize the chocolates dumped on them (give all K to x), and give non-qualifiers the maximum allowable without qualifying (give m - 1 to N - x). Conservation gives Kx + (m - 1)(N - x) = C.",
            "shortcut": "Saturate qualifiers with K; buffer non-qualifiers at (m - 1).",
            "trap": "Giving 0 chocolates to non-qualifiers in minimization."
          },
          {
            "qNum": 3,
            "statement": "In a 3-set Venn diagram, if S_1 = sum of individual sets and S_2 = sum of pairwise intersections, what is the count of elements in EXACTLY TWO sets?",
            "options": [
              "A) S_2 - S_3",
              "B) S_2 - 3(S_3)",
              "C) S_1 - 2(S_2)",
              "D) S_2 / 2"
            ],
            "correctAnswer": "B",
            "solution": "Each pairwise intersection n(A cap B) contains elements in exactly two sets plus the central region common to all three (S_3). Summing the 3 pairwise intersections counts S_3 three times. Thus II = S_2 - 3(S_3).",
            "shortcut": "II = S_2 - 3 * III.",
            "trap": "Subtracting S_3 only once instead of three times."
          },
          {
            "qNum": 4,
            "statement": "When is the Chocolate Distribution Method preferred over drawing traditional Venn diagrams?",
            "options": [
              "A) When individual 3-way intersection values are explicitly given",
              "B) When there are 4 or more sets and questions ask for Maxima/Minima of 'at least k' conditions",
              "C) Only when N < 50",
              "D) Only for percentages"
            ],
            "correctAnswer": "B",
            "solution": "Venn diagrams become geometrically non-trivial beyond 3 sets. The Chocolate Method solves 4, 5, or 6-set Maxima/Minima problems in under 30 seconds using single-variable linear conservation.",
            "shortcut": ">= 4 sets + Maxima/Minima = Chocolate Method.",
            "trap": "Using Venn circles for 4 sets."
          }
        ]
      },
      {
        "caseletNum": 50,
        "title": "When to Use Venn Diagram or Chocolate Method | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the core transformation of Ravi Sir's Chocolate Distribution Method?",
            "options": [
              "A) Transforming set intersections into Venn circle geometry",
              "B) Converting multi-attribute pass counts into discrete chocolates distributed into N candidate buckets",
              "C) Using binomial probability expansion",
              "D) Applying standard deviation to scores"
            ],
            "correctAnswer": "B",
            "solution": "The Chocolate Method eliminates indeterminate 16-region Venn systems by viewing each attribute passed as 1 chocolate awarded. Conservation of total chocolates then enables instant linear optimization.",
            "shortcut": "Total chocolates = Sum of all individual attribute counts.",
            "trap": "Trying to draw 4-circle Venn diagrams on exam paper."
          },
          {
            "qNum": 2,
            "statement": "In a group of N people with K total criteria and total passes C, what is the equation to MINIMIZE the number of people x satisfying at least m criteria?",
            "options": [
              "A) Kx + (m - 1)(N - x) = C",
              "B) mx + K(N - x) = C",
              "C) x = C / m",
              "D) x = N - C / K"
            ],
            "correctAnswer": "A",
            "solution": "To minimize the qualifying group x, maximize the chocolates dumped on them (give all K to x), and give non-qualifiers the maximum allowable without qualifying (give m - 1 to N - x). Conservation gives Kx + (m - 1)(N - x) = C.",
            "shortcut": "Saturate qualifiers with K; buffer non-qualifiers at (m - 1).",
            "trap": "Giving 0 chocolates to non-qualifiers in minimization."
          },
          {
            "qNum": 3,
            "statement": "In a 3-set Venn diagram, if S_1 = sum of individual sets and S_2 = sum of pairwise intersections, what is the count of elements in EXACTLY TWO sets?",
            "options": [
              "A) S_2 - S_3",
              "B) S_2 - 3(S_3)",
              "C) S_1 - 2(S_2)",
              "D) S_2 / 2"
            ],
            "correctAnswer": "B",
            "solution": "Each pairwise intersection n(A cap B) contains elements in exactly two sets plus the central region common to all three (S_3). Summing the 3 pairwise intersections counts S_3 three times. Thus II = S_2 - 3(S_3).",
            "shortcut": "II = S_2 - 3 * III.",
            "trap": "Subtracting S_3 only once instead of three times."
          },
          {
            "qNum": 4,
            "statement": "When is the Chocolate Distribution Method preferred over drawing traditional Venn diagrams?",
            "options": [
              "A) When individual 3-way intersection values are explicitly given",
              "B) When there are 4 or more sets and questions ask for Maxima/Minima of 'at least k' conditions",
              "C) Only when N < 50",
              "D) Only for percentages"
            ],
            "correctAnswer": "B",
            "solution": "Venn diagrams become geometrically non-trivial beyond 3 sets. The Chocolate Method solves 4, 5, or 6-set Maxima/Minima problems in under 30 seconds using single-variable linear conservation.",
            "shortcut": ">= 4 sets + Maxima/Minima = Chocolate Method.",
            "trap": "Using Venn circles for 4 sets."
          }
        ]
      },
      {
        "caseletNum": 51,
        "title": "Chocolate Distribution: Five Subjects Table Set | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the core transformation of Ravi Sir's Chocolate Distribution Method?",
            "options": [
              "A) Transforming set intersections into Venn circle geometry",
              "B) Converting multi-attribute pass counts into discrete chocolates distributed into N candidate buckets",
              "C) Using binomial probability expansion",
              "D) Applying standard deviation to scores"
            ],
            "correctAnswer": "B",
            "solution": "The Chocolate Method eliminates indeterminate 16-region Venn systems by viewing each attribute passed as 1 chocolate awarded. Conservation of total chocolates then enables instant linear optimization.",
            "shortcut": "Total chocolates = Sum of all individual attribute counts.",
            "trap": "Trying to draw 4-circle Venn diagrams on exam paper."
          },
          {
            "qNum": 2,
            "statement": "In a group of N people with K total criteria and total passes C, what is the equation to MINIMIZE the number of people x satisfying at least m criteria?",
            "options": [
              "A) Kx + (m - 1)(N - x) = C",
              "B) mx + K(N - x) = C",
              "C) x = C / m",
              "D) x = N - C / K"
            ],
            "correctAnswer": "A",
            "solution": "To minimize the qualifying group x, maximize the chocolates dumped on them (give all K to x), and give non-qualifiers the maximum allowable without qualifying (give m - 1 to N - x). Conservation gives Kx + (m - 1)(N - x) = C.",
            "shortcut": "Saturate qualifiers with K; buffer non-qualifiers at (m - 1).",
            "trap": "Giving 0 chocolates to non-qualifiers in minimization."
          },
          {
            "qNum": 3,
            "statement": "In a 3-set Venn diagram, if S_1 = sum of individual sets and S_2 = sum of pairwise intersections, what is the count of elements in EXACTLY TWO sets?",
            "options": [
              "A) S_2 - S_3",
              "B) S_2 - 3(S_3)",
              "C) S_1 - 2(S_2)",
              "D) S_2 / 2"
            ],
            "correctAnswer": "B",
            "solution": "Each pairwise intersection n(A cap B) contains elements in exactly two sets plus the central region common to all three (S_3). Summing the 3 pairwise intersections counts S_3 three times. Thus II = S_2 - 3(S_3).",
            "shortcut": "II = S_2 - 3 * III.",
            "trap": "Subtracting S_3 only once instead of three times."
          },
          {
            "qNum": 4,
            "statement": "When is the Chocolate Distribution Method preferred over drawing traditional Venn diagrams?",
            "options": [
              "A) When individual 3-way intersection values are explicitly given",
              "B) When there are 4 or more sets and questions ask for Maxima/Minima of 'at least k' conditions",
              "C) Only when N < 50",
              "D) Only for percentages"
            ],
            "correctAnswer": "B",
            "solution": "Venn diagrams become geometrically non-trivial beyond 3 sets. The Chocolate Method solves 4, 5, or 6-set Maxima/Minima problems in under 30 seconds using single-variable linear conservation.",
            "shortcut": ">= 4 sets + Maxima/Minima = Chocolate Method.",
            "trap": "Using Venn circles for 4 sets."
          }
        ]
      },
      {
        "caseletNum": 52,
        "title": "Chocolate Distribution: Three-Subject Sprint Set",
        "context": "60 students. 42 passed Mathematics, 36 passed Physics, 30 passed Chemistry. Each pass = 1 chocolate. Total chocolates = 42 + 36 + 30 = 108. Each student holds 0 to 3 chocolates.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the MAXIMUM possible number of students who passed at least 2 subjects?",
            "options": ["A) 36", "B) 45", "C) 54", "D) 60"],
            "correctAnswer": "C",
            "solution": "Give barely-enough-to-qualify (exactly 2 chocolates) to as many students y as possible: 2y <= 108 gives y = 54, using all 108 chocolates exactly.",
            "shortcut": "Maximizing (>= m): fill with exactly m. y = floor(C / m) = floor(108 / 2) = 54.",
            "trap": "Capping the answer at the smallest subject count (30) — maximization wants the opposite extreme."
          },
          {
            "qNum": 2,
            "statement": "What is the MINIMUM possible number of students who passed at least 2 subjects?",
            "options": ["A) 12", "B) 24", "C) 36", "D) 48"],
            "correctAnswer": "B",
            "solution": "Dump chocolates into as few students as possible: give the maximum (3) to x students and the most-without-qualifying (1) to the rest. 3x + 1(60 - x) = 108 gives 2x = 48, so x = 24.",
            "shortcut": "Minimizing (>= m): fill with max K and buffer at (m - 1). 3x + 1(60 - x) = 108.",
            "trap": "Using 4 as the per-student maximum — with 3 subjects the ceiling is 3 chocolates."
          },
          {
            "qNum": 3,
            "statement": "What is the MAXIMUM possible number of students who passed all 3 subjects?",
            "options": ["A) 36", "B) 30", "C) 24", "D) 20"],
            "correctAnswer": "A",
            "solution": "Give exactly 3 chocolates to z students: 3z <= 108 gives z = 36, consuming all chocolates.",
            "shortcut": "Maximizing (all K subjects): floor(C / K) = floor(108 / 3) = 36.",
            "trap": "Capping at the smallest subject (30) instead of running the allocation equation."
          },
          {
            "qNum": 4,
            "statement": "What is the MINIMUM possible number of students who passed all 3 subjects?",
            "options": ["A) 6", "B) 12", "C) 8", "D) 0"],
            "correctAnswer": "D",
            "solution": "Try x students with 3 chocolates and buffer 2 to the rest: 3x + 2(60 - x) = 108 gives x = -12, impossible — so even x = 0 works. Check: capping everyone at 2 absorbs at most 120 >= 108 chocolates. Minimum is 0.",
            "shortcut": "Negative x from the conservation equation means the minimum is 0 — always run the capacity check.",
            "trap": "Assuming the minimum must be positive; a negative equation root means zero is feasible."
          }
        ]
      },
      {
        "caseletNum": 53,
        "title": "Chocolate Distribution: Four-Subject Maxima Set",
        "context": "80 students. 60 cleared Subject A, 54 cleared B, 48 cleared C, 42 cleared D. Total chocolates = 60 + 54 + 48 + 42 = 204. Each student holds 0 to 4 chocolates.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the MAXIMUM possible number of students who cleared at least 3 subjects?",
            "options": ["A) 60", "B) 66", "C) 68", "D) 72"],
            "correctAnswer": "C",
            "solution": "Give barely-enough (exactly 3) to y students: 3y <= 204 gives y = 68, consuming all 204 chocolates exactly.",
            "shortcut": "Maximizing (>= m): floor(C / m) = floor(204 / 3) = 68.",
            "trap": "Capping at the smallest subject count (42) — maximization runs the allocation, not the minimum."
          },
          {
            "qNum": 2,
            "statement": "What is the MINIMUM possible number of students who cleared at least 3 subjects?",
            "options": ["A) 24", "B) 22", "C) 20", "D) 28"],
            "correctAnswer": "B",
            "solution": "Dump into as few as possible: maximum 4 to x students, buffer 2 to the rest. 4x + 2(80 - x) = 204 gives 2x = 44, so x = 22.",
            "shortcut": "Minimizing (>= m): fill max K, buffer (m-1). 4x + 2(80-x) = 204.",
            "trap": "Using 3 as the per-student ceiling — with 4 subjects the maximum is 4 chocolates."
          },
          {
            "qNum": 3,
            "statement": "What is the MAXIMUM possible number of students who cleared all 4 subjects?",
            "options": ["A) 48", "B) 54", "C) 51", "D) 60"],
            "correctAnswer": "C",
            "solution": "Give exactly 4 to z students: 4z <= 204 gives z = 51, using all chocolates.",
            "shortcut": "Maximizing all-K: floor(C / K) = floor(204 / 4) = 51.",
            "trap": "Capping at the smallest subject (42) instead of running floor(C/K)."
          },
          {
            "qNum": 4,
            "statement": "What is the MINIMUM possible number of students who cleared at least 2 subjects?",
            "options": ["A) 42", "B) 40", "C) 44", "D) 38"],
            "correctAnswer": "A",
            "solution": "Minimize x with >= 2: max 4 to x, buffer 1 to rest. 4x + 1(80 - x) = 204 gives 3x = 124, x = 41.33. x = 41 caps capacity at 41x4 + 39 = 203 < 204 (infeasible); x = 42 works (40x4 + 2x3 + 38x1 = 204). Minimum is 42.",
            "shortcut": "Fractional x rounds UP after a capacity check — always verify the ceiling holds the total.",
            "trap": "Rounding 41.33 down to 41; capacity (203 < 204) proves it impossible."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Ravi Sir's Famous Chocolate Method for Venn Maxima-Minima",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Venn+Diagrams+Chocolate+Method+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "Bucket Dumping Formulation for Overlapping Set Extreme Bounds",
      "duration": "Complete Masterclass • 5 Parts"
    }
  },
  {
    "id": "dilr_pie",
    "title": "Calculation-Based DI (Pie Charts & Angle Equivalences)",
    "tier": "Tier S",
    "weightage": "1 Full Set (5 Qs | 15 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. The Core Degree-Percentage Equivalence</h4>\n<div class='theory-block'>A full circle represents $100\\%$ and $360^\\circ$:\n$$100\\% \\iff 360^\\circ$$\n$$1\\% = 3.6^\\circ \\quad \\Big| \\quad 10\\% = 36^\\circ \\quad \\Big| \\quad 5\\% = 18^\\circ$$\n$$1^\\circ = \\frac{100}{360}\\% = \\frac{5}{18}\\% \\approx 0.2778\\%$$\n\n### Common Angle Anchors\n$$\\begin{array}{|c|c|c|c|c|c|c|}\n\\hline\n\\textbf{Angle} & 18^\\circ & 36^\\circ & 54^\\circ & 72^\\circ & 90^\\circ & 108^\\circ \\\\\n\\hline\n\\textbf{Percentage} & 5\\% & 10\\% & 15\\% & 20\\% & 25\\% & 30\\% \\\\\n\\hline\n\\end{array}$$\n\n---</div>\n<h4>2. Dual Pie Charts (Expenditure / Sales Across Two Years)</h4>\n<div class='theory-block'>When two pie charts for Year 1 and Year 2 are given:\n- **Ravi Sir's Prime Trap:** You CANNOT compare absolute sector sizes across two pie charts using angles/percentages alone unless the **base values ($B_1$ and $B_2$)** are known!\n  $$\\text{Absolute Value} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\times \\text{Base Total}$$\n- If Sector A is $25\\%$ in Year 1 and $20\\%$ in Year 2, did Sector A decrease?\n  - If $B_2 > 1.25 B_1$, Sector A actually **increased** in absolute volume!\n\n---</div>\n<h4>3. Successive Percentage Multipliers in DI</h4>\n<div class='theory-block'>When values change across successive quarters/years:\n$$\\text{Final} = \\text{Initial} \\times \\left(1 + \\frac{r_1}{100}\\right) \\times \\left(1 + \\frac{r_2}{100}\\right) \\dots$$\n- Use ratio multiplying factors ($1.25 = \\frac{5}{4}, \\; 1.1667 = \\frac{7}{6}$) to cancel terms directly rather than multiplying long decimals.</div>",
    "formulas": [
      {
        "formula": "100\\% \\iff 360^\\circ"
      },
      {
        "formula": "1\\% = 3.6^\\circ \\quad \\Big| \\quad 10\\% = 36^\\circ \\quad \\Big| \\quad 5\\% = 18^\\circ"
      },
      {
        "formula": "1^\\circ = \\frac{100}{360}\\% = \\frac{5}{18}\\% \\approx 0.2778\\%"
      },
      {
        "formula": "\\begin{array}{|c|c|c|c|c|c|c|}\n\\hline\n\\textbf{Angle} & 18^\\circ & 36^\\circ & 54^\\circ & 72^\\circ & 90^\\circ & 108^\\circ \\\\\n\\hline\n\\textbf{Percentage} & 5\\% & 10\\% & 15\\% & 20\\% & 25\\% & 30\\% \\\\\n\\hline\n\\end{array}"
      },
      {
        "formula": "\\text{Absolute Value} = \\left(\\frac{\\theta}{360^\\circ}\\right) \\times \\text{Base Total}"
      },
      {
        "formula": "\\text{Final} = \\text{Initial} \\times \\left(1 + \\frac{r_1}{100}\\right) \\times \\left(1 + \\frac{r_2}{100}\\right) \\dots"
      }
    ],
    "caselets": [
      {
        "caseletNum": 59,
        "title": "Pie Chart DI: Successive Percentage Change | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 60,
        "title": "Pie Chart DI: Expenditure Over Two Years | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 61,
        "title": "Pie Chart DI: Tourists by Quarter Set | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 62,
        "title": "Pie Chart DI: Degrees and Employee Data | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 63,
        "title": "Pie Chart DI: Market Share Shift Set",
        "context": "Smartphone market, 2023 total 80 lakh units — A 30% (24), B 25% (20), C 20% (16), D 25% (20). 2024 total 100 lakh units — A 28% (28), B 22% (22), C 30% (30), D 20% (20).",
        "questions": [
          {
            "qNum": 1,
            "statement": "By how many lakh units did company A's sales grow from 2023 to 2024?",
            "options": ["A) 2", "B) 3", "C) 4", "D) 5"],
            "correctAnswer": "C",
            "solution": "A: 30% of 80 = 24 lakh in 2023; 28% of 100 = 28 lakh in 2024. Growth = 28 - 24 = 4 lakh.",
            "shortcut": "Convert shares to absolutes first — percentages on different bases never subtract directly.",
            "trap": "28% - 30% = -2% looks like decline; bases differ (80 vs 100), so convert first."
          },
          {
            "qNum": 2,
            "statement": "What was company C's percentage growth in sales?",
            "options": ["A) 75%", "B) 80%", "C) 87.5%", "D) 90%"],
            "correctAnswer": "C",
            "solution": "C: 20% of 80 = 16 lakh; 30% of 100 = 30 lakh. Growth = (30-16)/16 = 14/16 = 87.5%.",
            "shortcut": "14/16 = 7/8 = 87.5% — halve twice, don’t long-divide.",
            "trap": "30% - 20% = 10pp is NOT the growth rate; divide by the base (16)."
          },
          {
            "qNum": 3,
            "statement": "Which company recorded the highest absolute growth?",
            "options": ["A) A", "B) B", "C) C", "D) D"],
            "correctAnswer": "C",
            "solution": "Absolute gains: A +4 (24→28), B +2 (20→22), C +14 (16→30), D 0 (20→20). C leads by far.",
            "shortcut": "Compute all four deltas in one pass — the table is tiny; completeness beats cleverness.",
            "trap": "A's share fell (30%→28%) yet sales grew — share direction and absolute direction differ."
          },
          {
            "qNum": 4,
            "statement": "What is the change in B's market share in percentage points?",
            "options": ["A) -2pp", "B) -3pp", "C) +3pp", "D) -5pp"],
            "correctAnswer": "B",
            "solution": "Share moved 25% → 22%, a change of -3 percentage points. (Its sales still grew 20→22 lakh.)",
            "shortcut": "pp questions need only the two shares — ignore the totals entirely.",
            "trap": "Answering -2 lakh (absolute growth) to a pp question — read the unit asked."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Calculation-Based DI, Pie Charts & Angle Conversions",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Pie+Charts+Angle+Equivalences+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "3.6° per 1% Conversion Rule, Quick Ratio Approximations & Weighted Percent Changes",
      "duration": "Complete Masterclass • 4 Parts"
    }
  },
  {
    "id": "dilr_tournaments",
    "title": "Knockout Tournaments & Seeding Invariants",
    "tier": "Tier S",
    "weightage": "1 Full Set (5 Qs | 15 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. Tournament Anatomy & Seeding Principles</h4>\n<div class='theory-block'>In a standard single-elimination knockout tournament with $N = 2^k$ players (e.g., $N = 64, 128$):\n- Players are ranked from **Seed 1** (best) down to **Seed $N$** (lowest).\n- Total matches to decide a champion $= N - 1$ *(each match eliminates exactly 1 player)*.\n- Total rounds $= \\log_2 N$. (For $N = 64 \\implies 6$ rounds: Round 1, Round 2, Round of 16, Quarterfinals, Semifinals, Final).\n\n---</div>\n<h4>2. Match Pairing Law (The Constant Sum Rule)</h4>\n<div class='theory-block'>In any round $R$, assuming **no upsets** occur:\nThe sum of seeds in every scheduled match is **CONSTANT**:\n$$\\text{Seed}(A) + \\text{Seed}(B) = 2^{\\text{Remaining Players in Round} + 1} + 1$$\n\nSpecifically for $N = 64$ players:\n- **Round 1 (64 players):** Match pairings sum to $64 + 1 = \\mathbf{65}$.\n  - Seed 1 plays Seed 64 ($1 + 64 = 65$)\n  - Seed 2 plays Seed 63 ($2 + 63 = 65$)\n  - Seed $k$ plays Seed $(65 - k)$\n- **Round 2 (32 players):** Winners of complementary matches meet. Match pairings sum to $32 + 1 = \\mathbf{33}$.\n  - Seed 1 plays Seed 32 ($1 + 32 = 33$)\n  - Seed 2 plays Seed 31 ($2 + 31 = 33$)\n- **Round 3 / Round of 16 (16 players):** Sum to $16 + 1 = \\mathbf{17}$.\n  - Seed 1 plays Seed 16\n  - Seed 2 plays Seed 15\n- **Quarterfinals (8 players):** Sum to $8 + 1 = \\mathbf{9}$.\n  - Seed 1 plays Seed 8\n  - Seed 2 plays Seed 7\n  - Seed 3 plays Seed 6\n  - Seed 4 plays Seed 5\n- **Semifinals (4 players):**\n  - Seed 1 plays Seed 4\n  - Seed 2 plays Seed 3\n- **Final (2 players):**</div>\n<h4>3. Upsets Mechanics</h4>\n<div class='theory-block'>An **Upset** occurs when a lower-seeded player (higher numerical seed) defeats a higher-seeded player (lower numerical seed).\n\n### 3.1 The \"Ghost Seed\" Inheritance Rule\nWhen Seed $L$ (e.g., Seed 49) defeats Seed $H$ (e.g., Seed 16):\n- For all subsequent scheduling, **Seed $L$ takes over the exact position/bracket of Seed $H$**.\n- To find who Seed 49 meets in the next round, simply determine who Seed 16 *was supposed to play*!\n\n---</div>\n<h4>4. Byes in Non-Power-of-2 Tournaments</h4>\n<div class='theory-block'>When $N$ is not a power of 2:\n- Let the next power of 2 be $2^k > N$.\n- Number of **Byes** awarded $= 2^k - N$.\n- Byes are awarded strictly to the **top seeds** (Seed 1, Seed 2, $\\dots$, Seed $(2^k - N)$) who skip Round 1 directly to Round 2.</div>",
    "formulas": [
      {
        "formula": "\\text{Seed}(A) + \\text{Seed}(B) = 2^{\\text{Remaining Players in Round} + 1} + 1"
      }
    ],
    "caselets": [
      {
        "caseletNum": 52,
        "title": "Games and Tournaments: The Coin Game | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 64-player single-elimination tournament with standard seeding, what is the sum of seeds in every Round 1 match?",
            "options": [
              "A) 64",
              "B) 65",
              "C) 66",
              "D) 128"
            ],
            "correctAnswer": "B",
            "solution": "In Round 1, Seed 1 plays Seed 64, Seed 2 plays Seed 63, Seed k plays Seed (65 - k). The sum of seeds in every scheduled match is 64 + 1 = 65.",
            "shortcut": "Constant Sum = Total players in round + 1 = 64 + 1 = 65.",
            "trap": "Assuming sum equals 64."
          },
          {
            "qNum": 2,
            "statement": "What is the 'Ghost Bracket' principle when an upset occurs in a knockout tournament?",
            "options": [
              "A) The winner is immediately eliminated",
              "B) The victorious lower seed inherits the exact scheduled match bracket of the defeated higher seed",
              "C) All subsequent rounds are re-seeded from scratch",
              "D) Both players advance"
            ],
            "correctAnswer": "B",
            "solution": "Tournament schedules are fixed prior to the event. When a lower seed wins, they simply step into the position that was reserved for the winner of that match, taking over the higher seed's pathway.",
            "shortcut": "Lower seed replaces higher seed in the bracket tree.",
            "trap": "Re-pairing remaining players based on original seed numbers."
          },
          {
            "qNum": 3,
            "statement": "In a knockout tournament with 50 players, how many Byes must be awarded in Round 1?",
            "options": [
              "A) 12",
              "B) 14",
              "C) 16",
              "D) 18"
            ],
            "correctAnswer": "B",
            "solution": "The smallest power of 2 greater than or equal to 50 is 2^6 = 64. Byes = 64 - 50 = 14 byes.",
            "shortcut": "Next power of 2 minus N = 64 - 50 = 14.",
            "trap": "Using 32 as the reference power of 2."
          },
          {
            "qNum": 4,
            "statement": "In a single round-robin tournament of 8 teams where Win = 2, Draw = 1, Loss = 0, what is the sum of points of all teams at tournament completion?",
            "options": [
              "A) 48",
              "B) 56",
              "C) 64",
              "D) 72"
            ],
            "correctAnswer": "B",
            "solution": "Total matches = 8 * 7 / 2 = 28 matches. In this scoring system, every match generates exactly 2 points (2 for decisive win, 1+1 for draw). Total points = 28 * 2 = 56.",
            "shortcut": "Total points = N(N - 1) = 8 * 7 = 56.",
            "trap": "Treating draws as destroying points in a 2-1-0 system (that happens only in 3-1-0 football systems)."
          }
        ]
      },
      {
        "caseletNum": 53,
        "title": "Games and Tournaments: Shooting Set | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 64-player single-elimination tournament with standard seeding, what is the sum of seeds in every Round 1 match?",
            "options": [
              "A) 64",
              "B) 65",
              "C) 66",
              "D) 128"
            ],
            "correctAnswer": "B",
            "solution": "In Round 1, Seed 1 plays Seed 64, Seed 2 plays Seed 63, Seed k plays Seed (65 - k). The sum of seeds in every scheduled match is 64 + 1 = 65.",
            "shortcut": "Constant Sum = Total players in round + 1 = 64 + 1 = 65.",
            "trap": "Assuming sum equals 64."
          },
          {
            "qNum": 2,
            "statement": "What is the 'Ghost Bracket' principle when an upset occurs in a knockout tournament?",
            "options": [
              "A) The winner is immediately eliminated",
              "B) The victorious lower seed inherits the exact scheduled match bracket of the defeated higher seed",
              "C) All subsequent rounds are re-seeded from scratch",
              "D) Both players advance"
            ],
            "correctAnswer": "B",
            "solution": "Tournament schedules are fixed prior to the event. When a lower seed wins, they simply step into the position that was reserved for the winner of that match, taking over the higher seed's pathway.",
            "shortcut": "Lower seed replaces higher seed in the bracket tree.",
            "trap": "Re-pairing remaining players based on original seed numbers."
          },
          {
            "qNum": 3,
            "statement": "In a knockout tournament with 50 players, how many Byes must be awarded in Round 1?",
            "options": [
              "A) 12",
              "B) 14",
              "C) 16",
              "D) 18"
            ],
            "correctAnswer": "B",
            "solution": "The smallest power of 2 greater than or equal to 50 is 2^6 = 64. Byes = 64 - 50 = 14 byes.",
            "shortcut": "Next power of 2 minus N = 64 - 50 = 14.",
            "trap": "Using 32 as the reference power of 2."
          },
          {
            "qNum": 4,
            "statement": "In a single round-robin tournament of 8 teams where Win = 2, Draw = 1, Loss = 0, what is the sum of points of all teams at tournament completion?",
            "options": [
              "A) 48",
              "B) 56",
              "C) 64",
              "D) 72"
            ],
            "correctAnswer": "B",
            "solution": "Total matches = 8 * 7 / 2 = 28 matches. In this scoring system, every match generates exactly 2 points (2 for decisive win, 1+1 for draw). Total points = 28 * 2 = 56.",
            "shortcut": "Total points = N(N - 1) = 8 * 7 = 56.",
            "trap": "Treating draws as destroying points in a 2-1-0 system (that happens only in 3-1-0 football systems)."
          }
        ]
      },
      {
        "caseletNum": 54,
        "title": "Games and Tournaments: Knockout Seeds and Upsets | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 64-player single-elimination tournament with standard seeding, what is the sum of seeds in every Round 1 match?",
            "options": [
              "A) 64",
              "B) 65",
              "C) 66",
              "D) 128"
            ],
            "correctAnswer": "B",
            "solution": "In Round 1, Seed 1 plays Seed 64, Seed 2 plays Seed 63, Seed k plays Seed (65 - k). The sum of seeds in every scheduled match is 64 + 1 = 65.",
            "shortcut": "Constant Sum = Total players in round + 1 = 64 + 1 = 65.",
            "trap": "Assuming sum equals 64."
          },
          {
            "qNum": 2,
            "statement": "What is the 'Ghost Bracket' principle when an upset occurs in a knockout tournament?",
            "options": [
              "A) The winner is immediately eliminated",
              "B) The victorious lower seed inherits the exact scheduled match bracket of the defeated higher seed",
              "C) All subsequent rounds are re-seeded from scratch",
              "D) Both players advance"
            ],
            "correctAnswer": "B",
            "solution": "Tournament schedules are fixed prior to the event. When a lower seed wins, they simply step into the position that was reserved for the winner of that match, taking over the higher seed's pathway.",
            "shortcut": "Lower seed replaces higher seed in the bracket tree.",
            "trap": "Re-pairing remaining players based on original seed numbers."
          },
          {
            "qNum": 3,
            "statement": "In a knockout tournament with 50 players, how many Byes must be awarded in Round 1?",
            "options": [
              "A) 12",
              "B) 14",
              "C) 16",
              "D) 18"
            ],
            "correctAnswer": "B",
            "solution": "The smallest power of 2 greater than or equal to 50 is 2^6 = 64. Byes = 64 - 50 = 14 byes.",
            "shortcut": "Next power of 2 minus N = 64 - 50 = 14.",
            "trap": "Using 32 as the reference power of 2."
          },
          {
            "qNum": 4,
            "statement": "In a single round-robin tournament of 8 teams where Win = 2, Draw = 1, Loss = 0, what is the sum of points of all teams at tournament completion?",
            "options": [
              "A) 48",
              "B) 56",
              "C) 64",
              "D) 72"
            ],
            "correctAnswer": "B",
            "solution": "Total matches = 8 * 7 / 2 = 28 matches. In this scoring system, every match generates exactly 2 points (2 for decisive win, 1+1 for draw). Total points = 28 * 2 = 56.",
            "shortcut": "Total points = N(N - 1) = 8 * 7 = 56.",
            "trap": "Treating draws as destroying points in a 2-1-0 system (that happens only in 3-1-0 football systems)."
          }
        ]
      },
      {
        "caseletNum": 55,
        "title": "Games and Tournaments: 64 Seed Knockout Set | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 64-player single-elimination tournament with standard seeding, what is the sum of seeds in every Round 1 match?",
            "options": [
              "A) 64",
              "B) 65",
              "C) 66",
              "D) 128"
            ],
            "correctAnswer": "B",
            "solution": "In Round 1, Seed 1 plays Seed 64, Seed 2 plays Seed 63, Seed k plays Seed (65 - k). The sum of seeds in every scheduled match is 64 + 1 = 65.",
            "shortcut": "Constant Sum = Total players in round + 1 = 64 + 1 = 65.",
            "trap": "Assuming sum equals 64."
          },
          {
            "qNum": 2,
            "statement": "What is the 'Ghost Bracket' principle when an upset occurs in a knockout tournament?",
            "options": [
              "A) The winner is immediately eliminated",
              "B) The victorious lower seed inherits the exact scheduled match bracket of the defeated higher seed",
              "C) All subsequent rounds are re-seeded from scratch",
              "D) Both players advance"
            ],
            "correctAnswer": "B",
            "solution": "Tournament schedules are fixed prior to the event. When a lower seed wins, they simply step into the position that was reserved for the winner of that match, taking over the higher seed's pathway.",
            "shortcut": "Lower seed replaces higher seed in the bracket tree.",
            "trap": "Re-pairing remaining players based on original seed numbers."
          },
          {
            "qNum": 3,
            "statement": "In a knockout tournament with 50 players, how many Byes must be awarded in Round 1?",
            "options": [
              "A) 12",
              "B) 14",
              "C) 16",
              "D) 18"
            ],
            "correctAnswer": "B",
            "solution": "The smallest power of 2 greater than or equal to 50 is 2^6 = 64. Byes = 64 - 50 = 14 byes.",
            "shortcut": "Next power of 2 minus N = 64 - 50 = 14.",
            "trap": "Using 32 as the reference power of 2."
          },
          {
            "qNum": 4,
            "statement": "In a single round-robin tournament of 8 teams where Win = 2, Draw = 1, Loss = 0, what is the sum of points of all teams at tournament completion?",
            "options": [
              "A) 48",
              "B) 56",
              "C) 64",
              "D) 72"
            ],
            "correctAnswer": "B",
            "solution": "Total matches = 8 * 7 / 2 = 28 matches. In this scoring system, every match generates exactly 2 points (2 for decisive win, 1+1 for draw). Total points = 28 * 2 = 56.",
            "shortcut": "Total points = N(N - 1) = 8 * 7 = 56.",
            "trap": "Treating draws as destroying points in a 2-1-0 system (that happens only in 3-1-0 football systems)."
          }
        ]
      },
      {
        "caseletNum": 56,
        "title": "Knockout Seeds and Bracket Invariants",
        "context": "8 players seeded 1 to 8 in a single-elimination knockout. Quarterfinals: (1 vs 8), (4 vs 5), (2 vs 7), (3 vs 6). Winners advance to semifinals 1v4-half vs 2v3-half, then the final. Every match eliminates exactly one player.",
        "questions": [
          {
            "qNum": 1,
            "statement": "How many matches are needed in total to decide the champion?",
            "options": ["A) 6", "B) 7", "C) 8", "D) 14"],
            "correctAnswer": "B",
            "solution": "Each match eliminates exactly one player. To leave 1 champion from 8, exactly 7 eliminations (matches) are needed: 4 QF + 2 SF + 1 F.",
            "shortcut": "Knockout matches = N - 1 always. 8 - 1 = 7.",
            "trap": "Counting 14 by doubling legs — single elimination has no return legs."
          },
          {
            "qNum": 2,
            "statement": "If every higher seed wins its match, which semifinal lineup results?",
            "options": ["A) 1 vs 2 and 3 vs 4", "B) 1 vs 4 and 2 vs 3", "C) 1 vs 3 and 2 vs 4", "D) 1 vs 8 and 2 vs 7"],
            "correctAnswer": "B",
            "solution": "QF winners under no upsets: 1 (beats 8), 4 (beats 5), 2 (beats 7), 3 (beats 6). Semifinals pair the halves: 1 vs 4 and 2 vs 3.",
            "shortcut": "Read winners straight down each half of the bracket — no re-seeding in CAT knockouts.",
            "trap": "Re-seeding semifinalists 1v4/2v3 is wrong only if you mix halves — keep bracket halves rigid."
          },
          {
            "qNum": 3,
            "statement": "What is the lowest seed that can reach the semifinal WITHOUT defeating any top-3 seed?",
            "options": ["A) Seed 4", "B) Seed 6", "C) Seed 5", "D) Seed 8"],
            "correctAnswer": "C",
            "solution": "Seeds 6, 7, 8 face seeds 3, 2, 1 respectively in the QF — all top-3. Seed 4 faces 5 (fine) but then seed 1 in the SF. Seed 5 beats 4 in the QF, reaching the SF while facing only seed 4. So seed 5 is the lowest.",
            "shortcut": "Scan each seed's fixed QF opponent first — only 4 and 5 dodge top-3 in round one.",
            "trap": "Picking seed 8 for 'lowest' without checking its QF opponent (seed 1)."
          },
          {
            "qNum": 4,
            "statement": "With upsets allowed, which seeds can seed 1 possibly face in the final?",
            "options": ["A) 2 or 3 only", "B) Any of 2, 3, 6, 7", "C) Only seed 2", "D) Seed 8"],
            "correctAnswer": "B",
            "solution": "Seed 1 owns the top half. The finalist from the bottom half is whoever survives (2 vs 7) and (3 vs 6) then their SF — any of seeds 2, 7, 3, 6. Seed 8 is in seed 1's own half and can only meet seed 1 before the final.",
            "shortcut": "Finalist = survivor of the opposite half only. List the half, not the seeds you fear.",
            "trap": "Including own-half seeds (8) as possible final opponents — bracket halves never cross early."
          }
        ]
      },
      {
        "caseletNum": 57,
        "title": "Round-Robin Points Table Audit",
        "context": "4 teams (A, B, C, D) play each other once: 6 matches. Win = 2 pts, Draw = 1 pt each, Loss = 0. Final records — A: 2W 1D 0L (5 pts); B: 1W 1D 1L (3 pts); C: 1W 1D 1L (3 pts); D: 0W 1D 2L (1 pt). Wins total 4 = losses total 4; draws involve 4 participations = 2 drawn matches; 4 decisive + 2 drawn = 6 matches. Consistent.",
        "questions": [
          {
            "qNum": 1,
            "statement": "How many points did team A finish with?",
            "options": ["A) 4", "B) 6", "C) 5", "D) 7"],
            "correctAnswer": "C",
            "solution": "A: 2 wins × 2 + 1 draw × 1 = 5 points.",
            "shortcut": "Points = 2W + D — one line, no table needed.",
            "trap": "3-points-per-win football scoring (would give 7) — CAT uses the stated system only."
          },
          {
            "qNum": 2,
            "statement": "How many matches ended in a draw?",
            "options": ["A) 1", "B) 3", "C) 2", "D) 4"],
            "correctAnswer": "C",
            "solution": "Draw participations = 1+1+1+1 = 4 across teams; each drawn match contributes 2, so 4/2 = 2 drawn matches.",
            "shortcut": "Sum the D column, halve it — every draw is counted twice.",
            "trap": "Answering 4 by counting participations as matches."
          },
          {
            "qNum": 3,
            "statement": "What were the total points awarded across all teams?",
            "options": ["A) 10", "B) 12", "C) 14", "D) 16"],
            "correctAnswer": "B",
            "solution": "5 + 3 + 3 + 1 = 12. Check: 4 decisive matches × 2 pts + 2 drawn matches × 2 pts = 8 + 4 = 12.",
            "shortcut": "Cross-verify: every match awards exactly 2 points in a 2-1-0 system, so 6 × 2 = 12.",
            "trap": "In 3-1-0 football systems draws destroy a point — here every match yields exactly 2."
          },
          {
            "qNum": 4,
            "statement": "Which team finished the tournament unbeaten?",
            "options": ["A) A", "B) B", "C) C", "D) D"],
            "correctAnswer": "A",
            "solution": "Unbeaten means zero losses: A (2W 1D 0L) is the only team with L = 0.",
            "shortcut": "Scan the L column, not the points — unbeaten is about losses, not totals.",
            "trap": "B and C tie on points (3) but both lost once — points and unbeaten are different questions."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Games & Tournaments (Knockout, Seeding & Round Robin)",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Games+and+Tournaments+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "Seeding Inversion Trees & Points Table Balance Equations",
      "duration": "Complete Masterclass • 7 Parts"
    }
  },
  {
    "id": "dilr_puzzles",
    "title": "Quant-Based Puzzles (Weighing & Binary Splits)",
    "tier": "Tier A",
    "weightage": "1 Set (5 Qs | 15 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Weighing Balances: Minimum Weighings Principles</h4>\n<div class='theory-block'>### 1.1 Two-Pan Balance (Defective Ball/Coin Problem)\nYou have $N$ coins, exactly one is counterfeit (weighs differently):\n\n#### Case A: Known Defect Type (e.g., Defective Coin is strictly HEAVIER)\n- With a two-pan balance without weights, each weighing has **3 possible outcomes**:\n  1. Left pan is heavier $(\\text{Left} > \\text{Right})$\n  2. Right pan is heavier $(\\text{Right} > \\text{Left})$\n  3. Balance balances $(\\text{Left} = \\text{Right})$\n- Therefore, $W$ weighings can resolve at most $3^W$ items:\n  $$3^{W-1} < N \\le 3^W \\implies W = \\lceil \\log_3 N \\rceil$$\n- **Ternary Split Algorithm:**\n  - Divide $N$ into 3 groups of sizes $\\approx \\frac{N}{3}, \\frac{N}{3}, \\frac{N}{3}$.\n  - Place two groups on the pans. If they balance, defective coin is in the unweighed third group.\n\n#### Case B: Unknown Defect Type (Heavier OR Lighter not known in advance)\n- Each coin can be either Normal, Heavier, or Lighter ($2N$ states).\n- Formula for maximum items resolvable in $W$ weighings:\n  $$N \\le \\frac{3^W - 3}{2}$$\n  - For $W = 3$: $\\frac{27 - 3}{2} = 12$ coins.\n  - For $W = 4$: $\\frac{81 - 3}{2} = 39$ coins.\n\n### 1.2 Spring Balance (Direct Weight Reading)\n- In a spring balance, you get a numerical readout:</div>\n<h4>2. Gold Ring Cutting Problem & Binary Base System</h4>\n<div class='theory-block'>- A traveller stays at an inn for $N$ days and must pay 1 ring link per day.\n- What is the **minimum number of cuts** in an $N$-link chain so that any payment from $1$ to $N$ links can be made?\n\n### 2.1 The Binary/Doubling Principle\n- Cutting 1 link gives a single free link $\\{1\\}$, and divides the rest into two pieces.\n- With $c$ cuts, you obtain $c$ individual 1-link pieces.\n- The remaining solid chain segments should follow powers of 2 combined with the individual pieces:\n  - $c = 1$ cut $\\implies$ pieces of sizes $1, 2, 4 \\implies \\text{Max days} = 1 + 2 + 4 = 7$ days.\n  - $c = 2$ cuts $\\implies$ two '1' pieces + segments $3, 6, 12 \\dots \\implies \\text{Max days} = 23$.\n- **General Formula for $c$ cuts:**\n  $$N_{\\max} = (c + 1) \\cdot 2^{c+1} - 1$$\n  - For $c = 1$: $2 \\cdot 4 - 1 = 7$.\n  - For $c = 2$: $3 \\cdot 8 - 1 = 23$.\n  - For $c = 3$: $4 \\cdot 16 - 1 = 63$.</div>",
    "formulas": [
      {
        "formula": "3^{W-1} < N \\le 3^W \\implies W = \\lceil \\log_3 N \\rceil"
      },
      {
        "formula": "N \\le \\frac{3^W - 3}{2}"
      },
      {
        "formula": "N_{\\max} = (c + 1) \\cdot 2^{c+1} - 1"
      }
    ],
    "caselets": [
      {
        "caseletNum": 29,
        "title": "Quant Based Puzzles: The Matchstick Game | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 3x3 magic square using distinct integers 1 to 9, what is the mandatory value of the central cell?",
            "options": [
              "A) 3",
              "B) 4",
              "C) 5",
              "D) 6"
            ],
            "correctAnswer": "C",
            "solution": "Sum of 1 to 9 = 45. Magic constant M = 45 / 3 = 15. The center cell is shared by 4 lines (row 2, col 2, and 2 diagonals). Algebraically, Center = M / 3 = 15 / 3 = 5.",
            "shortcut": "Center cell of an odd NxN magic square is strictly the median = M / N.",
            "trap": "Placing the largest number 9 in the center."
          },
          {
            "qNum": 2,
            "statement": "Using a two-pan balance without weights, what is the maximum number of coins from which 1 heavier counterfeit coin can be identified in W weighings?",
            "options": [
              "A) 2^W",
              "B) 3^W",
              "C) 2^W - 1",
              "D) W^3"
            ],
            "correctAnswer": "B",
            "solution": "Each weighing on a two-pan balance has 3 distinct outcomes (Left heavier, Right heavier, Balanced). Hence W weighings can partition the search space into at most 3^W branches.",
            "shortcut": "Ternary partition law: Max items = 3^W.",
            "trap": "Confusing two-pan balance (base 3) with binary questions (base 2)."
          },
          {
            "qNum": 3,
            "statement": "To pay an exact integer amount from 1 to N rupees on each of N days by cutting links of a gold chain, what is the maximum N achievable with c cuts?",
            "options": [
              "A) 2^c - 1",
              "B) (c + 1) * 2^(c + 1) - 1",
              "C) c^2 + c",
              "D) 3^c"
            ],
            "correctAnswer": "B",
            "solution": "Each cut produces an individual link of size 1. With c cuts, we have c individual '1' pieces. The remaining chain segments are sized in powers of 2 multiplied by (c + 1), giving total N_max = (c + 1) * 2^(c + 1) - 1.",
            "shortcut": "For c = 1: (2)*4 - 1 = 7. For c = 2: (3)*8 - 1 = 23. For c = 3: (4)*16 - 1 = 63.",
            "trap": "Assuming each cut only produces single links."
          },
          {
            "qNum": 4,
            "statement": "In a matchstick subtraction game with N sticks where players can pick 1 to k sticks and the player taking the last stick wins, what are the losing (cold) positions?",
            "options": [
              "A) Odd numbers",
              "B) Multiples of (k + 1)",
              "C) Powers of 2",
              "D) Multiples of k"
            ],
            "correctAnswer": "B",
            "solution": "If a player is faced with a multiple of (k + 1), whatever number m (1 <= m <= k) they pick, the opponent can pick (k + 1 - m) to return the total to another multiple of (k + 1), eventually claiming the final stick.",
            "shortcut": "Cold positions = 0 mod (k + 1).",
            "trap": "Targeting multiples of k instead of (k + 1)."
          }
        ]
      },
      {
        "caseletNum": 30,
        "title": "Quant Based Puzzles: 4 by 4 Magic Square | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 3x3 magic square using distinct integers 1 to 9, what is the mandatory value of the central cell?",
            "options": [
              "A) 3",
              "B) 4",
              "C) 5",
              "D) 6"
            ],
            "correctAnswer": "C",
            "solution": "Sum of 1 to 9 = 45. Magic constant M = 45 / 3 = 15. The center cell is shared by 4 lines (row 2, col 2, and 2 diagonals). Algebraically, Center = M / 3 = 15 / 3 = 5.",
            "shortcut": "Center cell of an odd NxN magic square is strictly the median = M / N.",
            "trap": "Placing the largest number 9 in the center."
          },
          {
            "qNum": 2,
            "statement": "Using a two-pan balance without weights, what is the maximum number of coins from which 1 heavier counterfeit coin can be identified in W weighings?",
            "options": [
              "A) 2^W",
              "B) 3^W",
              "C) 2^W - 1",
              "D) W^3"
            ],
            "correctAnswer": "B",
            "solution": "Each weighing on a two-pan balance has 3 distinct outcomes (Left heavier, Right heavier, Balanced). Hence W weighings can partition the search space into at most 3^W branches.",
            "shortcut": "Ternary partition law: Max items = 3^W.",
            "trap": "Confusing two-pan balance (base 3) with binary questions (base 2)."
          },
          {
            "qNum": 3,
            "statement": "To pay an exact integer amount from 1 to N rupees on each of N days by cutting links of a gold chain, what is the maximum N achievable with c cuts?",
            "options": [
              "A) 2^c - 1",
              "B) (c + 1) * 2^(c + 1) - 1",
              "C) c^2 + c",
              "D) 3^c"
            ],
            "correctAnswer": "B",
            "solution": "Each cut produces an individual link of size 1. With c cuts, we have c individual '1' pieces. The remaining chain segments are sized in powers of 2 multiplied by (c + 1), giving total N_max = (c + 1) * 2^(c + 1) - 1.",
            "shortcut": "For c = 1: (2)*4 - 1 = 7. For c = 2: (3)*8 - 1 = 23. For c = 3: (4)*16 - 1 = 63.",
            "trap": "Assuming each cut only produces single links."
          },
          {
            "qNum": 4,
            "statement": "In a matchstick subtraction game with N sticks where players can pick 1 to k sticks and the player taking the last stick wins, what are the losing (cold) positions?",
            "options": [
              "A) Odd numbers",
              "B) Multiples of (k + 1)",
              "C) Powers of 2",
              "D) Multiples of k"
            ],
            "correctAnswer": "B",
            "solution": "If a player is faced with a multiple of (k + 1), whatever number m (1 <= m <= k) they pick, the opponent can pick (k + 1 - m) to return the total to another multiple of (k + 1), eventually claiming the final stick.",
            "shortcut": "Cold positions = 0 mod (k + 1).",
            "trap": "Targeting multiples of k instead of (k + 1)."
          }
        ]
      },
      {
        "caseletNum": 31,
        "title": "Quant Based Puzzles: 5 Students, 5 Subjects | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 3x3 magic square using distinct integers 1 to 9, what is the mandatory value of the central cell?",
            "options": [
              "A) 3",
              "B) 4",
              "C) 5",
              "D) 6"
            ],
            "correctAnswer": "C",
            "solution": "Sum of 1 to 9 = 45. Magic constant M = 45 / 3 = 15. The center cell is shared by 4 lines (row 2, col 2, and 2 diagonals). Algebraically, Center = M / 3 = 15 / 3 = 5.",
            "shortcut": "Center cell of an odd NxN magic square is strictly the median = M / N.",
            "trap": "Placing the largest number 9 in the center."
          },
          {
            "qNum": 2,
            "statement": "Using a two-pan balance without weights, what is the maximum number of coins from which 1 heavier counterfeit coin can be identified in W weighings?",
            "options": [
              "A) 2^W",
              "B) 3^W",
              "C) 2^W - 1",
              "D) W^3"
            ],
            "correctAnswer": "B",
            "solution": "Each weighing on a two-pan balance has 3 distinct outcomes (Left heavier, Right heavier, Balanced). Hence W weighings can partition the search space into at most 3^W branches.",
            "shortcut": "Ternary partition law: Max items = 3^W.",
            "trap": "Confusing two-pan balance (base 3) with binary questions (base 2)."
          },
          {
            "qNum": 3,
            "statement": "To pay an exact integer amount from 1 to N rupees on each of N days by cutting links of a gold chain, what is the maximum N achievable with c cuts?",
            "options": [
              "A) 2^c - 1",
              "B) (c + 1) * 2^(c + 1) - 1",
              "C) c^2 + c",
              "D) 3^c"
            ],
            "correctAnswer": "B",
            "solution": "Each cut produces an individual link of size 1. With c cuts, we have c individual '1' pieces. The remaining chain segments are sized in powers of 2 multiplied by (c + 1), giving total N_max = (c + 1) * 2^(c + 1) - 1.",
            "shortcut": "For c = 1: (2)*4 - 1 = 7. For c = 2: (3)*8 - 1 = 23. For c = 3: (4)*16 - 1 = 63.",
            "trap": "Assuming each cut only produces single links."
          },
          {
            "qNum": 4,
            "statement": "In a matchstick subtraction game with N sticks where players can pick 1 to k sticks and the player taking the last stick wins, what are the losing (cold) positions?",
            "options": [
              "A) Odd numbers",
              "B) Multiples of (k + 1)",
              "C) Powers of 2",
              "D) Multiples of k"
            ],
            "correctAnswer": "B",
            "solution": "If a player is faced with a multiple of (k + 1), whatever number m (1 <= m <= k) they pick, the opponent can pick (k + 1 - m) to return the total to another multiple of (k + 1), eventually claiming the final stick.",
            "shortcut": "Cold positions = 0 mod (k + 1).",
            "trap": "Targeting multiples of k instead of (k + 1)."
          }
        ]
      },
      {
        "caseletNum": 32,
        "title": "Quant Based Puzzles: Coins and Denominations | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a 3x3 magic square using distinct integers 1 to 9, what is the mandatory value of the central cell?",
            "options": [
              "A) 3",
              "B) 4",
              "C) 5",
              "D) 6"
            ],
            "correctAnswer": "C",
            "solution": "Sum of 1 to 9 = 45. Magic constant M = 45 / 3 = 15. The center cell is shared by 4 lines (row 2, col 2, and 2 diagonals). Algebraically, Center = M / 3 = 15 / 3 = 5.",
            "shortcut": "Center cell of an odd NxN magic square is strictly the median = M / N.",
            "trap": "Placing the largest number 9 in the center."
          },
          {
            "qNum": 2,
            "statement": "Using a two-pan balance without weights, what is the maximum number of coins from which 1 heavier counterfeit coin can be identified in W weighings?",
            "options": [
              "A) 2^W",
              "B) 3^W",
              "C) 2^W - 1",
              "D) W^3"
            ],
            "correctAnswer": "B",
            "solution": "Each weighing on a two-pan balance has 3 distinct outcomes (Left heavier, Right heavier, Balanced). Hence W weighings can partition the search space into at most 3^W branches.",
            "shortcut": "Ternary partition law: Max items = 3^W.",
            "trap": "Confusing two-pan balance (base 3) with binary questions (base 2)."
          },
          {
            "qNum": 3,
            "statement": "To pay an exact integer amount from 1 to N rupees on each of N days by cutting links of a gold chain, what is the maximum N achievable with c cuts?",
            "options": [
              "A) 2^c - 1",
              "B) (c + 1) * 2^(c + 1) - 1",
              "C) c^2 + c",
              "D) 3^c"
            ],
            "correctAnswer": "B",
            "solution": "Each cut produces an individual link of size 1. With c cuts, we have c individual '1' pieces. The remaining chain segments are sized in powers of 2 multiplied by (c + 1), giving total N_max = (c + 1) * 2^(c + 1) - 1.",
            "shortcut": "For c = 1: (2)*4 - 1 = 7. For c = 2: (3)*8 - 1 = 23. For c = 3: (4)*16 - 1 = 63.",
            "trap": "Assuming each cut only produces single links."
          },
          {
            "qNum": 4,
            "statement": "In a matchstick subtraction game with N sticks where players can pick 1 to k sticks and the player taking the last stick wins, what are the losing (cold) positions?",
            "options": [
              "A) Odd numbers",
              "B) Multiples of (k + 1)",
              "C) Powers of 2",
              "D) Multiples of k"
            ],
            "correctAnswer": "B",
            "solution": "If a player is faced with a multiple of (k + 1), whatever number m (1 <= m <= k) they pick, the opponent can pick (k + 1 - m) to return the total to another multiple of (k + 1), eventually claiming the final stick.",
            "shortcut": "Cold positions = 0 mod (k + 1).",
            "trap": "Targeting multiples of k instead of (k + 1)."
          }
        ]
      },
      {
        "caseletNum": 33,
        "title": "Coins Puzzle: Exact-Change Invariant Set",
        "context": "A cashier must make exactly Rs 85 using exactly 7 coins from denominations Rs 5, 10, 20, with at least one coin of each denomination and more Rs 10 coins than Rs 5 coins. Let a, b, c be the counts of 20s, 10s, 5s: a + b + c = 7 and 20a + 10b + 5c = 85, i.e. 4a + 2b + c = 17, so 3a + b = 10.",
        "questions": [
          {
            "qNum": 1,
            "statement": "How many Rs 20 coins are used?",
            "options": ["A) 1", "B) 3", "C) 2", "D) 4"],
            "correctAnswer": "C",
            "solution": "From 3a + b = 10 with a,b,c ≥ 1: a=1 gives b=7, c=-1 (reject); a=2 gives b=4, c=1; a=3 gives b=1, c=3. The 'more 10s than 5s' clause keeps only (2,4,1). So a = 2.",
            "shortcut": "Eliminate two variables by subtraction first: (4a+2b+c) − (a+b+c) = 3a + b.",
            "trap": "Stopping at two candidate triples — constraints after the equations decide, not before."
          },
          {
            "qNum": 2,
            "statement": "How many Rs 10 coins are used?",
            "options": ["A) 4", "B) 1", "C) 7", "D) 2"],
            "correctAnswer": "A",
            "solution": "The surviving triple (2,4,1) gives b = 4 Rs 10 coins: 2×20 + 4×10 + 1×5 = 40+40+5 = 85 across 7 coins.",
            "shortcut": "Verify by substitution — 85 total and 7 coins must both close.",
            "trap": "The rejected triple (3,1,3) also totals 85 — verification must include ALL conditions."
          },
          {
            "qNum": 3,
            "statement": "How many Rs 5 coins are used?",
            "options": ["A) 3", "B) 2", "C) 1", "D) 0"],
            "correctAnswer": "C",
            "solution": "c = 7 − 2 − 4 = 1, satisfying 'at least one of each' and 'more 10s than 5s' (4 > 1).",
            "shortcut": "Last variable falls out of the count equation — never re-solve from scratch.",
            "trap": "Zero is impossible here ('at least one of each') — read every clause."
          },
          {
            "qNum": 4,
            "statement": "If one Rs 10 coin is replaced by two Rs 5 coins, how many Rs 5 coins are there now?",
            "options": ["A) 2", "B) 4", "C) 3", "D) 5"],
            "correctAnswer": "C",
            "solution": "Value is unchanged (10 = 5+5): Rs 5 count becomes 1 + 2 = 3, with 8 coins total.",
            "shortcut": "Equal-value swaps preserve the total — only recount the touched denomination.",
            "trap": "Recomputing the whole split instead of delta-counting the swap."
          }
        ]
      },
      {
        "caseletNum": 34,
        "title": "Weighing Puzzle: Ternary Split Protocol",
        "context": "27 identical balls with 1 heavier counterfeit. A balance scale compares two pans per weighing. Strategy: always split the suspect pool into three equal groups (left pan, right pan, aside) — each weighing eliminates two-thirds regardless of outcome.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the minimum number of weighings to guarantee finding the heavier ball among 27?",
            "options": ["A) 2", "B) 4", "C) 3", "D) 5"],
            "correctAnswer": "C",
            "solution": "Each weighing ternarizes: 27 → 9 → 3 → 1, so 3 weighings suffice, and 2 weighings cover at most 3² = 9 < 27 balls. Minimum is 3.",
            "shortcut": "Capacity rule: n weighings handle at most 3^n balls. 3²=9 < 27 ≤ 27=3³.",
            "trap": "Binary thinking (2^5=32 → 5) — balance scales give THREE outcomes, not two."
          },
          {
            "qNum": 2,
            "statement": "How many weighings suffice for 9 balls?",
            "options": ["A) 2", "B) 3", "C) 1", "D) 4"],
            "correctAnswer": "A",
            "solution": "9 = 3², so 2 weighings: split 3-3-3, then 1-1-1 on the suspect trio.",
            "shortcut": "Read the exponent: 9 = 3² → 2 weighings.",
            "trap": "Carrying over the 27-ball answer — capacity scales with the pool, recompute."
          },
          {
            "qNum": 3,
            "statement": "What is the correct first split for 27 balls?",
            "options": ["A) 13 vs 13, 1 aside", "B) 9 vs 9, 9 aside", "C) 10 vs 10, 7 aside", "D) 14 vs 13, 0 aside"],
            "correctAnswer": "B",
            "solution": "Three equal groups of 9: if one pan sinks, the fake is in it; if they balance, the fake is in the aside 9. Every outcome isolates exactly 9 suspects.",
            "shortcut": "Equal thirds, always — asymmetry wastes the aside outcome.",
            "trap": "Binary-style halving (13 vs 13) squanders the third outcome the scale offers."
          },
          {
            "qNum": 4,
            "statement": "How many weighings guarantee success with 81 balls?",
            "options": ["A) 3", "B) 4", "C) 5", "D) 6"],
            "correctAnswer": "B",
            "solution": "81 = 3⁴, so 4 weighings (3³ = 27 < 81). Sequence: 81 → 27 → 9 → 3 → 1.",
            "shortcut": "81 = 3⁴ → 4. Powers of three are the whole game.",
            "trap": "3 weighings cover only 27 — check 3^n against the pool every time."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Quant-Based Puzzles, Counterfeit Coins & Binary Weighing",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Weighing+Puzzles+Binary+Splits+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "Ternary Search 3^k Division Tree, Parity Balances & Logic Minimization",
      "duration": "Complete Masterclass • 5 Parts"
    }
  },
  {
    "id": "dilr_missing_tables",
    "title": "Missing Data Tables & Matrix Grids",
    "tier": "Tier A",
    "weightage": "1 Set (5 Qs | 15 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Missing Data Table Philosophy</h4>\n<div class='theory-block'>Missing value tables in CAT are NOT arithmetic calculation drills; they are **algebraic constraint systems**:\n1. Check **Row Totals** and **Column Totals**.\n2. Identify cells that can be uniquely determined (1 unknown per equation).\n3. Where multiple blanks exist, look for cross-table linkages:\n   $$\\text{Market Share (\\%)} = \\frac{\\text{Company Sales}}{\\text{Total Market Sales}} \\times 100$$\n   $$\\text{Revenue} = \\text{Volume (Units)} \\times \\text{Average Selling Price}$$\n\n---</div>\n<h4>2. Revenue, Cost & Profit Margin Linkages</h4>\n<div class='theory-block'>$$\\text{Profit} = \\text{Revenue} - \\text{Expenditure}$$\n$$\\text{Profit Margin (\\% on Revenue)} = \\frac{\\text{Profit}}{\\text{Revenue}} \\times 100$$\n$$\\text{Markup (\\% on Cost)} = \\frac{\\text{Profit}}{\\text{Expenditure}} \\times 100$$\n- Always verify whether percentage profit is reported on Cost or Sales!</div>",
    "formulas": [
      {
        "formula": "\\text{Market Share (\\%)} = \\frac{\\text{Company Sales}}{\\text{Total Market Sales}} \\times 100"
      },
      {
        "formula": "\\text{Revenue} = \\text{Volume (Units)} \\times \\text{Average Selling Price}"
      },
      {
        "formula": "\\text{Profit} = \\text{Revenue} - \\text{Expenditure}"
      },
      {
        "formula": "\\text{Profit Margin (\\% on Revenue)} = \\frac{\\text{Profit}}{\\text{Revenue}} \\times 100"
      },
      {
        "formula": "\\text{Markup (\\% on Cost)} = \\frac{\\text{Profit}}{\\text{Expenditure}} \\times 100"
      }
    ],
    "caselets": [
      {
        "caseletNum": 63,
        "title": "Pie Chart DI: Cricket Runs and Boundaries | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 64,
        "title": "Table DI Set: Missing Market Value and Volume | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the degree equivalent of 1% on a circular pie chart?",
            "options": [
              "A) 1.8 degrees",
              "B) 2.5 degrees",
              "C) 3.6 degrees",
              "D) 4.2 degrees"
            ],
            "correctAnswer": "C",
            "solution": "A full circle is 360 degrees corresponding to 100%. Therefore, 1% = 360 / 100 = 3.6 degrees.",
            "shortcut": "360 / 100 = 3.6 degrees per 1%.",
            "trap": "Using 1.8 degrees (which is 1% of 180 degrees)."
          },
          {
            "qNum": 2,
            "statement": "In two pie charts representing sales across Year 1 and Year 2, Sector A is 25% in Year 1 and 20% in Year 2. Under what condition did Sector A's absolute sales INCREASE?",
            "options": [
              "A) It can never increase because the percentage dropped",
              "B) If Total Sales in Year 2 is at least 1.25 times Total Sales in Year 1",
              "C) If Total Sales in Year 2 is twice Year 1",
              "D) If the central angle in Year 2 is greater than 90 degrees"
            ],
            "correctAnswer": "B",
            "solution": "Absolute sales = P * Base. 0.20 * Base_2 > 0.25 * Base_1 => Base_2 > (0.25 / 0.20) * Base_1 = 1.25 * Base_1.",
            "shortcut": "Base_2 / Base_1 > P_1 / P_2 = 25 / 20 = 1.25.",
            "trap": "Comparing percentages directly without verifying base values."
          },
          {
            "qNum": 3,
            "statement": "In a missing data revenue table, if Q4 revenue is 20% higher than Q3 revenue, what is the ratio of Q4 to Q3 revenue?",
            "options": [
              "A) 5 : 4",
              "B) 6 : 5",
              "C) 7 : 6",
              "D) 4 : 5"
            ],
            "correctAnswer": "B",
            "solution": "Q4 = Q3 * (1 + 20/100) = 1.20 * Q3 = (6/5) * Q3. Ratio Q4 : Q3 = 6 : 5.",
            "shortcut": "+20% = Multiplying Factor of 6/5.",
            "trap": "Confusing 20% increase (6/5) with 25% increase (5/4)."
          },
          {
            "qNum": 4,
            "statement": "What is the recommended first step when solving a table with missing row and column values?",
            "options": [
              "A) Guessing values in the largest cells",
              "B) Finding rows or columns with exactly ONE missing entry using given marginal totals",
              "C) Computing column averages",
              "D) Creating a pie chart"
            ],
            "correctAnswer": "B",
            "solution": "A row or column with a single unknown and a known marginal total yields an exact linear equation with 0 degrees of freedom, bootstrapping the solution grid.",
            "shortcut": "Target equations with 1 unknown first.",
            "trap": "Trying to solve rows with 3 missing values simultaneously."
          }
        ]
      },
      {
        "caseletNum": 65,
        "title": "Routes and Networks: Island Boat Route Set | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a project network diagram (DAG), how is the Critical Path defined?",
            "options": [
              "A) The path with the fewest number of activities",
              "B) The longest duration path from start to finish",
              "C) The path with the highest cost",
              "D) The path containing circular loops"
            ],
            "correctAnswer": "B",
            "solution": "The critical path represents the minimum time required to complete the entire project because all prerequisite sequences on this path must finish before project completion. It is the path with maximum total duration.",
            "shortcut": "Critical Path = Longest path in duration.",
            "trap": "Confusing critical path with shortest path."
          },
          {
            "qNum": 2,
            "statement": "How many odd days are accumulated in an ordinary year and a leap year, respectively?",
            "options": [
              "A) 0 and 1",
              "B) 1 and 2",
              "C) 2 and 3",
              "D) 1 and 3"
            ],
            "correctAnswer": "B",
            "solution": "Ordinary year has 365 days = 52 * 7 + 1 => 1 odd day. Leap year has 366 days = 52 * 7 + 2 => 2 odd days.",
            "shortcut": "365 mod 7 = 1; 366 mod 7 = 2.",
            "trap": "Forgetting that leap year adds 1 day in February."
          },
          {
            "qNum": 3,
            "statement": "According to the calendar repetition theorem, after how many years does a (Leap Year + 1) calendar repeat?",
            "options": [
              "A) 6 years",
              "B) 11 years",
              "C) 28 years",
              "D) 40 years"
            ],
            "correctAnswer": "A",
            "solution": "For a year of type (Leap + 1), odd days accumulated over 6 years: 1 leap year (2 days) + 5 ordinary years (5 days) = 7 days = 0 mod 7. Both are ordinary years, so the calendar repeats in exactly 6 years.",
            "shortcut": "Leap+1 repeats in 6 years; Leap+2 and Leap+3 repeat in 11 years; Leap repeats in 28 years.",
            "trap": "Applying the 11-year cycle to Leap+1."
          },
          {
            "qNum": 4,
            "statement": "In a multi-factory workforce optimization with bounded constraints, what is the primary heuristic to maximize total production?",
            "options": [
              "A) Distribute workers equally among all factories",
              "B) Allocate maximum permissible workforce to factories with the highest unit output per worker",
              "C) Minimize workforce at all factories",
              "D) Alternate allocations randomly"
            ],
            "correctAnswer": "B",
            "solution": "By greedy linear programming, allocating marginal workers to the highest efficiency factories (subject to capacity and prerequisite constraints) strictly maximizes aggregate output.",
            "shortcut": "Greedy allocation to highest productivity coefficients.",
            "trap": "Overlooking minimum workforce constraints on lower efficiency plants."
          }
        ]
      },
      {
        "caseletNum": 66,
        "title": "Routes and Networks: Minimum Time, Prerequisites | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "In a project network diagram (DAG), how is the Critical Path defined?",
            "options": [
              "A) The path with the fewest number of activities",
              "B) The longest duration path from start to finish",
              "C) The path with the highest cost",
              "D) The path containing circular loops"
            ],
            "correctAnswer": "B",
            "solution": "The critical path represents the minimum time required to complete the entire project because all prerequisite sequences on this path must finish before project completion. It is the path with maximum total duration.",
            "shortcut": "Critical Path = Longest path in duration.",
            "trap": "Confusing critical path with shortest path."
          },
          {
            "qNum": 2,
            "statement": "How many odd days are accumulated in an ordinary year and a leap year, respectively?",
            "options": [
              "A) 0 and 1",
              "B) 1 and 2",
              "C) 2 and 3",
              "D) 1 and 3"
            ],
            "correctAnswer": "B",
            "solution": "Ordinary year has 365 days = 52 * 7 + 1 => 1 odd day. Leap year has 366 days = 52 * 7 + 2 => 2 odd days.",
            "shortcut": "365 mod 7 = 1; 366 mod 7 = 2.",
            "trap": "Forgetting that leap year adds 1 day in February."
          },
          {
            "qNum": 3,
            "statement": "According to the calendar repetition theorem, after how many years does a (Leap Year + 1) calendar repeat?",
            "options": [
              "A) 6 years",
              "B) 11 years",
              "C) 28 years",
              "D) 40 years"
            ],
            "correctAnswer": "A",
            "solution": "For a year of type (Leap + 1), odd days accumulated over 6 years: 1 leap year (2 days) + 5 ordinary years (5 days) = 7 days = 0 mod 7. Both are ordinary years, so the calendar repeats in exactly 6 years.",
            "shortcut": "Leap+1 repeats in 6 years; Leap+2 and Leap+3 repeat in 11 years; Leap repeats in 28 years.",
            "trap": "Applying the 11-year cycle to Leap+1."
          },
          {
            "qNum": 4,
            "statement": "In a multi-factory workforce optimization with bounded constraints, what is the primary heuristic to maximize total production?",
            "options": [
              "A) Distribute workers equally among all factories",
              "B) Allocate maximum permissible workforce to factories with the highest unit output per worker",
              "C) Minimize workforce at all factories",
              "D) Alternate allocations randomly"
            ],
            "correctAnswer": "B",
            "solution": "By greedy linear programming, allocating marginal workers to the highest efficiency factories (subject to capacity and prerequisite constraints) strictly maximizes aggregate output.",
            "shortcut": "Greedy allocation to highest productivity coefficients.",
            "trap": "Overlooking minimum workforce constraints on lower efficiency plants."
          }
        ]
      },
      {
        "caseletNum": 67,
        "title": "Table DI: Quarterly Sales Completion Set",
        "context": "A company reports sales (in lakh units) for products A, B, C across Q1-Q4. Row totals are known: A = 60, B = 48, C = 40. Table: A: [12, 15, ?, 18]; B: [10, ?, 14, 12]; C: [8, 9, 11, ?]. Each '?' is a single missing entry.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What are the sales of product A in Q3?",
            "options": ["A) 12", "B) 15", "C) 18", "D) 21"],
            "correctAnswer": "B",
            "solution": "A's row must total 60: 12 + 15 + x + 18 = 60, so x = 60 - 45 = 15.",
            "shortcut": "Single-unknown row + known total = instant linear equation. Solve it first.",
            "trap": "Averaging the row (60/4 = 15) gives the same number here by coincidence — always use the total equation, not averages."
          },
          {
            "qNum": 2,
            "statement": "What are the sales of product B in Q2?",
            "options": ["A) 10", "B) 14", "C) 12", "D) 16"],
            "correctAnswer": "C",
            "solution": "B's row must total 48: 10 + x + 14 + 12 = 48, so x = 48 - 36 = 12.",
            "shortcut": "Same single-unknown bootstrap: 48 - 36 = 12.",
            "trap": "Copying A's Q3 value (15) by pattern-matching instead of computing the row."
          },
          {
            "qNum": 3,
            "statement": "What are the sales of product C in Q4?",
            "options": ["A) 10", "B) 11", "C) 12", "D) 9"],
            "correctAnswer": "C",
            "solution": "C's row must total 40: 8 + 9 + 11 + x = 40, so x = 40 - 28 = 12.",
            "shortcut": "Third single-unknown row falls the same way: 40 - 28 = 12.",
            "trap": "Stopping after two rows and guessing — the grid always closes fully; finish it."
          },
          {
            "qNum": 4,
            "statement": "Which quarter recorded the highest total sales?",
            "options": ["A) Q1", "B) Q2", "C) Q3", "D) Q4"],
            "correctAnswer": "D",
            "solution": "Column totals: Q1 = 12+10+8 = 30; Q2 = 15+12+9 = 36; Q3 = 15+14+11 = 40; Q4 = 18+12+12 = 42. Q4 is highest at 42.",
            "shortcut": "After completing the grid, column sums are one addition each — never eyeball trends.",
            "trap": "Q3 looks strong (two mid-teens) but Q4's 18+12+12 wins — compute, don't eyeball."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Missing Data Tables, Matrix Reasoning & Row-Column Intersections",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Missing+Data+Tables+Matrix+Grids+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "Row-Column Constrained Elimination, Boundary Deduction & Dual-Condition Pruning",
      "duration": "Complete Masterclass • 6 Parts"
    }
  },
  {
    "id": "dilr_arrangements",
    "title": "Linear & Floor Arrangements (Fixed Extreme Anchors)",
    "tier": "Tier A",
    "weightage": "1 Set (5 Qs | 15 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Executive Summary & Foundational Axioms</h4>\n<div class='theory-block'>In CAT Logical Reasoning, Arrangement sets are **Constraint Satisfaction Problems (CSPs)**. Your primary goal is not guessing, but **eliminating indeterminacy** by categorizing clues into:\n1. **Definite Clues (Anchors):** Fixed position regardless of other variables (e.g., *\"A sits at an extreme left end\"*, *\"C sits diametrically opposite to D\"*).\n2. **Relative Clues (Blocks):** Position defined relative to another variable (e.g., *\"B sits second to the left of E\"*, *\"F and G are immediate neighbours\"*).\n3. **Negative Constraints (Filters):** Positions where a person or attribute *cannot* be placed (e.g., *\"Neither P nor Q sits adjacent to R\"*).\n\n---</div>\n<h4>2. Linear Seating Framework</h4>\n<div class='theory-block'>### 2.1 Single-Row Unidirectional (All Facing North)\n- Left and Right match your own hands:\n  - Moving towards the **Left** $\\longleftarrow$\n  - Moving towards the **Right** $\\longrightarrow$\n- **Ravi Sir's \"Block Method\":**\n  - If *\"A sits 3 places away from B\"*, the gap between them is strictly **$3 - 1 = 2$ people**:\n    $$\\boxed{A} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{B} \\quad \\text{or} \\quad \\boxed{B} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{A}$$\n  - If *\"A sits third to the right of B\"*, orientation is fixed:\n    $$\\boxed{B} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{A}$$\n\n### 2.2 Bidirectional Linear Rows (Facing North & South)\n- When persons face different directions:\n  - If person $X$ faces **North**: Left is $\\leftarrow$, Right is $\\rightarrow$.\n  - If person $Y$ faces **South**: Left is $\\rightarrow$, Right is $\\leftarrow$.\n- **Golden Rule:** Do not assign orientations first unless directly given. Fix relative positional chains first, then test directions against boundary conditions.\n\n### 2.3 Two-Row Parallel Seating (Facing Each Other)\n- **Row 1 (Facing South):** People sit facing downwards towards Row 2. For Row 1, Left is $\\rightarrow$ and Right is $\\leftarrow$.\n- **Row 2 (Facing North):** People sit facing upwards towards Row 1. For Row 2, Left is $\\leftarrow$ and Right is $\\rightarrow$.\n- Opposites: If $P$ in Row 1 faces $Q$ in Row 2, they share the exact vertical column:\n  $$\\begin{matrix}\n  \\text{Row 1 (South):} & A & B & P & C \\\\\n  & \\updownarrow & \\updownarrow & \\updownarrow & \\updownarrow \\\\</div>\n<h4>3. Circular Seating Framework</h4>\n<div class='theory-block'>### 3.1 All Facing Centre\n- For $n$ people facing centre:\n  - Clockwise movement = Moving to the **Left**.\n  - Anti-clockwise movement = Moving to the **Right**.\n- **Opposite Positions:**\n  - True diametrically opposite positions exist **only if $n$ is EVEN**.\n  - If $n$ is even, person opposite to position $k$ in an $n$-person circle is:\n    $$\\text{Opposite} = \\left(k + \\frac{n}{2}\\right) \\pmod n$$\n  - If $n$ is odd, no two individuals sit directly opposite; instead, they face gaps between seats.\n\n### 3.2 Some Facing Inward, Some Facing Outward\n- Create a tabular state tracker with columns:\n  `[Seat Number (1 to n)] | [Person] | [Orientation: In/Out] | [Associated Variable]`\n- Anchor on a person with a known orientation who has multiple relative links.\n- **Ravi Sir's Parity Check:** If two neighbours face the same direction, can three consecutive people face the same direction? Look for explicit constraints like *\"No three consecutive persons face the same direction\"*.\n\n---</div>\n<h4>4. Multi-Variable Linear Grids (People + City + Car + Color)</h4>\n<div class='theory-block'>When each seat has 2 or more attributes:\n1. Establish the **Invariant Axis** (Seat Numbers $1, 2, \\dots, n$).\n2. Never make persons the rows if positions are ordered. Use a 2D Matrix:\n   $$\\begin{array}{|c|c|c|c|c|}\n   \\hline\n   \\textbf{Seat} & \\textbf{Name} & \\textbf{Profession} & \\textbf{City} & \\textbf{Car} \\\\\n   \\hline\n   1 & & & & \\\\\n   2 & & & & \\\\\n   \\vdots & & & & \\\\\n   n & & & & \\\\\n   \\hline\n   \\end{array}$$\n3. Fill definite values directly.\n4. Maintain a **Floating Clue Box** on the side for unanchored pairs (e.g., $[\\text{Doctor} = \\text{Delhi}]$, $[\\text{BMW} \\text{ is immediately left of Audi}]$).\n\n---</div>",
    "formulas": [
      {
        "formula": "\\boxed{A} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{B} \\quad \\text{or} \\quad \\boxed{B} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{A}"
      },
      {
        "formula": "\\boxed{B} \\; \\underline{\\quad} \\; \\underline{\\quad} \\; \\boxed{A}"
      },
      {
        "formula": "\\begin{matrix}\n  \\text{Row 1 (South):} & A & B & P & C \\\\\n  & \\updownarrow & \\updownarrow & \\updownarrow & \\updownarrow \\\\\n  \\text{Row 2 (North):} & X & Y & Q & Z\n  \\end{matrix}"
      },
      {
        "formula": "\\text{Opposite} = \\left(k + \\frac{n}{2}\\right) \\pmod n"
      },
      {
        "formula": "\\begin{array}{|c|c|c|c|c|}\n   \\hline\n   \\textbf{Seat} & \\textbf{Name} & \\textbf{Profession} & \\textbf{City} & \\textbf{Car} \\\\\n   \\hline\n   1 & & & & \\\\\n   2 & & & & \\\\\n   \\vdots & & & & \\\\\n   n & & & & \\\\\n   \\hline\n   \\end{array}"
      }
    ],
    "caselets": [
      {
        "caseletNum": 1,
        "title": "LRDI for CAT: Full Course Introduction | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the primary anchor or extreme condition that eliminates 50% of the candidate positions?",
            "options": [
              "A) The extreme end placement",
              "B) The parity of the seat numbers",
              "C) The relative block of adjacent elements",
              "D) The negative constraint on neighbors"
            ],
            "correctAnswer": "A",
            "solution": "In linear and two-row seating arrangements, placing the entity with an extreme-end constraint immediately fixes the reference frame and restricts subsequent placements to a single direction.",
            "shortcut": "Always look for 'extreme end', 'opposite to', or 'corner' clues first.",
            "trap": "Never start with 'between' clues; they have high degrees of positional freedom."
          },
          {
            "qNum": 2,
            "statement": "If two entities A and B have 2 people between them in a row of 8 facing North, how many valid pairs of positions (Pos(A), Pos(B)) can they occupy?",
            "options": [
              "A) 8",
              "B) 10",
              "C) 12",
              "D) 14"
            ],
            "correctAnswer": "B",
            "solution": "Gap between A and B is 2, so |Pos(B) - Pos(A)| = 3. Valid pairs in an 8-seat row: (1, 4), (2, 5), (3, 6), (4, 7), (5, 8) = 5 unordered pairs. Since order matters (A left of B or B left of A), total pairs = 5 * 2 = 10.",
            "shortcut": "Pairs = 2 * (N - gap - 1) = 2 * (8 - 2 - 1) = 10.",
            "trap": "Forgetting to multiply by 2 when relative left/right orientation is not specified."
          },
          {
            "qNum": 3,
            "statement": "In a circular arrangement of N people facing the center, under what condition can two people sit diametrically opposite each other?",
            "options": [
              "A) N is any integer >= 3",
              "B) N must be strictly even",
              "C) N must be prime",
              "D) N must be a multiple of 3"
            ],
            "correctAnswer": "B",
            "solution": "Diametrically opposite seats partition the circle into two equal semicircles. This requires (N - 2) / 2 seats on each side, which is an integer if and only if N is even.",
            "shortcut": "N is even => opposite seat is (k + N/2) mod N. N is odd => opposite seat does not exist.",
            "trap": "Assuming opposite seats exist in 7 or 9 person tables."
          },
          {
            "qNum": 4,
            "statement": "In a 4-variable floor puzzle with 8 floors, what is the recommended matrix format?",
            "options": [
              "A) Persons as rows, floors and variables as columns",
              "B) Floors (1 to 8) as the primary vertical column, attributes as horizontal headers",
              "C) Attributes as rows, persons as columns",
              "D) Chronological event sequence"
            ],
            "correctAnswer": "B",
            "solution": "Floors 1 to 8 have an intrinsic fixed spatial hierarchy. Using Floors as the primary invariant vertical column eliminates re-ordering and allows direct visual application of 'k floors above/below' clues.",
            "shortcut": "Fix the invariant spatial axis (Floors 1 to 8) first.",
            "trap": "Using person names as rows leads to constant row erasing."
          }
        ]
      },
      {
        "caseletNum": 2,
        "title": "Linear and Circular Arrangement: The Basics | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the primary anchor or extreme condition that eliminates 50% of the candidate positions?",
            "options": [
              "A) The extreme end placement",
              "B) The parity of the seat numbers",
              "C) The relative block of adjacent elements",
              "D) The negative constraint on neighbors"
            ],
            "correctAnswer": "A",
            "solution": "In linear and two-row seating arrangements, placing the entity with an extreme-end constraint immediately fixes the reference frame and restricts subsequent placements to a single direction.",
            "shortcut": "Always look for 'extreme end', 'opposite to', or 'corner' clues first.",
            "trap": "Never start with 'between' clues; they have high degrees of positional freedom."
          },
          {
            "qNum": 2,
            "statement": "If two entities A and B have 2 people between them in a row of 8 facing North, how many valid pairs of positions (Pos(A), Pos(B)) can they occupy?",
            "options": [
              "A) 8",
              "B) 10",
              "C) 12",
              "D) 14"
            ],
            "correctAnswer": "B",
            "solution": "Gap between A and B is 2, so |Pos(B) - Pos(A)| = 3. Valid pairs in an 8-seat row: (1, 4), (2, 5), (3, 6), (4, 7), (5, 8) = 5 unordered pairs. Since order matters (A left of B or B left of A), total pairs = 5 * 2 = 10.",
            "shortcut": "Pairs = 2 * (N - gap - 1) = 2 * (8 - 2 - 1) = 10.",
            "trap": "Forgetting to multiply by 2 when relative left/right orientation is not specified."
          },
          {
            "qNum": 3,
            "statement": "In a circular arrangement of N people facing the center, under what condition can two people sit diametrically opposite each other?",
            "options": [
              "A) N is any integer >= 3",
              "B) N must be strictly even",
              "C) N must be prime",
              "D) N must be a multiple of 3"
            ],
            "correctAnswer": "B",
            "solution": "Diametrically opposite seats partition the circle into two equal semicircles. This requires (N - 2) / 2 seats on each side, which is an integer if and only if N is even.",
            "shortcut": "N is even => opposite seat is (k + N/2) mod N. N is odd => opposite seat does not exist.",
            "trap": "Assuming opposite seats exist in 7 or 9 person tables."
          },
          {
            "qNum": 4,
            "statement": "In a 4-variable floor puzzle with 8 floors, what is the recommended matrix format?",
            "options": [
              "A) Persons as rows, floors and variables as columns",
              "B) Floors (1 to 8) as the primary vertical column, attributes as horizontal headers",
              "C) Attributes as rows, persons as columns",
              "D) Chronological event sequence"
            ],
            "correctAnswer": "B",
            "solution": "Floors 1 to 8 have an intrinsic fixed spatial hierarchy. Using Floors as the primary invariant vertical column eliminates re-ordering and allows direct visual application of 'k floors above/below' clues.",
            "shortcut": "Fix the invariant spatial axis (Floors 1 to 8) first.",
            "trap": "Using person names as rows leads to constant row erasing."
          }
        ]
      },
      {
        "caseletNum": 3,
        "title": "Linear and Circular Arrangement Tricks | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the primary anchor or extreme condition that eliminates 50% of the candidate positions?",
            "options": [
              "A) The extreme end placement",
              "B) The parity of the seat numbers",
              "C) The relative block of adjacent elements",
              "D) The negative constraint on neighbors"
            ],
            "correctAnswer": "A",
            "solution": "In linear and two-row seating arrangements, placing the entity with an extreme-end constraint immediately fixes the reference frame and restricts subsequent placements to a single direction.",
            "shortcut": "Always look for 'extreme end', 'opposite to', or 'corner' clues first.",
            "trap": "Never start with 'between' clues; they have high degrees of positional freedom."
          },
          {
            "qNum": 2,
            "statement": "If two entities A and B have 2 people between them in a row of 8 facing North, how many valid pairs of positions (Pos(A), Pos(B)) can they occupy?",
            "options": [
              "A) 8",
              "B) 10",
              "C) 12",
              "D) 14"
            ],
            "correctAnswer": "B",
            "solution": "Gap between A and B is 2, so |Pos(B) - Pos(A)| = 3. Valid pairs in an 8-seat row: (1, 4), (2, 5), (3, 6), (4, 7), (5, 8) = 5 unordered pairs. Since order matters (A left of B or B left of A), total pairs = 5 * 2 = 10.",
            "shortcut": "Pairs = 2 * (N - gap - 1) = 2 * (8 - 2 - 1) = 10.",
            "trap": "Forgetting to multiply by 2 when relative left/right orientation is not specified."
          },
          {
            "qNum": 3,
            "statement": "In a circular arrangement of N people facing the center, under what condition can two people sit diametrically opposite each other?",
            "options": [
              "A) N is any integer >= 3",
              "B) N must be strictly even",
              "C) N must be prime",
              "D) N must be a multiple of 3"
            ],
            "correctAnswer": "B",
            "solution": "Diametrically opposite seats partition the circle into two equal semicircles. This requires (N - 2) / 2 seats on each side, which is an integer if and only if N is even.",
            "shortcut": "N is even => opposite seat is (k + N/2) mod N. N is odd => opposite seat does not exist.",
            "trap": "Assuming opposite seats exist in 7 or 9 person tables."
          },
          {
            "qNum": 4,
            "statement": "In a 4-variable floor puzzle with 8 floors, what is the recommended matrix format?",
            "options": [
              "A) Persons as rows, floors and variables as columns",
              "B) Floors (1 to 8) as the primary vertical column, attributes as horizontal headers",
              "C) Attributes as rows, persons as columns",
              "D) Chronological event sequence"
            ],
            "correctAnswer": "B",
            "solution": "Floors 1 to 8 have an intrinsic fixed spatial hierarchy. Using Floors as the primary invariant vertical column eliminates re-ordering and allows direct visual application of 'k floors above/below' clues.",
            "shortcut": "Fix the invariant spatial axis (Floors 1 to 8) first.",
            "trap": "Using person names as rows leads to constant row erasing."
          }
        ]
      },
      {
        "caseletNum": 4,
        "title": "Linear Arrangement Set: Seating with 2 Variables | LRDI Basics to Advanced | CAT 2027 | Ravi Sir",
        "context": "CAT DILR set context.",
        "questions": [
          {
            "qNum": 1,
            "statement": "What is the primary anchor or extreme condition that eliminates 50% of the candidate positions?",
            "options": [
              "A) The extreme end placement",
              "B) The parity of the seat numbers",
              "C) The relative block of adjacent elements",
              "D) The negative constraint on neighbors"
            ],
            "correctAnswer": "A",
            "solution": "In linear and two-row seating arrangements, placing the entity with an extreme-end constraint immediately fixes the reference frame and restricts subsequent placements to a single direction.",
            "shortcut": "Always look for 'extreme end', 'opposite to', or 'corner' clues first.",
            "trap": "Never start with 'between' clues; they have high degrees of positional freedom."
          },
          {
            "qNum": 2,
            "statement": "If two entities A and B have 2 people between them in a row of 8 facing North, how many valid pairs of positions (Pos(A), Pos(B)) can they occupy?",
            "options": [
              "A) 8",
              "B) 10",
              "C) 12",
              "D) 14"
            ],
            "correctAnswer": "B",
            "solution": "Gap between A and B is 2, so |Pos(B) - Pos(A)| = 3. Valid pairs in an 8-seat row: (1, 4), (2, 5), (3, 6), (4, 7), (5, 8) = 5 unordered pairs. Since order matters (A left of B or B left of A), total pairs = 5 * 2 = 10.",
            "shortcut": "Pairs = 2 * (N - gap - 1) = 2 * (8 - 2 - 1) = 10.",
            "trap": "Forgetting to multiply by 2 when relative left/right orientation is not specified."
          },
          {
            "qNum": 3,
            "statement": "In a circular arrangement of N people facing the center, under what condition can two people sit diametrically opposite each other?",
            "options": [
              "A) N is any integer >= 3",
              "B) N must be strictly even",
              "C) N must be prime",
              "D) N must be a multiple of 3"
            ],
            "correctAnswer": "B",
            "solution": "Diametrically opposite seats partition the circle into two equal semicircles. This requires (N - 2) / 2 seats on each side, which is an integer if and only if N is even.",
            "shortcut": "N is even => opposite seat is (k + N/2) mod N. N is odd => opposite seat does not exist.",
            "trap": "Assuming opposite seats exist in 7 or 9 person tables."
          },
          {
            "qNum": 4,
            "statement": "In a 4-variable floor puzzle with 8 floors, what is the recommended matrix format?",
            "options": [
              "A) Persons as rows, floors and variables as columns",
              "B) Floors (1 to 8) as the primary vertical column, attributes as horizontal headers",
              "C) Attributes as rows, persons as columns",
              "D) Chronological event sequence"
            ],
            "correctAnswer": "B",
            "solution": "Floors 1 to 8 have an intrinsic fixed spatial hierarchy. Using Floors as the primary invariant vertical column eliminates re-ordering and allows direct visual application of 'k floors above/below' clues.",
            "shortcut": "Fix the invariant spatial axis (Floors 1 to 8) first.",
            "trap": "Using person names as rows leads to constant row erasing."
          }
        ]
      },
      {
        "caseletNum": 5,
        "title": "Floor Puzzle: Five Residents, Fixed Axis",
        "context": "Five residents A, B, C, D, E live on floors 1 to 5 (one per floor). Clues: (1) A lives on the top floor. (2) C lives on the bottom floor. (3) B lives adjacent to neither A nor C.",
        "questions": [
          {
            "qNum": 1,
            "statement": "Who lives on the middle floor (floor 3)?",
            "options": ["A) A", "B) B", "C) C", "D) D"],
            "correctAnswer": "B",
            "solution": "A = 5, C = 1. B cannot be adjacent to A (not 4) nor to C (not 2), so B = 3, the only remaining non-adjacent floor.",
            "shortcut": "Elimination on the fixed axis: cross out forbidden floors, take the survivor.",
            "trap": "Placing B at 4 by 'middle-ish' feeling — adjacency bans are exact, not approximate."
          },
          {
            "qNum": 2,
            "statement": "Which floors are definitely occupied by A, B, C respectively?",
            "options": ["A) 5, 3, 1", "B) 5, 4, 1", "C) 4, 3, 1", "D) 5, 3, 2"],
            "correctAnswer": "A",
            "solution": "A = 5 (top), C = 1 (bottom) are given; B = 3 by elimination. So 5, 3, 1.",
            "shortcut": "Lock givens first, deduce second — never float a given.",
            "trap": "Option D moves C to 2, contradicting a direct clue — re-read givens before options."
          },
          {
            "qNum": 3,
            "statement": "If D lives on floor 2, on which floor does E live?",
            "options": ["A) 2", "B) 3", "C) 4", "D) 5"],
            "correctAnswer": "C",
            "solution": "Floors taken: A=5, B=3, C=1, D=2. The only free floor is 4, so E = 4.",
            "shortcut": "Last-person-out: fill the axis, read the gap.",
            "trap": "Re-deriving everything instead of subtracting placed residents from {1..5}."
          },
          {
            "qNum": 4,
            "statement": "How many residents have completely fixed floors?",
            "options": ["A) 5", "B) 2", "C) 3", "D) 4"],
            "correctAnswer": "C",
            "solution": "A = 5, C = 1, B = 3 are forced in every valid arrangement; D and E swap between 2 and 4. So 3 residents are fixed.",
            "shortcut": "'Definitely true' questions: test the swap — whoever never moves is fixed.",
            "trap": "Counting 5 by forgetting D/E interchangeability — always run the swap test."
          }
        ]
      },
      {
        "caseletNum": 6,
        "title": "Circular Table: Six Colleagues, Fixed Order",
        "context": "Six colleagues A, B, C, D, E, F sit around a circular table facing the centre, numbered 1-6 clockwise. Clues: (1) A sits opposite D. (2) B sits immediately clockwise from A. (3) C sits opposite B. (4) F does not sit next to D.",
        "questions": [
          {
            "qNum": 1,
            "statement": "Fix A at position 1. Who sits opposite B?",
            "options": ["A) D", "B) E", "C) C", "D) F"],
            "correctAnswer": "C",
            "solution": "A=1, D=4 (opposite). B is immediately clockwise from A: position 2. Opposite of 2 is 5. Position 5 must be C: remaining people after A,B,D are C,E,F and clue 3 forces C opposite B. So C.",
            "shortcut": "Anchor A=1 by rotation symmetry, then place forced neighbours before reading options.",
            "trap": "Mirroring clockwise/counter-clockwise — fix the direction once and never flip it."
          },
          {
            "qNum": 2,
            "statement": "With A at position 1, what is F's position number?",
            "options": ["A) 3", "B) 5", "C) 6", "D) 4"],
            "correctAnswer": "C",
            "solution": "Placed: A=1, B=2, D=4, C=5. Free: 3, 6 for E, F. F cannot neighbour D(4): neighbours of 4 are 3 and 5 — so F ≠ 3, giving F = 6 and E = 3.",
            "shortcut": "Negative clues eliminate: list the forbidden seats, take the survivor.",
            "trap": "Placing F at 3 by leftover feeling without testing the adjacency ban."
          },
          {
            "qNum": 3,
            "statement": "E sits between which two colleagues?",
            "options": ["A) A and C", "B) B and D", "C) D and F", "D) A and F"],
            "correctAnswer": "B",
            "solution": "E = 3, whose clockwise neighbours are 2 (B) and 4 (D).",
            "shortcut": "Neighbours of n are n−1 and n+1 (mod 6) — pure arithmetic, no diagram needed.",
            "trap": "Answering with E's opposites instead of its neighbours — 'between' means adjacent."
          },
          {
            "qNum": 4,
            "statement": "Who sits immediately clockwise from D?",
            "options": ["A) E", "B) F", "C) C", "D) B"],
            "correctAnswer": "C",
            "solution": "D = 4; immediately clockwise is position 5 = C.",
            "shortcut": "Clockwise +1 from any seat — one modular addition answers it.",
            "trap": "Counter-clockwise (position 3, E) is the classic direction slip."
          }
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha DILR: Complex Linear & Circular Arrangements with Multi-Attributes",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+DILR+Arrangements+Linear+Circular+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzh3Ybh_NlW5pA_M-h0f2xXU",
      "highlight": "Anchor-Clue Chaining & Facing Direction Constraint Tables",
      "duration": "Complete Masterclass • 6 Parts"
    }
  }
];
