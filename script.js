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
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            
            // Номер WhatsApp в международном формате (без +)
            const whatsappNumber = "77472080709"; 
            
            // Текст сообщения для мастера
            const message = `Здравствуйте! Меня зовут ${name}, и я хочу записаться на прием.`;
            
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            // Открываем чат WhatsApp в новой вкладке
            window.open(whatsappUrl, '_blank');
            
            // Очищаем форму
            bookingForm.reset();
        });
    }
});