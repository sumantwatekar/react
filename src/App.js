import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components.js/Header";
import Footer from "./components.js/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <div
      	style={{
      		display: "flex",
      		height: "-webkit-fill-available",
      		flexDirection: "row",
      	}}
      	>
      	</div>
    	<Footer />
    </div>
  );
}

export default App;
