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

