 let users = { "admin": "1234" }; // sample user
let likes = [0,0];
let commentsData = [[],[]];

function showSignUp(){
    document.getElementById("authBox").classList.add("hidden");
    document.getElementById("signUpBox").classList.remove("hidden");
}

function showLogin(){
    document.getElementById("signUpBox").classList.add("hidden");
    document.getElementById("authBox").classList.remove("hidden");
}

function login(){
    let u = document.getElementById("username").value;
    let p = document.getElementById("password").value;
    if(u===""||p===""){ alert("Enter both fields"); return; }
    if(users[u] && users[u]===p){
        document.getElementById("authBox").style.display="none";
        document.getElementById("feed").classList.remove("hidden");
    } else {
        alert("Invalid username or password");
    }
}

function signUp(){
    let u = document.getElementById("newUserName").value;
    let p = document.getElementById("newPass").value;
    if(u===""||p===""){ alert("Fill all fields"); return; }
    if(users[u]){ alert("Username exists"); return; }
    users[u]=p;
    alert("Sign Up successful! Login now.");
    showLogin();
}

function likePost(i){
    likes[i]++;
    document.getElementById("like"+i).innerText=likes[i];
}

function commentPost(i){
    let c = prompt("Enter your comment:");
    if(c){ commentsData[i].push(c); updateComments(i); }
}

function updateComments(i){
    let div = document.getElementById("comments"+i);
    div.innerHTML = commentsData[i].map(c=>"- "+c).join("<br>");
}

function sharePost(){
    alert("Post shared successfully! 🔗");
}

function addPost(){
    let u=document.getElementById("postUser").value;
    let c=document.getElementById("postCaption").value;
    let i=document.getElementById("postImage").value;
    if(u===""||c===""||i===""){ alert("Fill all fields"); return; }

    let feed = document.getElementById("feed");
    let idx = likes.length;
    likes.push(0); commentsData.push([]);
    let div = document.createElement("div"); div.classList.add("post");
    div.innerHTML=`
        <div class="post-header">
            <img class="avatar" src="https://i.pravatar.cc/50?img=${Math.floor(Math.random()*70)}">
            <span class="user">${u}</span>
        </div>
        <img class="post-image" src="${i}">
        <p>${c}</p>
        <div class="actions">
            <button onclick="likePost(${idx})">👍 Like</button>
            <span id="like${idx}">0</span>
            <button onclick="commentPost(${idx})">💬 Comment</button>
            <button onclick="sharePost()">🔗 Share</button>
        </div>
        <div id="comments${idx}" class="comments"></div>
    `;
    feed.insertBefore(div, feed.firstChild);
}
