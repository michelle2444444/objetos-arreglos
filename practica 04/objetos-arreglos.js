const instagramPost = {
    user: {
        username: "ychillpa",
        postTime: "1 hour ago",
        image: "tree sculpture with person",
        location: "Unknown Park",
    },
    interactions: {
        likes: 120,
        comments: 15,
        shares: 5,
    },
    userInteraction: {
        liked: true,
        commented: false,
        shared: false
    }
}

// Desestructuración
const {user: {username, postTime}, interactions: {likes, comments}} = instagramPost;
console.log(username, postTime, likes, comments);

const posts = [
    {
        username: "ychillpa",
        postTime: "1 hour ago",
        image: "tree sculpture with person",
        location: "Park",
        likes: 120,
        comments: 15
    },
    {
        username: "ariel_estrelaaa",
        postTime: "2 hours ago",
        image: "cityscape",
        location: "Downtown",
        likes: 210,
        comments: 25
    }
];

// Usando .map para transformar los datos
const postSummaries = posts.map(post => {
    return {
        username: post.username.toUpperCase(),
        location: post.location.toUpperCase(),
        likes: post.likes
    }
});

console.log(postSummaries);

const usersInteraction = [
    { username: "xcarlos_", liked: true, commented: false },
    { username: "majo2005", liked: true, commented: true },
    { username: "liz_alejaa", liked: false, commented: true }
];

// Filtrando usuarios que dieron like
const usersLiked = usersInteraction.filter(user => user.liked);
console.log(usersLiked);

// Contando cuántos usuarios comentaron
const usersCommented = usersInteraction.filter(user => user.commented).length;
console.log(usersCommented);
