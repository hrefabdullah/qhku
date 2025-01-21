const no = document.querySelector('#no')
const yes = document.querySelector('#yes')
const text = document.querySelector("#text")
const card = document.querySelector('.card')
const q = document.querySelector('#q')
const h = document.querySelector('#h')
const k = document.querySelector('#k')
const u = document.querySelector('#u')

let count = 0

no.addEventListener('click', (e) => {
    count += 1
    let randomLeft = Math.random()*200 + (-Math.random()*200)
    let randomTop = Math.random()*200 + (-Math.random()*200)
    no.style.top = `${randomTop}px`
    no.style.left = `${randomLeft}px`
    if (count > 5 && count <= 10){
        text.innerHTML = 'bass na!'
    } else if (count > 10){
        no.style.display = 'none'
        text.innerHTML = 'Khamoshi se qubool kro'
    } else if (count <= 5){
        text.innerHTML = 'Kheryt?'
    }
})

yes.addEventListener('click', () => {
    text.innerHTML = "Qubool Qubool Qubool"
    card.style.opacity = '0'
    q.style.opacity = '100%'
    h.style.opacity = '100%'
    k.style.opacity = '100%'
    u.style.opacity = '100%'
})

