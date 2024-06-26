import "./Header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="header-logo header-element">logo</div>
			<nav className="nav-bar header-element">
				<ul>
					<li>Home</li>
					<li>Games</li>
					<li>FAQ</li>
					<li>About us</li>
				</ul>
			</nav>
		</div>
	);
}
