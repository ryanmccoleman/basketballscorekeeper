var React = require("react");
var GameStore = require('../stores/game-store');
var AddPoints = require('../components/app-addpoints');

var TeamScorer = React.createClass({
	render: function() {
		return (
			<div className="teamBoard col-md-3 col-md-offset-2">
				<div className="panel panel-default">
					<div className="panel-heading">{this.props.team.name}:</div>
					<div className="panel-body">
						<span className="main-numbers">{this.props.team.team_points}</span><br /><br />
						<div className="btn-group">< AddPoints teamid={this.props.team.team_id} addnumb={1}/>< AddPoints teamid={this.props.team.team_id} addnumb={2}/>< AddPoints teamid={this.props.team.team_id} addnumb={3}/></div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = TeamScorer;