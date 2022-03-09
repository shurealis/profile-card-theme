const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {

        const color = e.currentTarget.classList;

        if (color.contains('btn1')) {
            theme.style.setProperty('--theme-color', '#06b6d4');
        } else if (color.contains('btn2')) {
            theme.style.setProperty('--theme-color', '#6d28d9');
        } else if (color.contains('btn3')) {
            theme.style.setProperty('--theme-color', '#e11d48');
        } else if (color.contains('btn4')) {
            theme.style.setProperty('--theme-color', '#059669');
        } else if (color.contains('btn5')) {
            theme.style.setProperty('--theme-color', '#4b5563');
        }
    });
});