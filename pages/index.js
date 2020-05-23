import React from 'react';
// import "isomorphic-fetch";

const Home  = () =><h1>hello world</h1>;

Home.getInitialProps = async () => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const movies = await response.json();

    console.log(movies.length);

    return{};
};


export default Home