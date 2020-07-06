# HTTP.js
A small library to facilitate HTTP requests in JavaScript

## Functions
```js
http.ready({
  console.log('View is ready');
});

http.post(url, data);

http.parseJSON(json);

http.getJSON(url, data);

http.get(url, function(){
  console.log('Callback goes here');
});
```
