import React from 'react';
import "isomorphic-fetch";
import Head from 'next/head';

const Home  = ({quotes}) => (
   
<main>
    <Head>
        <title>Breaking bad random quote</title>
        <meta name="description" content="principal page"/>
    </Head>
    <h1>Random Quote From Breaking Bad</h1>
    <img src='/breaking-bad.jpg' alt="breaking bad image with walter white and jesse pinkman"/>
{quotes.map(e => (
  <div className="quotes" key={e.author}>  
  
<p >Quote : {e.quote}</p>
<p >Author : {e.author}</p>
</div>
))}
<style global jsx>  {
`p {
    font-size:20px;
    color:white;
    text-transform: uppercase;
    padding:3%;
    }
    h1{
        padding:1%;
        color:white;
    }
  .quotes{
     width:60%;
      heigth:70%;
      position:absolute;
      background:rgba(255,255,255,.2);
      opacity:0.8;
      text-align:justify;
      color:white;
      
  }
  
  body{
      width:100%;
      margin: 0 auto;
      padding:0 auto;
  }
  main{
      display:flex;
      text-align:center;
      flex-direction:column;
      postion:relative;
      background:black;
      width:100%;
      heigth:100%;
      justify-content:center;
      align-items:center;
     
    
  }
  img{
      width:100%;
      height:100vh;    
  }
  
  `
 
} 
   
</style>
</main>
);
Home.getInitialProps = async () => {
    const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const quotes = await response.json();
    
    return{quotes};
    
};



export default Home