const lista = ['Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova', 'Edunova']
console.table(lista)
console.log('==============')
for (let brojač = 0; brojač < 10; brojač++) {
    console.log('Edunova')
}
console.log('==============')

for (let brojač = 0; brojač < 10; brojač++) {
    console.log(`brojač=${brojač + 1}`)
}

console.log('==============')

let suma = 100

for (let brojač = 0; brojač < 100; brojač++) {
    console.log(`brojač=${brojač + 1}`)
    suma += brojač + 1
}
console.log(suma)

console.log('==============')

for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log('==============')
for (let i = 7; i < 20; i += 2) {
    console.log(i)
}
console.log('==============')

const početak = 7
const kraj = 20
const uvecanje = 2

for (let i = početak; i < kraj; i += uvecanje) {
    console.log(i)
}
console.log('==============')
document.write('<table>')

for (let i = 1; i <= 10; i++) {
    document.write('<tr>')

    for (let j = 1; j <= 10; j++) {
        document.write(`<td>${i * j}</td>`)
    }

    document.write('</tr>')
}


document.write('</table>')

console.log('==============')
for(let i=0;i<10;i++){
    if (i===3){
        continue
    }
    if (i===7){
        break
    }
    console.log(i)
}
console.log('==============')

const niz = [1,2,3,4,5,6,7]

for(let i=0;i<niz.length;i++){
    console.log(niz[i])
}
console.log('==============')
const ime = 'Mark'
for(let i=0;i<ime.length;i++){
    console.log(ime[i])
}
for(;;){
    console.log('U beskonačnoj petlji sam')
    break
}