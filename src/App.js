import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Todos from "./components/Todos";
import Header from "./components/commons/Header";
import Sidebar from "./components/commons/Sidebar";
import VisibilityCheck from "./components/VisibilityCheck";

function App() {
	const [tareas, setTareas] = useState([]);
	// const [user, setUser] = useState("Sin asignar");
	const [idTarea, setIdTarea] = useState(1);
	const [showCompleted, setShowCompleted] = useState(true);
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = useState("");

	const initialState = {
		id: 0,
		titulo: "",
		// fecha: new Date(),
		state: false,
		responsable: "",
		prioridad: "",
		descripcion: "",
	};

	useEffect(() => {
		let data = localStorage.getItem("tasks");
		let id = parseInt(localStorage.getItem("key"));
		if (data != null) {
			setTareas(JSON.parse(data));
			setIdTarea(id);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tareas));
		localStorage.setItem("key", idTarea);
	}, [tareas, idTarea]);

	const [tareaEdicion, setTareaEdicion] = useState(initialState);

	const modo = (tarea) => {
		setModoEdicion(true);
		setTareaEdicion(tarea);

		setId(tarea.id);
	};

	const guardarEdit = (tareaEditada) => {
		if (
			!tareas.find(
				(t) => t.titulo === tareaEditada.titulo && t.id !== tareaEditada.id
			)
		) {
			const tareasEditadas = tareas.map((item) =>
				item.id === id ? { id, ...tareaEditada } : item
			);

			setTareas(tareasEditadas);
			setModoEdicion(false);
			setTareaEdicion(initialState);
			setId("");
		} else {
			alert(`Ya existe una tarea con este Título: ${tareaEditada.titulo}`);
			return;
		}
	};

	useEffect(() => {
		setTareaEdicion(tareaEdicion);
	}, [tareaEdicion]);

	const listado = (statusValue) =>
		tareas.filter((t) => t.state === statusValue);

	const addTarea = (tarea) => {
		if (!tareas.find((t) => t.titulo === tarea.titulo)) {
			const newTarea = {
				...tarea,
				id: idTarea,
			};
			setIdTarea(idTarea + 1);

			setTareas([...tareas, newTarea]);
		} else {
			alert("Ya existe una tarea con ese Título");
			return;
		}
	};

	const remove = (index) => {
		//console.log(index);
		if (window.confirm("Confirmas eliminación?")) {
			const newTasks = tareas.filter((task) => task.id !== index);
			setTareas(newTasks);
		}
	};

	const toggleTask = (tarea) => {
		//console.log(tareas);
		setTareas(
			tareas.map((t) => (t.id === tarea.id ? { ...t, state: !t.state } : t))
		);
	};

	return (
		<>
			<Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
				<Header cuenta={tareas} />
				<Row>
					<Col md={3} variant="primary">
						<Sidebar
							addTarea={addTarea}
							titulo={modoEdicion ? "Editar Tarea" : "Nueva Tarea"}
							boton={modoEdicion ? "Guardar Cambios" : "Agregar"}
							tareaEdicion={tareaEdicion}
							modoEdicion={modoEdicion}
							modo={modo}
							guardarEdit={guardarEdit}
						/>
					</Col>
					<Col md={9} variant="secondary">
						<Todos
							tareas={listado(false)}
							remove={remove}
							toggleTask={toggleTask}
							titulo={"Pendientes"}
							modo={modo}
						/>
					</Col>
				</Row>
				<div className="bg-secondary-text-white text-center  p-2">
					{listado(true).length > 0 && (
						<VisibilityCheck
							description={"Ver Tareas Finalizadas"}
							isChecked={showCompleted}
							callback={(checked) => setShowCompleted(checked)}
						/>
					)}
				</div>
				{showCompleted && (
					<table className="table  table-stripped table-bordered">
						<thead>
							{/* <tr>
								<th>Descripción</th>
								<th>Fecha Fin</th>
							</tr> */}
						</thead>
						<tbody>
							<tr>
								<td variant="dark" size="sm">
									<Todos
										tareas={listado(true)}
										remove={remove}
										toggleTask={toggleTask}
										titulo={"Finalizadas"}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				)}
			</Container>
		</>
	);
}

export default App;
