import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./app/App";
import {ChakraProvider} from "@chakra-ui/react";
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <Header />
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
