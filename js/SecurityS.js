function checkBrowser() {
            var userAgent = navigator.userAgent.toLowerCase();

            // Check if the browser is Chrome (and not Edge or other Chromium-based browsers)
            if (userAgent.indexOf('chrome') === -1 || userAgent.indexOf('edge') !== -1 || userAgent.indexOf('opr') !== -1 || userAgent.indexOf('safari') !== -1) {
                // If it's not Chrome, show an alert or redirect the user
                alert("Warning:You Can Only Play on chrome")
                // Optionally, you can redirect:
                window.location.href = "https://www.google.com/chrome/";
            }
        }

        window.onload = checkBrowser;