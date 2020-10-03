const allCollection = Array.from(document.getElementsByClassName('tile'))
const dataSciCollection = allCollection.filter(e => e.classList.contains('data-science'))
const webCollection = allCollection.filter(e => e.classList.contains('web'))
const appCollection = allCollection.filter(e => e.classList.contains('application'))

const allSelector = document.getElementById('all')
const dataSciSelector = document.getElementById('data-science')
const webSelector = document.getElementById('web')
const appSelector = document.getElementById('application')

allSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'grid'
})

dataSciSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of dataSciCollection) ele.style.display = 'grid'
})

webSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of webCollection) ele.style.display = 'grid'
})

appSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of appCollection) ele.style.display = 'grid'
})
