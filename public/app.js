const socket = io();
console.log("user is conneted");

let massageInput = document.getElementById("message-input");
let sendBtn = document.getElementById("send-btn");
let usernameInput = document.getElementById("username");
let joinedBtn = document.getElementById("joinbtn");
let onlineUsers = document.getElementById("onlineUsers")



joinedBtn.addEventListener("click", () => {
    const username = usernameInput.value
    if(!username){
        alert("enter your username");
        // console.log("enter your username");
        return
    }
    socket.emit("joined-user",  username)


     usernameInput.value = ""


     socket.on("online-users", (totalUsers) => {
        console.log("total users ==>",totalUsers);
        onlineUsers.innerHTML = `Online Users : ${totalUsers}`
        
     })
})

sendBtn.addEventListener("click", () => {
    const message = massageInput.value;
    if(!message){
        alert("enter your message")
        // console.log("enter your message")
        return
    }
    console.log(message);
    socket.emit("message", message)

    socket.on("message",(data) => {
        console.log(data)
    })

    massageInput.value= ""
})