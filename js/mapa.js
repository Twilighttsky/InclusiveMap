var map = L.map('map').setView([0, 0], 2); // Inicializa o mapa em um ponto genérico (com zoom baixo)

// Adicionar o OpenStreetMap como camada base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Pegar as coordenadas da localização
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            // Centralizar o mapa na localização do usuário
            map.setView([lat, lon], 100); 

            // Adicionar um marcador na posição do usuário
            var marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup("Você está aqui!").openPopup();
        }, function(error) {

            // Se houver um erro, exibir uma mensagem
            alert("Erro ao obter a localização. " + error.message);
        });
    } else {
        alert("Geolocalização não é suportada neste navegador.");
    }
}

getUserLocation()

