var React = require("react");
var AppActions = require('../actions/app-actions');

function gameData() {
	return GameStore.getGameData();
}
var QuarterControl = React.createClass({
    getInitialState:function(){
		var ischecked = {
			1: false,
			2: false,
			3: false,
			4: false,
		};
		ischecked[this.props.quarter] = true;
		return {
			defIsChecked: ischecked
		};
    },
	render: function() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<div className="panel panel-default">
					<div className="panel-heading">Quarter:</div>
					<div className="panel-body">
						<form>
							<input type="radio" onChange={this._onChange} name="quarter" value="1" defaultChecked={this.state.defIsChecked[1]} />1
							<input type="radio" onChange={this._onChange} name="quarter" value="2" defaultChecked={this.state.defIsChecked[2]} />2
							<input type="radio" onChange={this._onChange} name="quarter" value="3" defaultChecked={this.state.defIsChecked[3]} />3
							<input type="radio" onChange={this._onChange} name="quarter" value="4" defaultChecked={this.state.defIsChecked[4]} />4
						</form>
					</div>
				</div>
			</div>);
	},
	_onChange: function(event) {
		AppActions.changeQuarter(Number(event.target.value));
	}
});

module.exports = QuarterControl;