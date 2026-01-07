let user = {
    username: "Nilaa",
    password: "1234"
};

let postData = [
    {
        user: "Aishu",
        img: "https://picsum.photos/400/300?1",
        text: "Good vibes ✨",
        likes: 0,
        comments: []
    }
];

function login() {
    if (
        document.getElementById("username").value === user.username &&
        document.getElementById("password").value === user.password
    ) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("feed").style.display = "block";
        renderPosts();
    } else {
        alert("Wrong login ❌");
    }
}

function renderPosts() {
    let postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    postData.forEach((p, i) => {
        postsDiv.innerHTML += `
        <div class="post">
            <p><b>${p.user}</b></p>
            <img src="${p.img}">
            <p>${p.text}</p>
            <div class="actions">
                <button onclick="likePost(${i})">❤️ ${p.likes}</button>
                <button onclick="commentPost(${i})">💬</button>
            </div>
        </div>`;
    });
}

function likePost(i) {
    postData[i].likes++;
    renderPosts();
}

function commentPost(i) {
    let c = prompt("Enter comment");
    if (c) {
        postData[i].comments.push(c);
    }
}

function addPost() {
    let text = document.getElementById("postText").value;
    let img = document.getElementById("postImage").value;

    if (text) {
        postData.unshift({
            user: "Nilaa",
            img: img,
            text: text,
            likes: 0,
            comments: []
        });
        renderPosts();
    }
}
