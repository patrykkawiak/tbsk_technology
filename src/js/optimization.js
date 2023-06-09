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

const renderProcessMobile = (section, headings, texts) => {
  const isMade = document.querySelector('.processes-mobile')
  const desktopVersion = document.querySelector('.processes-desktop')
  if(desktopVersion){
    desktopVersion.remove()
  }
  if(!isMade){
    const processesMobile = makeCustomElement('div', ['processes-mobile'])
    const accordions = makeCustomElement('div', ['accordions'])
    for(let i = 0; i < headings.length; i++) {
      const accordion = makeCustomElement('div', ['accordion'])
        const heading = makeCustomElement('button', ['accordion-heading'])
          const arrow = makeCustomElement('i', ['bx', 'bx-down-arrow-circle'])
          heading.append(arrow, headings[i])
        const content = makeCustomElement('div', ['accordion-content'])
          const label = makeCustomElement('h3', ['accordion-label'], headings[i])
          const text = makeCustomElement('p', ['accordion-text'], texts[i])
          content.append(label, text)
        accordion.append(heading, content)
      accordions.append(accordion)
    }
    processesMobile.append(accordions)
  section.append(processesMobile)
  } 
}

const renderProcessDestkop = (section, headings, texts, buttons) => {
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
              const text = makeCustomElement('span', ['processes-list-item-text'], buttons[i])
              processesListItem.append(dot, text)
            processesList.append(processesListItem)
          }
        const processesContent = makeCustomElement('div', ['processes-content'])
          const processesContentTitle = makeCustomElement('h3', ['processes-content-title'], headings[0])
          const processesContentText = makeCustomElement('p', ['processes-content-text'], texts[0])
          processesContent.append(processesContentTitle, processesContentText)
        processesCnt.append(processesList, processesContent)
      processesDesktop.append(processesCnt)
    section.append(processesDesktop)
  }
}

const renderDesktopOrMobile = () => {
  const navbar = document.querySelector('.navbar')
  const processes = document.querySelector('.processes')
  const projects = document.querySelector('.projects')

  const processesHeadings = [
    'Jak przebiegają rozmowy',
    'Jak przebiegają rozmowy',
    'Jak przebiegają rozmowy',
    'Jak przebiegają rozmowy'
  ]
  const processesTexts = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.',
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt vel eligendi consequuntur voluptas nesciunt perferendis qui id obcaecati repellendus quaerat accusantium exercitationem non, alias assumenda, sed illo totam eos dolorum.'
  ]
  const processButtons = [
    'Konsultacja',
    'Prezentacja',
    'Zatwierdzenie',
    'Wykonanie'
  ]

  if (document.body.clientWidth >= 992){
    //nav desktop, projects desktop
    renderProcessDestkop(processes, processesHeadings, processesTexts, processButtons)
  } else if (document.body.clientWidth >= 768){
    //process mobile, projects mobile
    renderProcessMobile(processes, processesHeadings, processesTexts)
  } else {
    //process mobile, projects mobile
     renderProcessMobile(processes, processesHeadings, processesTexts)
  }
}

window.addEventListener('resize', renderDesktopOrMobile)
renderDesktopOrMobile()
