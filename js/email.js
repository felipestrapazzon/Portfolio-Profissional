// Substitua pela sua chave pública do EmailJS
const EMAILJS_PUBLIC_KEY = "eB0s3AusnlcvMQfZt";
const EMAILJS_SERVICE_ID = "service_lvj64bp";
const EMAILJS_TEMPLATE_ID = "template_eehgd7q";

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Função para enviar o formulário
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const submitButton = document.querySelector("#contact-form button");

    // Desativar o botão enquanto envia
    submitButton.disabled = true;

    emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(
            () => {
                // Sucesso: alterar o botão para verde com mensagem de sucesso e aumentar levemente o tamanho
                submitButton.textContent = "Enviado com sucesso!";
                submitButton.style.backgroundColor = "#7ADE45";
                submitButton.disabled = false;

                // Limpar o formulário após o envio
                document.getElementById("contact-form").reset();

                // Restaurar o botão ao estado original após 3 segundos
                setTimeout(() => {
                    submitButton.textContent = "Enviar";
                    submitButton.style.backgroundColor = "var(--cor-destaque-roxa)";
                }, 3000);
            },
            (error) => {
                console.error("Erro:", error);

                // Erro: alterar o botão para vermelho com mensagem de erro e reduzir levemente o tamanho
                submitButton.textContent = "Erro ao enviar!";
                submitButton.style.backgroundColor = "red";
                submitButton.style.transform = "scale(0.9)"; // Reduz o botão suavemente
                submitButton.disabled = false;

                // Restaurar o botão ao estado original após 3 segundos
                setTimeout(() => {
                    submitButton.textContent = "Enviar";
                    submitButton.style.backgroundColor = "var(--cor-destaque-roxa)";
                }, 3000);
            }
        );
});
