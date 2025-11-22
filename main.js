let turn = "X";

const cells = document.querySelectorAll(".grid > div");
const winnerElement = document.getElementById("message");

cells.forEach((cell) => {
	cell.addEventListener("click", renderXorO);
});

function renderXorO(event) {
	const cell = event.target;

	cell.textContent = turn;
	if (turn === "X") {
		turn = "O";
	} else {
		turn = "X";
	}

	cell.removeEventListener("click", renderXorO);
	checkWin();
}

const possibleWins = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function checkWin() {
	for (const condition of possibleWins) {
		const [a, b, c] = condition;
		if (
			cells[a].textContent &&
			cells[a].textContent === cells[b].textContent &&
			cells[a].textContent === cells[c].textContent
		) {
			anounceWinner(cells[a].textContent);
			// alert(`${cells[a].textContent} wins!`);
			return;
		}
	}
}

function resetGame() {
	cells.forEach((cell) => {
		cell.textContent = "";
		cell.addEventListener("click", renderXorO);
	});
	turn = "X";
	winnerElement.textContent = "";
}

const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", resetGame);

function anounceWinner(winner) {
	winnerElement.textContent = `${winner} is the winner!`;
}
