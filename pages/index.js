import React from 'react';
import "isomorphic-fetch";
import Head from 'next/head';

const Home  = ({quotes}) => (
   
<main>
    <Head>
        <title>Breaking bad random quote</title>
        <meta name="description" content="principal page"/>
    </Head>
    <h1>Random Quotes From Breaking Bad</h1>
    <img src='/breaking-bad.jpg' alt="breaking bad image with walter white and jesse pinkman"/>
{quotes.map(e => (
  <div className="quotes" key={e.author}>  
  
<p >Quote : {e.quote}</p>
<p >Author : {e.author}</p>
</div>
))}
<style global jsx>  {
`p {
    font-size:22px;
    color:white;
    text-transform: uppercase;
    padding:3%;
    }
    h1{
        padding-top:0.5%;
        padding-bottom:0.5%;
        color:white;
    }
  .quotes{
      width:700px;
      heigth:100%;
      position:absolute;
      background:rgba(255,255,255,.2);
      opacity:0.9;
      top:60vh;
      left:50vh;
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
     
    
  }
  img{
      width:100%;
      height:600px;      
      
  }`
 
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