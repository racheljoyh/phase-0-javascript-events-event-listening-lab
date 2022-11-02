function addingEventListener() {
  let input = document.querySelector('#button')
  return input.addEventListener('click', alertMe)
}

function alertMe () {
  return "I was clicked"
}