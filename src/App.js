import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      products: [
        {
          id: "1", //required
          price: "$1",
          priceNumber: 1,
          quantity: 2,
          name: "product", //required
          brandName: "brand", //required
          imageUrl: "favicon.ico", //required
          link: "google.com" //required
        } 
      ]
    }
  }



  render(){
    return (
      <div className="App">
        <button onClick={()=>{window.ematics("log","product","browse",this.state.products)}}>Product Browse</button><br/>
        <button onClick={()=>{window.ematics("log","product","cart",this.state.products)}}>Add to Cart</button>
      </div>
    );
  }
}

export default App;
