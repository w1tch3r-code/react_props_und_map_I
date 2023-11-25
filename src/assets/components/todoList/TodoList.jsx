/* eslint-disable react/prop-types */
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    // console.log(props);
	return (
		<section>
			{props.todoArr.map((todo) => (
                // "todo=" wird an TodoItem übergeben und dort mit props.todo returned
				<TodoItem key={uuidv4()} todo={todo.todo} />
			))}
		</section>
	);
};

export default TodoList;
