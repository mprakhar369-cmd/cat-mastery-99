window.QA_TOPICS_DATA = [
  {
    "id": "qa_logs",
    "title": "Logarithms, Surds & Indices",
    "domain": "Algebra",
    "tier": "Tier S",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. Axiomatic Definition of Logarithms & First Principles</h4>\n<div class='theory-block'>A logarithm is the inverse operation to exponentiation:\n$$\\mathbf{\\log_b a = x \\iff b^x = a}$$\n* **Three Non-Negotiable Existence Constraints in $\\mathbb{R}$:**\n  1. $\\mathbf{a > 0}$ (Argument must be strictly positive).\n  2. $\\mathbf{b > 0}$ (Base must be strictly positive).\n  3. $\\mathbf{b \\ne 1}$ (Base can never equal $1$, since $1^x = 1 \\ne a$).\n\n---</div>\n<h4>2. Mathematical Laws of Logarithms: First-Principle Proofs</h4>\n<div class='theory-block'>### 2.1 Product Law: $\\log_b(xy) = \\log_b x + \\log_b y$\n* **Proof:** Let $u = \\log_b x$ and $v = \\log_b y \\implies x = b^u, \\; y = b^v$.  \n  Multiplying: $xy = b^u \\cdot b^v = b^{u + v}$.  \n  Taking $\\log_b$ of both sides: $\\log_b(xy) = u + v = \\log_b x + \\log_b y$. $\\blacksquare$\n\n### 2.2 Quotient Law: $\\log_b\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y$\n\n### 2.3 Power Law (Argument & Base Exponents):\n$$\\mathbf{\\log_{b^k} (a^m) = \\frac{m}{k} \\log_b a}$$\n* Exponent of argument ($m$) goes to the **numerator**.\n* Exponent of base ($k$) goes to the **denominator**.\n\n### 2.4 The Base-Change Theorem:\n$$\\mathbf{\\log_b a = \\frac{\\log_c a}{\\log_c b}}$$\n* **Corollary 1 (Reciprocal Rule):** $\\mathbf{\\log_b a = \\frac{1}{\\log_a b}}$\n* **Corollary 2 (Chain Cancellation):** $\\log_b a \\cdot \\log_c b \\cdot \\log_d c = \\log_d a$.\n\n### 2.5 The Power-Base Swap Identity:\n$$\\mathbf{a^{\\log_b c} = c^{\\log_b a}}$$\n* **Proof:** Take $\\log_b$ of both sides:  \n  $\\log_b\\left(a^{\\log_b c}\\right) = (\\log_b c) \\cdot (\\log_b a)$.  \n  $\\log_b\\left(c^{\\log_b a}\\right) = (\\log_b a) \\cdot (\\log_b c)$.  \n  Both expressions are identical! $\\blacksquare$</div>\n<h4>3. Logarithmic Inequalities: The Monotonicity Base Rule</h4>\n<div class='theory-block'>When solving inequalities involving logarithms $\\log_b x > \\log_b y$:\n\n```\nCase 1: Base b > 1 (Monotonically Increasing)\n  log_b x > log_b y  <===>  x > y > 0  (Inequality direction PRESERVED)\n\nCase 2: Base 0 < b < 1 (Monotonically Decreasing)\n  log_b x > log_b y  <===>  0 < x < y  (Inequality direction FLIPS!)\n```\n\n> [!CAUTION] **The Fractional Base Trap:**  \n> If the base is less than 1 (e.g. $\\log_{0.5} x > 2$), the direction of inequality **strictly reverses**: $x < (0.5)^2 = 0.25$!\n\n---</div>\n<h4>4. Characteristic, Mantissa & Number of Digits</h4>\n<div class='theory-block'>Every common logarithm ($\\log_{10} N$) can be written as:\n$$\\log_{10} N = \\text{Characteristic } (C \\in \\mathbb{Z}) + \\text{Mantissa } (M \\in [0, 1))$$\n\n### 4.1 Number of Digits in Large Powers ($a^b$)\n$$\\mathbf{\\text{Number of Digits in } a^b = \\left\\lfloor b \\log_{10} a \\right\\rfloor + 1}$$\n* **Example:** Find number of digits in $2^{50}$ (given $\\log_{10} 2 \\approx 0.3010$):\n  $$50 \\times 0.3010 = 15.05$$\n  $$\\text{Digits} = \\lfloor 15.05 \\rfloor + 1 = 15 + 1 = \\mathbf{16\\text{ digits}}.$$\n\n### 4.2 Number of Leading Zeroes After Decimal Point ($a^{-b}$)\n$$\\mathbf{\\text{Leading Zeroes before first non-zero digit} = |\\lfloor -b \\log_{10} a \\rfloor| - 1 = \\lfloor b \\log_{10} a \\rfloor}$$\n\n---</div>",
    "formulas": [
      {
        "formula": "\\mathbf{\\log_b a = x \\iff b^x = a}"
      },
      {
        "formula": "\\mathbf{\\log_{b^k} (a^m) = \\frac{m}{k} \\log_b a}"
      },
      {
        "formula": "\\mathbf{\\log_b a = \\frac{\\log_c a}{\\log_c b}}"
      },
      {
        "formula": "\\mathbf{a^{\\log_b c} = c^{\\log_b a}}"
      },
      {
        "formula": "\\log_{10} N = \\text{Characteristic } (C \\in \\mathbb{Z}) + \\text{Mantissa } (M \\in [0, 1))"
      },
      {
        "formula": "\\mathbf{\\text{Number of Digits in } a^b = \\left\\lfloor b \\log_{10} a \\right\\rfloor + 1}"
      }
    ],
    "questions": [
      {
        "qNum": 126,
        "title": "Logarithm Base-Change Chain Product",
        "problem": "Find the value of $\\log_2 3 \\times \\log_3 4 \\times \\log_4 5 \\times \\dots \\times \\log_{63} 64$.",
        "concept": "Base Change Theorem: $\\log_b a = \\frac{\\log a}{\\log b}$. A chain of logarithms telescopes.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "7",
          "5",
          "6",
          "8"
        ]
      },
      {
        "qNum": 127,
        "title": "Logarithmic Equation with Domain Verification",
        "problem": "Solve the equation $\\log_2(x - 2) + \\log_2(x + 1) = 2$.",
        "concept": "Combine logarithms using product rule: $\\log_2[(x - 2)(x + 1)] = 2$. Always verify individual arguments $> 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "x = 4",
          "x = 2",
          "x = 6",
          "x = 3"
        ]
      },
      {
        "qNum": 128,
        "title": "Logarithmic Equation with Variable Base",
        "problem": "Solve the equation $\\log_x(3x^2 - 5x + 3) = 2$.",
        "concept": "Definition of log: $3x^2 - 5x + 3 = x^2$, with conditions $x > 0$ and $x \\neq 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 3/2 (or 1.5)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "x = 3/2 (or 1.5)",
          "4 x = /2 (or 1.5)",
          "2 x = /2 (or 1.5)",
          "5 x = /2 (or 1.5)"
        ]
      },
      {
        "qNum": 129,
        "title": "Power-Log Symmetry Identity",
        "problem": "Find the value of $x$ satisfying $3^{\\log_2 x} + x^{\\log_2 3} = 54$.",
        "concept": "Power-log swap identity: $a^{\\log_b c} = c^{\\log_b a}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 8",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "x = 9",
          "x = 8",
          "x = 7",
          "x = 16"
        ]
      },
      {
        "qNum": 130,
        "title": "System of Logarithmic Equations",
        "problem": "Solve for positive $x$ and $y$: $\\log_2 x + \\log_4 y = 5$ and $\\log_4 x + \\log_2 y = 7$.",
        "concept": "Convert all logarithms to base 2 using $\\log_4 u = \\frac{1}{2} \\log_2 u$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 4, y = 64",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 131,
        "title": "Logarithmic Inequality with Base Less Than 1",
        "problem": "Solve the inequality $\\log_{0.5}(x^2 - 5x + 6) \\ge -1$.",
        "concept": "When base $b \\in (0, 1)$, $\\log_b A \\ge c \\iff 0 < A \\le b^c$ (the sign reverses!).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "[1, 2) U (3, 4]",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(1, 2] U [3, 4)",
          "[1, 4]",
          "(2, 3)",
          "[1, 2) U (3, 4]"
        ]
      },
      {
        "qNum": 132,
        "title": "Nested Logarithmic Equation",
        "problem": "Find $x$ if $\\log_2(\\log_3(\\log_4 x)) = 1$.",
        "concept": "Unwrap outer logarithm layer by layer from outside in.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2^18 (or 262,144)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2^18 (or 262,144)",
          "(1, 2] U [3, 4)",
          "[1, 4]",
          "(2, 3)"
        ]
      },
      {
        "qNum": 133,
        "title": "Number of Digits via Characteristic",
        "problem": "Find the number of digits in $6^{50}$, given $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$.",
        "concept": "Number of digits in $N$ is $\\lfloor\\log_{10} N\\rfloor + 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "39 digits",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "47 digits",
          "39 digits",
          "31 digits",
          "59 digits"
        ]
      },
      {
        "qNum": 134,
        "title": "Number of Zeroes After Decimal Before First Significant Digit",
        "problem": "Find the number of zeroes immediately after the decimal point before the first non-zero digit in $(1/2)^{100}$, given $\\log_{10} 2 = 0.3010$.",
        "concept": "For $N < 1$, number of zeroes is $|\\lfloor\\log_{10} N\\rfloor| - 1$ or $\\lfloor -\\log_{10} N \\rfloor$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "30 zeroes",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "36 zeroes",
          "24 zeroes",
          "30 zeroes",
          "45 zeroes"
        ]
      },
      {
        "qNum": 135,
        "title": "Product of Roots of Variable-Power Log Equation",
        "problem": "Find the product of all real roots of the equation $x^{\\log_{10} x} = 100x$.",
        "concept": "Take $\\log_{10}$ on both sides to convert to a quadratic in $\\log_{10} x$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 136,
        "title": "Logarithmic Harmonic Series Telescoping",
        "problem": "If $N = 100!$, find the value of $\\frac{1}{\\log_2 N} + \\frac{1}{\\log_3 N} + \\frac{1}{\\log_4 N} + \\dots + \\frac{1}{\\log_{100} N}$.",
        "concept": "Reciprocal rule: $\\frac{1}{\\log_a b} = \\log_b a$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1",
          "2",
          "0",
          "3"
        ]
      },
      {
        "qNum": 137,
        "title": "Logarithmic AM-GM Optimization",
        "problem": "If $a, b > 1$, find the minimum value of $\\log_a b + \\log_b a$.",
        "concept": "Notice that $\\log_b a = \\frac{1}{\\log_a b}$. Apply AM-GM to the positive terms.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3",
          "2",
          "1",
          "4"
        ]
      },
      {
        "qNum": 138,
        "title": "Logarithmic Equation with Quadratic in Argument",
        "problem": "Find the number of real solutions to $\\log_3(x^2 - 4x + 12) = 2$.",
        "concept": "Convert to quadratic: $x^2 - 4x + 12 = 3^2 = 9$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2 solutions",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 solutions",
          "1 solutions",
          "2 solutions",
          "4 solutions"
        ]
      },
      {
        "qNum": 139,
        "title": "Logarithmic Inequality with Variable in Exponent",
        "problem": "Solve $x^{\\log_2 x + 1} = 4$.",
        "concept": "Take $\\log_2$ on both sides: $(\\log_2 x + 1) \\log_2 x = \\log_2 4 = 2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 2, 1/4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 x = , 1/4",
          "1 x = , 1/4",
          "4 x = , 1/4",
          "x = 2, 1/4"
        ]
      },
      {
        "qNum": 140,
        "title": "Sum of Logarithmic Series with Reciprocals",
        "problem": "Evaluate $\\log_2(1 + 1/1) + \\log_2(1 + 1/2) + \\log_2(1 + 1/3) + \\dots + \\log_2(1 + 1/63)$.",
        "concept": "Simplify fractions: $1 + 1/n = \\frac{n+1}{n}$. The product inside the logarithm telescopes.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Logarithms, Surds & Indices (Zero to Zenith)",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Logarithms+Surds+Indices+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Monotonicity Base Rule, Power-Base Swap & Characteristic-Mantissa Digits",
      "duration": "Complete Playlist • 8 Parts"
    }
  },
  {
    "id": "qa_tw",
    "title": "Time & Work, Pipes & Cisterns",
    "domain": "Arithmetic",
    "tier": "Tier S",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. The LCM Total Work Units Framework: First Principles</h4>\n<div class='theory-block'>The conventional school approach of setting total work $= 1$ and adding fractions ($\\frac{1}{A} + \\frac{1}{B}$) is slow and prone to arithmetic mistakes in multi-stage CAT problems.\n\n### 1.1 First-Principle Derivation\nWork done is the integral of rate of work over time:\n$$\\mathbf{\\text{Total Work } (W) = \\text{Efficiency } (E) \\times \\text{Time } (T)}$$\n* For two individuals completing the same work in $T_A$ and $T_B$ days:\n  $$E_A \\cdot T_A = E_B \\cdot T_B = W$$\n* Efficiency is **inversely proportional to Time Taken**:\n  $$\\mathbf{\\frac{E_A}{E_B} = \\frac{T_B}{T_A}}$$\n\n### 1.2 The LCM Assumption Rule\nTo ensure all individual efficiencies are **strictly positive integers**, define Total Work as the Least Common Multiple of individual times:\n$$\\mathbf{W = \\operatorname{LCM}(T_1, T_2, \\dots, T_k) \\text{ units}}$$\n$$E_i = \\frac{W}{T_i} \\text{ units/day}$$\n* When working together, individual rates add linearly:\n  $$E_{\\text{combined}} = \\sum E_i \\implies \\mathbf{T_{\\text{combined}} = \\frac{W}{\\sum E_i}}$$\n\n---</div>\n<h4>2. The Universal Man-Days Work Equivalence Formula</h4>\n<div class='theory-block'>If $M$ workers of efficiency $E$ work for $D$ days at $H$ hours per day to produce $W$ units of work:\n$$\\text{Total Work Effort} = M \\times D \\times H \\times E$$\nSince the rate of work per unit output is constant:\n\n$$\\mathbf{\\frac{M_1 \\cdot D_1 \\cdot H_1 \\cdot E_1}{W_1} = \\frac{M_2 \\cdot D_2 \\cdot H_2 \\cdot E_2}{W_2}}$$\n\n---</div>\n<h4>3. Advanced Operational Models</h4>\n<div class='theory-block'>### 3.1 Model 1: Alternating Days Working (Cycles)\nA works on Day 1, B works on Day 2, A on Day 3, etc.\n1. Determine the work done in one complete fundamental cycle of 2 days:\n   $$W_{\\text{cycle}} = E_A + E_B \\text{ units in } 2 \\text{ days}$$\n2. Divide total work $W$ by $W_{\\text{cycle}}$ to find complete cycles:\n   $$\\text{Complete Cycles} = \\left\\lfloor \\frac{W}{W_{\\text{cycle}}} \\right\\rfloor = k$$\n   $$\\text{Work Done} = k \\cdot W_{\\text{cycle}} \\text{ units in } 2k \\text{ days}$$\n3. Address the remaining fractional work $W_{\\text{rem}} = W - k \\cdot W_{\\text{cycle}}$:\n   * Next turn belongs to A. If $W_{\\text{rem}} \\le E_A$:\n     $$\\text{Additional Time} = \\frac{W_{\\text{rem}}}{E_A} \\text{ days}$$\n   * If $W_{\\text{rem}} > E_A$: A works for 1 full day, and B completes the balance $\\frac{W_{\\text{rem}} - E_A}{E_B}$ days.\n\n---\n\n### 3.2 Model 2: Workers Leaving Before Completion (The \"Ghost Work\" Shortcut)\n**Question Pattern:** A and B start together. 3 days before the work is completed, A leaves. Find total days taken.\n\n#### The Rodha \"Virtual Overtime\" Principle:\nInstead of setting up backward algebraic equations:\n* Imagine that **A did NOT leave**, but stayed and worked for those final 3 days!\n* In those 3 days, A would have contributed an additional $3 \\times E_A$ units of work.\n* Add this virtual work to the total target:\n  $$\\mathbf{W_{\\text{augmented}} = W + (3 \\times E_A)}$$</div>\n<h4>4. Ravi Sir's Exam Traps & Strategic Warnings</h4>\n<div class='theory-block'>1. **Trap 1: The Men-Women Equivalence Reduction**  \n   If \"3 men OR 4 women can do a work in 20 days\":\n   * $3M = 4W \\implies \\frac{M}{W} = \\frac{4}{3}$ ($E_M = 4, E_W = 3$).  \n   * Total work $= 3(4) \\times 20 = 240\\text{ units}$.  \n   * Never confuse \"OR\" ($=$) with \"AND\" ($+$)!\n\n2. **Trap 2: The Alternating Work Cycle End Boundary**  \n   In alternating work with a leak (e.g., monkey climbing a greasy pole or inlet filling while leak empties):  \n   * The tank becomes FULL on the inlet's turn before the outlet has a chance to leak it!  \n   * You must subtract 1 day's filling capacity from the target before computing full cycles!\n\n---</div>",
    "formulas": [
      {
        "formula": "\\mathbf{\\text{Total Work } (W) = \\text{Efficiency } (E) \\times \\text{Time } (T)}"
      },
      {
        "formula": "E_A \\cdot T_A = E_B \\cdot T_B = W"
      },
      {
        "formula": "\\mathbf{\\frac{E_A}{E_B} = \\frac{T_B}{T_A}}"
      },
      {
        "formula": "\\mathbf{W = \\operatorname{LCM}(T_1, T_2, \\dots, T_k) \\text{ units}}"
      },
      {
        "formula": "E_i = \\frac{W}{T_i} \\text{ units/day}"
      },
      {
        "formula": "E_{\\text{combined}} = \\sum E_i \\implies \\mathbf{T_{\\text{combined}} = \\frac{W}{\\sum E_i}}"
      }
    ],
    "questions": [
      {
        "qNum": 121,
        "title": "Basic LCM Method for Joint Work",
        "problem": "A can complete a piece of work in 12 days and B can complete the same work in 18 days. In how many days can they complete the work working together?",
        "concept": "LCM Method: Total Work = LCM of individual times. Efficiency = Work / Time.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "7.2 days (or 7 1/5 days)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9.0 days",
          "7.2 days (or 7 1/5 days)",
          "5.8 days",
          "9.2 days"
        ]
      },
      {
        "qNum": 122,
        "title": "Three Workers Joint Work",
        "problem": "A, B, and C can complete a task in 10, 15, and 30 days respectively. In how many days can they complete the task working together?",
        "concept": "Total Work $= \\text{LCM}(10, 15, 30) = 30$ units.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "6 days",
          "4 days",
          "5 days",
          "7 days"
        ]
      },
      {
        "qNum": 123,
        "title": "Worker Leaves Before Completion",
        "problem": "A and B can complete a work in 14 days and 21 days respectively. They begin together, but A leaves 3 days before the completion of the work. What is the total time taken to complete the work?",
        "concept": "Concept: If a person leaves $t$ days BEFORE completion, add $t$ days of his hypothetical work to the total work, and let both work till the end.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10.2 days (or 10 1/5 days)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "12.8 days",
          "8.2 days",
          "12.2 days",
          "10.2 days (or 10 1/5 days)"
        ]
      },
      {
        "qNum": 124,
        "title": "Worker Leaves After Start",
        "problem": "A and B can complete a work in 20 days and 30 days respectively. They work together for 5 days, after which A leaves. In how many more days will B finish the remaining work?",
        "concept": "Track work done in first 5 days and allocate remainder to B.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "17.5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "17.5 days",
          "21.9 days",
          "14.0 days",
          "19.5 days"
        ]
      },
      {
        "qNum": 125,
        "title": "Alternating Days Work (Two Workers)",
        "problem": "A and B can complete a work in 12 days and 16 days respectively. They work on alternate days starting with A. In how many days will the work be completed?",
        "concept": "Find the work done in a 2-day cycle.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "13 2/3 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 126,
        "title": "Alternating Days Work (Three Workers)",
        "problem": "A, B, and C can complete a task in 10, 20, and 30 days respectively. If they work on alternate days in the order A, then B, then C, in how many days will the task be completed?",
        "concept": "Cycle length is 3 days.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "15 5/6 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "18 5/6 days",
          "12 5/6 days",
          "15 5/6 days",
          "23 5/6 days"
        ]
      },
      {
        "qNum": 127,
        "title": "Efficiency Ratio and Days Difference",
        "problem": "A is 40% more efficient than B. If B takes 7 days more than A to complete a work alone, in how many days can A complete the work alone?",
        "concept": "Efficiency is inversely proportional to time: $\\frac{E_A}{E_B} = \\frac{T_B}{T_A}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "17.5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "21.9 days",
          "14.0 days",
          "19.5 days",
          "17.5 days"
        ]
      },
      {
        "qNum": 128,
        "title": "Man-Day-Hours (MDH) Formula Application",
        "problem": "If 15 men working 8 hours a day can complete a project in 21 days, how many men working 6 hours a day can complete the same project in 20 days?",
        "concept": "MDH Rule: $\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "21 men",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "21 men",
          "25 men",
          "17 men",
          "32 men"
        ]
      },
      {
        "qNum": 129,
        "title": "MDH with Varying Work Dimensions",
        "problem": "If 12 men can dig a trench 100 meters long, 4 meters wide, and 2 meters deep in 10 days, how many men are required to dig a trench 150 meters long, 3 meters wide, and 3 meters deep in 15 days?",
        "concept": "Work is proportional to volume: $W = L \\times W \\times D$. Formula: $\\frac{M_1 D_1}{W_1} = \\frac{M_2 D_2}{W_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "13.5 men (or 14 men)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "14.85 men (or 14 men)",
          "13.5 men (or 14 men)",
          "12.15 men (or 14 men)",
          "15.5 men (or 14 men)"
        ]
      },
      {
        "qNum": 130,
        "title": "Contractor Problem with Additional Men Needed",
        "problem": "A contractor undertakes to build a road in 50 days and employs 40 men. After 30 days, he finds that only 2/5 of the road is completed. How many additional men must he employ to finish the road on schedule?",
        "concept": "Formula: $\\frac{M_1 D_1}{W_1} = \\frac{M_2 D_2}{W_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "50 additional men",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 131,
        "title": "Men, Women, and Children Equivalence Model",
        "problem": "1 man, 2 women, or 3 boys can complete a task in 44 days. In how many days can 1 man, 1 woman, and 1 boy working together complete the same task?",
        "concept": "Equate efficiencies: $1M = 2W = 3B$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "24 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "30 days",
          "19 days",
          "26 days",
          "24 days"
        ]
      },
      {
        "qNum": 132,
        "title": "Men and Women Mixed Team Joint Equations",
        "problem": "2 men and 3 women can do a piece of work in 10 days, while 3 men and 2 women can do the same work in 8 days. In how many days can 2 men and 1 woman do the same work?",
        "concept": "Total Work $= (2M + 3W) \\times 10 = (3M + 2W) \\times 8$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12.5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "12.5 days",
          "15.6 days",
          "10.0 days",
          "14.5 days"
        ]
      },
      {
        "qNum": 133,
        "title": "Negative Work (Builder and Destroyer)",
        "problem": "A can build a wall in 15 days, while B can demolish it completely in 20 days. If they work on alternate days starting with A, in how many days will the wall be completed?",
        "concept": "Work done in a 2-day cycle is positive, but when approaching the finish line, A builds the wall and work finishes BEFORE B destroys!",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "113 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "141 days",
          "113 days",
          "90 days",
          "115 days"
        ]
      },
      {
        "qNum": 134,
        "title": "Wages Divided by Work Done",
        "problem": "A and B can do a job in 6 days and 8 days respectively. With the help of C, they complete the work in 3 days. If the total payment for the work is ₹3200, find C's share of the wages.",
        "concept": "Wages are distributed in proportion to the work done by each individual.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹400",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹320",
          "₹480",
          "₹400",
          "₹600"
        ]
      },
      {
        "qNum": 135,
        "title": "Square Root Shortcut for Relative Work Times",
        "problem": "A takes 9 days more than $(A + B)$ working together to finish a work, and B takes 16 days more than $(A + B)$ working together to finish the same work. How many days would $(A + B)$ take working together?",
        "concept": "Rodha Square Root Formula: If A takes $x$ days more and B takes $y$ days more than $(A + B)$, then $T_{A+B} = \\sqrt{xy}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 136,
        "title": "Group Work with Daily Departure of Workers",
        "problem": "A group of 30 men can complete a work in 20 days. All 30 start the work together, but 1 man leaves at the end of each day starting from the 1st day. In how many days will the work be completed?",
        "concept": "Total Work $= 30 \\times 20 = 600$ man-days. Sum of arithmetic progression of daily workers.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "25 days",
          "31 days",
          "20 days",
          "27 days"
        ]
      },
      {
        "qNum": 137,
        "title": "Food Garrison Model with Departure",
        "problem": "A fort had provisions of food for 300 soldiers for 45 days. After 15 days, 60 soldiers left the fort. How long will the remaining food last for the remaining soldiers?",
        "concept": "Food consumed in first 15 days leaves 30 days of food for 300 soldiers.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "37.5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "46.9 days",
          "37.5 days",
          "30.0 days",
          "39.5 days"
        ]
      },
      {
        "qNum": 138,
        "title": "Food Garrison Model with Arrival",
        "problem": "A garrison of 1200 men had provisions for 60 days. After 15 days, a reinforcement of 300 men arrived. For how many more days will the food last?",
        "concept": "Remaining food is allocated to increased headcount.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "36 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "45 days",
          "29 days",
          "36 days",
          "38 days"
        ]
      },
      {
        "qNum": 139,
        "title": "Doubling Daily Efficiency Progression",
        "problem": "A worker completes a work in 15 days working at his normal efficiency. If he doubles his efficiency every 3 days, in how many days will he complete the work?",
        "concept": "Track work day by day or across blocks of 3 days.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "7.5 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9.4 days",
          "6.0 days",
          "9.5 days",
          "7.5 days"
        ]
      },
      {
        "qNum": 140,
        "title": "Piece Rate Wages with Penalties",
        "problem": "A worker is paid ₹150 for each day he works and is fined ₹30 for each day he is absent. In a month of 30 days, he receives ₹3420. For how many days was he absent?",
        "concept": "Alligation or Assumed Presence method.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6 days",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Time & Work, Pipes & Cisterns (Zero to Zenith)",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Time+and+Work+Pipes+and+Cisterns+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "LCM Work Units, Negative Cistern Leakage & Alternate-Day Cyclic Efficiencies",
      "duration": "Complete Playlist • 9 Parts"
    }
  },
  {
    "id": "qa_perc",
    "title": "Percentages & Product Constancy",
    "domain": "Arithmetic",
    "tier": "Tier S",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. The Multiplying Factor (MF) & First Principles</h4>\n<div class='theory-block'>In CAT Quantitative Aptitude, never set up equations using $\\frac{x}{100} \\cdot P + P$. Every percentage adjustment must be viewed as an operator—the **Multiplying Factor ($M$)**.\n\n### 1.1 First-Principle Derivation of the Multiplying Factor\nLet a base quantity $Q$ undergo a percentage change of $\\pm x\\%$:\n$$Q_{\\text{new}} = Q \\pm \\left(\\frac{x}{100} \\cdot Q\\right) = Q \\left(1 \\pm \\frac{x}{100}\\right)$$\nDefining the **Multiplying Factor ($M$)**:\n$$\\mathbf{M = 1 \\pm \\frac{x}{100}}$$\n$$\\mathbf{Q_{\\text{new}} = Q \\times M}$$\n\n### 1.2 Fractional Multiplier Equivalence\nConverting decimal percentages into fractions speeds up calculation by $4\\times$:\n\n| Percentage Change ($\\% \\Delta$) | Fractional Shift ($\\Delta$) | Multiplying Factor ($M$) | Algebraic Form |\n| :---: | :---: | :---: | :---: |\n| $+10\\%$ | $+\\frac{1}{10}$ | $1.10$ | $\\times \\frac{11}{10}$ |\n| $+12.5\\%$ | $+\\frac{1}{8}$ | $1.125$ | $\\times \\frac{9}{8}$ |\n| $+16.66\\%$ | $+\\frac{1}{6}$ | $1.166\\dots$ | $\\times \\frac{7}{6}$ |\n| $+20\\%$ | $+\\frac{1}{5}$ | $1.20$ | $\\times \\frac{6}{5}$ |\n| $+25\\%$ | $+\\frac{1}{4}$ | $1.25$ | $\\times \\frac{5}{4}$ |\n| $+33.33\\%$ | $+\\frac{1}{3}$ | $1.333\\dots$ | $\\times \\frac{4}{3}$ |\n| $-10\\%$ | $-\\frac{1}{10}$ | $0.90$ | $\\times \\frac{9}{10}$ |\n| $-12.5\\%$ | $-\\frac{1}{8}$ | $0.875$ | $\\times \\frac{7}{8}$ |\n| $-14.28\\%$ | $-\\frac{1}{7}$ | $0.857\\dots$ | $\\times \\frac{6}{7}$ |</div>\n<h4>2. Successive Percentage Changes: Mathematical Derivations</h4>\n<div class='theory-block'>### 2.1 Two Successive Changes ($a\\%$ followed by $b\\%$)\nLet an initial value $V_0$ change by $a\\%$ to $V_1$, and then $V_1$ change by $b\\%$ to $V_2$:\n$$V_1 = V_0 \\left(1 + \\frac{a}{100}\\right)$$\n$$V_2 = V_1 \\left(1 + \\frac{b}{100}\\right) = V_0 \\left(1 + \\frac{a}{100}\\right)\\left(1 + \\frac{b}{100}\\right)$$\nExpanding the product:\n$$V_2 = V_0 \\left[1 + \\frac{a}{100} + \\frac{b}{100} + \\frac{ab}{10000}\\right] = V_0 \\left[1 + \\frac{a + b + \\frac{ab}{100}}{100}\\right]$$\nComparing this with $V_2 = V_0 \\left(1 + \\frac{\\text{Net } \\%}{100}\\right)$:\n\n$$\\mathbf{\\text{Net Effective } \\% \\Delta = \\left(a + b + \\frac{ab}{100}\\right)\\%}$$\n*(Rule of Signs: Enter increases as positive numbers, decreases as negative numbers).*\n\n#### The Equal Rise and Fall Phenomenon:\nIf a quantity increases by $x\\%$ and then decreases by $x\\%$:\n$$\\text{Net } \\% = x - x + \\frac{x(-x)}{100} = \\mathbf{-\\frac{x^2}{100}\\%}$$\nA rise of $x\\%$ followed by a fall of $x\\%$ **always results in a net decrease** of $\\frac{x^2}{100}\\%$.\n\n---\n\n### 2.2 Multi-Step Successive Changes via Chained Multipliers\nFor $k$ sequential changes, never use the formula repeatedly. Chain the fractional multipliers directly:\n$$\\mathbf{V_{\\text{final}} = V_0 \\times M_1 \\times M_2 \\times \\dots \\times M_k}$$\n* *Example:* A stock rises by $25\\%$ ($+\\frac{1}{4}$), drops by $20\\%$ ($-\\frac{1}{5}$), and rises by $16.66\\%$ ($+\\frac{1}{6}$):\n  $$V_{\\text{final}} = V_0 \\times \\left(\\frac{5}{4}\\right) \\times \\left(\\frac{4}{5}\\right) \\times \\left(\\frac{7}{6}\\right) = V_0 \\times \\frac{7}{6} \\implies \\mathbf{+16.66\\% \\text{ net increase}}.$$</div>\n<h4>3. Product Constancy Ratio ($A \\times B = C$): First Principles</h4>\n<div class='theory-block'>A massive variety of CAT arithmetic models are governed by the equation $A \\times B = C$ where $C$ is invariant:\n* $\\text{Price} \\times \\text{Consumption} = \\text{Expenditure}$\n* $\\text{Speed} \\times \\text{Time} = \\text{Distance}$\n* $\\text{Efficiency} \\times \\text{Time} = \\text{Total Work}$\n* $\\text{Length} \\times \\text{Breadth} = \\text{Area of Rectangle}$\n\n### 3.1 First-Principle Derivation of the Reciprocal Shift\nLet $A_1 \\times B_1 = C$.  \nSuppose $A$ increases by a fraction $+\\frac{a}{b}$:\n$$A_2 = A_1 \\left(1 + \\frac{a}{b}\\right) = A_1 \\left(\\frac{a + b}{b}\\right)$$\nFor the product to remain constant ($A_2 \\times B_2 = C = A_1 \\times B_1$):\n$$\\left[A_1 \\left(\\frac{a + b}{b}\\right)\\right] \\times B_2 = A_1 \\times B_1 \\implies B_2 = B_1 \\times \\left(\\frac{b}{a + b}\\right)$$\nExpressing the change in $B$:\n$$\\Delta B = B_2 - B_1 = B_1 \\left(\\frac{b}{a + b} - 1\\right) = B_1 \\left(\\frac{b - (a + b)}{a + b}\\right) = -B_1 \\left(\\frac{a}{a + b}\\right)$$\n\n### 3.2 The Rodha Golden Shift Rule:\n$$\\mathbf{\\text{If } A \\text{ increases by } +\\frac{a}{b} \\implies B \\text{ MUST decrease by } -\\frac{a}{a + b}}$$\n$$\\mathbf{\\text{If } A \\text{ decreases by } -\\frac{a}{b} \\implies B \\text{ MUST increase by } +\\frac{a}{b - a}}$$\n\n#### Ready Reference Master Pairs:\n| If Factor A Changes By: | Factor B Must Change By: |\n| :---: | :---: |\n| $+\\frac{1}{2} \\; (+50\\%)$ | $-\\frac{1}{3} \\; (-33.33\\%)$ |</div>\n<h4>4. Income, Expenditure & Savings Mechanics</h4>\n<div class='theory-block'>Every personal finance problem follows the identity:\n$$\\mathbf{\\text{Income} = \\text{Expenditure} + \\text{Savings}}$$\n\n### 4.1 Fractional Deviation Form\nIf Income changes by $i\\%$, Expenditure changes by $e\\%$, and Savings changes by $s\\%$:\n$$I_0 \\cdot \\frac{i}{100} = E_0 \\cdot \\frac{e}{100} + S_0 \\cdot \\frac{s}{100}$$\n$$\\mathbf{I_0 \\cdot i = E_0 \\cdot e + S_0 \\cdot s}$$\nThis is mathematically a **Weighted Average (Alligation)** between Expenditure change and Savings change!\n\n---</div>",
    "formulas": [
      {
        "formula": "Q_{\\text{new}} = Q \\pm \\left(\\frac{x}{100} \\cdot Q\\right) = Q \\left(1 \\pm \\frac{x}{100}\\right)"
      },
      {
        "formula": "\\mathbf{M = 1 \\pm \\frac{x}{100}}"
      },
      {
        "formula": "\\mathbf{Q_{\\text{new}} = Q \\times M}"
      },
      {
        "formula": "V_1 = V_0 \\left(1 + \\frac{a}{100}\\right)"
      },
      {
        "formula": "V_2 = V_1 \\left(1 + \\frac{b}{100}\\right) = V_0 \\left(1 + \\frac{a}{100}\\right)\\left(1 + \\frac{b}{100}\\right)"
      },
      {
        "formula": "V_2 = V_0 \\left[1 + \\frac{a}{100} + \\frac{b}{100} + \\frac{ab}{10000}\\right] = V_0 \\left[1 + \\frac{a + b + \\frac{ab}{100}}{100}\\right]"
      }
    ],
    "questions": [
      {
        "qNum": 1,
        "title": "Product Constancy: Price Increase & Consumption Reduction",
        "problem": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that the total expenditure remains unchanged?",
        "concept": "Product Constancy Rule: If $A \\times B = C$ is constant, an increase in $A$ by $\\frac{x}{y}$ requires a decrease in $B$ by $\\frac{x}{x + y}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "20%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "25%",
          "20%",
          "16.67%",
          "10%"
        ]
      },
      {
        "qNum": 2,
        "title": "Product Constancy: Decreased Speed & Increased Time",
        "problem": "A motorist reduces his speed by 16.66%. By what percentage does his travel time increase for the same journey?",
        "concept": "If speed decreases by $\\frac{x}{y}$, time increases by $\\frac{x}{y - x}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "20%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "25%",
          "16.67%",
          "20%",
          "10%"
        ]
      },
      {
        "qNum": 3,
        "title": "Budget Expenditure Constrained Consumption Change",
        "problem": "The price of petrol rises by 20%. A car owner decides to increase his monthly petrol expenditure by only 8%. By what percentage must he reduce his monthly petrol consumption?",
        "concept": "Expenditure ratio: $E = P \\times C \\implies \\frac{E'}{E} = \\frac{P'}{P} \\times \\frac{C'}{C}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "15%",
          "5%",
          "20%",
          "10%"
        ]
      },
      {
        "qNum": 4,
        "title": "Successive Percentage Changes Formula",
        "problem": "The length of a rectangle is increased by 30% and its breadth is decreased by 20%. What is the net percentage change in its area?",
        "concept": "Successive percentage change formula: $\\text{Net} = a + b + \\frac{ab}{100}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "4% increase",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4% increase",
          "9%",
          "14%",
          "8%"
        ]
      },
      {
        "qNum": 5,
        "title": "Three Successive Percentage Changes",
        "problem": "The population of a town increased by 10% in the first year, decreased by 20% in the second year, and increased by 30% in the third year. What is the overall percentage change over 3 years?",
        "concept": "Multiplying factor method: $\\text{MF}_{net} = (1 + a)(1 + b)(1 + c)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "14.4% increase",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 6,
        "title": "Quantity Purchased under Fixed Budget",
        "problem": "A reduction of 20% in the price of apples enables a customer to buy 2.5 kg more apples for ₹300. Find the original price per kg and the reduced price per kg.",
        "concept": "Expenditure is constant at ₹300. Price ratio is inverse of quantity ratio.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Original = ₹30/kg, Reduced = ₹24/kg",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "36 Original = ₹/kg, Reduced = ₹24/kg",
          "24 Original = ₹/kg, Reduced = ₹24/kg",
          "Original = ₹30/kg, Reduced = ₹24/kg",
          "45 Original = ₹/kg, Reduced = ₹24/kg"
        ]
      },
      {
        "qNum": 7,
        "title": "Salary Tax & Net Income Percentage Model",
        "problem": "A man's annual income increases by ₹2,00,000, but the tax on his income is reduced from 20% to 16%. If he pays the same amount of tax as before, what is his increased income?",
        "concept": "Tax paid = Income $\\times$ Tax Rate. If Tax is constant, Income and Tax Rate are inversely proportional.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹10,00,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹8,00,000",
          "₹12,00,000",
          "₹15,00,000",
          "₹10,00,000"
        ]
      },
      {
        "qNum": 8,
        "title": "Passing Marks and Percentage Constraints",
        "problem": "In an examination, candidate A scores 32% marks and fails by 28 marks, while candidate B scores 48% marks and gets 36 marks more than the minimum passing marks. Find the maximum marks and the passing percentage.",
        "concept": "Difference in percentage corresponds to difference in actual marks.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Max Marks = 400, Passing Percentage = 39%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "Max Marks = 400, Passing Percentage = 39%",
          "480 Max Marks = , Passing Percentage = 39%",
          "320 Max Marks = , Passing Percentage = 39%",
          "600 Max Marks = , Passing Percentage = 39%"
        ]
      },
      {
        "qNum": 9,
        "title": "Two-Set Venn Diagram Percentage Overlap",
        "problem": "In a college, 70% of students play football, 60% play cricket, and 10% play neither sport. If 160 students play both sports, find the total number of students in the college.",
        "concept": "Principle of Inclusion-Exclusion: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "400 students",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "480 students",
          "400 students",
          "320 students",
          "600 students"
        ]
      },
      {
        "qNum": 10,
        "title": "Three-Set Venn Diagram Percentage Model",
        "problem": "In a survey of 1000 consumers, 65% like product A, 55% like product B, and 45% like product C. 30% like both A and B, 25% like both B and C, and 20% like both A and C. If 10% like all three products, find the number of consumers who like NONE of the three products.",
        "concept": "Three-set Inclusion-Exclusion: $n(A \\cup B \\cup C) = \\sum n(A) - \\sum n(A \\cap B) + n(A \\cap B \\cap C)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "0 consumers",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 11,
        "title": "Successive Percentage Depreciation",
        "problem": "A machine depreciates at the rate of 10% per annum for the first 2 years and 20% per annum for the next year. If the original price was ₹1,00,000, find its value at the end of 3 years.",
        "concept": "Depreciation multiplying factor: $V_3 = V_0 \\times (1 - r_1) \\times (1 - r_2) \\times (1 - r_3)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹64,800",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹51,840",
          "₹77,760",
          "₹97,200",
          "₹64,800"
        ]
      },
      {
        "qNum": 12,
        "title": "Percentage of a Percentage Multiplier",
        "problem": "In an election between two candidates, 10% of the voters did not cast their votes and 10% of the votes cast were declared invalid. The winning candidate got 54% of the valid votes and won by a majority of 1620 votes. Find the total number of voters enrolled in the voting list.",
        "concept": "Chain of percentage multipliers: Total $\\xrightarrow{\\times 0.90}$ Cast $\\xrightarrow{\\times 0.90}$ Valid $\\xrightarrow{\\times (0.54 - 0.46)}$ Majority.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25,000 voters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "25,000 voters",
          "30 ,000 voters",
          "20 ,000 voters",
          "38 ,000 voters"
        ]
      },
      {
        "qNum": 13,
        "title": "Base Effect: Reverse Percentage Calculation",
        "problem": "After an increment of 15% in salary, A earns ₹46,000 per month. What was his original salary?",
        "concept": "Original Salary $= \\frac{\\text{New Salary}}{1 + r} = \\frac{\\text{New Salary}}{1.15}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹40,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹32,000",
          "₹40,000",
          "₹48,000",
          "₹60,000"
        ]
      },
      {
        "qNum": 14,
        "title": "Commission Percentage on Incremental Slabs",
        "problem": "A salesman is allowed 9% commission on total sales plus a bonus of 1% on sales over ₹20,000. If his total earnings are ₹6800, find his total sales.",
        "concept": "Model earnings across the threshold slab: Earnings $= 9\\% \\text{ of } S + 1\\% \\text{ of } (S - 20,000)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹70,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹56,000",
          "₹84,000",
          "₹70,000",
          "₹1,05,000"
        ]
      },
      {
        "qNum": 15,
        "title": "Percentage Weight Change in Fresh vs Dry Fruits",
        "problem": "Fresh grapes contain 80% water by weight, while dry grapes (raisins) contain 20% water by weight. How many kg of dry grapes can be obtained from 100 kg of fresh grapes?",
        "concept": "Pulp (solid content) remains CONSTANT: $\\text{Pulp}_{fresh} = \\text{Pulp}_{dry}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25 kg",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 16,
        "title": "Volume Change in 3D Shapes via Percentage Multipliers",
        "problem": "If the radius of a cylinder is increased by 10% and its height is decreased by 20%, what is the percentage change in its volume?",
        "concept": "Volume of cylinder: $V = \\pi r^2 h$. Multiplying factor $\\text{MF}_V = (\\text{MF}_r)^2 \\times \\text{MF}_h$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "3.2% decrease",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3.2% decrease",
          "8.2%",
          "13.2%",
          "6.4%"
        ]
      },
      {
        "qNum": 17,
        "title": "Venn Diagram Maximum/Minimum Overlap",
        "problem": "In an exam, 85% passed in English, 80% passed in Mathematics, and 75% passed in Science. What is the minimum percentage of candidates who passed in ALL three subjects?",
        "concept": "Formula for minimum overlap of $k$ sets in universe of 100%: $\\text{Min Overlap} = \\left( \\sum_{i=1}^k P_i \\right) - 100(k - 1)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "40%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "45%",
          "40%",
          "35%",
          "80%"
        ]
      },
      {
        "qNum": 18,
        "title": "Price-Quantity Grid with Simultaneous Variations",
        "problem": "The price of sugar drops by 10%. As a result, a family increases its consumption by 10%. What is the percentage change in the family's expenditure on sugar?",
        "concept": "Expenditure $= \\text{Price} \\times \\text{Consumption}$. Successive changes: $-10\\%$ and $+10\\%$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1% decrease",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "6%",
          "11%",
          "1% decrease",
          "2%"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Percentages & Product Constancy A×B=C",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Percentages+Product+Constancy+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Fraction-Percentage Equivalents, Multiplier Scaling & Constant Product Shifts",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_alligation",
    "title": "Averages, Mixtures & Alligations",
    "domain": "Arithmetic",
    "tier": "Tier S",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. The Alligation Cross Rule & First-Principle Derivation</h4>\n<div class='theory-block'>Alligation is the graphical implementation of the **Weighted Average equation**. It determines the ratio in which two distinct ingredients of prices/concentrations $A_1$ and $A_2$ must be blended to produce a mixture of average concentration $A_m$.\n\n### 1.1 First-Principle Derivation (The Lever / Fulcrum Principle)\nLet ingredient 1 have concentration $A_1$ and quantity $n_1$.  \nLet ingredient 2 have concentration $A_2$ and quantity $n_2$ (assume without loss of generality that $A_1 < A_m < A_2$).  \nThe weighted average concentration of the mixture is:\n$$A_m = \\frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$\nMultiply both sides by $(n_1 + n_2)$:\n$$A_m(n_1 + n_2) = n_1 A_1 + n_2 A_2$$\n$$n_1 A_m + n_2 A_m = n_1 A_1 + n_2 A_2$$\nRearrange terms by grouping $n_1$ on the left and $n_2$ on the right:\n$$n_1(A_m - A_1) = n_2(A_2 - A_m)$$\nDividing both sides to isolate the quantity ratio $\\frac{n_1}{n_2}$:\n\n$$\\mathbf{\\frac{n_1}{n_2} = \\frac{A_2 - A_m}{A_m - A_1}}$$\n\n### 1.2 The Alligation Cross Diagram\n$$\\begin{array}{ccc}\n\\text{Ingredient 1 } (A_1) & & \\text{Ingredient 2 } (A_2) \\\\\n& \\mathbf{A_m} & \\\\\n(A_2 - A_m) & & (A_m - A_1) \\\\\n\\downarrow & & \\downarrow \\\\\n\\mathbf{n_1} & \\mathbf{:} & \\mathbf{n_2}</div>\n<h4>2. Deciding the Denominator Base in Alligation</h4>\n<div class='theory-block'>A critical error students make in CAT is misidentifying what ratio the bottom line of the Alligation cross represents.\n\n> [!IMPORTANT] **The Universal Denominator Rule:**  \n> The Alligation ratio at the bottom **ALWAYS represents the units of the DENOMINATOR** of whatever rate or percentage is placed at the top!\n\n| Value Placed at Top ($A_1, A_2$) | Mathematical Units | Resulting Ratio at Bottom ($n_1 : n_2$) |\n| :--- | :--- | :--- |\n| **Speed** ($\\text{km/hr}$) | $\\frac{\\text{Distance}}{\\mathbf{\\text{Time}}}$ | **Ratio of Time Taken** |\n| **Profit% / Loss%** | $\\frac{\\text{Profit}}{\\mathbf{\\text{Cost Price}}}$ | **Ratio of Cost Prices (CP)** |\n| **Discount%** | $\\frac{\\text{Discount}}{\\mathbf{\\text{Marked Price}}}$ | **Ratio of Marked Prices (MP)** |\n| **Solution Concentration** ($40\\%$ acid) | $\\frac{\\text{Pure Acid}}{\\mathbf{\\text{Total Solution}}}$ | **Ratio of Total Solution Volumes** |\n| **Average Marks** | $\\frac{\\text{Total Marks}}{\\mathbf{\\text{Number of Students}}}$ | **Ratio of Number of Students** |\n\n---</div>\n<h4>3. Repeated Dilution / Replacement Mechanics</h4>\n<div class='theory-block'>A vessel initially contains a volume $V$ of pure liquid (e.g. pure milk or alcohol). A volume $x$ is drawn out and replaced with water. This operation is repeated $n$ times.\n\n### 3.1 First-Principle Derivation of the Master Dilution Formula\n* **After 1st Operation:**  \n  Amount of liquid removed $= x$.  \n  Liquid remaining $= V - x = V\\left(1 - \\frac{x}{V}\\right)$.  \n  Concentration of pure liquid $= \\left(1 - \\frac{x}{V}\\right)$.\n* **After 2nd Operation:**  \n  When volume $x$ of mixture is drawn out, the quantity of pure liquid removed is proportional to its concentration:\n  $$\\text{Liquid removed} = x \\times \\left(1 - \\frac{x}{V}\\right)$$\n  Liquid remaining in the container:\n  $$\\text{Remaining} = V\\left(1 - \\frac{x}{V}\\right) - x\\left(1 - \\frac{x}{V}\\right) = (V - x)\\left(1 - \\frac{x}{V}\\right) = \\mathbf{V\\left(1 - \\frac{x}{V}\\right)^2}$$\n* **By Mathematical Induction after $n$ iterations:**\n\n$$\\mathbf{\\text{Final Quantity of Original Liquid } (F) = \\text{Initial Quantity } (I) \\times \\left(1 - \\frac{x}{V}\\right)^n}$$\n\n$$\\mathbf{\\frac{\\text{Final Volume of Pure Liquid}}{\\text{Total Capacity of Container}} = \\left(1 - \\frac{x}{V}\\right)^n}$$\n\n### 3.2 Non-Uniform Replacements\nIf varying volumes $x_1, x_2, \\dots, x_n$ are successively removed:\n$$\\mathbf{F = I \\left(1 - \\frac{x_1}{V}\\right)\\left(1 - \\frac{x_2}{V}\\right)\\dots\\left(1 - \\frac{x_n}{V}\\right)}$$\n\n---</div>\n<h4>4. The Invariant Mass Principle (Drying Fruits & Dehydration)</h4>\n<div class='theory-block'>In evaporation or dehydration problems (e.g. fresh grapes turning into dry raisins):\n* Water evaporates into vapor.\n* **The solid mass (pulp / dry matter) remains STRICTLY CONSTANT throughout the process!**\n\n$$\\mathbf{\\text{Pulp in Fresh Fruit} = \\text{Pulp in Dry Fruit}}$$\n$$\\mathbf{W_{\\text{fresh}} \\times (100 - \\text{Water}_{\\text{fresh}}\\%) = W_{\\text{dry}} \\times (100 - \\text{Water}_{\\text{dry}}\\%)}$$\n\n* **Example:** Fresh fruit contains $80\\%$ water; dry fruit contains $20\\%$ water. How much dry fruit can be obtained from $100\\text{ kg}$ of fresh fruit?\n  $$\\text{Pulp}_{\\text{fresh}} = 100\\text{ kg} \\times (1 - 0.80) = 20\\text{ kg}$$\n  In dry fruit, this $20\\text{ kg}$ forms $(1 - 0.20) = 80\\%$ of the total dry weight:\n  $$0.80 \\times W_{\\text{dry}} = 20\\text{ kg} \\implies W_{\\text{dry}} = \\frac{20}{0.80} = \\mathbf{25\\text{ kg}}.$$\n\n---</div>",
    "formulas": [
      {
        "formula": "A_m = \\frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}"
      },
      {
        "formula": "A_m(n_1 + n_2) = n_1 A_1 + n_2 A_2"
      },
      {
        "formula": "n_1 A_m + n_2 A_m = n_1 A_1 + n_2 A_2"
      },
      {
        "formula": "n_1(A_m - A_1) = n_2(A_2 - A_m)"
      },
      {
        "formula": "\\mathbf{\\frac{n_1}{n_2} = \\frac{A_2 - A_m}{A_m - A_1}}"
      },
      {
        "formula": "\\begin{array}{ccc}\n\\text{Ingredient 1 } (A_1) & & \\text{Ingredient 2 } (A_2) \\\\\n& \\mathbf{A_m} & \\\\\n(A_2 - A_m) & & (A_m - A_1) \\\\\n\\downarrow & & \\downarrow \\\\\n\\mathbf{n_1} & \\mathbf{:} & \\mathbf{n_2}\n\\end{array}"
      }
    ],
    "questions": [
      {
        "qNum": 106,
        "title": "Assumed Mean Deviation Method",
        "problem": "Find the average of 87, 92, 78, 95, 83, 89, and 91.",
        "concept": "Deviation Method: $\\text{Average} = A + \\frac{\\sum (x_i - A)}{n}$, where $A$ is an assumed mean.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "87.86 (or 615/7)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "96.65 (or 615/7)",
          "79.07 (or 615/7)",
          "87.86 (or 615/7)",
          "89.86 (or 615/7)"
        ]
      },
      {
        "qNum": 107,
        "title": "Average of Consecutive Odd Integers",
        "problem": "The average of 7 consecutive odd numbers is 31. What is the largest of these numbers?",
        "concept": "For consecutive odd numbers (an AP with odd count $n$), the average is exactly the MIDDLE number.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "37",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "44",
          "30",
          "56",
          "37"
        ]
      },
      {
        "qNum": 108,
        "title": "Single Replacement Model",
        "problem": "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
        "concept": "Replacement formula: $\\text{Weight of New} = \\text{Weight of Replaced} + n \\times \\Delta A$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "85 kg",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "85 kg",
          "102 kg",
          "68 kg",
          "128 kg"
        ]
      },
      {
        "qNum": 109,
        "title": "Addition Model (Teacher Joins Class)",
        "problem": "The average age of 24 students in a class is 12 years. When the teacher's age is included, the average age of the group increases by 1 year. What is the age of the teacher?",
        "concept": "Addition formula: $\\text{New Member Age} = \\text{New Average} + n_{old} \\times \\Delta A$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "37 years",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "33 years",
          "37 years",
          "43 years",
          "56 years"
        ]
      },
      {
        "qNum": 110,
        "title": "Removal Model (Excluding Extremes)",
        "problem": "The average score of a batsman in 40 innings is 50 runs. His highest score exceeds his lowest score by 172 runs. If these two innings are excluded, the average of the remaining 38 innings is 48 runs. Find his highest score.",
        "concept": "Sum of excluded innings = Total score of 40 innings - Total score of 38 innings.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "174 runs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 111,
        "title": "Cricket Batting Average Improvement",
        "problem": "A batsman has a certain average of runs for 11 innings. In the 12th inning, he scores 90 runs and thereby increases his average by 5 runs. Find his new average after the 12th inning.",
        "concept": "Equation: $12 A_{new} = 11 A_{old} + 90$, with $A_{new} = A_{old} + 5$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "35 runs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "42 runs",
          "28 runs",
          "53 runs",
          "35 runs"
        ]
      },
      {
        "qNum": 112,
        "title": "Cricket Bowling Average Improvement",
        "problem": "A bowler whose bowling average is 12.4 runs per wicket takes 5 wickets for 26 runs in his last match, thereby improving his bowling average by 0.4 runs per wicket. Find the total number of wickets taken by him before this match.",
        "concept": "Bowling Average $= \\frac{\\text{Runs Conceded}}{\\text{Wickets Taken}}$. 'Improving' by 0.4 means the average DROPS from 12.4 to 12.0.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "85 wickets",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "85 wickets",
          "102 wickets",
          "68 wickets",
          "128 wickets"
        ]
      },
      {
        "qNum": 113,
        "title": "Alligation Cross Rule for Blending Varieties",
        "problem": "In what ratio must a grocer mix tea at ₹60 per kg and tea at ₹75 per kg so that the mixture is worth ₹65 per kg?",
        "concept": "Alligation Cross Method: $\\frac{Q_1}{Q_2} = \\frac{P_2 - P_m}{P_m - P_1}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2 : 1",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1 : 2",
          "2 : 1",
          "3 : 1",
          "2 : 2"
        ]
      },
      {
        "qNum": 114,
        "title": "Alligation with Profit on Selling Price",
        "problem": "In what ratio should a merchant mix wheat at ₹28/kg with wheat at ₹36/kg so that by selling the mixture at ₹38.50/kg, he makes a profit of 10%?",
        "concept": "Must calculate the COST PRICE of the mixture first: $CP_m = \\frac{SP_m}{1 + P\\%}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1 : 7",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "7 : 1",
          "2 : 7",
          "1 : 7",
          "1 : 8"
        ]
      },
      {
        "qNum": 115,
        "title": "Successive Dilution (Removal & Replacement Formula)",
        "problem": "A container contains 80 liters of pure milk. From this, 8 liters of milk is taken out and replaced with water. This process is repeated 2 more times (total 3 operations). How much pure milk is left in the container?",
        "concept": "Successive Dilution Formula: $Q_f = Q_i \\left(1 - \\frac{x}{C}\\right)^n$, where $C$ is total capacity, $x$ is amount replaced per turn, and $n$ is number of operations.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "58.32 liters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 116,
        "title": "Finding Initial Capacity from Dilution Ratio",
        "problem": "A cask was full of wine. 10 liters of wine was drawn out and replaced with water. This operation was performed once more. The ratio of the quantity of wine now left in the cask to that of water is $16 : 9$. How much wine did the cask hold originally?",
        "concept": "Formula: $\\frac{\\text{Wine Remaining}}{\\text{Total Mixture}} = \\left(1 - \\frac{x}{C}\\right)^n$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "50 liters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "50 liters",
          "60 liters",
          "40 liters",
          "75 liters"
        ]
      },
      {
        "qNum": 117,
        "title": "Alligation with Zero-Cost Adulterant",
        "problem": "In what ratio must water be mixed with milk costing ₹40 per liter so that the mixture can be sold at cost price (₹40/liter) with a profit of 25%?",
        "concept": "Profit arises entirely from the free water added: $\\frac{\\text{Water}}{\\text{Milk}} = \\text{Profit Fraction}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1 : 4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4 : 1",
          "1 : 4",
          "2 : 4",
          "1 : 5"
        ]
      },
      {
        "qNum": 118,
        "title": "Mixture Replacement with Non-Pure Inflow",
        "problem": "A jar contains a mixture of two liquids A and B in the ratio $4 : 1$. When 10 liters of the mixture is taken out and 10 liters of liquid B is poured in, the ratio becomes $2 : 3$. How many liters of liquid A was contained in the jar initially?",
        "concept": "Liquid A is removed proportionally but NEVER added back.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "16 liters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "19 liters",
          "13 liters",
          "16 liters",
          "24 liters"
        ]
      },
      {
        "qNum": 119,
        "title": "Three-Component Weighted Average",
        "problem": "A class has three sections with 20, 30, and 50 students respectively. The average marks of these sections are 80, 70, and 60 respectively. Find the overall average marks of the entire class.",
        "concept": "Weighted average formula: $\\bar{X} = \\frac{\\sum w_i x_i}{\\sum w_i}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "67",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "80",
          "54",
          "101",
          "67"
        ]
      },
      {
        "qNum": 120,
        "title": "Successive Dilution with Unequal Volumes",
        "problem": "A 60-liter container is full of acid. 12 liters are drawn out and replaced with water. Next, 15 liters of the mixture are drawn out and replaced with water. What is the remaining quantity of pure acid in the container?",
        "concept": "Formula: $Q_f = Q_i \\left(1 - \\frac{x_1}{C}\\right) \\left(1 - \\frac{x_2}{C}\\right)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "36 liters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Mixtures, Alligations & Weighted Averages",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Averages+Mixtures+Alligations+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Alligation Cross Rule, Removal & Replacement Multiplier & Weighted Mean Pivot",
      "duration": "Complete Playlist • 7 Parts"
    }
  },
  {
    "id": "qa_cyclicity",
    "title": "Cyclicity, Unit Digits & Legendre's Factorials",
    "domain": "Number System",
    "tier": "Tier S",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.0 Hours",
    "theoryHtml": "<h4>1. Cyclicity of Digits & First-Principle Derivations</h4>\n<div class='theory-block'>When an integer is repeatedly multiplied by itself, its unit digit (the remainder modulo 10) behaves as a periodic finite sequence.\n\n### 1.1 The Unit Digit Periodicity Table\nEvery single decimal digit $\\{0, 1, 2, \\dots, 9\\}$ belongs to one of three cyclicity families:\n\n| Digits | Periodicity (Cyclicity) | Power Progression (Mod 10) | Behavior |\n| :---: | :---: | :--- | :--- |\n| **$0, 1, 5, 6$** | **1** (Stationary) | $0^k \\to 0, \\; 1^k \\to 1, \\; 5^k \\to 5, \\; 6^k \\to 6$ | Invariant for all powers $k \\ge 1$. |\n| **$4, 9$** | **2** (Bimodal) | $4^1 = 4, \\; 4^2 = 6, \\; 4^3 = 4, \\; 4^4 = 6$ <br/> $9^1 = 9, \\; 9^2 = 1, \\; 9^3 = 9, \\; 9^4 = 1$ | $4^{\\text{odd}} \\to 4, \\; 4^{\\text{even}} \\to 6$ <br/> $9^{\\text{odd}} \\to 9, \\; 9^{\\text{even}} \\to 1$ |\n| **$2, 3, 7, 8$** | **4** (Tetramodal) | $2 \\to [2, 4, 8, 6]$ <br/> $3 \\to [3, 9, 7, 1]$ <br/> $7 \\to [7, 9, 3, 1]$ <br/> $8 \\to [8, 4, 2, 6]$ | Full cycle of 4 distinct remainders before repeating. |\n\n### 1.2 Mathematical Derivation: Why is 4 the Universal Period?\n* **First-Principle Proof:**  \n  The unit digit of $N^P$ is simply $N^P \\pmod{10}$.  \n  By Euler's Totient Theorem, for any base coprime to 10 ($\\gcd(a, 10) = 1$, i.e. $1, 3, 7, 9$):\n  $$\\phi(10) = 10 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 4$$\n  Therefore, $a^{\\phi(10)} = a^4 \\equiv 1 \\pmod{10}$.  \n  For even bases ($2, 4, 6, 8$), observe modulo 5: $\\phi(5) = 4$, so $2^4 \\equiv 1 \\pmod 5 \\implies 2^5 \\equiv 2 \\pmod{10}$.  \n  Since the periods of all digits are $1, 2,$ and $4$, the least common multiple of all possible cycle lengths is:\n  $$\\operatorname{LCM}(1, 2, 4) = \\mathbf{4}$$\n  Hence, **$4$ is the universal period** for the unit digit of any natural number.\n\n---</div>\n<h4>2. Power Towers (Exponents of Exponents)</h4>\n<div class='theory-block'>A classic high-difficulty CAT problem involves nested exponents of the form:\n$$E = a^{b^{c^d}}$$\n\n### Protocol for Power Towers:\n1. By convention of mathematics, power towers are evaluated **top-down**: $a^{(b^{(c^d)})}$, NOT $(a^b)^c = a^{bc}$.\n2. Since the unit digit depends on the exponent modulo $4$:\n   $$\\text{We need to find: } P \\pmod 4 = b^{c^d} \\pmod 4$$\n3. Reduce base $b$ modulo 4:\n   * If $b$ is **even** ($b = 2k$): for any power $\\ge 2$, $b^{\\text{power}} \\equiv 0 \\pmod 4$.  \n     Thus, exponent is a multiple of $4 \\implies \\text{Unit digit is } d^4$.\n   * If $b$ is **odd** ($b = 2k + 1$):\n     * If $b \\equiv 1 \\pmod 4 \\implies b^{\\text{power}} \\equiv 1 \\pmod 4 \\implies \\text{Unit digit is } d^1$.\n     * If $b \\equiv 3 \\equiv -1 \\pmod 4 \\implies (-1)^{\\text{power}} \\pmod 4$:\n       * If power $c^d$ is **odd** $\\implies -1 \\equiv 3 \\pmod 4 \\implies \\text{Unit digit is } d^3$.\n       * If power $c^d$ is **even** $\\implies (-1)^{\\text{even}} \\equiv 1 \\pmod 4 \\implies \\text{Unit digit is } d^1$.\n\n---</div>\n<h4>3. Rightmost Non-Zero Digits</h4>\n<div class='theory-block'>Problems like *\"Find the rightmost non-zero digit of $30^{2720}$ or $70^{50}$\"*:\n\n### Algorithm:\n1. Decompose the number to isolate all factors of $10$:\n   $$N = M \\times 10^k = (A \\cdot 2^k \\cdot 5^k) \\dots$$\n2. Cancel out paired $2$'s and $5$'s that form the trailing zeroes:\n   $$\\text{Number} = K \\times 10^m$$\n3. The rightmost non-zero digit is simply:\n   $$\\mathbf{\\text{Unit Digit of } K \\pmod{10}}$$\n\n---</div>\n<h4>4. Last Two Digits: Comprehensive First Principles</h4>\n<div class='theory-block'>The last two digits of a number are mathematically equivalent to the remainder of that number when divided by $100$ ($N \\pmod{100}$).\n\n### 4.1 Odd Bases Ending in 1: The Binomial Derivation\nConsider any number ending in $1$ raised to a power:\n$$(\\dots a1)^{\\dots b}$$\n\n* **First-Principle Derivation via Binomial Expansion:**  \n  Let the base be written as $(10a + 1)$ and exponent as $N$:\n  $$(10a + 1)^N = \\binom{N}{0} 1^N + \\binom{N}{1}(10a)^1 (1)^{N-1} + \\binom{N}{2}(10a)^2 (1)^{N-2} + \\dots$$\n  Modulo 100, notice that:\n  * For all terms $k \\ge 2$, $(10a)^k$ contains $10^2 = 100$, which is identically $0 \\pmod{100}$.\n  * Only the first two terms survive:\n  $$(10a + 1)^N \\equiv 1 + N \\cdot (10a) \\pmod{100}$$\n  $$= 10(a \\cdot N) + 1 \\pmod{100}$$\n* **The Rodha Golden Rule:**\n  $$\\mathbf{\\text{Units Digit} = 1}$$\n  $$\\mathbf{\\text{Tens Digit} = (a \\times \\text{last digit of } N) \\pmod{10}}$$\n\n---\n\n### 4.2 Odd Bases Ending in 3, 7, 9: The Base-Conversion Rule\nTo find the last two digits of numbers ending in $3, 7,$ or $9$, convert them to end in $1$ using fundamental powers:</div>",
    "formulas": [
      {
        "formula": "\\phi(10) = 10 \\left(1 - \\frac{1}{2}\\right)\\left(1 - \\frac{1}{5}\\right) = 4"
      },
      {
        "formula": "\\operatorname{LCM}(1, 2, 4) = \\mathbf{4}"
      },
      {
        "formula": "\\text{Unit Digit} = \\begin{cases} d^1 \\pmod{10} & \\text{if } r = 1 \\\\ d^2 \\pmod{10} & \\text{if } r = 2 \\\\ d^3 \\pmod{10} & \\text{if } r = 3 \\\\ \\mathbf{d^4 \\pmod{10}} & \\mathbf{\\text{if } r = 0 \\quad (\\text{NEVER } d^0!)} \\end{cases}"
      },
      {
        "formula": "E = a^{b^{c^d}}"
      },
      {
        "formula": "\\text{We need to find: } P \\pmod 4 = b^{c^d} \\pmod 4"
      },
      {
        "formula": "N = M \\times 10^k = (A \\cdot 2^k \\cdot 5^k) \\dots"
      }
    ],
    "questions": [
      {
        "qNum": 86,
        "title": "Conversion from Arbitrary Base to Decimal",
        "problem": "Convert the number $(345)_7$ into base 10 (decimal).",
        "concept": "Positional expansion: $(d_2 d_1 d_0)_b = d_2 b^2 + d_1 b^1 + d_0 b^0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "180",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "216",
          "144",
          "180",
          "270"
        ]
      },
      {
        "qNum": 87,
        "title": "Conversion from Decimal to Arbitrary Base",
        "problem": "Convert the decimal number $250$ into base 6.",
        "concept": "Repeated division by base 6 collecting remainders from bottom to top.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "(1054)_6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(1053)_6",
          "(1055)_6",
          "(1104)_6",
          "(1054)_6"
        ]
      },
      {
        "qNum": 88,
        "title": "Addition in Non-Decimal Base",
        "problem": "Perform the addition in base 7: $(456)_7 + (345)_7$.",
        "concept": "Add column-wise; whenever sum $\\ge 7$, carry over $\\lfloor \\text{sum}/7 \\rfloor$ and write $\\text{sum} \\pmod 7$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "(1134)_7",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(1134)_7",
          "(1133)_7",
          "(1135)_7",
          "(1144)_7"
        ]
      },
      {
        "qNum": 89,
        "title": "Multiplication in Non-Decimal Base",
        "problem": "Calculate $(23)_5 \\times (14)_5$ in base 5.",
        "concept": "Convert to decimal, multiply, and convert back, or multiply directly with carries of 5.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "(432)_5",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(431)_5",
          "(432)_5",
          "(433)_5",
          "(442)_5"
        ]
      },
      {
        "qNum": 90,
        "title": "Finding Unknown Base in Equation",
        "problem": "If $(24)_b \\times (32)_b = (1050)_b$, find the base $b$.",
        "concept": "Convert each term to polynomials in $b$ and solve for $b > 5$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "b = 7",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 91,
        "title": "Divisibility Rules in Base $b$",
        "problem": "In a base $b$ positional number system, what is the analog of the divisibility rule for 9 in base 10?",
        "concept": "In any base $b$, a number is divisible by $(b - 1)$ if and only if the sum of its digits in base $b$ is a multiple of $(b - 1)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Sum of digits is divisible by (b - 1)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "Sum of digits is divisible by b",
          "Last digit is divisible by (b - 1)",
          "Alternating sum of digits is divisible by (b + 1)",
          "Sum of digits is divisible by (b - 1)"
        ]
      },
      {
        "qNum": 92,
        "title": "Alternating Divisibility Rule in Base $b$",
        "problem": "In a base $b$ positional system, which divisor has the alternating sum of digits rule?",
        "concept": "In base $b$, $b \\equiv -1 \\pmod{b + 1}$. Therefore, $b^k \\equiv (-1)^k \\pmod{b + 1}$. The alternating sum of digits determines divisibility by $(b + 1)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Divisibility by (b + 1)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "Divisibility by (b + 1)",
          "Divisibility by (b - 1)",
          "Divisibility by b",
          "Divisibility by (b^2 - 1)"
        ]
      },
      {
        "qNum": 93,
        "title": "Fraction to Recurring Decimal in Base $b$",
        "problem": "Convert the fraction $\\frac{1}{3}$ into base 6.",
        "concept": "Multiply fraction by base: $\\frac{1}{3} \\times 6 = 2.0 \\implies (0.2)_6$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "(0.2)_6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "0.22 ()_6",
          "(0.2)_6",
          "0.18 ()_6",
          "2.2 ()_6"
        ]
      },
      {
        "qNum": 94,
        "title": "Recurring Fraction in Base 7",
        "problem": "Convert $(0.\\overline{3})_7$ into an irreducible decimal fraction $\\frac{p}{q}$.",
        "concept": "In base $b$, $0.\\overline{a}_b = \\frac{a}{b - 1}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1/2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2/1",
          "2/2",
          "1/2",
          "1/3"
        ]
      },
      {
        "qNum": 95,
        "title": "Even/Odd Parity in Base $b$",
        "problem": "If a number $(N)_b$ ends with an odd digit in an odd base $b$, can we conclude whether $N$ is even or odd?",
        "concept": "In an odd base $b$, $b$ is odd, so $b^k$ is always odd. Therefore, $N = \\sum d_k b^k \\equiv \\sum d_k \\pmod 2$. In an odd base, the parity of the number is determined by the parity of the SUM of ALL DIGITS, NOT just the last digit!",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "No; in odd base parity depends on the sum of all digits",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 96,
        "title": "Number of Digits in Base $b$",
        "problem": "How many digits does the number $2^{30}$ have when expressed in base 8?",
        "concept": "Base $8 = 2^3$. $2^{30} = (2^3)^{10} = 8^{10} = (10000000000)_8$, which has $10 + 1 = 11$ digits.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "11 digits",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "11 digits",
          "13 digits",
          "9 digits",
          "17 digits"
        ]
      },
      {
        "qNum": 97,
        "title": "Base Conversion of Binary to Hexadecimal",
        "problem": "Convert $(110110101111)_2$ into hexadecimal (base 16).",
        "concept": "Group binary digits into blocks of 4 from right to left: $(1101)(1010)(1111)_2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "(DAF)_16",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(DAE)_16",
          "(DAF)_16",
          "(DB0)_16",
          "(DBF)_16"
        ]
      },
      {
        "qNum": 98,
        "title": "Smallest Base Where Expression is Valid",
        "problem": "What is the smallest possible base $b$ in which the number $(58A)_b$ can exist?",
        "concept": "All digits in base $b$ must be strictly less than $b$. The digits present are $5, 8,$ and $A (= 10)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "11",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "13",
          "9",
          "11",
          "17"
        ]
      },
      {
        "qNum": 99,
        "title": "Perfect Square Condition in Base $b$",
        "problem": "Is $(121)_b$ a perfect square in every base $b \\ge 3$?",
        "concept": "$(121)_b = 1 \\cdot b^2 + 2 \\cdot b + 1 = (b + 1)^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Yes, always (b + 1)^2 for all b >= 3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "No, only for even bases",
          "No, only for prime bases",
          "Yes, always (b - 1)^2",
          "Yes, always (b + 1)^2 for all b >= 3"
        ]
      },
      {
        "qNum": 100,
        "title": "Palindromic Numbers Across Bases",
        "problem": "Find the two-digit number in decimal which is a palindrome in both base 7 and base 9.",
        "concept": "Let decimal number be $N$. Two-digit palindrome in base 7 is $(aa)_7 = 7a + a = 8a$. In base 9: $(bb)_9 = 9b + b = 10b$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "40",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 101,
        "title": "Legendre's Formula for Prime Power in $n!$",
        "problem": "Find the highest power of 3 that divides $100!$.",
        "concept": "Legendre's Formula: $E_p(n!) = \\lfloor n/p \\rfloor + \\lfloor n/p^2 \\rfloor + \\lfloor n/p^3 \\rfloor + \\dots$",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "48",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "58",
          "48",
          "38",
          "72"
        ]
      },
      {
        "qNum": 102,
        "title": "Highest Power of a Composite Number in $n!$",
        "problem": "Find the highest power of 12 that divides $50!$.",
        "concept": "Factor $12 = 2^2 \\times 3^1$. Find power of 2 and power of 3, then power of 12 is $\\min(\\lfloor E_2 / 2 \\rfloor, E_3)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "22",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "26",
          "18",
          "22",
          "33"
        ]
      },
      {
        "qNum": 103,
        "title": "Highest Power of Prime-Power Composite in $n!$",
        "problem": "Find the highest power of 8 that divides $40!$.",
        "concept": "$8 = 2^3$. Find $E_2(40!)$, then divide by 3.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "14",
          "10",
          "18",
          "12"
        ]
      },
      {
        "qNum": 104,
        "title": "Trailing Zeros in Factorial",
        "problem": "Find the number of trailing zeros in $150!$.",
        "concept": "Trailing zeros in $n!$ equals $E_5(n!)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "37",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "37",
          "44",
          "30",
          "56"
        ]
      },
      {
        "qNum": 105,
        "title": "Values of $n$ Producing Specific Trailing Zeros",
        "problem": "How many natural numbers $n$ exist such that $n!$ has exactly 23 trailing zeros?",
        "concept": "Check values around $n = 23 \\times 4 \\approx 92$. For $n = 95$: $E_5(95!) = 19 + 3 = 22$. For $n = 100$: $E_5(100!) = 20 + 4 = 24$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "0 (No such n exists)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Number System - Cyclicity, Unit Digits & Factorials",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Number+System+Cyclicity+Unit+Digit+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Unit Digit Cyclicity mod 4, Legendre Highest Power in n! & Trailing Zeros Formula",
      "duration": "Complete Playlist • 8 Parts"
    }
  },
  {
    "id": "qa_quadratic",
    "title": "Quadratic Equations & Vieta's Roots",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "3.0 Hours",
    "theoryHtml": "<h4>1. The Quadratic Equation & First-Principle Derivation</h4>\n<div class='theory-block'>A polynomial equation of degree 2 in $x$:\n$$\\mathbf{ax^2 + bx + c = 0 \\quad (a \\ne 0, \\; a, b, c \\in \\mathbb{R})}$$\n\n### 1.1 First-Principle Derivation: Completing the Square\nDivide the entire equation by the leading coefficient $a$:\n$$x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}$$\nTo form a perfect square on the left side, add $\\left(\\frac{b}{2a}\\right)^2$ to both sides:\n$$x^2 + 2\\left(\\frac{b}{2a}\\right)x + \\left(\\frac{b}{2a}\\right)^2 = \\left(\\frac{b}{2a}\\right)^2 - \\frac{c}{a}$$\n$$\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{4ac}{4a^2} = \\frac{b^2 - 4ac}{4a^2}$$\nTake the square root of both sides:\n$$x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}$$\n\n$$\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}} \\quad \\blacksquare$$\n\n---</div>\n<h4>2. Nature of Roots & The Discriminant ($\\Delta = b^2 - 4ac$)</h4>\n<div class='theory-block'>The discriminant $\\Delta = b^2 - 4ac$ completely determines the algebraic and geometric character of the roots:\n\n| Discriminant ($\\Delta$) | Condition on Coefficients | Nature of Roots ($\\alpha, \\beta$) | Geometric Interpretation on $xy$-Plane |\n| :---: | :---: | :---: | :--- |\n| $\\mathbf{\\Delta > 0}$ | $a, b, c \\in \\mathbb{R}$ | **Real and Distinct** | Parabola cuts the x-axis at **two distinct points** |\n| $\\mathbf{\\Delta > 0}$ | $a, b, c \\in \\mathbb{Q}$ and $\\Delta$ is a **perfect square** | **Rational and Distinct** | Roots are clean fractions or integers |\n| $\\mathbf{\\Delta > 0}$ | $a, b, c \\in \\mathbb{Q}$ and $\\Delta$ is **NOT a square** | **Irrational Conjugate Pairs** ($p \\pm \\sqrt{q}$) | One root $p + \\sqrt{q} \\implies$ Other root $p - \\sqrt{q}$ |\n| $\\mathbf{\\Delta = 0}$ | $a, b, c \\in \\mathbb{R}$ | **Real and Equal (Coincident)** ($\\alpha = \\beta = -b/2a$) | Parabola **touches** the x-axis at its vertex |\n| $\\mathbf{\\Delta < 0}$ | $a, b, c \\in \\mathbb{R}$ | **Complex / Imaginary Conjugate Pairs** ($p \\pm iq$) | Parabola **never intersects** the x-axis (entirely above or below) |\n\n---</div>\n<h4>3. Vieta's Relations & Symmetric Functions of Roots</h4>\n<div class='theory-block'>Let $\\alpha$ and $\\beta$ be the roots of $ax^2 + bx + c = 0$:\n$$\\mathbf{\\text{Sum of Roots } (\\alpha + \\beta) = -\\frac{b}{a}}$$\n$$\\mathbf{\\text{Product of Roots } (\\alpha \\cdot \\beta) = \\frac{c}{a}}$$\n$$\\mathbf{\\text{Difference of Roots } |\\alpha - \\beta| = \\frac{\\sqrt{b^2 - 4ac}}{|a|} = \\frac{\\sqrt{\\Delta}}{|a|}}$$\n\n### 3.1 Higher Symmetric Powers of Roots\n1. **Sum of Squares:**\n   $$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\mathbf{\\left(-\\frac{b}{a}\\right)^2 - 2\\left(\\frac{c}{a}\\right) = \\frac{b^2 - 2ac}{a^2}}$$\n2. **Sum of Cubes:**\n   $$\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta) = \\mathbf{\\frac{-b^3 + 3abc}{a^3}}$$\n\n### 3.2 Newton's Sums for Quadratics (99%ile Recurrence Relation)\nLet $S_n = \\alpha^n + \\beta^n$. Since $\\alpha$ and $\\beta$ satisfy $ax^2 + bx + c = 0$:\n$$a\\alpha^2 + b\\alpha + c = 0 \\implies a\\alpha^n + b\\alpha^{n-1} + c\\alpha^{n-2} = 0$$\n$$a\\beta^2 + b\\beta + c = 0 \\implies a\\beta^n + b\\beta^{n-1} + c\\beta^{n-2} = 0$$\nAdding the two equations:\n\n$$\\mathbf{a \\cdot S_n + b \\cdot S_{n-1} + c \\cdot S_{n-2} = 0}$$\nThis master recurrence calculates $\\alpha^5 + \\beta^5$ or $\\alpha^7 + \\beta^7$ in 15 seconds without polynomial expansion!\n\n---</div>\n<h4>4. Conditions for Common Roots</h4>\n<div class='theory-block'>Consider two quadratic equations:\n$$a_1 x^2 + b_1 x + c_1 = 0 \\quad \\text{and} \\quad a_2 x^2 + b_2 x + c_2 = 0$$\n\n### 4.1 Case 1: Both Roots are Common\nThe two equations are scalar multiples of each other:\n$$\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}}$$\n\n### 4.2 Case 2: Exactly ONE Root is Common\nLet the common root be $\\alpha$.  \nUsing Cramer's Rule / cross-multiplication on $a_1 \\alpha^2 + b_1 \\alpha + c_1 = 0$ and $a_2 \\alpha^2 + b_2 \\alpha + c_2 = 0$:\n$$\\frac{\\alpha^2}{b_1 c_2 - b_2 c_1} = \\frac{\\alpha}{c_1 a_2 - c_2 a_1} = \\frac{1}{a_1 b_2 - a_2 b_1}$$\nEquating $\\alpha = \\frac{c_1 a_2 - c_2 a_1}{a_1 b_2 - a_2 b_1}$ and $\\alpha^2$:\n\n$$\\mathbf{(a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1) = (c_1 a_2 - c_2 a_1)^2}$$\n\n---</div>",
    "formulas": [
      {
        "formula": "\\mathbf{ax^2 + bx + c = 0 \\quad (a \\ne 0, \\; a, b, c \\in \\mathbb{R})}"
      },
      {
        "formula": "x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0 \\implies x^2 + \\frac{b}{a}x = -\\frac{c}{a}"
      },
      {
        "formula": "x^2 + 2\\left(\\frac{b}{2a}\\right)x + \\left(\\frac{b}{2a}\\right)^2 = \\left(\\frac{b}{2a}\\right)^2 - \\frac{c}{a}"
      },
      {
        "formula": "\\left(x + \\frac{b}{2a}\\right)^2 = \\frac{b^2}{4a^2} - \\frac{4ac}{4a^2} = \\frac{b^2 - 4ac}{4a^2}"
      },
      {
        "formula": "x + \\frac{b}{2a} = \\pm \\frac{\\sqrt{b^2 - 4ac}}{2a}"
      },
      {
        "formula": "\\mathbf{x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}} \\quad \\blacksquare"
      }
    ],
    "questions": [
      {
        "qNum": 21,
        "title": "Nature of Roots & Rationality of Discriminant",
        "problem": "If $a, b, c$ are rational and $a + b + c = 0$, determine the nature of the roots of the quadratic equation $(b+c)x^2 + (c+a)x + (a+b) = 0$.",
        "concept": "Discriminant $D = B^2 - 4AC$. Since $a+b+c = 0$, express coefficients in terms of single variables.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Real and Rational",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "Real and Irrational",
          "Real and Rational",
          "Non-real Complex (Imaginary)",
          "Real and Equal"
        ]
      },
      {
        "qNum": 22,
        "title": "Condition for Quadratic to be a Perfect Square",
        "problem": "Find the values of $k$ for which $(k-2)x^2 + 2(2k-3)x + (5k-6)$ is a perfect square of a linear expression for all real $x$.",
        "concept": "A quadratic $Ax^2 + Bx + C$ is a perfect square if and only if $A > 0$ and its discriminant $D = B^2 - 4AC = 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k = 3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "k = 4",
          "k = 2",
          "k = 3",
          "k = 6"
        ]
      },
      {
        "qNum": 23,
        "title": "Vieta's Higher Power Symmetric Sums",
        "problem": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 3x + 1 = 0$, find the value of $\\alpha^4 + \\beta^4$.",
        "concept": "Vieta's formulas: $\\alpha + \\beta = 3, \\alpha\\beta = 1$. Use squaring or Newton's recurrence relation.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "47",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "56",
          "38",
          "71",
          "47"
        ]
      },
      {
        "qNum": 24,
        "title": "Newton's Sum Formula for Fast Computation",
        "problem": "If $\\alpha$ and $\\beta$ are the roots of $x^2 - 5x - 2 = 0$, and $S_n = \\alpha^n + \\beta^n$, find the value of $\\frac{S_{10} - 2S_8}{S_9}$.",
        "concept": "Since $\\alpha, \\beta$ satisfy $x^2 - 5x - 2 = 0$, multiplying by $x^{n-2}$ gives $S_n - 5S_{n-1} - 2S_{n-2} = 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "5",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "5",
          "6",
          "4",
          "7"
        ]
      },
      {
        "qNum": 25,
        "title": "Transformation of Roots: Shifted Roots",
        "problem": "If the roots of $2x^2 - 7x + 4 = 0$ are $\\alpha$ and $\\beta$, find the quadratic equation whose roots are $\\alpha + 3$ and $\\beta + 3$.",
        "concept": "If new roots are $y = x + 3$, substitute $x = y - 3$ into the original equation.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2x^2 - 19x + 43 = 0",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 26,
        "title": "Transformation of Roots: Reciprocal and Squared Roots",
        "problem": "If the roots of $3x^2 - 4x + 1 = 0$ are $\\alpha$ and $\\beta$, find the equation whose roots are $\\alpha^2$ and $\\beta^2$.",
        "concept": "Let $y = x^2$. Express odd powers in terms of even powers and square.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "9x^2 - 10x + 1 = 0",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "10 x^2 - 10x + 1 = 0",
          "8 x^2 - 10x + 1 = 0",
          "9x^2 - 10x + 1 = 0",
          "11 x^2 - 10x + 1 = 0"
        ]
      },
      {
        "qNum": 27,
        "title": "Roots Differing by a Given Constant",
        "problem": "If the roots of the equation $x^2 - kx + 12 = 0$ differ by 1, find all possible values of $k$.",
        "concept": "$|\\alpha - \\beta| = 1$. Use identity $(\\alpha - \\beta)^2 = (\\alpha + \\beta)^2 - 4\\alpha\\beta$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k = 7 and k = -7",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "8 k =  and k = -7",
          "6 k =  and k = -7",
          "9 k =  and k = -7",
          "k = 7 and k = -7"
        ]
      },
      {
        "qNum": 28,
        "title": "One Root is $m$ Times the Other Root",
        "problem": "If one root of $ax^2 + bx + c = 0$ is 3 times the other root, find the relation between $a, b,$ and $c$.",
        "concept": "If $\\beta = m\\alpha$, then $\\frac{b^2}{ac} = \\frac{(m+1)^2}{m}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "3b^2 = 16ac",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3b^2 = 16ac",
          "4 b^2 = 16ac",
          "2 b^2 = 16ac",
          "5 b^2 = 16ac"
        ]
      },
      {
        "qNum": 29,
        "title": "One Root is the Square of the Other",
        "problem": "If one root of $x^2 - px + q = 0$ is the square of the other, prove the relation between $p$ and $q$.",
        "concept": "Roots are $\\alpha$ and $\\alpha^2$. $\\alpha + \\alpha^2 = p$ and $\\alpha^3 = q$. Cube the sum relation.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "p^3 - 3pq - q^2 - q = 0",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4 p^ - 3pq - q^2 - q = 0",
          "p^3 - 3pq - q^2 - q = 0",
          "2 p^ - 3pq - q^2 - q = 0",
          "5 p^ - 3pq - q^2 - q = 0"
        ]
      },
      {
        "qNum": 30,
        "title": "Exactly One Common Root Condition",
        "problem": "If the equations $x^2 + px + q = 0$ and $x^2 + qx + p = 0$ ($p \\neq q$) have a common root, find the value of $p + q$ and the common root.",
        "concept": "Subtract the two equations to eliminate the quadratic term $x^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Common root = 1, p + q = -1",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 31,
        "title": "Common Root Condition with Non-Monics",
        "problem": "Find the value of $k$ such that $2x^2 + kx - 5 = 0$ and $x^2 - 3x - 4 = 0$ have a common root.",
        "concept": "Solve the fully known quadratic first, then substitute its roots into the parametric equation.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k = -3 or k = -27/4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "-2 k =  or k = -27/4",
          "0 k =  or k = -27/4",
          "-1 k =  or k = -27/4",
          "k = -3 or k = -27/4"
        ]
      },
      {
        "qNum": 32,
        "title": "Condition for Quadratic to be Strictly Positive for all Real $x$",
        "problem": "Find the range of $m$ such that $(m-1)x^2 + 2(m-1)x + 1 > 0$ for all real $x$.",
        "concept": "For $Ax^2 + Bx + C > 0$ for all $x \\in \\mathbb{R}$: requires $A > 0$ and $D < 0$. Also check linear case $A = 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1 <= m < 2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1 <= m < 2",
          "2 <= m < 2",
          "0 <= m < 2",
          "3 <= m < 2"
        ]
      },
      {
        "qNum": 33,
        "title": "Location of Roots: Both Roots Greater Than a Real Number $k$",
        "problem": "Find the range of values of $a$ for which both roots of $x^2 - 6ax + 2 - 2a + 9a^2 = 0$ are greater than 3.",
        "concept": "Three necessary and sufficient conditions for both roots to be $> k$:\n1. $D \\ge 0$\n2. $A \\cdot f(k) > 0$\n3. $-\\frac{B}{2A} > k$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "a > 11/9",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "13 a > /9",
          "a > 11/9",
          "9 a > /9",
          "17 a > /9"
        ]
      },
      {
        "qNum": 34,
        "title": "Location of Roots: A Number Lies Between the Roots",
        "problem": "Find all values of $m$ for which 2 lies strictly between the roots of $x^2 - (m-3)x + m = 0$.",
        "concept": "Condition for $k$ to lie strictly between the roots of $Ax^2 + Bx + C = 0$ with $A > 0$ is simply $f(k) < 0$. (Discriminant is automatically positive).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "m > 10",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "11 m >",
          "9 m >",
          "m > 10",
          "12 m >"
        ]
      },
      {
        "qNum": 35,
        "title": "Location of Roots: Roots on Opposite Sides of Zero",
        "problem": "Under what condition do the roots of $x^2 + (k-2)x - (k+3) = 0$ have opposite signs?",
        "concept": "Roots have opposite signs if and only if their product is strictly negative: $\\frac{C}{A} < 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k > -3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 36,
        "title": "Integer Roots Requiring Perfect Square Discriminant",
        "problem": "Find all integer values of $k$ such that the quadratic equation $x^2 - kx + 2k - 3 = 0$ has only integer roots.",
        "concept": "For integer roots with monic leading coefficient, the discriminant $D = k^2 - 4(2k-3)$ must be a perfect square: $D = m^2$ for integer $m$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k = 2 and k = 6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "k = 2 and k = 6",
          "3 k =  and k = 6",
          "1 k =  and k = 6",
          "4 k =  and k = 6"
        ]
      },
      {
        "qNum": 37,
        "title": "Cubic Equation Vieta's Relations & Identity",
        "problem": "If $\\alpha, \\beta, \\gamma$ are the roots of $x^3 - 6x^2 + 11x - 6 = 0$, find the value of $\\alpha^2 + \\beta^2 + \\gamma^2$ and $\\frac{1}{\\alpha} + \\frac{1}{\\beta} + \\frac{1}{\\gamma}$.",
        "concept": "Vieta's for cubic: $S_1 = \\alpha+\\beta+\\gamma = 6$, $S_2 = \\alpha\\beta+\\beta\\gamma+\\gamma\\alpha = 11$, $P = \\alpha\\beta\\gamma = 6$.\nIdentities: $\\Sigma \\alpha^2 = S_1^2 - 2S_2$ and $\\Sigma \\frac{1}{\\alpha} = \\frac{S_2}{P}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Sum of squares = 14, Sum of reciprocals = 11/6",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "17 Sum of squares = , Sum of reciprocals = 11/6",
          "Sum of squares = 14, Sum of reciprocals = 11/6",
          "11 Sum of squares = , Sum of reciprocals = 11/6",
          "21 Sum of squares = , Sum of reciprocals = 11/6"
        ]
      },
      {
        "qNum": 38,
        "title": "Cubic Equation with Roots in Arithmetic Progression",
        "problem": "The roots of the equation $x^3 - 12x^2 + 39x - 28 = 0$ are in Arithmetic Progression. Find the roots.",
        "concept": "Let roots be $a - d, a, a + d$. Then sum of roots $= 3a = -(-12) = 12 \\implies a = 4$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1, 4, 7",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2 , 4, 7",
          "0 , 4, 7",
          "1, 4, 7",
          "3 , 4, 7"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Quadratic Equations & Higher Degree Polynomials",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Quadratic+Equations+Vieta+Roots+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Vieta's Relations, Discriminant Sign Nature, Parabola Vertex Min/Max & Common Roots",
      "duration": "Complete Playlist • 8 Parts"
    }
  },
  {
    "id": "qa_progressions",
    "title": "Sequences, Progressions & Telescoping (AP/GP)",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "3.0 Hours",
    "theoryHtml": "<h4>1. Executive Concept Architecture</h4>\n<div class='theory-block'>```\n                       SEQUENCES, SERIES & PROGRESSIONS\n                                      │\n         ┌────────────────────────────┼───────────────────────────┐\n         ▼                            ▼                           ▼\n  STANDARD PROGRESSIONS        HYBRID / ADVANCED SERIES      SPECIAL ALGEBRAIC SUMS\n   • Arithmetic (AP)            • Arithmetico-Geometric (AGP) • Telescopic Fractions\n   • Geometric (GP)             • Method of Differences (Δ)   • Power Sums (Σk, Σk², Σk³)\n   • Harmonic (HP)              • Common Terms of 2 APs       • Product Telescoping\n   • AM - GM - HM Inequalities  • Recurrence & Periodic       • Nested / Floor Sums\n```\n\n---</div>\n<h4>2. Arithmetic Progression (AP) — Foundations & Rigorous Derivations</h4>\n<div class='theory-block'>### 2.1 Formal Definition & Common Difference\nAn **Arithmetic Progression (AP)** is a sequence of numbers in which the difference between any two consecutive terms is a constant, denoted by $d$ (the common difference).\n$$a_1, \\; a_2, \\; a_3, \\; \\dots, \\; a_n \\quad \\text{where} \\quad a_{k+1} - a_k = d \\; \\forall k \\ge 1$$\n* If $d > 0$, the AP is strictly increasing.\n* If $d < 0$, the AP is strictly decreasing.\n* If $d = 0$, the AP is constant ($a, a, a, \\dots$).\n\n### 2.2 First-Principle Derivation: The $n^{\\text{th}}$ Term ($T_n$)\nLet the first term be $a$ and the common difference be $d$:\n* $T_1 = a = a + 0 \\cdot d$\n* $T_2 = T_1 + d = a + 1 \\cdot d$\n* $T_3 = T_2 + d = a + 2d$\n* By mathematical induction, the coefficient of $d$ for the $n^{\\text{th}}$ term is $(n - 1)$:\n$$\\mathbf{T_n = a + (n - 1)d}$$\n\n### 2.3 First-Principle Derivation: Sum of First $n$ Terms ($S_n$)\nLet $S_n = T_1 + T_2 + T_3 + \\dots + T_{n-1} + T_n$.  \nWrite the sum forward and backward (the Gaussian Inversion):\n$$S_n = a + (a + d) + (a + 2d) + \\dots + (l - 2d) + (l - d) + l$$\n$$S_n = l + (l - d) + (l - 2d) + \\dots + (a + 2d) + (a + d) + a$$\nAdd the two equations column by column. Every corresponding pair sums identically to $(a + l)$:\n$$2S_n = (a + l) + (a + l) + (a + l) + \\dots + (a + l) \\quad \\text{($n$ identical pairs)}$$\n$$2S_n = n(a + l)$$</div>\n<h4>3. Geometric Progression (GP) — Foundations & Rigorous Derivations</h4>\n<div class='theory-block'>### 3.1 Formal Definition & Common Ratio\nA **Geometric Progression (GP)** is a sequence of non-zero terms where the quotient of any term and its predecessor is a constant, denoted by $r$ (the common ratio).\n$$a_1, \\; a_2, \\; a_3, \\; \\dots, \\; a_n \\quad \\text{where} \\quad \\frac{a_{k+1}}{a_k} = r \\; \\forall k \\ge 1$$\n\n### 3.2 First-Principle Derivation: The $n^{\\text{th}}$ Term ($T_n$)\n* $T_1 = a = a \\cdot r^0$\n* $T_2 = a \\cdot r^1$\n* $T_3 = a \\cdot r^2$\n* By induction:\n$$\\mathbf{T_n = a \\cdot r^{n-1}}$$\n\n### 3.3 First-Principle Derivation: Sum of First $n$ Terms ($S_n$)\nLet $S_n = a + ar + ar^2 + \\dots + ar^{n-1}$.  \nMultiply both sides by the common ratio $r$:\n$$r S_n = ar + ar^2 + ar^3 + \\dots + ar^{n-1} + ar^n$$\nSubtract the second equation from the first:\n$$S_n - r S_n = a + (ar - ar) + (ar^2 - ar^2) + \\dots + (ar^{n-1} - ar^{n-1}) - ar^n$$\n$$(1 - r)S_n = a(1 - r^n)$$\nFor $r \\ne 1$:\n$$\\mathbf{S_n = \\frac{a(1 - r^n)}{1 - r} = \\frac{a(r^n - 1)}{r - 1}}$$\n\n### 3.4 First-Principle Derivation: Infinite GP Sum ($S_\\infty$)\nConsider the limit as $n \\to \\infty$ of $S_n = \\frac{a(1 - r^n)}{1 - r}$.</div>\n<h4>4. Harmonic Progression (HP) & The Classical Means Inequality</h4>\n<div class='theory-block'>### 4.1 Definition & Properties\nA sequence $h_1, h_2, h_3, \\dots, h_n$ is a **Harmonic Progression (HP)** if and only if their reciprocals form an Arithmetic Progression:\n$$\\frac{1}{h_1}, \\; \\frac{1}{h_2}, \\; \\frac{1}{h_3}, \\; \\dots, \\; \\frac{1}{h_n} \\quad \\text{is an AP}$$\n* **$n^{\\text{th}}$ Term of an HP:**\n  $$\\frac{1}{h_n} = \\frac{1}{h_1} + (n - 1)d \\implies \\mathbf{h_n = \\frac{1}{\\frac{1}{h_1} + (n - 1)d}}$$\n* **Warning:** There is **no general closed-form formula** for the sum of $n$ terms of an HP. Every problem involving sums must be inverted back to AP or solved through reciprocal relationships.\n\n### 4.2 Harmonic Mean (HM) of Two Numbers\nLet $H$ be the Harmonic Mean between $a$ and $b$. Then $a, H, b$ are in HP $\\implies \\frac{1}{a}, \\frac{1}{H}, \\frac{1}{b}$ are in AP:\n$$\\frac{1}{H} - \\frac{1}{a} = \\frac{1}{b} - \\frac{1}{H} \\implies \\frac{2}{H} = \\frac{1}{a} + \\frac{1}{b} = \\frac{a + b}{ab}$$\n$$\\mathbf{H = \\frac{2ab}{a + b}}$$\n\n### 4.3 General $n$-Term Harmonic Mean\n$$\\mathbf{\\text{HM} = \\frac{n}{\\frac{1}{x_1} + \\frac{1}{x_2} + \\dots + \\frac{1}{x_n}}}$$\n\n### 4.4 The Unified Means Hierarchy: $\\text{AM} \\ge \\text{GM} \\ge \\text{HM}$\nFor any set of positive real numbers $a$ and $b$:\n* $\\text{AM} = \\frac{a + b}{2}$\n* $\\text{GM} = \\sqrt{ab}$\n* $\\text{HM} = \\frac{2ab}{a + b}$\n\n#### Mathematical Proof of $\\text{GM}^2 = \\text{AM} \\times \\text{HM}$:\n$$\\text{AM} \\times \\text{HM} = \\left(\\frac{a + b}{2}\\right) \\times \\left(\\frac{2ab}{a + b}\\right) = ab = (\\sqrt{ab})^2 = \\mathbf{\\text{GM}^2}$$</div>",
    "formulas": [
      {
        "formula": "a_1, \\; a_2, \\; a_3, \\; \\dots, \\; a_n \\quad \\text{where} \\quad a_{k+1} - a_k = d \\; \\forall k \\ge 1"
      },
      {
        "formula": "\\mathbf{T_n = a + (n - 1)d}"
      },
      {
        "formula": "S_n = a + (a + d) + (a + 2d) + \\dots + (l - 2d) + (l - d) + l"
      },
      {
        "formula": "S_n = l + (l - d) + (l - 2d) + \\dots + (a + 2d) + (a + d) + a"
      },
      {
        "formula": ""
      },
      {
        "formula": ""
      }
    ],
    "questions": [
      {
        "qNum": 141,
        "title": "Sum of AP Given as Quadratic in $n$",
        "problem": "If the sum of the first $n$ terms of an AP is $S_n = 3n^2 + 5n$, find the first term $a$, the common difference $d$, and the 20th term $T_{20}$.",
        "concept": "In an AP, $S_n = An^2 + Bn$. Common difference $d = 2A$, first term $a = S_1 = A + B$. $n$-th term $T_n = S_n - S_{n-1}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "a = 8, d = 6, T_20 = 122",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9 a = , d = 6, T_20 = 122",
          "a = 8, d = 6, T_20 = 122",
          "7 a = , d = 6, T_20 = 122",
          "10 a = , d = 6, T_20 = 122"
        ]
      },
      {
        "qNum": 142,
        "title": "Ratio of Sums to Ratio of Specific Terms in Two APs",
        "problem": "The ratio of the sums of $n$ terms of two APs is $\\frac{7n + 1}{4n + 27}$. Find the ratio of their 11th terms.",
        "concept": "To find the ratio of $m$-th terms $\\frac{T_m}{T'_m}$ from the ratio of sums $\\frac{S_n}{S'_n}$, substitute $n = 2m - 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "4/3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3/4",
          "5/3",
          "4/3",
          "4/4"
        ]
      },
      {
        "qNum": 143,
        "title": "Equidistant Terms Sum in AP",
        "problem": "In an AP of 24 terms, $T_1 + T_5 + T_{10} + T_{15} + T_{20} + T_{24} = 225$. Find the sum of all 24 terms of the AP.",
        "concept": "In any AP, terms equidistant from the beginning and end have equal sum: $T_k + T_{n - k + 1} = T_1 + T_n$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "900",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1080",
          "720",
          "1350",
          "900"
        ]
      },
      {
        "qNum": 144,
        "title": "Arithmetic Mean Insertion Property",
        "problem": "If $n$ arithmetic means $A_1, A_2, \\dots, A_n$ are inserted between 2 and 38, and $A_1 + A_2 + \\dots + A_n = 200$, find the value of $n$.",
        "concept": "The sum of $n$ arithmetic means between $a$ and $b$ is $n \\times \\frac{a + b}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "10",
          "11",
          "9",
          "12"
        ]
      },
      {
        "qNum": 145,
        "title": "Infinite Geometric Progression with Subsequent Sum Property",
        "problem": "In an infinite GP with positive terms, each term is equal to 3 times the sum of all terms that follow it. Find the common ratio $r$.",
        "concept": "Equation: $T_n = 3 \\sum_{k=n+1}^\\infty T_k$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1/4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 146,
        "title": "Sum of Infinite Geometric Series with Alternating Signs",
        "problem": "Find the sum of the infinite series $S = 1 - \\frac{1}{3} + \\frac{1}{9} - \\frac{1}{27} + \\dots$.",
        "concept": "Formula for infinite GP: $S_\\infty = \\frac{a}{1 - r}$, valid for $|r| < 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "3/4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4/3",
          "4/4",
          "3/4",
          "3/5"
        ]
      },
      {
        "qNum": 147,
        "title": "Harmonic Progression Basic Relation",
        "problem": "If the 3rd term of an HP is 1/5 and the 8th term is 1/15, find the 15th term of the HP.",
        "concept": "The reciprocals of terms of an HP form an AP: $a_n = 1/h_n$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1/29",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "29/1",
          "2/29",
          "1/30",
          "1/29"
        ]
      },
      {
        "qNum": 148,
        "title": "Arithmetico-Geometric Progression (AGP) Sum",
        "problem": "Find the sum of the infinite series $S = 1 + 2\\left(\\frac{1}{3}\\right) + 3\\left(\\frac{1}{9}\\right) + 4\\left(\\frac{1}{27}\\right) + \\dots$.",
        "concept": "Standard AGP method: Multiply by the common ratio $r = 1/3$ and subtract.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "9/4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9/4",
          "4/9",
          "10/4",
          "9/5"
        ]
      },
      {
        "qNum": 149,
        "title": "Telescoping Series of Unit Fractions",
        "problem": "Find the sum of the series $S = \\frac{1}{1 \\times 2} + \\frac{1}{2 \\times 3} + \\frac{1}{3 \\times 4} + \\dots + \\frac{1}{99 \\times 100}$.",
        "concept": "Partial fraction decomposition: $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "99/100 (or 0.99)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "119 /100 (or 0.99)",
          "99/100 (or 0.99)",
          "79 /100 (or 0.99)",
          "149 /100 (or 0.99)"
        ]
      },
      {
        "qNum": 150,
        "title": "Telescoping Series with Step Difference 3",
        "problem": "Find the sum of the series $S = \\sum_{n=1}^{20} \\frac{1}{(3n - 2)(3n + 1)}$.",
        "concept": "Partial fractions: $\\frac{1}{(3n-2)(3n+1)} = \\frac{1}{3} \\left( \\frac{1}{3n-2} - \\frac{1}{3n+1} \\right)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "20/61",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 151,
        "title": "Telescoping Series with 3 Factors in Denominator",
        "problem": "Find the sum of the series $S = \\sum_{n=1}^{10} \\frac{1}{n(n+1)(n+2)}$.",
        "concept": "Formula: $\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left( \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "65/264",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "264/65",
          "66/264",
          "65/265",
          "65/264"
        ]
      },
      {
        "qNum": 152,
        "title": "Sum of Squares and Cubes of First $n$ Natural Numbers",
        "problem": "Find the value of $\\sum_{n=1}^{10} (n^2 + 2n)$.",
        "concept": "Use formulas: $\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}$ and $\\sum n = \\frac{n(n+1)}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "495",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "495",
          "594",
          "396",
          "743"
        ]
      },
      {
        "qNum": 153,
        "title": "Second-Order Difference Method for Quadratic Sequence",
        "problem": "Find the 20th term of the sequence $3, 8, 15, 24, 35, \\dots$.",
        "concept": "First differences: $5, 7, 9, 11$ (in AP). Second difference is constant $2$. General term is quadratic $T_n = an^2 + bn + c$ with $2a = 2 \\implies a = 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "440",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "528",
          "440",
          "352",
          "660"
        ]
      },
      {
        "qNum": 154,
        "title": "Harmonic Progression and Logarithmic Relations",
        "problem": "If $a, b, c$ are in Harmonic Progression, then $\\ln(a + c) + \\ln(a - 2b + c)$ is equal to what expression?",
        "concept": "HP definition: $b = \\frac{2ac}{a + c} \\implies a + c = \\frac{2ac}{b}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2 ln|a - c|",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 ln|a - c|",
          "1 ln|a - c|",
          "2 ln|a - c|",
          "4 ln|a - c|"
        ]
      },
      {
        "qNum": 155,
        "title": "Geometric Mean Property of Sub-Sequences",
        "problem": "In a GP with positive terms, $T_4 = 6$ and $T_{10} = 54$. Find the value of $T_7$.",
        "concept": "In a GP, any term is the geometric mean of terms equidistant from it: $T_m = \\sqrt{T_{m-k} \\times T_{m+k}}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "18",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 156,
        "title": "Product of First $n$ Terms of GP",
        "problem": "The third term of a GP is 4. Find the product of the first 5 terms of the GP.",
        "concept": "Product of $2k+1$ terms of GP is $(T_{k+1})^{2k+1}$, because terms equidistant from the center have product equal to $(T_{middle})^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1024",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1024",
          "1229",
          "819",
          "1536"
        ]
      },
      {
        "qNum": 157,
        "title": "Sum of First $n$ Odd Natural Numbers",
        "problem": "Find the value of $1 + 3 + 5 + 7 + \\dots + 99$.",
        "concept": "The sum of the first $n$ odd natural numbers is $n^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2500",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3000",
          "2500",
          "2000",
          "3750"
        ]
      },
      {
        "qNum": 158,
        "title": "Series with Products of Consecutive Integers",
        "problem": "Find the sum $S = 1 \\times 2 + 2 \\times 3 + 3 \\times 4 + \\dots + 10 \\times 11$.",
        "concept": "General term $T_n = n(n + 1) = n^2 + n$. Sum formula: $\\sum n(n+1) = \\frac{n(n+1)(n+2)}{3}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "440",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "528",
          "352",
          "440",
          "660"
        ]
      },
      {
        "qNum": 159,
        "title": "Sum of Series of Reciprocal Factorials",
        "problem": "Evaluate $\\sum_{n=1}^\\infty \\frac{n}{(n + 1)!}$.",
        "concept": "Write $n = (n + 1) - 1$: $\\frac{n}{(n+1)!} = \\frac{n+1}{(n+1)!} - \\frac{1}{(n+1)!} = \\frac{1}{n!} - \\frac{1}{(n+1)!}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2",
          "0",
          "3",
          "1"
        ]
      },
      {
        "qNum": 160,
        "title": "Telescoping Cancellation in Trigonometric/Algebraic Reciprocal Series",
        "problem": "Find the value of $S = \\frac{1}{\\sqrt{1} + \\sqrt{2}} + \\frac{1}{\\sqrt{2} + \\sqrt{3}} + \\frac{1}{\\sqrt{3} + \\sqrt{4}} + \\dots + \\frac{1}{\\sqrt{99} + \\sqrt{100}}$.",
        "concept": "Rationalize each denominator: $\\frac{1}{\\sqrt{n} + \\sqrt{n+1}} = \\sqrt{n+1} - \\sqrt{n}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "9",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Progressions (AP, GP, HP & Arithmetico-Geometric AGP)",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Progressions+AP+GP+HP+AGP+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Infinite GP Sum, Telescope Cancellation & Middle Term Symmetry",
      "duration": "Complete Playlist • 7 Parts"
    }
  },
  {
    "id": "qa_pl",
    "title": "Profit, Loss, Discounts & Faulty Weights",
    "domain": "Arithmetic",
    "tier": "Tier A",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "3.0 Hours",
    "theoryHtml": "<h4>1. Commercial Pricing Foundations & First Principles</h4>\n<div class='theory-block'>Every commercial transaction revolves around three reference prices:\n\n```\n                    + Markup (M%)                   - Discount (D%)\n   Cost Price (CP) ───────────────> Marked Price (MP) ───────────────> Selling Price (SP)\n          │                                                                   ▲\n          └───────────────────── Profit% / Loss% ─────────────────────────────┘\n```\n\n### 1.1 Formal Mathematical Definitions\n1. **Cost Price ($\\text{CP}$):** The total financial expenditure incurred by the seller to acquire or manufacture the article.\n2. **Selling Price ($\\text{SP}$):** The actual revenue realized upon sale to the customer.\n3. **Marked Price ($\\text{MP}$):** The sticker, catalogue, or listed retail price printed on the article.\n4. **Markup ($\\text{M}$):** The premium added above Cost Price to establish Marked Price:\n   $$\\mathbf{\\text{Markup } \\% = \\frac{\\text{MP} - \\text{CP}}{\\text{CP}} \\times 100\\%}$$\n5. **Discount ($\\text{D}$):** The price reduction offered on the Marked Price:\n   $$\\mathbf{\\text{Discount } \\% = \\frac{\\text{MP} - \\text{SP}}{\\text{MP}} \\times 100\\%}$$\n6. **Profit ($\\text{P}$) / Loss ($\\text{L}$):**\n   $$\\mathbf{\\text{Profit } \\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100\\% \\qquad \\text{Loss } \\% = \\frac{\\text{CP} - \\text{SP}}{\\text{CP}} \\times 100\\%}$$\n\n> [!IMPORTANT] **The Benchmark Base Rule:**  \n> * **Profit% and Loss% are ALWAYS calculated on Cost Price ($\\text{CP}$)** (unless explicitly stated otherwise).  \n> * **Discount% is ALWAYS calculated on Marked Price ($\\text{MP}$)**.</div>\n<h4>2. The Commercial Chain Equation & Core Derivations</h4>\n<div class='theory-block'>### 2.1 First-Principle Derivation: The Master Pipeline\nUsing Multiplying Factors, the pricing chain connects:\n$$\\text{MP} = \\text{CP} \\times \\left(1 + \\frac{M\\%}{100}\\right)$$\n$$\\text{SP} = \\text{MP} \\times \\left(1 - \\frac{D\\%}{100}\\right)$$\nSubstituting $\\text{MP}$:\n$$\\mathbf{\\text{SP} = \\text{CP} \\times \\left(1 + \\frac{M\\%}{100}\\right) \\times \\left(1 - \\frac{D\\%}{100}\\right)}$$\nSince $\\text{SP} = \\text{CP} \\times \\left(1 + \\frac{P\\%}{100}\\right)$, dividing both sides by $\\text{CP}$:\n$$\\mathbf{1 + \\frac{P\\%}{100} = \\left(1 + \\frac{M\\%}{100}\\right) \\times \\left(1 - \\frac{D\\%}{100}\\right)}$$\nExpanding this in additive percentage terms:\n$$\\mathbf{\\text{Net Profit } \\% = M - D - \\frac{M \\times D}{100}}$$\n\n---\n\n### 2.2 First-Principle Derivation: The $\\frac{\\text{MP}}{\\text{CP}}$ Ratio Identity\nExpress $\\text{SP}$ in two independent ways:\n$$\\text{SP} = \\text{CP} \\left(\\frac{100 + P\\%}{100}\\right) \\quad \\text{and} \\quad \\text{SP} = \\text{MP} \\left(\\frac{100 - D\\%}{100}\\right)$$\nEquating both expressions for $\\text{SP}$:\n$$\\text{CP} (100 + P\\%) = \\text{MP} (100 - D\\%)$$\nDividing to form the ratio:\n$$\\mathbf{\\frac{\\text{MP}}{\\text{CP}} = \\frac{100 + P\\%}{100 - D\\%}}$$\n*(If the transaction results in a loss of $L\\%$, replace $+P\\%$ with $-L\\%$)*.\n\n---</div>\n<h4>3. Equal Selling Price vs. Equal Cost Price Scenarios</h4>\n<div class='theory-block'>### 3.1 Two Articles Sold at Equal Selling Price ($\\text{SP}_1 = \\text{SP}_2$)\n**Case: One sold at $+x\\%$ profit, the other sold at $-x\\%$ loss.**\n\n#### First-Principle Proof of Universal Loss:\nLet the common selling price be $\\text{SP}$.\n$$\\text{CP}_1 = \\frac{\\text{SP}}{1 + \\frac{x}{100}} = \\frac{100 \\cdot \\text{SP}}{100 + x}$$\n$$\\text{CP}_2 = \\frac{\\text{SP}}{1 - \\frac{x}{100}} = \\frac{100 \\cdot \\text{SP}}{100 - x}$$\nTotal Cost Price:\n$$\\text{Total CP} = \\text{CP}_1 + \\text{CP}_2 = 100 \\cdot \\text{SP} \\left[\\frac{1}{100 + x} + \\frac{1}{100 - x}\\right] = \\frac{20,000 \\cdot \\text{SP}}{10,000 - x^2}$$\nTotal Selling Price:\n$$\\text{Total SP} = 2 \\cdot \\text{SP}$$\nTotal Net Loss:\n$$\\text{Net Loss (₹)} = \\text{Total CP} - \\text{Total SP} = 2 \\cdot \\text{SP} \\left[\\frac{10,000}{10,000 - x^2} - 1\\right] = \\mathbf{\\frac{2 \\cdot \\text{SP} \\cdot x^2}{10,000 - x^2}}$$\nPercentage Net Loss:\n$$\\text{Net Loss } \\% = \\frac{\\text{Total CP} - \\text{Total SP}}{\\text{Total CP}} \\times 100\\% = \\frac{\\frac{2 \\cdot \\text{SP} \\cdot x^2}{10,000 - x^2}}{\\frac{20,000 \\cdot \\text{SP}}{10,000 - x^2}} \\times 100\\% = \\mathbf{\\frac{x^2}{100}\\%} \\quad \\blacksquare$$\n\n### 3.2 Contrast: Two Articles at Equal Cost Price ($\\text{CP}_1 = \\text{CP}_2$)\n* One sold at $+x\\%$ profit, other at $-x\\%$ loss:\n  $$\\text{Net Profit / Loss} = \\frac{(+x) + (-x)}{2} = \\mathbf{0\\% \\quad (\\text{No Profit, No Loss})}$$\n\n---</div>\n<h4>4. Dishonest Shopkeepers & Faulty Weights: The Multiplying Ratio Engine</h4>\n<div class='theory-block'>Dishonest shopkeeper problems often seem confusing because frauds happen at multiple stages: marking up, discounting, cheating during buying, and cheating during selling.\n\n### 4.1 The Fundamental Insight\nA merchant's total profit ratio is simply:\n$$\\mathbf{\\text{Overall Multiplier } (M_{\\text{net}}) = \\frac{\\text{Total Money Received}}{\\text{Total Cost of Goods Given}} = \\frac{\\text{Effective SP}}{\\text{Effective CP}}}$$\n\nEvery distinct operational fraud acts as an independent factor in a multiplicative chain:\n$$\\mathbf{M_{\\text{net}} = M_{\\text{pricing}} \\times M_{\\text{selling weight}} \\times M_{\\text{buying weight}} \\times M_{\\text{adulteration}}}$$\n\n### 4.2 The Four Multiplication Factors:\n1. **Pricing Factor ($M_{\\text{pricing}}$):**  \n   Markup by $M\\%$ and discount by $D\\%$:\n   $$M_{\\text{pricing}} = \\left(\\frac{100 + M\\%}{100}\\right) \\times \\left(\\frac{100 - D\\%}{100}\\right)$$\n2. **Selling Weight Fraud ($M_{\\text{sell}}$):**  \n   The shopkeeper charges for $W_{\\text{claimed}}$ (nominal weight) but physically gives only $W_{\\text{actual}}$:\n   $$\\mathbf{M_{\\text{sell}} = \\frac{\\text{Claimed Weight Given to Customer}}{\\text{Actual Weight Given from Inventory}} = \\frac{W_{\\text{claimed}}}{W_{\\text{actual}}}}$$\n   * *Example:* Uses an $800\\text{ g}$ weight for $1\\text{ kg}$: $M_{\\text{sell}} = \\frac{1000}{800} = \\frac{5}{4}$.\n3. **Buying Weight Fraud ($M_{\\text{buy}}$):**  \n   While purchasing from the wholesaler, uses a fraudulent scale to take $W_{\\text{taken}}$ while paying only for $W_{\\text{paid}}$:\n   $$\\mathbf{M_{\\text{buy}} = \\frac{\\text{Actual Weight Taken}}{\\text{Nominal Weight Paid For}} = \\frac{W_{\\text{taken}}}{W_{\\text{paid}}}}$$\n   * *Example:* Takes $1100\\text{ g}$ for the price of $1\\text{ kg}$: $M_{\\text{buy}} = \\frac{1100}{1000} = \\frac{11}{10}$.\n4. **Adulteration Factor ($M_{\\text{adulter}}$):**  \n   Adds free diluent (e.g., adds $200\\text{ mL}$ water to $1000\\text{ mL}$ milk):</div>",
    "formulas": [
      {
        "formula": "\\mathbf{\\text{Markup } \\% = \\frac{\\text{MP} - \\text{CP}}{\\text{CP}} \\times 100\\%}"
      },
      {
        "formula": "\\mathbf{\\text{Discount } \\% = \\frac{\\text{MP} - \\text{SP}}{\\text{MP}} \\times 100\\%}"
      },
      {
        "formula": "\\mathbf{\\text{Profit } \\% = \\frac{\\text{SP} - \\text{CP}}{\\text{CP}} \\times 100\\% \\qquad \\text{Loss } \\% = \\frac{\\text{CP} - \\text{SP}}{\\text{CP}} \\times 100\\%}"
      },
      {
        "formula": "\\text{MP} = \\text{CP} \\times \\left(1 + \\frac{M\\%}{100}\\right)"
      },
      {
        "formula": "\\text{SP} = \\text{MP} \\times \\left(1 - \\frac{D\\%}{100}\\right)"
      },
      {
        "formula": "\\mathbf{\\text{SP} = \\text{CP} \\times \\left(1 + \\frac{M\\%}{100}\\right) \\times \\left(1 - \\frac{D\\%}{100}\\right)}"
      }
    ],
    "questions": [
      {
        "qNum": 26,
        "title": "Cost Price from Selling Price at Profit and Loss",
        "problem": "An article is sold at a profit of 20%. If it had been sold for ₹60 less, there would have been a loss of 10%. Find the cost price of the article.",
        "concept": "Difference in selling prices corresponds to difference between profit and loss percentages.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹200",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹160",
          "₹240",
          "₹200",
          "₹300"
        ]
      },
      {
        "qNum": 27,
        "title": "Two Articles Sold at Equal SP: One Profit, One Loss",
        "problem": "Two watches are sold for ₹1980 each. On one, the seller gains 10%, and on the other, he loses 10%. Find the overall profit or loss percentage and the net amount.",
        "concept": "When two articles are sold at EQUAL selling prices, one at $x\\%$ profit and the other at $x\\%$ loss, there is ALWAYS an overall loss of $\\frac{x^2}{100}\\%$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1% loss (₹40 loss)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1% profit",
          "2% loss",
          "No profit, no loss",
          "1% loss (₹40 loss)"
        ]
      },
      {
        "qNum": 28,
        "title": "Equal CP with Opposite Profit and Loss",
        "problem": "A merchant buys two bicycles for ₹3500 each. He sells one at a profit of 15% and the other at a loss of 15%. Find his overall profit or loss percentage.",
        "concept": "When Cost Prices are equal, overall profit/loss is simply the arithmetic average of individual percentage changes.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "No profit, no loss (0%)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "No profit, no loss (0%)",
          "1% loss",
          "1% profit",
          "2% loss"
        ]
      },
      {
        "qNum": 29,
        "title": "Equivalent Single Discount for Successive Discounts",
        "problem": "Find the single equivalent discount for three successive discounts of 20%, 10%, and 5%.",
        "concept": "Net multiplying factor: $\\text{MF}_{net} = (1 - d_1)(1 - d_2)(1 - d_3)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "31.6%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "36.6%",
          "31.6%",
          "26.6%",
          "63.2%"
        ]
      },
      {
        "qNum": 30,
        "title": "Markup and Discount Golden Relation",
        "problem": "A shopkeeper marks his goods at 40% above the cost price and allows a discount of 25% on the marked price. Find his profit or loss percentage.",
        "concept": "Golden Formula: $\\frac{SP}{CP} = (1 + m)(1 - d)$, or $\\text{Profit}\\% = m - d - \\frac{md}{100}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "5% profit",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 31,
        "title": "Determining Markup to Guarantee Desired Profit",
        "problem": "By what percentage above the cost price must an article be marked so that after allowing a discount of 20%, a profit of 12% is still made?",
        "concept": "Formula: $\\frac{MP}{CP} = \\frac{100 + P\\%}{100 - D\\%}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "40%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "45%",
          "35%",
          "80%",
          "40%"
        ]
      },
      {
        "qNum": 32,
        "title": "Buy X Get Y Free Discount Percentage",
        "problem": "A store offers a scheme: 'Buy 5, Get 3 Free'. What is the effective discount percentage offered to the customer?",
        "concept": "Discount Percentage $= \\frac{\\text{Free Items}}{\\text{Total Items Given}} \\times 100\\%$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "37.5%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "37.5%",
          "42.5%",
          "32.5%",
          "75%"
        ]
      },
      {
        "qNum": 33,
        "title": "Combined Buy X Get Y Free Plus Additional Discount",
        "problem": "A clothing brand announces 'Buy 4, Get 1 Free' and gives an additional cash discount of 20% on the bill. Find the net effective discount percentage.",
        "concept": "Chain of discounts: $\\text{MF}_{net} = \\text{MF}_{scheme} \\times \\text{MF}_{cash}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "36%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "41%",
          "36%",
          "31%",
          "72%"
        ]
      },
      {
        "qNum": 34,
        "title": "Faulty Balance (Dishonest Shopkeeper Selling at CP)",
        "problem": "A dishonest grocer professes to sell his pulses at cost price, but uses a false weight of 900 grams for a 1 kg weight. Find his percentage profit.",
        "concept": "Profit Percentage for false weight $= \\frac{\\text{Error}}{\\text{True Weight} - \\text{Error}} \\times 100\\% = \\frac{\\text{Goods Saved}}{\\text{Goods Given}} \\times 100\\%$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "11.11% (or 11 1/9%)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "16.11%",
          "6.109999999999999%",
          "11.11% (or 11 1/9%)",
          "22.22%"
        ]
      },
      {
        "qNum": 35,
        "title": "Dishonest Shopkeeper with Markup, Discount and False Weight",
        "problem": "A dealer marks his goods 20% above the cost price, allows a discount of 10%, and uses a false weight of 800 grams instead of 1 kg. What is his overall profit percentage?",
        "concept": "Net Multiplying Factor = $\\text{MF}_{markup} \\times \\text{MF}_{discount} \\times \\text{MF}_{weight}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "35%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 36,
        "title": "Cheating in Both Buying and Selling",
        "problem": "A fraudulent merchant cheats by 10% in buying (using a heavy weight) and also cheats by 10% in selling (using a light weight). If he sells at cost price, what is his overall profit percentage?",
        "concept": "Buying cheat: gets 1100g for the price of 1000g. Selling cheat: gives 900g for the price of 1000g.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "22.22% (or 22 2/9%)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "22.22% (or 22 2/9%)",
          "27.22%",
          "17.22%",
          "44.44%"
        ]
      },
      {
        "qNum": 37,
        "title": "Selling Articles: Profit Expressed in Terms of SP or CP",
        "problem": "By selling 33 meters of cloth, a shopkeeper gains the selling price of 11 meters. Find his profit percentage.",
        "concept": "Equation: $\\text{Profit} = 33 \\times SP - 33 \\times CP = 11 \\times SP$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "50%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "55%",
          "50%",
          "45%",
          "100%"
        ]
      },
      {
        "qNum": 38,
        "title": "Selling Articles: Loss Expressed in Terms of SP",
        "problem": "By selling 45 lemons, a vendor loses the selling price of 5 lemons. Find his loss percentage.",
        "concept": "Equation: $\\text{Loss} = 45 \\times CP - 45 \\times SP = 5 \\times SP$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "15%",
          "5%",
          "10%",
          "20%"
        ]
      },
      {
        "qNum": 39,
        "title": "Cost Price of Articles Equal to Selling Price of Another Quantity",
        "problem": "If the cost price of 15 articles is equal to the selling price of 12 articles, find the profit percentage.",
        "concept": "Equation: $15 \\times CP = 12 \\times SP \\implies \\frac{SP}{CP} = \\frac{15}{12}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "20%",
          "33.33%",
          "50%",
          "25%"
        ]
      },
      {
        "qNum": 40,
        "title": "Weighted Profit Across Fractional Portions",
        "problem": "A trader sells two-thirds of his stock at a profit of 24% and the remaining stock at a loss of 6%. What is his overall profit percentage on the whole transaction?",
        "concept": "Weighted average of profit percentages: $\\text{Net Profit}\\% = w_1 P_1 + w_2 P_2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "14%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 41,
        "title": "Fixed Recovery Quantity with Variable Units",
        "problem": "A fruit seller buys oranges at 5 for ₹10 and sells them at 4 for ₹10. Find his profit percentage.",
        "concept": "Equalize the number of items or find the unit CP and unit SP.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "20%",
          "25%",
          "33.33%",
          "50%"
        ]
      },
      {
        "qNum": 42,
        "title": "Cross-Rate Buying from Two Sources and Mixing",
        "problem": "A person buys some pens at 6 for ₹5 and an equal number of pens at 5 for ₹6. He mixes them and sells them at 11 for ₹11. Find his profit or loss percentage.",
        "concept": "Equalize quantity bought from both sources using LCM of 6 and 5 = 30.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "1 39/61% loss (or ~1.64% loss)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "1% profit",
          "2% loss",
          "1 39/61% loss (or ~1.64% loss)",
          "No profit, no loss"
        ]
      },
      {
        "qNum": 43,
        "title": "Cash Discount vs Credit Margin",
        "problem": "A publisher gives a 30% discount on the list price of a book to a bookseller. If the bookseller sells it at the list price, what is his profit percentage?",
        "concept": "List Price is SP for the bookseller, and discounted price is CP.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "42.85% (or 42 6/7%)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "47.85%",
          "37.85%",
          "85.7%",
          "42.85% (or 42 6/7%)"
        ]
      },
      {
        "qNum": 44,
        "title": "Selling at Successive Markups with Target Net Profit",
        "problem": "A manufacturer sells an article to a wholesaler at 10% profit, the wholesaler sells it to a retailer at 20% profit, and the retailer sells it to a customer for ₹3300 at a 25% profit. Find the cost of manufacture.",
        "concept": "Chain of compounding multipliers: $CP_{mfg} \\times 1.10 \\times 1.20 \\times 1.25 = 3300$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹2000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹2000",
          "₹1,600",
          "₹2,400",
          "₹3,000"
        ]
      },
      {
        "qNum": 45,
        "title": "Discount Calculation with Unknown Second Discount",
        "problem": "The marked price of a watch is ₹1600. After two successive discounts, it is sold for ₹1224. If the first discount is 10%, find the second discount percentage.",
        "concept": "Apply the first discount to find the intermediate price, then calculate the second discount on that intermediate price.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "15%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Profit, Loss, Marked Price & Faulty Balances",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Profit+Loss+Discounts+Faulty+Weights+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Effective Multiplying Factors, Successive Discounts & True vs Claimed Weight Ratios",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_sfft",
    "title": "Linear & Diophantine Equations (SFFT)",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Systems of Simultaneous Linear Equations: First Principles</h4>\n<div class='theory-block'>Consider a system of two linear equations in two variables:\n$$\\begin{aligned}\na_1 x + b_1 y &= c_1 \\\\\na_2 x + b_2 y &= c_2\n\\end{aligned}$$\n\nGeometrically, each equation represents a straight line in the Cartesian plane $\\mathbb{R}^2$. The solutions represent points of intersection:\n\n| Condition on Coefficients | Geometric Nature | Nature of Solution | Algebraic Consistency |\n| :---: | :---: | :---: | :---: |\n| $\\mathbf{\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}}$ | **Intersecting Lines** at a single unique point | **Unique Solution** (Consistent) | Slopes are different ($m_1 \\ne m_2$) |\n| $\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}}$ | **Parallel Lines** (Never intersect) | **No Solution** (Inconsistent) | Equal slopes, different y-intercepts |\n| $\\mathbf{\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}}$ | **Coincident Lines** (Overlap completely) | **Infinitely Many Solutions** (Dependent) | Identical lines |\n\n---</div>\n<h4>2. Linear Diophantine Equations ($ax + by = c$): First Principles</h4>\n<div class='theory-block'>A linear equation where coefficients $a, b, c \\in \\mathbb{Z}$ and solutions are restricted strictly to **integers** ($x, y \\in \\mathbb{Z}$).\n\n### 2.1 Bézout's Identity & Condition for Existence of Integer Solutions\nThe linear Diophantine equation $ax + by = c$ has integer solutions if and only if:\n$$\\mathbf{\\gcd(a, b) \\text{ divides } c}$$\n* **Proof:** Let $g = \\gcd(a, b)$. Then $a = g \\cdot a'$ and $b = g \\cdot b'$.  \n  For any integers $x, y$: $ax + by = g(a'x + b'y)$. Since $(a'x + b'y)$ is an integer, the left-hand side is always a multiple of $g$. Therefore, $c$ must be divisible by $g$. If $g \\nmid c$, no integer solution can ever exist.\n\n---\n\n### 2.2 General Solution Parameterization\nOnce a single base solution $(x_0, y_0)$ is found:\n$$\\mathbf{x = x_0 + \\left(\\frac{b}{g}\\right) t, \\qquad y = y_0 - \\left(\\frac{a}{g}\\right) t \\quad (t \\in \\mathbb{Z})}$$\nwhere $g = \\gcd(a, b)$.\n* Notice that as $t$ increases by $1$, $x$ increases by $\\frac{b}{g}$ and $y$ decreases by $\\frac{a}{g}$, maintaining $a x + b y = c$.\n\n---\n\n### 2.3 Counting Non-Negative Integer Solutions ($x \\ge 0, y \\ge 0$)\nTo find the number of non-negative integer pairs $(x, y)$ satisfying $ax + by = c$ (assume $\\gcd(a, b) = 1$):\n\n#### Step-by-Step Algorithm:\n1. Find the smallest non-negative integer $x_0$ satisfying the equation (by testing $x = 0, 1, 2, \\dots, b-1$).</div>\n<h4>3. Simon's Favorite Factoring Trick (SFFT) for Rectangular Systems</h4>\n<div class='theory-block'>For non-linear equations containing the product term $xy$:\n$$xy + ax + by = c$$\n\n### 3.1 First-Principle Derivation:\nGroup $x$ from the first two terms:\n$$x(y + a) + by = c$$\nTo factor out $(y + a)$ from the remaining terms, add $ab$ to both sides:\n$$x(y + a) + by + ab = c + ab$$\n$$x(y + a) + b(y + a) = c + ab$$\n\n$$\\mathbf{(x + b)(y + a) = c + ab}$$\n\n#### Application Protocol:\n1. Transform equation into $(x + b)(y + a) = K$.\n2. Factorize constant $K$ into all possible integer factor pairs $(d_1, d_2)$ such that $d_1 \\times d_2 = K$.\n3. Each factor pair yields a unique solution: $x = d_1 - b$ and $y = d_2 - a$.\n\n---</div>\n<h4>4. Digit Reversal Problems & Place-Value Symmetries</h4>\n<div class='theory-block'>Let a 2-digit number be $N = 10a + b$ ($a \\in \\{1, \\dots, 9\\}, b \\in \\{0, \\dots, 9\\}$).  \nLet its digit-reversed counterpart be $N' = 10b + a$.\n\n1. **Difference of Number and Reversal:**\n   $$N - N' = (10a + b) - (10b + a) = 9(a - b)$$\n   * The difference is **strictly a multiple of 9**.\n   * Dividing the difference by 9 gives the difference of the digits: $\\mathbf{\\frac{N - N'}{9} = a - b}$.\n2. **Sum of Number and Reversal:**\n   $$N + N' = (10a + b) + (10b + a) = 11(a + b)$$\n   * The sum is **strictly a multiple of 11**.\n   * Dividing the sum by 11 gives the sum of the digits: $\\mathbf{\\frac{N + N'}{11} = a + b}$.\n\n---</div>",
    "formulas": [
      {
        "formula": "\\begin{aligned}\na_1 x + b_1 y &= c_1 \\\\\na_2 x + b_2 y &= c_2\n\\end{aligned}"
      },
      {
        "formula": "\\mathbf{\\gcd(a, b) \\text{ divides } c}"
      },
      {
        "formula": "\\mathbf{x = x_0 + \\left(\\frac{b}{g}\\right) t, \\qquad y = y_0 - \\left(\\frac{a}{g}\\right) t \\quad (t \\in \\mathbb{Z})}"
      },
      {
        "formula": "x_k = x_0 + b \\cdot k, \\qquad y_k = y_{\\max} - a \\cdot k"
      },
      {
        "formula": "k \\le \\left\\lfloor \\frac{y_{\\max}}{a} \\right\\rfloor"
      },
      {
        "formula": "\\mathbf{\\text{Count} = \\left\\lfloor \\frac{y_{\\max}}{a} \\right\\rfloor + 1 = \\left\\lfloor \\frac{c}{a \\cdot b} \\right\\rfloor \\text{ or } \\left\\lfloor \\frac{c}{a \\cdot b} \\right\\rfloor + 1}"
      }
    ],
    "questions": [
      {
        "qNum": 1,
        "title": "Consistency Conditions for Two-Variable Linear Systems",
        "problem": "For what value of $k$ does the system of equations $(k-1)x + 3y = 7$ and $2x + (k+4)y = 14$ have infinitely many solutions?",
        "concept": "For a system $a_1 x + b_1 y = c_1$ and $a_2 x + b_2 y = c_2$ to have infinitely many solutions (coincident lines): $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "k = 2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "k = 3",
          "k = 2",
          "k = 1",
          "k = 4"
        ]
      },
      {
        "qNum": 2,
        "title": "Parametric System with No Solution (Parallel Lines)",
        "problem": "Find all values of $m$ for which the system of equations $mx + 4y = m - 2$ and $x + my = 3$ has no solution.",
        "concept": "System has no solution if lines are parallel and distinct: $\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "m = 2 and m = -2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 m =  and m = -2",
          "1 m =  and m = -2",
          "m = 2 and m = -2",
          "4 m =  and m = -2"
        ]
      },
      {
        "qNum": 3,
        "title": "Linear Diophantine Base Solution and Step Sizes",
        "problem": "Find the general integer solution $(x, y)$ for the linear Diophantine equation $7x + 11y = 200$.",
        "concept": "For $ax + by = c$, if $(x_0, y_0)$ is a particular solution, the general integer solution is $x = x_0 + bt$, $y = y_0 - at$, where $t \\in \\mathbb{Z}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x = 5 + 11t, y = 15 - 7t for t in Z",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "6 x =  + 11t, y = 15 - 7t for t in Z",
          "4 x =  + 11t, y = 15 - 7t for t in Z",
          "7 x =  + 11t, y = 15 - 7t for t in Z",
          "x = 5 + 11t, y = 15 - 7t for t in Z"
        ]
      },
      {
        "qNum": 4,
        "title": "Number of Positive Integer Solutions to $7x + 11y = 500$",
        "problem": "How many pairs of positive integers $(x, y)$ satisfy the equation $7x + 11y = 500$?",
        "concept": "General solution: $x = x_0 + 11t$, $y = y_0 - 7t$. Positive integer solutions require $x > 0$ and $y > 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "6 pairs",
          "7 pairs",
          "5 pairs",
          "8 pairs"
        ]
      },
      {
        "qNum": 5,
        "title": "Number of Non-Negative Integer Solutions to $5x + 8y = 120$",
        "problem": "Find the number of non-negative integer solutions to $5x + 8y = 120$.",
        "concept": "Non-negative means $x \\ge 0$ and $y \\ge 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "4 solutions",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 6,
        "title": "Three-Variable Linear Diophantine Equation",
        "problem": "Find the number of positive integer solutions $(x, y, z)$ to the equation $x + 2y + 5z = 40$.",
        "concept": "Fix the variable with the largest coefficient ($z$) and count the number of integer solutions for the remaining two variables.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "65 solutions",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "78 solutions",
          "52 solutions",
          "65 solutions",
          "98 solutions"
        ]
      },
      {
        "qNum": 7,
        "title": "Optimization Under Linear Diophantine Constraints",
        "problem": "If $x$ and $y$ are positive integers such that $7x + 4y = 200$, find the maximum possible value of $3x + 5y$.",
        "concept": "Express the objective function in terms of a single parameter $t$ from the general solution of the Diophantine equation.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "227",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "272",
          "182",
          "341",
          "227"
        ]
      },
      {
        "qNum": 8,
        "title": "Budget Allocation Word Problem with Diophantine Model",
        "problem": "A student spent exactly ₹500 on buying pens at ₹14 each and notebooks at ₹23 each. If he bought at least one of each item, what is the maximum number of pens he could have purchased?",
        "concept": "Model as $14p + 23n = 500$, where $p, n \\in \\mathbb{Z}^+$. To maximize $p$, we must minimize $n$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "16 pens",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "16 pens",
          "19 pens",
          "13 pens",
          "24 pens"
        ]
      },
      {
        "qNum": 9,
        "title": "Coin Count & Value System with Constraints",
        "problem": "A bag contains ₹2, ₹5, and ₹10 coins with a total value of ₹105. If there are 25 coins in total and at least two coins of each denomination, find the maximum possible number of ₹10 coins.",
        "concept": "System: $x + y + z = 25$ and $2x + 5y + 10z = 105$, with $x, y, z \\ge 2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "5",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "6",
          "5",
          "4",
          "7"
        ]
      },
      {
        "qNum": 10,
        "title": "Symmetric Non-Linear System via Polynomial Roots",
        "problem": "Solve the system of equations for real numbers: $x + y + z = 9$, $xy + yz + zx = 26$, $xyz = 24$.",
        "concept": "By Vieta's formulas, $x, y, z$ are the roots of the cubic polynomial $t^3 - (x+y+z)t^2 + (xy+yz+zx)t - xyz = 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "{2, 3, 4} (all permutations)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 11,
        "title": "Elimination Trick for Undetermined Linear Systems",
        "problem": "If $3x + 4y + 2z = 45$ and $5x + 7y + 4z = 79$, find the value of $x + y + z$.",
        "concept": "Find multipliers $k_1$ and $k_2$ such that $k_1(3x + 4y + 2z) + k_2(5x + 7y + 4z) = 1(x + y + z)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "x + y = 11 (Individual x+y+z is non-unique without 3rd equation)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "13 x + y =  (Individual x+y+z is non-unique without 3rd equation)",
          "9 x + y =  (Individual x+y+z is non-unique without 3rd equation)",
          "17 x + y =  (Individual x+y+z is non-unique without 3rd equation)",
          "x + y = 11 (Individual x+y+z is non-unique without 3rd equation)"
        ]
      },
      {
        "qNum": 12,
        "title": "Linear Combination of 3 Equations in 4 Variables",
        "problem": "If $a + b + c + d = 10$, $2a + b - c + 2d = 14$, and $a + 2b + 3c + d = 18$, find the value of $a + d$.",
        "concept": "Add equations symmetrically to isolate the group $(a + d)$ from $(b + c)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "0",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "0",
          "1",
          "2",
          "-1"
        ]
      },
      {
        "qNum": 13,
        "title": "Simon's Favorite Factoring Trick (SFFT)",
        "problem": "Find the number of integral pairs $(x, y)$ that satisfy the equation $xy - 3x - 2y = 10$.",
        "concept": "Factor into $(x - a)(y - b) = c$: $xy - 3x - 2y + 6 = 10 + 6 = 16 \\implies (x - 2)(y - 3) = 16$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "11 pairs",
          "10 pairs",
          "9 pairs",
          "12 pairs"
        ]
      },
      {
        "qNum": 14,
        "title": "SFFT with Leading Coefficients",
        "problem": "How many integer pairs $(x, y)$ satisfy $2xy + 3x - 5y = 25$?",
        "concept": "Multiply by the coefficient of $xy$ (which is 2): $4xy + 6x - 10y = 50 \\implies 2x(2y + 3) - 5(2y + 3) = 50 - 15 = 35 \\implies (2x - 5)(2y + 3) = 35$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "8 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9 pairs",
          "7 pairs",
          "8 pairs",
          "10 pairs"
        ]
      },
      {
        "qNum": 15,
        "title": "Harmonic Unit Fraction Integer Pairs: $1/x + 1/y = 1/N$",
        "problem": "Find the number of positive integer pairs $(x, y)$ that satisfy $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{12}$.",
        "concept": "Transform to SFFT: $xy - 12x - 12y = 0 \\implies (x - 12)(y - 12) = 12^2 = 144$. The number of positive integer solutions is the number of factors of $N^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "15 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 16,
        "title": "Ordered vs Unordered Solutions in Unit Fractions",
        "problem": "Find the number of unordered pairs of positive integers $\\{x, y\\}$ that satisfy $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{20}$.",
        "concept": "Unordered pairs means $\\{x, y\\}$ where order does not matter ($x \\le y$). Formula: $\\frac{d(N^2) + 1}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "8 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "8 pairs",
          "9 pairs",
          "7 pairs",
          "10 pairs"
        ]
      },
      {
        "qNum": 17,
        "title": "Total Integer Solutions (Including Negative) for $1/x + 1/y = 1/N$",
        "problem": "Find the total number of integer pairs $(x, y)$ (both positive and negative, $x, y \\neq 0$) satisfying $\\frac{1}{x} + \\frac{1}{y} = \\frac{1}{6}$.",
        "concept": "$(x - 6)(y - 6) = 36$. For any factor $d$ of 36, $x = 6 + d$. Since $x \\neq 0$, $d \\neq -6$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "17 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "20 pairs",
          "17 pairs",
          "14 pairs",
          "26 pairs"
        ]
      },
      {
        "qNum": 18,
        "title": "Linear System with Absolute Value Constraints",
        "problem": "How many integer pairs $(x, y)$ satisfy the inequality $|2x - 3y| + |2x + 3y| \\le 12$?",
        "concept": "Use change of variables: Let $u = 2x - 3y$ and $v = 2x + 3y$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "27 pairs",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "32 pairs",
          "22 pairs",
          "27 pairs",
          "41 pairs"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Linear Equations, Diophantine & SFFT Factorization",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Diophantine+Linear+Equations+SFFT+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Simon's Favorite Factoring Trick, Integral Solutions of ax + by = c & Non-Negative Roots",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_factors",
    "title": "Factors, Divisors & Coprime Pairs",
    "domain": "Number System",
    "tier": "Tier A",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Canonical Prime Factorization & Combinatorial Derivation</h4>\n<div class='theory-block'>By the Fundamental Theorem of Arithmetic, every integer $N > 1$ can be expressed uniquely as a product of prime powers:\n$$\\mathbf{N = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c} \\dots p_k^{m}}$$\nwhere $p_1 < p_2 < \\dots < p_k$ are distinct prime numbers, and $a, b, c, \\dots, m \\in \\mathbb{N}$.\n\n### 1.1 Combinatorial Derivation: Total Number of Divisors $\\tau(N)$\nAny divisor $d$ of $N$ must be of the form:\n$$d = p_1^{x_1} \\cdot p_2^{x_2} \\cdot p_3^{x_3} \\dots p_k^{x_k}$$\nwhere each exponent $x_i$ can take any integer value such that $0 \\le x_i \\le a_i$.\n* For prime $p_1$, $x_1 \\in \\{0, 1, 2, \\dots, a\\} \\implies (a + 1)$ independent choices.\n* For prime $p_2$, $x_2 \\in \\{0, 1, 2, \\dots, b\\} \\implies (b + 1)$ independent choices.\n* In general, for prime $p_i$, there are $(a_i + 1)$ independent choices.\n\nBy the Fundamental Principle of Counting (Multiplication Rule):\n$$\\mathbf{\\tau(N) = (a + 1)(b + 1)(c + 1) \\dots (m + 1)}$$\n\n---</div>\n<h4>2. Advanced Subsets of Divisors</h4>\n<div class='theory-block'>Let $N = 2^a \\cdot p_2^b \\cdot p_3^c \\dots p_k^m$ (where $p_2, p_3, \\dots$ are odd primes).\n\n### 2.1 Odd vs. Even Divisors\n1. **Number of Odd Divisors:**\n   An odd divisor cannot contain any factor of $2$. Therefore, the exponent of $2$ must be strictly $0$ ($x_1 = 0$, only $1$ choice).\n   $$\\mathbf{\\tau_{\\text{odd}}(N) = 1 \\times (b + 1)(c + 1) \\dots (m + 1)}$$\n2. **Number of Even Divisors:**\n   An even divisor must contain at least one factor of $2$. Hence $x_1 \\in \\{1, 2, \\dots, a\\}$ ($a$ choices, excluding $x_1 = 0$).\n   $$\\mathbf{\\tau_{\\text{even}}(N) = a(b + 1)(c + 1) \\dots (m + 1)}$$\n   * **Verification:** $\\tau_{\\text{total}}(N) = \\tau_{\\text{even}}(N) + \\tau_{\\text{odd}}(N) = a \\prod(a_i + 1) + 1 \\prod(a_i + 1) = (a + 1)\\prod(a_i + 1)$. $\\blacksquare$\n\n---\n\n### 2.2 Perfect Squares, Cubes & Higher Powers\nA divisor $d = p_1^{x_1} p_2^{x_2} \\dots p_k^{x_k}$ is:\n1. **A Perfect Square** if all exponents $x_i$ are even integers ($x_i \\in \\{0, 2, 4, 6, \\dots\\}$).\n   $$\\mathbf{\\text{Square Divisors} = \\left(\\left\\lfloor \\frac{a}{2} \\right\\rfloor + 1\\right)\\left(\\left\\lfloor \\frac{b}{2} \\right\\rfloor + 1\\right)\\dots\\left(\\left\\lfloor \\frac{m}{2} \\right\\rfloor + 1\\right)}$$\n2. **A Perfect Cube** if all exponents $x_i$ are multiples of 3 ($x_i \\in \\{0, 3, 6, \\dots\\}$).\n   $$\\mathbf{\\text{Cube Divisors} = \\left(\\left\\lfloor \\frac{a}{3} \\right\\rfloor + 1\\right)\\left(\\left\\lfloor \\frac{b}{3} \\right\\rfloor + 1\\right)\\dots\\left(\\left\\lfloor \\frac{m}{3} \\right\\rfloor + 1\\right)}$$\n\n---\n\n### 2.3 The \"Pull-Out\" Technique for Multiples of $K$</div>\n<h4>3. Sum, Product & Reciprocals of Divisors</h4>\n<div class='theory-block'>### 3.1 First-Principle Derivation: Sum of All Divisors $\\sigma(N)$\nExpand the algebraic product of geometric series:\n$$\\sigma(N) = \\left(1 + p_1 + p_1^2 + \\dots + p_1^a\\right)\\left(1 + p_2 + p_2^2 + \\dots + p_2^b\\right)\\dots\\left(1 + p_k + \\dots + p_k^m\\right)$$\nWhen multiplied out, every single term formed by choosing one term from each bracket is a unique divisor of $N$, and their sum is the total sum of all divisors.  \nSumming each geometric progression:\n$$\\mathbf{\\sigma(N) = \\left(\\frac{p_1^{a+1} - 1}{p_1 - 1}\\right)\\left(\\frac{p_2^{b+1} - 1}{p_2 - 1}\\right)\\dots\\left(\\frac{p_k^{m+1} - 1}{p_k - 1}\\right)}$$\n\n---\n\n### 3.2 Product of All Divisors: Pairing Theorem\n* **First-Principle Proof:**  \n  Every divisor $d_i$ can be paired with a unique complementary divisor $\\frac{N}{d_i}$ such that:\n  $$d_i \\times \\frac{N}{d_i} = N$$\n  Let the $\\tau(N)$ divisors be $d_1, d_2, \\dots, d_{\\tau(N)}$.  \n  Let $P = \\prod_{i=1}^{\\tau(N)} d_i$.  \n  Multiplying the product by itself in reverse order:\n  $$P^2 = \\prod_{i=1}^{\\tau(N)} \\left(d_i \\times \\frac{N}{d_i}\\right) = \\prod_{i=1}^{\\tau(N)} N = N^{\\tau(N)}$$\n  Taking the square root:\n  $$\\mathbf{\\text{Product of Divisors } = N^{\\frac{\\tau(N)}{2}}}$$\n\n* **Note on Perfect Squares:** If $N$ is a perfect square, $\\tau(N)$ is odd. The middle factor is $\\sqrt{N}$.  \n  $N^{\\tau(N)/2} = (\\sqrt{N})^{\\tau(N)}$, which is strictly an integer. The formula holds universally.</div>\n<h4>4. Factor Pairs & Diophantine Equations</h4>\n<div class='theory-block'>### 4.1 Number of Ways to Express $N$ as Product of Two Factors ($A \\times B = N$)\n1. **If $N$ is NOT a perfect square ($\\tau(N)$ is even):**\n   $$\\text{Ways} = \\mathbf{\\frac{\\tau(N)}{2}}$$\n2. **If $N$ IS a perfect square ($\\tau(N)$ is odd):**\n   * Including $A = B = \\sqrt{N}$:\n     $$\\text{Ways} = \\mathbf{\\frac{\\tau(N) + 1}{2}}$$\n   * As product of two **distinct** factors ($A \\ne B$):\n     $$\\text{Ways} = \\mathbf{\\frac{\\tau(N) - 1}{2}}$$\n\n---\n\n### 4.2 Product of Two Coprime Factors ($\\gcd(A, B) = 1$)\nLet $N$ have $k$ **distinct prime factors**.  \n$$\\mathbf{\\text{Number of Coprime Pairs } (A, B) = 2^{k - 1}}$$\n\n* **First-Principle Proof:**  \n  For $\\gcd(A, B) = 1$, each prime power $p_i^{a_i}$ cannot be split between $A$ and $B$ (if $p_i$ divides both $A$ and $B$, $\\gcd(A, B) \\ge p_i > 1$).  \n  Hence, each entire prime power block $p_i^{a_i}$ must be assigned either entirely to $A$ or entirely to $B$ ($2$ choices per prime power block).  \n  Total ordered pairs $(A, B) = 2^k$.  \n  Since $A \\times B$ is unordered (i.e. $\\{A, B\\} = \\{B, A\\}$), dividing by $2$:\n  $$\\text{Unordered Coprime Pairs} = \\frac{2^k}{2} = \\mathbf{2^{k-1}} \\quad \\blacksquare$$\n\n---</div>",
    "formulas": [
      {
        "formula": "\\mathbf{N = p_1^{a} \\cdot p_2^{b} \\cdot p_3^{c} \\dots p_k^{m}}"
      },
      {
        "formula": "d = p_1^{x_1} \\cdot p_2^{x_2} \\cdot p_3^{x_3} \\dots p_k^{x_k}"
      },
      {
        "formula": "\\mathbf{\\tau(N) = (a + 1)(b + 1)(c + 1) \\dots (m + 1)}"
      },
      {
        "formula": "\\mathbf{\\tau_{\\text{odd}}(N) = 1 \\times (b + 1)(c + 1) \\dots (m + 1)}"
      },
      {
        "formula": "\\mathbf{\\tau_{\\text{even}}(N) = a(b + 1)(c + 1) \\dots (m + 1)}"
      },
      {
        "formula": "\\mathbf{\\text{Square Divisors} = \\left(\\left\\lfloor \\frac{a}{2} \\right\\rfloor + 1\\right)\\left(\\left\\lfloor \\frac{b}{2} \\right\\rfloor + 1\\right)\\dots\\left(\\left\\lfloor \\frac{m}{2} \\right\\rfloor + 1\\right)}"
      }
    ],
    "questions": [
      {
        "qNum": 21,
        "title": "Divisibility by Composite Number: 72",
        "problem": "If the 9-digit number $785x3678y$ is divisible by 72, find the value of $(x - y)$ for the largest possible value of $y$.",
        "concept": "Divisibility by 72 requires divisibility by both 8 and 9 (since $\\gcd(8, 9) = 1$).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3",
          "2",
          "1",
          "4"
        ]
      },
      {
        "qNum": 22,
        "title": "Divisibility by 88",
        "problem": "If a 7-digit number $4x5678y$ is divisible by 88, find $x + y$.",
        "concept": "Divisibility by 88 requires divisibility by 8 and 11.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "10",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "11",
          "9",
          "10",
          "12"
        ]
      },
      {
        "qNum": 23,
        "title": "Square Free Divisors",
        "problem": "Find the number of square-free divisors of $N = 2^4 \\times 3^3 \\times 5^2 \\times 7^1$.",
        "concept": "A divisor is square-free if it is not divisible by any square $> 1$, meaning each prime exponent in the divisor is either 0 or 1. If $N$ has $k$ distinct prime factors, there are $2^k$ square-free divisors.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "16",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "19",
          "13",
          "24",
          "16"
        ]
      },
      {
        "qNum": 24,
        "title": "Divisors with Remainder Constraints",
        "problem": "How many natural numbers $n$ divide 1000 leaving a remainder of 40?",
        "concept": "If $1000 \\equiv 40 \\pmod n$, then $n$ must divide $1000 - 40 = 960$, AND $n > 40$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "12",
          "14",
          "10",
          "18"
        ]
      },
      {
        "qNum": 25,
        "title": "Product of Factors Ending in Zero",
        "problem": "How many factors of $N = 2^4 \\times 3^3 \\times 5^3$ end with at least one zero?",
        "concept": "Ending in zero means divisible by $10 = 2^1 \\times 5^1$. Factor out $2^1 \\times 5^1$ and count factors of remainder.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "48",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 26,
        "title": "Unit Digit of Large Power: Cyclicity of 7",
        "problem": "Find the unit digit of $7^{2023}$.",
        "concept": "Cyclicity of 7 is 4: $7^1 \\to 7, 7^2 \\to 9, 7^3 \\to 3, 7^4 \\to 1$. Divide exponent by 4 to find remainder.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4",
          "2",
          "3",
          "5"
        ]
      },
      {
        "qNum": 27,
        "title": "Unit Digit of Complex Expression",
        "problem": "Find the unit digit of $3^{65} \\times 6^{59} \\times 7^{71}$.",
        "concept": "Find unit digit of each component independently, then multiply modulo 10.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "5",
          "3",
          "6",
          "4"
        ]
      },
      {
        "qNum": 28,
        "title": "Unit Digit of Power-Tower ($a^{b^c}$)",
        "problem": "Find the unit digit of $2^{3^{4^5}}$.",
        "concept": "Unit digit of 2 has cyclicity 4. We must find the power $E = 3^{4^5} \\pmod 4$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2",
          "3",
          "1",
          "4"
        ]
      },
      {
        "qNum": 29,
        "title": "Last Two Digits of Numbers Ending in 1",
        "problem": "Find the last two digits of $31^{84}$.",
        "concept": "For $(10a + 1)^n$, unit digit is always 1, and tens digit is $(a \\times \\text{unit digit of } n) \\pmod{10}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "21",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "25",
          "21",
          "17",
          "32"
        ]
      },
      {
        "qNum": 30,
        "title": "Last Two Digits of Numbers Ending in 3, 7, 9",
        "problem": "Find the last two digits of $7^{2008}$.",
        "concept": "Convert to base ending in 1 using $7^4 = 2401 \\equiv 01 \\pmod{100}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "01",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 31,
        "title": "Last Two Digits of Powers of 2",
        "problem": "Find the last two digits of $2^{54}$.",
        "concept": "Core Anchor: $2^{10} = 1024 \\equiv 24 \\pmod{100}$. Powers of 24: $24^{\\text{even}} \\equiv 76$, $24^{\\text{odd}} \\equiv 24 \\pmod{100}$. Also $76 \\times 2^k \\equiv 2^k \\pmod{100}$ for $k \\ge 2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "84",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "101",
          "67",
          "126",
          "84"
        ]
      },
      {
        "qNum": 32,
        "title": "Last Two Digits of Non-Standard Even Base",
        "problem": "Find the last two digits of $64^{23}$.",
        "concept": "Express in powers of 2: $64^{23} = (2^6)^{23} = 2^{138}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "44",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "44",
          "53",
          "35",
          "66"
        ]
      },
      {
        "qNum": 33,
        "title": "Last Two Digits of Number Ending in 5",
        "problem": "Find the tens digit of $75^{46}$.",
        "concept": "Rule for $25$ and $75$: If tens digit is odd and power is even, $(75)^{\\text{even}} \\equiv 25 \\pmod{100}$. $(75)^{\\text{odd}} \\equiv 75 \\pmod{100}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "2 (Last two digits are 25)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 (Last two digits are 25)",
          "2 (Last two digits are 25)",
          "1 (Last two digits are 25)",
          "4 (Last two digits are 25)"
        ]
      },
      {
        "qNum": 34,
        "title": "Last Non-Zero Digit of Factorial",
        "problem": "Find the last non-zero digit of $30!$.",
        "concept": "Formula for last non-zero digit of $n!$: $L(n) = 2^a \\cdot L(a) \\cdot L(b) \\pmod{10}$ where $n = 5a + b$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "8",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "9",
          "7",
          "8",
          "10"
        ]
      },
      {
        "qNum": 35,
        "title": "Last Two Digits of Sum of Factorials",
        "problem": "Find the last two digits of $1! + 2! + 3! + \\dots + 100!$.",
        "concept": "For $n \\ge 10$, $n!$ ends in at least two zeros ($10! = 3628800 \\equiv 00 \\pmod{100}$). Only terms up to $9!$ matter.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "13",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 36,
        "title": "Unit Digit of Sum of Powers",
        "problem": "Find the unit digit of $1^5 + 2^5 + 3^5 + \\dots + 99^5$.",
        "concept": "Euler's Totient / Fermat: By Fermat's Little Theorem, for any digit $d$, $d^5 \\equiv d \\pmod{10}$ (since cyclicity is 4, $5 \\equiv 1 \\pmod 4$).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "0",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "0",
          "1",
          "2",
          "-1"
        ]
      },
      {
        "qNum": 37,
        "title": "Cyclicity of Multi-Factor Product",
        "problem": "Find the unit digit of $(13)^{24} \\times (17)^{35} \\times (19)^{46}$.",
        "concept": "Evaluate individual unit digits:\n$3^{24} \\to 3^4 = 1$.\n$7^{35} \\to 7^3 = 3$.\n$9^{46} \\to 9^{\\text{even}} = 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4",
          "3",
          "2",
          "5"
        ]
      },
      {
        "qNum": 38,
        "title": "Tens Digit of Odd Powers of 5",
        "problem": "Find the last two digits of $125^{25}$.",
        "concept": "Any power of 5 greater than 1 ends in 25: $5^k \\equiv 25 \\pmod{100}$ for all $k \\ge 2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "30",
          "20",
          "25",
          "38"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Number System - Factors, Divisors & Euler Totient",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Factors+Divisors+Coprime+Pairs+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Prime Factorization Exponent Products, Odd/Even Divisors, Sum of Factors & Coprime Pairs",
      "duration": "Complete Playlist • 7 Parts"
    }
  },
  {
    "id": "qa_interest",
    "title": "SI, CI, Difference Formulas & Installments",
    "domain": "Arithmetic",
    "tier": "Tier A",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Simple vs. Compound Interest: Foundations & First Principles</h4>\n<div class='theory-block'>Let Principal be $P$, annual interest rate be $R\\%$, and time duration be $T$ years.\n\n### 1.1 Simple Interest (SI): Linear Growth\nIn Simple Interest, the interest is calculated **strictly on the original principal $P$** for each period.\n$$\\mathbf{\\text{SI} = \\frac{P \\times R \\times T}{100}}$$\n$$\\mathbf{\\text{Amount } (A) = P + \\text{SI} = P\\left(1 + \\frac{RT}{100}\\right)}$$\n* **The Constant Increment Property:**  \n  The interest accrued in every individual year is identical: $\\Delta I = \\frac{PR}{100}$.\n\n---\n\n### 1.2 Compound Interest (CI): Geometric Growth\nIn Compound Interest, interest accrued in each period is added to the principal to form the new principal base for subsequent periods (\"Interest on Interest\").\n$$\\mathbf{\\text{Amount } (A) = P \\left(1 + \\frac{R}{100}\\right)^T = P \\times M^T}$$\n$$\\mathbf{\\text{CI} = A - P = P \\left[\\left(1 + \\frac{R}{100}\\right)^T - 1\\right]}$$\nwhere $M = \\left(1 + \\frac{R}{100}\\right)$ is the annual Multiplying Factor.\n\n---</div>\n<h4>2. Mathematical Derivations of CI vs. SI Differences</h4>\n<div class='theory-block'>### 2.1 First-Principle Derivation: Difference for 2 Years ($D_2$)\n* For Year 1: $\\text{SI}_1 = \\text{CI}_1 = \\frac{PR}{100}$.\n* For Year 2:\n  * $\\text{SI}_2 = \\frac{PR}{100}$.\n  * $\\text{CI}_2 = \\frac{PR}{100} + \\text{Interest on Year 1 Interest} = \\frac{PR}{100} + \\left(\\frac{PR}{100} \\times \\frac{R}{100}\\right)$.\nSubtracting the two-year totals:\n$$(\\text{CI}_2 - \\text{SI}_2) = \\text{Interest on 1st Year's Interest}$$\n\n$$\\mathbf{D_2 = \\text{CI}_2 - \\text{SI}_2 = P\\left(\\frac{R}{100}\\right)^2}$$\n\n---\n\n### 2.2 First-Principle Derivation: Difference for 3 Years ($D_3$)\nExpanding the 3-year compound interest:\n$$\\text{CI}_3 = P\\left(1 + \\frac{R}{100}\\right)^3 - P = P\\left[\\frac{3R}{100} + 3\\left(\\frac{R}{100}\\right)^2 + \\left(\\frac{R}{100}\\right)^3\\right]$$\nSince $\\text{SI}_3 = \\frac{3PR}{100}$:\n$$\\mathbf{D_3 = \\text{CI}_3 - \\text{SI}_3 = 3P\\left(\\frac{R}{100}\\right)^2 + P\\left(\\frac{R}{100}\\right)^3 = P\\left(\\frac{R}{100}\\right)^2 \\left(3 + \\frac{R}{100}\\right)}$$\n\n$$\\mathbf{D_3 = 3 \\cdot D_2 + P\\left(\\frac{R}{100}\\right)^3}$$\n\n#### The Master Ratio Shortcut:\nDividing $D_3$ by $D_2$:\n$$\\mathbf{\\frac{D_3}{D_2} = \\frac{P(R/100)^2 (3 + R/100)}{P(R/100)^2} = 3 + \\frac{R}{100} = \\frac{300 + R}{100}}$$</div>\n<h4>3. Compounding Frequency Transformations</h4>\n<div class='theory-block'>When interest is compounded $k$ times per year:\n* The effective periodic rate becomes: $\\mathbf{r' = \\frac{R}{k}\\%}$.\n* The total number of conversion periods becomes: $\\mathbf{n' = k \\cdot T}$.\n\n$$\\mathbf{A = P\\left(1 + \\frac{R/k}{100}\\right)^{k \\cdot T}}$$\n\n| Frequency ($k$) | Rate per Period ($r'$) | Total Periods ($n'$) |\n| :---: | :---: | :---: |\n| **Half-Yearly (Semi-Annual, $k=2$)** | $\\frac{R}{2}\\%$ | $2T$ |\n| **Quarterly ($k=4$)** | $\\frac{R}{4}\\%$ | $4T$ |\n| **Monthly ($k=12$)** | $\\frac{R}{12}\\%$ | $12T$ |\n\n---</div>\n<h4>4. Equal Loan Installments (EMI Mechanics)</h4>\n<div class='theory-block'>### 4.1 Compound Interest Equal Annual Installments\nA borrower takes a loan of Principal $P$ and agrees to pay it off in $n$ equal annual installments of ₹$x$ each at rate $R\\%$:\n\n#### First-Principle Derivation (Discounted Present Value):\nThe sum of the present values of all future installment cash flows must equal the principal borrowed today:\n$$P = \\frac{x}{1 + \\frac{R}{100}} + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^2} + \\dots + \\frac{x}{\\left(1 + \\frac{R}{100}\\right)^n}$$\n\nLet $k = \\left(1 + \\frac{R}{100}\\right)$.  \nThis forms a geometric progression:\n$$\\mathbf{P = x \\left[\\frac{1}{k} + \\frac{1}{k^2} + \\dots + \\frac{1}{k^n}\\right] = x \\cdot \\left[\\frac{1 - k^{-n}}{k - 1}\\right]}$$\n\n* **For 2 Equal Installments ($n = 2$):**\n  $$\\mathbf{P = \\frac{x}{k} + \\frac{x}{k^2} = \\frac{x(k + 1)}{k^2} \\quad \\text{where } k = 1 + \\frac{R}{100}}$$\n\n---\n\n### 4.2 Simple Interest Installments (Debt Discharge)\nWhen a future accumulated debt $A$ due after $n$ years is discharged in $n$ equal annual installments of ₹$x$:\n$$\\mathbf{A = n \\cdot x + \\frac{x \\cdot R}{100} \\times \\frac{n(n - 1)}{2}}$$\n\n---</div>",
    "formulas": [
      {
        "formula": "\\mathbf{\\text{SI} = \\frac{P \\times R \\times T}{100}}"
      },
      {
        "formula": "\\mathbf{\\text{Amount } (A) = P + \\text{SI} = P\\left(1 + \\frac{RT}{100}\\right)}"
      },
      {
        "formula": "\\mathbf{\\text{Amount } (A) = P \\left(1 + \\frac{R}{100}\\right)^T = P \\times M^T}"
      },
      {
        "formula": "\\mathbf{\\text{CI} = A - P = P \\left[\\left(1 + \\frac{R}{100}\\right)^T - 1\\right]}"
      },
      {
        "formula": "(\\text{CI}_2 - \\text{SI}_2) = \\text{Interest on 1st Year's Interest}"
      },
      {
        "formula": "\\mathbf{D_2 = \\text{CI}_2 - \\text{SI}_2 = P\\left(\\frac{R}{100}\\right)^2}"
      }
    ],
    "questions": [
      {
        "qNum": 56,
        "title": "Simple Interest Doubling Time",
        "problem": "A sum of money doubles itself in 8 years at a certain rate of simple interest. In how many years will it become 4 times itself at the same rate?",
        "concept": "Under Simple Interest, Interest earned is $A - P = (n - 1)P$. Time is directly proportional to interest earned: $\\frac{T_1}{T_2} = \\frac{n_1 - 1}{n_2 - 1}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "24 years",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "24 years",
          "20 years",
          "30 years",
          "36 years"
        ]
      },
      {
        "qNum": 57,
        "title": "Compound Interest Multiplicative Doubling Time",
        "problem": "A sum of money invested at compound interest doubles itself in 5 years. In how many years will it amount to 8 times itself at the same rate?",
        "concept": "Under Compound Interest, growth is exponential: $A = P(1 + r)^t$. If money becomes $k$ times in $T$ years, it becomes $k^m$ times in $m \\times T$ years.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "15 years",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "11 years",
          "15 years",
          "21 years",
          "23 years"
        ]
      },
      {
        "qNum": 58,
        "title": "Difference Between CI and SI for 2 Years",
        "problem": "The difference between compound interest and simple interest on a certain sum for 2 years at 10% per annum is ₹150. Find the principal sum.",
        "concept": "Formula: Difference for 2 years $\\Delta_2 = P \\left(\\frac{R}{100}\\right)^2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹15,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹12,000",
          "₹18,000",
          "₹15,000",
          "₹22,500"
        ]
      },
      {
        "qNum": 59,
        "title": "Difference Between CI and SI for 3 Years",
        "problem": "The difference between compound interest and simple interest on a sum of ₹8000 for 3 years at 5% per annum is what amount?",
        "concept": "Formula: $\\Delta_3 = P \\left(\\frac{R}{100}\\right)^2 \\left(3 + \\frac{R}{100}\\right) = \\Delta_2 \\left(3 + \\frac{R}{100}\\right)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹61",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹49",
          "₹73",
          "₹92",
          "₹61"
        ]
      },
      {
        "qNum": 60,
        "title": "Ratio of 3-Year to 2-Year Difference to Find Rate",
        "problem": "The ratio of the difference between CI and SI for 3 years to that for 2 years on the same principal and at the same rate is $25 : 8$. Find the rate of interest per annum.",
        "concept": "Ratio identity: $\\frac{\\Delta_3}{\\Delta_2} = 3 + \\frac{R}{100}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12.5% p.a.",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 61,
        "title": "Semi-Annual Compounding Effective Rate",
        "problem": "A bank advertises an interest rate of 12% per annum compounded half-yearly. What is the effective annual rate of interest?",
        "concept": "Effective Annual Rate (EAR) $= \\left(1 + \\frac{R/2}{100}\\right)^2 - 1$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "12.36%",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "17.36%",
          "12.36%",
          "7.359999999999999%",
          "24.72%"
        ]
      },
      {
        "qNum": 62,
        "title": "Finding Principal and Rate from Consecutive CI Amounts",
        "problem": "A sum of money invested at compound interest amounts to ₹2400 in 3 years and to ₹2520 in 4 years. Find the rate of interest and the original principal.",
        "concept": "In CI, the amount at the end of year $(n+1)$ is obtained by adding one year's interest to the amount at year $n$: $R = \\frac{A_{n+1} - A_n}{A_n} \\times 100\\%$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Rate = 5%, Principal = ₹2073.21 (or 19200000/9261)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(1, 2] U [3, 4)",
          "[1, 4]",
          "Rate = 5%, Principal = ₹2073.21 (or 19200000/9261)",
          "(2, 3)"
        ]
      },
      {
        "qNum": 63,
        "title": "Sum Amounts to $A_1$ in $t$ Years and $A_2$ in $2t$ Years",
        "problem": "A sum invested at compound interest amounts to ₹4500 in 2 years and to ₹6750 in 4 years. Find the principal sum.",
        "concept": "If $P$ amounts to $A_1$ in $t$ years and $A_2$ in $2t$ years, the multiplying factor is constant: $\\frac{A_1}{P} = \\frac{A_2}{A_1} \\implies P = \\frac{A_1^2}{A_2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹3000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹2,400",
          "₹3,600",
          "₹4,500",
          "₹3000"
        ]
      },
      {
        "qNum": 64,
        "title": "Equated Annual Installment in Simple Interest",
        "problem": "What annual installment will discharge a debt of ₹6450 due in 4 years at 5% simple interest per annum?",
        "concept": "Formula for annual installment $x$ under SI: $\\text{Debt} = n x + \\frac{x R}{100} \\times \\frac{n(n - 1)}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹1500",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹1500",
          "₹1,200",
          "₹1,800",
          "₹2,250"
        ]
      },
      {
        "qNum": 65,
        "title": "Equated Annual Installment in Compound Interest",
        "problem": "A loan of ₹2100 is to be paid back in two equal annual installments at 10% compound interest per annum. Find the value of each installment.",
        "concept": "Formula: Loan Principal $P = \\frac{x}{1 + r} + \\frac{x}{(1 + r)^2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹1210",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 66,
        "title": "Equal Amount Inheritance Distribution under CI",
        "problem": "A father divides ₹16,400 between his two sons aged 17 and 18 years such that both get equal amounts when they turn 20 years old, at 5% compound interest per annum. How much did the younger son receive?",
        "concept": "Let shares be $S_1$ (for 17-yr old, invested for 3 years) and $S_2$ (for 18-yr old, invested for 2 years). Equal maturity amount: $S_1 (1 + r)^3 = S_2 (1 + r)^2 \\implies S_2 = S_1 (1 + r)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹8000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹6,400",
          "₹9,600",
          "₹8000",
          "₹12,000"
        ]
      },
      {
        "qNum": 67,
        "title": "Equal Interest Split under Simple Interest",
        "problem": "A sum of ₹12,000 is divided into two parts such that the simple interest on the first part for 3 years at 12% per annum is equal to the simple interest on the second part for 4.5 years at 16% per annum. Find the first part.",
        "concept": "Equal interest: $P_1 \\times R_1 \\times T_1 = P_2 \\times R_2 \\times T_2$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹8000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹6,400",
          "₹9,600",
          "₹12,000",
          "₹8000"
        ]
      },
      {
        "qNum": 68,
        "title": "Marginal Rate Increase in Simple Interest",
        "problem": "A sum of money was invested at simple interest at a certain rate for 3 years. Had it been invested at 4% higher rate, it would have fetched ₹600 more. Find the principal sum.",
        "concept": "Extra interest $= P \\times \\Delta R \\times T / 100$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹5000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹5000",
          "₹4,000",
          "₹6,000",
          "₹7,500"
        ]
      },
      {
        "qNum": 69,
        "title": "Rule of 72 Approximation vs Exact CI",
        "problem": "Using the Rule of 72, approximate the number of years required for an investment to double at 8% compound interest per annum, and compare with the exact value.",
        "concept": "Rule of 72: Doubling time $T \\approx \\frac{72}{R}$. Exact time: $T = \\frac{\\ln 2}{\\ln(1 + R/100)}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "9 years (approx), 9.01 years (exact)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "(1, 2] U [3, 4)",
          "9 years (approx), 9.01 years (exact)",
          "[1, 4]",
          "(2, 3)"
        ]
      },
      {
        "qNum": 70,
        "title": "Difference in CI Earned in Consecutive Years",
        "problem": "A sum is invested at compound interest of 10% per annum. The interest earned in the 3rd year is ₹1210. Find the interest earned in the 2nd year.",
        "concept": "Interest in year $(n+1)$ is $(1 + r)$ times the interest in year $n$: $I_{n+1} = I_n (1 + r)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹1100",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 71,
        "title": "Cash Down Payment with Installment Interest Calculation",
        "problem": "A refrigerator is available for ₹26,000 cash or for ₹7,000 cash down payment followed by three equal monthly installments of ₹6,600 each. Find the rate of simple interest charged under the installment scheme.",
        "concept": "Principal financed = Cash Price - Down Payment. Total interest = Total Installments Paid - Principal Financed.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "25.8% p.a. (or 800/31%)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "30.8%",
          "20.8%",
          "51.6%",
          "25.8% p.a. (or 800/31%)"
        ]
      },
      {
        "qNum": 72,
        "title": "Quarterly Compounding Effective Return",
        "problem": "Find the compound interest on ₹10,000 for 1 year at 20% per annum compounded quarterly.",
        "concept": "Quarterly rate $r = 20 / 4 = 5\\% = 0.05$. Number of quarters $n = 4$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹2155.06",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹2155.06",
          "₹1,724",
          "₹2,586",
          "₹3,233"
        ]
      },
      {
        "qNum": 73,
        "title": "Equated 3-Year Installment under CI",
        "problem": "A sum of ₹18,200 is borrowed at 20% compound interest per annum. If it is repaid in 3 equal annual installments, find the value of each installment.",
        "concept": "Formula: $P = x \\left[ \\frac{1}{1.2} + \\frac{1}{1.2^2} + \\frac{1}{1.2^3} \\right] = x \\left[ \\frac{5}{6} + \\frac{25}{36} + \\frac{125}{216} \\right]$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹8640",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹6,912",
          "₹8640",
          "₹10,368",
          "₹12,960"
        ]
      },
      {
        "qNum": 74,
        "title": "Simple Interest Rate Equivalent to Double Compounding",
        "problem": "A person lent a sum at 10% per annum simple interest for 2 years. Had he lent it at 10% per annum compound interest, he would have earned ₹50 more. Find the sum.",
        "concept": "Difference for 2 years at 10% is $1\\%$ of principal.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹5000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹4,000",
          "₹6,000",
          "₹5000",
          "₹7,500"
        ]
      },
      {
        "qNum": 75,
        "title": "Growth of Sum under Increasing Annual CI Rates",
        "problem": "Find the compound interest on ₹10,000 in 3 years if the rate of interest is 4% for the 1st year, 5% for the 2nd year, and 6% for the 3rd year.",
        "concept": "Amount $= P(1 + r_1)(1 + r_2)(1 + r_3)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹1575.20",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Simple & Compound Interest, Equated Installments",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Simple+Compound+Interest+Installments+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "P(R/100)^2 Difference Formula, Compounding Periods & Present Value Annuity Matrix",
      "duration": "Complete Playlist • 5 Parts"
    }
  },
  {
    "id": "qa_ratios",
    "title": "Ratio, Proportion, Variations & Partnerships",
    "domain": "Arithmetic",
    "tier": "Tier A",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Ratios: Axioms & First Principles</h4>\n<div class='theory-block'>A ratio $\\frac{a}{b}$ (or $a : b$) is an abstract comparison of magnitudes between quantities of the **same physical dimension**.\n\n### 1.1 Fundamental Properties\n1. **Scale Invariance:** Multiplying or dividing both antecedent $a$ and consequent $b$ by any non-zero constant $k$ leaves the ratio unchanged:\n   $$\\frac{a}{b} = \\frac{k \\cdot a}{k \\cdot b} \\quad (k \\ne 0)$$\n2. **Compound Ratio:** The compound ratio of $(a : b)$ and $(c : d)$ is:\n   $$\\text{Compound Ratio} = \\mathbf{\\frac{a \\cdot c}{b \\cdot d}}$$\n3. **Duplicate & Triplicate Ratios:**\n   * Duplicate Ratio of $a : b = \\mathbf{a^2 : b^2}$.\n   * Sub-duplicate Ratio $= \\mathbf{\\sqrt{a} : \\sqrt{b}}$.\n   * Triplicate Ratio $= \\mathbf{a^3 : b^3}$.\n   * Sub-triplicate Ratio $= \\mathbf{\\sqrt[3]{a} : \\sqrt[3]{b}}$.\n\n---\n\n### 1.2 Multi-Ratio Normalization (The Chain Grid Algorithm)\nTo combine non-aligned ratios like $A : B = 2 : 3$, $B : C = 4 : 5$, and $C : D = 6 : 7$:\n\n#### The Continuous Propagation Grid:\nPropagate adjacent boundary values to the empty cells:\n$$\\begin{array}{c|c|c|c}\nA & B & C & D \\\\\n\\hline</div>\n<h4>2. Properties of Proportions & Componendo-Dividendo</h4>\n<div class='theory-block'>Four quantities $a, b, c, d$ are in proportion if:\n$$\\mathbf{\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c}$$\n*(Product of Extremes $=$ Product of Means)*.\n\n### 2.1 Theorem of Equal Fractions (Theorem of Equal Ratios)\nIf $\\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\dots = \\frac{a_n}{b_n} = k$, then for any non-zero real multipliers $p_1, p_2, \\dots, p_n$:\n$$\\mathbf{\\frac{p_1 a_1 + p_2 a_2 + \\dots + p_n a_n}{p_1 b_1 + p_2 b_2 + \\dots + p_n b_n} = k}$$\n\n#### First-Principle Proof:\nLet $\\frac{a_i}{b_i} = k \\implies a_i = k \\cdot b_i$ for all $i$.\n$$\\frac{\\sum_{i=1}^n p_i a_i}{\\sum_{i=1}^n p_i b_i} = \\frac{\\sum_{i=1}^n p_i (k b_i)}{\\sum_{i=1}^n p_i b_i} = \\frac{k \\sum_{i=1}^n p_i b_i}{\\sum_{i=1}^n p_i b_i} = \\mathbf{k} \\quad \\blacksquare$$\n\n---\n\n### 2.2 First-Principle Derivation: Componendo & Dividendo (C&D)\nGiven that $\\frac{a}{b} = \\frac{c}{d}$:\n1. Add $1$ to both sides (**Componendo**):\n   $$\\frac{a}{b} + 1 = \\frac{c}{d} + 1 \\implies \\mathbf{\\frac{a + b}{b} = \\frac{c + d}{d}}$$\n2. Subtract $1$ from both sides (**Dividendo**):\n   $$\\frac{a}{b} - 1 = \\frac{c}{d} - 1 \\implies \\mathbf{\\frac{a - b}{b} = \\frac{c - d}{d}}$$\n3. Divide the Componendo equation by the Dividendo equation:\n   $$\\frac{\\frac{a + b}{b}}{\\frac{a - b}{b}} = \\frac{\\frac{c + d}{d}}{\\frac{c - d}{d}}$$</div>\n<h4>3. Mathematical Theory of Variations</h4>\n<div class='theory-block'>### 3.1 Types of Variation\n1. **Direct Variation ($y \\propto x$):**\n   $$y = k \\cdot x \\implies \\mathbf{\\frac{y_1}{y_2} = \\frac{x_1}{x_2}}$$\n2. **Inverse Variation ($y \\propto \\frac{1}{x}$):**\n   $$y = \\frac{k}{x} \\implies x \\cdot y = k \\implies \\mathbf{y_1 x_1 = y_2 x_2}$$\n3. **Joint Variation ($y \\propto \\frac{x \\cdot z}{w}$):**\n   $$y = k \\cdot \\frac{x \\cdot z}{w} \\implies \\mathbf{\\frac{y \\cdot w}{x \\cdot z} = \\text{Constant}}$$\n\n### 3.2 Partially Constant & Partially Variable Models\nA frequent CAT model (e.g., taxi fares, boarding house mess expenses):\n$$\\mathbf{\\text{Total Cost } (C) = F + k \\cdot n}$$\nwhere $F$ is a fixed overhead cost, $n$ is the number of members/kilometers, and $k$ is the variable cost per unit.  \n* With two data points $(n_1, C_1)$ and $(n_2, C_2)$:\n  $$C_2 - C_1 = k(n_2 - n_1) \\implies \\mathbf{k = \\frac{C_2 - C_1}{n_2 - n_1}}$$\n  $$F = C_1 - k \\cdot n_1$$\n\n---</div>\n<h4>4. Business Partnerships (Capital $\\times$ Time Framework)</h4>\n<div class='theory-block'>Profit earned in a business enterprise is directly proportional to both **Capital Invested ($C$)** and **Duration of Investment ($T$)**:\n$$\\mathbf{\\text{Profit Ratio } (P_A : P_B) = (C_A \\times T_A) : (C_B \\times T_B)}$$\n\n### 4.1 Variable Monthly Investments (Investment-Month Units)\nIf partner A invests $C_1$ for $t_1$ months, then withdraws/adds capital to make it $C_2$ for $t_2$ months:\n$$\\mathbf{\\text{Total Investment Equivalent } (E_A) = C_1 t_1 + C_2 t_2 + \\dots}$$\n$$\\frac{P_A}{P_B} = \\frac{E_A}{E_B}$$\n\n### 4.2 Active (Working) vs. Sleeping Partners\n* **Active Partner:** Manages business operations and receives a pre-agreed management salary/commission (e.g. $10\\%$ of gross profit).\n* **Protocol:**\n  1. Deduct the active partner's management fee from Gross Profit:\n     $$\\text{Distributable Profit} = \\text{Gross Profit} - \\text{Management Salary}$$\n  2. Divide Distributable Profit strictly in the ratio of $(C \\times T)$.\n  3. Total Share of Active Partner $= \\text{Management Salary} + \\text{Share of Distributable Profit}$.\n\n---</div>",
    "formulas": [
      {
        "formula": "\\frac{a}{b} = \\frac{k \\cdot a}{k \\cdot b} \\quad (k \\ne 0)"
      },
      {
        "formula": "\\text{Compound Ratio} = \\mathbf{\\frac{a \\cdot c}{b \\cdot d}}"
      },
      {
        "formula": "\\begin{array}{c|c|c|c}\nA & B & C & D \\\\\n\\hline\n2 & 3 & \\mathbf{3} & \\mathbf{3} \\\\\n\\mathbf{4} & 4 & 5 & \\mathbf{5} \\\\\n\\mathbf{6} & \\mathbf{6} & 6 & 7\n\\end{array}"
      },
      {
        "formula": "\\mathbf{A : B : C : D = 16 : 24 : 30 : 35}"
      },
      {
        "formula": "\\mathbf{\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c}"
      },
      {
        "formula": "\\mathbf{\\frac{p_1 a_1 + p_2 a_2 + \\dots + p_n a_n}{p_1 b_1 + p_2 b_2 + \\dots + p_n b_n} = k}"
      }
    ],
    "questions": [
      {
        "qNum": 76,
        "title": "Continued Ratio Combination",
        "problem": "If $A : B = 2 : 3$, $B : C = 4 : 5$, and $C : D = 6 : 7$, find the combined ratio $A : B : C : D$ and the compound ratio $A : D$.",
        "concept": "Multiply matching intermediaries to create a continuous integer ratio.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "A:B:C:D = 16:24:30:35, A:D = 16:35",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "A:B:C:D = 16:24:30:35, A:D = 16:35",
          "19 A:B:C:D = :24:30:35, A:D = 16:35",
          "13 A:B:C:D = :24:30:35, A:D = 16:35",
          "24 A:B:C:D = :24:30:35, A:D = 16:35"
        ]
      },
      {
        "qNum": 77,
        "title": "Equating Coefficients to Ratio Form",
        "problem": "If $2A = 3B = 4C$, find the ratio $A : B : C$.",
        "concept": "Divide by the LCM of coefficients (LCM of 2, 3, 4 = 12).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6 : 4 : 3",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "3 : 4 : 6",
          "6 : 4 : 3",
          "6 : 3 : 4",
          "7 : 4 : 3"
        ]
      },
      {
        "qNum": 78,
        "title": "Income, Expenditure and Equal Savings Model",
        "problem": "The incomes of A and B are in the ratio $5 : 3$, and their expenditures are in the ratio $9 : 5$. If each saves ₹2600 per month, find their monthly incomes.",
        "concept": "Equation: $\\text{Income} - \\text{Expenditure} = \\text{Savings}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "A = ₹26,000, B = ₹15,600",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "31 A = ₹,000, B = ₹15,600",
          "21 A = ₹,000, B = ₹15,600",
          "A = ₹26,000, B = ₹15,600",
          "39 A = ₹,000, B = ₹15,600"
        ]
      },
      {
        "qNum": 79,
        "title": "Income, Expenditure with Unequal Savings",
        "problem": "The ratio of incomes of A and B is $4 : 3$ and the ratio of their expenditures is $3 : 2$. If A saves ₹6000 and B saves ₹4000, find A's income.",
        "concept": "Cross-multiplication method: $\\frac{4x - 6000}{3x - 4000} = \\frac{3}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹4000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹3,200",
          "₹4,800",
          "₹6,000",
          "₹4000"
        ]
      },
      {
        "qNum": 80,
        "title": "Coin Bag Denomination and Total Value",
        "problem": "A box contains ₹1, 50-paise, and 25-paise coins in the ratio $3 : 4 : 8$. If the total value of all coins is ₹140, find the total number of coins in the box.",
        "concept": "Value of coins = Number of coins $\\times$ Face value.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "300 coins",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 81,
        "title": "Coin Problem with Given Coin Count",
        "problem": "A bag contains 378 coins of ₹1, 50p, and 25p whose values are in the ratio $13 : 11 : 7$. Find the number of 50-paise coins.",
        "concept": "Given the ratio of VALUES, convert to ratio of NUMBER of coins.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "132",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "158",
          "132",
          "106",
          "198"
        ]
      },
      {
        "qNum": 82,
        "title": "Mean Proportional and Third Proportional",
        "problem": "Find the third proportional to 12 and 18, and the mean proportional between 4 and 16.",
        "concept": "Third proportional to $a, b$ is $c = \\frac{b^2}{a}$. Mean proportional between $a, b$ is $m = \\sqrt{ab}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "Third = 27, Mean = 8",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "32 Third = , Mean = 8",
          "22 Third = , Mean = 8",
          "Third = 27, Mean = 8",
          "41 Third = , Mean = 8"
        ]
      },
      {
        "qNum": 83,
        "title": "Fourth Proportional Calculation",
        "problem": "Find the fourth proportional to 6, 14, and 15.",
        "concept": "Fourth proportional to $a, b, c$ is $d$ such that $\\frac{a}{b} = \\frac{c}{d} \\implies d = \\frac{bc}{a}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "35",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "42",
          "28",
          "53",
          "35"
        ]
      },
      {
        "qNum": 84,
        "title": "Number to be Subtracted for Proportion",
        "problem": "What number must be subtracted from each of 21, 38, 55, and 106 so that the remaining numbers are in proportion?",
        "concept": "Equation: $\\frac{21 - x}{38 - x} = \\frac{55 - x}{106 - x}$. Direct formula: $x = \\frac{ad - bc}{(a + d) - (b + c)}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "4",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "4",
          "5",
          "3",
          "6"
        ]
      },
      {
        "qNum": 85,
        "title": "Joint Variation with Direct and Inverse Components",
        "problem": "If $y$ varies directly as $x$ and inversely as the square of $z$, and $y = 8$ when $x = 2$ and $z = 3$, find the value of $y$ when $x = 8$ and $z = 6$.",
        "concept": "Variation relation: $y = k \\frac{x}{z^2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "8",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 86,
        "title": "Partly Constant and Partly Variable Cost (Hostel Model)",
        "problem": "The monthly expenses of a student club are partly constant and partly vary directly as the number of members. If expenses are ₹10,400 for 60 members and ₹16,000 for 100 members, find the expenses for 120 members.",
        "concept": "Model: $E = F + n \\times V$, where $F$ is fixed cost and $V$ is variable cost per member.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹18,800",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹15,040",
          "₹22,560",
          "₹18,800",
          "₹28,200"
        ]
      },
      {
        "qNum": 87,
        "title": "Diamond Breaking Problem (Value Proportional to Weight Squared)",
        "problem": "A diamond falls and breaks into three pieces whose weights are in the ratio $1 : 2 : 3$. If the value of the diamond is directly proportional to the square of its weight and the total loss incurred due to breaking is ₹44,000, find the original value of the diamond.",
        "concept": "Value $V = k W^2$. Compare $(W_1 + W_2 + W_3)^2$ with $(W_1^2 + W_2^2 + W_3^2)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹72,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹57,600",
          "₹86,400",
          "₹1,08,000",
          "₹72,000"
        ]
      },
      {
        "qNum": 88,
        "title": "Engine Pulling Wagons (Reduction Proportional to Root Wagons)",
        "problem": "The speed of a railway engine without any wagons attached is 42 km/h. The reduction in speed is directly proportional to the square root of the number of wagons attached. With 9 wagons attached, its speed is 30 km/h. Find the maximum number of wagons the engine can pull.",
        "concept": "Speed $S = 42 - k \\sqrt{n}$. Engine can pull wagons as long as $S > 0$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "110 wagons",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "110 wagons",
          "132 wagons",
          "88 wagons",
          "165 wagons"
        ]
      },
      {
        "qNum": 89,
        "title": "Basic Partnership Profit Sharing",
        "problem": "A, B, and C enter into a partnership with investments of ₹40,000, ₹50,000, and ₹60,000 respectively. If the total annual profit is ₹45,000, find B's share of the profit.",
        "concept": "Profit is divided in the ratio of capital invested (when time period is equal).",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹15,000",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹12,000",
          "₹15,000",
          "₹18,000",
          "₹22,500"
        ]
      },
      {
        "qNum": 90,
        "title": "Partnership with Unequal Time Periods",
        "problem": "A starts a business with ₹35,000. After 5 months, B joins with ₹50,000. At the end of the year, the total profit is ₹30,000. Find B's share of the profit.",
        "concept": "Profit Ratio $= (C_A \\times T_A) : (C_B \\times T_B)$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹13,636.36 (or 150000/11)",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 91,
        "title": "Active Managing Partner with Salary",
        "problem": "A and B enter into a partnership with capitals in the ratio $7 : 5$. A is an active partner and receives 10% of the total profit as a management salary. The remaining profit is divided in the ratio of their capitals. If A receives a total of ₹14,600, find the total profit.",
        "concept": "Total Profit $= P$. Management salary to A $= 0.10 P$. Remaining profit $= 0.90 P$, split $7:5$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "₹23,360",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "₹18,688",
          "₹28,032",
          "₹35,040",
          "₹23,360"
        ]
      },
      {
        "qNum": 92,
        "title": "Capital Alteration During the Year",
        "problem": "A, B, and C start a business. A invests ₹20,000 for the whole year. B puts in ₹30,000 initially and withdraws ₹10,000 after 6 months. C puts in ₹40,000 initially and adds ₹10,000 after 9 months. Find the ratio in which they should divide the annual profit.",
        "concept": "Effective capital = $\\sum (\\text{Capital} \\times \\text{Months})$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "8 : 10 : 17",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "8 : 10 : 17",
          "17 : 10 : 8",
          "8 : 17 : 10",
          "9 : 10 : 17"
        ]
      },
      {
        "qNum": 93,
        "title": "Age Ratio with Future Time Shift",
        "problem": "The ratio of the present ages of a mother and daughter is $7 : 2$. Four years hence, the ratio of their ages will be $5 : 2$. What is the daughter's present age?",
        "concept": "Cross-multiplication / unit difference method: $\\frac{7x + 4}{2x + 4} = \\frac{5}{2}$.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "6 years",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "2 years",
          "6 years",
          "12 years",
          "9 years"
        ]
      },
      {
        "qNum": 94,
        "title": "Adding Water to Change Liquid Ratio",
        "problem": "A mixture of 60 liters contains milk and water in the ratio $2 : 1$. How many liters of water must be added to make the ratio $1 : 2$?",
        "concept": "Quantity of MILK remains CONSTANT.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "60 liters",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": false,
        "options": [
          "72 liters",
          "48 liters",
          "60 liters",
          "90 liters"
        ]
      },
      {
        "qNum": 95,
        "title": "Blending Two Vessels with Different Ratios",
        "problem": "Two containers A and B have milk and water in the ratios $4 : 3$ and $2 : 3$ respectively. In what ratio should the liquids from containers A and B be mixed to obtain a new mixture containing half milk and half water?",
        "concept": "Use Alligation Cross Method on the concentration of milk.",
        "method1": "Step-by-step algebraic derivation.",
        "method2": "Rodha fast shortcut or inspection trick.",
        "finalAnswer": "7 : 5",
        "trap": "Watch out for boundary conditions and parity constraints.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Ratios, Proportions, Joint Variation & Partnerships",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Ratio+Proportion+Variations+Partnerships+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Constant Sum/Difference Bridges, Joint Variation Equations & Profit-Capital-Time Sharing",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_tsd",
    "title": "Time, Speed, Distance, Races & Escalators",
    "domain": "Arithmetic",
    "tier": "Tier S",
    "weightage": "2 – 3 Questions (6 – 9 Marks)",
    "prepTime": "3.5 Hours",
    "theoryHtml": "<h4>1. Classical Proportionality Mechanics: First Principles</h4>\n<div class='theory-block'>The governing equation of motion is $\\mathbf{\\text{Distance } (D) = \\text{Speed } (S) \\times \\text{Time } (T)}$.\n* **Constant Time ($T_1 = T_2$):** $\\mathbf{D \\propto S \\iff \\frac{D_1}{D_2} = \\frac{S_1}{S_2}}$.\n* **Constant Distance ($D_1 = D_2$):** $\\mathbf{S \\propto \\frac{1}{T} \\iff \\frac{S_1}{S_2} = \\frac{T_2}{T_1}}$. (Speed and time are strictly inversely proportional).\n* **Constant Speed ($S_1 = S_2$):** $\\mathbf{D \\propto T \\iff \\frac{D_1}{D_2} = \\frac{T_1}{T_2}}$.\n---</div>\n<h4>2. Average Speed & Harmonic Mean Derivation</h4>\n<div class='theory-block'>Average speed is strictly $\\frac{\\text{Total Distance}}{\\text{Total Time}}$.\n* **Equal Distances ($d$ each way at speeds $s_1, s_2$):**\n  $$T = \\frac{d}{s_1} + \\frac{d}{s_2} = d\\left(\\frac{s_1+s_2}{s_1s_2}\\right) \\implies \\mathbf{\\text{Avg Speed} = \\frac{2s_1s_2}{s_1+s_2}} \\quad (\\text{Harmonic Mean})$$\n* **Equal Time Intervals ($t$ at $s_1$, $t$ at $s_2$):**\n  $$\\mathbf{\\text{Avg Speed} = \\frac{s_1+s_2}{2}} \\quad (\\text{Arithmetic Mean})$$\n---</div>\n<h4>3. Circular Tracks: First Meeting vs. Starting Point</h4>\n<div class='theory-block'>Two runners A and B on circular track of length $L$ with speeds $S_1, S_2$:\n* **Time for First Meeting Anywhere:**\n  * Opposite directions: $\\mathbf{T = \\frac{L}{S_1 + S_2}}$\n  * Same direction: $\\mathbf{T = \\frac{L}{|S_1 - S_2|}}$\n* **Time for First Meeting at STARTING POINT:**\n  $$\\mathbf{T_{\\text{start}} = \\operatorname{LCM}\\left(\\frac{L}{S_1}, \\frac{L}{S_2}\\right)}$$\n* **Number of Distinct Meeting Points on Track:**\n  Reduce speed ratio to coprime integers: $\\frac{S_1}{S_2} = \\frac{a}{b}$ ($\\gcd(a, b) = 1$).\n  * Opposite directions: $\\mathbf{a + b}$ distinct points.\n  * Same direction: $\\mathbf{|a - b|}$ distinct points.\n---</div>\n<h4>4. Escalators: Step-Counting Formulation (CAT Benchmark)</h4>\n<div class='theory-block'>Let stationary visible steps be $N$, walking speed be $S_p$ steps/s, escalator speed be $S_e$ steps/s:\n* **Walking in SAME direction as Escalator:** $\\mathbf{N = (S_p + S_e) \\times T = \\text{Steps Walked} + S_e \\times T}$\n* **Walking in OPPOSITE direction:** $\\mathbf{N = (S_p - S_e) \\times T = \\text{Steps Walked} - S_e \\times T}$\n* **Proportionality Rule:** $\\frac{\\text{Steps Walked}}{\\text{Time Taken}} = S_p$.\n---</div>\n<h4>5. Ravi Sir's Exam Traps & Warnings</h4>\n<div class='theory-block'>> [!CAUTION] **The Distinct Meeting Points Trap:**  \n> Never add raw speeds! If speeds are $15\\text{ m/s}$ and $10\\text{ m/s}$, simplify $\\frac{15}{10} = \\frac{3}{2} \\implies a=3, b=2$. Opposite points $= 3+2 = 5$. Same direction $= 3-2 = 1$. Raw $15+10=25$ is a disaster!</div>",
    "formulas": [
      {
        "formula": "\\mathbf{\\text{Distance} = \\text{Speed} \\times \\text{Time}}"
      },
      {
        "formula": "\\mathbf{\\text{Avg Speed (Equal Dist)} = \\frac{2s_1s_2}{s_1 + s_2}}"
      },
      {
        "formula": "\\mathbf{T_{\\text{start}} = \\operatorname{LCM}\\left(\\frac{L}{S_1}, \\frac{L}{S_2}\\right)}"
      },
      {
        "formula": "\\mathbf{\\text{Distinct Points (Same)} = |a - b| \\quad (\\gcd(a, b) = 1)}"
      },
      {
        "formula": "\\mathbf{N_{\\text{escalator}} = (S_p \\pm S_e) \\times T}"
      },
      {
        "formula": "\\mathbf{\\theta_{\\text{clock}} = \\left|30H - \\frac{11}{2}M\\right|}"
      }
    ],
    "questions": [
      {
        "qNum": 223,
        "title": "Escalator Speed Doubling Step Problem",
        "problem": "A man walks up a moving escalator and counts 30 steps to reach the top. If he doubles his walking speed, he counts 40 steps to reach the top. How many visible steps are there on the stationary escalator?",
        "concept": "Total steps N = steps walked + escalator steps. Relate time to walking speed.",
        "method1": "Let escalator speed be e steps/s. Case 1: speed s=1, time T1=30, N = 30 + 30e. Case 2: speed s=2, time T2=40/2=20, N = 40 + 20e. Equate: 30 + 30e = 40 + 20e => 10e = 10 => e = 1 step/s. Hence N = 30 + 30(1) = 60 steps.",
        "method2": "Inspection: Ratio of times taken = 30 : 20 = 3 : 2. Escalator steps moved ratio = 3 : 2. Difference 1 part = 40 - 30 = 10 steps. Hence escalator contributed 3 * 10 = 30 steps in Case 1. Total N = 30 + 30 = 60.",
        "finalAnswer": "60",
        "trap": "Thinking doubling speed halves the steps walked. In reality, moving faster means the escalator helps less, so you take MORE steps!",
        "isTita": false,
        "options": [
          "72",
          "48",
          "90",
          "60"
        ]
      },
      {
        "qNum": 224,
        "title": "Circular Track First Meeting at Starting Point",
        "problem": "Two runners A and B run on a 600 m circular track with speeds of 15 m/s and 10 m/s in the same direction from the same starting point. At what time will they first meet at the starting point?",
        "concept": "Time to meet at starting point is LCM of individual lap times, independent of direction.",
        "method1": "Lap time of A = 600 / 15 = 40 s. Lap time of B = 600 / 10 = 60 s. They are both at starting point at multiples of 40 and 60. T = LCM(40, 60) = 120 seconds.",
        "method2": "Direct: LCM(600/15, 600/10) = LCM(40, 60) = 120 s. 2 minutes flat.",
        "finalAnswer": "120 seconds",
        "trap": "Calculating 600 / (15 - 10) = 120s which happens to coincide here, but would fail if asked for opposite direction where meeting anywhere is 600/25 = 24s while starting point is still 120s!",
        "isTita": false,
        "options": [
          "60 seconds",
          "120 seconds",
          "180 seconds",
          "240 seconds"
        ]
      },
      {
        "qNum": 225,
        "title": "Harmonic Mean Average Speed with Stoppage",
        "problem": "A car travels from A to B at 60 km/h and returns from B to A along the same route at 40 km/h. What is the average speed for the round trip?",
        "concept": "Equal distance average speed is the Harmonic Mean: 2ab / (a + b).",
        "method1": "Let distance be d. Time forward = d/60, time back = d/40. Total time = d(1/60 + 1/40) = 5d/120 = d/24. Avg speed = 2d / (d/24) = 48 km/h.",
        "method2": "Formula: 2 * 60 * 40 / (60 + 40) = 4800 / 100 = 48 km/h.",
        "finalAnswer": "48 km/h",
        "trap": "Taking Arithmetic Mean (60 + 40)/2 = 50 km/h. AM is only valid when time spent at both speeds is equal.",
        "isTita": false,
        "options": [
          "48 km/h",
          "50 km/h",
          "52 km/h",
          "45 km/h"
        ]
      },
      {
        "qNum": 226,
        "title": "Linear Race Distance Concession",
        "problem": "In a 1000 m race, A beats B by 100 m or 10 seconds. Find the time taken by A to complete the race.",
        "concept": "B covers the beaten distance in the beaten time: B speed = 100 m / 10 s = 10 m/s.",
        "method1": "B takes 10 s to cover 100 m => Speed(B) = 100/10 = 10 m/s. Time for B to finish 1000 m = 1000 / 10 = 100 seconds. Since A beats B by 10 seconds, Time(A) = 100 - 10 = 90 seconds.",
        "method2": "Speed ratio A : B = 1000 : 900 = 10 : 9. Since distance is constant, time ratio T_A : T_B = 9 : 10. Difference 1 unit = 10 s => T_A = 9 * 10 = 90 seconds.",
        "finalAnswer": "90 seconds",
        "trap": "Subtracting 10s from A instead of adding to B.",
        "isTita": false,
        "options": [
          "108 seconds",
          "72 seconds",
          "90 seconds",
          "135 seconds"
        ]
      },
      {
        "qNum": 227,
        "title": "Boats and Streams Upstream Downstream Ratio",
        "problem": "A motorboat takes thrice as long to row upstream as to row downstream between two points. If stream speed is 4 km/h, find the speed of the boat in still water.",
        "concept": "Distance is constant: (u + v) * t = (u - v) * 3t => u + v = 3(u - v).",
        "method1": "u + 4 = 3(u - 4) => u + 4 = 3u - 12 => 2u = 16 => u = 8 km/h.",
        "method2": "Time ratio Up : Down = 3 : 1 => Speed ratio Down : Up = 3 : 1. Boat speed u = (3 + 1)/2 = 2 parts, stream v = (3 - 1)/2 = 1 part. Given 1 part = 4 km/h => u = 2 * 4 = 8 km/h.",
        "finalAnswer": "8 km/h",
        "trap": "Confusing upstream and downstream in the ratio inversion.",
        "isTita": false,
        "options": [
          "6 km/h",
          "8 km/h",
          "10 km/h",
          "12 km/h"
        ]
      },
      {
        "qNum": 238,
        "title": "Train Crossing a Moving Platform and Person",
        "problem": "A train passes a standing man in 6 seconds and a 210 m long platform in 16 seconds at uniform speed. Find the length and speed of the train.",
        "concept": "Distance in 6s is L_train. Distance in 16s is L_train + 210. Speed is constant.",
        "method1": "Speed = L / 6 = (L + 210) / 16. Cross-multiply: 16L = 6L + 1260 => 10L = 1260 => L = 126 m. Speed = 126 / 6 = 21 m/s = 21 * (18/5) = 75.6 km/h.",
        "method2": "Platform is covered in 16 - 6 = 10 seconds. Speed = 210 / 10 = 21 m/s. Train length = 21 m/s * 6 s = 126 m.",
        "finalAnswer": "126 m, 75.6 km/h",
        "trap": "Forgetting that crossing a platform requires covering both train length and platform length.",
        "isTita": false,
        "options": [
          "126 m, 75.6 km/h",
          "120 m, 72 km/h",
          "130 m, 78 km/h",
          "126 m, 70 km/h"
        ]
      },
      {
        "qNum": 239,
        "title": "Linear Race with Distance and Time Start",
        "problem": "In a 100 m race, A can beat B by 25 m and B can beat C by 4 m. In the same race, by what distance can A beat C?",
        "concept": "Multiply distance ratios: (D_B / D_A) * (D_C / D_B) = D_C / D_A.",
        "method1": "When A covers 100m, B covers 75m => B/A = 75/100. When B covers 100m, C covers 96m => C/B = 96/100. Ratio C/A = (75/100) * (96/100) = (3/4) * (24/25) = 72/100. When A runs 100m, C runs 72m. A beats C by 100 - 72 = 28 m.",
        "method2": "B gives C 4% start. On 75m, B gives C 4% of 75 = 3m. So C is at 75 - 3 = 72m when A finishes. Difference = 100 - 72 = 28m.",
        "finalAnswer": "28 m",
        "trap": "Simply adding the headstarts 25 + 4 = 29m (fatal blunder).",
        "isTita": false,
        "options": [
          "28 m",
          "29 m",
          "27 m",
          "30 m"
        ]
      },
      {
        "qNum": 240,
        "title": "Circular Track Opposite Running Meetings",
        "problem": "Two cyclists A and B start simultaneously from the same point on a 1200 m circular track in opposite directions at speeds of 18 km/h and 27 km/h. When and where do they meet for the second time?",
        "concept": "Relative speed in opposite directions is S_A + S_B. Second meeting is at time 2 * (L / S_rel).",
        "method1": "S_A = 18 * (5/18) = 5 m/s. S_B = 27 * (5/18) = 7.5 m/s. S_rel = 5 + 7.5 = 12.5 m/s. Time for 1st meeting = 1200 / 12.5 = 96 s. Time for 2nd meeting = 2 * 96 = 192 seconds.",
        "method2": "Ratio of speeds = 5 : 7.5 = 2 : 3. Coprime sum = 2 + 3 = 5 meeting points. Each point is 1200 / 5 = 240m apart. 2nd meeting at 192 s.",
        "finalAnswer": "192 seconds",
        "trap": "Converting km/h to m/s by multiplying 18/5 instead of 5/18.",
        "isTita": false,
        "options": [
          "192 seconds",
          "230 seconds",
          "154 seconds",
          "288 seconds"
        ]
      },
      {
        "qNum": 241,
        "title": "Escalator Steps with Opposite Direction Walking",
        "problem": "An escalator moves downwards. A boy takes 90 steps to walk down the escalator, and 150 steps to walk up against the moving escalator. If his walking speed is uniform, find the visible number of steps on the stationary escalator.",
        "concept": "Harmonic Mean relationship for steps walked when moving with vs against escalator: N = 2 * S1 * S2 / (S1 + S2).",
        "method1": "Let N be visible steps, boy speed s, escalator speed e. Down: N = 90(1 + e/s). Up: N = 150(1 - e/s). 90(1 + e/s) = 150(1 - e/s) => 3(1 + e/s) = 5(1 - e/s) => 8(e/s) = 2 => e/s = 1/4. Substitute: N = 90(1 + 1/4) = 90 * (5/4) = 112.5... wait, with N = 2*90*150/(90+150) = 27000 / 240 = 112.5? Better: 1/N = (1/2)(1/90 + 1/150) => HM gives 112.5.",
        "method2": "Harmonic Mean formula: N = 2 * S_down * S_up / (S_down + S_up) = (2 * 90 * 150) / 240 = 112.5 steps.",
        "finalAnswer": "112.5",
        "trap": "Averaging 90 and 150 to get 120 (AM is wrong!).",
        "isTita": false,
        "options": [
          "123.75",
          "112.5",
          "101.25",
          "114.5"
        ]
      },
      {
        "qNum": 242,
        "title": "Clock Hand Coincidence Time Calculation",
        "problem": "At what exact time between 4 o'clock and 5 o'clock do the hands of a clock coincide?",
        "concept": "At 4:00, minute hand is 120 degrees behind. Relative speed is 5.5 deg/min = 11/2 deg/min.",
        "method1": "Time M = Distance / Relative speed = 120 / (11/2) = 240 / 11 = 21 9/11 minutes past 4.",
        "method2": "Formula: M = (2/11) * 30 * H = (2/11) * 120 = 240/11 = 21 9/11 mins.",
        "finalAnswer": "21 9/11 minutes past 4",
        "trap": "Assuming hands meet at 4:20 (ignoring hour hand movement in 20 minutes).",
        "isTita": false,
        "options": [
          "21 9/11 minutes past 4",
          "20 minutes past 4",
          "22 minutes past 4",
          "21 5/11 minutes past 4"
        ]
      },
      {
        "qNum": 243,
        "title": "Two Trains Meeting and Continuing to Destinations",
        "problem": "Two trains start at the same time from stations A and B towards each other. After meeting, they take 4 hours and 9 hours respectively to reach B and A. Find the ratio of their speeds.",
        "concept": "Rodha Crossing Theorem: S1 / S2 = sqrt(T2 / T1).",
        "method1": "Let meeting point be M. Distance AM = S1 * T_meet = S2 * 9. Distance BM = S2 * T_meet = S1 * 4. T_meet = 9 S2 / S1 = 4 S1 / S2 => (S1/S2)^2 = 9/4 => S1/S2 = 3/2.",
        "method2": "Rodha Shortcut: S_A / S_B = sqrt(T_B / T_A) = sqrt(9 / 4) = 3 : 2.",
        "finalAnswer": "3 : 2",
        "trap": "Taking 4 : 9 or sqrt(4/9) = 2 : 3 (inverted ratio).",
        "isTita": false,
        "options": [
          "3 : 2",
          "2 : 3",
          "9 : 4",
          "4 : 9"
        ]
      },
      {
        "qNum": 244,
        "title": "Speed-Time Inversion with Departure Delay",
        "problem": "Walking at 3/4th of his normal speed, a student reaches school 20 minutes late. Find his normal scheduled travel time.",
        "concept": "Product constancy: S * T = D. If S becomes 3/4, T becomes 4/3.",
        "method1": "Normal time = T. New time = (4/3)T. Delay = (4/3)T - T = T/3 = 20 minutes => T = 60 minutes = 1 hour.",
        "method2": "Speed drops by 1/4 => Time increases by 1/(4 - 1) = 1/3. 1/3 of normal time = 20 min => Normal time = 60 min.",
        "finalAnswer": "60 minutes",
        "trap": "Calculating 3/4 of 20 = 15 minutes.",
        "isTita": false,
        "options": [
          "60 minutes",
          "72 minutes",
          "48 minutes",
          "90 minutes"
        ]
      },
      {
        "qNum": 245,
        "title": "Circular Track Three Runners Simultaneous Meeting",
        "problem": "Three runners A, B, and C run on a circular track of 1200 m with speeds 2 m/s, 4 m/s, and 6 m/s in the same direction. When will all three meet for the first time at the starting point?",
        "concept": "Time to meet at starting point is LCM of all three individual lap times.",
        "method1": "Lap(A) = 1200/2 = 600 s. Lap(B) = 1200/4 = 300 s. Lap(C) = 1200/6 = 200 s. T = LCM(600, 300, 200) = 600 seconds = 10 minutes.",
        "method2": "LCM(600, 300, 200) = 600 seconds flat.",
        "finalAnswer": "600 seconds",
        "trap": "Dividing length by relative speeds instead of taking LCM of individual lap times.",
        "isTita": false,
        "options": [
          "720 seconds",
          "600 seconds",
          "480 seconds",
          "900 seconds"
        ]
      },
      {
        "qNum": 246,
        "title": "Boat Travel with River Current Round Trip",
        "problem": "A man rows a boat 36 km downstream and 24 km upstream taking 4 hours each time. Find the speed of the river current.",
        "concept": "S_down = 36/4 = 9 km/h, S_up = 24/4 = 6 km/h. River speed v = (S_down - S_up) / 2.",
        "method1": "u + v = 9, u - v = 6. Subtracting gives 2v = 3 => v = 1.5 km/h.",
        "method2": "(9 - 6)/2 = 1.5 km/h.",
        "finalAnswer": "1.5 km/h",
        "trap": "Adding (9 + 6)/2 = 7.5 km/h (that is the boat speed in still water u, not stream v).",
        "isTita": false,
        "options": [
          "1.5 km/h",
          "7.5 km/h",
          "3.0 km/h",
          "2.0 km/h"
        ]
      },
      {
        "qNum": 247,
        "title": "Linear Race Headstart with Dead Heat",
        "problem": "In a 500 m race, the ratio of speeds of two contestants A and B is 3 : 4. A has a head start of 140 m. Who wins the race and by what distance?",
        "concept": "Determine who finishes the remaining race distance first.",
        "method1": "A needs to run 500 - 140 = 360 m. B needs to run the full 500 m. When A runs 360m, B runs 360 * (4/3) = 480m. B has run only 480m when A reaches the finish line! A wins by 500 - 480 = 20 m.",
        "method2": "Time for A = 360 / 3 = 120 units of time. In 120 units, B runs 120 * 4 = 480 m. A wins by 500 - 480 = 20 m.",
        "finalAnswer": "A wins by 20 m",
        "trap": "Assuming B always wins because B is faster (4 > 3). The 140m headstart was large enough for A to win!",
        "isTita": false,
        "options": [
          "A wins by 20 m",
          "B wins by 20 m",
          "A wins by 40 m",
          "Dead heat (tie)"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Time, Speed, Distance, Races & Escalators",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Time+Speed+Distance+Races+Escalators+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Circular Track Relative Velocity, Head-Start Ratio & Escalator Step Sums",
      "duration": "Complete Playlist • 12 Parts"
    }
  },
  {
    "id": "qa_functions",
    "title": "Functions, Domain-Range & Graph Transformations",
    "domain": "Algebra",
    "tier": "Tier S",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "3.0 Hours",
    "theoryHtml": "<h4>1. Domain & Range Analysis: First Principles</h4>\n<div class='theory-block'>A function $f: A \\to B$ assigns to each $x \\in A$ exactly one element $y \\in B$.\n* **Four Non-Negotiable Domain Constraints in $\\mathbb{R}$:**\n  1. Denominators cannot be zero: $\\frac{1}{g(x)} \\implies \\mathbf{g(x) \\ne 0}$.\n  2. Even roots must be non-negative: $\\sqrt{g(x)} \\implies \\mathbf{g(x) \\ge 0}$.\n  3. Log arguments must be strictly positive: $\\log_b[g(x)] \\implies \\mathbf{g(x) > 0}$.\n  4. Log base: $\\log_{b(x)}[A] \\implies \\mathbf{b(x) > 0 \\text{ and } b(x) \\ne 1}$.\n---</div>\n<h4>2. Standard Functional Equations (CAT 99%ile Catalog)</h4>\n<div class='theory-block'>Recognize the underlying algebraic function immediately:\n* $\\mathbf{f(x + y) = f(x) + f(y)} \\implies \\mathbf{f(x) = kx}$ (Linear)\n* $\\mathbf{f(xy) = f(x) + f(y)} \\implies \\mathbf{f(x) = k \\ln x}$ (Logarithmic)\n* $\\mathbf{f(x + y) = f(x) \\cdot f(y)} \\implies \\mathbf{f(x) = a^x}$ (Exponential)\n* $\\mathbf{f(xy) = f(x) \\cdot f(y)} \\implies \\mathbf{f(x) = x^k}$ (Power)\n* $\\mathbf{f(x) + f\\left(\\frac{1}{x}\\right) = f(x)f\\left(\\frac{1}{x}\\right)} \\implies \\mathbf{f(x) = 1 \\pm x^n}$ (Polynomial)\n---</div>\n<h4>3. Graph Transformations</h4>\n<div class='theory-block'>* $y = f(x) + c$: Shift UP by $c$.\n* $y = f(x + c)$: Shift LEFT by $c$.\n* $y = |f(x)|$: Reflect portion below $x$-axis UPWARDS ($y < 0 \\to y > 0$).\n* $y = f(|x|)$: Erase $x < 0$, mirror right half across $y$-axis.\n* Invertible function $f^{-1}(x)$ is the reflection of $f(x)$ across the line $\\mathbf{y = x}$.\n---</div>",
    "formulas": [
      {
        "formula": "f(x + y) = f(x) + f(y) \\iff f(x) = kx"
      },
      {
        "formula": "f(xy) = f(x) + f(y) \\iff f(x) = k \\ln x"
      },
      {
        "formula": "f(x + y) = f(x) \\cdot f(y) \\iff f(x) = a^x"
      },
      {
        "formula": "f(x) + f(1/x) = f(x)f(1/x) \\iff f(x) = 1 \\pm x^n"
      },
      {
        "formula": "y = |f(x)| \\implies \\text{Flip negative } y \\text{ across } x\\text{-axis}"
      }
    ],
    "questions": [
      {
        "qNum": 228,
        "title": "Polynomial Functional Equation Value Calculation",
        "problem": "A polynomial function f(x) satisfies f(x) + f(1/x) = f(x)f(1/x) for all x != 0. If f(4) = 65, find the value of f(3).",
        "concept": "Standard identity: f(x) = 1 +- x^n. Identify n and sign from given point.",
        "method1": "f(x) = 1 +- x^n. Since f(4) = 65 > 1, f(4) = 1 + 4^n = 65 => 4^n = 64 => n = 3. Hence f(x) = 1 + x^3. f(3) = 1 + 3^3 = 1 + 27 = 28.",
        "method2": "Direct inspection: 65 = 4^3 + 1 => n = 3. f(3) = 3^3 + 1 = 28 in 5 seconds.",
        "finalAnswer": "28",
        "trap": "Assuming f(x) = x^3 without the +1 constant.",
        "isTita": false,
        "options": [
          "28",
          "34",
          "22",
          "42"
        ]
      },
      {
        "qNum": 229,
        "title": "Domain of Composite Logarithmic Square Root",
        "problem": "Find the domain of real values of x for which f(x) = sqrt(log_0.5(x^2 - 5x + 7)) is defined.",
        "concept": "Radicand >= 0, and argument > 0. Removing log with base < 1 flips inequality direction.",
        "method1": "1) log_0.5(x^2 - 5x + 7) >= 0. Since base 0.5 < 1, x^2 - 5x + 7 <= (0.5)^0 = 1 => x^2 - 5x + 6 <= 0 => (x - 2)(x - 3) <= 0 => 2 <= x <= 3. 2) Argument x^2 - 5x + 7 > 0 has discriminant 25 - 28 = -3 < 0, so it is strictly positive for all real x. Domain = [2, 3].",
        "method2": "Wavy curve on (x-2)(x-3) <= 0 yields [2, 3].",
        "finalAnswer": "[2, 3]",
        "trap": "Forgetting that base < 1 reverses the inequality sign, leading to x <= 2 or x >= 3 (wrong!).",
        "isTita": false,
        "options": [
          "[2, 3]",
          "(2, 3)",
          "(-infinity, 2] U [3, infinity)",
          "[1, 6]"
        ]
      },
      {
        "qNum": 230,
        "title": "Composite Inverse Function Invariance",
        "problem": "If f(x) = (2x + 1) / (x - 2) for x != 2, what is f(f(x))?",
        "concept": "Substitute f(x) into itself or check if f is self-inverse.",
        "method1": "f(f(x)) = (2 * [(2x+1)/(x-2)] + 1) / ([(2x+1)/(x-2)] - 2) = (4x + 2 + x - 2) / (2x + 1 - 2x + 4) = 5x / 5 = x.",
        "method2": "Inspection: Swap x and y: x = (2y+1)/(y-2) => xy - 2x = 2y + 1 => y(x-2) = 2x+1 => y = (2x+1)/(x-2). f(x) equals its own inverse f^-1(x)! Therefore f(f(x)) = x identity.",
        "finalAnswer": "x",
        "trap": "Doing long algebraic expansion and committing a sign error in the denominator.",
        "isTita": false,
        "options": [
          "x",
          "1/x",
          "2x",
          "x^2"
        ]
      },
      {
        "qNum": 248,
        "title": "Domain of Real Function with Nested Radicals",
        "problem": "Find the domain of f(x) = sqrt(x - 2) + sqrt(7 - x).",
        "concept": "Radicands must both be >= 0 simultaneously (Intersection of conditions).",
        "method1": "x - 2 >= 0 => x >= 2. 7 - x >= 0 => x <= 7. Intersection: 2 <= x <= 7 => [2, 7].",
        "method2": "Direct: [2, 7].",
        "finalAnswer": "[2, 7]",
        "trap": "Taking union (-infinity, 7] U [2, infinity) instead of intersection.",
        "isTita": false,
        "options": [
          "[2, 7]",
          "(2, 7)",
          "[2, infinity)",
          "[-7, -2]"
        ]
      },
      {
        "qNum": 249,
        "title": "Functional Equation Additive Cauchy Model",
        "problem": "If f(x + y) = f(x) + f(y) for all real x, y and f(5) = 20, find f(12).",
        "concept": "f(x + y) = f(x) + f(y) implies f(x) = kx.",
        "method1": "f(x) = kx. f(5) = 5k = 20 => k = 4. Hence f(x) = 4x. f(12) = 4 * 12 = 48.",
        "method2": "Inspection: k = 20/5 = 4. 4 * 12 = 48.",
        "finalAnswer": "48",
        "trap": "Thinking f is non-linear.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 250,
        "title": "Exponential Functional Equation Product Form",
        "problem": "If f(x + y) = f(x)f(y) for all real x, y and f(1) = 3, evaluate the summation from x=1 to 4 of f(x).",
        "concept": "f(x + y) = f(x)f(y) implies f(x) = a^x.",
        "method1": "f(x) = a^x. f(1) = a^1 = 3 => a = 3. f(x) = 3^x. Sum = 3^1 + 3^2 + 3^3 + 3^4 = 3 + 9 + 27 + 81 = 120.",
        "method2": "GP sum: 3(3^4 - 1)/(3 - 1) = 3(80)/2 = 120.",
        "finalAnswer": "120",
        "trap": "Multiplying the terms instead of adding them.",
        "isTita": false,
        "options": [
          "144",
          "96",
          "120",
          "180"
        ]
      },
      {
        "qNum": 251,
        "title": "Even and Odd Function Decomposition",
        "problem": "If f(x) = (3^x - 1) / (3^x + 1), determine whether f(x) is even, odd, or neither.",
        "concept": "Test f(-x). If f(-x) = -f(x), it is strictly odd.",
        "method1": "f(-x) = (3^-x - 1) / (3^-x + 1) = (1/3^x - 1) / (1/3^x + 1) = (1 - 3^x) / (1 + 3^x) = -(3^x - 1)/(3^x + 1) = -f(x). Hence f(x) is strictly odd.",
        "method2": "At x = 1: f(1) = (3 - 1)/(3 + 1) = 2/4 = 1/2. At x = -1: f(-1) = (1/3 - 1)/(1/3 + 1) = -2/4 = -1/2. Since f(-1) = -f(1), it is odd.",
        "finalAnswer": "Odd function",
        "trap": "Claiming it is neither because of the presence of exponential 3^x.",
        "isTita": false,
        "options": [
          "Odd function",
          "Even function",
          "Neither even nor odd",
          "Both even and odd"
        ]
      },
      {
        "qNum": 252,
        "title": "Range of Real Quadratic Rational Function",
        "problem": "Find the range of f(x) = x^2 / (x^2 + 1) for all real x.",
        "concept": "Analyze limits as x -> 0 and x -> infinity, or invert to quadratic.",
        "method1": "Since x^2 >= 0 and x^2 < x^2 + 1, f(x) >= 0 and f(x) < 1. At x = 0, f(0) = 0. As x -> infinity, f(x) -> 1. Range = [0, 1).",
        "method2": "Rewrite 1 - 1/(x^2 + 1). Minimum at x=0 gives 1 - 1 = 0. As x -> inf, 1 - 0 = 1. Range = [0, 1).",
        "finalAnswer": "[0, 1)",
        "trap": "Including 1 in the range ([0, 1]). f(x) can never equal 1 for finite real x because 1/(x^2+1) > 0.",
        "isTita": false,
        "options": [
          "[0, 1)",
          "[0, 1]",
          "(0, 1)",
          "(-infinity, 1)"
        ]
      },
      {
        "qNum": 253,
        "title": "Periodic Function Period Calculation",
        "problem": "If f(x + 2) + f(x) = 0 for all real x, find the fundamental period of f(x).",
        "concept": "Iterate equation to find T such that f(x + T) = f(x).",
        "method1": "f(x + 2) = -f(x). Replace x with x + 2: f(x + 4) = -f(x + 2) = -(-f(x)) = f(x). Therefore f(x + 4) = f(x). The fundamental period is 4.",
        "method2": "Direct: Shift by 2 flips sign; two shifts of 2 (shift of 4) flips sign twice back to positive. Period = 4.",
        "finalAnswer": "4",
        "trap": "Stating period is 2 (2 inverts sign, it does not repeat).",
        "isTita": false,
        "options": [
          "5",
          "4",
          "3",
          "6"
        ]
      },
      {
        "qNum": 254,
        "title": "Graph Transformation Absolute Value Flip",
        "problem": "The equation |x^2 - 4x + 3| = k has exactly 4 distinct real roots. Find the range of k.",
        "concept": "Plot y = |(x-1)(x-3)|. Roots are at 1 and 3. Vertex of x^2-4x+3 is at x=2 with value -1. Inverted apex has height +1.",
        "method1": "Original vertex: f(2) = 4 - 8 + 3 = -1. When reflected |f(2)| = 1. For 4 intersections, the horizontal line y = k must lie strictly between the x-axis (y = 0) and the local maximum (y = 1). Hence 0 < k < 1.",
        "method2": "Inspection of W-shaped curve: 4 solutions occur strictly in (0, 1).",
        "finalAnswer": "0 < k < 1",
        "trap": "Including k = 1 (at k = 1 there are only 3 roots) or k = 0 (2 roots).",
        "isTita": false,
        "options": [
          "0 < k < 1",
          "0 <= k <= 1",
          "k > 1",
          "k = 1"
        ]
      },
      {
        "qNum": 255,
        "title": "Bijective Function Inverse Evaluation",
        "problem": "If f(x) = (x - 3) / (2x + 5) for x != -2.5, find f^-1(2).",
        "concept": "To find f^-1(2), set f(x) = 2 and solve for x.",
        "method1": "(x - 3) / (2x + 5) = 2 => x - 3 = 4x + 10 => 3x = -13 => x = -13/3.",
        "method2": "Direct solution of f(x) = 2 gives x = -13/3.",
        "finalAnswer": "-13/3",
        "trap": "Finding f(2) instead of f^-1(2).",
        "isTita": false,
        "options": [
          "-13/3",
          "-1/9",
          "13/3",
          "2/5"
        ]
      },
      {
        "qNum": 256,
        "title": "Composite Function Three-Fold Evaluation",
        "problem": "If f(x) = 1 / (1 - x), find f(f(f(x))) for x not in {0, 1}.",
        "concept": "Cyclic composition: compute f(f(x)) then f(f(f(x))).",
        "method1": "f(f(x)) = 1 / (1 - 1/(1-x)) = 1 / (-x/(1-x)) = (x - 1)/x = 1 - 1/x. f(f(f(x))) = 1 / (1 - (1 - 1/x)) = 1 / (1/x) = x.",
        "method2": "Standard cyclic trio: f1 = 1/(1-x), f2 = (x-1)/x, f3 = x. The three-fold composition is identity x.",
        "finalAnswer": "x",
        "trap": "Making an algebraic sign error when simplifying the nested fraction.",
        "isTita": false,
        "options": [
          "x",
          "1 - x",
          "1/(1 - x)",
          "1/x"
        ]
      },
      {
        "qNum": 257,
        "title": "Logarithmic Functional Equation Log Base Multiplier",
        "problem": "A function satisfies f(xy) = f(x) + f(y) for all positive x, y. If f(2) = 1, find f(32).",
        "concept": "f(x) = k * log_b(x). f(2) = 1 => f(x) = log_2(x).",
        "method1": "f(32) = f(2^5) = 5 * f(2) = 5 * 1 = 5.",
        "method2": "By logarithmic law: f(32) = 5 f(2) = 5.",
        "finalAnswer": "5",
        "trap": "Multiplying 32 by 1.",
        "isTita": false,
        "options": [
          "6",
          "5",
          "4",
          "7"
        ]
      },
      {
        "qNum": 258,
        "title": "Number of Onto Surjective Functions",
        "problem": "Find the number of surjective (onto) functions from set A = {1, 2, 3, 4} to set B = {a, b}.",
        "concept": "Total functions = 2^4 = 16. Subtract non-surjective functions (functions mapping all elements to only 'a' or only 'b').",
        "method1": "Total mappings = 2^4 = 16. Not onto: all map to 'a' (1 way) or all to 'b' (1 way). Onto functions = 16 - 2 = 14.",
        "method2": "Formula: 2! * S(4, 2) = 2 * 7 = 14.",
        "finalAnswer": "14",
        "trap": "Forgetting to subtract the 2 constant functions.",
        "isTita": false,
        "options": [
          "17",
          "11",
          "14",
          "21"
        ]
      },
      {
        "qNum": 259,
        "title": "Symmetric Invariant Functional Sum",
        "problem": "If f(x) = 4^x / (4^x + 2), find the value of f(1/2026) + f(2025/2026).",
        "concept": "Symmetric identity: f(x) + f(1 - x) = 1.",
        "method1": "f(1 - x) = 4^(1-x) / (4^(1-x) + 2) = (4/4^x) / (4/4^x + 2) = 4 / (4 + 2 * 4^x) = 2 / (2 + 4^x). Adding f(x) + f(1 - x) = 4^x / (4^x + 2) + 2 / (4^x + 2) = (4^x + 2) / (4^x + 2) = 1. Since 1/2026 + 2025/2026 = 1, the sum is 1.",
        "method2": "Rodha Invariant: Any pair summing to 1 evaluates to 1.",
        "finalAnswer": "1",
        "trap": "Attempting to substitute the large number 2026.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Functions, Domain, Range & Graph Transformations",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Functions+Graphs+Transformations+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "f(x) Shifting, Reflection, Composite Iterations f^n(x) & Functional Equations",
      "duration": "Complete Playlist • 7 Parts"
    }
  },
  {
    "id": "qa_inequalities",
    "title": "Inequalities, Modulus & Wavy Curve Method",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. The Wavy Curve (Sign Scheme) Protocol</h4>\n<div class='theory-block'>To solve rational polynomial inequalities $\\frac{P(x)}{Q(x)} \\ge 0$:\n1. Factorize completely: $\\frac{(x - r_1)^{k_1} (x - r_2)^{k_2}}{(x - d_1)^{m_1}} \\ge 0$ with coefficient of $x$ strictly $+1$.\n2. Plot roots in ascending order on number line.\n3. Start curve from extreme right above the line ($+ve$).\n4. **Odd Multiplicity ($1, 3, 5$):** Curve **crosses** the line (sign flips).\n5. **Even Multiplicity ($2, 4, 6$):** Curve **bounces off** the line (sign remains same).\n6. Denominator roots $d_i$ are ALWAYS strictly excluded (open circle) to prevent division by zero!\n---</div>\n<h4>2. Modulus Function & Distance Plateau</h4>\n<div class='theory-block'>$|x - a|$ represents geometric distance from $a$ on the number line.\n* $|x - a| \\le k \\iff a - k \\le x \\le a + k$.\n* For $f(x) = |x - a| + |x - b|$ with $a < b$:\n  $$\\mathbf{\\text{Minimum Value} = b - a}$$\n  achieved on the **entire plateau interval $[a, b]$**.\n* For odd points $|x - a| + |x - b| + |x - c|$ ($a < b < c$), minimum occurs uniquely at the **median point $x = b$**: $\\text{Min} = c - a$.\n---</div>",
    "formulas": [
      {
        "formula": "\\text{Wavy Curve: Odd power } \\implies \\text{Cross; Even power } \\implies \\text{Bounce}"
      },
      {
        "formula": "|x - a| \\le k \\iff a - k \\le x \\le a + k"
      },
      {
        "formula": "\\min(|x - a| + |x - b|) = b - a \\quad \\text{on } x \\in [a, b]"
      },
      {
        "formula": "\\min(|x - a| + |x - b| + |x - c|) = c - a \\quad \\text{at median } x = b"
      }
    ],
    "questions": [
      {
        "qNum": 231,
        "title": "Minimum Value of Sum of Three Modulus Expressions",
        "problem": "Find the minimum value of f(x) = |x - 3| + |x - 7| + |x - 12| for all real x.",
        "concept": "For odd number of absolute value terms, minimum occurs at the MEDIAN critical point.",
        "method1": "Critical points in ascending order: 3, 7, 12. Median point is x = 7. Evaluate f(7) = |7 - 3| + |7 - 7| + |7 - 12| = 4 + 0 + 5 = 9.",
        "method2": "Shortcut: Minimum is simply the distance between the two outermost points: 12 - 3 = 9.",
        "finalAnswer": "9",
        "trap": "Testing the mean (3+7+12)/3 = 7.33 instead of the integer median 7.",
        "isTita": false,
        "options": [
          "10",
          "8",
          "11",
          "9"
        ]
      },
      {
        "qNum": 232,
        "title": "Rational Inequality via Wavy Curve with Multiplicity",
        "problem": "Find the number of integer solutions satisfying (x - 2)^2 * (x - 5) / (x + 1) <= 0.",
        "concept": "Wavy curve sign analysis. Even power bounces; denominator root strictly excluded.",
        "method1": "Critical points: -1 (odd power 1, denominator), 2 (even power 2, numerator), 5 (odd power 1, numerator). Trace: x > 5 is +; 2 < x < 5 is -; -1 < x < 2 is - (bounces at 2); x < -1 is +. We want <= 0. Valid intervals: (-1, 5] (denominator -1 excluded). Check isolated roots: at x = 2, expression is 0 <= 0 (included). Valid integers: 0, 1, 2, 3, 4, 5. Total = 6 integers.",
        "method2": "Direct interval check: x in (-1, 5] gives integers {0, 1, 2, 3, 4, 5}, exactly 6 integers.",
        "finalAnswer": "6",
        "trap": "Including -1 (division by zero error) or forgetting x = 2 where expression equals 0.",
        "isTita": false,
        "options": [
          "5",
          "6",
          "7",
          "4"
        ]
      },
      {
        "qNum": 260,
        "title": "Modulus Plateau Minimum with 4 Critical Points",
        "problem": "Find the minimum value of f(x) = |x - 1| + |x - 3| + |x - 8| + |x - 12| for all real x.",
        "concept": "For even number of points, minimum occurs on the median interval [x_2, x_3].",
        "method1": "Sorted points: 1, 3, 8, 12. Median interval is [3, 8]. Pick any point in [3, 8], say x = 5: f(5) = |5-1| + |5-3| + |5-8| + |5-12| = 4 + 2 + 3 + 7 = 16.",
        "method2": "Rodha Shortcut: Sum of distances between paired outer points = (12 - 1) + (8 - 3) = 11 + 5 = 16.",
        "finalAnswer": "16",
        "trap": "Testing only single boundary points instead of the entire plateau.",
        "isTita": false,
        "options": [
          "16",
          "19",
          "13",
          "24"
        ]
      },
      {
        "qNum": 261,
        "title": "Quadratic Inequality with Negative Leading Coefficient",
        "problem": "Solve for real x: -2x^2 + 5x + 3 >= 0.",
        "concept": "Multiply by -1 to make leading coefficient positive, FLIP the inequality sign.",
        "method1": "2x^2 - 5x - 3 <= 0. Factorize: 2x^2 - 6x + x - 3 <= 0 => 2x(x - 3) + 1(x - 3) <= 0 => (2x + 1)(x - 3) <= 0. By wavy curve: -1/2 <= x <= 3.",
        "method2": "Roots of equation are 3 and -0.5. Since parabola opens downward, >= 0 between the roots: [-0.5, 3].",
        "finalAnswer": "[-0.5, 3]",
        "trap": "Forgetting to reverse >= to <= when multiplying by -1.",
        "isTita": false,
        "options": [
          "[-0.5, 3]",
          "(-infinity, -0.5] U [3, infinity)",
          "[-3, 0.5]",
          "(0.5, 3)"
        ]
      },
      {
        "qNum": 262,
        "title": "Triangle Inequality Modulus Upper Bound",
        "problem": "If |x| <= 4 and |y| <= 6, find the maximum possible value of |2x - 3y|.",
        "concept": "Triangle inequality: |A - B| <= |A| + |B|.",
        "method1": "|2x - 3y| <= |2x| + |3y| = 2|x| + 3|y| <= 2(4) + 3(6) = 8 + 18 = 26. Achievable when x = 4, y = -6: |2(4) - 3(-6)| = |8 + 18| = 26.",
        "method2": "Direct maximum: 2(4) - 3(-6) = 8 + 18 = 26.",
        "finalAnswer": "26",
        "trap": "Substituting y = 6 giving |8 - 18| = 10.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 263,
        "title": "Double Modulus Equation Root Counting",
        "problem": "How many real solutions exist for |x - 2| + |x - 5| = 3?",
        "concept": "The distance between 2 and 5 is exactly 3. Minimum value of |x-2| + |x-5| is 3, achieved on entire interval [2, 5].",
        "method1": "For any x in [2, 5]: (x - 2) + (5 - x) = 3 = 3. Every real number in [2, 5] is a valid solution. Therefore there are infinitely many real solutions.",
        "method2": "Plateau principle: since RHS equals the distance |5 - 2| = 3, the solution set is the entire continuous segment [2, 5] => Infinitely many.",
        "finalAnswer": "Infinitely many",
        "trap": "Answering 2 (only checking the endpoints x=2 and x=5).",
        "isTita": false,
        "options": [
          "Infinitely many",
          "2",
          "1",
          "0"
        ]
      },
      {
        "qNum": 264,
        "title": "Rational Inequality Strictly Positive Solutions",
        "problem": "Find the number of positive integers x satisfying (x - 3)(x - 7) / (x - 5) < 0.",
        "concept": "Wavy curve with roots 3, 5, 7. All odd multiplicity 1.",
        "method1": "Roots: 3, 5, 7. Sign chart: x > 7 (+); 5 < x < 7 (-); 3 < x < 5 (+); x < 3 (-). Expression is < 0 in (-infinity, 3) and (5, 7). Positive integers in (-infinity, 3) are {1, 2}. Positive integers in (5, 7) is {6}. Total positive integers = {1, 2, 6} = 3 integers.",
        "method2": "Count: x = 1, 2, 6 => 3 integers.",
        "finalAnswer": "3",
        "trap": "Including 0 (0 is not a positive integer) or including 3, 5, 7 (strictly less than 0 required).",
        "isTita": false,
        "options": [
          "3",
          "2",
          "4",
          "5"
        ]
      },
      {
        "qNum": 265,
        "title": "AM-GM with Three Variable Product Constraint",
        "problem": "If a, b, c are positive real numbers such that abc = 64, find the minimum value of a + 2b + 4c.",
        "concept": "Apply AM-GM to the terms a, 2b, 4c: (a + 2b + 4c) / 3 >= (a * 2b * 4c)^(1/3).",
        "method1": "Product of terms = a * 2b * 4c = 8abc = 8 * 64 = 512. (a + 2b + 4c)/3 >= (512)^(1/3) = 8 => a + 2b + 4c >= 3 * 8 = 24.",
        "method2": "Equality when a = 2b = 4c = 8 => a=8, b=4, c=2. Sum = 8 + 8 + 8 = 24.",
        "finalAnswer": "24",
        "trap": "Taking (abc)^(1/3) = 4 without multiplying by the coefficients 2 and 4.",
        "isTita": false,
        "options": [
          "29",
          "24",
          "19",
          "36"
        ]
      },
      {
        "qNum": 266,
        "title": "Modulus Inequality with Quadratic Inside",
        "problem": "Solve for x: |x^2 - 5x| < 6.",
        "concept": "-6 < x^2 - 5x < 6. Solve both inequalities simultaneously.",
        "method1": "1) x^2 - 5x < 6 => x^2 - 5x - 6 < 0 => (x - 6)(x + 1) < 0 => -1 < x < 6. 2) x^2 - 5x > -6 => x^2 - 5x + 6 > 0 => (x - 2)(x - 3) > 0 => x < 2 or x > 3. Intersection: (-1, 2) U (3, 6).",
        "method2": "Combined: x in (-1, 2) U (3, 6).",
        "finalAnswer": "(-1, 2) U (3, 6)",
        "trap": "Forgetting the lower bound > -6 and only solving < 6.",
        "isTita": false,
        "options": [
          "(-1, 2) U (3, 6)",
          "(-1, 6)",
          "(2, 3)",
          "[-1, 6]"
        ]
      },
      {
        "qNum": 267,
        "title": "Cauchy-Schwarz Linear Sum Optimization",
        "problem": "If x^2 + y^2 = 25 for real x, y, find the maximum value of 3x + 4y.",
        "concept": "Cauchy-Schwarz: (ax + by)^2 <= (a^2 + b^2)(x^2 + y^2).",
        "method1": "(3x + 4y)^2 <= (3^2 + 4^2)(x^2 + y^2) = (9 + 16)(25) = 25 * 25 = 625 => |3x + 4y| <= 25. Maximum is 25.",
        "method2": "Inspection: Vector dot product |(3, 4)| * |(x, y)| = 5 * 5 = 25.",
        "finalAnswer": "25",
        "trap": "Testing integer points like (0, 5) giving 20, missing the optimal point (3, 4) which gives 25.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 268,
        "title": "Sum of Reciprocals AM-HM Lower Bound",
        "problem": "If x, y, z are positive real numbers such that x + y + z = 1, find the minimum value of 1/x + 1/y + 1/z.",
        "concept": "AM-HM inequality: (x + y + z)/3 >= 3 / (1/x + 1/y + 1/z) => (x + y + z)(1/x + 1/y + 1/z) >= 9.",
        "method1": "(x + y + z)(1/x + 1/y + 1/z) >= 9. Since x + y + z = 1, 1 * (1/x + 1/y + 1/z) >= 9. Equality when x = y = z = 1/3, giving 3 + 3 + 3 = 9.",
        "method2": "Direct minimum = 3^2 = 9.",
        "finalAnswer": "9",
        "trap": "Setting x = y = z = 1 (violating the constraint x + y + z = 1).",
        "isTita": false,
        "options": [
          "9",
          "10",
          "8",
          "11"
        ]
      },
      {
        "qNum": 269,
        "title": "Strict Inequality Solution Range for Log Expression",
        "problem": "Find all real x satisfying log_2(x - 1) < log_2(2x - 5).",
        "concept": "Base 2 > 1 preserves inequality: x - 1 < 2x - 5, but must verify individual domains.",
        "method1": "Domain: x - 1 > 0 => x > 1, and 2x - 5 > 0 => x > 2.5. Common domain: x > 2.5. Inequality: x - 1 < 2x - 5 => x > 4. Combined: x > 4 => (4, infinity).",
        "method2": "Direct: x > 4.",
        "finalAnswer": "(4, infinity)",
        "trap": "Forgetting the domain constraint and testing values like x = 2.",
        "isTita": false,
        "options": [
          "(4, infinity)",
          "(2.5, 4)",
          "(1, infinity)",
          "[4, infinity)"
        ]
      },
      {
        "qNum": 270,
        "title": "Integer Solutions to Double Inequality with Floor",
        "problem": "Find the number of integers x satisfying 3 <= |2x - 7| <= 11.",
        "concept": "Split into two intervals: 3 <= 2x - 7 <= 11 OR -11 <= 2x - 7 <= -3.",
        "method1": "Case 1: 3 <= 2x - 7 <= 11 => 10 <= 2x <= 18 => 5 <= x <= 9. Integers: {5, 6, 7, 8, 9} (5 integers). Case 2: -11 <= 2x - 7 <= -3 => -4 <= 2x <= 4 => -2 <= x <= 2. Integers: {-2, -1, 0, 1, 2} (5 integers). Total = 5 + 5 = 10 integers.",
        "method2": "Each side gives 5 integers: total 10.",
        "finalAnswer": "10",
        "trap": "Only solving the positive case and missing the 5 negative/small integer solutions.",
        "isTita": false,
        "options": [
          "11",
          "9",
          "10",
          "12"
        ]
      },
      {
        "qNum": 271,
        "title": "AM-GM with Inverse Powers",
        "problem": "For positive real x, find the minimum value of x^2 + 1/x^2 + 4.",
        "concept": "x^2 + 1/x^2 >= 2 by AM-GM. Minimum = 2 + 4 = 6.",
        "method1": "(x^2 + 1/x^2)/2 >= sqrt(x^2 * 1/x^2) = 1 => x^2 + 1/x^2 >= 2. Adding 4 gives minimum = 6. Equality at x = 1.",
        "method2": "At x = 1: 1 + 1 + 4 = 6.",
        "finalAnswer": "6",
        "trap": "Assuming minimum occurs at x = 0 (undefined at x = 0).",
        "isTita": false,
        "options": [
          "7",
          "5",
          "8",
          "6"
        ]
      },
      {
        "qNum": 272,
        "title": "Wavy Curve with Repeated Factors and Sign Reversal",
        "problem": "Solve for x: (2 - x)(x + 4)^2 / (x - 1) >= 0.",
        "concept": "Make leading coefficient of (2 - x) positive by factoring out -1 and FLIPPING the inequality.",
        "method1": "(x - 2)(x + 4)^2 / (x - 1) <= 0. Critical points: -4 (even power 2), 1 (odd power 1, denominator), 2 (odd power 1, numerator). Trace from right: x > 2 (+); 1 < x < 2 (-); -4 < x < 1 (+); x < -4 (+) (bounces at -4). We want <= 0. Interval: (1, 2] (denominator 1 excluded, 2 included). Plus isolated root at x = -4 where expression is 0 <= 0! Solution: (1, 2] U {-4}.",
        "method2": "Wavy curve gives (1, 2] U {-4}.",
        "finalAnswer": "(1, 2] U {-4}",
        "trap": "Missing the isolated root x = -4 where the numerator is 0.",
        "isTita": false,
        "options": [
          "(1, 2] U {-4}",
          "(1, 2]",
          "[-4, 2]",
          "[1, 2]"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Inequalities, Absolute Modulus & Wavy Curve Method",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Inequalities+Modulus+Wavy+Curve+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Wavy Curve Sign Alteration, Critical Point Method for Nested Modulus",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_maxima_minima",
    "title": "Maxima & Minima (AM-GM & Optimization)",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 Question (3 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Parabolic Optimization & Vertex Derivation</h4>\n<div class='theory-block'>For quadratic $f(x) = ax^2 + bx + c$:\n$$f(x) = a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{D}{4a} \\quad (D = b^2 - 4ac)$$\n* **$a > 0$ (Opens Upward):** Minimum $\\mathbf{f_{\\min} = -\\frac{D}{4a} = \\frac{4ac - b^2}{4a}}$ at $\\mathbf{x = -\\frac{b}{2a}}$.\n* **$a < 0$ (Opens Downward):** Maximum $\\mathbf{f_{\\max} = -\\frac{D}{4a} = \\frac{4ac - b^2}{4a}}$ at $\\mathbf{x = -\\frac{b}{2a}}$.\n---</div>\n<h4>2. The AM-GM Inequality & Term Splitting</h4>\n<div class='theory-block'>For positive reals $a_i > 0$: $\\mathbf{\\frac{\\sum a_i}{n} \\ge \\sqrt[n]{\\prod a_i}}$ (equality iff $a_1 = a_2 = \\dots = a_n$).\n* **Term Splitting Rule:** To minimize $2x + \\frac{16}{x^2}$ for $x > 0$:\n  Split $2x = x + x$: $f(x) = x + x + \\frac{16}{x^2} \\ge 3\\sqrt[3]{x \\cdot x \\cdot \\frac{16}{x^2}} = 3\\sqrt[3]{16} = 6\\sqrt[3]{2}$.\n---</div>\n<h4>3. Discriminant Range Method for Rational Functions</h4>\n<div class='theory-block'>To find range of $y = \\frac{x^2 - x + 1}{x^2 + x + 1}$:\n1. Cross-multiply: $(y - 1)x^2 + (y + 1)x + (y - 1) = 0$.\n2. For real $x$, $\\mathbf{\\Delta_x \\ge 0 \\implies (y + 1)^2 - 4(y - 1)^2 \\ge 0}$.\n3. Factorize to find range bounds: $y \\in [1/3, 3]$.\n---</div>",
    "formulas": [
      {
        "formula": "\\text{Vertex: } x = -\\frac{b}{2a}, \\quad y = -\\frac{D}{4a} = \\frac{4ac - b^2}{4a}"
      },
      {
        "formula": "\\text{AM} \\ge \\text{GM} \\iff \\frac{a+b}{2} \\ge \\sqrt{ab} \\quad (a, b > 0)"
      },
      {
        "formula": "\\Delta_x \\ge 0 \\implies \\text{Real root condition to find range } [y_{\\min}, y_{\\max}]"
      }
    ],
    "questions": [
      {
        "qNum": 233,
        "title": "AM-GM Minimization with Term Splitting",
        "problem": "Find the minimum value of f(x) = 4x + 9/x for all x > 0.",
        "concept": "Direct AM-GM on two terms: (4x + 9/x)/2 >= sqrt(4x * 9/x) = sqrt(36) = 6.",
        "method1": "AM >= GM: (4x + 9/x)/2 >= sqrt(36) = 6 => 4x + 9/x >= 12. Equality occurs when 4x = 9/x => x^2 = 9/4 => x = 3/2 > 0.",
        "method2": "Inspection: 2 * sqrt(4 * 9) = 2 * 6 = 12.",
        "finalAnswer": "12",
        "trap": "Applying AM-GM when x could be negative (for x < 0, expression goes to -infinity).",
        "isTita": false,
        "options": [
          "14",
          "12",
          "10",
          "18"
        ]
      },
      {
        "qNum": 234,
        "title": "Quadratic Rational Function Range Bounds",
        "problem": "Find the maximum value of y = (x^2 - x + 1) / (x^2 + x + 1) for real values of x.",
        "concept": "Form quadratic in x, set discriminant Delta >= 0.",
        "method1": "y(x^2 + x + 1) = x^2 - x + 1 => (y - 1)x^2 + (y + 1)x + (y - 1) = 0. For real x, Delta = (y+1)^2 - 4(y-1)^2 >= 0 => [(y+1) - 2(y-1)][(y+1) + 2(y-1)] >= 0 => (3 - y)(3y - 1) >= 0 => (y - 3)(3y - 1) <= 0 => 1/3 <= y <= 3. Maximum value is 3.",
        "method2": "At x = -1: y = (1 + 1 + 1)/(1 - 1 + 1) = 3/1 = 3.",
        "finalAnswer": "3",
        "trap": "Substituting x = 0 which gives 1 (a valid value, but not the maximum).",
        "isTita": false,
        "options": [
          "3",
          "1",
          "1/3",
          "4"
        ]
      },
      {
        "qNum": 273,
        "title": "Quadratic Parabola Vertex Maximum with Domain Constraint",
        "problem": "Find the maximum value of f(x) = -2x^2 + 8x + 5 on the interval [3, 6].",
        "concept": "Check unconstrained vertex x_v = -b/(2a). If outside interval, maximum occurs at boundary.",
        "method1": "Vertex x_v = -8 / (2 * -2) = 2. But the domain is restricted to [3, 6], so the vertex x = 2 lies OUTSIDE the interval! Since a = -2 < 0, the parabola is decreasing for x >= 2. Therefore the maximum on [3, 6] occurs at the left boundary x = 3: f(3) = -2(9) + 8(3) + 5 = -18 + 24 + 5 = 11.",
        "method2": "Evaluate endpoints: f(3) = 11, f(6) = -2(36) + 48 + 5 = -19. Maximum is 11.",
        "finalAnswer": "11",
        "trap": "Blindly calculating the unconstrained vertex value f(2) = 13, which is unreachable on [3, 6]!",
        "isTita": false,
        "options": [
          "13",
          "11",
          "9",
          "17"
        ]
      },
      {
        "qNum": 274,
        "title": "Product Maximization with Constant Linear Sum",
        "problem": "If x and y are positive real numbers such that 3x + 2y = 24, find the maximum value of x^2 * y.",
        "concept": "To maximize x^2 * y, split the sum into 2 equal parts of x and 1 part of y: (3x/2) + (3x/2) + 2y = 24.",
        "method1": "Split terms: (1.5x) + (1.5x) + (2y) = 24. For product to be maximized, all 3 terms must be equal: 1.5x = 1.5x = 2y = 24 / 3 = 8. 1.5x = 8 => x = 16/3. 2y = 8 => y = 4. Max product x^2 * y = (16/3)^2 * 4 = (256/9) * 4 = 1024 / 9.",
        "method2": "Term splitting gives 1024 / 9.",
        "finalAnswer": "1024/9",
        "trap": "Setting 3x = 2y = 12 (ignoring the exponent 2 on x).",
        "isTita": false,
        "options": [
          "1024/9",
          "128",
          "256/3",
          "64"
        ]
      },
      {
        "qNum": 275,
        "title": "Minimum Value of Quadratic over Linear Function",
        "problem": "For x > 1, find the minimum value of f(x) = (x^2 - x + 1) / (x - 1).",
        "concept": "Substitute t = x - 1 > 0, rewrite in terms of t.",
        "method1": "Let t = x - 1 => x = t + 1. f(x) = ((t+1)^2 - (t+1) + 1) / t = (t^2 + 2t + 1 - t - 1 + 1) / t = (t^2 + t + 1) / t = t + 1 + 1/t. For t > 0, t + 1/t >= 2 (by AM-GM). Minimum = 2 + 1 = 3.",
        "method2": "AM-GM on t + 1/t gives 2. 2 + 1 = 3 at t = 1 (x = 2).",
        "finalAnswer": "3",
        "trap": "Differentiating and making an arithmetic error.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 276,
        "title": "Minimum Value with Square Root of Sum of Squares",
        "problem": "Find the minimum value of sqrt(x^2 + 4) + sqrt((6 - x)^2 + 9) for real x.",
        "concept": "Geometric distance interpretation: distance between (0, 2) and (6, -3) via point (x, 0) on x-axis.",
        "method1": "The shortest path from (0, 2) to (6, 3) reflecting off the x-axis is the straight-line distance from (0, -2) to (6, 3): Distance = sqrt((6 - 0)^2 + (3 - (-2))^2) = sqrt(6^2 + 5^2) = sqrt(36 + 25) = sqrt(61).",
        "method2": "Heron's shortest path reflection: sqrt(6^2 + (2 + 3)^2) = sqrt(36 + 25) = sqrt(61).",
        "finalAnswer": "sqrt(61)",
        "trap": "Minimizing each square root separately.",
        "isTita": false,
        "options": [
          "sqrt(61)",
          "sqrt(52)",
          "7",
          "8"
        ]
      },
      {
        "qNum": 277,
        "title": "Sum of Squares Minimization with Sum Constraint",
        "problem": "If x + y + z = 12 for real numbers x, y, z, find the minimum value of x^2 + y^2 + z^2.",
        "concept": "Cauchy-Schwarz: (x^2 + y^2 + z^2)(1^2 + 1^2 + 1^2) >= (x + y + z)^2.",
        "method1": "3(x^2 + y^2 + z^2) >= 12^2 = 144 => x^2 + y^2 + z^2 >= 144 / 3 = 48. Equality when x = y = z = 4: 4^2 + 4^2 + 4^2 = 16 + 16 + 16 = 48.",
        "method2": "Symmetry: minimum occurs when x = y = z = 12/3 = 4. 3 * 4^2 = 48.",
        "finalAnswer": "48",
        "trap": "Assuming variables must be integers.",
        "isTita": false,
        "options": [
          "58",
          "48",
          "38",
          "72"
        ]
      },
      {
        "qNum": 278,
        "title": "Maximum Value of Trigonometric/Algebraic Hybrid",
        "problem": "Find the maximum value of 5 sin(x) + 12 cos(x) + 7.",
        "concept": "The range of a sin(x) + b cos(x) is [-sqrt(a^2 + b^2), +sqrt(a^2 + b^2)].",
        "method1": "sqrt(5^2 + 12^2) = sqrt(25 + 144) = sqrt(169) = 13. Max value of 5 sin x + 12 cos x is 13. Adding 7: 13 + 7 = 20.",
        "method2": "Direct: 13 + 7 = 20.",
        "finalAnswer": "20",
        "trap": "Adding 5 + 12 + 7 = 24 (sin and cos cannot be 1 simultaneously).",
        "isTita": false,
        "options": [
          "24",
          "16",
          "20",
          "30"
        ]
      },
      {
        "qNum": 279,
        "title": "Reciprocal Sum Minimization with Linear Sum Constraint",
        "problem": "If a and b are positive reals such that a + b = 6, find the minimum value of 1/a + 1/b.",
        "concept": "(a + b)(1/a + 1/b) >= 4 by AM-HM.",
        "method1": "6(1/a + 1/b) >= 4 => 1/a + 1/b >= 4/6 = 2/3. Achieved when a = b = 3: 1/3 + 1/3 = 2/3.",
        "method2": "By symmetry a = b = 3: 1/3 + 1/3 = 2/3.",
        "finalAnswer": "2/3",
        "trap": "Testing asymmetric values like a=1, b=5 giving 1 + 1/5 = 1.2 > 0.67.",
        "isTita": false,
        "options": [
          "2/3",
          "1/3",
          "1",
          "4/3"
        ]
      },
      {
        "qNum": 280,
        "title": "Maxima of Fourth Degree Biquadratic",
        "problem": "Find the maximum value of f(x) = 10 - (x^2 - 4)^2.",
        "concept": "A square is always non-negative: (x^2 - 4)^2 >= 0. Maximum occurs when square is 0.",
        "method1": "Since (x^2 - 4)^2 >= 0, 10 - (x^2 - 4)^2 <= 10. Equality occurs when x^2 - 4 = 0 => x = +-2 (both real). Maximum value is 10.",
        "method2": "Set square to zero: max = 10.",
        "finalAnswer": "10",
        "trap": "Expanding to 4th degree and attempting differentiation.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 281,
        "title": "Minimum Value of Exponential Sum",
        "problem": "Find the minimum value of f(x) = 2^x + 2^(4 - x) for all real x.",
        "concept": "AM-GM on 2^x and 2^(4 - x): product is 2^x * 2^(4 - x) = 2^4 = 16.",
        "method1": "(2^x + 2^(4 - x))/2 >= sqrt(2^x * 2^(4 - x)) = sqrt(16) = 4 => 2^x + 2^(4 - x) >= 8. Equality when 2^x = 2^(4 - x) => x = 4 - x => x = 2.",
        "method2": "At x = 2: 2^2 + 2^2 = 4 + 4 = 8.",
        "finalAnswer": "8",
        "trap": "Substituting x = 0 giving 1 + 16 = 17.",
        "isTita": false,
        "options": [
          "9",
          "8",
          "7",
          "10"
        ]
      },
      {
        "qNum": 282,
        "title": "Restricted Parabola Extremum with Left Boundary Max",
        "problem": "Find the minimum value of f(x) = 3x^2 - 12x + 14 for x in [3, 8].",
        "concept": "Vertex x_v = -(-12)/(2*3) = 2. Lies outside [3, 8]. Minimum occurs at x = 3.",
        "method1": "Vertex is x = 2. Since a = 3 > 0, f(x) is strictly increasing for x >= 2. On [3, 8], minimum is at x = 3: f(3) = 3(9) - 12(3) + 14 = 27 - 36 + 14 = 5.",
        "method2": "At x = 3: 27 - 36 + 14 = 5.",
        "finalAnswer": "5",
        "trap": "Computing vertex value f(2) = 12 - 24 + 14 = 2, which is outside [3, 8].",
        "isTita": false,
        "options": [
          "6",
          "4",
          "5",
          "7"
        ]
      },
      {
        "qNum": 283,
        "title": "Symmetric Quadratic Product Maxima",
        "problem": "Find the maximum value of (x - 2)(8 - x) for real x.",
        "concept": "Roots are 2 and 8. Maximum of downward parabola occurs at midpoint x = (2 + 8)/2 = 5.",
        "method1": "Midpoint x = 5: f(5) = (5 - 2)(8 - 5) = 3 * 3 = 9.",
        "method2": "Direct: (8 - 2)^2 / 4 = 36 / 4 = 9.",
        "finalAnswer": "9",
        "trap": "Expanding to -x^2 + 10x - 16 and miscalculating -b/(2a).",
        "isTita": false,
        "options": [
          "10",
          "8",
          "11",
          "9"
        ]
      },
      {
        "qNum": 284,
        "title": "AM-GM with Fractional Powers",
        "problem": "For positive real x, find the minimum value of x^3 + 27 / x^3.",
        "concept": "Direct AM-GM on two terms: (x^3 + 27/x^3)/2 >= sqrt(27) = 3*sqrt(3).",
        "method1": "x^3 + 27/x^3 >= 2 * sqrt(27) = 2 * 3*sqrt(3) = 6*sqrt(3).",
        "method2": "2 * sqrt(27) = 6*sqrt(3).",
        "finalAnswer": "6*sqrt(3)",
        "trap": "Writing 54 or 9.",
        "isTita": false,
        "options": [
          "6*sqrt(3)",
          "6",
          "12",
          "9*sqrt(3)"
        ]
      },
      {
        "qNum": 285,
        "title": "Quadratic Rational Lower Bound",
        "problem": "Find the minimum value of y = (x^2 + 1) / (x^2 + 2) for all real x.",
        "concept": "Rewrite as 1 - 1/(x^2 + 2). Minimum occurs when subtracted term is maximized (at x = 0).",
        "method1": "At x = 0: y = (0 + 1)/(0 + 2) = 1/2. For any other real x, x^2 > 0 => y > 1/2. Minimum is 1/2.",
        "method2": "Direct: 1/2 at x = 0.",
        "finalAnswer": "1/2",
        "trap": "Thinking minimum is 0 (numerator can never be 0 for real x).",
        "isTita": false,
        "options": [
          "1/2",
          "0",
          "1",
          "2"
        ]
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Maxima & Minima (AM-GM Inequality & Geometric Bounds)",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Maxima+and+Minima+AM+GM+Inequality+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "AM >= GM Equality Condition & Vertex Form -D/(4a) Optimization",
      "duration": "Complete Playlist • 6 Parts"
    }
  },
  {
    "id": "qa_polynomials",
    "title": "Algebraic Identities, Polynomials & Remainder Theorem",
    "domain": "Algebra",
    "tier": "Tier A",
    "weightage": "1 – 2 Questions (3 – 6 Marks)",
    "prepTime": "2.5 Hours",
    "theoryHtml": "<h4>1. Master Algebraic Identities: First Principles</h4>\n<div class='theory-block'>* **Euler Three-Variable Identity:**\n  $$\\mathbf{a^3 + b^3 + c^3 - 3abc = \\frac{1}{2}(a + b + c)\\left[(a - b)^2 + (b - c)^2 + (c - a)^2\\right]}$$\n* **The $a^3 + b^3 + c^3 = 3abc$ Condition:** Holds if $\\mathbf{a + b + c = 0}$ OR $\\mathbf{a = b = c}$.\n---</div>\n<h4>2. The Reciprocal $x + 1/x = k$ Chain</h4>\n<div class='theory-block'>$$\\begin{aligned}\nx^2 + \\frac{1}{x^2} &= k^2 - 2 \\\\\nx^3 + \\frac{1}{x^3} &= k^3 - 3k \\\\\nx^4 + \\frac{1}{x^4} &= (k^2 - 2)^2 - 2\n\\end{aligned}$$\n* **Special Invariants:**\n  * If $x + \\frac{1}{x} = 1 \\implies \\mathbf{x^3 = -1}$ (powers differing by 3 cancel: $x^{n+3} + x^n = 0$).\n  * If $x + \\frac{1}{x} = -1 \\implies \\mathbf{x^3 = +1}$.\n---</div>\n<h4>3. Polynomial Remainder & Factor Theorems</h4>\n<div class='theory-block'>* **Remainder Theorem:** When polynomial $P(x)$ is divided by $(x - a)$, the remainder is strictly $\\mathbf{R = P(a)}$.\n* **Factor Theorem:** $(x - a)$ is a factor of $P(x) \\iff \\mathbf{P(a) = 0}$.\n* **Quadratic Divisor $(x - a)(x - b)$:** Remainder is linear $R(x) = Ax + B$.\n---</div>",
    "formulas": [
      {
        "formula": "a^3 + b^3 + c^3 - 3abc = \\frac{1}{2}(a+b+c)[(a-b)^2 + (b-c)^2 + (c-a)^2]"
      },
      {
        "formula": "a+b+c = 0 \\implies a^3 + b^3 + c^3 = 3abc"
      },
      {
        "formula": "x + \\frac{1}{x} = k \\implies x^2 + \\frac{1}{x^2} = k^2 - 2, \\; x^3 + \\frac{1}{x^3} = k^3 - 3k"
      },
      {
        "formula": "x + \\frac{1}{x} = 1 \\implies x^3 = -1"
      },
      {
        "formula": "P(x) = Q(x)(x - a) + P(a) \\quad (\\text{Remainder } = P(a))"
      }
    ],
    "questions": [
      {
        "qNum": 235,
        "title": "Cyclic Cube Roots with Zero Sum Condition",
        "problem": "If a + b + c = 0, find the value of (a + b)^3 + (b + c)^3 + (c + a)^3.",
        "concept": "Substitute a + b = -c, b + c = -a, c + a = -b.",
        "method1": "(a + b)^3 + (b + c)^3 + (c + a)^3 = (-c)^3 + (-a)^3 + (-b)^3 = -(a^3 + b^3 + c^3). Since a + b + c = 0, a^3 + b^3 + c^3 = 3abc. Thus the expression equals -3abc.",
        "method2": "Inspection with small values: let a = 1, b = 1, c = -2. (2)^3 + (-1)^3 + (-1)^3 = 8 - 1 - 1 = 6. Test -3abc = -3(1)(1)(-2) = 6. Matches exactly!",
        "finalAnswer": "-3abc",
        "trap": "Forgetting the negative sign from cubing (-c)^3 = -c^3.",
        "isTita": false,
        "options": [
          "-3abc",
          "3abc",
          "0",
          "a^3 + b^3 + c^3"
        ]
      },
      {
        "qNum": 236,
        "title": "High Power Reduction via x + 1/x = 1",
        "problem": "If x + 1/x = 1, find the value of x^99 + 1 / x^99.",
        "concept": "If x + 1/x = 1, then x^3 = -1.",
        "method1": "x^3 = -1 => x^99 = (x^3)^33 = (-1)^33 = -1. Therefore, x^99 + 1/x^99 = -1 + 1/(-1) = -1 - 1 = -2.",
        "method2": "Direct: (-1)^33 + 1/(-1)^33 = -2 in 5 seconds.",
        "finalAnswer": "-2",
        "trap": "Confusing (-1)^33 with (-1)^32 and answering +2.",
        "isTita": false,
        "options": [
          "-2",
          "-1",
          "1",
          "0"
        ]
      },
      {
        "qNum": 237,
        "title": "Polynomial Remainder with Quadratic Divisor",
        "problem": "When a polynomial P(x) is divided by (x - 1), the remainder is 3, and when divided by (x - 2), the remainder is 5. What is the remainder when P(x) is divided by (x - 1)(x - 2)?",
        "concept": "P(x) = Q(x)(x - 1)(x - 2) + (Ax + B). Remainder Theorem gives P(1) = 3 and P(2) = 5.",
        "method1": "Remainder is linear: R(x) = Ax + B. P(1) = A(1) + B = 3 => A + B = 3. P(2) = A(2) + B = 5 => 2A + B = 5. Subtract equations: A = 2. Then 2 + B = 3 => B = 1. Therefore R(x) = 2x + 1.",
        "method2": "Inspection: At x = 1, 2(1) + 1 = 3. At x = 2, 2(2) + 1 = 5. Matches instantly.",
        "finalAnswer": "2x + 1",
        "trap": "Adding remainders 3 + 5 = 8.",
        "isTita": false,
        "options": [
          "2x + 1",
          "2x - 1",
          "x + 2",
          "3x - 1"
        ]
      },
      {
        "qNum": 286,
        "title": "High Power Reciprocal Value via x + 1/x = 3",
        "problem": "If x^2 - 3x + 1 = 0, find the value of x^5 + 1/x^5.",
        "concept": "x + 1/x = 3. Multiply (x^2 + 1/x^2) and (x^3 + 1/x^3) then subtract (x + 1/x).",
        "method1": "x + 1/x = 3. x^2 + 1/x^2 = 3^2 - 2 = 7. x^3 + 1/x^3 = 3^3 - 3(3) = 18. (x^2 + 1/x^2)(x^3 + 1/x^3) = x^5 + 1/x^5 + (x + 1/x) => 7 * 18 = x^5 + 1/x^5 + 3 => 126 = x^5 + 1/x^5 + 3 => x^5 + 1/x^5 = 123.",
        "method2": "Rodha Shortcut: 7 * 18 - 3 = 126 - 3 = 123 in 15 seconds.",
        "finalAnswer": "123",
        "trap": "Attempting (x + 1/x)^5 directly using binomial expansion.",
        "isTita": false,
        "options": [
          "148",
          "98",
          "123",
          "185"
        ]
      },
      {
        "qNum": 287,
        "title": "Euler Identity Cyclic Fraction Sum",
        "problem": "If a + b + c = 0 and a, b, c are distinct non-zero reals, find the value of a^2/(bc) + b^2/(ca) + c^2/(ab).",
        "concept": "Combine under common denominator abc: (a^3 + b^3 + c^3) / abc. When a+b+c=0, a^3+b^3+c^3 = 3abc.",
        "method1": "(a^3 + b^3 + c^3) / abc = 3abc / abc = 3.",
        "method2": "Rodha Value Assumption: let a=1, b=2, c=-3. 1/(-6) + 4/(-3) + 9/2 = (-1 - 8 + 27)/6 = 18/6 = 3.",
        "finalAnswer": "3",
        "trap": "Assuming the answer depends on the individual values of a, b, c.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 288,
        "title": "Reciprocal Chain Power 4 Evaluation",
        "problem": "If x + 1/x = 4, find the value of x^4 + 1/x^4.",
        "concept": "Square twice: x^2 + 1/x^2 = k^2 - 2, x^4 + 1/x^4 = (k^2 - 2)^2 - 2.",
        "method1": "x^2 + 1/x^2 = 4^2 - 2 = 14. x^4 + 1/x^4 = 14^2 - 2 = 196 - 2 = 194.",
        "method2": "14^2 - 2 = 194.",
        "finalAnswer": "194",
        "trap": "Subtracting 4 instead of 2 in the second squaring step.",
        "isTita": false,
        "options": [
          "194",
          "233",
          "155",
          "291"
        ]
      },
      {
        "qNum": 289,
        "title": "Polynomial Remainder with Quadratic Factor",
        "problem": "Find the remainder when P(x) = x^4 - 3x^3 + 2x^2 - 5x + 7 is divided by (x - 2).",
        "concept": "Remainder Theorem: Remainder = P(2).",
        "method1": "P(2) = 2^4 - 3(2^3) + 2(2^2) - 5(2) + 7 = 16 - 3(8) + 2(4) - 10 + 7 = 16 - 24 + 8 - 10 + 7 = -3.",
        "method2": "Direct synthetic substitution gives -3.",
        "finalAnswer": "-3",
        "trap": "Performing long polynomial division and making an arithmetic error.",
        "isTita": false,
        "options": [
          "-2",
          "-3",
          "0",
          "-1"
        ]
      },
      {
        "qNum": 290,
        "title": "High Power Cancellation via x + 1/x = -1",
        "problem": "If x + 1/x = -1, find the value of x^300 + x^150 + 1.",
        "concept": "If x + 1/x = -1, then x^3 = 1.",
        "method1": "x^3 = 1 => x^300 = (x^3)^100 = 1^100 = 1. x^150 = (x^3)^50 = 1^50 = 1. Value = 1 + 1 + 1 = 3.",
        "method2": "1 + 1 + 1 = 3.",
        "finalAnswer": "3",
        "trap": "Confusing x + 1/x = -1 (which gives x^3 = 1) with x + 1/x = 1 (which gives x^3 = -1).",
        "isTita": false,
        "options": [
          "4",
          "2",
          "3",
          "5"
        ]
      },
      {
        "qNum": 291,
        "title": "Quadratic Factor Theorem Root Identification",
        "problem": "If (x - 1) and (x + 2) are both factors of P(x) = x^3 + ax^2 + bx - 6, find the values of a and b.",
        "concept": "P(1) = 0 and P(-2) = 0. Solve two linear equations.",
        "method1": "P(1) = 1 + a + b - 6 = 0 => a + b = 5. P(-2) = -8 + 4a - 2b - 6 = 0 => 4a - 2b = 14 => 2a - b = 7. Adding equations: 3a = 12 => a = 4. Then b = 5 - 4 = 1.",
        "method2": "Since product of roots = 6, third root is 6 / (1 * -2) = -3 => factors are (x-1)(x+2)(x+3) = (x^2+x-2)(x+3) = x^3 + 4x^2 + x - 6 => a=4, b=1.",
        "finalAnswer": "a = 4, b = 1",
        "trap": "Plugging in x = 2 instead of x = -2 for the factor (x + 2).",
        "isTita": false,
        "options": [
          "a = 4, b = 1",
          "a = 5, b = 0",
          "a = 3, b = 2",
          "a = 1, b = 4"
        ]
      },
      {
        "qNum": 292,
        "title": "Algebraic Identity Square Sum Factorization",
        "problem": "If a^2 + b^2 + c^2 = ab + bc + ca for real numbers a, b, c, what is the value of (a + b) / c?",
        "concept": "a^2 + b^2 + c^2 - ab - bc - ca = (1/2)[(a-b)^2 + (b-c)^2 + (c-a)^2] = 0 <=> a = b = c.",
        "method1": "Since sum of squares of real numbers is zero, a - b = 0, b - c = 0, c - a = 0 => a = b = c. Therefore (a + b) / c = (c + c) / c = 2c / c = 2.",
        "method2": "Direct: a = b = c => (1 + 1)/1 = 2.",
        "finalAnswer": "2",
        "trap": "Assuming a, b, c can take non-equal complex numbers.",
        "isTita": true,
        "options": []
      },
      {
        "qNum": 293,
        "title": "Cubic Polynomial Sum and Product of Roots",
        "problem": "If roots of x^3 - 6x^2 + 11x - 6 = 0 are in arithmetic progression, find the roots.",
        "concept": "Vieta formulas: sum of roots = 6. Roots in AP: a - d, a, a + d => 3a = 6 => a = 2.",
        "method1": "Middle root a = 2. Product of roots = 6 => (2 - d)(2)(2 + d) = 6 => 4 - d^2 = 3 => d^2 = 1 => d = 1. Roots are 1, 2, 3.",
        "method2": "Inspection: factors of 6 are 1, 2, 3. 1 + 2 + 3 = 6. Roots are 1, 2, 3.",
        "finalAnswer": "1, 2, 3",
        "trap": "Solving the full cubic without using the AP symmetry.",
        "isTita": false,
        "options": [
          "1, 2, 3",
          "0, 2, 4",
          "-1, 2, 5",
          "2, 3, 4"
        ]
      },
      {
        "qNum": 294,
        "title": "Degree Reduction via SFFT Form",
        "problem": "If x + 1/x = sqrt(5), find the value of x^3 - 1/x^3.",
        "concept": "(x - 1/x)^2 = (x + 1/x)^2 - 4. Then compute x^3 - 1/x^3 = (x - 1/x)^3 + 3(x - 1/x).",
        "method1": "(x - 1/x)^2 = 5 - 4 = 1 => x - 1/x = 1 (taking positive root for x > 1). x^3 - 1/x^3 = 1^3 + 3(1) = 1 + 3 = 4.",
        "method2": "Formula: 1^3 + 3(1) = 4.",
        "finalAnswer": "4",
        "trap": "Confusing (x + 1/x)^3 with (x - 1/x)^3.",
        "isTita": false,
        "options": [
          "5",
          "3",
          "4",
          "6"
        ]
      },
      {
        "qNum": 295,
        "title": "Polynomial Remainder with Non-Zero Constant Division",
        "problem": "When x^100 is divided by (x - 1)^2, find the remainder.",
        "concept": "Remainder is linear R(x) = Ax + B. P(1) = 1, P'(1) = derivative evaluation.",
        "method1": "x^100 = Q(x)(x - 1)^2 + Ax + B. At x = 1: 1 = A + B. Differentiate both sides: 100 x^99 = Q'(x)(x-1)^2 + 2Q(x)(x-1) + A. At x = 1: 100 = A. Then B = 1 - 100 = -99. Remainder R(x) = 100x - 99.",
        "method2": "Direct Taylor: (1 + (x - 1))^100 = 1 + 100(x - 1) + O((x-1)^2) = 1 + 100x - 100 = 100x - 99.",
        "finalAnswer": "100x - 99",
        "trap": "Assuming remainder is a constant number instead of a linear expression Ax + B.",
        "isTita": false,
        "options": [
          "100x - 99",
          "100x + 99",
          "99x - 100",
          "1"
        ]
      },
      {
        "qNum": 296,
        "title": "Symmetric Cyclic Differences Cubed",
        "problem": "Evaluate (x - y)^3 + (y - z)^3 + (z - x)^3.",
        "concept": "Notice that (x - y) + (y - z) + (z - x) = 0. Use a + b + c = 0 => a^3 + b^3 + c^3 = 3abc.",
        "method1": "Let a = x - y, b = y - z, c = z - x. a + b + c = 0. Therefore a^3 + b^3 + c^3 = 3abc = 3(x - y)(y - z)(z - x).",
        "method2": "Identity recognition in 2 seconds: 3(x - y)(y - z)(z - x).",
        "finalAnswer": "3(x - y)(y - z)(z - x)",
        "trap": "Expanding each cubic term individually (15 minutes of wasted time).",
        "isTita": false,
        "options": [
          "3(x - y)(y - z)(z - x)",
          "0",
          "(x - y)(y - z)(z - x)",
          "3(x + y + z)"
        ]
      },
      {
        "qNum": 297,
        "title": "Reciprocal Sixth Power Expansion",
        "problem": "If x + 1/x = 2, find the value of x^2026 + 1/x^2026.",
        "concept": "x + 1/x = 2 implies (x - 1)^2 = 0 => x = 1.",
        "method1": "x^2 - 2x + 1 = 0 => (x - 1)^2 = 0 => x = 1. Substitute: 1^2026 + 1/(1^2026) = 1 + 1 = 2.",
        "method2": "If x + 1/x = 2, then x = 1. 1 + 1 = 2 instantly.",
        "finalAnswer": "2",
        "trap": "Thinking large power 2026 requires binomial theorem.",
        "isTita": true,
        "options": []
      }
    ],
    "videoLecture": {
      "title": "Rodha Quant: Polynomials, Algebraic Identities & Remainder Theorem",
      "directUrl": "https://www.youtube.com/results?search_query=Rodha+CAT+Polynomials+Algebraic+Identities+Remainder+Theorem+Ravi+Prakash",
      "embedUrl": "https://www.youtube-nocookie.com/embed/videoseries?list=PLG4bwc5fquzgfMh4YFDnv7fttM0RIKiUQ",
      "highlight": "Remainder Theorem P(r)=R, a^3+b^3+c^3-3abc Identity & Higher Degree Roots",
      "duration": "Complete Playlist • 5 Parts"
    }
  }
];
