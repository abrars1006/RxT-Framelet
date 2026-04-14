document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            try {
                // Collect form fields
                const name = document.getElementById('name').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const type = document.getElementById('type').value;
                const date = document.getElementById('date').value;
                const location = document.getElementById('location').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Format WhatsApp Message
                let waMessage = `Hello RxT Framelet 📸,\n\n`;
                waMessage += `New Booking Enquiry:\n\n`;
                waMessage += `Name:\n${name}\n\n`;
                waMessage += `Phone:\n${phone}\n\n`;
                waMessage += `Shoot Type:\n${type}\n\n`;
                waMessage += `Date:\n${date}\n\n`;
                waMessage += `Location:\n${location}\n\n`;
                waMessage += `Message:\n${message}`;
                
                // Encode the message using encodeURIComponent
                const encodedMessage = encodeURIComponent(waMessage);
                
                // Open WhatsApp link in a new tab smoothly
                const whatsappUrl = `https://wa.me/919344833734?text=${encodedMessage}`;
                
                // Pop-up logic fallback
                let newWindow = window.open(whatsappUrl, '_blank');
                if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
                    // Fallback to strict href if pop-ups are blocked by Safari/Chrome mobile
                    window.location.href = whatsappUrl;
                }
            } catch (err) {
                console.error("Booking submission error:", err);
            }
        });
    }
});
