let back = document.querySelector(".back-to-top")


window.addEventListener("scroll", ()=>{
  if(window.scrollY > 700){
    back.classList.add("CB")
  }
  else{
    back.classList.remove("CB")
  }
})


back.addEventListener("click",()=>{
  window.scrollTo({
    top : 0,
    behavior: "smooth"
  })
})





const reveal = document.querySelectorAll(".reveal-1");

const reveal1 = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("SC");
      }
    });
  },
  { threshold: 0.2 }
);



reveal.forEach(el => reveal1.observe(el));