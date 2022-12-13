import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PasswordInput } from ".";

export default {
	title: "Inputs/PasswordInput",
	component: PasswordInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => <PasswordInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
