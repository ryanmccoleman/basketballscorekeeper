var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
//var TeamStore = require('../stores/team-store');

var _playerList = [
	{
		team_id: 1,
		name: "Player Name",
		position: "Point Guard",
		secondsplayed: 0,
		player_points: 0
	}
];

function _addPlayer() {

}

function _addPlayerPoints() {

}

// save this for later
// function _addSecondsPlayed() {

// }

var PlayerStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},
	removeChangeListener: function() {
		this.removeListener(CHANGE_EVENT, callback);
	}
});

PlayerStore.dispatchToken = AppDispatcher.register(function(action) {
	switch(action.type) {
		
	}
});
module.exports = PlayerStore;