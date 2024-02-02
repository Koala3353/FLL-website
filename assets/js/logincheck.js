window.addEventListener("DOMContentLoaded", (event) => {
    var buttons = document.getElementsByClassName('restrict-button');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function (event) {
            console.log('button clicked');
            var reflowAuth = localStorage.getItem('reflowAuth');

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
        });
    }
});