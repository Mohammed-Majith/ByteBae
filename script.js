const sampleQuestions = [
  "What is HTML?",
  "How do I center a div in CSS?",
  "Explain Flexbox",
  "What is the DOM?",
  "How does JavaScript handle async code?",
  "Explain promises",
  "What is an arrow function?",
  "What is the difference between == and ===?",
  "What is localStorage?",
  "How to make a responsive navbar in Bootstrap?",
  "Explain CSS Grid",
  "What is the box model?",
  "What are media queries?",
  "Difference between null and undefined?",
  "What is a closure?",
  "What is hoisting in JavaScript?",
  "Explain event delegation",
  "What is debounce and throttle?",
  "How to create a modal in Bootstrap?",
  "What is a callback function?",
  "What is the difference between GET and POST?",
  "Explain REST APIs",
  "What is JSON?",
  "How to use Fetch API?",
  "How to validate a form in HTML?",
  "What are semantic tags?",
  "How does z-index work?",
  "Explain position relative vs absolute",
  "How to import fonts in CSS?",
  "How to use animations in CSS?",
  "What is the use of viewport meta tag?",
  "What is an iframe?",
  "What are pseudo-classes in CSS?",
  "What are transitions in CSS?",
  "What is event bubbling?",
  "Explain destructuring in JS",
  "What is a template literal?",
  "What are default parameters?",
  "How does map() work in JS?",
  "What is filter() used for?",
  "How to use reduce()?",
  "What is spread operator?",
  "What is rest parameter?",
  "What is the use of querySelector?",
  "What is the difference between var and let?",
  "How to handle errors in JS?",
  "Explain try...catch block",
  "What is NaN?",
  "How to check type in JavaScript?",
  "How to toggle classes in JS?",
  "How to hide elements using JS?",
  // Add more up to 100...
];

function handleUserInput() {
  const input = document.getElementById("userInput").value.trim();
  if (input === "") return;

  appendMessage("You", input, "user-text");

  setTimeout(() => {
    const reply = getSimulatedResponse(input.toLowerCase());
    appendMessage("ByteBae", reply, "bot-text");
  }, 600);

  document.getElementById("userInput").value = "";
}

function appendMessage(sender, text, className) {
  const chatOutput = document.getElementById("chatOutput");
  const message = document.createElement("p");
  message.className = className;
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatOutput.appendChild(message);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getSimulatedResponse(input) {
  if (input.includes("closure"))
    return "A closure is when a function remembers variables from its lexical scope even when executed outside that scope.";
  if (input.includes("flexbox"))
    return "Flexbox is a layout system that arranges elements in rows or columns using flexible sizing.";
  if (input.includes("center a div"))
    return "Use CSS Flexbox: display: flex; justify-content: center; align-items: center;";
  if (input.includes("arrow function"))
    return "An arrow function is a shorter syntax for function expressions and doesn't bind its own `this`.";
  if (input.includes("async") || input.includes("await"))
    return "Async/await simplifies writing asynchronous code. It allows you to write promise-based code as if it were synchronous.";
  if (input.includes("api"))
    return "API stands for Application Programming Interface — a way for programs to talk to each other.";
  if (input.includes("fetch"))
    return "The Fetch API lets you make HTTP requests using JavaScript. It's promise-based and more modern than XMLHttpRequest.";
  if (input.includes("event") && input.includes("bubbling"))
    return "Event bubbling is when an event starts from the innermost element and propagates outward.";
  if (input.includes("bootstrap"))
    return "Bootstrap is a CSS framework that helps build responsive websites using prebuilt components.";
  if (input.includes("hoisting"))
    return "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.";

  return "That's a great question! ByteBae will always try to explain coding in a simple, clear way ❤️";
}

function loadSampleQuestions() {
  const row = document.querySelector("#suggestions .row");
  sampleQuestions.forEach((q) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `<button class="btn btn-outline-light w-100" onclick="simulateQuestion('${q}')">${q}</button>`;
    row.appendChild(col);
  });
}

function simulateQuestion(text) {
  document.getElementById("userInput").value = text;
  handleUserInput();
}

window.onload = loadSampleQuestions;
