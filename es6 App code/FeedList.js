import React, { Component } from 'react';
import FeedItem from './FeedItem.js';

class FeedList extends React.Component{

    render(){
		console.log(this.props.items);
		  var feedItems = this.props.items.map(function (item) {
			  console.log(item);
            return <FeedItem keyx={item.key}
                             title={item.title}
                             description={item.description}
                             voteCount={item.voteCount}
                             onVote={this.props.onVote} />
				}.bind(this));
				
		
		 return (
            <ul className="list-group container">
                {feedItems}
            </ul>
        )
	}
}

export default FeedList;