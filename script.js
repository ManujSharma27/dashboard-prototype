document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.test-box');
    if (box) {
        box.textContent = 'JS Loaded!';
        console.log('Script running at ' + new Date().toLocaleTimeString());
    } else {
        console.log('Box not found at ' + new Date().toLocaleTimeString());
    }
    const cssLink = document.querySelector('link[href="./styles.css"]');
    if (cssLink && cssLink.sheet) {
        console.log('CSS loaded at ' + new Date().toLocaleTimeString());
    } else {
        console.log('CSS not loaded at ' + new Date().toLocaleTimeString());
    }
});