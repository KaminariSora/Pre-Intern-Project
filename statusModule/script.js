// script.js
document.getElementById('csvForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  // hide upload form
  const formEvent = document.getElementById('container');
  formEvent.style.opacity = 0
  formEvent.style.position = 'absolute'

  const formData = new FormData();
  const fileInput = document.getElementById('csvFile');
  formData.append('csvFile', fileInput.files[0]);

  const response = await fetch('http://127.0.0.1:5000/upload', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log(result)
  displayHeaders(result.data);
});

function displayHeaders(data) {
    const dataList = document.getElementById("headerList");

    console.log(data)
    const ul = document.createElement('ul');
  
    data.map(item => {
      console.log(item)
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>Name:</strong> ${item.name} <br>
        <strong>Last Name:</strong> ${item.LastName} <br>
        <strong>Position:</strong> ${item.Position} <br>
        <strong>Time:</strong> ${item.time}
      `;
      ul.appendChild(li);
    });
  
    dataList.appendChild(ul);
}
