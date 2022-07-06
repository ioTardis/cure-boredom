//Targeting input DOM nodes with selectors

const sendBtn = document.querySelector('#send-request');
const typeBtn = document.querySelector('#typeBtn');
const partBtn = document.querySelector('#partBtn');
const priceBtn = document.querySelector('#priceBtn');
const clearBtn = document.querySelector('#clear-parameters');
const typeInput = document.querySelector('#type');
const partInput = document.querySelector('#participants');
const priceInput = document.querySelector('#price');

//Activation parameter "type" input

typeBtn.addEventListener('click', () => {
    typeInput.disabled = false;
    partInput.disabled = true;
    partInput.value = '';
    priceInput.disabled = true;
    priceInput.value = '';
});

//Activation parameter "participants" input

partBtn.addEventListener('click', () => {
    partInput.disabled = false;
    typeInput.disabled = true;
    typeInput.value = '';
    priceInput.disabled = true;
    priceInput.value = '';
});

//Activation parameter "price" input

priceBtn.addEventListener('click', () => {
    priceInput.disabled = false;
    partInput.disabled = true;
    partInput.value = '';
    typeInput.disabled = true;
    typeInput.value = '';
});

//Event for sending an API request

sendBtn.addEventListener('click', getActivity);

clearBtn.addEventListener('click', () => {
    document.location.reload();
})

//Function to construct and send an API request

function getActivity() {
    const api = 'http://www.boredapi.com/api/activity/';
    let url = '';
    if (typeInput.value != '') {
        url = api + '?type=' + typeInput.value;
    } else if (partInput.value != '') {
        url = api + '?participants=' + partInput.value;
    } else if (priceInput.value != '') {
        url = api + '?price=' + priceInput.value;
    } else url = api;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayActivity(data);
        })
        .catch(function(error) {
        });
}

//Rendering function for received activity

function displayActivity(data) {

    //Targeting DOM nodes for displaying activity

    const activityName = document.querySelector('#activity-name');
    const activityKey = document.querySelector('#activity-key');
    const activityType = document.querySelector('#activity-type');
    const activityPart = document.querySelector('#activity-participants');
    const activityPrice = document.querySelector('#activity-price');
    const activityLink = document.querySelector('#activity-link');
    const activityAccess = document.querySelector('#activity-accessibility');
 
    activityName.textContent = data['activity'];
    activityKey.textContent = data['key'];
    activityType.textContent = `Activity type: ${data['type']}`;
    activityPart.textContent = `Number of participants: ${data['participants']}`;
    activityPrice.textContent = `Activity price: ${data['price']}`;
    activityAccess.textContent = `Activity accessibility: ${data['accessibility']}`;
    
    //Rendering a link

    if (data['link'] != '') {
        activityLink.textContent = '';
        const a = document.createElement('a');
        a.setAttribute('href', data['link']);
        a.textContent = 'Link';
        activityLink.appendChild(a);
    } else activityLink.textContent = 'No link';
}