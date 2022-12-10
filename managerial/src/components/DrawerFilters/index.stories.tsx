import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MiniDrawer } from ".";

export default {
	title: "Layout/Drawer",
	component: MiniDrawer,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof MiniDrawer>;

const Template: ComponentStory<typeof MiniDrawer> = (args) => <MiniDrawer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	open: true
};
