let likes = [0, 0];
let commentsData = [[], []];

function login() {
    let user = document.getElementById("username").value;
    if(user === "") {
        alert("Enter username");
    } else {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("feed").classList.remove("hidden");
    }
}

function likePost(i) {
    likes[i]++;
    document.getElementById("like"+i).innerText = likes[i];
}

function commentPost(i) {
    let comment = prompt("Enter your comment:");
    if(comment) {
        commentsData[i].push(comment);
        updateComments(i);
    }
}

function updateComments(i) {
    let commentsDiv = document.getElementById("comments"+i);
    commentsDiv.innerHTML = commentsData[i].map(c => "- " + c).join("<br>");
}

function sharePost() {
    alert("Post shared successfully!");
}

function addPost() {
    let user = document.getElementById("newUser").value;
    let caption = document.getElementById("newCaption").value;
    let image = document.getElementById("newImage").value;

    if(user === "" || caption === "" || image === "") {
        alert("Fill all fields");
        return;
    }

    let feed = document.getElementById("feed");

    let postIndex = likes.length;
    likes.push(0);
    commentsData.push([]);

    let div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
        <div class="post-header">
            <img class="avatar" src="https://i.pravatar.cc/50?img=${Math.floor(Math.random()*70)}" alt="User Avatar">
            <span class="user">${user}</span>
        </div>
        <img class="post-image" src="${image}" alt="Post Image">
        <p>${caption}</p>
        <div class="actions">
            <button onclick="likePost(${postIndex})">❤️ Like</button>
            <span id="like${postIndex}">0</span>
            <button onclick="commentPost(${postIndex})">💬 Comment</button>
            <button onclick="sharePost()">🔗 Share</button>
        </div>
        <div id="comments${postIndex}" class="comments"></div>
    `;

    feed.insertBefore(div, feed.firstChild);
}


