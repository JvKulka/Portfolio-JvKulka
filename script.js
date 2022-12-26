// Criação de rolagem suave ao clicar nos links internos
function navegacaoScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-linksInternos a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()

        const href = event.currentTarget.getAttribute('href') // Pega o atributo do link interno (apenas o #)
        const section = document.querySelector(href) // Seleciona a sessão

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
navegacaoScrollSuave()

// Criação de animação da barra de rolagem do scroll
function navegacaoAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll')

    if (sections.length) {

        const metadeWindow = window.innerHeight * 0.6

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - metadeWindow

                if (sectionTop < 0) {
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}
navegacaoAnimacaoScroll()

// Criação de animação do header responsivo

let header = document.getElementById('header')
let navegacao = document.getElementById('navegacao')
let sessaoInicial = document.getElementById('sessao-inicial')
let showSidebar = false

function abrirBotao() {
    showSidebar = !showSidebar
    if (showSidebar) {
        navegacao.style.marginLeft = '-10vw'
        navegacao.style.animationName = 'showSidebar'
        sessaoInicial.style.filter = 'blur(2px)'
    } else {
        navegacao.style.marginLeft = '-100vw'
        navegacao.style.animationName = ''
        sessaoInicial.style.filter = ''
    }
}

function closeSidebar() {
    if (showSidebar) {
        abrirBotao()
    }
}

window.addEventListener('resize', function (event) {
    if (this.window.innerWidth > 768 && showSidebar) {
        abrirBotao()
    }
})