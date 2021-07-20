import React from "react";

import styled from "styled-components";
import FormTarea from "../FormTarea";

const PanelIzq = styled.div`
	font-size: 1.5rem;
	padding: 1.5rem;
	margin-top: 2rem;
	font-weight: 900;
`;

const Sidebar = ({
	addTarea,
	titulo,
	boton,
	tareaEdicion,
	modoEdicion,
	modo,
	guardarEdit,
}) => {
	return (
		<PanelIzq>
			{titulo}

			<FormTarea
				addTarea={addTarea}
				boton={boton}
				tareaEdicion={tareaEdicion}
				modoEdicion={modoEdicion}
				modo={modo}
				guardarEdit={guardarEdit}
			/>
		</PanelIzq>
	);
};

export default Sidebar;
