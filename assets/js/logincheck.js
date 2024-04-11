console.log(document.readyState);

console.log("TEST");
function checkLoginStatus() {
    console.log("RUNNING")
    try {
        var blocker = document.querySelector('.loginrequired');

        console.log(localStorage);
        var reflowAuth = localStorage.getItem('reflowAuth');
        console.log(reflowAuth);

        if (!reflowAuth) {
            console.log('reflowAuth: Not logged in');
            blocker.classList.add('active');
        } else {
            blocker.classList.remove('active');
        }

        blocker.addEventListener("click", function (event) {
            try {
                console.log('button clicked');
                console.log(localStorage);
                var reflowAuth = localStorage.getItem('reflowAuth');
                console.log(reflowAuth);

                if (!reflowAuth) {
                    event.preventDefault(); // Prevent default navigation
                    console.log('reflowAuth: Not logged in');

                    // Get the toast element
                    var notification = document.querySelector('.notification');
                    notification.style.display = 'block'; // or 'flex' if you're using a flex layout
                    // Hide the notification after 3 seconds
                    setTimeout(function() {
                        notification.style.display = 'none';
                    }, 3000);
                }
            } catch (error) {
                console.error('An error occurred in the click event handler:', error);
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

if(document.readyState === 'complete') {
    checkLoginStatus();
} else {
    //add delay
    window.on('load', checkLoginStatus);
}