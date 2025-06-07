var acc = document.getElementsByClassName("faq-btn");
var i;
for(i=0; i < acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var question = this.nextElementSibling;
        if(question.style.maxHeight){
            question.style.maxHeight=null;
        }else{
            question.style.maxHeight= question.scrollHeight + "px";
        }
    });
} 






// function toggleMore() {
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("about-more");
//     var paragraph = document.querySelector(".paragraph");
  
//     if (moreText.style.display === "none") {
//       moreText.style.display = "inline";
//       btnText.innerHTML = "Read Less"; 
//     } else {
//       moreText.style.display = "none";
//       btnText.innerHTML = "Read More"; 
//     }
//   }