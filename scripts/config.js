function openPlayerConfig(event){
    editedPlayer = +(event.target.dataset.playerid);    
    playerConfigOverlayElement.style.display = "block";
    backDropElement.style.display = "block";
}

function closePlayerConfig(event){
    playerConfigOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorOutputElement.textContent  ="";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        errorOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatePlayerDataElement = document.getElementById("player-"+editedPlayer+"-data");

    updatePlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer-1].name = enteredPlayerName;

    closePlayerConfig();

}