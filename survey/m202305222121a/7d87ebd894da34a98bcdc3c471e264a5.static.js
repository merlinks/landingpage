//URl Params



window.addEventListener('DOMContentLoaded', () => {

    //timer
    let startingMinutes = 4;
    let time = startingMinutes * 60;

    const mins = document.querySelector('.mins')
    const secs = document.querySelector('.secs')

    

    
    function updateCountdown() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60
        seconds = seconds < 10 ? '0' + seconds : seconds;

        mins.innerHTML = `${minutes}`;
        secs.innerHTML = `${seconds}`;

        if(minutes <= 0 && seconds <= 0) {
            clearInterval(x)
        }

        time--
    }

    const x = setInterval(updateCountdown, 1000)


    let counter = 1;

    const firstModal = document.querySelector('.__firstModal');
    const secondModal = document.querySelector('.__secondModal');
    const thirdModal = document.querySelector('.__thirdModal');
    const fourthModal = document.querySelector('.__fourthModal');

    const okButton = document.querySelector('.__okButton');
    const tryLuckButton = document.querySelector('.__tryLuckButton');
    const tryAgainButton = document.querySelector('.__tryAgainButton');
    const toRedirect = document.querySelector('.ctaButton');

    const canvasConfetti = document.querySelector('#canvas');
    const questionsList = document.querySelector('.questions__list');
    const verify = document.querySelector('.verify');
    const boxes = document.querySelector('.boxes');

    const buttonFirst = document.querySelectorAll('.button--first');
    const buttonSecond = document.querySelectorAll('.button--second');
    const buttonThird = document.querySelectorAll('.button--third');
    const buttonFourth = document.querySelectorAll('.button--fourth');
    const lists = document.querySelectorAll('.list');
    const steps = document.querySelectorAll('.step');
    const verifyImg = document.querySelectorAll('.verify__img');
    const verifyP = document.querySelectorAll('.verify__p');

    const prizeCopy = document.querySelector('.prizeCopy')

    function closeModal() {
        firstModal.classList.add('modal--close');
    }

    function removeConfetti() {
        canvasConfetti.style.zIndex = -10;
    }

    function onModalButton() {
        closeModal();
        removeConfetti();
    }

    function onTryYourLuck() {
        secondModal.classList.add('modal--close');
        boxes.classList.add('boxes--pointer');
        canvasConfetti.remove();
    }
    
    function onTryAgain() {
        thirdModal.classList.add('modal--close');
        boxes.classList.add('boxes--pointer');
    }
    
    function showNextStep(index) {
        
        lists[index - 1].classList.remove('list--active');
        lists[index].classList.add('list--active');
        steps[index - 1].classList.remove('step--active');
        steps[index].classList.add('step--active');
    }

    function toVerify() {
        prizeCopy.classList.add('d-none')
        applyVerifyInterface();
        applyTimeout();
    }

    function applyVerifyInterface() {
        questionsList.classList.add('questions__list--none');
        verify.classList.remove('verify--none');
    }

    function applyTimeout() {
        setTimeout( () => applyTimeoutTemplate(0, 'You have answered all 4 questions.'), 2000);
        setTimeout( () => applyTimeoutTemplate(1, 'Your IP address is valid for this promotion'), 4000);
        setTimeout( () => applyTimeoutTemplate(2, 'Gifts are available and in stock!'), 6000);
        setTimeout( () => showPrizesBoxes(), 8000);
    }

    function applyTimeoutTemplate(index, text) {
        verifyImg[index].setAttribute('src', 'img/checked.png');
        verifyP[index].innerHTML = text;
        verifyP[index].classList.add('verify--bold');
    }

    function showPrizesBoxes() {
        verify.classList.add('verify--none');
        secondModal.classList.remove('modal--close');
        secondModal.classList.add('modal--open');
        boxes.classList.remove('boxes--none');
    }

    function showIphone(target) {
        const iphoneParent = target.closest('.box__item');
        const iphone = iphoneParent.querySelector('.box__image--third');     
        iphone.classList.add('animateIphone');
    }

    function showTryAgainModal() {
        thirdModal.classList.remove('modal--close');
        thirdModal.classList.add('modal--open');
        boxes.classList.remove('boxes--pointer');
    }

    boxes.addEventListener('click', onBox);

    function onBox(event) {
        const target = event.target;

        switch(true) {
            case counter === 1 && target.classList.contains('box__image--first'): 
                counter++;
                target.classList.add('animateBox');
                setTimeout(() => showTryAgainModal(), 1500);
                break;
            case counter === 2 && target.classList.contains('box__image--first'): 
                counter++;
                target.classList.add('animateBox');
                showIphone(target);
                setTimeout(() => showFinalModal(), 1500);
                break;
        }
    }

    function showFinalModal() {
        fourthModal.classList.remove('modal--close');
        fourthModal.classList.add('modal--open');
        boxes.classList.remove('boxes--pointer');
    }

    function toOffer() {
        window.location.replace(`http://www.bespin2win.com/click`);
    }

    // okButton.addEventListener('click', onModalButton);
    tryLuckButton.addEventListener('click', onTryYourLuck);
    tryAgainButton.addEventListener('click', onTryAgain);

    buttonFirst.forEach(button => button.addEventListener('click', () => showNextStep(1)));
    buttonSecond.forEach(button => button.addEventListener('click', () => showNextStep(2)));
    buttonThird.forEach(button => button.addEventListener('click', () => showNextStep(3)));
    buttonFourth.forEach(button => button.addEventListener('click', toVerify));
    toRedirect.addEventListener('click', toOffer);
});