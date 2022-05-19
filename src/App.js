import React, { useState } from "react";
import Axios from "axios";

import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
	const [pokemonName, setPokemonName] = useState("");
	const [pokemonChosen, setPokemonChosen] = useState(false);
	const [pokemon, setPokemon] = useState({
		name: "",
		species: "",
		img: "",
		hp: "",
		attack: "",
		defense: "",
		type: "",
		specialAttack: "",
		specialDefense: "",
		speed: "",
		ability: "",
		specialAbility: "",
	});

	const searchPokemon = () => {
		Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
			(res) => {
				// console.log(res);
				setPokemon({
					name: res.data.name,
					species: res.data.species.name,
					img: res.data.sprites.other.dream_world.front_default,
					hp: res.data.stats[0].base_stat,
					attack: res.data.stats[1].base_stat,
					defense: res.data.stats[2].base_stat,
					type: res.data.types[0].type.name,
					specialAttack: res.data.stats[3].base_stat,
					specialDefense: res.data.stats[4].base_stat,
					speed: res.data.stats[5].base_stat,
					ability: res.data.abilities[0].ability.name,
					specialAbility: res.data.abilities[1].ability.name,
				});
				setPokemonChosen(true);
				setPokemonName("");
			}
		);
	};

	return (
		<div className="App">
			<div className="TitleSection">
				<div className="searchWrap">
					<h1>PokeDex</h1>
					<input
						type="text"
						placeholder="Pikachu"
						value={pokemonName}
						onChange={(event) => {
							setPokemonName(event.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								searchPokemon();
							}
						}}
					/>
					<button onClick={searchPokemon}>Search Pokemon</button>
				</div>
			</div>
			<div className="DisplaySection">
				{!pokemonChosen ? (
					<h1 className="nothingChoosenHeading">Please Choose a Pokemon! </h1>
				) : (
					<PokemonCard pokemon={pokemon} />
				)}
			</div>
		</div>
	);
}

export default App;
