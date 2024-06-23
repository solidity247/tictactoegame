import GameBooard from "./GameBooard";
import Players from "./Players";

export default function TicTacToe({
	gameState,
	userName,
	oponentUsername,
	clickCell
}) {
	const sessionState = gameState.boardState;
	return (
		<div id="game">
			board <br />
			{userName} VS {oponentUsername}
			<Players />
			<GameBooard {...{ sessionState, clickCell }} />
			{false &&
				<h1>
					Winner is: {"isWinner"}
				</h1>}
		</div>
	);
}
