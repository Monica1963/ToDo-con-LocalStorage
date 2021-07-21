import { Row, Col, Button, Badge } from "react-bootstrap";

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
				<Row className="row justify-content-between">
					<Col md={3}>
						<label>
							{" "}
							ID
							{tarea.id}- <span> </span>
						</label>{" "}
						<label>
							{tarea.titulo}: <span> </span>
						</label>{" "}
					</Col>
					<Col md={3}>
						<label> {tarea.descripcion}</label>
					</Col>
					<Col md={1}>
						<Badge
							variant={
								tarea.responsable === "Sin asignar"
									? "badge bg-secondary m-3"
									: "badge bg-info m-3"
							}
						>
							{" "}
							{tarea.responsable}
						</Badge>
					</Col>
					<Col md={1}>
						<Badge variant="badge bg-primary m-3 ">{tarea.prioridad}</Badge>
					</Col>
					<Col md={1}>
						<button
							data-bs-toggle="tooltip"
							title="Cambiar Estado"
							tabindex="0"
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
						<Col md={2}>
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
			</li>
		</>
	);
};

export default Task;
