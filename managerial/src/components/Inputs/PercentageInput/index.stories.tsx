import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PercentageInput } from ".";

export default {
	title: "Inputs/PercentageInput",
	component: PercentageInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof PercentageInput>;

const Template: ComponentStory<typeof PercentageInput> = (args) => <PercentageInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
