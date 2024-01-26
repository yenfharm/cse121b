document.getElementById('addNumbers').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const sum = num1 + num2;
    document.getElementById('sum').value = sum;
  });
  
document.getElementById('subtractNumbers').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    const difference = num1 - num2;
    document.getElementById('difference').value = difference;
  });
  
document.getElementById('multiplyNumbers').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    const product = num1 * num2;
    document.getElementById('product').value = product;
  });
  
document.getElementById('divideNumbers').addEventListener('click', function () {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    if (divisor === 0) {
      alert('Cannot divide by zero');
      return;
    }
    const quotient = dividend / divisor;
    document.getElementById('quotient').value = quotient;
  });


  
  document.getElementById('getTotal').addEventListener('click', function () {
    const subtotal = parseFloat(document.getElementById('subtotal').value);
    const isMember = document.getElementById('member').checked;
    let total;
    if (isMember) {
      total = subtotal * 0.8; 
    } else {
      total = subtotal;
    }
    document.getElementById('total').innerHTML = `$${total.toFixed(2)}`;
  });



  window.onload = function () {
    const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    document.getElementById('array').innerHTML = sourceArray.join(', ');
  
    const odds = sourceArray.filter(num => num % 2 !== 0);
    document.getElementById('odds').innerHTML = odds.join(', ');
  
    const evens = sourceArray.filter(num => num % 2 === 0);
    document.getElementById('evens').innerHTML = evens.join(', ');
  
    const sumOfArray = sourceArray.reduce((acc, num) => acc + num, 0);
    document.getElementById('sumOfArray').innerHTML = sumOfArray;
  
    const multiplied = sourceArray.map(num => num * 2);
    document.getElementById('multiplied').innerHTML = multiplied.join(', ');
  
    const sumOfMultiplied = multiplied.reduce((acc, num) => acc + num, 0);
    document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
  };
