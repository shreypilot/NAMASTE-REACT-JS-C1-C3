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
tranitive dependencies
*/



import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "h22"
    );
const heading2 = React.createElement(
    "h2",
    {
        id: "title",
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);