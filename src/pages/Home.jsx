import React from 'react'

const Home = () => {

  const customKey = process.env.REACT_APP_CUSTOM_KEY;
console.log(customKey); // Outputs the value defined in the .env file
  return (
    <div>Home</div>
  )
}

export default Home