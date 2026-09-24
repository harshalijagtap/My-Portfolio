const typing = document.getElementById("typing");
const words = ["Computer Science Student", "Data Science Enthusiast", "Machine Learning Learner", "Web Developer"];
let wordIndex = 0, charIndex = 0, deleting = false;

function typeEffect(){
  const word = words[wordIndex];
  typing.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);
  let speed = deleting ? 45 : 85;
  if(!deleting && charIndex > word.length){
    deleting = true; speed = 1300;
  } else if(deleting && charIndex < 0){
    deleting = false; charIndex = 0; wordIndex = (wordIndex + 1) % words.length; speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if(window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === "#" + current));
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks! Please connect your form to a service such as Formspree or EmailJS to receive messages.");
});
