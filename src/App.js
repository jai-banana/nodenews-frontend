import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const url = "http://15.206.230.159/";
  var [list, getlist] = useState('');
  var news;
  
 
  axios.get(url)
  .then((res) => {
    news = res.data;
    getlist(news[0].dataType);
  })
  .catch((error) => {
    console.log(error)
  });



  return (
    <div className="App">
      <p>{list}</p>
    </div>
  );
}

export default App;
