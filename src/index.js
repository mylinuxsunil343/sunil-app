import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myfunc from './myfunc.js';

function Details() {
  const det = {color: "red", name: "Marella"};
  return (
    <>
    <p>This is 2nd function</p>
    <Alerting />
    <Myfunc propert={ det } />
    <Garage />
    <Locations />
    </>
  )
}
function Alerting() {
  const shoot = () => {
    alert("Great");
  }
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
// --------------------------------
function Garage() {
  const cars = ['Ford', 'TATA']
  return(
    <>
    <p>Who lives in garage</p>
    <ul>
      {cars.map((car) => <Car brand={ car } />)}
    </ul>
    </>
  );
  function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
}
//--------------------------------------
function Locations() {
  const city = [
    {id: 1, naam: 'Vijayawada'},
    {id: 2, naam: 'blr'}
  ];
  return(
    <>
    <h1>My location</h1>
    <ul>
      {city.map((location) => <Location key={location.id} naam={location.naam}/>)}
    </ul>
    </>
  );
}
function Location(props2) {
  return <li>I located in { props2.Location }</li>
}
const root = ReactDOM.createRoot(document.getElementById('my_root'));
root.render(<Details />);
/* const myElement = <h1>I Love JSX! This is how I use expressions  {5 + 5}</h1>;

const myElement = (
  <div>
  <p>I am a paragraph.</p>
  <p>I am a paragraph too.</p>
</div>

);

const root = ReactDOM.createRoot(document.getElementById('my_root'));
root.render(myElement);
*/
/*


1. React Render HTML
-----------------------------------------
The createRoot Function: The createRoot() function takes one argument, an HTML element. The purpose of the function is to define the HTML element where a React component should be displayed.

The render Method: The render() method is then called to define the React component that should be rendered.
But render where?

There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file. You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
-----------------------------------------
const myFirstElement = <h1>Hello Sunil M!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);
------
const container1 = document.getElementById('my_root');
const root = ReactDOM.createRoot(container1);
// root.render(<h1>Hello Suni</h1>);

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
root.render(myelement);

*/

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
