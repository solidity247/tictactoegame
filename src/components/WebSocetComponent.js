import React, { useEffect, useState } from "react";
import Lobby from "./Lobby";

const WebSocketComponent = () => {
	const [ws, setWs] = useState(null);
	const [openGames, setOpenGames] = useState([]);
	const [awaitingSomeone, setAwaitingSomeone] = useState(false);
	const [hostGameId, setHostGameId] = useState(null);
	const [gameRuning, setGameRuning] = useState(null);
	useEffect(() => {
		const socket = new WebSocket("ws://localhost:4000/api/push");

		socket.onopen = () => {
			console.log("WebSocket connection opened");
		};

		socket.onmessage = event => {
			const message = JSON.parse(event.data);
			receiveMessage(message);
		};

		socket.onclose = () => {
			console.log("WebSocket connection closed");
		};

		setWs(socket);

		return () => {
			socket.close();
		};
	}, []);

	const sendMessage = message => {
		if (ws && ws.readyState === WebSocket.OPEN) {
			ws.send(JSON.stringify(message));
		}
	};

	const receiveMessage = message => {
		if (message.type === "requestOpenGamesResponse") {
			setOpenGames(message.payload.listOfGames);
		} else if (message.type === "createGameResponse") {
			if (message.payload.success) {
				setAwaitingSomeone(message.payload.success);
				setHostGameId(message.payload.id);
			}
		} else if (message.type === "cancelGameResponse") {
			if (message.payload.success) {
				setAwaitingSomeone(false);
				setHostGameId(null);
			}
		} else if (message.type === "gameRuning") {
			setGameRuning(true);
		}
	};

	const createGame = playerName => {
		const message = {
			type: "createGame",
			payload: {
				name: playerName
			}
		};
		sendMessage(message);
	};

	const requestOpenGames = () => {
		const message = { type: "requestOpenGames", payload: {} };
		sendMessage(message);
	};

	const joinGame = id => {
		const message = {
			type: "joinGame",
			payload: { id }
		};
		sendMessage(message);
	};

	const cancelNewGame = () => {
		const message = {
			type: "cancelGame",
			payload: { id: hostGameId }
		};
		sendMessage(message);
	};
	return (
		<div>
			<h3>TicTacToe</h3>
            { !gameRuning && ""}
			{ !gameRuning &&
            <>
			{!awaitingSomeone &&
				<Lobby {...{ createGame, joinGame, openGames, requestOpenGames }} />}
			{awaitingSomeone &&
				<div>
					Someone is joining...
					<button
						onClick={() => {
							cancelNewGame();
						}}
					>
						Cancel
					</button>
				</div>} </>}
		</div>
	);
};

export default WebSocketComponent;
