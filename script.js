function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let isThrottled = false;

window.addEventListener('wheel', (e) => {
    if (isThrottled) return;

    const sections = Array.from(document.querySelectorAll('section'));
    const currentScroll = window.scrollY;
    let currentIndex = sections.findIndex(section => section.offsetTop > currentScroll) - 1;

    if (currentIndex === -1) currentIndex = sections.length - 1;

    if (e.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    } else {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    sections[currentIndex].scrollIntoView({ behavior: 'smooth' });

    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 1000); // Adjust the timeout to control the scroll interval
});
var currentProject = "";
var currentIndex = 0;
var projectImages = {
  'project-1': [
    './assets/Rebellious Roots/Big Map 3.jpg',
    './assets/Rebellious Roots/Sea Level Change-01.jpg',
    './assets/Rebellious Roots/Masterplan.jpg',
    './assets/Rebellious Roots/Sites and.jpg',
    './assets/Rebellious Roots/Render 1.jpg'
  ],
  'project-2': [
    './assets/project-2-overview-1.png',
    './assets/project-2-overview-2.png',
    './assets/project-2-overview-3.png'
  ],
  'project-3': [
    './assets/project-3-overview-1.png',
    './assets/project-3-overview-2.png',
    './assets/project-3-overview-3.png'
  ]
};

function openModal(projectId) {
  currentProject = projectId;
  currentIndex = 0;
  document.getElementById('modal-image').src = projectImages[projectId][currentIndex];
  document.getElementById('modal').style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

function changeSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = projectImages[currentProject].length - 1;
  } else if (currentIndex >= projectImages[currentProject].length) {
    currentIndex = 0;
  }
  document.getElementById('modal-image').src = projectImages[currentProject][currentIndex];
}
