const alex = document.querySelector('.alex');
const pipe = document.querySelector('.pipe');

const jump = () => {
    alex.classList.add('jump');

    setTimeout(()=> {

        alex.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const alexPosition = +window.getComputedStyle(alex).bottom.replace('px', '');
    
    if (pipePosition <= 130 && pipePosition > 0 && alexPosition < 100 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        alex.style.animation = 'none';
        alex.style.bottom = `${pipePosition}px`;

        alex.src = './imagens/game-over.gif';
        /*alex.style.width = '75px'
        alex.style.marginLeft = '50px'*/

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);