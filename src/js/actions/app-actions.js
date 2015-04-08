var AppConstants = require("../constants/app-constants.js");
var AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
  	addTeamScore:function(teamid, addnumb){
	    AppDispatcher.handleViewAction({
	      actionType: AppConstants.ADD_TEAM_SCORE,
	      teamid: teamid,
	      addnumb: addnumb
	    });
	},
  	startClock:function(){
	    AppDispatcher.handleViewAction({
	      actionType: AppConstants.START_CLOCK
	    });
	},
  	stopClock:function(){
	    AppDispatcher.handleViewAction({
	      actionType: AppConstants.STOP_CLOCK
	    });
	}

}

module.exports = AppActions;