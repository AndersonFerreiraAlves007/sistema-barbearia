import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CnpjInput } from ".";

export default {
	title: "Inputs/CnpjInput",
	component: CnpjInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof CnpjInput>;

const Template: ComponentStory<typeof CnpjInput> = (args) => <CnpjInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
