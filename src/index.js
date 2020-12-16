import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";


import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import client from './apollo';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
