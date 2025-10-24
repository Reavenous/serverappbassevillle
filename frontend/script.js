const articles = [
  {
    title: "Jak jsem rozběhl Raspberry Pi jako webserver",
    date: "24. října 2025",
    content: `
      Dnes jsem konečně rozjel svůj Raspberry Pi s NGINXem a Sambou.
      Díky DNS přes dnsmasq teď můžu přistupovat k souborům a stránkám pohodlně z domény.
      Přidal jsem i automatickou zálohu změněných souborů z Windows — všechno běží hladce.
    `
  },
  {
    title: "Projekt Palmovka Survivor — herní update",
    date: "15. října 2025",
    content: `
      Práce na hře Palmovka Survivor pokračuje! Tramvaj už zvládá zatáčet po spline dráze
      a testuju nové animace NPC. Do budoucna plánuji systém úrovní a vylepšování postavy.
    `
  },
  {
    title: "Zemědělské družstvo — SQL magie",
    date: "1. října 2025",
    content: `
      Dokončil jsem ER diagram a začal testovat dotazy s GROUP BY a HAVING.
      Největší výzva byla aktualizace dat přes JOIN, ale všechno funguje.
      Příště chci přidat procedury a testovací data.
    `
  }
];

// Render článků
const blog = document.getElementById("blog");

articles.forEach(article => {
  const el = document.createElement("article");
  el.classList.add("article");
  el.innerHTML = `
    <h2>${article.title}</h2>
    <p class="date">${article.date}</p>
    <p>${article.content}</p>
  `;
  blog.appendChild(el);
});
