import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FloatInput } from ".";

export default {
	title: "Inputs/FloatInput",
	component: FloatInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof FloatInput>;

const Template: ComponentStory<typeof FloatInput> = (args) => <FloatInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
