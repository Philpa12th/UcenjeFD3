const ocjena = 2

switch(ocjena){
    case 1:
        console.log('nedovoljan')
        break
    case 2:
        console.log('dovoljan')
        break
    case 3:
        console.log('dobar')
        break
    case 4:
        console.log('vrlo dobar')
        break
    case 5:
        console.log('odličan')
        break
    default:
        console.log('nije ocjena')
}

const dan = 'subota'

switch(dan){
    case 'ponedeljak':
    case 'utorak':
    case 'srijeda':
    case 'četvrtak':
    case 'petak':
        console.log('radni dani')
        break
    case 'subota':
    case 'nedelja':
        console.log('vikend')
        break
    default:
        console.log('neispravan dan')
}