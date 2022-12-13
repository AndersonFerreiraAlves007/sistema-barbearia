import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ColorInput } from ".";

export default {
	title: "Inputs/ColorInput",
	component: ColorInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof ColorInput>;

const Template: ComponentStory<typeof ColorInput> = (args) => <ColorInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
