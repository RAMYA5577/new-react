// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading"},"Hey RAMS...!");
// console.log(heading);  //object
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  //this render method basically converting the object into html tag and put it into root tag
  //render---> replace the html

/*
*<div id="parent">
*   <div id="child">
*       <h1></h1>
*   </div>
*</div>
*
*/

// const parent=React.createElement(
//     "div",{id:"parent"},
//     React.createElement("div",{id:"child"},
//       React.createElement("h1",{},"I'm an h1 tag"))
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


/*
*<div id="parent">
*   <div id="child">
*       <h1></h1>
*       <h1></h1>
*   </div>
*</div>
*
*/

// const parent=React.createElement(
//     "div",{id:"parent"},
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"I'm an h1 tag 1"),
//       React.createElement("h1",{},"I'm an h1 tag 2")])
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


/*
*<div id="parent">
*   <div id="child1">
*       <h1></h1>
*       <h1></h1>
*   </div>
*
*    <div id="child2">
*        <h1></h1>
*        <h1></h1>
*    </div>
*</div>
*
*/

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm an h1 tag 1"),
        React.createElement("h1",{},"I'm an h1 tag 2")]),

     React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm an h1 tag 1"),
        React.createElement("h1",{},"I'm an h1 tag 2")
    ])
]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



