import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
	justify-content: center;
	font-size: 1rem;
	border: 1px solid;
	border-color: #1a202d;
	border-radius: 4px;
	padding: 4px;
`;

const FormTarea = ({
	addTarea,
	boton,
	tareaEdicion,
	modoEdicion,
	guardarEdit,
}) => {
	const [edit, setEdit] = useState(tareaEdicion);
	const [error, setError] = useState(null);

	//console.log(`es ${tareaEdicion.titulo}  y el state vale ${edit.titulo} `);

	useEffect(() => {
		setEdit(tareaEdicion);
	}, [tareaEdicion]);

	const initialState = {
		id: 0,
		titulo: "",
		// fecha: new Date(),
		state: false,
		responsable: "",
		prioridad: "",
		descripcion: "",
	};

	const [task, setTask] = useState(initialState);

	const handleTask = (e) => {
		const { name, value } = e.target;

		if (modoEdicion) {
			setEdit({
				...edit,
				[name]: value,
			});
		} else {
			setTask({ ...task, [name]: value });
		}
	};

	const handleEdit = (e) => {
		e.preventDefault();

		const { titulo, descripcion, prioridad, responsable } = edit;
		if (titulo.trim() === "" || descripcion.trim() === "") {
			setError("Título y Descripción son campos obligatorios!");
			//alert("Debes completar título y descripción para poder continuar!");
			return;
		}

		const prio = () => {
			if (prioridad.trim() === "") {
				return "Low";
			} else {
				return edit.prioridad;
			}
		};

		const resp = () => {
			if (responsable.trim() === "") {
				return "SIN ASIGNAR";
			} else {
				return edit.responsable;
			}
		};

		const taskObjectEdit = {
			...edit,
			prioridad: prio(),
			responsable: resp(),
		};

		console.log(edit);

		setEdit(initialState);
		guardarEdit(taskObjectEdit);

		setError(null);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { titulo, descripcion, prioridad, responsable } = task;

		if (titulo.trim() === "" || descripcion.trim() === "") {
			setError("Título y Descripción son campos obligatorios!");
			//alert("Debes completar título y descripción para poder continuar!");
			return;
		}

		const prio = () => {
			if (prioridad.trim() === "") {
				return "Low";
			} else {
				return task.prioridad;
			}
		};

		const resp = () => {
			if (responsable.trim() === "") {
				return "SIN ASIGNAR";
			} else {
				return task.responsable;
			}
		};

		const taskObject = {
			...task,
			prioridad: prio(),
			responsable: resp(),
		};

		setTask(initialState);
		addTarea(taskObject);
		setError(null);
	};

	return (
		<Div>
			{error ? <span className="text-danger small">{error}</span> : null}
			<Form onSubmit={modoEdicion ? handleEdit : handleSubmit}>
				<Form.Group>
					<Form.Control
						type="text"
						name="titulo"
						placeholder="Título"
						onChange={handleTask}
						value={modoEdicion ? edit.titulo : task.titulo}
					/>

					<Form.Control
						type="text"
						name="descripcion"
						placeholder="Descripción"
						value={modoEdicion ? edit.descripcion : task.descripcion}
						onChange={handleTask}
					/>

					<Form.Control
						type="text"
						name="responsable"
						placeholder="Asignado a..."
						value={modoEdicion ? edit.responsable : task.responsable}
						onChange={handleTask}
					/>
					<Form.Control
						as="select"
						custom
						type="text"
						name="prioridad"
						value={modoEdicion ? edit.prioridad : task.prioridad}
						onChange={handleTask}
					>
						<option value="">Prioridad...</option>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</Form.Control>

					{boton === "Agregar" ? (
						<Button variant="dark w-100" type="submit">
							{boton}
						</Button>
					) : (
						<Button variant="primary w-100" type="submit">
							{boton}
						</Button>
					)}
				</Form.Group>
			</Form>
		</Div>
	);
};

export default FormTarea;
