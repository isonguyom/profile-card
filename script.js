// Function to update UTC time
function updateUTCTime() {
    const utcTimeElement = document.querySelector("[data-testid='currentTimeUTC']");
    const now = new Date();
    const utcTimeString = now.toISOString().replace("T", " ").split(".")[0] + " UTC"; 
    utcTimeElement.textContent = `Current UTC Time: ${utcTimeString}`;
}

// Update time on page load
updateUTCTime();
