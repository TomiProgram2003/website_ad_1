(function(){

  // get title questions node
  const titleQuestions = [...document.querySelectorAll('.questions__title')];
  
  // add clik event to nodes
  titleQuestions.forEach((question) => {
    question.addEventListener('click', () => {
      let height = 0 // initial height
      let answer = question.nextElementSibling // next node
      let addPadding = question.parentElement.parentElement // parent parent node

      // toggle padding
      addPadding.classList.toggle('questions__padding--add')
      
      // togle arrow direction
      question.children[0].classList.toggle('questions__arrow--rotate')

      // if answer.height is 0, set min height
      if (answer.clientHeight === 0) {
        height = answer.scrollHeight;
      }

      // set style height
      answer.style.height = `${height}px`
    })
  })


})();