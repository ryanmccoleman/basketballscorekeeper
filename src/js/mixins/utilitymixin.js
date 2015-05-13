var UtilityMixin = function(){
  return {
    getFormattedTime: function(timems) {
      var seconds = Math.round(timems % 60000) / 1000;
      var seconds = seconds.toFixed(2);
      var minutes = Math.floor(timems / 60000);
      if(seconds < 10) {
        seconds = "0"+seconds;
      }
      return minutes+" : "+seconds;
    }
  }
}

module.exports = UtilityMixin;