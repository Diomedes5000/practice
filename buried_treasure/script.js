// Get a random number from 0 to size
function getRandomNumber(size) {
  return Math.floor(Math.random() * size)
}

// Calculate distance between click event and target
function getDistance(event, target) {
  var diffX = event.offsetX - target.x
  var diffY = event.offsetY - target.y
  return Math.sqrt((diffX * diffX) + (diffY * diffY))
}

// Get a string representing the distance
function getDistanceHint(distance) {
  if (distance < 10) {
    return 'Boiling hot!'
  } else if (distance < 20) {
    return 'Really hot'
  } else if (distance < 40) {
    return 'Hot'
  } else if (distance < 80) {
    return 'Warm'
  } else if (distance < 160) {
    return 'Cold'
  } else if (distance < 320) {
    return 'Really Cold'
  } else {
    return 'Freezing!'
  }
}

// Variables
var width = 400
var height = 400
var clicks = 0

// Create a random target location
var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}

// Add a click handler to the img element
$('#map').click((event) => {
  clicks++
  // Get distance between click event and target
  var distance = getDistance(event, target)
  // Convert distance to a hint
  var distanceHint = getDistanceHint(distance)
  // Update the #distance element with the new hint
  $('#distance').text(distanceHint + '! You have ' + (20-clicks) + ' remaining clicks')
  // If the click was close enough, tell them they won
  if (distance < 8) {
    alert('Found the treasure in ' + clicks + ' clicks!')
  }
  if (clicks === 20) {
    alert('Game Over')
  }
})
