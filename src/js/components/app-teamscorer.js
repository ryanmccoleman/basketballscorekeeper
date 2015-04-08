var React = require("react");
var GameStore = require('../stores/game-store');
var AddPoints = require('../components/app-addpoints');

var TeamScorer = React.createClass({
	render: function() {
		return (
			<div className="teamBoard">
				<span>Team Name:</span><span>{this.props.team.name}</span>
				<span>Team Points:</span><span>{this.props.team.team_points}</span>
				< AddPoints teamid={this.props.team.team_id} addnumb={1}/>< AddPoints teamid={this.props.team.team_id} addnumb={2}/>< AddPoints teamid={this.props.team.team_id} addnumb={3}/>
			</div>
		)
	}
});

module.exports = TeamScorer;