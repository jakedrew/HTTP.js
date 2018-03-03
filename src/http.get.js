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


