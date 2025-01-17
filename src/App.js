// import { useState } from "react";
// import NamesPrompt from "./components/NamesPrompt";
// import Game from "./components/Game";
import "./App.css";
import WelcomePage from "./UI/WelcomePage/WelcomePage";
// import WebSocketComponent from "./components/WebSocetComponent";

function App() {
	// const [names, set] = useState(null);

	return (
		<div className="App">
			<WelcomePage />
			{/* <WebSocketComponent /> */}
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
