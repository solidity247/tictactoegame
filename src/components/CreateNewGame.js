export default function CreateNewGame({
	createGame,
	setCreateOrJoin,
	userName
}) {
	return (
		<div>
			<button onClick={() => createGame(userName)}>
				Create game as {userName}
			</button>
			<button onClick={() => setCreateOrJoin(false)}>
				switch to join game
			</button>
		</div>
	);
}
