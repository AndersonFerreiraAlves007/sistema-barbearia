import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DialogFullscreen } from ".";

import { ContainerDialogTest } from "../../../utils/ContainerDialogTest";

export default {
	title: "Dialogs/DialogFullscreen",
	component: DialogFullscreen,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof DialogFullscreen>;

const Template: ComponentStory<typeof DialogFullscreen> = (args) => (
	<ContainerDialogTest>
		<DialogFullscreen {...args} />
	</ContainerDialogTest>
);

export const Primary = Template.bind({});

Primary.args = {};
