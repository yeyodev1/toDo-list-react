import "./TodoSearch.css";

function TodoSearch() {
	return (
		<input
			placeholder="Cortar cebolla"
			className="TodoSearch"
			onChange={(event) => {
				console.log("ESCRIBISTE EN EL TODO SEARCH");
				console.log(event);
				console.log(event.target.value);
			}}
		></input>
	);
}

export { TodoSearch };
