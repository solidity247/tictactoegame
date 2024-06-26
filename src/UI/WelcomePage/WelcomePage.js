import AuthBar from "../AuthBar/AuthBar";
import BackGround from "../BackGround/BackGround";
import Header from "../Header/Header";
import Masha from "../Masha/Masha";
import "./WelcomePage.css";

export default function WelcomePage() {
	return (
		<div id="welcome-page">
			<BackGround />
			<Header />
			<main className="main-content">
				<div className="welcome-bar">
					<h3>Welcome to NW Gaming Portal</h3>
					<p>Discover, play and connect with fellow gamers.</p>
					<AuthBar />
				</div>
				<div className="masha-picture">
					<Masha />
				</div>
			</main>
		</div>
	);
}
