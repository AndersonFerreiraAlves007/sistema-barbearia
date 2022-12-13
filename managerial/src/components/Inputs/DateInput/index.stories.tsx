import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DateInput } from ".";

export default {
	title: "Inputs/DateInput",
	component: DateInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
