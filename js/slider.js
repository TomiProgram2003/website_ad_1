(function(){

  // sliders
  const sliders = [...document.querySelectorAll('.testimony__body')]
  let value

  // buttons
  const buttonBefore = document.querySelector('#before')
  const buttonNext   = document.querySelector('#next')
  
  // action before
  buttonBefore.addEventListener('click', () => {
    changePosition(-1)
  })
  
  // action next
  buttonNext.addEventListener('click', () => {
    changePosition(1)
  })

  // change position
  const changePosition = (add) => {
    const currentTestimony = document.querySelector('.testimony__body--show').dataset.id

    // set pos value
    value = Number(currentTestimony)
    value += add
    if (value === sliders.length+1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    // remove show
    sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')

    // add show
    sliders[value-1].classList.add('testimony__body--show')
  }
})();