
buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

clearButton.addEventListener('click', () => {
    display.textContent = '';
});
