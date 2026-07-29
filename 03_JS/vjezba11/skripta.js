const isDev = true




odradi()


function odradi(){

    console.log('poziv funkcije odradi 1.1')
}

odradi()

document.getElementById('gumb2').addEventListener('click',odradi)
document.getElementById('gumb3').addEventListener('click',function(){
    console.log('poziv iz bezimenefunkcije')

})


function parnibrojevi(odBroja, doBroja){
    for(let i=odBroja; i<=doBroja;i++){
        if (i%2===0){
            console.log(i)
        }
    }
}
parnibrojevi(2,12)
parnibrojevi(127,134)

function log(poruka){
    if(!isDev){
        return
    }
    console.log('\n')
    console.log('+---------+')
    console.log(poruka)
    console.log('+---------+')
}
log('prva poruka testiranje')
log('Osijek')
/**
 * 
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns slucajanBroj
 */
function slucajanBroj(odBroja=0,doBroja=0){
    if(odBroja && doBroja){
        return(Math.random()*(doBroja - odBroja)+ odBroja).toFixed(0)
    }
    

    if(odBroja){
        return(Math.random()*(odBroja)).toFixed(0)
    }
    
    
    
    return Math.random()
}

slucajanBroj()


const sb = slucajanBroj()

log(sb)

log(slucajanBroj())

for(let i=0;i<6;i++){
    log(slucajanBroj(1.45))

}
log(slucajanBroj(20))


function zbrojprimbrojeva(odBroja, doBroja){
    let suma=0, prim=true
    for(let i=odBroja; i<=doBroja; i++){
        if(i<2){
            continue
        }
        prim=true
        for(let j =2; j<i;j++)
            if(i%j ===0)
                prim=false
            break
        if(prim){
            suma+=1
        }
    }
    return suma
}

log (zbrojprimbrojeva(2,-10))
log (zbrojprimbrojeva(100,120))

const ime='Mark'

log(ime.charCodeAt(5))
log(ime.toUpperCase())

console.log('slučaj 2')

function  zbroj(broj){
    if(broj===1){
        return 1
    }
    return broj+zbroj(broj-1)
}

log(zbroj(100))


const hello = ()=>log('Hello iz arrow')
hello()

const brojevi = (a,b) => {
    return[a,3,b]
}

log(brojevi(1,2))
;(()=>{
    console.log('Kreirana funkcija i odmah izvedena')

})()