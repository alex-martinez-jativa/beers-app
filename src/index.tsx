import * as React from 'react';
import * as ReactDOM from "react-dom";
import BeerProvider from './context/context';
import App from './App';
import "./styles.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<BeerProvider><App /></BeerProvider>, mountNode);