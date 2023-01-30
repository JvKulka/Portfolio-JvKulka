// Criação de rolagem suave ao clicar nos links internos
function navegacaoScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '.js-linksInternos a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href"); // Pega o atributo do link interno (apenas o #)
    const section = document.querySelector(href); // Seleciona a sessão

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
navegacaoScrollSuave();

// Criação de animação da barra de rolagem do scroll
function navegacaoAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const metadeWindow = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - metadeWindow;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
navegacaoAnimacaoScroll();

// Criação de animação do header responsivo

const header2 = document.getElementById("header");
const navigationHeader = document.getElementById("navigation_header");
const sessaoInicial = document.getElementById("sessao-inicial");
const sessaoSobreMim = document.getElementById("sessao-sobre-mim");
const linkHeader = document.querySelectorAll(".link-header");
let showSidebar2 = false;

function toggleSidebar(event) {
  showSidebar2 = !showSidebar2;
  if (showSidebar2) {
    navigationHeader.style.marginLeft = "-10vw";
    navigationHeader.style.animationName = "showSidebar";
    sessaoInicial.style.filter = "blur(2px)";
    sessaoSobreMim.style.filter = "blur(2px)";
    header2.classList.remove("animate__bounceInDown");
  } else {
    navigationHeader.style.marginLeft = "-100vw";
    navigationHeader.style.animationName = "";
    navigationHeader.style.transition = "1s";
    sessaoInicial.style.filter = "";
    sessaoSobreMim.style.filter = "";
  }
}

function closeSidebar() {
  if (showSidebar2) {
    showSidebar2 = true;
    toggleSidebar();
  }
}

window.addEventListener("resize", function (event) {
  if (window.innerWidth > 768 && showSidebar2) {
    showSidebar2 = true;
    toggleSidebar();
  }
});
