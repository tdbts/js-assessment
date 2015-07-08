if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {

    count : function (start, end) {
    	
    	for (var i = start; i <= end; i++) {
    		
    		var timeout = setTimeout((function(val) {
    			return function () {
    				console.log(val);
    			} 
    		})(i), 100 * i);
    	}

    	return {
    		
    		cancel: function () {
    			
    			return clearTimeout(timeout);
    		}

    	};

    }
  };
});