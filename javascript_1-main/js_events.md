# JavaScript Events

## Event Handling

**Description:**
Event handling refers to the process of defining code that will be executed in response to specific actions or occurrences, such as user interactions or system events.

**Resources:**
- [MDN Web Docs: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript.info: Events](https://javascript.info/events)

**Example:**
```javascript
// Define a named function as the event handler
function handleClick(event) {
    console.log('Button clicked!');
}

// Add an event listener to a button using the named function
document.getElementById('myButton').addEventListener('click', handleClick);
```
## Types of Browser Events

**Description:**
There are various types of events in the browser, including mouse events, keyboard events, form events, and more. Each type of event corresponds to a specific user action or interaction with the webpage.

**Resources:**
- [MDN Web Docs: Events reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [W3Schools: JavaScript HTML DOM Events](https://www.w3schools.com/js/js_events.asp)

**Example:**
```javascript
// Define a named function for mouseover event
function handleMouseOver(event) {
    console.log('Mouse over element:', event.target);
}

// Example of mouseover event using the named function
document.getElementById('myElement').addEventListener('mouseover', handleMouseOver);
```

## Event Delegation

**Description:**
Event delegation is a technique where a single event listener is attached to a parent element, and events are handled based on the target element that triggered the event. This approach is useful when dealing with dynamically created elements or a large number of similar elements.

**Resources:**
- [MDN Web Docs: Event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

**Example**:
```html
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
// Define a named function for event delegation
function handleListClick(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
    }
}

// Add event listener to parent element for event delegation
document.getElementById('myList').addEventListener('click', handleListClick);
</script>
```
### Event Delegation with 'event.target'
Event delegation allows you to attach a single event listener to a parent element and dynamically determine which child element triggered the event using the event.target property. This technique is useful for handling events for multiple child elements efficiently.

```javascript
<ul id="myList">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<script>
// Define a named function for event delegation
function handleListClick(event) {
    // Check if the target element is an <li> element
    if (event.target.tagName === 'LI') {
        // Dynamically determine which <li> element was clicked
        console.log('Clicked on:', event.target.textContent);
    }
}
// Add event listener to the parent element for event delegation
document.getElementById('myList').addEventListener('click', handleListClick);
</script>
```
## Conclusion
Understanding JavaScript events, event handling, and event delegation is crucial for building interactive and dynamic web applications. These resources provide a solid foundation for learning about events in JavaScript.

Using named functions as event handlers enhances code readability and makes it easier to manage event listeners, especially when dealing with multiple events or event delegation.