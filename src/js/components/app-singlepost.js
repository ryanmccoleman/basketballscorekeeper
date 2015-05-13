var React = require("react");
var AppActions = require('../actions/app-actions');
var UtilityMixin = require('../mixins/utilitymixin');

var SinglePost = React.createClass({
	mixins:[UtilityMixin()],
	render: function() {
		var gametime = this.getFormattedTime(this.props.timems);
		return (
			<div>
				<h1>Time: {gametime}; Quarter: {this.props.quarter}; Home: {this.props.home}; Visitor: {this.props.visitor}</h1>
				<span>{this.props.msg}</span>
			</div>
		)
	}
});

module.exports = SinglePost;