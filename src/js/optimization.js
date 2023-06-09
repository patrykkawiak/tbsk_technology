const makeCustomElement = (type, classes, text) => {
  const element = document.createElement(type)
  if(classes.length){
    classes.forEach(cssClass => element.classList.add(cssClass))
  }
  if(text) {
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
        accordionsBlock.append(accordion)
      })
    processesMobile.append(accordions)
  section.append(processesMobile)
  } 
}

const renderProcessDestkop = (section, info) => {
  const isMade = document.querySelector('.processes-desktop')
  const mobileVersion = document.querySelector('.processes-mobile')
  if(mobileVersion){
    mobileVersion.remove()
  }
  if(!isMade){
    const processesDesktop = makeCustomElement('div', ['processes-desktop'])
      const processesCnt = makeCustomElement('div', ['processes-ctn'])
        const processesList = makeCustomElement('div',['processes-list'])
          for(let i = 0; i < buttons.length; i++) {
            const processesListItem = makeCustomElement('li', ['processes-list-item'])
              const dot = makeCustomElement('div', ['dot'])
              const text = makeCustomElement('span', ['processes-list-item-text'], info.buttons[i])
              processesListItem.append(dot, text)
            processesList.append(processesListItem)
          }
        const processesContent = makeCustomElement('div', ['processes-content'])
          const processesContentTitle = makeCustomElement('h3', ['processes-content-title'], info.headings[0])
          const processesContentText = makeCustomElement('p', ['processes-content-text'], info.texts[0])
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
    project.append(projectDesc, projectShowcase)
  }
  else {
    project.append(projectDesc)
  }
  return project
}

const renderProjectsMobile = (section, info) => {
  const isMade = document.querySelector('.projects-mobile-cnt')
  const desktopVersion = document.querySelector('.projects-desktop-cnt')
  if(desktopVersion){
    desktopVersion.remove()
  }
  if(!isMade){
    const projectsMobile = makeCustomElement('div', ['projects-mobile-cnt'])
    projectsInfo.forEach(project => {
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

const renderDesktopOrMobile = () => {
  const navbar = document.querySelector('.navbar')
  const processes = document.querySelector('.processes')
  const projects = document.querySelector('.projects')
  const processesInfo = [
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
  const projectsInfo = [
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

  if (document.body.clientWidth >= 992){
    //nav desktop, projects desktop
    renderProcessDestkop(processes, processesInfo)
  } else if (document.body.clientWidth >= 768){
    //process mobile, projects mobile
    renderProcessMobile(processes, processesInfo)
  } else {
    //process mobile, projects mobile
     renderProcessMobile(processes, processesInfo)
  }
}

window.addEventListener('resize', renderDesktopOrMobile)
renderDesktopOrMobile()
