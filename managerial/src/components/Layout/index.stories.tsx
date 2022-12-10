import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Layout } from ".";

export default {
	title: "Layout/Layout",
	component: Layout,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});

/* Primary.args = {
	primary: true,
	label: "App",
}; */
