const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("This is the home page");
});

app.post('/user', (req, res) => {
  let data = req.body;
  let name = req.body.username;
  let email = req.body.email;

  console.log(data);
  res.send(`User data ${username}, ${email}`);
})

app.post('userForm', (req, res) => {
  let data = req.body

  console.log("Data", data);
  res.send("UserForm Page")
})

app.listen(port, () => {
  console.log("Server is up");
})