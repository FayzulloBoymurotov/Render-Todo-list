var elList = document.querySelector('.list');
elList.innerHTML = null;

for (var pokemon of pokemons) {

    // Creating...

    var newLi = document.createElement('li');
    var newHeading = document.createElement('h3');
    var newImg = document.createElement('img');
    var newParagraph = document.createElement('h5');
    var newTime = document.createElement('time');
    var newCandy = document.createElement('h5');
    var newHeight = document.createElement('p');
    var newWeight = document.createElement('p');
    var newCandyCount = document.createElement('p');
    var newEggs = document.createElement('h6');
    var newSpawnChance = document.createElement('p');
    var newAvgSpawns = document.createElement('p');
    var newSpawnTime = document.createElement('p');
    var newTypes = document.createElement('p');
    var newMultipliers = document.createElement('time');
    var newHeadingTop = document.createElement('h1');

    // Texting...

    newHeading.textContent = 'Name: ' + pokemon.name;
    newTime.textContent = 'Num: ' + normalizedDate(pokemon.num);
    newCandy.textContent = 'Candy: ' + pokemon.candy;
    newHeight.textContent = 'Height: ' + pokemon.height;
    newWeight.textContent = 'Weight: ' + pokemon.weight;
    newCandyCount.textContent = 'candy_count: ' + pokemon.candy_count;
    newEggs.textContent = 'Egg: ' + pokemon.egg;
    newSpawnChance.textContent = 'Spawn_chance: ' + pokemon.spawn_chance;
    newAvgSpawns.textContent = 'Avg_spawns: ' + pokemon.avg_spawns;
    newSpawnTime.textContent = 'Spawn_time: ' + pokemon.spawn_time;
    newMultipliers.textContent = 'Multipliers: ' + pokemon.multipliers;
    newHeadingTop.textContent = pokemon.elList;
    newParagraph.textContent = 'Weaknesses: ' + pokemon.weaknesses.splice(0, 10).join(' ');
    // Styling

    elList.style.paddingTop = "50px";
    newLi.style.color = "#718093"
    newLi.style.border = "5px"
    elList.style.border = '5px'
    newHeading.style.color = '#ffdd59'
    newCandy.style.color = '#ffdd59'
    newTime.style.color = '#18dcff'

    // For Of Loops

    for (var weaknesse of pokemon.weaknesses) {
        var newParagrap = document.createElement('p');

        newParagrap.textContent = weaknesse;
        newParagraph.appendChild(newParagrap);
    }

    for (var item of pokemon.type) {
        var newType = document.createElement('li');

        newType.textContent = item;
        newTypes.appendChild(newType);
    }

    // Set Attribute...
    newTime.setAttribute('class', 'new__time')
    newLi.setAttribute('class', 'list__item bek border border-warning border-5');
    newHeading.setAttribute('class', 'pokemon__heading border');
    newImg.setAttribute('class', 'pokemon__img');
    newImg.setAttribute('alt', pokemon.name + ' img');
    newImg.setAttribute('src', pokemon.img);
    newWeight.setAttribute('class', 'new__weight ml-10');
    newParagraph.setAttribute('class', 'new_paragraph');

    newImg.setAttribute('width', '180');
    newImg.setAttribute('height', '180');

    // Appendding...
    newLi.appendChild(newHeading);
    newLi.appendChild(newImg);
    newLi.appendChild(newTime);
    newLi.appendChild(newParagraph);
    newLi.appendChild(newCandy);
    newLi.appendChild(newHeight);
    newLi.appendChild(newWeight);
    newLi.appendChild(newCandyCount);
    newLi.appendChild(newEggs);
    newLi.appendChild(newSpawnChance);
    newLi.appendChild(newAvgSpawns);
    newLi.appendChild(newSpawnTime);
    newLi.appendChild(newTypes);
    newLi.appendChild(newMultipliers);
    elList.appendChild(newLi);
}
