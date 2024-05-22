export default function NamesPrompt({ setNames }) {
	// console.log(setNames);
	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				// retreive names and pass names into setNames
				setNames(true);
			}}
		>
			<input type="text" placeholder="Player1" />
			<input type="text" placeholder="Player2" />
			<input type="submit" value="Let's paly!" />
		</form>
	);
}
