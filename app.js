const http = new easyHTTP();

// GET Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if(err){
//       console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// GET a single Post
// http.get("https://jsonplaceholder.typicode.com/posts/100", function(err, post) {
//   if(err){
//       console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custom Post',
  body:'This is a Custom Post.'
}

// Create a Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, response){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// PUT Request : - Update a Certain Post
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post){
//   if(err){
//     console.log(err);
//   } else{
//     console.log(post);
//   }
// });

// DELETE Request
http.delete("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post){
  if(err){
    console.log(err);
  } else{
    console.log(post);
  }
});