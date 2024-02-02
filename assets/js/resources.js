// Check if codes exists in localStorage
var codes = localStorage.getItem('codes');
if (!codes) {
    // If not, initialize it
    codes = ["code1", "code2", "code3"];
    localStorage.setItem('codes', JSON.stringify(codes));
} else {
    // If it does, parse it
    codes = JSON.parse(codes);
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    var enteredCode = document.getElementById('inputPassword2').value;

    var codeIndex = codes.indexOf(enteredCode);
    if (codeIndex !== -1) {
        var reflowAuth = localStorage.getItem('reflowAuth');
        var parsedReflowAuth = JSON.parse(reflowAuth);
        var email = parsedReflowAuth.profile.email;
        localStorage.setItem('resourceAccess', email);
        codes.splice(codeIndex, 1); // Remove the used code from the array
        // Update codes in localStorage
        localStorage.setItem('codes', JSON.stringify(codes));
        alert('Access granted!');
        location.reload(); // Refresh the page
    } else {
        alert('Invalid code. Try again.');
    }
});

window.onload = function() {
    console.log('Page has loaded');
    var resourceAccess = localStorage.getItem('resourceAccess');
    var reflowAuth = localStorage.getItem('reflowAuth');
    var parsedReflowAuth = JSON.parse(reflowAuth);

    if (parsedReflowAuth) {
        var email = parsedReflowAuth.profile.email;
        // Rest of your code...
        if (resourceAccess && resourceAccess === email) {
            console.log('Access granted');
            // Assuming the div has an id of 'hiddenDiv'
            var hiddenDiv = document.getElementById('hiddenDiv');
            console.log(hiddenDiv);
            hiddenDiv.hidden = false; // Unhide the div
        }
    } else {
        console.log('parsedReflowAuth is null');
    }
};