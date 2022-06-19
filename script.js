const sendBtn = document.querySelector('#send-request');

sendBtn.addEventListener('click', getActivity);

function getActivity() {
    const keyField = document.querySelector('#key').value;
    console.log(keyField);
    if (keyField != 0) {
        const api = 'http://www.boredapi.com/api/activity/';
        let url = api + '?key=' + keyField;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            displayActivity(data);
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}

function displayActivity(data) {
    // const activityDiv = document.querySelector('.activity');
    // if (data['error'] != 0) activityDiv.textContent = 'No activity with this key';
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
    if (data['link'] != '') {
        activityLink.textContent = '';
        const a = document.createElement('a');
        a.setAttribute('href', data['link']);
        a.textContent = 'Link';
        activityLink.appendChild(a);
    } else activityLink.textContent = 'No link';
    activityAccess.textContent = `Activity accessibility: ${data['accessibility']}`;
}