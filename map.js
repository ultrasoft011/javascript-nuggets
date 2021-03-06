// map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)
//
// Array of objetcs
const frameworks = [
  {
    id: 1,
    name: "Vue",
    creator: "Evan You",
    last_update: 3.011,
  },
  {
    id: 2,
    name: "Angular",
    creator: "Miško Hevery",
    last_update: 12.0,
  },
  {
    id: 3,
    name: "React",
    creator: "Jordan Walke",
    last_update: 17.2,
  },
];
// Map function to iterate over the array of objects, map: declare a function passing an argument.
const frontEndFrameworks = frameworks.map((elements) => {
  return elements.name;
});
console.log(frontEndFrameworks);

// Function to perfom something with the array.
const getCreator = (element) => {
  return element.creator;
};

// Calling the getCreator function and use map
const frontEndCreators = frameworks.map(getCreator);

console.log(frontEndCreators);

// Function to get the last update of each object.
const getLastUpdate = (element) => element.last_update;

// Calling the getLastUpdate function and use map to iterate
const frontEndUpdates = frameworks.map(getLastUpdate);

console.log(frontEndUpdates);

// Create a new array with Map
const newFrameworks = frameworks.map((item) => {
  return {
    firstName: item.name.toLocaleLowerCase(),
    oldLastUpdate: item.last_update,
  };
});

console.log(newFrameworks);

// Render the frameworks on HTML
const renderFrameworks = frameworks.map((element) => {
  return `<h2>${element.name}</h2>`;
});

const result = document.getElementById("render");
result.innerHTML = renderFrameworks.join("");
