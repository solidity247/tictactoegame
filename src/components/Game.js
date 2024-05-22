import { useState } from "react";
import GameBooard from "./GameBooard";
import Players from "./Players";
import { findWinner } from "../util/utils";

const defaultStartSessionstate = [
	{ id: 1, value: null, player: null },
	{ id: 2, value: null, player: null },
	{ id: 3, value: null, player: null },
	{ id: 4, value: null, player: null },
	{ id: 5, value: null, player: null },
	{ id: 6, value: null, player: null },
	{ id: 7, value: null, player: null },
	{ id: 8, value: null, player: null },
	{ id: 9, value: null, player: null }
];

export default function Game({ listOfPlayers }) {
	const [sessionState, setSessionState] = useState(defaultStartSessionstate);
	const [activePlayer, setActivePlayer] = useState(listOfPlayers[0]);
	const [isWinner, setIsWinner] = useState(null);

	// array of Cells/boxes

	const clickCell = ({ id, player, value }) => {
		const newSessionState = sessionState.map(c => {
			if (c.id === id)
				return { ...c, value: activePlayer.sym, player: activePlayer.name };
			return c;
		});
		setSessionState(newSessionState);
		switchPlayer();
		const foundWinner = findWinner(newSessionState);
		if (foundWinner) {
			// declare a winner!!!
			setIsWinner(foundWinner);
			console.log("Found", foundWinner);
		}
	};

	const switchPlayer = () => {
		// who is active player?
		// set another one
		const playerIndex = listOfPlayers.findIndex(p => p.id === activePlayer.id);
		if (playerIndex === 0) {
			setActivePlayer(listOfPlayers[1]);
		} else {
			setActivePlayer(listOfPlayers[0]);
		}
	};

	return (
		<div id="game">
			<Players />
			<GameBooard {...{ sessionState, clickCell }} />
			{isWinner &&
				<h1>
					Winner is: {isWinner}
				</h1>}
		</div>
	);
}
