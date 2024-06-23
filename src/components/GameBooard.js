export default function GameBooard({ sessionState, clickCell, switchPlayer }) {
	// console.log("From Game board", sessionState);
	return (
		<div id="game-field">
			{sessionState.map(({ id, value, player }) =>
				<div
					className="cell"
					id={id}
					key={id}
					onClick={() => {
						// if value exist? skip or not click
						!value && clickCell(id);
					}}
				>
					{value}
				</div>
			)}
		</div>
	);
}
