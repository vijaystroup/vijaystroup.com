const hamBtn = document.getElementById('ham')
const mobileNav = document.getElementById('mobile-nav')
const mobileNavProjects = document.getElementById('m-projects-btn')
const mobileNavAbout = document.getElementById('m-about-btn')
const mobileNavTimeline = document.getElementById('m-timeline-btn')

hamBtn.addEventListener('click', () => {
  if (hamBtn.className.includes('is-active')) {
    mobileNav.style.width = "0%"
    document.body.style.overflow = 'unset';
  }
  else {
    mobileNav.style.width = '100%'
    document.body.style.overflow = 'hidden';
  }

  hamBtn.classList.toggle('is-active')
})

mobileNavProjects.addEventListener('click', hideMenu)
mobileNavAbout.addEventListener('click', hideMenu)
mobileNavTimeline.addEventListener('click', hideMenu)

function hideMenu() {
  mobileNav.style.width = "0%"
  document.body.style.overflow = 'unset';
  hamBtn.classList.toggle('is-active')
}
