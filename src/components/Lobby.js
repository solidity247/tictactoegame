import { useState } from "react";
import ListOfPlayers from "./ListOfPlayers";
import CreateNewGame from "./CreateNewGame";

export default function Lobby({
	createGame,
	joinGame,
	openGames,
	requestOpenGames
}) {
	const [createOrJoin, setCreateOrJoin] = useState(false);

	return (
		<div>
			{createOrJoin && <CreateNewGame {...{ createGame, setCreateOrJoin }} />}
			{!createOrJoin &&
				<ListOfPlayers
					{...{ openGames, joinGame, setCreateOrJoin, requestOpenGames }}
				/>}
		</div>
	);
}
