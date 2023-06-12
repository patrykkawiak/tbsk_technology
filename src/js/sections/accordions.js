let accordions = document.querySelectorAll('.accordion')
let accordionContents = document.querySelectorAll('.accordion-content')
console.log(accordions);

const prepAccordions = () => {
  accordionContents.forEach(content => {
    content.style.maxHeight = '0';
  })
}

const handleAccordionContent = (index) => {
  const accordionContent = accordionContents[index]
	if (accordionContent.style.maxHeight != '0px') {
		accordionContent.style.maxHeight = '0px'
	} else {
		closeAllAccordions()
    const accordionHeight = accordionContents[index].scrollHeight
		accordionContent.style.maxHeight = `${accordionHeight}px`
	}
}

const closeAllAccordions = () => {
	accordionContents.forEach(el => {
		el.style.maxHeight = '0'
	})
}

accordions.forEach((accordion, index) => {
  accordion.addEventListener('click', () => {
    handleAccordionContent(index)
  })
})

window.addEventListener('resize', () => {
  accordions = document.querySelectorAll('.accordion')
  accordionContents = document.querySelectorAll('.accordion-content')
})
prepAccordions()