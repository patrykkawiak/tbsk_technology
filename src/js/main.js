const mobileMenuToggler = document.querySelector('.mobile__toggler')

const handleMobileToggle = () => {
  const isActive = mobileMenuToggler.getAttribute('data-active')
  console.log(!!isActive);
  mobileMenuToggler.setAttribute('data-active', isActive)
}

mobileMenuToggler.addEventListener('click', handleMobileToggle)