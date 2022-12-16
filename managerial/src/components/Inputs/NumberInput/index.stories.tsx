import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { NumberInput } from ".";
import { ContainerInputTest } from "../../../utils/ContainerInputTest";

export default {
	title: "Inputs/NumberInput",
	component: NumberInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = (args) => <ContainerInputTest initValue={0}><NumberInput {...args} /></ContainerInputTest>;

export const Primary = Template.bind({});

function validator(value: number) {
	if(value > 10) {
		return {
			isError: true,
			errorMessage: "Não pode ser maior que 10"
		};
	}

	return {
		isError: false,
		errorMessage: ""
	};
}

Primary.args = {
	decimalPlaces: 2,
	label: "Nome Geral",
	validator: validator,
	prefix: ""
};
