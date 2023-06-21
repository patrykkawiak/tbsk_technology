let accordions = document.querySelectorAll('.accordion');
let accordionContents = document.querySelectorAll('.accordion-content');
let accordionHeadings = document.querySelectorAll('.accordion-heading')

const prepAccordions = () => {
	accordionContents.forEach((content) => {
		content.style.maxHeight = '0px';
	});
};

const handleAccordionContent = (heading, index) => {
	const accordionContent = accordionContents[index];
	if (accordionContent.style.maxHeight != '0px' && heading.classList.contains('accordion-heading')) {
		accordionContent.style.maxHeight = '0px';
    heading.setAttribute('aria-expanded', 'false')
	} else {
		closeAllAccordions();
		const accordionHeight = accordionContents[index].scrollHeight;
		accordionContent.style.maxHeight = `${accordionHeight}px`;
    heading.setAttribute('aria-expanded', 'true')
	}
};

const outsideClick = (e) => {
	if (
		e.target.classList.contains('accordion-heading') ||
		e.target.classList.contains('accordion-label') ||
		e.target.classList.contains('accordion-text')
	) {
		return
	} else {
		closeAllAccordions();
	}
};

const closeAllAccordions = () => {
	accordionContents.forEach((el) => {
		el.style.maxHeight = '0';
	});
  accordionHeadings.forEach(el => {
    el.setAttribute('aria-expanded', 'false')
  })
};

accordions.forEach((accordion, index) => {
	accordion.addEventListener('click', (e) => {
		handleAccordionContent(e.target, index);
	});
});

window.addEventListener('resize', () => {
	accordions = document.querySelectorAll('.accordion');
  //akordeony nie maja clicka na zmianie z mobile na desktop i odwrotnie
  accordions.forEach((oldAccordion, index) => {
    const accordion = oldAccordion.cloneNode(true)
    accordion.addEventListener('click', (e) => {
      handleAccordionContent(e.target, index)
    })
    oldAccordion.replaceWith(accordion)
  })
  accordionContents = document.querySelectorAll('.accordion-content');
  accordionHeadings = document.querySelectorAll('.accordion-heading');
  prepAccordions()
});
window.addEventListener('click', outsideClick);
prepAccordions()