//your JS code here. If required.
// Get references to the input, button, and output div
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function that returns a promise resolving after a delay
function resolveAfterDelay(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Event listener for the button click
button.addEventListener('click', () => {
  // Get the input value
  const inputValue = Number(input.value);
  
  // Clear the output div initially
  output.textContent = '';

  // First promise: wait 2 seconds and resolve with input value
  resolveAfterDelay(inputValue, 2000)
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return resolveAfterDelay(number * 2, 1000); // Multiply by 2 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return resolveAfterDelay(number - 3, 1000); // Subtract 3 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return resolveAfterDelay(number / 2, 1000); // Divide by 2 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return resolveAfterDelay(number + 10, 1000); // Add 10 after 1 second
    })
    .then((finalResult) => {
      output.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      // Catch any errors that might occur during the promise chain
      output.textContent = `Error: ${error}`;
    });
});
