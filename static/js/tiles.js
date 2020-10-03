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

  allSelector.style.color = '#2E71D8'
  dataSciSelector.style.color = 'white'
  webSelector.style.color = 'white'
  appSelector.style.color = 'white'
})

dataSciSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of dataSciCollection) ele.style.display = 'grid'

  allSelector.style.color = 'white'
  dataSciSelector.style.color = '#2E71D8'
  webSelector.style.color = 'white'
  appSelector.style.color = 'white'
})

webSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of webCollection) ele.style.display = 'grid'

  allSelector.style.color = 'white'
  dataSciSelector.style.color = 'white'
  webSelector.style.color = '#2E71D8'
  appSelector.style.color = 'white'
})

appSelector.addEventListener('click', () => {
  for (ele of allCollection) ele.style.display = 'none'
  for (ele of appCollection) ele.style.display = 'grid'

  allSelector.style.color = 'white'
  dataSciSelector.style.color = 'white'
  webSelector.style.color = 'white'
  appSelector.style.color = '#2E71D8'
})
