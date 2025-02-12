document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const celularInput = document.getElementById('celular');

    // Máscara para o campo de celular
    celularInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 2) {
            value = `(${value.slice(0,2)}) ${value.slice(2)}`;
        }
        if (value.length > 10) {
            value = `${value.slice(0,10)}-${value.slice(10)}`;
        }
        
        e.target.value = value;
    });

    // Manipulação do envio do formulário
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: celularInput.value,
        };

        try {
            // Aqui você implementaria a lógica de envio para seu backend
            console.log('Dados do formulário:', formData);
            
            // Feedback visual para o usuário
            alert('Obrigado! Você será notificado quando as inscrições abrirem.');
            form.reset();
            
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
    });
}); 