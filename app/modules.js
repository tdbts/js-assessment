if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {

  return {
    
    createModule : function(str1, str2) {

    	function GreetModule(greeting, name) {
    		this.greeting = greeting;
    		this.name = name;
    	}

    	GreetModule.prototype.sayIt = function () {
    		return this.greeting + ", " + this.name;
    	}

    	return new GreetModule(str1, str2); 
    }
  };
});

