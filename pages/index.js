import React from 'react';
// import "isomorphic-fetch";

const Home  = ({quotes}) => (
   
<div id="container">
    <h1>Random Quotes From breaking Bad</h1>
    <img src='/breaking-bad.jpg' alt="imagen de breaking bad con walter white y jesse pinkman"/>
{quotes.map(e => (
  <div className="quotes">  
<p>Quote : {e.quote}</p>
<p>Author : {e.author}</p>
</div>
))}
<style>  {
`p {
    font-size:22px;
    color:white;
    text-transform: uppercase;
    padding:3%;
    }
    h1{
        padding-top:2%;
        padding-bottom:2%;
        color:white;
    }
  .quotes{
      width:700px;
      heigth:100%;
      position:absolute;
      opacity:0.7;
      background:rgba(255,255,255,.2);
      top:70vh;
      left:50vh;
      text-align:justify;
      
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
      postion:relative;
     
    
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