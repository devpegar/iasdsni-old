const $prev = document.querySelector(".img-btns .anterior")
const $next = document.querySelector(".img-btns .siguiente")
const $items = document.querySelectorAll(".imagen")

const nextImage = (items) => {
    const totalItems = items.length -1
    let indice

    items.forEach((items, i) => {
        if (items.classList.contains("activa")) {
            items.classList.remove("activa")
            indice = i + 1
            if (indice > totalItems) indice = 0
        }
    })
    items[indice].classList.add("activa")
}
const prevImage = (items) => {
    const totalItems = items.length -1
    let indice

    items.forEach((items, i) => {
        if (items.classList.contains("activa")) {
            items.classList.remove("activa")
            indice = i - 1
            if (indice < 0) indice = totalItems
        }
    })
    items[indice].classList.add("activa")
}

$next.addEventListener("click", () => {
    nextImage($items)
})

$prev.addEventListener("click", () => {
    prevImage($items)
})

window.onload = setInterval(() => {
    nextImage($items)
}, 5000)