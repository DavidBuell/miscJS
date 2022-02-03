function reservationManager() {
    this.form = document.querySelectorAll("#form1");
}
console.log("test");
alert("test 2");
reservationManager.prototype.init = function() {
    const interfaceWrapper = document.createElement("div");
    const interfaceStyles = document.createElement("style");

    interfaceWrapper.classList.add("reservation-manager-interface-wrapper");
    interfaceWrapper.innerHTML = '<p class="interface-title">RESERVATION MANAGER</p><p class="interface-text"></p><button class="interface-button">Click to enable Reservation Manager.</button>';
    interfaceStyles.innerText =
        "body.cross-hair-cursor {cursor: crosshair;} body.cross-hair-cursor td:hover {border: 2px solid blue; cursor: crosshair !important;} .reservation-manager-interface-wrapper {background: cornflowerblue; bottom: 0; padding: 10px; position: fixed; right: 0; left: 0; z-index: 99999999;} .reservation-manager-selected {border: 3px solid blue;} .interface-title {font-weight: bold;font-size: 18px;}";

    document.querySelector("head").appendChild(interfaceStyles);
    document.querySelector("body").appendChild(interfaceWrapper);

    const interfaceButton = document.querySelector(".interface-button");
    const interfaceTextEl = document.querySelector(".interface-text");

    interfaceButton.addEventListener("click", function(e) {
        const campsiteList = document.querySelector("table.js-book-modal");
        campsiteList.addEventListener("click", function(e) {
            const campsiteBtn = e.target.nodeType === "BUTTON" ? e.target : e.target.parentNode;
            alert(campsiteBtn.title);
        });
    });
};

window.onload = initializeReservationManager;

function initializeReservationManager() {
    let reservationsManager = new reservationManager();
    reservationsManager.init();
}
