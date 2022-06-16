const sendBtn = document.querySelector('#send-request');

sendBtn.addEventListener('click', getActivity);

function getActivity() {
    let url = 'http://www.boredapi.com/api/activity/';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
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
            activityLink.setAttribute('href', data['link']);
            activityAccess.textContent = `Activity accessibility: ${data['accessibility']}`;
        })
        .catch(function(error) {
            console.log(error);
        });
}