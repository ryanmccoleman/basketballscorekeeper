var React = require("react");
var GameStore = require('../stores/game-store');
var AddPoints = require('../components/app-addpoints');

function _getTeam(team_id) {
	return GameStore.getTeam(team_id);
}
var TeamScorer = React.createClass({
	getInitialState: function() {
		return _getTeam(this.props.teamid);
	},
    componentWillMount:function(){
      GameStore.addChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(_getTeam(this.props.teamid))
    },
	render: function() {
		return (
			<div className="teamBoard">
				<span>Team Name:</span><span>{this.state.name}</span>
				<span>Team Name:</span><span>{this.state.team_points}</span>
				< AddPoints teamid={this.state.team_id} addnumb={1}/>< AddPoints teamid={this.state.team_id} addnumb={2}/>< AddPoints teamid={this.state.team_id} addnumb={3}/>
			</div>
		)
	}
});

module.exports = TeamScorer;