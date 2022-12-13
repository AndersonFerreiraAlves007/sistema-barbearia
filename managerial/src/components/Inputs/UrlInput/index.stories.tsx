import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { UrlInput } from ".";

export default {
	title: "Inputs/UrlInput",
	component: UrlInput,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof UrlInput>;

const Template: ComponentStory<typeof UrlInput> = (args) => <UrlInput {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
