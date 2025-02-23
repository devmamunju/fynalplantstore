function digitalClock(){

  let time= new Date();
  let hours=time.getHours();
  let minitus=time.getMinutes();
  let seconds=time.getSeconds();
  let session="AM"
  
  
  // if(hours <10){
  
  //     hours="0"+ hours;
  // }
  
  hours = (hours < 10) ? "0" + hours:hours;
  minitus = (minitus < 10) ? "0" + minitus:minitus;
  seconds = (seconds < 10) ? "0" + seconds:seconds;
  session= (hours>12) ? "PM" : "AM";
  
  document.getElementById("clock").innerText = hours + ":" + minitus + ":" + seconds + " " + session;
  
  
  
  }
  
  setInterval(digitalClock , 1000);




  function ar() {
    if (confirm("Product added successfully"));
        window.open(http/www.facebook.com, "_blank");
    }


    const alert_ = document.querySelector('.mamun');
const btns = document.querySelectorAll('.cart_btn');
btns.forEach(btn => {
btn.addEventListener('click', ()=>{
  alert_.classList.add('active');
  setTimeout(()=>{
    alert_.classList.remove('active');
  },2000);
  })
});









let chat_icon=document.querySelector(".chat_icon");

let chat_box=document.querySelector(".chat_box");
chat_icon.addEventListener("click",()=>{chat_box.classList.toggle("active");


});



let close_btn=document.querySelector(".close_btn");
close_btn.addEventListener("click", ()=> {
chat_box.classList.remove("active");

});





let send_btn = document.querySelector("#send_buton");

send_btn.addEventListener("click", () => {
  let message_input = document.querySelector("#message_input");
  let message = message_input.value; // Correctly accessing the input value
  
  if (message === "") {
    return; // Prevent adding empty messages
  }

  let message_body = `
    <div class="sender d-flex mb-3 justify-content-left gap-2">
      <div class="author_img">
        <i class="fa-solid fa-user"></i>
      </div>
      <div class="message">
        <p>${message}</p> <!-- Correct template literal syntax -->
      </div>
    </div>`;

  let messages_wrapper = document.querySelector(".messages");
  messages_wrapper.innerHTML += message_body;
  message_input.value = ""; // Correctly resetting input field value

  // Scroll to the bottom of the chat after adding a new message
  scrollToBottom();
});

function scrollToBottom() {
  let messages_wrapper = document.querySelector(".messages");
  messages_wrapper.scrollTop = messages_wrapper.scrollHeight; // Scroll to the bottom
}