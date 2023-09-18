let currentPageUrl = 'https://swapi.dev/api/people/';

window.onload = async() => {
    try {
        await loadCharacters(currentPageUrl); 

    } catch (error) {
        alert('Erro ao carregar cards');
    }

    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    nextButton.addEventListener('click', loadNextPage());
    backButton.addEventListener('click', loadPreviousPage());
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

            mainContent.appendChild(card);
        });

        nextButton.addEventListener('click', loadNextPage());
        backButton.addEventListener('click', loadPreviousPage());

        nextButton.disabled = !responseJson.next;
        backButton.disabled = !responseJson.previous;
        backButton.style.visibility = response.previous ? "visible" : "hidden";

        currentPageUrl = url;
        
    } catch (error) {
        console.log('Erro ao carregar os personagens')
    }
}