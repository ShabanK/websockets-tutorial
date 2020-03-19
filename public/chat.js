var socket = io();

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const send = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

//sending messages
send.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

// if (message.value === "") {
//   socket.emit("clear");
// } else {
message.addEventListener("keypress", () => {
  socket.emit("feedback", {
    handle: handle.value
  });
});
//}

//listening for messages
socket.on("chat", data => {
  feedback.innerHTML = ``;
  output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p><br>`;
});

socket.on("feedback", data => {
  feedback.innerHTML = `<p><i>${data.handle} is typing</i></p>`;
});

// socket.on("clear", data => {
//   feedback.innerHTML = ``;
// });
