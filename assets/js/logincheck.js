window.addEventListener("DOMContentLoaded", () => {
    try {
        var buttons = document.getElementsByClassName('restrict-button');

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function (event) {
                try {
                    console.log('button clicked');
                    console.log(localStorage);
                    var reflowAuth = localStorage.getItem('reflowAuth');
                    console.log(reflowAuth);

                    if (!reflowAuth) {
                        event.preventDefault(); // Prevent default navigation
                        console.log('reflowAuth: Not logged in');

                        // Get the toast element
                        var toastEl = document.getElementById('liveToast');

                        // Create a new toast instance
                        var toast = new bootstrap.Toast(toastEl);

                        // Show the toast
                        toast.show();
                    }
                } catch (error) {
                    console.error('An error occurred in the click event handler:', error);
                }
            });
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});