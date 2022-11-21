let data = []

function addData(event) {

    event.preventDefault()

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let technologies = document.getElementById("input-blog-technologies").value;
    let image = document.getElementById("input-blog-image").files;

    if (title == "") {
        return alert('title tidak boleh kosong!')
    } else if (content == "") {
        return alert('content tidak boleh kosong!')
    } else if (technologies == "") {
        return alert('technologies tidak boleh kosong!')
    } else if (image.length == 0) {
        return alert('gambar tidak boleh kosong!')
    }

    let gambar = URL.createObjectURL(image[0])

    let blog = {
        title,
        content,
        gambar,
        postAt: "14 Desember 2022",
        author: "iksndc"
    }

    data.push(blog)
    console.log(data)
    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ``
    for (let index = 0; index < data.length; index++) {
        document.getElementById("contents").innerHTML += `<div class="blog-list-item">
    <div class="blog-image">
      <img src="${data[index].gambar}" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">${data[index].title}</a>
      </h1>
      <div class="detail-blog-content">
      ${data[index].postAt} | ${data[index].author}
      </div>
      <p>
      ${data[index].content}
      </p>
    </div>
  </div>`
    }
}