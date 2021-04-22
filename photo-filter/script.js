const labels = document.querySelectorAll('label');
root = document.querySelector(':root');
let nameFilter;
labels.forEach(elem => {
    elem.querySelector('input').addEventListener('input', e => {
    elem.querySelector('output').value = e.target.value;
    nameFilter = `--${e.target.name}`;
    root.style.setProperty(`${nameFilter}`, `${e.target.value}${e.target.dataset.sizing}`);
    });
});

const reset = document.querySelector('.btn-reset');
reset.addEventListener('click', elem => {
    root.style.setProperty('--blur', '');
    labels.forEach(e => {
        if(e.querySelector('input').name === 'saturate') {
            e.querySelector('output').value = 100;
            e.querySelector('input').value = 100;
            root.style.setProperty(`--${e.querySelector('input').name}`,'');
        }
        else {
            e.querySelector('output').value = 0;
            e.querySelector('input').value = 0;
            root.style.setProperty(`--${e.querySelector('input').name}`,'');
        }
    })
})