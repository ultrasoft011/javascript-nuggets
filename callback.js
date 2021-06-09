// Callbacks
// A callback function is a function passed as an argument to another function
// 1. Function makeUpperCase function

function makeUpperCase(element) {
  console.log(element.toUpperCase());
}

// 2. Function handle name, 'cb' stands for callback

function handleName(name, cb) {
  const fullName = `${name} Ballesteros`;
  // The callback function is invoke inside the handle function
  cb(fullName);
}

// 3. Invoke the function with parameters, the second parameter (makeUpperCase) dont need "()" because if I invoke the function that will be a reference and not passed like a callback function.

handleName('Andres', makeUpperCase);