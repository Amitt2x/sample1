function toggleDetails(eventId, headerElement) {
    var eventDetails = document.getElementById(eventId);
    var icon = headerElement.querySelector('.fas');
    var isExpanded = headerElement.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
        eventDetails.style.display = "none";
        icon.style.transform = "rotate(0deg)";
        headerElement.setAttribute('aria-expanded', 'false');
    } else {
        eventDetails.style.display = "block";
        icon.style.transform = "rotate(180deg)";
        headerElement.setAttribute('aria-expanded', 'true');
    }
}

// Close all details when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.matches('.event h2, .event h2 *')) {
        var allDetails = document.querySelectorAll('.event-details');
        var allHeaders = document.querySelectorAll('.event h2');
        var allIcons = document.querySelectorAll('.event h2 .fas');
        
        allDetails.forEach(function(detail) {
            detail.style.display = "none";
        });
        
        allHeaders.forEach(function(header) {
            header.setAttribute('aria-expanded', 'false');
        });
        
        allIcons.forEach(function(icon) {
            icon.style.transform = "rotate(0deg)";
        });
    }
});