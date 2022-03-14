import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {id: 1, message: 'i learn react', likesCount: 13}
]


let dialogsData = [
    {id: 1, name: 'Olya'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Masha'},
    {id: 4, name: 'Danil'},
    {id: 5, name: 'Tanya'}
]

let messagesData = [
    {id: 1, message: 'r23df3'},
    {id: 2, message: 'r23 23 r2t 45 7 235r3y '},
    {id: 3, message: 'g34g3g24 2 r23r'}

]

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
