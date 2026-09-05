/* =========================
   ANO DO FOOTER
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================
   LUZ DO MOUSE
========================= */

const glow =
    document.querySelector(".cursor-glow");


window.addEventListener("pointermove", function (event) {

    glow.style.left = event.clientX + "px";

    glow.style.top = event.clientY + "px";

});



/* =========================
   DADOS DOS PROJETOS
========================= */

const projects = {

    pbev: {

        number: "01 / PBEV",

        title: "PBEV",

        description:
            "Projeto voltado à análise de consumo de veículos, explorando programação, dados e inteligência para transformar informações em uma solução funcional.",

        tags: [
            "Python",
            "IA",
            "SQLite"
        ]

    },


    cartbot: {

        number: "02 / CARTBOT",

        title: "CartBot",

        description:
            "Projeto pessoal de automação e interação. Aqui você poderá explicar o objetivo do projeto, suas funcionalidades e os aprendizados obtidos durante o desenvolvimento.",

        tags: [
            "Python",
            "Automação"
        ]

    },


    techfix: {

        number: "03 / TECHFIX",

        title: "TechFix",

        description:
            "Projeto web pensado para apresentar serviços de tecnologia com uma experiência visual moderna, objetiva e responsiva.",

        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },


    academic: {

        number: "04 / ACADÊMICO",

        title: "Projetos acadêmicos",

        description:
            "Coleção de trabalhos desenvolvidos durante a graduação, incluindo desafios de programação e sistemas.",

        tags: [
            "C",
            "C#",
            ".NET",
            "SQL"
        ]

    }

};



/* =========================
   MODAL
========================= */

const modal =
    document.getElementById("projectModal");


const modalNumber =
    document.getElementById("modalNumber");


const modalTitle =
    document.getElementById("modalTitle");


const modalDescription =
    document.getElementById("modalDescription");


const modalTags =
    document.getElementById("modalTags");


const closeModalButton =
    document.getElementById("closeModal");



document
    .querySelectorAll(".project-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const project =
                projects[button.dataset.project];


            modalNumber.textContent =
                project.number;


            modalTitle.textContent =
                project.title;


            modalDescription.textContent =
                project.description;


            modalTags.innerHTML =
                project.tags
                    .map(tag => `<span>${tag}</span>`)
                    .join("");


            modal.classList.add("active");


            document.body.style.overflow =
                "hidden";

        });

    });



function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


closeModalButton
    .addEventListener("click", closeModal);


document
    .querySelector(".modal-background")
    .addEventListener("click", closeModal);


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

});