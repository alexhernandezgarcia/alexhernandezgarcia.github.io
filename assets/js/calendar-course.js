(function () {

  // --- Configuration -------------------------------------------------------
  
  // Start day for the calendar. Format: YYYY-MM-DD
  const START = "2026-08-31";

  // End day for the calendar. Format: YYYY-MM-DD
  const END = "2026-12-31";

  // Class days. Format: Mon, Tue, Wed, Thu, Fri, Sat, Sun
  const CLASS_DAYS = ["Mon","Thu"];

  // First day classes occur. Format: YYYY-MM-DD
  const FIRST_CLASS_DAY = "2026-08-31";

  // Last day classes occur (classes stop after this date). Format: YYYY-MM-DD
  const LAST_CLASS_DAY = "2026-12-09";

  // Dates with NO class. Format: YYYY-MM-DD
  const NO_CLASS_DAYS = ["2026-09-07", "2026-10-05", "2026-10-12", "2026-10-19", "2026-10-22"];

  // Quiz dates (must be on class days). Format: YYYY-MM-DD
  const QUIZ_DATES = ["2026-09-10", "2026-09-17", "2026-09-24", "2026-10-01", "2026-10-15", "2026-11-12", "2026-11-19", "2026-11-26"];

  // Paper presentation dates (must be on class days). Format: YYYY-MM-DD
  const PAPER_PRESENTATION_DATES = ["2026-11-02", "2026-11-05", "2026-11-12", "2026-11-16", "2026-11-19", "2026-11-23",  "2026-11-26"];

  // Project presentation dates (must be on class days). Format: YYYY-MM-DD
  const PROJECT_PRESENTATION_DATES = ["2026-11-30", "2026-12-03", "2026-12-07"];

  // Project presentation dates (must be on class days). Format: YYYY-MM-DD
  const GUEST_LECTURE_DATES = ["2026-10-26", "2026-11-09"];

  // Final deadline date(s). Format: YYYY-MM-DD
  const DEADLINES = ["2026-10-13", "2026-10-15", "2026-10-29"];

  // --------------------------------------------------------------------------

  function parseDate(str) {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d); // months are 0-indexed, so subtract 1
  }
  function pad(n) { return String(n).padStart(2, "0"); }
  function key(d) { return d.getFullYear() + "-" + pad(d.getMonth()+1) + "-" + pad(d.getDate()); }

  const dayNames = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  const monthAbbr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const today = new Date();
  const startDay = parseDate(START);
  const endDay = parseDate(END);
  const classDayNums = new Set(CLASS_DAYS.map(d => (dayNames.indexOf(d) + 1) % 7));
  const noclassdays  = new Set(NO_CLASS_DAYS);
  const quizzes = new Set(QUIZ_DATES);
  const paperPresentations = new Set(PAPER_PRESENTATION_DATES);
  const projectPresentations = new Set(PROJECT_PRESENTATION_DATES);
  const guestLectures = new Set(GUEST_LECTURE_DATES);
  const deadlines = new Set(DEADLINES);

  const table = document.getElementById("calendar-course");

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
        } else if (isClassDay) {
          cls.push("class");
          tagHtml = '<span class="tag tag-class">Class</span>';
          if (quizzes.has(k)) {
            tagHtml += '<span class="tag tag-quiz">Quiz</span>';
          }
          if (paperPresentations.has(k)) {
            tagHtml += '<span class="tag tag-paper-presentation">Papers</span>';
          }
          if (projectPresentations.has(k)) {
            tagHtml += '<span class="tag tag-project-presentation">Projects</span>';
          }
          if (guestLectures.has(k)) {
            tagHtml += '<span class="tag tag-guest-lecture">Guest</span>';
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
