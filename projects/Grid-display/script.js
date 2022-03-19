const gridSections = document.querySelectorAll('.gridSection');
gridSections.forEach((gridSection) => {
  let gridContainer = gridSection.querySelector('.gridContainer');
  let propertiesWrappers = gridSection.querySelectorAll('.properties__wrapper');

  propertiesWrappers.forEach((propertiesWrapper) => {
    let propertiesValue = propertiesWrapper.querySelector('.properties__value');
    let propertySyntax = propertiesWrapper.querySelector('.properties__text').getAttribute('data-prop');

    propertiesValue.addEventListener('change', (e)=> {
      console.log(gridContainer.style[propertySyntax])
      gridContainer.style[propertySyntax] = e.target.options[e.target.selectedIndex].text;
    })
  })

})