const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const nameEL = document.getElementById("name-el")
const userEl = document.getElementById("user-el")
const locationEl = document.getElementById("loc-el")
const avatarEl = document.getElementById("doc-el")
const postEl = document.getElementById("post-el")
const commentEl = document.getElementById("comment-el") 
const likeEl = document.getElementById("like-el")
const ropeEl = document.getElementById("post")



function renderPosts(postss) {
    let posty = ''

    for (let post of postss) {
        posty += `
                <div class="top">
                    <img id="post-el" class="profile side" src="${post.avatar}" alt="Profile Picture">
                    <div class="space-ele">
                        <h2 id="name-el">${post.name}</h2>
                        <h3 id="loc-el">${post.location}</h3>
                    </div>
                </div>
                <div class="middle">
                    <img class="main-pic" src="${post.post}" alt="Profile Picture">
                </div>
                <div>
                    <div>
                        <img class="icon" src="images/icon-heart.png" alt="Profile Picture">
                        <img class="icon" src="images/icon-comment.png" alt="Profile Picture">
                        <img class="icon" src="images/icon-dm.png" alt="Profile Picture">
                    </div>
                    <div>
                        <p id="like-el">${post.likes} Likes</p>
                        <p id="comment-el"><span id="user-el">${post.username}</span> ${post.comment}</p>
                    </div>
                </div>
        `

}
        ropeEl.innerHTML = posty
}

renderPosts(posts)