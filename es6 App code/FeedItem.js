import React, { Component } from 'react';

class FeedItem extends React.Component{

    constructor(props) {
        super(props);

        this.vote = this.vote.bind(this);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
    }

	vote(newCount){
        this.props.onVote({
            key: this.props.keyx,
            title: this.props.title,
            description: this.props.description,
            voteCount: newCount
        })
    }
    voteUp(){
        var count = parseInt(this.props.voteCount, 10);
        var newCount = count + 1;
        this.vote(newCount);
    }
    voteDown() {
        var count = parseInt(this.props.voteCount, 10);
        var newCount = count - 1;
        this.vote(newCount);
    }
   
    render(){
		
		 var badgeClassName = this.props.voteCount < 0 ? 'badge badge-danger' : 'badge badge-success';
        return (
            <li key={this.props.keyx} className="list-group-item">
                <span className={badgeClassName}>{this.props.voteCount}</span>
                <h4>{this.props.title} </h4>
                <span>{this.props.description}</span>
                <span className="pull-right">
                <button id="up" className="btn-up btn btn-sm btn-success" onClick={this.voteUp}>&uarr;</button>
                <button id="down" className="btn-down btn btn-sm btn-danger" onClick={this.voteDown}>&darr;</button>
                </span>
            </li>
        )
	}
}

export default FeedItem;
