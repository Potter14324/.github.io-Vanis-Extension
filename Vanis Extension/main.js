
// Create a new div for the button
const buttonDiv = document.createElement('div');
buttonDiv.id = 'top-right-button';

// Create the button element
const button = document.createElement('button');
button.id = 'red-button';
button.textContent = 'Click Me';

// Append the button to the div
buttonDiv.appendChild(button);

// Append the div to the body of the page
document.body.appendChild(buttonDiv);

// Add event listener to the button
button.addEventListener('click', () => {
    alert('Button Clicked!');
});
