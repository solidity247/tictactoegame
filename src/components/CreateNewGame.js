import { useState } from "react";

export default function CreateNewGame({ createGame, setCreateOrJoin }) {
	const [playerName, setPlayerName] = useState("");
	return (
		<div>
			<input
				onChange={e => setPlayerName(e.target.value)}
				type="text"
				value={playerName}
			/>
			<button onClick={() => createGame(playerName)}>Create game</button>
			<button onClick={() => setCreateOrJoin(false)}>
				switch to join game
			</button>
		</div>
	);
}
