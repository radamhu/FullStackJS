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
