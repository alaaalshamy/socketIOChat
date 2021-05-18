const socket = io.connect("http://localhost:8000");
// Query DOM
var message = document.getElementById('message'),
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output');

// Emit events
btn.addEventListener('click', function () {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
  message.value = "";
});

// Listen for events
socket.on('chat', function (data) {
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
// socket.on('user',(users)=>{
//   // alert(users);
// })




// userForm = document.getElementById('userForm')
// userName = document.getElementById('userName');
// loginbtn = document.getElementById('login');
// users = document.getElementById('users');
// chatForm = document.getElementById('mario-chat');
// loginForm = document.getElementById('loginForm');


// function handleForm(event) { event.preventDefault(); }

// userForm.addEventListener('submit', handleForm);
// chatForm.addEventListener('submit', handleForm);
