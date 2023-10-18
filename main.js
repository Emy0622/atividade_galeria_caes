'use strict'

function carregarFotos() {
    const imagens = pegarImagens()
    [
    './img/ana.jpg',
    './img/joao.jpg',
    './img/hugo.jpg',
    './img/maria.jpg'
]
return listaImagens 
}

function criarTagImg(imagem) {
    
    const tagImg = document.createElement(img)
    tagImg.src = imagem

}
function carregarFotos() {
    const imagens = pegarImagens()
    imagens.forEach(criarTagImg)
}