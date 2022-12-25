import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DialogScrool } from ".";

import { ContainerDialogTest } from "../../../utils/ContainerDialogTest";

export default {
	title: "Dialogs/DialogScrool",
	component: DialogScrool,
	/* argTypes: {
		backgroundColor: { control: "color" },
	}, */
} as ComponentMeta<typeof DialogScrool>;

const Template: ComponentStory<typeof DialogScrool> = (args) => (
	<ContainerDialogTest>
		<DialogScrool {...args} />
	</ContainerDialogTest>
);

export const Primary = Template.bind({});

Primary.args = {};
