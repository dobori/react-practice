var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var WhatToSee = createReactClass({

    render:function(){
        return(
            <h1>yeeeee</h1>
        );
    } 

});

ReactDOM.render(<WhatToSee />, document.getElementById('show_stuffs'));