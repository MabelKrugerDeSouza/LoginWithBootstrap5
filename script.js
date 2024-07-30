document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const enviarBtn = document.getElementById('sendBtn');
  
    enviarBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const requiredFields = form.querySelectorAll('[required]');
      
        let allFieldsFilled = true;
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            allFieldsFilled = false;
          }
        });
    
        if (allFieldsFilled) {
          window.location.href = 'index.html';
        } 
      });
});