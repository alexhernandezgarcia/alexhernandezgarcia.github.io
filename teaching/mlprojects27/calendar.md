---
layout: teaching
navigation: navigation_mlprojects27
title : "IFT 3710/6759 H27 - Projets (avancés) en apprentissage automatique" 
subtitle : "Calendrier" 
---

<style>
  :root {
    --bg: #fafaf7;
    --ink: #2c2c2c;
    --line: #dcdcdc;
    --cal-table-bg: #ffffff;
    --cal-header-bg: #f1f3f4;
    --cal-empty-bg: #fbfbfb;
    --class-bg: #e6f4ea;
    --class-border: #34a853;
    --noclass-bg: #fdecea;
    --noclass-text: #d93025;
    --quiz-border: #4285f4;
    --deadline-orange: #ff9000;
    --today-ring: #ff9800;
    --tag-text: #fff;
    --shadow: rgba(0,0,0,0.08);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #1a1a1e;
      --ink: #e0e0e0;
      --line: #3a3a40;
      --cal-table-bg: #242428;
      --cal-header-bg: #2e2e34;
      --cal-empty-bg: #1f1f23;
      --class-bg: #1e3a2a;
      --class-border: #4caf50;
      --noclass-bg: #3a1f1f;
      --noclass-text: #ef5350;
      --quiz-border: #64b5f6;
      --deadline-orange: #ff9000;
      --today-ring: #ffb74d;
      --tag-text: #fff;
      --shadow: rgba(0,0,0,0.3);
    }
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .calendar-wrap { width: 100%; }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    background: var(--cal-table-bg);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 12px var(--shadow);
  }

  th {
    background: var(--cal-header-bg);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--ink);
    opacity: 0.75;
    padding: 0.6rem 0.3rem;
    border-bottom: 2px solid var(--line);
  }

  td {
    height: 64px;
    vertical-align: top;
    padding: 0.4rem;
    border-bottom: 1px solid var(--line);
    border-right: 1px solid var(--line);
    position: relative;
    color: var(--ink);
  }

  td:last-child { border-right: none; }
  tbody tr:last-child td { border-bottom: none; }

  /* Empty cells (outside Aug 31 – Dec 31 range) */
  td.empty { background: var(--cal-empty-bg); }

  .day-num {
    font-size: 0.85rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.2rem;
  }

  .tag {
    display: inline-block;
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.15rem 0.4rem;
    border-radius: 4px;
    line-height: 1.2;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  /* Deadline tag */
  .tag.tag-deadline { background: var(--deadline-orange); color: var(--tag-text); }
  /* Quiz tag */
  .tag.tag-quiz { background: var(--quiz-border); color: var(--tag-text); }

  /* Class day */
  td.class {
    background: var(--class-bg);
    border-left: 3px solid var(--class-border);
  }
  /* Class tag */
  td.class .tag-class { background: var(--class-border); color: var(--tag-text); }

  /* No class / no class */
  td.noclass {
    background: var(--noclass-bg);
    border-left: 3px solid var(--noclass-text);
  }
  td.noclass .tag { background: var(--noclass-text); color: var(--tag-text); }

  /* Today indicator */
  td.today::after {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid var(--today-ring);
    border-radius: 6px;
    pointer-events: none;
  }

  /* Legend */
  .legend {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
    font-size: 0.8rem;
    color: var(--ink);
  }
  .legend-item { display: flex; align-items: center; gap: 0.4rem; }
  .swatch {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid rgba(128,128,128,0.3);
  }
  .swatch.class { background: var(--class-bg); }
  .swatch.noclass { background: var(--noclass-bg); }
  .swatch.quiz { background: var(--quiz-border); }
  .swatch.deadline { background: var(--deadline-orange); }
</style>

<div class="calendar-wrap">

  <br>
  <table id="course-calendar"></table>

  <div class="legend">
    <div class="legend-item"><span class="swatch class"></span> Class day</div>
    <div class="legend-item"><span class="swatch noclass"></span> No class</div>
    <div class="legend-item"><span class="swatch quiz"></span> Quiz</div>
    <div class="legend-item"><span class="swatch deadline"></span> Deadline</div>
  </div>
</div>

<script>
(function () {

  // --- Configuration -------------------------------------------------------
  
  // Start day for the calendar. Format: YYYY-MM-DD
  const START = "2027-01-01";

  // End day for the calendar. Format: YYYY-MM-DD
  const END = "2027-04-30";

  // Class days. Format: Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche
  const CLASS_DAYS = ["Lundi","Jeudi"];

  // First day classes occur. Format: YYYY-MM-DD
  const FIRST_CLASS_DAY = "2027-01-07";

  // Last day classes occur (classes stop after this date). Format: YYYY-MM-DD
  const LAST_CLASS_DAY = "2027-04-15";

  // Dates with NO class. Format: YYYY-MM-DD
  const NO_CLASS_DAYS = ["2027-03-01","2027-03-04","2027-03-29"];

  // Quiz dates (must be on class days). Format: YYYY-MM-DD
  const QUIZ_DATES = [];

  // Deadline dates. Format: YYYY-MM-DD
  const DEADLINES = [];

  // --------------------------------------------------------------------------

  function parseDate(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d); // months are 0-indexed, so subtract 1
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function key(d) { return d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate()); }

  const dayNames = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
  const monthAbbr = ["jan","fev","mars","avril","mai","juin","jui","août","sep","oct","nov","dec"];
  const today = new Date();
  const startDay = parseDate(START);
  const endDay = parseDate(END);
  const classDayNums = new Set(CLASS_DAYS.map(d => (dayNames.indexOf(d) + 1) % 7));
  const noclassdays  = new Set(NO_CLASS_DAYS);
  const quizzes   = new Set(QUIZ_DATES);
  const deadlines = new Set(DEADLINES);

  const table = document.getElementById("course-calendar");

  // Build header row
  let html = "<thead><tr>";
  dayNames.forEach(d => html += "<th>" + d + "</th>");
  html += "</tr></thead><tbody>";

  // Find the Monday on or before startDay
  let cursor = new Date(startDay);
  const dow = cursor.getDay(); // 0=Sun..6=Sat
  const mondayOffset = dow === 0 ? -6 : 1 - dow;
  cursor.setDate(cursor.getDate() + mondayOffset);

  // Walk week by week until we pass endDay
  while (cursor <= endDay) {
    html += "<tr>";
    for (let i = 0; i < 7; i++) {
      const cellDate = new Date(cursor);
      cellDate.setDate(cursor.getDate() + i);
      const k = key(cellDate);
      const inRange = cellDate >= startDay && cellDate <= endDay;
      const isToday = key(today) === k;

      let cls = [];
      let tagHtml = "";

      if (!inRange) {
        cls.push("empty");
      } else {
        const isClassDay = classDayNums.has(cellDate.getDay())
                           && !noclassdays.has(k)
                           && k >= FIRST_CLASS_DAY
                           && k <= LAST_CLASS_DAY;

        if (noclassdays.has(k)) {
          cls.push("noclass");
          tagHtml = '<span class="tag">No class</span>';
        } else if (isClassDay) {
          cls.push("class");
          tagHtml = '<span class="tag tag-class">Class</span>';
          if (quizzes.has(k)) {
            tagHtml += '<span class="tag tag-quiz">Quiz</span>';
          }
        }
        if (deadlines.has(k)) {
          tagHtml += '<span class="tag tag-deadline">Deadline</span>';
        }

        if (isToday) cls.push("today");
      }

      if (cls.length) cls = cls.join(" ");

      const num = inRange ? '<span class="day-num">' + cellDate.getDate() + '\u00A0' + monthAbbr[cellDate.getMonth()] + '</span>' : '';

      html += '<td class="' + cls + '">' + num + (tagHtml ? '<div class="tags">' + tagHtml + '</div>' : '') + "</td>";

    }
    html += "</tr>";
    cursor.setDate(cursor.getDate() + 7);
  }

  html += "</tbody>";
  table.innerHTML = html;
})();
</script>
