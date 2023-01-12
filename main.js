import "./style.css";

const leftDivs = document.querySelectorAll(".left");
const rightDivs = document.querySelectorAll(".right");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
    console.log(entries);
  },
);

leftDivs.forEach((leftDiv) => {
  observer.observe(leftDiv);
});

rightDivs.forEach((rightDiv) => {
  observer.observe(rightDiv);
});
