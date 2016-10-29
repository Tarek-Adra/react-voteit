import React, { Component } from 'react';

class ShowAddButton extends React.Component{

    render(){

        var classString = '';
        var buttonText = '';

        if (this.props.displayed) {
            classString = 'btn btn-default btn-block';
            buttonText = 'Cancel';
        } else {
            classString = 'btn btn-success btn-block';
            buttonText = 'Create New Item';
        }

        return (
            <button
                className={classString}
                onClick={this.props.onToggleForm}>
                {buttonText}
            </button>
        );
    }
}

export default ShowAddButton;
