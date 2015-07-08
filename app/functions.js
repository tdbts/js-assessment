if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {

        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {

        return fn.call(obj);
    },

    functionFunction : function(str) {

        return function (str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function(arr, fn) {

        return arr.map(function (element) {
            return function () {
                return fn(element);
            }
        });
    },

    partial : function(fn, str1, str2) {

        return function (str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {

        var result = 0;

        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }

        return result;
    },

    callIt : function(fn) {

        var args = Array.prototype.slice.call(arguments, 1);

        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {

        var args = Array.prototype.slice.call(arguments, 1);

        return function () {
            var innerArgs = Array.prototype.slice.call(arguments), 
                finalArgs = args.concat(innerArgs);
            
            return fn.apply(null, finalArgs);   
        }
    },

    curryIt : function(fn) {

        var requiredLength = fn.length, 
            args = [];

        return function curryProcess(arg) {
            
            args.push(arg);

            while (args.length < requiredLength) {
                return curryProcess;
            }

            return fn.apply(null, args);
        }     

    }
  };
});
