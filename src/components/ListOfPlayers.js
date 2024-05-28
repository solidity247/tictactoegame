import { useEffect } from "react";

export default function ListOfPlayers({
	openGames,
	joinGame,
	setCreateOrJoin,
	requestOpenGames
}) {
	useEffect(
		() => {
			const interval = setInterval(requestOpenGames, 1000);
			return () => {
				clearInterval(interval);
			};
		},
		[requestOpenGames]
	);
	return (
		<div>
			List of players wanting tou to join
			<ul>
				{openGames.map(({ id, name }) =>
					<li key={id}>
						{name} || game id: {id} ||{" "}
						<button onClick={() => joinGame(id)}>Join Game</button>
					</li>
				)}
			</ul>
			<button onClick={() => setCreateOrJoin(true)}>
				switch to create game
			</button>
		</div>
	);
}
