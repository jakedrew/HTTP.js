fn.parseJSON = JSON.parse;

fn.getJSON = function (url, data) {

    
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status >= 200 && this.status < 400) {
                var data = JSON.parse(this.responseText);
            } else {
                console.error(this.status);
            }
        }
    };

    request.send();
    request = null;


    
};