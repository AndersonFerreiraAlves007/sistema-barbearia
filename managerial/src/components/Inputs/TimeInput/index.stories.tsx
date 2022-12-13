import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TimeInput } from ".";

export default {
	title: "Inputs/TimeInput",
	component: TimeInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof TimeInput>;

const Template: ComponentStory<typeof TimeInput> = (args) => <TimeInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
