let valores = ["0","1","2","3","4","5","6","7","8","9"]
const numTarjeta = document.getElementById("numTarjeta");
const fecha = document.getElementById("fecha");
const codigo = document.getElementById("codigo");
const container = document.querySelector(".container")

let cantNumeros=0
numTarjeta.addEventListener('keypress', e=>{
    e.preventDefault()    
    if (numTarjeta.value.length<19) {
        if (valores.includes(e.key)){
            if ((numTarjeta.value.length + 1) % 5 == 0 && numTarjeta.value.length>0 ) {
                numTarjeta.value += "-"
                numTarjeta.value += e.key                                
            }else{
                numTarjeta.value += e.key
            }
        }else{
            numTarjeta.value+=""
        }          
    }else{
        numTarjeta.value+=""
    }    
    console.log(numTarjeta.value.length)
})

fecha.addEventListener('keypress', e=>{
    e.preventDefault()    
    if (fecha.value.length<5) {
        if (valores.includes(e.key)){
            if ((fecha.value.length + 1) % 3 == 0 && fecha.value.length>0 ) {
                fecha.value += "/"
                fecha.value += e.key                                
            }else{
                fecha.value += e.key
            }
        }else{
            fecha.value+=""
        }          
    }else{
        fecha.value+=""
    }    
    console.log(fecha.value.length)
})

codigo.addEventListener('keypress', e=>{
    e.preventDefault()    
    if (codigo.value.length<3) {
        if (valores.includes(e.key)){          
            codigo.value += e.key     
        }else{
            codigo.value+=""
        }          
    }else{
        codigo.value+=""
    }    
    console.log(codigo.value.length)
})

addEventListener('resize', ()=>{
    if (window.outerWidth<1300) {
        container.classList.replace("w-25","w-50")        
    }else if (window.outerWidth<642) {
        container.classList.replace("w-25","w-75")       
    }else if (window.outerWidth<300) {
        container.classList.replace("w-25","w-100")        
    }
})

