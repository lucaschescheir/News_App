import React, { Component } from 'react';

class Newstory extends Component {

    render(){
        return (
            <ul className="article">
                <li><h1><a href={this.props.newsArticle.url}> {this.props.newsArticle.title} </a> </h1></li>
                <li> <h4>By: { this.props.newsArticle.author }</h4> </li>
                <li> <h3>{this.props.newsArticle.description}</h3></li>
                <li> </li>
                <img src={this.props.newsArticle.urlToImage} height='420' width='800' alt=" from article" />
            </ul>
        )
    }
}

export default Newstory;
