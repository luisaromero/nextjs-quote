import React from 'react';
// import "isomorphic-fetch";

const Home  = ({quotes}) => (
   
<div id="container">
    <h1>Random Quotes From breaking Bad</h1>
    <img src='/breaking-bad.jpg' alt="imagen de breaking bad con walter white y jesse pinkman"/>
{quotes.map(e => (
  <div id="quotes">  
<p>Quote :{e.quote}</p>
<p>Author : {e.author}</p>
</div>
))}
<style>  {
`p , h1{
    color:white;
    }
    
  #quotes{
      width:100%;
      height:100%;
  }  
  
  *{
      background:black;
      width:100%;
      margin:0
  }
  #container{
      display:flex;
      text-align:center;
      flex-direction:column;
  }
  img{
      width:100%;
      height:600px;
  }`
 
} 
   
</style>
</div>
);
Home.getInitialProps = async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quotes = await response.json();
    
    return{quotes};
    
};



export default Home