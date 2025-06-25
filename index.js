
function writeCards(names, gift) {
  
  const messages = [];


  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    
    const message = `Thank you, ${name}, for the wonderful ${gift} gift!`;

    messages.push(message);
  }


  return messages;
}


function countDown(startNumber) {
  for (let i = startNumber; i >= 0; i--) {
    console.log(i);
  }
}

