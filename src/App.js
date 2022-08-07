import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Emoji from './emoji.svg'

const App = () => {
  const paragraph = document.querySelector('.text')
  const [joke, setJoke] = useState("")

  const getJoke = () => {
    setTimeout(() => {
      fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(response => response.json())
    .then(data => {
      
      setJoke(`${data.joke}`);
      paragraph.classList.remove('text-out') 
      
    })
    }, 1000)
    
    
  }

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then(response => response.json())
    .then(data => {
      
      setJoke(`${data.joke}`);
      paragraph.classList.remove('text-out') 

    })
  }, []);

  return (
    <div className="main">
      <div className="container">
        <img src={Emoji} alt="" className="emoji"/>
        <p className='text'>{joke}</p>
        <button onClick={() => {
          paragraph.classList.add('text-out') 
          getJoke()
          
          }} className="button">Get Joke</button>
      </div>
      
    </div>
  );
}

export default App;

