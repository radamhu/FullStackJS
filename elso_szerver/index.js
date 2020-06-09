var a = true
var b = 'string'

var d = {
    r: 5,
    t: {
        t: 5
    }
}

d.t.t

if (b) {
    
} else {

}

// filter : lista minden elemén végigmegy és új listát hoz létre
var a = ['paradicsom', 'sajt', 'chili'].filter(function (elem) {
    return elem
})

console.log(a)

for (let index = 0; index < a.length; index++) {
    console.log('i értléke: ', a[index])
}

function fuggveny(a, b , c) {
    // arguments : nem egy tömb de tömbként viselkedik
    // milyen arguementumokkal lett ez a függvény meghívva
    console.log(arguments)
}

fuggveny()
fuggveny()
fuggveny(1, 3)
fuggveny(1,3,6)

function Allat () {
    this.hang = 'woof'
}

// minden egy object
// így egy class is egy object
// obecjt prototípusára aggatunk function-t minden példányon rajta lesz
Allat.prototype.hangotAd = function () {
    console.log(this.hang)
}

var kutya = new Allat()

kutya.hangotAd()

class Allat2 {
    constructor() {
        this.hang = 'woof'
    }

    hangotAd() {
        console.log(this.hang)
    }
    
}

// sima függvény
const fs = require('fs')
const fileContent = fs.readFileSync('./file.txt')
console.log(fileContent.toString())

// async io, callback függvéy, majd szólsz
// átpasszoltuk a libuv-nek, hogy jól van ha kész vagy szóljál
fs.readFile('./file.txt', function (err, fileContent) {
    console.log(fileContent.toString())
})
// utána tudok csinálni amit akarok
console.log('async után')
console.log('async után')
console.log('async után')
console.log('async után')
console.log('async után')
console.log('async után')

const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  const { query } = req;
  let response = 'Hello';
  if (query.nev) {
    response += ` ${query.nev.charAt(0).toUpperCase() + query.nev.slice(1)}`;
  }
  res.end(`${response}!`);
});

const args = process.argv.slice(2);

const DEFAULT_PORT = 3000;

let port = DEFAULT_PORT;
if (args[0]) {
  port = parseInt(args[0], 10);
}

const listener = app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const addr = listener.address();
  console.log(`Az alkalmazas a következő URL-en érhető el: http://localhost:${addr.port}`);
});
