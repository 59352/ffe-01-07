const needle = require('needle');

    let URL = 'https://swapi.co/api/starships/3/';

    needle.get(URL, (err, resolve) => {
        if (err) throw err;
        console.log(resolve.body);
        console.log(resolve.statusCode);
    });

const fs = require('fs-extra');
return fs.writeFile('C:/Users/Grom/Desktop/learn JavaScript.ru/lesson10/txt.txt', JSON.stringify(needle), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('File was saved');
});