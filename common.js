// shared helpers
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const getEvent = id => EVENTS.find(e => e.id === id);
const qp = k => new URLSearchParams(location.search).get(k);
const money = n => n === 0 ? "FREE" : "$" + n;
const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).toUpperCase();
const imgBlock = (src, label) => `<div class="img" style="height:100%"><img src="${esc(src)}" alt="" onerror="this.remove()"><span class="slot">${esc(label || src)}</span></div>`;
const store = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)) || [] } catch { return [] } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v))
};
function header(active) {
  const links = [["index.html", "Events"], ["tickets.html", "My Tickets"], ["checkin.html", "Door"]];
  document.body.insertAdjacentHTML("afterbegin", `<header class="top"><a href="index.html" aria-label="Emordes Events home"><img src="wordmark.png" alt="Emordes"></a><nav>${links.map(([h, t]) => `<a href="${h}"${h === active ? ' aria-current="page"' : ""}>${t}</a>`).join("")}</nav></header>`);
}
function qrImg(text, cell = 6) {
  const q = qrcode(0, "M"); q.addData(text); q.make();
  return q.createDataURL(cell, 2);
}
