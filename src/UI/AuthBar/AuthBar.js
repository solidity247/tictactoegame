import React from "react";
import AuthBtn from "./AuthBtn";
import "./AuthBar.css";

const btns = [
	"Sign Up with Email",
	"Sign Up with Google",
	"Sign Up with Facebook",
	"Sign Up with Icloud"
];

export default function AuthBar() {
	return (
		<div className="auth-bar">
			<ul>
				{btns.map(b =>
					<li key={b}>
						<AuthBtn title={b} />
					</li>
				)}
				<p>
					Don't have an account? <a href={"#header"}> Register</a> or:
				</p>
				<li>
					<AuthBtn title={"Continue as Guest"} />
				</li>
			</ul>
		</div>
	);
}
