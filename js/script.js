const imagenes = document.querySelectorAll(".imagen")
const btns = document.querySelectorAll(".btn")

let imagenActual = 1

// Navegación manual de las imagenes

const navManual = function(manual) {
    imagenes.forEach((imagen) => {
        imagen.classList.remove("activa")

        btns.forEach((btn) => {
            btn.classList.remove("activa")
        })
    })

    imagenes[manual].classList.add("activa")
    btns[manual].classList.add("activa")


}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        navManual(i)
        imagenActual = i
    })
})

//Navegación automatica de imagenes
const automatica = function(activarClase) {
    const activa = document.getElementsByClassName("activa")
    let i = 1

    const repetir = () => {
        setTimeout(function(){
            [...activa].forEach((imagenActiva) => {
                imagenActiva.classList.remove("activa")
            })
            imagenes[i].classList.add("activa")
            btns[i].classList.add("activa")
            i++

            if(imagenes.length == i){
                i = 0
            }
            if(i >= imagenes.length){
                return
            }
            repetir()
        }, 10000)
    } 
    repetir()
}
automatica()