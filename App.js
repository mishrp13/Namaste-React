import React from "react"
import ReactDOM from "react-dom/client"


//React.createElement=>object=>HTMLelement(render);

/*
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React 🚀"
);

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/
//jsx -HTML-like or XML-like syntax
//jsx(transpiled before it reaches the javascript engine)---transpiling is done by parcel and then parcel give this to babel and babel 
//does the transpiling and it means compiles the code that react can understand
//jsx =>React.createElement=>ReactElement-JS object=> HTMLeLement(render)
//React Element
/*
const jsxHeading=<h1 id="heading">Namaste React using jsx 🚀</h1>
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)
*/


//React component
//class based component-old
//functional based component-new

//React functional component
/*
const HeadingComponent=()=>{
    
    return <h1 className="Heading">Namaste React functional component</h1>;
   
}
*/

//in other way we can also write functional component but here no need to return
/*
const HeadingComponent2=()=>(
    <div id="container">
    <h1 className="Heading">Namaste React functional component</h1>
    </div>
)

//for rendering the component function
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>)

*/

//if we have to render one component into other component

const Title=()=>(
<h1 className="head"> Namaste React using JsX 🚀</h1>
)

//component composition
//function component is a normal javascript function which returns some peice of react elemt or some peice of jsx code 
//writing javascript inside of jsx is very bigh thing we can do that
//calling as a javascript function
const HeadingComponent=()=>(
    <div id="container">
        <Title/>
        {Title()}
        <Title></Title>
        <h2>{200+200}</h2>
    <h1 className="Raj">Namsaste React from Prabal 👍</h1>
    </div>
)
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)


