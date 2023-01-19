/*
created a server
HMR- HOT MODULE Replacement
file watcher algorithm -c++
parcel minify
parcel bundling
parcel cleaning our  code
dev and production build
super fast build algorithm
image  optimization
caching while development
compression
compatible with older version of browser
https on dev
it manaege port number
constient hashing algorithm
tranitive dependencie

tree shaking -removing unwanted code

webpack also does all the above thing
all the bundlers does above all 
but the do it in different manners
*/

/*

import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
      key : "h2",

    },
    "h22"
    );
    *   React.createElement => objects=>HTML(DOM)

    
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        key : "h1",
    },
    "h111"
    );
const container = React.createElement(
    "div",
    {
        id: "container",
    },
     [heading,heading2]
    );
*/
//jsx
import React from "react";
import ReactDOM  from "react-dom/client";
/*
const heading = React.createElement(//this is react
    "h1",
    {
      id: "title",
      key : "h2",

    },
    "h22"
    );
    */
   //jsx uses React.createElement babel convert jsx into react=> objects=>HTML(DOM)

   const heading2 = (//yhis is not react this is jsx
   <h1 id="title" key="h2">Namaste React</h1>
   
) 

    //components
    //-functional-new way of writing code-i'll use this most of the time
    //-class-old way of writing code -i'll also cover it-important for both older project and interview
    //Name of components start with capital letter but it is not compulsory n=but it is good practice to make code viewer good
    
    const data = api.getData();
    const HeaderComponents = () =>{
        return <div><h1>namaste</h1><h2>tag</h2></div>;//first valid react functional components
        //above is the writing jsx in one line
    };
     // instead of {heading2}  we can also write direct    <h1 id="title" key="h2">Namaste React</h1>
      //but instead  of variable if it is functional component then used it as <heading /> tag
      //if it function then we can aalso write {heading2()}
      // any piece of js can be written in {}-this either console.log(),1+1 or anything else
      //sanitizes is done by jsx whenever we pass code inside {} it .itsanitizes the code
      
      const HeaderComponents2 = () =>{
        return(

            <div>
                
                {data}  
                
                <h2>namaste</h2>
                <h2>tag</h2>
            </div>
        );
        //above is the writing jsx in multiple line
        //wrapping code is necessary in multiple line of code
    };
    const HeaderComponents3 = () =>(

            <div>
                <h1>namaste</h1>
                <h2>tag</h2>
            </div>
        );// this is also true we can also write our code as headercomponent2
        const HeaderComponents4 = function() {
            return(//this fn is also valid because this is normal function and above all are arrow function
    
                <div>
                    <h1>namaste</h1>
                    <h2>tag</h2>
                </div>
            );
            
        };

    //it is a function which return react or react element or a comosition of react element or component of itself it is normal function or it is normal js function
    

const root = ReactDOM.createRoot(document.getElementById("root"));
 //root.render(container);- this is way to render react element
 root.render(<HeaderComponents2 />);//-this is way to render functional component
 //can call this like (HeaderComponents())