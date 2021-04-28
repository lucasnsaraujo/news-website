function publish() {
  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;
  let imgurl = document.getElementById("imgurl").value;
  let content = document.getElementById("content").value;
  let description = document.getElementById("description").value;
  let post = { title, description, content, category, imgurl };
  console.log(post);

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("http://192.168.15.158:5000/api/new", options).then((response) =>
    console.log(response)
  );
  let page = document.getElementById("page");
  page.innerHTML = "Notícia postada com sucesso";
  page.innerHTML +=
    "<a href='http://192.168.15.158:5000/'> Ir para a página principal <a/><br>";
}
