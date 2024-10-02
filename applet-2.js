class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountSC = 0;
        this.attendanceCountBA = 0;
        this.attendanceCountLab = 0;

        this.loggedData = []; 

        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCount');
        this.logCount1Element = document.getElementById('logCountBA');
        this.logCount2Element = document.getElementById('logCountCSS');
        this.idContainer = document.getElementById('logContainer');

        this.btn.addEventListener('click', () => this.dataSc());
        this.btn1.addEventListener('click', () => this.dataLab());
        this.btn2.addEventListener('click', () => this.dataBa());
        this.btnclear.addEventListener('click', () => this.clearLogs());
    }

    initTileLayer() {
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Sample for new corales BSIT student'
        }).addTo(this.map);
    }
      
    addMarker(lat, long, message){
        const marker = L.marker([lat, long]).addTo(this.map)
        .bindPopup(message);
    }

    loadMarkersFromJson(url) {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(marker => {
                this.addMarker(marker.latitude, marker.longitude, marker.message);
            });
        })
        .catch(error => console.error("Error Loading servers:", error));
    }

    dataSc() {
        this.addMarker(8.360238, 124.867470, 'SC building');
        this.attendanceCountSC++; 
        this.updateLogDisplay();
    }

    dataBa() {
        this.addMarker(8.359134, 124.868537, 'BA building');
        this.attendanceCountBA++;
        this.updateLogDisplay();
    }
    
    dataLab() {
        this.addMarker(8.359639, 124.869179, 'CCS Laboratory 1');
        this.attendanceCountLab++;
        this.updateLogDisplay();
    }

    updateLogDisplay() {
        this.idContainer.innerHTML = ''; 
        this.loggedData.forEach(data => {
            const logItem = document.createElement('div');
            logItem.className = 'log-item';
            this.idContainer.appendChild(logItem);
        });
    }

}
const Mymap = new LeafletMap('map', [8.359735, 124.869206], 18);


Mymap.addMarker(8.359735, 124.869206, 'CCS Faculty Office');
Mymap.addMarker(8.359639, 124.869179, 'CCS Laboratory 1');
Mymap.addMarker(8.359554, 124.869153, 'CCS Laboratory 2');

Mymap.loadMarkersFromJson('applet-2.json');