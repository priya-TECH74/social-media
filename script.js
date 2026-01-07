let likes = [0, 0];

function login() {
    let user = document.getElementById("username").value;
    if (user === "") {
        alert("Enter username");
    } else {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("feed").classList.remove("hidden");
    }
}

function likePost(i) {
    likes[i]++;
    document.getElementById("like" + i).innerText = likes[i];
}

function commentPost() {
    let comment = prompt("Enter your comment");
    if (comment) {
        alert("Comment posted: " + comment);
    }
}

function sharePost() {
    alert("Post shared successfully!");
}


