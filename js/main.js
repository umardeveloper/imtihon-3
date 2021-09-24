var elList = document.querySelector('.list');

for(var pokemon of pokemons ) {

    //==================Pokemon variables==================>
    var newLi = document.createElement('li');
    var newHeading = document.createElement('h3');
    var newImg = document.createElement('img');
    var newStrong = document.createElement('strong');
    var pokemonHeight = document.createElement('strong');
    var pokemonWeight = document.createElement('strong');
    var pokemonCandy = document.createElement('strong');
    var pokemonCandyCound = document.createElement('strong');
    var pokemonEggs = document.createElement('strong');
    var pokemonSpawnChance = document.createElement('strong');
    var pokemonAvgSpawns = document.createElement('strong');
    var pokemonSpawnTime = document.createElement('strong');
    var pokemonMultipliers = document.createElement('strong');
    var pokemonWeaknesses = document.createElement('strong');
    var pokemonNextEvolution = document.createElement('em');
    //==================Text contents==================>
    newHeading.textContent = pokemon.name;
    newStrong.textContent = pokemon.type;
    pokemonHeight.textContent = pokemon.height;
    pokemonWeight.textContent = pokemon.weight;
    pokemonCandy.textContent = pokemon.candy;
    pokemonCandyCound.textContent = pokemon.candy_count;
    pokemonEggs.textContent = pokemon.egg;
    pokemonSpawnChance.textContent = pokemon.spawn_chance;
    pokemonAvgSpawns.textContent = pokemon.avg_spawns;
    pokemonSpawnTime.textContent = pokemon.spawn_time;
    pokemonMultipliers.textContent = pokemon.multipliers;
    pokemonWeaknesses.textContent = pokemon.weaknesses;
    // pokemonNextEvolution.textContent = pokemon.next_evolution;
    //==================SetAttributes==================>
    newLi.setAttribute('class' , 'list__item  mb-5 ms-5 p-5  bg-light card w-25 ');
    newHeading.setAttribute('class' , 'list__heading');//heading list
    newImg.setAttribute('src' , pokemon.img);//pokemon image
    newStrong.setAttribute('class' , 'list__strong text-danger');//pokemon ability
    pokemonWeight.setAttribute('class' , 'text-info');//pokemon  weight
    pokemonCandy.setAttribute('class' , 'text-success');//pokemon candy
    pokemonCandyCound.setAttribute('class' , 'text-warning');//pokemon candy cound
    pokemonEggs.setAttribute('class' , 'text-primary');//pokemon egg
    pokemonSpawnChance.setAttribute('class' , 'text-secondary')//pokemon SpawnChance
    pokemonAvgSpawns.setAttribute('class' , 'text-black-50 font-monospace text-decoration-underline');//pokemon avg spawns
    pokemonSpawnTime.setAttribute('class' , 'text-success font-monospace text-decoration-underline');//pokemon spawn time
    pokemonMultipliers.setAttribute('class' , 'text-danger font-monospace');
    pokemonWeaknesses.setAttribute('class' , 'text-info font-monospace');
    // pokemonNextEvolution.setAttribute('class' , 'text-warning font-monospace')
    //==================appendChilds==================>
    newLi.appendChild(newHeading);
    newLi.appendChild(newImg);
    newLi.appendChild(newStrong);
    newLi.appendChild(pokemonHeight);
    newLi.appendChild(pokemonWeight);
    newLi.appendChild(pokemonCandy);
    newLi.appendChild(pokemonCandyCound);
    newLi.appendChild(pokemonEggs);
    newLi.appendChild(pokemonSpawnChance);
    newLi.appendChild(pokemonAvgSpawns);
    newLi.appendChild(pokemonSpawnTime);
    newLi.appendChild(pokemonMultipliers);
    newLi.appendChild(pokemonWeaknesses);
    // newLi.appendChild(pokemonNextEvolution);
    elList.appendChild(newLi);
}
