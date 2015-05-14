var React = require("react");
var GameStore = require('../stores/game-store');
var AppActions = require('../actions/app-actions');

var AddPoints = React.createClass({
	handleClick: function() {
		AppActions.addTeamScore(this.props.teamid, this.props.addnumb);
	},
	render: function() {
		var text = "+ "+this.props.addnumb;
		return (
			<button className="btn btn-default" onClick={this.handleClick}>{text}</button>
		)
	}
});

module.exports = AddPoints;