const PATTERNS = [
	[0, 1, 2], // pattern 1
	[3, 4, 5], // pattern 2
	[6, 7, 8], // pattern 3
	[0, 3, 6], // pattern 4
	[1, 4, 7], // pattern 5
	[2, 5, 8], // pattern 6
	[0, 4, 8], // pattern 7
	[2, 4, 6] // pattern 8
];

const findWinner = arrOfCells => {
	console.log("We accepted", arrOfCells);
	for (const pattern of PATTERNS) {
		const [i1, i2, i3] = pattern;

		if (
			arrOfCells[i1].value === arrOfCells[i2].value &&
			arrOfCells[i1].value === arrOfCells[i3].value &&
			!!arrOfCells[i1].value
		) {
			// pattern found!!!
			return arrOfCells[i1].player;
		}
	}
	return;
};

export { findWinner };
