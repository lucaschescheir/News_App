import React, { Component } from 'react';
import Newstory from './newstory';

class Newsource extends Component {
constructor(prop){
    super()
    this.state={
        value: 'buzzfeed'
    }
}
handleSelect(event){
    this.setState({
        value: event.target.value
    })
}
handleSource(event){
    this.props.getSource(this.state.value)
    console.log(this.state.value)
}
render(){

    const newsource= this.props.news
let newsArticle= newsource.map((newsArticle) => {
return (
<Newstory newsArticle={newsArticle} />
    )
    })
    return (
        <div>
            <label>Pick your news Source:</label>
            <select value={this.state.value} onChange={event => this.handleSelect(event)}>
                <option value="espn">espn</option>
                <option value="bbc-sport">bbc-sport</option>
                <option value="buzzfeed">buzzfeed</option>
                <option value="abc-news-au">abc-news-au</option>
            </select>
            <button onClick={event => this.handleSource(event)}>Go</button>
            <div className="articles">
                {newsArticle}
            </div>
        </div>
    )
}
}
export default Newsource;
