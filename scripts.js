document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        body.classList.add('light-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length === 0) {
        alert('Please select a file to convert.');
        return;
    }

    const file = fileInput.files[0];
    const resultContainer = document.getElementById('result-container');

    // Simulasi hasil konversi
    setTimeout(() => {
        resultContainer.innerHTML = `
            <p>File: ${file.name}</p>
            <a href="#" download>Download Converted File</a>
        `;
    }, 2000);
});
