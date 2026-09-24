// Scroll-spy: highlight the current section in the sidebar and mobile tab bar
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.sidebar nav a, .mobile-bar a'));

  if (!sections.length || !navLinks.length) return;

  var linkById = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").replace("#", "");
    (linkById[id] = linkById[id] || []).push(link);
  });

  function setActive(id) {
    navLinks.forEach(function (l) { l.classList.remove("active"); });
    (linkById[id] || []).forEach(function (l) { l.classList.add("active"); });
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }
})();
