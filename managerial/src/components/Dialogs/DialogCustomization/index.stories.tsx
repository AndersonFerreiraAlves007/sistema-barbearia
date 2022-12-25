import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DialogCustomization } from ".";

import { ContainerDialogTest } from "../../../utils/ContainerDialogTest";

export default {
	title: "Dialogs/DialogCustomization",
	component: DialogCustomization,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof DialogCustomization>;

const Template: ComponentStory<typeof DialogCustomization> = (args) => (
	<ContainerDialogTest>
		<DialogCustomization {...args} />
	</ContainerDialogTest>
);

export const Primary = Template.bind({});

Primary.args = {};
