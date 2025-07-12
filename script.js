document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.test-box');
    if (box) {
        box.textContent = 'JS Loaded!';
        console.log('Script running');
    } else {
        console.log('Box not found');
    }
});