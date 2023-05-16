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
	return (
		<>
			<TodoCounter completed={16} total={25} />
			<TodoSearch />

			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
