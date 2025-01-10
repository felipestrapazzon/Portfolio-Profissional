// Atualizar a data no lado esquerdo do footer
const footerLeft = document.getElementById("footer-left");
const currentDate = new Date();
footerLeft.textContent = `${currentDate.toLocaleDateString("pt-BR")}`;
