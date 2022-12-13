import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { WeightInput } from ".";

export default {
	title: "Inputs/WeightInput",
	component: WeightInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof WeightInput>;

const Template: ComponentStory<typeof WeightInput> = (args) => <WeightInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
