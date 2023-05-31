import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
	{
		text: "Cortar cebolla",
		completed: true,
	},
	{
		text: "Cortarse el cabello",
		completed: false,
	},
	{
		text: "Llorar con la llorona",
		completed: false,
	},
	{
		text: "L ALALALA",
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = React.useState(defaultTodos);
	const [searchValue, setSearchValue] = React.useState("");

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLocaleLowerCase();
		const searchText = searchValue.toLowerCase();

		return todoText.includes(searchText);
	});
	const completeTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};
	const deleteTodo = (text) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		setTodos(newTodos);
	};

	return (
		<>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>

			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
