const makeCustomElement = (type, classes, text) => {
	const element = document.createElement(type)
	if (classes) {
		classes.forEach(cssClass => element.classList.add(cssClass))
	}
	if (text) {
		element.textContent = text
	}
	return element
}

const renderProcessMobile = (section, accordions) => {
  const isMade = document.querySelector('.processes-mobile')
  const desktopVersion = document.querySelector('.processes-desktop')
  if(desktopVersion){
    desktopVersion.remove()
  }
  if(!isMade){
    const processesMobile = makeCustomElement('div', ['processes-mobile'])
    const accordionsBlock = makeCustomElement('div', ['accordions'])
      accordions.forEach(accordion => {
        const accordionBlock = makeCustomElement('div', ['accordion'])
          const heading = makeCustomElement('button', ['accordion-heading'])
            const arrow = makeCustomElement('i', ['bx', 'bx-down-arrow-circle'])
            heading.append(arrow, accordion.heading)
          const content = makeCustomElement('div', ['accordion-content'])
            const label = makeCustomElement('h3', ['accordion-label'], accordion.heading)
            const text = makeCustomElement('p', ['accordion-text'], accordion.text)
            content.append(label, text)
          accordionBlock.append(heading, content)
        accordionsBlock.append(accordionBlock)
      })
    processesMobile.append(accordionsBlock)
  section.append(processesMobile)
  } 
}

const renderProcessDestkop = (section, processes) => {
  const isMade = document.querySelector('.processes-desktop')
  const mobileVersion = document.querySelector('.processes-mobile')
  if(mobileVersion){
    mobileVersion.remove()
  }
  if(!isMade){
    const processesDesktop = makeCustomElement('div', ['processes-desktop'])
      const processesCnt = makeCustomElement('div', ['processes-ctn'])
        const processesList = makeCustomElement('div',['processes-list'])
          const processesListBox = makeCustomElement('div', ['processes-list-box'])
            processes.forEach(process => {
              const processesListItem = makeCustomElement('li', ['processes-list-item'])
                const dot = makeCustomElement('div', ['dot'])
                const text = makeCustomElement('span', ['processes-list-item-text'], process.button)
                processesListItem.append(dot, text)
              processesListBox.append(processesListItem)
            })
          processesList.append(processesListBox)
          processesListBox.childNodes[0].classList.add('active')
        const processesContent = makeCustomElement('div', ['processes-content'])
          const processesContentTitle = makeCustomElement('h3', ['processes-content-title'], processes[0].heading)
          const processesContentText = makeCustomElement('p', ['processes-content-text'], processes[0].text)
          processesContent.append(processesContentTitle, processesContentText)
        processesCnt.append(processesList, processesContent)
      processesDesktop.append(processesCnt)
    section.append(processesDesktop)
  }
}

const renderProject = (project, renderShowcase) => {
  const projectBlock = makeCustomElement('div', ['project', project.name])
  const projectDesc = makeCustomElement('div', ['project-desc'])
    const descHeading = makeCustomElement('div', ['desc-heading'])
      const headingTag = makeCustomElement('small', ['heading-tag'], project.tag)
      const headingTitle = makeCustomElement('h3', ['heading-title'], project.title)
      descHeading.append(headingTag, headingTitle)
    const descContent = makeCustomElement('div', ['desc-content'])
      const contentMain = makeCustomElement('p', ['content-main'], project.content)
      const contentDate = makeCustomElement('small', ['content-date'], project.date)
      descContent.append(contentMain, contentDate)
    const descBtns = makeCustomElement('div', ['desc-btns'])
      const visitBtn = makeCustomElement('a', ['desc-btn', 'primary'])
        visitBtn.setAttribute('href', project.visit)
        const visitIcon = makeCustomElement('i', ['bx', 'bx-globe'])
        visitBtn.append('Visit', visitIcon)
      const codeBtn = makeCustomElement('a', ['desc-btn', 'secondary'])
        codeBtn.setAttribute('href', project.code)
        const codeIcon = makeCustomElement('i', ['bx', 'bx-code-alt'])
        codeBtn.append('Code', codeIcon)
      descBtns.append(visitBtn, codeBtn)
    projectDesc.append(descHeading, descContent, descBtns)
  if(renderShowcase){
    const projectShowcase = makeCustomElement('div', ['project-showcase'])
    const showcaseImg = makeCustomElement('img', ['showcase-img'])
      showcaseImg.setAttribute('alt', `Zdjęcie sekcji tytułowej na stronie ${project.name}`)
      showcaseImg.setAttribute('src', `./dist/img/${project.name}.png`)
    projectShowcase.append(showcaseImg)
    projectBlock.append(projectDesc, projectShowcase)
  }
  else {
    projectBlock.append(projectDesc)
  }
  return projectBlock
}

const renderProjectsMobile = (section, projects) => {
  const isMade = document.querySelector('.projects-mobile-cnt')
  const desktopVersion = document.querySelector('.projects-desktop-cnt')
  if(desktopVersion){
    desktopVersion.remove()
  }
  if(!isMade){
    const projectsMobile = makeCustomElement('div', ['projects-mobile-cnt'])
    projects.forEach(project => {
      const projectBlock = renderProject(project, true)
      projectsMobile.append(projectBlock)
    })
    section.append(projectsMobile)
  }
}

const renderProjectsDesktop = (section, projects) => {
  const isMade = document.querySelector('.projects-desktop-cnt')
  const mobileVersion = document.querySelector('.projects-mobile-cnt')
  if(mobileVersion){
    mobileVersion.remove()
  }
  if(!isMade){
    const projectsDesktop = makeCustomElement('div', ['projects-desktop-cnt'])
      const projectsDesc = makeCustomElement('div', ['projects-desc', 'projects-parallax'])
        projects.forEach(project => {
          const projectBlock = renderProject(project)
          projectsDesc.append(projectBlock)
        })
      const projectsShowcase = makeCustomElement('div', ['projects-showcase', 'projects-parallax'])
        projects.forEach(project => {
          const desktopShowcase = makeCustomElement('div', ['desktop-showcase'])
            const desktopShowcaseImg = makeCustomElement('img', ['desktop-showcase-img'])
            desktopShowcaseImg.setAttribute('src', `./dist/img/${project.name}.png`)
            desktopShowcaseImg.setAttribute('alt', `Zdjęcie sekcji tytułowej na stronie ${project.name}`)
            desktopShowcase.append(desktopShowcaseImg)
          projectsShowcase.append(desktopShowcase)
        })
      projectsDesktop.append(projectsDesc, projectsShowcase)
    section.append(projectsDesktop)
  }
}

const renderLink = (link) => {
  const listItem = makeCustomElement('li')
    const linkAnchor = makeCustomElement('a', ['nav-list-item'], link.text)
    linkAnchor.setAttribute('href', link.href)
    listItem.append(linkAnchor)
  return listItem
}

const renderSocial = (social) => {
  const listItem = makeCustomElement('li', ['nav-socials-item'])
    const socialAnchor = makeCustomElement('a')
    socialAnchor.setAttribute('href', social.href)
      const socialIcon = makeCustomElement('i', ['bx', `bxl-${social.icon}`])
      socialAnchor.append(socialIcon)
      listItem.append(socialAnchor)
  return listItem
}

const renderMobileNavbar = (navbar, links, socials) => {
  const isMade = document.querySelector('.mobile-nav')
  const desktopVersion = document.querySelector('.desktop-nav')
  if(desktopVersion){
    desktopVersion.remove()
  }
  if(!isMade){
    const mobileNav = makeCustomElement('div', ['mobile-nav'])
      const logo = makeCustomElement('a', ['logo'])
      logo.setAttribute('href', '#')
        const logoImg = makeCustomElement('img', ['logo-img'])
        logoImg.setAttribute('src', './dist/img/logo.png')
        logoImg.setAttribute('alt', 'Logo przedstawiające szopa stworzonego z prostych kształtów geometrycznych.')
        logo.append(logoImg)
      const burger = makeCustomElement('div', ['burger-icon'])
        for(let i = 0; i < 3; i++) {
          const burgerBar = makeCustomElement('div', ['bar'])
          burger.append(burgerBar)
        }
      const navList = makeCustomElement('ul', ['nav-list'])
        const navListBackground = makeCustomElement('div', ['nav-list-background'])
        navList.append(navListBackground)
        links.forEach(link => {
          const linkLi = renderLink(link)
          navList.append(linkLi)
        })
        const navListSocials = makeCustomElement('div', ['socials', 'nav-list-item'])
          socials.forEach(social => {
            const socialLi = renderSocial(social)
            navListSocials.append(socialLi)
          })
        navList.append(navListSocials)
      mobileNav.append(logo, burger, navList)
    navbar.append(mobileNav)
  }
}

const renderDesktopNavbar = (navbar, links, socials) => {
  const isMade = document.querySelector('.desktop-nav')
  const mobileVersion = document.querySelector('.mobile-nav')
  if(mobileVersion){
    mobileVersion.remove()
  }
  if(!isMade){
    const desktopNav = makeCustomElement('div', ['desktop-nav'])
      const navList = makeCustomElement('ul', ['nav-list'])
        const linksLeft = makeCustomElement('div', ['flex-left'])
          links.forEach(link => {
            if(link.onLeft) {
              const linkLi = renderLink(link)
              linksLeft.append(linkLi)
            }
          })
        const logo = makeCustomElement('div', ['logo'])
          const logoImg = makeCustomElement('img', ['logo-img'])
          logoImg.setAttribute('src', './dist/img/logo.png')
          logoImg.setAttribute('alt', 'Logo przedstawiające szopa stworzonego z prostych kształtów geometrycznych.')
          logo.append(logoImg)
        const rightContainer = makeCustomElement('div', ['flex-right'])
          const linksRight = makeCustomElement('div', ['right-links'])
            links.forEach(link => {
              if(!link.onLeft){
                const linkLi = renderLink(link)
                linksRight.append(linkLi)
              }
            })
            const socialsBlock = makeCustomElement('div', ['socials'])
              socials.forEach(social => {
                const socialLi = renderSocial(social)
                socialsBlock.append(socialLi)
              })
            rightContainer.append(linksRight, socialsBlock)
        navList.append(linksLeft, logo, rightContainer)
      desktopNav.append(navList)
    navbar.append(desktopNav)
  }
}

const renderDesktopOrMobile = () => {
  const navbar = document.querySelector('.navbar')
  const processesSection = document.querySelector('.processes')
  const projectsSection = document.querySelector('.projects')
  const processes = [
      {
        heading: 'Jak przebiegają rozmowy',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
        button: 'Konsultacja',
      },
      {
        heading: 'Jak przebiegają rozmowy',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
        button: 'Prezentacja',
      },
      {
        heading: 'Jak przebiegają rozmowy',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
        button: 'Zatwierdzenie',
      },
      {
        heading: 'Jak przebiegają rozmowy',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
        button: 'Wykonanie',
      }
  ]
  const projects = [
    {
      name: 'power',
      title: 'Power Kwidzyn',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    },
    {
      name: 'rebax',
      title: 'Rebax',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    },
    {
      name: 'autoclinic',
      title: 'Autoclinic',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    },
    {
      name: 'journeyquest',
      title: 'Journeyquest',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    },
    {
      name: 'jumpsole',
      title: 'JumpSole',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    },
    {
      name: 'greenscape',
      title: 'GreenScape',
      tag: 'Built',
      date: '20.07.2022',
      visit: '#',
      code: '#',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum nisi voluptatibus natus delectus numquam rem dolore beatae excepturi voluptas eveniet?'
    }
  ]
  const navLinks = [
    {
      text: 'Home',
      href: '#',
      onLeft: true,
    },
    {
      text: 'O nas',
      href: '#about-us',
      onLeft: true,
    },
    {
      text: 'Usługi',
      href: '#services',
      onLeft: true,
    },
    {
      text: 'FAQ',
      href: '#faq',
      onLeft: false
    },
    {
      text: 'Kontakt',
      href: '#contact',
      onLeft: false
    }
  ]
  const navSocials = [
    {
      icon: 'gmail',
      href: '#'
    },
    {
      icon: 'facebook-square',
      href: '#'
    },
    {
      icon: 'instagram',
      href: '#'
    },
    {
      icon: 'linkedin-square',
      href: '#'
    }
  ]

	if (document.body.clientWidth >= 992) {
		renderProcessDestkop(processesSection, processes)
    renderProjectsDesktop(projectsSection, projects)
    renderDesktopNavbar(navbar, navLinks, navSocials)
	} else if (document.body.clientWidth >= 768) {
		renderProcessMobile(processesSection, processes)
    renderProjectsMobile(projectsSection, projects)
    renderDesktopNavbar(navbar, navLinks, navSocials)
	} else {
		renderProcessMobile(processesSection, processes)
    renderProjectsMobile(projectsSection, projects)
    renderMobileNavbar(navbar,navLinks, navSocials)
	}
}

window.addEventListener('resize', renderDesktopOrMobile)
renderDesktopOrMobile()
