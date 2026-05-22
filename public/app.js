const socket = io();
console.log("user is conneted");

let massageInput = document.getElementById("message-input")
let sendBtn = document.getElementById("send-btn")

sendBtn.addEventListener("click", () => {
    const message = massageInput.value;
    console.log(message);
    socket.emit("message", message)

    socket.on("message",(data) => {
        
    })

    massageInput.value= ""
})