let currentPageUrl = 'https://swapi.dev/api/people/';

window.onload = async() => {
    try {
        await loadCharacters(currentPageUrl); 

    } catch (error) {
        alert('Erro ao carregar cards');
    }

    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    nextButton.addEventListener('click', loadNextPage);
    backButton.addEventListener('click', loadPreviousPage);
}

async function loadCharacters (url) {
    const mainContent = document.getElementById('main-content')
    mainContent.innerHTML = ''; // limpar os resultados anteriores

    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.forEach((character) => {
            const card = document.createElement("div");
            card.style.backgroundImage = 
            `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`;
            card.className = "cards";

            const characterNameBG = document.createElement("div");
            characterNameBG.className = "character-name-bg";

            const characterName = document.createElement("span");
            characterName.className = "character-name";
            characterName.innerHTML = `${character.name}`;

            characterNameBG.appendChild(characterName);
            card.appendChild(characterNameBG);

            card.onclick = () => {
                const modal = document.getElementById('modal');
                modal.style.visibility = "visible";

                const modalContent = document.getElementById("modal-content");
                modalContent.innerHTML = '';

                const characterImage = document.createElement("div");
                characterImage.style.backgroundImage = 
                `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`;
                characterImage.className = "character-image";
                //name
                const name = document.createElement("span");
                name.className = "character-details";
                name.innerText = `Nome: ${character.name}`;
                //height
                const characterHeight = document.createElement("span");
                characterHeight.className = "character-details";
                characterHeight.innerText = `Altura: ${character.height}`;
                //mass
                const characterMass = document.createElement("span");
                characterMass.className = "character-details";
                characterMass.innerText = `Peso: ${character.mass}`;
                //eye-color
                const characterEyeColor = document.createElement("span");
                characterEyeColor.className = "character-details";
                characterEyeColor.innerText = `Cor dos Olhos: ${character.eye_color}`;
                //birth-year
                const birthYear = document.createElement("span");
                birthYear.className = "character-details";
                birthYear.innerText = `Nascimento: ${character.birth_year}`;
                /*
                
                
                
                PAREI NO MINUTO 13:10 DO VÍDEO AULA 10 BONUS
                
                
                
                */
            }

            mainContent.appendChild(card);
        });

        const nextButton = document.getElementById('next-button');
        const backButton = document.getElementById('back-button');

        nextButton.addEventListener('click', loadNextPage);
        backButton.addEventListener('click', loadPreviousPage);

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;
        backButton.style.visibility = response.previous ? "visible" : "hidden";

        currentPageUrl = url;
        
    } catch (error) {
        console.log('Erro ao carregar os personagens')
    }
}

async function loadNextPage () {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl);
        const responseJson = await response.json();

        await loadCharacters(responseJson.next);

    } catch (error) {
        console.log(error);
        alert('Erro ao carregar a próxima página')
    }
}

async function loadPreviousPage () {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl);
        const responseJson = await response.json();

        await loadCharacters(responseJson.previous);
        
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar a página anterior')
    }
}

function hideModal () {
    const modal = document.getElementById("modal");
    modal.style.visibility = "hidden"
}