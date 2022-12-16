import React, { FC, useState } from "react";

export interface ContainerInputTestProps {
	children: any;
	initValue: any;
}

export const ContainerInputTest: FC<ContainerInputTestProps> = ({ children, initValue }) => {
	const [value, setValue] = useState<any>(initValue);

	return React.Children.map(children, child => {
		return React.cloneElement(child, {
			value,
			onChange: (newValue) => setValue(newValue)
		});
	});
};

