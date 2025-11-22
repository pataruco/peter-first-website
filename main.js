let turn = "X";

const cells = document.querySelectorAll(".grid > div");

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
}
