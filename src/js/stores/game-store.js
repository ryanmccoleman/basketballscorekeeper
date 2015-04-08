var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = "change";

var _game_id = 1;
var _quarter = 1;
var _timeinmilsecs = 720000;
var _timerisrunning = false;

var _timer;

function _addTeamPoints(team_id, points) {
	_teamList[team_id].team_points += points;
}

function _startClock() {
	if(_timerisrunning) {
		_timer = setTimeout(function() {
			if(_timeinmilsecs > 0) {
				_decreaseTime(10);
				_stopClock();
				_startClock();
			} else {
				_stopClock();
			}
		}, 10);		
	}

}

function _decreaseTime(amt) {
	_timeinmilsecs -= amt;
	GameStore.emitChange();
}

function _stopClock() {
	_timer = clearTimeout();
	_timer = null;
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
	},
	getGameData: function() {
		return {
			teams: _teamList,
			quarter: _quarter,
			timeinmilsecs: _timeinmilsecs
		};
	}
	
});

GameStore.dispatchToken = AppDispatcher.register(function(payload) {
	var action = payload.action;
	switch(action.actionType) {
		case AppConstants.ADD_TEAM_SCORE:
			_addTeamPoints(action.teamid, action.addnumb);
			break;
		case AppConstants.START_CLOCK:
			_timerisrunning = true;
			_startClock();
			break;
		case AppConstants.STOP_CLOCK:
			_timerisrunning = false;
			_stopClock();
			break;
	}
	GameStore.emitChange();
	return true;
});
module.exports = GameStore;