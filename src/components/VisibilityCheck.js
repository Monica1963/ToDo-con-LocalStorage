import React from "react";

const VisibilityCheck = ({ description, callback, isChecked }) => {
	return (
		<div className="form-check span5">
			<label htmlFor="form-check-label">
				{" "}
				{description}
				<input
					type="checkbox"
					className="form-check-input  "
					checked={isChecked}
					onChange={(e) => callback(e.target.checked)}
				/>
			</label>
		</div>
	);
};

export default VisibilityCheck;
