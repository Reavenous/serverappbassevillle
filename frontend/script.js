fetch("/api/posts")
  .then(res => res.json())
  .then(posts => {
    const div = document.getElementById("posts");
    posts.forEach(p => {
      div.innerHTML += `<div class="post"><h2>${p.title}</h2><p>${p.content}</p></div>`;
    });
  });
