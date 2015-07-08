if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var results = [];

		var walk = function (data) {
			
			return data.files.map(function (item) {
							
				if (item.files) {
					walk(item);
				
				} else {
					if (dirName) {
						
						var file = item.split(".");
						
						if (file[1] === dirName) {
							results.push(item);
						}
					
					} else {
						results.push(item);
					}
				}
			});
		};

		walk(data);

		return results;
		
    },

    permute: function(arr) {

    	var result = [];

    	function pushPossibilities(dest, src) {

    		if (src.length === 0) {
    			result.push(dest);
    		
    		} else {
    			return src.map(function (item) {
    				pushPossibilities(dest.push(item), src.splice(src.indexOf(item), 1));
    			});
    		}

    		return false;
    	}

    	pushPossibilities([], arr);

    	return result;

    }
  };
});
