var React = require("react");
var GameStore = require('../stores/game-store');
var AppActions = require('../actions/app-actions');
var UtilityMixin = require('../mixins/utilitymixin');

function _getTeam(team_id) {
	return GameStore.getTeam(team_id);
}
var GameTimer = React.createClass({
	mixins:[UtilityMixin()],
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
		var timedisplay = this.getFormattedTime(this.props.gametimems);
		return (
			<div>
			<span>{timedisplay}</span>
			<button onClick={this.toggleClockRunner}>Start/Stop</button>
			</div>
		)
	},
});

module.exports = GameTimer;