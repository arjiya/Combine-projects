fetch('emojichooser.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('emoji-container');
        container.innerHTML = `
            <p>Happy: ${data.happy}</p>
            <p>Sad: ${data.sad}</p>
            <p>Love: ${data.love}</p>
        `;
    })
    .catch(error => console.error('Error loading emojis:', error));
