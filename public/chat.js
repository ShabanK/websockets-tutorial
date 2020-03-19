var socket = io();

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const send = document.getElementById("send");
const output = document.getElementById("output");

send.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});
