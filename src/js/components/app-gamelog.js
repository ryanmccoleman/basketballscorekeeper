var React = require("react");
var AppActions = require('../actions/app-actions');
var SinglePost = require('../components/app-singlepost');

var GameLog = React.createClass({
    getInitialState:function(){
      return {
      	value: "",
      };
    },
	render: function() {
		var posts = [];
	    for (var key in this.props.postlist) {
      		posts.push(<SinglePost home={this.props.postlist[key].homescore} visitor={this.props.postlist[key].visitorscore}
      					timems={this.props.postlist[key].timems} quarter={this.props.postlist[key].quarter} msg={this.props.postlist[key].msg}/>);
    	}
		return (
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">Game Analysis</div>
					<div className="panel-body">
						<textarea value={this.state.value} onChange={this._onChange} ></textarea><br /><br /><button className="btn btn-primary" onClick={this.save}>Submit</button>
					</div>
				</div>
				
				<h2>Live Game Blog</h2>
				{posts}
			</div>
		)
	},
  	save: function() {
	    AppActions.addPost(this.state.value);
	    this.setState({
	      value: ''
	    });
	},
    _onChange: function(event) {
	    this.setState({
	      value: event.target.value
	    });
	}

});

module.exports = GameLog;