/* =========================================================
   ACM-W BPHC — Resources
   Central data store + renderers for domain.html-style pages
   and the shared topic.html detail template.
   ========================================================= */

const LOREM = {
  short: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae erat non velit imperdiet auctor.",
  para: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer facilisis, nunc at facilisis dictum, elit lorem tincidunt sem, at cursus enim justo eu arcu. Vivamus vehicula, sapien in dictum bibendum, felis nibh tempor lorem, nec porttitor nulla justo id massa.",
    "Nulla facilisi. Etiam euismod, velit sed fermentum tincidunt, sem nibh cursus est, in fermentum arcu felis nec justo. Curabitur non nunc sit amet lorem gravida efficitur. Praesent commodo, sapien at cursus tincidunt, nunc justo aliquet arcu, at malesuada felis lorem in sapien.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  ]
};

/* Each domain: slug matches the physical page file (slug + ".html")
   Each topic: slug is used as ?topic= in the shared topic.html page */
const RESOURCES = {
  ml: {
    name: "Machine Learning",
    file: "ml.html",
    dot: "c-ml",
    tagline: "Models, math, and the intuition behind them.",
    topics: [
      {
        slug: "intro-to-ml",
        title: "Introduction to Machine Learning",
        blurb: "Lorem ipsum dolor sit amet — what learning from data actually means.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Why it matters", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Supervised vs. unsupervised learning", "Training, validation, test splits", "Bias–variance tradeoff", "Loss functions"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum primer", "Video — Dolor sit amet lecture series", "Practice — Consectetur notebook exercises"] }
        ]
      },
      {
        slug: "neural-networks",
        title: "Neural Networks",
        blurb: "Lorem ipsum dolor — layers, weights, and backpropagation.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0], LOREM.para[2]] },
          { heading: "How it works", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Perceptrons & activation functions", "Forward and backward pass", "Gradient descent variants", "Overfitting & regularization"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on gradients", "Video — Dolor sit backprop walkthrough", "Practice — Build a network from scratch"] }
        ]
      },
      {
        slug: "model-evaluation",
        title: "Model Evaluation",
        blurb: "Lorem ipsum — knowing whether your model is actually good.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Accuracy, precision, recall, F1", "Confusion matrices", "Cross-validation", "ROC & AUC"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on metrics", "Practice — Evaluate a sample classifier"] }
        ]
      },
      {
        slug: "nlp-basics",
        title: "Natural Language Processing",
        blurb: "Lorem ipsum dolor — teaching machines to read.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0], LOREM.para[1]] },
          { heading: "Core concepts", list: ["Tokenization & embeddings", "RNNs vs. Transformers", "Attention mechanisms", "Fine-tuning pretrained models"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on embeddings", "Video — Dolor sit attention explained"] }
        ]
      }
    ]
  },

  cc: {
    name: "Competitive Coding",
    file: "competitive-coding.html",
    dot: "c-cc",
    tagline: "Patterns, proofs, and the clock.",
    topics: [
      {
        slug: "time-complexity",
        title: "Time & Space Complexity",
        blurb: "Lorem ipsum — reasoning about how code scales.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Big-O, Big-Θ, Big-Ω", "Amortized analysis", "Recurrence relations"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum complexity primer", "Practice — Analyze five snippets"] }
        ]
      },
      {
        slug: "graph-algorithms",
        title: "Graph Algorithms",
        blurb: "Lorem ipsum dolor — traversals, shortest paths, and more.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0], LOREM.para[2]] },
          { heading: "Core concepts", list: ["BFS & DFS", "Dijkstra & Bellman-Ford", "Union-Find", "Topological sort"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on shortest paths", "Practice — Ten graph problems"] }
        ]
      },
      {
        slug: "dynamic-programming",
        title: "Dynamic Programming",
        blurb: "Lorem ipsum — breaking problems into overlapping pieces.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Memoization vs. tabulation", "State design", "Classic patterns (knapsack, LIS, LCS)"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum DP patterns", "Practice — Fifteen curated problems"] }
        ]
      },
      {
        slug: "contest-strategy",
        title: "Contest Strategy",
        blurb: "Lorem ipsum dolor — time management under pressure.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Reading problems fast", "Picking the right problem order", "Debugging under time pressure"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum contest playbook"] }
        ]
      }
    ]
  },

  uiux: {
    name: "UI/UX",
    file: "ui-ux.html",
    dot: "c-ux",
    tagline: "Interfaces people actually enjoy using.",
    topics: [
      {
        slug: "design-fundamentals",
        title: "Design Fundamentals",
        blurb: "Lorem ipsum — color, type, and layout basics.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Color theory & contrast", "Typographic hierarchy", "Grid & spacing systems"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum design basics", "Video — Dolor sit type pairing"] }
        ]
      },
      {
        slug: "user-research",
        title: "User Research",
        blurb: "Lorem ipsum dolor — designing from real user needs.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Interviews & surveys", "Personas", "Usability testing"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum research methods"] }
        ]
      },
      {
        slug: "wireframing-prototyping",
        title: "Wireframing & Prototyping",
        blurb: "Lorem ipsum — from sketch to clickable prototype.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0], LOREM.para[2]] },
          { heading: "Core concepts", list: ["Low-fi vs. high-fi wireframes", "Figma prototyping basics", "Design handoff"] },
          { heading: "Resources to explore", list: ["Video — Dolor sit Figma walkthrough", "Practice — Prototype a login flow"] }
        ]
      },
      {
        slug: "design-systems",
        title: "Design Systems",
        blurb: "Lorem ipsum dolor — consistent UI at scale.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Tokens & components", "Accessibility in design systems", "Documentation"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on design tokens"] }
        ]
      }
    ]
  },

  webdev: {
    name: "Web Development",
    file: "web-dev.html",
    dot: "c-wd",
    tagline: "From markup to full-stack apps.",
    topics: [
      {
        slug: "html-css-basics",
        title: "HTML & CSS Foundations",
        blurb: "Lorem ipsum — structure and style, done right.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Semantic HTML", "Flexbox & Grid", "Responsive design"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on semantic markup", "Practice — Rebuild a landing page"] }
        ]
      },
      {
        slug: "javascript-essentials",
        title: "JavaScript Essentials",
        blurb: "Lorem ipsum dolor — the language behind the interactivity.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1], LOREM.para[2]] },
          { heading: "Core concepts", list: ["DOM manipulation", "Async/await & promises", "ES6+ syntax"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on async JS", "Practice — Build a to-do app"] },
          { code: "async function fetchTopics() {\n  const res = await fetch('/api/topics');\n  return res.json();\n}" }
        ]
      },
      {
        slug: "frontend-frameworks",
        title: "Frontend Frameworks",
        blurb: "Lorem ipsum — React and beyond.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Components & props", "State management", "Client-side routing"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum React primer"] }
        ]
      },
      {
        slug: "backend-apis",
        title: "Backend & APIs",
        blurb: "Lorem ipsum dolor — servers, databases, and endpoints.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["REST principles", "Authentication basics", "Databases: SQL vs. NoSQL"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on REST design"] }
        ]
      }
    ]
  },

  appdev: {
    name: "App Development",
    file: "app-dev.html",
    dot: "c-ad",
    tagline: "Building for phones, not just browsers.",
    topics: [
      {
        slug: "mobile-fundamentals",
        title: "Mobile Development Fundamentals",
        blurb: "Lorem ipsum — how mobile apps differ from the web.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0]] },
          { heading: "Core concepts", list: ["Native vs. cross-platform", "App lifecycle", "Layout systems"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum mobile primer"] }
        ]
      },
      {
        slug: "flutter-basics",
        title: "Flutter Basics",
        blurb: "Lorem ipsum dolor — one codebase, many platforms.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Widgets & widget trees", "State management (setState, Provider)", "Navigation"] },
          { heading: "Resources to explore", list: ["Video — Dolor sit Flutter crash course"] }
        ]
      },
      {
        slug: "react-native",
        title: "React Native",
        blurb: "Lorem ipsum — JavaScript-powered native apps.",
        sections: [
          { heading: "Overview", body: [LOREM.para[0], LOREM.para[2]] },
          { heading: "Core concepts", list: ["Core components", "Navigation libraries", "Bridging native modules"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum on React Native"] }
        ]
      },
      {
        slug: "app-deployment",
        title: "Testing & Deployment",
        blurb: "Lorem ipsum dolor — shipping to the app stores.",
        sections: [
          { heading: "Overview", body: [LOREM.para[1]] },
          { heading: "Core concepts", list: ["Unit & widget testing", "App signing", "Play Store & App Store review"] },
          { heading: "Resources to explore", list: ["Reading — Lorem ipsum deployment checklist"] }
        ]
      }
    ]
  }
};

/* ---------- helpers ---------- */
function qs(param){
  return new URLSearchParams(window.location.search).get(param);
}

/* ---------- render: topic cards on a domain page ---------- */
function renderTopicGrid(domainSlug){
  const grid = document.getElementById("topic-grid");
  const domain = RESOURCES[domainSlug];
  if (!grid || !domain) return;

  grid.innerHTML = domain.topics.map(t => `
    <a class="topic-card" href="topic.html?domain=${domainSlug}&topic=${t.slug}">
      <div class="file">&gt; ${t.slug}.md</div>
      <h3>${t.title}</h3>
      <p>${t.blurb}</p>
      <span class="open">open file →</span>
    </a>
  `).join("");
}

/* ---------- render: full topic detail page ---------- */
function renderTopicDetail(){
  const domainSlug = qs("domain");
  const topicSlug = qs("topic");
  const container = document.getElementById("topic-doc");
  if (!container) return;

  const domain = RESOURCES[domainSlug];
  const topic = domain && domain.topics.find(t => t.slug === topicSlug);

  if (!domain || !topic){
    container.innerHTML = `
      <p class="kicker">404</p>
      <h1>Topic not found</h1>
      <p>That resource doesn't exist yet — head back to the domain page and pick one from the list.</p>
    `;
    return;
  }

  document.title = `${topic.title} · ACM-W BPHC Resources`;

  const breadcrumb = document.getElementById("breadcrumb");
  if (breadcrumb){
    breadcrumb.innerHTML = `
      <a href="resources.html">resources</a> / <a href="${domain.file}">${domainSlug}</a> / ${topicSlug}
    `;
  }

  const backLink = document.getElementById("back-link");
  if (backLink){
    backLink.setAttribute("href", domain.file);
    backLink.textContent = `← back to ${domain.name}`;
  }

  const sectionsHtml = topic.sections.map((s, i) => {
    if (s.code){
      return `<div class="code-block">${s.code.replace(/</g, "&lt;")}</div>`;
    }
    let inner = "";
    if (s.body){
      inner += s.body.map(p => `<p>${p}</p>`).join("");
    }
    if (s.list){
      inner += `<ul>${s.list.map(li => `<li>${li}</li>`).join("")}</ul>`;
    }
    return `
      <h2><span class="num">0${i+1}</span>${s.heading}</h2>
      ${inner}
    `;
  }).join("");

  container.innerHTML = `
    <p class="kicker">${domain.name}</p>
    <h1>${topic.title}</h1>
    ${sectionsHtml}
  `;
}

/* auto-run on domain pages / topic page based on body data attribute */
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const domainSlug = body.getAttribute("data-domain");
  if (domainSlug) renderTopicGrid(domainSlug);
  if (body.hasAttribute("data-topic-page")) renderTopicDetail();
});
