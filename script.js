// script.js

document.addEventListener('DOMContentLoaded', () => {

    const getStartedButton = document.getElementById('getStartedButton');
    const emailInput = document.getElementById('emailInput');
    const languageSelect = document.getElementById('languageSelect');
    const signInButton = document.getElementById('signInButton');

    // Function to handle the Get Started button click
    if (getStartedButton && emailInput) {
        getStartedButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent actual form submission if it was in a form

            const emailAddress = emailInput.value;

            if (emailAddress && emailAddress.includes('@') && emailAddress.includes('.')) {
                // Basic email validation alert
                alert(`Starting registration for: ${emailAddress}`);
                // In a real app, you would redirect the user or show a new form here
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Function to handle language changes (placeholder logic)
    if (languageSelect) {
        languageSelect.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            console.log(`Language changed to: ${selectedLanguage}`);
            // In a real app, you would use a localization library here
            alert(`Language function not fully implemented yet. Selected: ${selectedLanguage}`);
        });
    }

    // Function to handle Sign In button click (placeholder logic)
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            alert('Sign In functionality not implemented yet.');
        });
    }
});
