import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RatingInput } from ".";

export default {
	title: "Inputs/RatingInput",
	component: RatingInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof RatingInput>;

const Template: ComponentStory<typeof RatingInput> = (args) => <RatingInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
