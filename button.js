const dwnld = document.querySelector('.download');

const file = 'https://drive.google.com/file/d/134eA1dLKYUAfAboFt1Z61jiUlP_S1wCc/view?usp=drivesdk';


const initTimer = () => {
    let timer = dwnld.dataset.timer;
    dwnld.classList.add('timer');

    dwnld.innerHTML = `Your file will download in <b>${timer}</b> seconds`;



    const initCounter = setInterval(() => {
        if(timer > 0){

        timer--;
       
        return dwnld.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
        }
        
        clearInterval(initCounter);

        location.href = file;

        dwnld.textContent = "Your file is downloading...";

    },1000)

}


dwnld.addEventListener('click', initTimer);









