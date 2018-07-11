/*!
 * HTTP.js JavaScript Library v1.0.0
 *
 * Copyright Jake Drew and other contributors
 * Released under the MIT license
 *
 */

(function (global) {
    'use strict';    
    var http = function () {};
    
    var fn = http.prototype;
    
fn.ready = function (callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    } else {
        document.attachEvent('onreadystatechange', function () {
            if (document.readyState !== 'loading') {
                callback();
            }
        });
    }
};
fn.post = function (url, data) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
};
  
fn.parseJSON = JSON.parse;

fn.getJSON = function (url, data) {

    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.responseText);
                console.log(data);
            } else {
                console.error(this.status);
            }
        }
    };

    request.send();
    request = null;


    
};
fn.get = function (url, callback) {
    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                callback(this.responseText);
            } else {
                console.error(this.status);
            }
        }
    };

    request.send();
    request = null;

    
};



} (this));
