const counters = document.querySelectorAll(".stats-overlay span");
const gridSection = document.querySelector(".stats-overlay");

let started = false;

const observer = new IntersectionObserver(e => {
  if (e[0].isIntersecting && !started) {
    started = true;

    counters.forEach(counter => {
      const target = +counter.dataset.count;
      const suffix = counter.innerText.replace("0", "");
      let count = 0;


      const speed = target <= 20 ? 120 : 25;

      const update = () => {
        if (count < target) {
          count++;
          counter.innerText = count + suffix;
          setTimeout(update, speed);
        } else {
          counter.innerText = target + suffix;
        }
      };

      update();
    });
  }
}, { threshold: 0.4 });

observer.observe(gridSection);




// const endDate = new Date();
// endDate.setDate(endDate.getDate() + 2); // 2 days from now

// function updateCountdown() {
//   const now = new Date().getTime();
//   const distance = endDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((distance / (1000 * 60)) % 60);
//   const seconds = Math.floor((distance / 1000) % 60);

//   document.getElementById("days").innerText = days;
//   document.getElementById("hours").innerText = hours;
//   document.getElementById("minutes").innerText = minutes;
//   document.getElementById("seconds").innerText = seconds;
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();



