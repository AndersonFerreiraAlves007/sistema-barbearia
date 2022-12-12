import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PriceInput } from ".";

export default {
	title: "Inputs/PriceInput",
	component: PriceInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof PriceInput>;

const Template: ComponentStory<typeof PriceInput> = (args) => <PriceInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
