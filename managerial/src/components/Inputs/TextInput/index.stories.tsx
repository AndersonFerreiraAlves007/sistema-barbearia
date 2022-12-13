import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInput } from ".";

export default {
	title: "Inputs/TextInput",
	component: TextInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
