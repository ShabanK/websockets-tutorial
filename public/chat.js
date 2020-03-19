var socket = io();

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const send = document.getElementById("send");
const output = document.getElementById("output");

//sending messages
send.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

//listening for messages
socket.on("chat", data => {
  output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p><br>`;
});
