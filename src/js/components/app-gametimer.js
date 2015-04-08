var React = require("react");
var GameStore = require('../stores/game-store');
var AppActions = require('../actions/app-actions');

function _getTeam(team_id) {
	return GameStore.getTeam(team_id);
}
var GameTimer = React.createClass({
    getInitialState:function(){
      return {
      	running: false,
      };
    },
    toggleClockRunner: function() {
    	if(this.props.gametimems > 0) {
	    	if(this.state.running) {
	    		AppActions.stopClock();
	    		this.setState({running: false});
	    	}else {
	    		AppActions.startClock();
	    		this.setState({running: true});
	    	}
    	}
    },
	render: function() {
		var timedisplay = this.getFormattedTime();
		return (
			<div>
			<span>{timedisplay}</span>
			<button onClick={this.toggleClockRunner}>Start/Stop</button>
			</div>
		)
	},
	getFormattedTime: function() {
		var seconds = Math.round(this.props.gametimems % 60000);
		var minutes = Math.floor(this.props.gametimems / 60000);
		if(seconds < 10) {
			seconds = "0"+seconds;
		}
		return minutes+" : "+seconds;
	}
});

module.exports = GameTimer;