// import { useState } from "react";
// import NamesPrompt from "./components/NamesPrompt";
import Game from "./components/Game";
import "./App.css";

function App() {
	// const [names, set] = useState(null);

	return (
		<div className="App">
			TICTACTOE
			{/* {names || <NamesPrompt setNames={setNames} />} */}
			{true &&
				<Game
					listOfPlayers={[
						{ name: "Nur", sym: "X", id: "p1" },
						{ name: "Zarina", sym: "O", id: "p2" }
					]}
				/>}
		</div>
	);
}

export default App;

// Components
// Prompt to ask Names

// Game
//// Players (names, whosTurn)
//// GameBoard - where the game goes
