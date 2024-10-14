// EXERCISE 1: Selecting Elements
// Select the element with the ID 'mainTitle' and log it to the console.
let mainTitleElement = window.document.getElementById('mainTitle');

console.log(mainTitleElement);

// EXERCISE 2: Changing HTML Content
// Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let paragraphElement = window.document.getElementsByTagName('p');

paragraphElement[1].innerHTML = "This paragraph has been changed.";

// Exercise 3: Changing CSS Styles
// Select the first list item and change its text color to red
let firstListElement = window.document.querySelector('li')
firstListElement.style.color = 'red';

// Exercise 4: Adding/Removing Classes
// Add the "highlight" class to the first paragraph
paragraphElement[0].classList.add('highlight');

// Remove the "highlight" class from the first paragraph after 3 seconds
setTimeout(() => {
    paragraphElement[0].classList.remove('highlight');
}, 3000);


// Exercise 5: Creating and Appending Elements
// Create a new list item with the text "Item 4" and append it to the existing list
let listElement = window.document.querySelector('ul');

let newListElement = window.document.createElement('li');

newListElement.textContent = 'Item 4';

listElement.appendChild(newListElement);

// Exercise 6: Removing Elements
// Remove the last list item from the unordered list
listElement.removeChild(listElement.lastElementChild);

// Exercise 7: Handling Events
// Add a click event listener to the button that displays an alert saying "Button clicked!"
let buttonElement = window.document.getElementById('actionButton');

buttonElement.addEventListener('click', () => {
    alert('Button Clicked!');
});

// Exercise 8: Working with Input
// Add an input event listener to the input field that displays the current input value in the result div
let inputElement = window.document.getElementById('inputField');
let resultElement = window.document.getElementById('result');

inputElement.addEventListener('input', () => {
    resultElement.textContent = inputElement.value;
});

// Exercise 9: Toggling Visibility
// Add a click event listener to the button that toggles the visibility of the content div
let contentElement = window.document.getElementById('content');

buttonElement.addEventListener('click', () => {
    if (contentElement.style.display == 'none') {
        contentElement.style.display = 'block';
    } else {
        contentElement.style.display = 'none'
    }
})

// Exercise 10: Modifying Attributes
// Select the input field and change its placeholder text to "Enter your name"
inputElement.placeholder = 'Enter your name';
