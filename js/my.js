if (typeof String.prototype.trim != 'function') {
    String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };
}
if (typeof String.prototype.CJKLength != 'function') {
    String.prototype.CJKLength = function() { var str = escape(this).replace(/%u.{4}/gm,"1").replace(/%.{2}/gm,"1"); return str.length; };
}
if (typeof String.prototype.splice != 'function') {
    String.prototype.splice = function( idx, len, sub ) { return (this.slice(0,idx) + sub + this.slice(idx + Math.abs(len))); };
}
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function(prefix) { return this.slice(0, prefix.length) == prefix; };
} 
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function(suffix) { return this.slice(-suffix.length) == suffix; };
}
//////////////////
//$(document).ready(function () {
    var isso_s=$("#isso-script");
    if(window.location.hostname.startsWith("localhost")) {
        isso_s.attr("data-isso","http://localhost:4100/");
        isso_s.attr("src","http://localhost:4100/js/embed.dev.js");
    } else {
        isso_s.attr("data-isso","https://cmt.cntomxu.com/");
        isso_s.attr("src","https://cmt.cntomxu.com/js/embed.min.js");
    }
//});