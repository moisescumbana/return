window.addEventListener('scroll', onScroll)

function onScroll() {
     showNavOnScroll()
     showBackToTopButtonOnScroll()

     activateMenuAtCurrentSection(home)
     activateMenuAtCurrentSection(services)
     activateMenuAtCurrentSection(about)
     activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2
  // console.log(home.offsetTop)
  //indica em que posicao se encontra o top de home
  

  // verificar se a sessao passou da linha
  //quais dados vou precisar
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  console.log('O topo da sessao chegou ou passou da linha? ',sectionTopReachOrPassedTargetLine)
  
  const sectionEndsAt = sectionTop + sectionHeight
  console.log(sectionEndsAt)

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
   
  console.log('O fundo da sessao passou da linha? ',sectionEndPassedTargetLine)

  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute(id)
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }




}








function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else { 
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show');
  } else { 
    backToTopButton.classList.remove('show');
  }
}
// onScroll()
// tentar executar manualmente


function openMenu() {
     document.body.classList.add('menu-expanded')           
}

// Botao que abre menu/fecha

function closeMenu() {
     document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`);