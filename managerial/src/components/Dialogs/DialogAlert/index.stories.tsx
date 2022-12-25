import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DialogAlert } from ".";

import { ContainerDialogTest } from "../../../utils/ContainerDialogTest";

export default {
	title: "Dialogs/DialogAlert",
	component: DialogAlert,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof DialogAlert>;

const Template: ComponentStory<typeof DialogAlert> = (args) => (
	<ContainerDialogTest>
		<DialogAlert {...args} />
	</ContainerDialogTest>
);

export const Primary = Template.bind({});

Primary.args = {};
