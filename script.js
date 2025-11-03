document.addEventListener("DOMContentLoaded", () => {

    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="number"]');
    const radios = document.querySelectorAll('input[name="metodo_contacto"]');
    const checkboxes = document.querySelectorAll('input[name="suscripcion"]');

    inputs.forEach(input => {
        input.addEventListener('blur', (e) => {
                const valor = e.target.value.trim();
                if (valor !== '') {
                    document.getElementById('tb_' + e.target.id).textContent = valor;
                }
            }
        );
    });

    function updateMetodoContacto(){
        const check = document.querySelector('input[name="metodo_contacto"]:checked');
        if (check) {
            document.getElementById('metodo_contacto').textContent = check.labels[0].textContent.trim();
        }
    }

    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.getElementById('metodo_contacto').textContent = e.target.labels[0].textContent.trim();
            }
        });
    });

    function updateSuscripcion() {
        const selected = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selected.push(checkbox.labels[0].textContent.trim());
            }
        });
        document.getElementById('tipo_suscripcion').textContent = selected.join(', ');
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateSuscripcion);
    });

    updateMetodoContacto()
    updateSuscripcion();
});   