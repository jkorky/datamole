import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        onItemDelete: { action: "removed" },
        onItemLabelEdit: { action: "edited" },
        onItemDoneToggle: { action: "done toggled" },
    },
} as Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

const emptyHandlers = {
    onItemLabelEdit: () => {},
    onItemDoneToggle: () => {},
    onItemDelete: () => {},
};

export const Default: Story = {
    args: {
        label: "Default",
        isDone: false,
        ...emptyHandlers,
    },
};
