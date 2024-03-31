// Check if codes exists in localStorage
var codes = localStorage.getItem('codes');
if (!codes) {
    // If not, initialize it
    codes = [
        { codes: ["A3H7P6", "D5R9Q2"], divId: "hiddenDiv1" },
        { codes: ["G8F4T9", "K2L6J7", "M1N5R3", "S9T2E4"], divId: "hiddenDiv2" }
    ];
    localStorage.setItem('codes', JSON.stringify(codes));
} else {
    // If it does, parse it
    codes = JSON.parse(codes);
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally

    var enteredCode = document.getElementById('inputPassword2').value;

    var codeObject = codes.find(obj => obj.codes.includes(enteredCode));
    if (codeObject) {
        var reflowAuth = localStorage.getItem('reflowAuth');
        var parsedReflowAuth = JSON.parse(reflowAuth);
        var email = parsedReflowAuth.profile.email;
        var resourceAccess = JSON.parse(localStorage.getItem('resourceAccess')) || [];
        resourceAccess.push({ email: email, divId: codeObject.divId });
        localStorage.setItem('resourceAccess', JSON.stringify(resourceAccess));
        codeObject.codes = codeObject.codes.filter(code => code !== enteredCode); // Remove the used code from the array
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
    var resourceAccess = JSON.parse(localStorage.getItem('resourceAccess')) || [];
    var reflowAuth = localStorage.getItem('reflowAuth');
    var parsedReflowAuth = JSON.parse(reflowAuth);

    if (parsedReflowAuth) {
        var email = parsedReflowAuth.profile.email;
        // Rest of your code...
        resourceAccess.forEach(function(access) {
            if (access.email === email) {
                console.log('Access granted');
                // Assuming the div has an id of 'hiddenDiv'
                var hiddenDiv = document.getElementById(access.divId);
                console.log(hiddenDiv);
                hiddenDiv.hidden = false; // Unhide the div
            }
        });
    } else {
        console.log('parsedReflowAuth is null');
    }
};