const sendBtn = document.querySelector('#send-request');
const activityDiv = document.querySelector('.activity');

sendBtn.addEventListener('click', getActivity);

function getActivity() {
    let url = 'http://www.boredapi.com/api/activity/';
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let activity = data;
            activityDiv.textContent = JSON.stringify(activity, null, "    ");
        })
        .catch(function(error) {
            console.log(error);
        });
}