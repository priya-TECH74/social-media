
let likes = [0, 0];

function likePost(index) {
    likes[index]++;
    document.getElementById("like" + index).innerText =
        likes[index] + " Likes";
}
