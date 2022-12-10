import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppBar } from ".";

export default {
	title: "Layout/Appbar",
	component: AppBar,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	open: true
};
