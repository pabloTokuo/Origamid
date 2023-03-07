function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      })
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      }); 
    })
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classAtivo = "ativo";

  if(accordionList.length) {
    accordionList[0].classList.add(classAtivo);
    accordionList[0].nextElementSibling.classList.add(classAtivo);
    
    
    function activeAccordion() {
      this.classList.toggle(classAtivo);
      this.nextElementSibling.classList.toggle(classAtivo);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    })
  }

}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  if(linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href"); 
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: "smooth",
      // })
    
    }
    
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    })
  }
  
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.5;
  
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add("ativo");
        }
      })
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();