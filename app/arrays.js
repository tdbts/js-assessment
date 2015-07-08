if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  
  return {
    
    indexOf : function(arr, item) {

        return arr.indexOf(item);
    },

    sum : function(arr) {

        return arr.reduce(function (prev, curr) {
            
            return prev += curr;
        });
    },

    remove : function(arr, item) {

        var index = arr.indexOf(item);

        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        
        var index = arr.indexOf(item);

        while (index !== -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }

        return arr;        
    },

    append : function(arr, item) {

        arr.push(item);

        return arr;
    },

    truncate : function(arr) {

        arr.pop();

        return arr;
    },

    prepend : function(arr, item) {

        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {

        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {

        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {

        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {

        var count = 0;

        arr.reduce(function (prev, curr) {
            if (curr === item) {
                count++;
            } 
        });

        return count;
    },

    duplicates : function(arr) {

        var seenElements = [], 
            results = [];

        arr.map(function (element) {

            if ((seenElements.indexOf(element) === -1) && results.indexOf(element) === -1) {
                seenElements.push(element);

            } else {
                if ((seenElements.indexOf(element) !== -1) && results.indexOf(element) === -1) {
                    results.push(element);
                }
            }
        });

        return results;        
    },

    square : function(arr) {

        return arr.map(function (element) {
            return element * element;
        });
    },

    findAllOccurrences : function(arr, target) {

        var results = [];

        arr.map(function (element, index) {
            
            if (element === target) {
                results.push(index);
            } 
        });

        return results;    
    }

  };
});
