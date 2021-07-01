var hero = document.querySelector('#hero')
var itemCount = document.querySelector('#item-count')
var items = 0
itemCount.innerHTML = items

function swap() {
  var temp = hero.src
  hero.src = hero.getAttribute('data-alt-src')
  hero.setAttribute('data-alt-src', temp)
  console.log(temp)
}

function incrementCount() {
  items++
  itemCount.innerHTML = items
}