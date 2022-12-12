import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CepInput } from ".";

export default {
	title: "Inputs/CepInput",
	component: CepInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof CepInput>;

const Template: ComponentStory<typeof CepInput> = (args) => <CepInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
