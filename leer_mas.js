
// Leer más

const texto = document.getElementById('texto_corto');
const leerMas = document.getElementById('leer_mas');
const leerMenos = document.getElementById('leer_menos');
const textoCompleto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores repellat sint quae eaque natus eos quidem velit      laudantium facilis veniam ipsum, expedita corrupti hic. Fugiat enim ea eligendi illum.
Est cum, distinctio commodi quibusdam, doloremque consequatur inventore consequuntur dolores ut exercitationem quaerat possimus! Quasi illum aliquam, sint corrupti libero voluptates, soluta voluptas perferendis nihil impedit ab molestiae quis iste.
Soluta quaerat nobis quisquam asperiores amet adipisci illum dicta eius doloremque placeat tempore, dolorum maiores corrupti eligendi, dolor sunt consequuntur obcaecati provident id, laboriosam cum dolores? Unde provident voluptas laborum?
Fugit eligendi expedita mollitia consequatur molestias voluptate rerum maxime delectus provident odio numquam sunt nemo nisi, nam quaerat perspiciatis, repellat soluta velit a optio illum. Dolor perspiciatis et adipisci obcaecati?
Ipsam est ducimus dolore, animi nihil hic quidem enim eveniet distinctio mollitia doloribus dolorem optio accusamus deleniti iusto veritatis ullam. Fugiat blanditiis amet suscipit maxime? Nobis nihil nostrum impedit et.`;
        
const textoCorto = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maiores repellat sint quae eaque natus eos quidem velit laudantium facilis veniam ipsum, expedita corrupti hic. Fugiat enim ea eligendi illum......`

leerMenos.style.display = 'none'

leerMas.addEventListener("click", ()=> {
    texto.textContent = textoCompleto
    leerMas.style.display = 'none'
    leerMenos.style.display = 'inline-block'
}) 

leerMenos.addEventListener("click", ()=> {
    texto.textContent = textoCorto
    leerMas.style.display = 'inline-block'
    leerMenos.style.display = 'none'
})