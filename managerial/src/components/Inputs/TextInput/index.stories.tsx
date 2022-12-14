import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from ".";
import { ContainerInputTest } from "../../../utils/ContainerInputTest";


export default {
	title: "Inputs/TextInput",
	component: TextInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <ContainerInputTest initValue={""}><TextInput {...args} /></ContainerInputTest>;

export const Primary = Template.bind({});

function validator(value: string) {
	if(value.length > 10) {
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
	label: "Nome Geral",
	validator: validator
};
