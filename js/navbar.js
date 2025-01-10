// Função para destacar o menu ativo
function setActiveMenu(itemId) {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => item.classList.remove('active'));
    const activeItem = document.getElementById(itemId);
    activeItem.classList.add('active');
}

// Adicionando evento de clique para os itens do menu
document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link
        setActiveMenu(item.id); // Define o item clicado como ativo
        const targetSection = document.querySelector(item.getAttribute('href')); // Obtém a seção alvo
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Faz scroll até a seção correspondente
        }
    });
});

// Função para mostrar/ocultar o menu e o idioma
function isMobileView() {
    return window.innerWidth <= 768; // Verifica se a largura da tela é menor ou igual a 768px
}

// Função para mostrar/ocultar o menu e o idioma
function toggleMenu() {
    if (isMobileView()) {
        const menu = document.querySelector('.ancors');
        const language = document.querySelector('.languages');

        if (menu && language) {
            menu.classList.toggle('show');
            language.classList.toggle('show');
        } else {
            console.error('Elemento .ancors ou .languages não encontrado.');
        }
    }
}


// Definir o item ativo inicial (HOME e BR)
document.addEventListener('DOMContentLoaded', () => {
    setActiveMenu('home');
    changeLanguage('BR');
});
