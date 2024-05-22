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

/*
TODO:
1. Add a NamesPrompt, what welcomes a user upon opening an app and prompts to
type player1 and player2 names.
Pass player1 and player2 names into "names" state variable
and conditionally render the game when names received
*/
