import "./BackGround.css";
import TTLogo from "./TicLogo.png";

export default function BackGround() {
	return (
		<div className="background">
			<div className="bg-blur" id="blurel-1" />
			<div className="bg-blur" id="blurel-2" />
			<div className="bg-blur" id="blurel-3" />
			<img className="tt-logo" src={TTLogo} alt="TicTacToe" />
		</div>
	);
}
