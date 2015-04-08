var React = require('react');
var GameStore = require('../stores/game-store.js');

var StoreWatchMixin = function(cb){
  return {
    getInitialState:function(){
      return cb(this);
    },
    componentWillMount:function(){
      GameStore.addChangeListener(this._onChange)
    },
    componentWillUnmount:function(){
      GameStore.removeChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cb(this))
    }
  }
}

module.exports = StoreWatchMixin;