// // Função para destacar o menu ativo
// function setActiveMenu(itemId) {
//     const menuItems = document.querySelectorAll('.menu-item');
//     menuItems.forEach((item) => item.classList.remove('active'));
//     const activeItem = document.getElementById(itemId);
//     activeItem.classList.add('active');
// }

// // Função para destacar a linguagem ativa
// function changeLanguage(language) {
//     const langItems = document.querySelectorAll('.lang-item');
//     langItems.forEach((item) => item.classList.remove('active'));
//     const activeLang = document.getElementById(language.toLowerCase());
//     activeLang.classList.add('active');
// }

// // Adicionando evento de clique para os itens do menu
// document.querySelectorAll('.menu-item').forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault(); // Impede o comportamento padrão do link
//         setActiveMenu(item.id); // Define o item clicado como ativo
//         const targetSection = document.querySelector(item.getAttribute('href')); // Obtém a seção alvo
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' }); // Faz scroll até a seção correspondente
//         }
//     });
// });

// // Definir o item ativo inicial (HOME e BR)
// document.addEventListener('DOMContentLoaded', () => {
//     setActiveMenu('home');
//     changeLanguage('BR');
// });




// function toggleMenu() {
//     const menu = document.querySelector('.ancors');
//     const language = document.querySelector('.languages');

//     if (menu && language) {
//         menu.classList.toggle('show');
//         language.classList.toggle('show');
//     } else {
//         console.error('Elemento .ancors ou .languages não encontrado.');
//     }
// }






// // Textos em diferentes idiomas
// const translations = {
//     BR: {
//         home: "HOME",
//         servicos: "SERVIÇOS",
//         sobre: "SOBRE",
//         projetos: "PROJETOS",
//         contatos: "CONTATO",
//         olá: "-OLÁ",
//         euSou: "Eu sou",
//         apresentacao: "Este é o pequeno Felipe, ele é um programador e designer em profissionalização",
//         explorarProjetos: "Aqui você pode explorar seus projetos e obter mais informações de contato.",
//         saibaMais: "Saiba Mais",
//         serviçosOfereco: "Serviços que <span class='bold-color'>ofereço</span>",
//         especialidade: "Especializo-me em edição de vídeos com Adobe Premiere, design gráfico com Photoshop e desenvolvimento de software com Visual Studio Code, transformando suas ideias em resultados impactantes.",
//         maisSobre: "Mais <span class='bold-color'>Sobre</span> Mim",
//         descricaoSobre: "Olá! Meu nome é <b class='bold-color'>Felipe Strapazzon</b>, tenho 17 anos e sou estudante do Instituto Federal Catarinense (IFC), onde estou me formando no curso técnico integrado em Informática. Com uma paixão por tecnologia e design, estou me especializando em programação e design gráfico. Caso queira entrar em contato, meu e-mail é <b class='bold-color'>lipestrapa@gmail.com</b>. Adoro transformar ideias em realidade e estou sempre aberto a novos desafios e oportunidades!",
//         entreContato: "Entre em <span class='bold-color'>Contato</span>",
//         enviarMensagem: "Envie sua mensagem preenchendo o formulário abaixo:",
//         enviar: "Enviar",
//         meusProjetos: "Meus <b class='bold-color'>Projetos</b>",
//         maisInfos: "Mais Informações",
//         saibaMaisServices: "SAIBA MAIS",
//         edicaoVideo: "Edição de vídeo",
//         edicaoImagem: "Edição de imagem",
//         programacao: "Programação",
//         seuNome: "Seu Nome",
//         seuEmail: "Seu e-mail",
//         suaMensagem: "Sua mensagem",
//     },
//     EN: {
//         home: "HOME",
//         servicos: "SERVICES",
//         sobre: "ABOUT",
//         projetos: "PROJECTS",
//         contatos: "CONTACT",
//         olá: "-HELLO",
//         euSou: "I am",
//         apresentacao: "This is Felipe, he is a programmer and designer in training",
//         explorarProjetos: "Here you can explore his projects and get more contact information.",
//         saibaMais: "Learn More",
//         serviçosOfereco: "Services I <span class='bold-color'>offer</span>",
//         especialidade: "I specialize in video editing with Adobe Premiere, graphic design with Photoshop, and software development with Visual Studio Code, turning your ideas into impactful results.",
//         maisSobre: "More <span class='bold-color'>About</span> Me",
//         descricaoSobre: "Hi! My name is <b class='bold-color'>Felipe Strapazzon</b>, I am 17 years old and a student at the Instituto Federal Catarinense (IFC), where I am graduating in the technical integrated course in Informatics. With a passion for technology and design, I am specializing in programming and graphic design. If you want to get in touch, my email is <b class='bold-color'>lipestrapa@gmail.com</b>. I love turning ideas into reality and am always open to new challenges and opportunities!",
//         entreContato: "Get in <span class='bold-color'>Touch</span>",
//         enviarMensagem: "Send your message by filling out the form below:",
//         enviar: "Send",
//         meusProjetos: "My <b class='bold-color'>Projects</b>",
//         maisInfos: "More Information",
//         saibaMaisServices: "LEARN MORE",
//         edicaoVideo: "Video Editing",
//         edicaoImagem: "Image Editing",
//         programacao: "Programming",
//         seuNome: "Your name",
//         seuEmail: "Your e-mail",
//         suaMensagem: "Your message",
        
//     },
//     ESP: {
//         home: "INICIO",
//         servicos: "SERVICIOS",
//         sobre: "SOBRE",
//         projetos: "PROYECTOS",
//         contatos: "CONTACTO",
//         olá: "-HOLA",
//         euSou: "Soy",
//         apresentacao: "Este es Felipe, él es un programador y diseñador en formación",
//         explorarProjetos: "Aquí puedes explorar sus proyectos y obtener más información de contacto.",
//         saibaMais: "Saber Más",
//         serviçosOfereco: "Servicios que <span class='bold-color'>ofrezco</span>",
//         especialidade: "Me especializo en edición de videos con Adobe Premiere, diseño gráfico con Photoshop y desarrollo de software con Visual Studio Code, transformando tus ideas en resultados impactantes.",
//         maisSobre: "Más <span class='bold-color'>Sobre</span> Mí",
//         descricaoSobre: "¡Hola! Mi nombre es <b class='bold-color'>Felipe Strapazzon</b>, tengo 17 años y soy estudiante del Instituto Federal Catarinense (IFC), donde estoy finalizando el curso técnico integrado en Informática. Con pasión por la tecnología y el diseño, me estoy especializando en programación y diseño gráfico. Si deseas contactarme, mi correo electrónico es <b class='bold-color'>lipestrapa@gmail.com</b>. ¡Me encanta convertir ideas en realidad y siempre estoy abierto a nuevos desafíos y oportunidades!",
//         entreContato: "Ponte en <span class='bold-color'>Contacto</span>",
//         enviarMensagem: "Envía tu mensaje completando el formulario a continuación:",
//         enviar: "Enviar",
//         meusProjetos: "Mis <b class='bold-color'>Proyectos</b>",
//         maisInfos: "Más Información",
//         saibaMaisServices: "SABER MÁS",
//         edicaoVideo: "Edición de video",
//         edicaoImagem: "Edición de imagen",
//         programacao: "Programación",
//         seuNome: "Su nombre",
//         seuEmail: "Tu correo electrónico",
//         suaMensagem: "Tu mensaje",
//     },
// };

// // Função para alterar o idioma
// function changeLanguage(language) {
//     // Atualizar textos



//     //NAVBAR

//     document.getElementById("home").textContent = translations[language].home;
//     document.getElementById("servicos").textContent = translations[language].servicos;
//     document.getElementById("sobre").textContent = translations[language].sobre;
//     document.getElementById("projetos").textContent = translations[language].projetos;
//     document.getElementById("contatos").textContent = translations[language].contatos;


//     //INICIO

//     document.querySelector(".start p b").textContent = translations[language].olá;
//     document.querySelector(".start h1").innerHTML = `${translations[language].euSou} <span class="bold-color">Felipe</span> Strapazzon`;
//     document.querySelectorAll(".start p")[1].textContent = translations[language].apresentacao;
//     document.querySelectorAll(".start p")[2].textContent = translations[language].explorarProjetos;
//     document.querySelector(".start .btn").textContent = translations[language].saibaMais;


//     //SERVIÇOS

//     document.querySelector(".section-services h1").innerHTML = translations[language].serviçosOfereco;
//     document.querySelector(".section-services p").textContent = translations[language].especialidade;
//     document.querySelector(".section .edit-video").textContent = translations[language].edicaoVideo;
//     document.querySelector(".section .edit-img").textContent = translations[language].edicaoImagem;
//     document.querySelector(".section .programing").textContent = translations[language].programacao;
//     document.querySelectorAll(".button-services").forEach(button => {
//         button.textContent = translations[language].saibaMaisServices;
//     });


//     //PROJETOS

//     document.querySelector(".projects_content h1").innerHTML = translations[language].meusProjetos;
//     document.querySelectorAll(".content a").forEach(button => {
//         button.textContent = translations[language].maisInfos;
//     });


//     //SOBRE
//     document.querySelector("#about h1").innerHTML = translations[language].maisSobre;
//     document.querySelector("#about p").innerHTML = translations[language].descricaoSobre;


//     //CONTATO

//     document.querySelector("#contato h1").innerHTML = translations[language].entreContato;
//     document.querySelector("#contato p").textContent = translations[language].enviarMensagem;
//     document.querySelector("#contact-form button").textContent = translations[language].enviar;
    

//     // PLACEHOLDERS

//     document.querySelector(".input-name").setAttribute("placeholder", translations[language].seuNome);
//     document.querySelector(".input-email").setAttribute("placeholder", translations[language].seuEmail);
//     document.querySelector("#message").setAttribute("placeholder", translations[language].suaMensagem);


//     // Atualizar o idioma ativo visualmente
//     const langItems = document.querySelectorAll(".lang-item");
//     langItems.forEach((item) => item.classList.remove("active"));
//     document.getElementById(language.toLowerCase()).classList.add("active");
// }

// // Definir o idioma inicial (português - BR)
// document.addEventListener("DOMContentLoaded", () => {
//     changeLanguage("BR");
// });



// Textos em diferentes idiomas
const translations = {
    BR: {
        home: "HOME",
        servicos: "SERVIÇOS",
        sobre: "SOBRE",
        projetos: "PROJETOS",
        contatos: "CONTATO",
        olá: "-OLÁ",
        euSou: "Eu sou",
        apresentacao: "Este é o pequeno Felipe, ele é um programador e designer em profissionalização",
        explorarProjetos: "Aqui você pode explorar seus projetos e obter mais informações de contato.",
        saibaMais: "Saiba Mais",
        serviçosOfereco: "Serviços que <span class='bold-color'>ofereço</span>",
        especialidade: "Especializo-me em edição de vídeos com Adobe Premiere, design gráfico com Photoshop e desenvolvimento de software com Visual Studio Code, transformando suas ideias em resultados impactantes.",
        maisSobre: "Mais <span class='bold-color'>Sobre</span> Mim",
        descricaoSobre: "Olá! Meu nome é <b class='bold-color'>Felipe Strapazzon</b>, tenho 17 anos e sou estudante do Instituto Federal Catarinense (IFC), onde estou me formando no curso técnico integrado em Informática. Com uma paixão por tecnologia e design, estou me especializando em programação e design gráfico. Caso queira entrar em contato, meu e-mail é <b class='bold-color'>lipestrapa@gmail.com</b>. Adoro transformar ideias em realidade e estou sempre aberto a novos desafios e oportunidades!",
        entreContato: "Entre em <span class='bold-color'>Contato</span>",
        enviarMensagem: "Envie sua mensagem preenchendo o formulário abaixo:",
        enviar: "Enviar",
        meusProjetos: "Meus <b class='bold-color'>Projetos</b>",
        maisInfos: "Mais Informações",
        saibaMaisServices: "SAIBA MAIS",
        edicaoVideo: "Edição de vídeo",
        edicaoImagem: "Edição de imagem",
        programacao: "Programação",
        seuNome: "Seu Nome",
        seuEmail: "Seu e-mail",
        suaMensagem: "Sua mensagem",
    },
    EN: {
        home: "HOME",
        servicos: "SERVICES",
        sobre: "ABOUT",
        projetos: "PROJECTS",
        contatos: "CONTACT",
        olá: "-HELLO",
        euSou: "I am",
        apresentacao: "This is Felipe, he is a programmer and designer in training",
        explorarProjetos: "Here you can explore his projects and get more contact information.",
        saibaMais: "Learn More",
        serviçosOfereco: "Services I <span class='bold-color'>offer</span>",
        especialidade: "I specialize in video editing with Adobe Premiere, graphic design with Photoshop, and software development with Visual Studio Code, turning your ideas into impactful results.",
        maisSobre: "More <span class='bold-color'>About</span> Me",
        descricaoSobre: "Hi! My name is <b class='bold-color'>Felipe Strapazzon</b>, I am 17 years old and a student at the Instituto Federal Catarinense (IFC), where I am graduating in the technical integrated course in Informatics. With a passion for technology and design, I am specializing in programming and graphic design. If you want to get in touch, my email is <b class='bold-color'>lipestrapa@gmail.com</b>. I love turning ideas into reality and am always open to new challenges and opportunities!",
        entreContato: "Get in <span class='bold-color'>Touch</span>",
        enviarMensagem: "Send your message by filling out the form below:",
        enviar: "Send",
        meusProjetos: "My <b class='bold-color'>Projects</b>",
        maisInfos: "More Information",
        saibaMaisServices: "LEARN MORE",
        edicaoVideo: "Video Editing",
        edicaoImagem: "Image Editing",
        programacao: "Programming",
        seuNome: "Your name",
        seuEmail: "Your e-mail",
        suaMensagem: "Your message",
    },
    ESP: {
        home: "INICIO",
        servicos: "SERVICIOS",
        sobre: "SOBRE",
        projetos: "PROYECTOS",
        contatos: "CONTACTO",
        olá: "-HOLA",
        euSou: "Soy",
        apresentacao: "Este es Felipe, él es un programador y diseñador en formación",
        explorarProjetos: "Aquí puedes explorar sus proyectos y obtener más información de contacto.",
        saibaMais: "Saber Más",
        serviçosOfereco: "Servicios que <span class='bold-color'>ofrezco</span>",
        especialidade: "Me especializo en edición de videos con Adobe Premiere, diseño gráfico con Photoshop y desarrollo de software con Visual Studio Code, transformando tus ideas en resultados impactantes.",
        maisSobre: "Más <span class='bold-color'>Sobre</span> Mí",
        descricaoSobre: "¡Hola! Mi nombre es <b class='bold-color'>Felipe Strapazzon</b>, tengo 17 años y soy estudiante del Instituto Federal Catarinense (IFC), donde estoy finalizando el curso técnico integrado en Informática. Con pasión por la tecnología y el diseño, me estoy especializando en programación y diseño gráfico. Si deseas contactarme, mi correo electrónico es <b class='bold-color'>lipestrapa@gmail.com</b>. ¡Me encanta convertir ideas en realidad y siempre estoy abierto a nuevos desafíos y oportunidades!",
        entreContato: "Ponte en <span class='bold-color'>Contacto</span>",
        enviarMensagem: "Envía tu mensaje completando el formulario a continuación:",
        enviar: "Enviar",
        meusProjetos: "Mis <b class='bold-color'>Proyectos</b>",
        maisInfos: "Más Información",
        saibaMaisServices: "SABER MÁS",
        edicaoVideo: "Edición de video",
        edicaoImagem: "Edición de imagen",
        programacao: "Programación",
        seuNome: "Su nombre",
        seuEmail: "Tu correo electrónico",
        suaMensagem: "Tu mensaje",
    },
};

// Função para alterar o idioma
function changeLanguage(language) {
    // Atualizar textos da navbar
    document.getElementById("home").textContent = translations[language].home;
    document.getElementById("servicos").textContent = translations[language].servicos;
    document.getElementById("sobre").textContent = translations[language].sobre;
    document.getElementById("projetos").textContent = translations[language].projetos;
    document.getElementById("contatos").textContent = translations[language].contatos;

    // Atualizar textos da seção "Início"
    document.querySelector(".start p b").textContent = translations[language].olá;
    document.querySelector(".start h1").innerHTML = `${translations[language].euSou} <span class="bold-color">Felipe</span> Strapazzon`;
    document.querySelectorAll(".start p")[1].textContent = translations[language].apresentacao;
    document.querySelectorAll(".start p")[2].textContent = translations[language].explorarProjetos;
    document.querySelector(".start .btn").textContent = translations[language].saibaMais;

    // Atualizar textos da seção "Serviços"
    document.querySelector(".section-services h1").innerHTML = translations[language].serviçosOfereco;
    document.querySelector(".section-services p").textContent = translations[language].especialidade;
    document.querySelector(".section .edit-video").textContent = translations[language].edicaoVideo;
    document.querySelector(".section .edit-img").textContent = translations[language].edicaoImagem;
    document.querySelector(".section .programing").textContent = translations[language].programacao;
    document.querySelectorAll(".button-services").forEach(button => {
        button.textContent = translations[language].saibaMaisServices;
    });

    // Atualizar textos da seção "Projetos"
    document.querySelector(".projects_content h1").innerHTML = translations[language].meusProjetos;
    document.querySelectorAll(".content a").forEach(button => {
        button.textContent = translations[language].maisInfos;
    });

    // Atualizar textos da seção "Sobre"
    document.querySelector("#about h1").innerHTML = translations[language].maisSobre;
    document.querySelector("#about p").innerHTML = translations[language].descricaoSobre;

    // Atualizar textos da seção "Contato"
    document.querySelector("#contato h1").innerHTML = translations[language].entreContato;
    document.querySelector("#contato p").textContent = translations[language].enviarMensagem;
    document.querySelector("#contact-form button").textContent = translations[language].enviar;

    // Atualizar placeholders
    document.querySelector(".input-name").setAttribute("placeholder", translations[language].seuNome);
    document.querySelector(".input-email").setAttribute("placeholder", translations[language].seuEmail);
    document.querySelector("#message").setAttribute("placeholder", translations[language].suaMensagem);

    // Atualizar o idioma ativo visualmente
    const langItems = document.querySelectorAll(".lang-item");
    langItems.forEach((item) => item.classList.remove("active"));
    document.getElementById(language.toLowerCase()).classList.add("active");
}

// Definir o idioma inicial (português - BR)
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage("BR");
});
