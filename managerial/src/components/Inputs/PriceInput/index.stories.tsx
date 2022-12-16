import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PriceInput } from ".";
import { ContainerInputTest } from "../../../utils/ContainerInputTest";


export default {
	title: "Inputs/PriceInput",
	component: PriceInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof PriceInput>;

const Template: ComponentStory<typeof PriceInput> = (args) => <ContainerInputTest initValue={0}><PriceInput {...args} /></ContainerInputTest>;

export const Primary = Template.bind({});

function validator(value: any) {
	console.log(value);
	if(value > 50) {
		return {
			isError: true,
			errorMessage: "Não pode ser maior que 50"
		};
	}

	return {
		isError: false,
		errorMessage: ""
	};
}

Primary.args = {
	label: "Nome Geral22",
	validator: validator,
};
