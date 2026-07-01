import { PlusIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../Button";

const meta = {
    title: "Button",
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "default",
        children: <Pencil1Icon />,
    },
};

export const Emphasized: Story = {
    args: {
        variant: "emphasized",
        children: <PlusIcon />,
    },
};
