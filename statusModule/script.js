// script.js
document.getElementById('csvForm').addEventListener('submit', async function(event) {
  event.preventDefault();

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
    const dataBody = document.getElementById("dataBody");

    if (!Array.isArray(data) || data.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='4'>No data available</td></tr>";
      return;
    }

    console.log(data)
  
    data.forEach(item => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.LastName}</td>
        <td>${item.Position}</td>
        <td>${item.time}</td>
      `;
      
      dataBody.appendChild(row);
    });
}
