console.log('bobbyhadz.com');

// ✅ Get the first element with data-id = `box1`
const el1 = document.querySelector('[data-id="box1"]');
console.log(el1); // 👉️ div

// ---------------------------------------------------

// ✅ Get the first element that has data-id attribute set
const el2 = document.querySelector('[data-id]');
console.log(el2); // 👉️ div

// ---------------------------------------------------

// ✅ Get all elements with data-id = `box1`
const elements = document.querySelectorAll('[data-id="box1"]');
console.log(elements); // 👉️ [div]
