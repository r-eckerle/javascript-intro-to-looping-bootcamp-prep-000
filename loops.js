function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

function whileLoop(num) {
  while(num > 0) {
    console.log(--num)
  }
  return 'done'
}

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  var i = 0
  
  do {
    
  } while(array.length > 0 && incrementVariable())
}