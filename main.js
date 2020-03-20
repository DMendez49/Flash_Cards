
document.getElementById('form').addEventListener('submit', (e) => {
  //let varibles 
  let name = document.getElementById("name").value;
  let last = document.getElementById("last").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  createUsers(name, last, phone, email);
  e.preventDefault();
});
// Array of users
var users = [];
// string values for my create users 
function createUsers(name, last, phone, email) {
  var user = {
    name: name,
    last: last,
    phone: phone,
    email: email
  }
  users.push(user);
  console.log(users)
  readUser();
  document.getElementById('form').reset();
}

function readUser() {
  var userhtml = document.getElementById('user');
  userhtml.innerHTML = ' ';
  for (var i = 0; i < users.length; i++) {
    userhtml.innerHTML += `
      <div class="DomKennedy">
        <p>First Name: ${users[i].name}</p>                                                
        <p> Last Name: ${users[i].last}</p>
        <p> Phone: ${users[i].phone}</p>
        <p>Email: ${users[i].email}<p>
        <button class="edit" onClick="editUser('${i}')">Edit</button><button class="remove" onClick="deleteUser('${i}')">Delete</button>`
  }
}

function deleteUser(i) {
  users.splice(i, 1);
  readUser();
}

function editUser(index) {
  var userhtml = document.getElementById('user');
  userhtml.innerHTML = '';
  for (var i = 0; i < users.length; i++) {
    if (i == index) {
      userhtml.innerHTML += `<div class="red">
        First Name: <input id="input2name"  placeholder="${users[i].name}"><br><br>
        Last Name: <input id="input2last" placeholder="${users[i].last}"><br><br>
        Phone: <input id="input2phone" placeholder="${users[i].phone}"><br><br>
        Email: <input id="input2email" placeholder="${users[i].email}"><br><br>
        <button class="edit" onClick="updateUser('${i}')">Update</button><button class="remove" onClick="readUser()">Cancel</button>
      `
    } else {
      userhtml.innerHTML += `<div class="DomKennedy">
            <p>First Name: ${users[i].name}</p>                                                
            <p>Last Name: ${users[i].last}</p>
            <p>Phone: ${users[i].phone}</p>
            <p>Email: ${users[i].email}<p>
            <button disabled class="edit" onClick="editUser('${i}')">Edit</button>
            <button disabled class="remove" onClick="deleteUser('${i}')">Delete</button>`
    }
  }
}

function updateUser(index) {
  debugger
  var updatename = document.getElementById('unput2name').value;
  var updatelast = document.getElementById('unput2last').value;
  var updatephone = document.getElementById('unput2phone').value;
  var updatemail = document.getElementById('unput2email').value;

  if (updatename == '' || updatelast == '' || updatephone == '' || updatemail == '') {
    alert("INCOMPLETE");

  } else {
    users[index].name = updatename;
    users[index].last = updatelast;
    users[index].phone = updatephone;
    users[index].email = updatemail;
    readUser();
  }
}

