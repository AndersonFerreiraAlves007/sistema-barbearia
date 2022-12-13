import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EmailInput } from ".";

export default {
	title: "Inputs/EmailInput",
	component: EmailInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
