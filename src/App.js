import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);



// React.createElement => object => HTMLElement(render) 
// React.createElement => object => ReactDOM(render) => HTMLElement

/*const heading = React.createElement(
  "h1", 
  {id: "heading"}, 
  "Namaste React"
);

console.log(heading);

//JSX - HTML like or XML - like syntex
//JSX (transpiled before it reaches JS) - PARCEL - Babel
//JSX => Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)

// React Element
const jsxheading = (
  <h1 id="root" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const fn = () => true;

const fn2 = () => {
  return true;
};

const elem = <span>React Element</span>

const Title = () => {
  return <h1 className="head">
    {elem }
    Namaste React Using JSX
  </h1>
};

const number = 100;

//React Functional Component
//Component Composition
const HeadingComponent = () => {
  return <div id="container">
    <Title />
    <h2>{number}</h2>
    {Title()}
    <h1 className="heading">Namaste React Functional Component</h1>
    <Title></Title>
  </div>
};

//const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;

/*const HeadingComponent3 = () => (
  <h1 className="heading">Namaste React Functional Component</h1>;
);*/


/*const root3 = ReactDOM.createRoot(document.getElementById("root"));

root3.render(<HeadingComponent />);

console.log(jsxheading);
*/



/*
/*
<div id: "parent">
  <div id: "child">
    <h1>I am h1 tag</h1>
    <h2>I am h1 tag</h2>
  </div>
  <div id: "child2">
    <h1>I am h1 tag</h1>
    <h2>I am h1 tag</h2>
  </div>
</div>
*/
/** ReactElement(object) => HTML(Browser Understands)
*/

/*

<script>
      const heading1 = document.createElement("h1");
      heading1.innerHTML = "Hello World from Javascript";

      const root1 = document.getElementById("root1");
      root1.appendChild(heading1);
</script>
*/

/*const parent = React.createElement(
  "div", 
  {id: "parent"}, [
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);


const heading2 = React.createElement(
        "h1", 
        {id: "heading", xyz: "abc"}, 
        "Hello world from React"
);

//JSX

console.log(parent); //object

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(parent);*/

