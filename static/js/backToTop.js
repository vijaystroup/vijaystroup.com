const backToTopBtn = document.getElementById('back-to-top')

// when the user scrolls down
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    console.log('scrolling down')
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = "none"
  }
}

// when back-to-top button is pushed
backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})
