const no = document.querySelector('#no')
const yes = document.querySelector('#yes')
const text = document.querySelector("#text")
const card = document.querySelector('.card')
const q = document.querySelector('#q')
const h = document.querySelector('#h')
const k = document.querySelector('#k')
const u = document.querySelector('#u')

no.addEventListener('click', (e) => {
    let randomLeft = Math.random()*200 + (-Math.random()*200)
    let randomTop = Math.random()*200 + (-Math.random()*200)
    no.style.top = `${randomTop}px`
    no.style.left = `${randomLeft}px`
    text.innerHTML = 'Kheryt?'
})

yes.addEventListener('click', () => {
    text.innerHTML = "Qubool"
    card.style.opacity = '0'
    q.style.opacity = '100%'
    h.style.opacity = '100%'
    k.style.opacity = '100%'
    u.style.opacity = '100%'
})