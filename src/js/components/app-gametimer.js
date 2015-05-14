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
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default">
					<div className="panel-heading">Game Time</div>
					<div className="panel-body">
						<span className="main-numbers">{timedisplay}</span><br /><br />
						<button className="btn btn-primary" onClick={this.toggleClockRunner}>Start/Stop</button>
					</div>
				</div>
			</div>
		)
	},
});

module.exports = GameTimer;