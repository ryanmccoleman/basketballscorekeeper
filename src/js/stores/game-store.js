var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var _game_id = 1;
var _quarter = 1;
var _secondsremaining = 720;

function _addTeamPoints(team_id, points) {
	_teamList[team_id].team_points += points;
}

var _teamList = {};
_teamList[1] = {
	team_id: 1,
	isHome: true,
	name: "Home Team",
	team_points: 0
};

_teamList[2] = {
	team_id: 2,
	isHome: true,
	name: "Visitor Team",
	team_points: 0
};
	

var GameStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function() {
		this.removeListener(CHANGE_EVENT, callback);
	},
	getTeam: function(team_id) {
		return _teamList[team_id];
	}
});

GameStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.ADD_TEAM_SCORE:
			_addTeamPoints(action.teamid, action.addnumb);
			break;
	}
	GameStore.emitChange();
	return true;
});
module.exports = GameStore;