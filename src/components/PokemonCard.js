import React from "react";
import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
	return (
		<div id="cards">
			<div className="card">
				<div className="card__image-container">
					<img src={pokemon.img} alt={pokemon.name} className="card__image" />
				</div>

				<div className="card__caption">
					<h1 className="card__name">{pokemon.name}</h1>

					<h3 className="card__type">{pokemon.type}</h3>

					<table className="card__stats">
						<tbody>
							<tr>
								<th>HP</th>
								<td>{pokemon.hp}</td>
							</tr>
							<tr>
								<th>Attack</th>
								<td>{pokemon.attack}</td>
							</tr>

							<tr>
								<th>Defense</th>
								<td>{pokemon.defense}</td>
							</tr>

							<tr>
								<th>Special Attack</th>
								<td>{pokemon.specialAttack}</td>
							</tr>
							<tr>
								<th>Special Defense</th>
								<td>{pokemon.specialDefense}</td>
							</tr>
							<tr>
								<th>Speed</th>
								<td>{pokemon.speed}</td>
							</tr>
						</tbody>
					</table>

					<div className="card__abilities">
						<h4 className="card__ability">
							<span className="card__label">Ability</span>
							{pokemon.ability}
						</h4>
						<h4 className="card__ability">
							<span className="card__label">Hidden Ability</span>
							{pokemon.specialAbility}
						</h4>
					</div>
				</div>
			</div>
		</div>
		// {/* // <div className="PokemonCard">
		// // 	<img src={pokemon.img} />
		// // 	<h1>{pokemon.name}</h1>
		// // 	<h3>Species : {pokemon.species}</h3>
		// // 	<h3>Type : {pokemon.type}</h3>
		// // 	<h4>HP : {pokemon.hp}</h4>
		// // 	<h4>MP : {pokemon.attack}</h4>
		// // 	<h4>defence point : {pokemon.defence}</h4>
		// // </div> */}
	);
}

export default PokemonCard;
