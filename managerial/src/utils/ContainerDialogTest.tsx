import React, { FC, useState, useRef } from "react";

export interface ContainerDialogTestProps {
	children: any;
}

export const ContainerDialogTest: FC<ContainerDialogTestProps> = ({
	children,
}) => {
	const refDialog = useRef<any>(null);

	function handleOpen() {
		if(refDialog.current) {
			refDialog.current.handleOpen();
		}
	}

	return (
		<>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					ref: refDialog,
				});
			})}
			<button onClick={handleOpen}>Abrir Dialogo</button>
		</>
	);
};
