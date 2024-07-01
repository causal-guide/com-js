// Membaca data JSON dari server PHP di test1.com
fetch('http://test1.com/data.json')
.then(response => response.json())
.then(data => {
    console.log('Data yang dibaca dari server PHP:', data); // Menampilkan data JSON dari server
})
.catch(error => {
    console.error('Error:', error);
});
