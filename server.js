var  express =require("express");
var app =express();
var server =require('http').createServer(app);
// var io = require("socket.io")(server); two ways of using socket
var socket = require("socket.io");

var io = socket(server);


users=[];
connections=[];
// static files will open instade of "app.get('/')" app.get('/',(req,res)=>{
//     res.sendFile(__dirname + '/index.html');
// })
app.use(express.static('public'));
const port = process.env.PORT || 8000;
server.listen(port, (err) => {
    if (err)
        console.log(err);
    else
        console.log("server running on " + port);
})// Socket setup & pass server
io.on('connection', (socket) => {
        console.log("socket connected ");
        connections.push(socket);
        console.log(connections.length);
        socket.emit('joined', connections.length);
        // updateUsers(users);
        
    
    //on event chating     
    socket.on('chat', function(data){
        console.log(data);
        io.sockets.emit('chat', data);
    });
    socket.on('disconnect',(socket)=>{
        connections.splice(connections.indexOf(socket),1);
        users.splice(users.indexOf(socket.userName),1);
        // updateUsers(users);
        console.log(connections.length);
    
    })

})
// function updateUsers(usersList){
// io.sockets.emit('user',usersList);
// }