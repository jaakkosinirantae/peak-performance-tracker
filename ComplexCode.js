/*
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a social media application with user authentication, post creation, and like/comment functionality.
*/

// User class representing a user in the social media app
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content);
    this.posts.push(post);
  }

  likePost(post) {
    post.addLike(this);
  }

  commentOnPost(post, comment) {
    post.addComment(this, comment);
  }

  addFriend(friend) {
    this.friends.push(friend);
  }
}

// Post class representing a post in the social media app
class Post {
  constructor(content) {
    this.content = content;
    this.likes = [];
    this.comments = [];
  }

  addLike(user) {
    this.likes.push(user);
  }

  addComment(user, comment) {
    this.comments.push({ user, comment });
  }
}

// Usage example
const mainUser = new User('John Doe', 'johndoe@example.com', 'password123');

const friend1 = new User('Alice', 'alice@example.com', 'pass123');
const friend2 = new User('Bob', 'bob@example.com', 'pass123');

mainUser.createPost('Hello world!');
mainUser.createPost('This is a complex code example in JavaScript.');

friend1.likePost(mainUser.posts[0]);
friend2.commentOnPost(mainUser.posts[1], 'Great code implementation!');

mainUser.addFriend(friend1);
mainUser.addFriend(friend2);

console.log(mainUser);
console.log(friend1);
console.log(friend2);
console.log(mainUser.posts[0]);
console.log(mainUser.posts[1]);