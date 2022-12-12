import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PhoneInput } from ".";

export default {
	title: "Inputs/PhoneInput",
	component: PhoneInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof PhoneInput>;

const Template: ComponentStory<typeof PhoneInput> = (args) => <PhoneInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
