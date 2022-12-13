import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SwitchInput } from ".";

export default {
	title: "Inputs/SwitchInput",
	component: SwitchInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof SwitchInput>;

const Template: ComponentStory<typeof SwitchInput> = (args) => <SwitchInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
