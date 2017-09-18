import React, { Component } from 'react';
import Newsource from './components/newsource';
import Newstory from './components/newstory';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor( props ){
    super( props )
    this.state={
        newsarray: [],

    }
}

    makeFetch(term) {
   fetch('https://newsapi.org/v1/articles?source='+term+'&apiKey=a765411699634ca89129ebd29b41e757').then((response) => {
     return response.json()
   }).then((data) => {
     let newstories = data.articles;
     console.log(newstories)
     this.setState({
         newsarray: newstories
     })
   })
 }

  render() {
    return (
      <div className="App">
          <Newsource news={this.state.newsarray} getSource= {text => this.makeFetch(text)}/>
          
      </div>
    );
  }
}

export default App;
