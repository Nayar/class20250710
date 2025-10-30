import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogArticle from './BlogArticle';
import Header from './Header';
import Footer from './Footer';

// GET /api/blogarticles/
let articles = [
  {
    "id" : 1,
    "title": "How to create your react component from API",
    "author" : "Nayar",
    "date" : "2025-10-09"
  },
  {
    "id" : 2,
    "title": "Passing parameters to components from API",
    "author" : "Abraham",
    "date" : "2025-10-09"
  },
  {
    "id" : 3,
    "title": "We learn about function vs class components from API",
    "author" : "Nayar",
    "date" : "2025-10-09"
  },
  {
    "id" : 4,
    "title": "Map Filter Reduce",
    "author" : "Nayar",
    "date" : "2025-10-09"
  }
]

const root = ReactDOM.createRoot(document.getElementById('myfavdiv'));
root.render(
  <React.StrictMode>
    <Header/>
    {
      articles.map(function(singlearticle) {
        return ( <BlogArticle key={singlearticle.id} article={singlearticle}></BlogArticle> )
      })
    }

    <Footer author="Nayar" year="2025"/>
    <Footer author="Abraham" year="2020"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
