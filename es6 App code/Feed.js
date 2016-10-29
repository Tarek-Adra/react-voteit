import React, { Component } from 'react';
import ShowAddButton from './ShowAddButton.js';
import FeedForm from './FeedForm.js';
import FeedList from './FeedList.js';
import _ from 'lodash';
import Firebase  from 'firebase';

var config = {
    apiKey: "AIzaSyBYL_4Uw_ZBFBeBSYzgaeRkq1d5L0Pp4Jg",
    authDomain: "cool-ideas.firebaseapp.com",
    databaseURL: "https://cool-ideas.firebaseio.com",
    storageBucket: "cool-ideas.appspot.com",
    messagingSenderId: "516219147724"
};
var appFirebase = Firebase.initializeApp(config);

class Feed extends React.Component{
    constructor(props) {
        super(props);
        this.onNewItem = this.onNewItem.bind(this);
        this.onVote = this.onVote.bind(this);
        this.loadData = this.loadData.bind(this);


        this.state = {
			items: [],
            formDisplayed: true
        };
    }


        loadData(){
        var ref = Firebase.database().ref('feed');
        ref.on('value', function (snapshot) {
           var DataFirebase = snapshot.val();
            var items = [];
            var sorted = [];

            Object.keys(DataFirebase).forEach(function (k) {
                var item = DataFirebase[k];
                console.log(DataFirebase[k]);
                item.key = k;
                items.push(item);
            });

            sorted = _.sortBy(items, function (item) {
                return -item.voteCount;
            });

            this.setState({
                items: sorted
            });
        }.bind(this));
    }

    componentDidMount() {
            this.loadData();
        }

    onToggleForm() {
        this.setState({
            items:this.state.items,
            formDisplayed: !this.state.formDisplayed
        });
    }

    onNewItem(newItem) {
        Firebase.database().ref('feed').push(newItem);
    }

    onVote(item) {
        var ref =  Firebase.database().ref('feed').child(item.key);
        ref.update(item);
    }

    render(){
        return (
            <div>
                <div className="container">
                   <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm.bind(this)} />
                </div>

                <FeedForm  displayed={this.state.formDisplayed}   onNewItem={this.onNewItem}  />
                <br/>
                <br/>

			   <FeedList items={this.state.items}  onVote={this.onVote} />
            </div>
        );
    }
}

export default Feed;
