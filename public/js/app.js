// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//   response.json().then((data) => {
//     console.log(data)
//   })
// })

const form = document.querySelector('form')
const address = document.querySelector('input')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = address.value
  console.log(location)
})
