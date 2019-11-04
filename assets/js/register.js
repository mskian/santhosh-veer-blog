var el = document.querySelector('#signData');
if (el) {
    el.addEventListener('submit', signData);
}

function signData(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    const send = document.querySelector('#push');
    send.classList.add("is-loading");
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == 0) {
        console.log('Empty input');
        send.classList.remove('is-loading');
        document.getElementById('notice').innerHTML = '<div class="notification is-danger">Empty input</div>';
    } else if (!reg.test(email)) {
        setTimeout(() => {
            send.classList.remove('is-loading');
            console.log('Enter a Valid Email ID');
            document.getElementById('notice').innerHTML = '<div class="notification is-danger">Enter a Valid Email ID</div>';
            return false;
        }, 800);
    } else {
        setTimeout(() => {
            send.classList.remove('is-loading');
            document.getElementById('notice').innerHTML = '<div class="notification is-success">Check your Email inbox and click the link to complete signin</div>';
        }, 2000);
    }
}

var el = document.querySelector('#sigupData');
if (el) {
    el.addEventListener('submit', sigupData);
}

function sigupData(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    const appload = document.querySelector('#pushdata');
    appload.classList.add('is-loading');
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == 0) {
        console.log('Empty input');
        appload.classList.remove('is-loading');
        document.getElementById('registernotice').innerHTML = '<div class="notification is-danger">Empty input</div>';
    } else if (!reg.test(email)) {
        setTimeout(() => {
            appload.classList.remove('is-loading');
            console.log('Enter a Valid Email ID');
            document.getElementById("registernotice").innerHTML = '<div class="notification is-danger">Enter a Valid Email ID</div>';
            return false;
        }, 800);
    } else {
        setTimeout(() => {
            appload.classList.remove('is-loading');
            document.getElementById('registernotice').innerHTML = '<div class="notification is-success">Check your Email inbox and click the link to confirm your subscription</div>';
        }, 2000);
    }
}
