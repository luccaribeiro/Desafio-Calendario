function getData() {
    data = (document.getElementById("input-data").value)
    var listaDeFolgas = listaFolga(data)
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        events: listaDeFolgas
    });
    calendar.render()
}
function listaFolga(primeiroDia) {
    let data = new Date(primeiroDia)
    let cont = 1
    let indice = 0
    let contadorDeFolga = 1
    let events = []
    while (cont < 90 + 1) {
        if (indice == 6 || indice == 7) {
            events.push({ title: 'Folga ' + contadorDeFolga, start: `${data.toJSON().slice(0, 10)}` })
            contadorDeFolga++
        }
        data.setDate(data.getDate() + 1)
        cont++
        indice++
        if (indice == 8) {
            indice = 0
        }
    }
    return events
}
