let accordions = document.querySelectorAll('.accordion');
let accordionContents = document.querySelectorAll('.accordion-content');

const prepAccordions = () => {
	accordionContents.forEach((content) => {
		content.style.maxHeight = '0';
	});
};

const handleAccordionContent = (target, index) => {
	const accordionContent = accordionContents[index];
	if (accordionContent.style.maxHeight != '0px' && target.classList.contains('accordion-heading')) {
		accordionContent.style.maxHeight = '0px';
	} else {
		closeAllAccordions();
		const accordionHeight = accordionContents[index].scrollHeight;
		accordionContent.style.maxHeight = `${accordionHeight}px`;
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
};

accordions.forEach((accordion, index) => {
	accordion.addEventListener('click', (e) => {
		handleAccordionContent(e.target, index);
	});
});

window.addEventListener('resize', () => {
	accordions = document.querySelectorAll('.accordion');
	accordionContents = document.querySelectorAll('.accordion-content');
});
window.addEventListener('click', outsideClick);
prepAccordions();
























=== !== == != =>> => -> 

const Component = (index, props) => {
	let timeSpy = false;
}