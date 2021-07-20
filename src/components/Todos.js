import styled from "styled-components";
import Task from "./Task";

const Fila = styled.div`
	align-items: center;
	justify-content: center;
	padding: 1rem;
	background: #edf2f6;
`;

const Todos = ({ tareas, remove, toggleTask, titulo, modo }) => {
	return (
		<Fila>
			<h3>
				Lista<span> de Tareas {titulo}</span>
			</h3>

			{tareas.length === 0
				? "No hay tareas"
				: tareas.map((tarea) => (
						<Task
							key={tarea.id}
							tarea={tarea}
							remove={remove}
							toggleTask={toggleTask}
							modo={modo}
						/>
				  ))}
		</Fila>
	);
};

export default Todos;
