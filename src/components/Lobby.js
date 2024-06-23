import { useState } from "react";
import ListOfPlayers from "./ListOfPlayers";
import CreateNewGame from "./CreateNewGame";

export default function Lobby({
	createGame,
	joinGame,
	openGames,
	requestOpenGames,
	requestUserName,
	userName
}) {
	const [createOrJoin, setCreateOrJoin] = useState(false);
	const [userNameInput, setUserNameInput] = useState("");

	return (
		<div>
			{!userName && <div>
				<input onChange={e=>{
					setUserNameInput(e.target.value)
				}} value={userNameInput}/>
				<button onClick={()=>{
					requestUserName(userNameInput)
				}}>CreateUser</button>
			</div> }
			{userName && <>{createOrJoin && <CreateNewGame {...{ createGame, setCreateOrJoin, userName }} />}
			{!createOrJoin &&
				<ListOfPlayers
					{...{ openGames, joinGame, setCreateOrJoin, requestOpenGames }}
				/>}</>
			}
		</div>
	);
}
