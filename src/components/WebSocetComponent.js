import React, { useEffect, useState } from "react";
import Lobby from "./Lobby";
import TicTacToe from "./TicTacToe";

const WebSocketComponent = () => {
	const [ws, setWs] = useState(null);
	const [openGames, setOpenGames] = useState([]);
	const [awaitingSomeone, setAwaitingSomeone] = useState(false);
	const [hostGameId, setHostGameId] = useState(null);
	const [gameState, setGameState] = useState(null);
	const [gameRuning, setGameRuning] = useState(false);
	const [userName, setUserName] = useState("");
	const [oponentUsername, setOponentUsername] = useState("");
	const [role, setRole] = useState(null);
	const [turn, setTurn] = useState(null);
	const [winner, setWinner] = useState(null);


	// comment got updated my Nur's subscriber 


	console.log(userName, oponentUsername)
	useEffect(() => {
		// const socket = new WebSocket("ws://localhost:4000/api/push");
		const socket = new WebSocket("wss://webdevs.online:4000/api/push");

		socket.onopen = () => {
			console.log("WebSocket connection opened");
		};

		socket.onmessage = event => {
			const message = JSON.parse(event.data);
			handleReceivedMessage(message);
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

	const handleReceivedMessage = message => {
		if (message.type === "requestOpenGamesResponse") {
			setOpenGames(message.payload.listOfGames);
		} else if (message.type === "createGameResponse") {
            console.log(message)
			if (message.payload.success) {
				setAwaitingSomeone(message.payload.success);
				setHostGameId(message.payload.id);
				setRole(message.payload.role);
			}
		} else if (message.type === "cancelGameResponse") {
			if (message.payload.success) {
				setAwaitingSomeone(false);
				setHostGameId(null);
				setRole(null);
				setGameRuning(false);
				setGameState(null);
				setWinner(null);
			}
		} else if (message.type === "gameRuning") {
            console.log("gameRuning")
            console.log(message);
			setGameRuning(true);
			setGameState(message.payload.gamestate);
			setTurn(message.payload.gamestate.turn);
			setOponentUsername(message.payload.oponentUserName)
		} else if(message.type === "joinGameResponse") {
			setRole(message.payload.role);
		} else if(message.type === "userNameResponse"){
			setUserName(message.payload.userName)
		} else if(message.type === "gameStateUpdate"){
			setGameState(message.payload.gamestate);
			setTurn(message.payload.gamestate.turn);
		} else if(message.type === "gameOver") {
			setWinner(message.payload.winner);
			setTurn(null);
		} else if (message.type === "restartGameResponse"){
			setWinner(null);
		}
	};

	const requestUserName = userName =>{
		const message = {
			type: "setUserName",
			payload: {
				userName
			}
		};
		sendMessage(message);
	}

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

	const joinGame = (id) => {
		const message = {
			type: "joinGame",
			payload: { id, userName }
		};
		sendMessage(message);
		setHostGameId(id);
	};
	const restartGame = () => {
		const message = {
			type: "restartGame",
			payload: {}
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

	const clickCell = (cellId) => {
		const value = role==="hostPlayer"? "X" : "O"
		const message = {
			type: "move",
			payload: { cellId, role, value }
		};
		turn === role && sendMessage(message) 
	};

	return (
		<div>
			<h3>TicTacToe</h3>
			<h4>UserName: {userName}</h4>
			<h4>Turn: {turn}</h4>
            {gameState && <TicTacToe {...{gameState, userName, oponentUsername, clickCell}} />}
			{ !gameRuning &&
            <>
			{!awaitingSomeone &&
				<Lobby {...{ createGame, joinGame, openGames, requestOpenGames, userName, requestUserName }} />}
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
			{winner && <div className="winnerComponent">
				Winner is: {winner}
				<button onClick={restartGame}>Play again</button>
				<button onClick={()=>cancelNewGame(hostGameId)}>Back to lobby</button>
				</div>}
		</div>
	);
};

export default WebSocketComponent;
