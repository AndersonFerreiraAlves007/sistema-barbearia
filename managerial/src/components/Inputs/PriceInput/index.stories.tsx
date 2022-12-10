import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CpfInput } from ".";

export default {
	title: "Inputs/CpfInput",
	component: CpfInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof CpfInput>;

const Template: ComponentStory<typeof CpfInput> = (args) => <CpfInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
