const ime=prompt('unesi ime')

console.log(ime)

console.log(typeof ime)
console.log('ime', typeof ime, ime)
console.log(`Dobar dan ${ime}!`)

const unosGodina='2026'

const godina = Number(unosGodina)

const pi = parseFloat('3.14')

console.log('pi', typeof pi, pi)

const Logickavrijednost = true

console.log('Logickavrijednost', typeof Logickavrijednost, Logickavrijednost)

let broj=7
console.log('broj', typeof broj, broj)
broj=8
console.log('broj', typeof broj, broj)
broj='Osijek'
console.log('broj', typeof broj, broj)

var x=8

console.log('x', typeof x,x)

x='8'
console.log('x', typeof x,x)

var x = true
console.log('x', typeof x,x)

const velikibroj =45454540548896n
console.log('velikibroj', typeof velikibroj, velikibroj)

let varijabla

console.log('varijabla', typeof varijabla, varijabla)

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)

const osoba = {
    id: 1,
    ime: 'Pero',
    placa: 1200,
    zaposlen: true


}
console.log('osoba', typeof osoba, osoba)
console.table(osoba)

const niz = [1,2,3,4,4,5,6,67]

console.log('niz', typeof niz, niz)
console.table(niz)

const json = [

    {
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.table(json)

function pozdrav(){
    console.log('pozdrav iz funkcije!')
}

console.log('pozdrav', typeof pozdrav)

pozdrav()

const pozdravi = () => console.log('Pozdrav iz ove funkcije')

console.log('pozdravi', typeof pozdravi)
pozdravi()

const id1 = Symbol('Edunova')

const id2 = Symbol('Edunova')

console.log('id1', typeof id1)
console.log('id2', typeof id2)

console.log('7' == 7)
console.log('7' === 7)
console.log(7 === 7)


console.log(id1 == id2)
console.log(id1 === id2)