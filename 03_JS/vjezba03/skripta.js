const a=2, b=3

let rez
rez = a+b
console.log('rez',rez)

console.log('9 % 2', 9 % 2)
console.log('8 % 2', 8 % 2)

rez += 2

console.log('rez += 2', rez)

// debugger
rez = rez+3

console.log('rez = rez3', rez)

rez= rez+1
rez+=1
rez++

let i = 0
console.log('i++', i++)

console.log('++i', ++i)

i=2
let j=1
i=j++ - 1
j += --i - ++j
console.log(i-j)

console.log(5 != 4)
console.log('5' != 5)
console.log('5' !== 5)

const godine = 18

console.log(godine > 18)
console.log(godine >= 18)

const ispunjenuvjet = godine >= 18
console.log('ispunjenuvjet', typeof ispunjenuvjet, ispunjenuvjet)

const imanovaca = true

console.log('može u disko', ispunjenuvjet && imanovaca)

console.log(!imanovaca)

console.log(godine >= 18 ? 'punoljetan' : 'maloljetan')
console.log('Mark ima ' + godine + ' godina')

console.log(`Mark ima ${godine} godina`)

const x = '7', y = 5
console.log(x + y)

const niz = [2,1]

const noviniz =  [0,...niz,3]


const osoba = {
    ime: 'Pero',
    Prezime: 'Perić'
}

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}