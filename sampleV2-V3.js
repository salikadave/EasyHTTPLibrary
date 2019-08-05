const http = new easyHTTP();

// Make a GET request

http
  .get("https://jsonplaceholder.typicode.com/users")
  .then(data => {
    let output = ``;
    data.forEach(user => {
      output += `<h4>${user.name}</h4>
         <li>${user.username}</li>
         <li>${user.email}</li>
        `;
      document.querySelector(".output").innerHTML = output;
    });
  })
  .catch(err => console.log(err));

// Make a POST request

const userData = {
  name: "Salika Dave",
  username: "salikadave",
  email: "salika.dave@somaiya.edu"
};
http.post("https://jsonplaceholder.typicode.com/posts", userData)
 .then(data => console.log(data))
 .catch(err => console.log(err))

// Make a PUT Request
http.put("https://jsonplaceholder.typicode.com/users/10", userData)
 .then(data => console.log(data))
 .catch(err => console.log(err))

// Make a DELETE Request
http.delete('https://jsonplaceholder.typicode.com/users/10')
 .then( () => console.log('Resource Deleted'))
 .catch(err => console.log(err))

 console.log('Processing the request. . .')