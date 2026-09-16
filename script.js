document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal for treatments
    const treatmentRows = document.querySelectorAll('.treatment-row');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        treatmentRows.forEach(row => {
            const rowTop = row.getBoundingClientRect().top;
            
            if (rowTop < triggerBottom) {
                row.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger initially

    // WhatsApp Booking Logic
    const bookingForm = document.getElementById('bookingForm');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const treatment = document.getElementById('treatment').value;
        
        // Define the WhatsApp number here (International format without + or 00)
        const whatsappNumber = "1234567890"; 
        
        const message = `Hello, my name is ${name} and I would like to book a session for ${treatment}.`;
        
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        
        // Open WhatsApp chat in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Optionally reset the form
        bookingForm.reset();
    });
});
