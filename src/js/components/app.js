var React = require("react");
var TeamScorer = require('../components/app-teamscorer');
var GameTimer = require('../components/app-gametimer');
var GameLog = require('../components/app-gamelog');
var QuarterControl = require('../components/app-quartercontr');
var GameStore = require('../stores/game-store');
var StoreWatchMixin = require('../mixins/storewatchmixin');


function gameData() {
	return GameStore.getGameData();
}
var APP = React.createClass({
	mixins:[StoreWatchMixin(gameData)],
	render: function() {
		var teams = [];
	    for (var key in this.state.teams) {
      		teams.push(<TeamScorer team={this.state.teams[key]}/>);
    	}
		return (
			<div className="container-fluid">
				<div className="row">
					<GameTimer gametimems={this.state.timeinmilsecs}/>
				</div>
				<div className="row">
					{teams}
				</div>
				<div className="row">
					<QuarterControl quarter={this.state.quarter} />
				</div>
				<GameLog postlist={this.state.postlist}/>
			</div>);
	}
});

module.exports = APP;