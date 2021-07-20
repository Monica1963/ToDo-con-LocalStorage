import { Row, Col, Button, Badge } from "react-bootstrap";
// import styled from "styled-components";

// const Alert = styled.div`
// 	align-items: center;
// 	justify-content: between;

// 	margin-bottom: 5px;
// 	border: 1px solid transparent;
// 	border-radius: 4px;
// 	color: #468847;
// 	background-color: #dff0d8;
// 	border-color: #d6e9c6;
// `;

const Task = ({ tarea, remove, toggleTask, modo }) => {
	const deleteT = () => {
		remove(tarea.id);
	};

	const toggle = () => {
		toggleTask(tarea);
	};

	const editar = () => {
		//console.log(tarea);
		modo(tarea);
	};

	return (
		<>
			<li className="list-group-item" key={tarea.id}>
				{/* <Alert key={tarea.id}> */}
				<Row className="row justify-content-between">
					<Col md={7}>
						<label>
							{" "}
							ID
							{tarea.id}- <span> </span>
						</label>{" "}
						<label>
							{tarea.titulo}: <span> </span>
						</label>{" "}
						<label> {tarea.descripcion}</label>
						<Badge variant="badge bg-secondary m-3"> {tarea.responsable}</Badge>
						<Badge variant="badge bg-primary m-3 ">{tarea.prioridad}</Badge>
					</Col>
					<Col md={2}>
						<button
							className={
								tarea.state
									? "btn btn-success btn-sm"
									: "btn btn-warning btn-sm"
							}
							onClick={toggle}
						>
							{tarea.state ? "Finalizada" : "Pendiente"}
						</button>
					</Col>
					{!tarea.state && (
						<Col md={3}>
							<Button variant="primary" size="sm" onClick={editar}>
								Editar
							</Button>{" "}
							<Button variant="danger" size="sm" onClick={deleteT}>
								{
									<span
										className="iconify"
										data-icon="bi-trash"
										data-inline="false"
									></span>
								}
							</Button>
						</Col>
					)}
				</Row>
				{/* </Alert> */}
			</li>
		</>
	);
};

export default Task;
