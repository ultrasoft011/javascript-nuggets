// Array of objetcs
const frameworks = [
    {
        id: 1,
        name: "Vue",
        creator: "Evan You",
        last_update: 3.011        
    },
    {
        id: 2,
        name: "Angular",
        creator: "Miško Hevery",
        last_update: 12.0
    },
    {
        id: 3,
        name: "React",
        creator: "Jordan Walke",
        last_update: 17.2
    }
]
// Map function to iterate over the array of objects, map: declare a function passing an argument.
const frontEndFrameworks = frameworks.map((elements) => {
    return elements.name
});
console.log(frontEndFrameworks);

// Function to perfom something with the array.
const getCreator = (element) => {
    return element.creator;
}

// Calling the getCreator function and using map
const frontEndCreators = frameworks.map(getCreator);
console.log(frontEndCreators);


