import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IntegerInput } from ".";

export default {
	title: "Inputs/IntegerInput",
	component: IntegerInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof IntegerInput>;

const Template: ComponentStory<typeof IntegerInput> = (args) => <IntegerInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
