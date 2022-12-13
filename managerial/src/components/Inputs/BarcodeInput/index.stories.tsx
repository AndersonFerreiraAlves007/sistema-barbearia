import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BarcodeInput } from ".";

export default {
	title: "Inputs/BarcodeInput",
	component: BarcodeInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof BarcodeInput>;

const Template: ComponentStory<typeof BarcodeInput> = (args) => <BarcodeInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
