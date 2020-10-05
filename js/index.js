function getAllPosts() {
    window.location.href= "./html/postlist.html";
}

function openCreatePost() {
    document.getElementById('newPostModal').style.display='block';
}

function onCloseNewPost() {
    document.getElementById('newPostModal').style.display='none';
}