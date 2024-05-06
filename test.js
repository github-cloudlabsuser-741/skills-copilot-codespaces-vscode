const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNum) => {
  rl.question('Enter the second number: ', (secondNum) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      let result;

      switch(operation) {
        case 'add':
          result = parseFloat(firstNum) + parseFloat(secondNum);
          break;
        case 'subtract':
          result = parseFloat(firstNum) - parseFloat(secondNum);
          break;
        case 'multiply':
          result = parseFloat(firstNum) * parseFloat(secondNum);
          break;
        case 'divide':
          if(secondNum != '0') {
            result = parseFloat(firstNum) / parseFloat(secondNum);
          } else {
            console.log('Error: Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Error: Invalid operation. Please enter add, subtract, multiply, or divide.');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});