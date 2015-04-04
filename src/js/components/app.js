var React = require("react");
var TeamScorer = require('../components/app-teamscorer');

var APP = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Basketball Score App</h1>
				<TeamScorer teamid={1} />
				<TeamScorer teamid={2} />
			</div>);
	}
});

module.exports = APP;