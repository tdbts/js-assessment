if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    
    alterContext : function(fn, obj) {

    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {

    	return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {

    	var results = [];
    	
    	for (var key in obj) {
    		if (obj.hasOwnProperty(key)) {
    			results.push(key + ": " + obj[key]); 
    		}
    	}

    	return results;
    }

  };
});
