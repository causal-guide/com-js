// Mengirim data dari JavaScript di test.com ke server PHP di test1.com
fetch('http://test1.com/process.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' }) // Data yang ingin dikirim dalam bentuk JSON
})
.then(response => response.json())
.then(data => {
    console.log('Respons dari server PHP:', data); // Menampilkan respons dari server
})
.catch(error => {
    console.error('Error:', error);
});
