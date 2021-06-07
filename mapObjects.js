const data = {
    id: "root",
    children: [
      {
        id: "first child",
        children: [
          {
            id: "first grandchild",
            children: [{ id: "first great-grandchild" }]
          },
          { id: "second grandchild" }
        ]
      },
      { id: "second child" }
    ]
};

/* Display this in the console
   first child
     first grandchild
       first great-grandchild
     second grandchild
   second child
*/

const getChilds = (data) => {
    const firstChild = data.id;
    return firstChild;
}

const getFirstGrandChild = (data) => {
    const firstGrandChild = data.children[0].id;
    return firstGrandChild;
}

const getFirstGreatGrandChild = (data) => {
    const firstGreatGrandChild = data.children[0].children[0].id;
    return firstGreatGrandChild;
}

console.log(getChilds(data));
console.log(getFirstGrandChild(data));
console.log(getFirstGreatGrandChild(data));
