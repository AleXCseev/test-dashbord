require('../css/_style.css');

const sidebar = document.querySelector(".sidebar");
const openSidebarBtn = document.querySelector(".open-sidebar");
const closeSidebarBtn = document.querySelector(".close-sidebar")
const sidebarNavBtn = document.querySelectorAll(".sidebar-nav__btn")

function openSidebar() {
    sidebar.classList.add("sidebar_open")
}

function closeSidebar() {
    sidebar.classList.remove("sidebar_open")
}

openSidebarBtn.addEventListener("click", openSidebar)

closeSidebarBtn.addEventListener("click", closeSidebar)

sidebarNavBtn.forEach((el) => el.addEventListener("click", closeSidebar))

function onEntry(entry) { 
    entry.forEach(change => { 
      if (change.isIntersecting) { 
       change.target.classList.add('element-show'); 
       
      } 
    }); 
} 
let options = { threshold: [0.5] }; 
let observer = new IntersectionObserver(onEntry, options); 
let elements = document.querySelectorAll('.element-animation'); 

let count = 0

setInterval(function() {
    if(elements.length > count)
    observer.observe(elements[count])
    count++
}, 50)
