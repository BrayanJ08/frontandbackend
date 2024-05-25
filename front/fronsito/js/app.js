document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('avionForm');
    const avionId = document.getElementById('avionId');
    const modelo = document.getElementById('modelo');
    const fabricante = document.getElementById('fabricante');
    const asientos = document.getElementById('asientos');
    const avionTable = document.getElementById('avionTable').getElementsByTagName('tbody')[0];
    const messageDiv = document.getElementById('message');

    const apiUrl = 'http://localhost:8080/aviones';

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const avion = {
            modelo: modelo.value,
            fabricante: fabricante.value,
            asientos: asientos.value
        };

        let response;
        if (avionId.value) {
            response = await updateAvion(avionId.value, avion);
        } else {
            response = await createAvion(avion);
        }

        form.reset();
        avionId.value = '';
        if (response.ok) {
            showMessage('Operación exitosa');
        } else {
            showMessage('Error en la operación');
        }
        loadAviones();
    });

    async function loadAviones() {
        const response = await fetch(apiUrl);
        const aviones = await response.json();
        avionTable.innerHTML = '';
        aviones.forEach(avion => {
            const row = avionTable.insertRow();
            row.insertCell(0).textContent = avion.id;
            row.insertCell(1).textContent = avion.modelo;
            row.insertCell(2).textContent = avion.fabricante;
            row.insertCell(3).textContent = avion.asientos;

            const actions = row.insertCell(4);
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => editAvion(avion));
            actions.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteAvion(avion.id));
            actions.appendChild(deleteButton);
        });
    }

    async function createAvion(avion) {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avion)
        });
        return response;
    }

    async function updateAvion(id, avion) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(avion)
        });
        return response;
    }

    async function deleteAvion(id) {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        loadAviones();
        return response;
    }

    function editAvion(avion) {
        avionId.value = avion.id;
        modelo.value = avion.modelo;
        fabricante.value = avion.fabricante;
        asientos.value = avion.asientos;
    }
    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        messageDiv.estilos.display = 'block';
        setTimeout(() => {
            messageDiv.estilos.display = 'none';
        }, 3000);
    }

    loadAviones();
});