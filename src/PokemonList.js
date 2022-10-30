import React from "react";
import "./PokemonList.css";

export default function PokemonList({ pokemon }) {
    return (
        <div className="pokemon-list">
            {pokemon.map((p) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}
