


document.addEventListener("scroll", function() {
    const overlay = document.getElementById("sliding-overlay");
    const overlayPosition = overlay.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const interactiveSection = document.getElementById("interactive-characters");
    const interactivePosition = interactiveSection.getBoundingClientRect().top;

        // Control visibility of the sliding overlay
        if (overlayPosition < windowHeight && overlayPosition > 0) {
            overlay.style.opacity = "1";
        } else {
            overlay.style.opacity = "0";
        }
    
        // Control visibility of the interactive section
        if (interactivePosition < windowHeight && interactivePosition > 0) {
            interactiveSection.style.opacity = "1";
        } else {
            interactiveSection.style.opacity = "0";
        }
});

function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    
    // Toggle the "show" class to display or hide the popup
    popup.classList.toggle("show");
}

