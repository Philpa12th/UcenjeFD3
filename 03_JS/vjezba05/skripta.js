// uvjetno granje if
const uvjet = true

if(uvjet){
    console.log('uvjet je true')
}

if (uvjet==true){
    console.log('Ne, ne, ne')
}

if(uvjet){
    console.log('uvjet je ispunjen')
    console.log('ušla sam u if granu')


}

else{
    console.log('uvjet je false')
    console.log('ušla sam u else granu')
}

if(!uvjet)
    console.log('if bez {} !uvjet')
else
    console.log('else bez {} !uvjet')
    // console.log('ispisati kada je false')
const ocjena = 5

if(ocjena === 3){
    console.log('dobar')
}else if(ocjena===1){
    console.log('nedovoljan')
}else if(ocjena === 2){
    console.log('dovoljan')
}else if(ocjena<=0 || ocjena>5){
    console.log('nije ocjena')
}

else{
    console.log('veće od 3')
}

if(ocjena>=1 && ocjena<=5){
    console.log('ocjena je valjana')   
}else{
    console.log('nije ocjena')
}

console.log(ocjena>=1 && ocjena<=5 ? 'ocjena je valjana' : 'nije ocjena')

const ime = 'Luni'

if(ime){
    console.log('varijabla ime ima vrijednost')
}else{
    console.log('varijabla ime NEMA vrijednost, prazna je')
}

const b = Number('14')
console.log(b)

if(!b){
    console.log('nisi unio broj')
}else{
    console.log(b*10)
}