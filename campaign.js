// Salt Pilgrim App Store buttons → App Store Connect campaign links (Analytics → Acquisition → Campaigns).
// ct = source_[ad]_[content]_page, e.g. ig_bio_lt (Instagram bio link, link tree) · ig_ad_sp · direct_sp.
// No cookies, no storage, no third-party requests: it only rewrites link addresses.
(function () {
  var APP = "6819187251", PT = "119141594";
  var me = document.currentScript;
  var page = (me && me.getAttribute("data-page")) || "web";
  var q = new URLSearchParams(location.search);

  function clean(s, n) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, n); }
  function fromReferrer() {
    var h = "";
    try { h = new URL(document.referrer).hostname; } catch (e) { return ""; }
    if (!h || h === location.hostname) return "";
    var map = [[/instagram/, "ig"], [/threads/, "threads"], [/youtube|youtu\.be/, "yt"], [/facebook|fb\.com|fb\.me/, "fb"],
               [/reddit/, "reddit"], [/(^|\.)t\.co$|twitter|(^|\.)x\.com$/, "x"], [/google/, "google"], [/bing/, "bing"]];
    for (var i = 0; i < map.length; i++) if (map[i][0].test(h)) return map[i][1];
    return clean(h.replace(/^www\./, "").split(".")[0], 10);
  }

  var src = clean(q.get("utm_source"), 10) || fromReferrer() || (q.get("fbclid") ? "meta" : "") || "direct";
  var ad = /paid|cpc|ppc|^ads?$/.test((q.get("utm_medium") || "").toLowerCase()) ? "ad" : "";
  var raw = (q.get("utm_content") || q.get("utm_campaign") || "").toLowerCase();
  var cont = raw === "link_in_bio" ? "bio" : clean(raw, 10);
  var ct = [src, ad, cont, clean(page, 6)].filter(Boolean).join("_").slice(0, 40);

  var store = "https://apps.apple.com/app/apple-store/id" + APP + "?pt=" + PT + "&ct=" + ct + "&mt=8";
  var links = document.querySelectorAll('a[href*="id' + APP + '"]');
  for (var i = 0; i < links.length; i++) links[i].href = store;

  // Link tree → game page: carry the source along so the game page's buttons keep it.
  if (src !== "direct") {
    var keep = new URLSearchParams();
    keep.set("utm_source", src);
    if (ad) keep.set("utm_medium", "paid");
    if (raw) keep.set("utm_content", raw);
    var inner = document.querySelectorAll("a[data-pass]");
    for (var j = 0; j < inner.length; j++) inner[j].href = inner[j].getAttribute("href").split("?")[0] + "?" + keep.toString();
  }
})();
