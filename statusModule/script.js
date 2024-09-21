document.getElementById('csvForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  const formData = new FormData();
  const fileField = document.getElementById('csvFile');

  if (!fileField.files.length) {
    alert('Please select a file first!');
    return;
  }

  formData.append('csvFile', fileField.files[0]);

  fetch('http://localhost:5000/upload', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        alert('Error: ' + data.error);
        return;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
