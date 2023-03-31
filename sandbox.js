const send = document.getElementById('send-money');
const remittance = document.getElementById('remittance');
const receive = document.getElementById('receive-money');
const request = document.getElementById('request-money');
const pay = document.getElementById('pay-bills');
const topup = document.getElementById('airtime-data');

const circleone = document.getElementById('one');
const circletwo = document.getElementById('two');
const circlethree = document.getElementById('three');
const circlefour = document.getElementById('four');
const circlefive = document.getElementById('five');
const circlesix = document.getElementById('six');

circleone.addEventListener('click', e => {
    remittance.style.display = 'none';
    receive.style.display = 'none';
    request.style.display = 'none';
    pay.style.display = 'none';
    topup.style.display = 'none';
    send.style.display = 'block';
    circleone.style.backgroundColor = "#F16725";
    circletwo.style.backgroundColor = "#F5F5F5";
    circlethree.style.backgroundColor = "#F5F5F5";
    circlefour.style.backgroundColor = "#F5F5F5";
    circlefive.style.backgroundColor = "#F5F5F5";
    circlesix.style.backgroundColor = "#F5F5F5";
});



circletwo.addEventListener('click', e => {
    remittance.style.display = 'block';
    receive.style.display = 'none';
    request.style.display = 'none';
    pay.style.display = 'none';
    topup.style.display = 'none';
    send.style.display = 'none';
    circleone.style.backgroundColor = "#F5F5F5";
    circletwo.style.backgroundColor = "#F16725";
    circlethree.style.backgroundColor = "#F5F5F5";
    circlefour.style.backgroundColor = "#F5F5F5";
    circlefive.style.backgroundColor = "#F5F5F5";
    circlesix.style.backgroundColor = "#F5F5F5";
});

circlethree.addEventListener('click', e => {
    remittance.style.display = 'none';
    receive.style.display = 'block';
    request.style.display = 'none';
    pay.style.display = 'none';
    topup.style.display = 'none';
    send.style.display = 'none';
    circleone.style.backgroundColor = "#F5F5F5";
    circletwo.style.backgroundColor = "#F5F5F5";
    circlethree.style.backgroundColor = "#F16725";
    circlefour.style.backgroundColor = "#F5F5F5";
    circlefive.style.backgroundColor = "#F5F5F5";
    circlesix.style.backgroundColor = "#F5F5F5";
});

circlefour.addEventListener('click', e => {
    send.style.display = 'none';
    remittance.style.display = 'none';
    receive.style.display = 'none';
    request.style.display = 'block';
    pay.style.display = 'none';
    topup.style.display = 'none';
    circleone.style.backgroundColor = "#F5F5F5";
    circletwo.style.backgroundColor = "#F5F5F5";
    circlethree.style.backgroundColor = "#F5F5F5";
    circlefour.style.backgroundColor = "#F16725";
    circlefive.style.backgroundColor = "#F5F5F5";
    circlesix.style.backgroundColor = "#F5F5F5";
});

circlefive.addEventListener('click', e => {
    send.style.display = 'none';
    remittance.style.display = 'none';
    receive.style.display = 'none';
    request.style.display = 'none';
    pay.style.display = 'block';
    topup.style.display = 'none';
    circleone.style.backgroundColor = "#F5F5F5";
    circletwo.style.backgroundColor = "#F5F5F5";
    circlethree.style.backgroundColor = "#F5F5F5";
    circlefour.style.backgroundColor = "#F5F5F5";
    circlefive.style.backgroundColor = "#F16725";
    circlesix.style.backgroundColor = "#F5F5F5";
});

circlesix.addEventListener('click', e => {
    send.style.display = 'none';
    remittance.style.display = 'none';
    receive.style.display = 'none';
    request.style.display = 'none';
    pay.style.display = 'none';
    topup.style.display = 'block';
    circleone.style.backgroundColor = "#F5F5F5";
    circletwo.style.backgroundColor = "#F5F5F5";
    circlethree.style.backgroundColor = "#F5F5F5";
    circlefour.style.backgroundColor = "#F5F5F5";
    circlefive.style.backgroundColor = "#F5F5F5";
    circlesix.style.backgroundColor = "#F16725";
});

//////////////// DESKTOP ///////////////////////////

const bizzle = document.getElementById('customer-one');
const mark = document.getElementById('customer-two');
const oluwatosin = document.getElementById('customer-three');
const ofonime = document.getElementById('customer-four');

const circleonea = document.getElementById('one-a');
const circletwob = document.getElementById('two-b');
const circlethreec = document.getElementById('three-c');
const circlefourd = document.getElementById('four-d');

circleonea.addEventListener('click', e => {
    bizzle.style.display = 'block';
    mark.style.display = 'none';
    oluwatosin.style.display = 'none';
    ofonime.style.display = 'none';
    circleonea.style.backgroundColor = "#F16725";
    circletwob.style.backgroundColor = "#F5F5F5";
    circlethreec.style.backgroundColor = "#F5F5F5";
    circlefourd.style.backgroundColor = "#F5F5F5";
});

circletwob.addEventListener('click', e => {
    bizzle.style.display = 'none';
    mark.style.display = 'block';
    oluwatosin.style.display = 'none';
    ofonime.style.display = 'none';
    circleonea.style.backgroundColor = "#F5F5F5";
    circletwob.style.backgroundColor = "#F16725";
    circlethreec.style.backgroundColor = "#F5F5F5";
    circlefourd.style.backgroundColor = "#F5F5F5";
});

circlethreec.addEventListener('click', e => {
    bizzle.style.display = 'none';
    mark.style.display = 'none';
    oluwatosin.style.display = 'block';
    ofonime.style.display = 'none';
    circleonea.style.backgroundColor = "#F5F5F5";
    circletwob.style.backgroundColor = "#F5F5F5";
    circlethreec.style.backgroundColor = "#F16725";
    circlefourd.style.backgroundColor = "#F5F5F5";
});

circlefourd.addEventListener('click', e => {
    bizzle.style.display = 'none';
    mark.style.display = 'none';
    oluwatosin.style.display = 'none';
    ofonime.style.display = 'block';
    circleonea.style.backgroundColor = "#F5F5F5";
    circletwob.style.backgroundColor = "#F5F5F5";
    circlethreec.style.backgroundColor = "#F5F5F5";
    circlefourd.style.backgroundColor = "#F16725";
});

const popup = document.querySelector('.nav-wrapper');
const close = document.querySelector('.close');
const popupContent = document.querySelector('.mobile-nav');
const mobileNav = document.querySelector('.mobile');

popup.addEventListener('click', e => {

    e.target.preventDefault();
    
    popup.style.display = 'none';
    popupContent.style.display = 'none';

});

close.addEventListener('click', e => {

    e.target.preventDefault();

    popup.style.display = 'none';
    popupContent.style.display = 'none';

});

mobileNav.addEventListener('click', e => {

    e.target.preventDefault();

    popup.style.display = 'block';
    popupContent.style.display = 'block';

});

const formOne = document.getElementById('form-one');
const errorOne = document.getElementById('email-error-one');
const email = document.getElementById('email');
const mobileError = document.getElementById('email-error-one-mobile');

formOne.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        email.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        errorOne.innerText = emailMessages.join(', ')
    } else {
        email.style.border = '#ccc9c9 2px solid';
        errorOne.style.display = 'none';
    }

    e.target.preventDefault();

});

formOne.addEventListener('submit', e => {
    e.preventDefault();
    
    let emailMessages = []
    if (email.value === '' || email.value == null) {
        emailMessages.push('Email is required')
        email.style.border = '2px solid crimson';
    }

    if (emailMessages.length > 0) {
        mobileError.innerText = emailMessages.join(', ')
    } else {
        email.style.border = '#ccc9c9 2px solid';
        mobileError.style.display = 'none';
    }

    e.target.preventDefault();

});

formOne.addEventListener('submit', e=> {
    const popup = document.querySelector('.popup-wrapper');
    const close = document.querySelector('.popup-close');
    const backToForm = document.querySelector('.back');
    
    if (email.value !== '' && email.value != null) {

        popup.style.display = 'block';

        close.addEventListener('click', e => {
            popup.style.display = 'none';
        })


        backToForm.addEventListener('click', e => {
            popup.style.display = 'none';
        });

    }
});