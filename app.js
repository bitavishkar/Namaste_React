 import React from "react";
 import  ReactDOM from "react-dom";

 //  const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h2",{},"i am a silbllbing ")   ,React.createElement("h1",{},"I am an H1 tag")]));

const grandpa = React.createElement("div",{class:"grandpa"},[React.createElement("div",{class:parent},[React.createElement("h1",{class:"child1"},"Hello this is the first child"),React.createElement("h1",{class:"child2"},"Hello this is the second child"),React.createElement("h1",{class:"child3"},"Hello this is the first child")]),React.createElement("div",{class:"parent"},React.createElement("h2",{class:"child4"},"LMAO BAS KAR"))]);


 //JSX 

 /*

 


 */

 
//  const heading = React.createElement("h1",{id:"heading"}," NO");
 const root = ReactDOM.createRoot(document.getElementById('root'));

 console.log(grandpa); //object 

 root.render(grandpa)
