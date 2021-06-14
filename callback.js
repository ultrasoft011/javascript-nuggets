// Callbacks
// A callback function is a function passed as an argument to another function
// 1. Function makeUpperCase function

function makeUpperCase(element) {
  console.log(element.toUpperCase());
}

// 2. Function handle name, 'cb' stands for callback

function handleName(name, cb) {
  const fullName = `${name} Ballesteros`;
  // The callback function is invoke inside the handle functionz
  cb(fullName);
}

// 3. Invoke the function with parameters, the second parameter (makeUpperCase) dont need "()" because if I invoke the function that will be a reference and not passed like a callback function.

handleName('Andres', makeUpperCase);

// Option B: The callback function can be pass directly but not invoked

handleName('Felipe', function(value) {
    console.log(value);
})

// Option B.1 Using arrow functions

handleName('aka Ultra', (value) => {console.log(value)})

// The callback functions are use in arrays methods (map, filter, find, reduce) , setTimeOut, Event Listeners
// Event listener example: the function inside the addEventListener function is a callback function

    const example = document.querySelector('.btn');

    example.addEventListener('click', function() {
        console.log('Hello Ultra!');
    })


// Javascript: Callback Hell

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    // This is the callback hell: is a phenomenon that afflicts a JavaScript executing multiple asynchronous operations one after the other. Not recommended.
    setTimeout(() => {
        first.style.color = 'yellow';
        setTimeout(() => {
            second.style.color = 'blue';
            setTimeout(() => {
                third.style.color = 'red';
            }, 4000);
        }, 3000)
    }, 2000);
});
