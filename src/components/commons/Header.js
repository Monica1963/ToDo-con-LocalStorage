import React from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const Encabezado = styled.div`
	background-color: #282c34;
	min-height: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
`;

const Header = ({ cuenta, pendientes, finalizadas }) => {
	return (
		<>
			<Encabezado>
				<h1>TASK App ✔ </h1>
				<h2>
					<Badge variant="badge bg-secondary m-3">
						Pendientes: {cuenta.filter((t) => !t.state).length}
					</Badge>{" "}
					<Badge variant="badge bg-secondary m-3">
						Finalizadas: {cuenta.filter((t) => t.state).length}
					</Badge>{" "}
				</h2>
			</Encabezado>
		</>
	);
};

export default Header;
