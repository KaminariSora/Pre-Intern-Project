document.getElementById('csvForm').addEventListener('submit', () => {
    // hide upload form
    const formEvent = document.getElementById('container');
    const hidden = document.getElementById('hide');
    formEvent.style.opacity = 0
    hidden.style.opacity = 1
    formEvent.style.position = 'absolute'
  })