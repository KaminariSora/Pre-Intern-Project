document.getElementById('csvForm').addEventListener('submit', () => {
    // hide upload form
    const formEvent = document.getElementById('container');
    const dataTable = document.getElementById('dataTable');
    formEvent.style.opacity = 0
    dataTable.style.opacity = 1
    formEvent.style.position = 'absolute'
  })