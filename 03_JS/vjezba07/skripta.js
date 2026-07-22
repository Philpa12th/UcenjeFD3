const t1 = 4


const prazanniz = []
console.log('prazan niz', prazanniz)

console.log(prazanniz.length)

const temp = [-4, 5, 20, 26, 25, 34, 25, 13, 10, 8, 34, 23]

console.log('temp', temp)
console.table(temp)
console.log('prvi element niza', temp[0])

console.log('Zadnji element niza', temp[temp.length-1])

console.log('27 iz niza temp', temp[5])

temp[5]=28
console.table(temp)

temp.lenght = 10
console.table(temp)


temp.length = temp.length + 1
temp[temp.lenght-1] = 77
temp[110]= -1
console.table(temp)
console.log(temp[11])
console.log[temp.length]

const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Rijeka',
    'Dubrovnik',
    'Zadar',


]

console.table(mjesta)

const ptp = [
    'Edunova',
    '7',
    18n,
    true,
    [],
    undefined,
    null,
    {ime: 'Pero'},
    Symbol('e')
]
console.log(ptp)
console.log(ptp[7])
console.log(ptp[7].ime)
console.log(ptp[7]['ime'])


const osobe = [
    {
        ime: 'Luna',
        Prezime: 'Damjanić',
        godine: 20

    },
    {
        ime: 'Khan',
        Prezime: 'Delagić',
        godine: 18

    },
    {
        ime: 'Sebastian',
        Prezime: 'Duran Cortes',
        godine: 20

    },
    {
        ime: 'Tin',
        Prezime: 'Takač',
        godine: 20

    }

]

console.table(osobe)

const sumaGodina = osobe[0].godine + osobe[1].godine + osobe[2].godine +osobe[3].godine+ (osobe[4]?.godine ?? 0)
console.log(sumaGodina)


const niz = [10, 20, 30]
const [e1, e2] = niz
console.log(e1, e2, niz)

const[,, e3] = niz
console.log(e3)

niz.length=0
const [x1=1, x2=20] = niz
console.log(x1, x2)



const n1 = [1,2,3]

const novi = n1

novi[0] = 7
console.log(n1)


const kopija = [...n1]
kopija[0] = 9
console.log(kopija, n1)

const gradovi = ['Osijek', 'Zagreb']
const sela = ['Tomići, Vukelići']
const hr = [...gradovi, ...sela]
console.log(hr)

document.getElementById('naslov').innerHTML=hr[0]





const tablica = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(tablica[1][2])
console.table(tablica)