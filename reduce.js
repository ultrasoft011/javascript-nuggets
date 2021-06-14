// Reduce 
// iterates, callback function
// reduces to a single value - number, array or object
// 1st parameter: 'acc' total of calculations
// 2nd parameter: 'curr' current iteration - value

const staff = [
    {name: 'junior', category: 1, salary: 4000000},
    {name: 'junior adv', category: 2, salary: 5350000},
    {name: 'senior', category: 3, salary: 7000000}
];

// Declare a new variable

const devSalary = staff.reduce((total, item) => {
    total += item.salary;
    // Important: always return a total or return whatever it's the name of the first parameter
    return total
},0) /* Important: the second argument it will be the start of the iteration */

console.log(devSalary);
