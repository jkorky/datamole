import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Meta, StoryObj } from "@storybook/react";

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

export const Primary: Story = {
    args: {
        variant: "primary",
        children: <PlusIcon />,
    },
};

export const Icon: Story = {
    args: {
        variant: "icon",
        children: <Pencil1Icon />,
    },
};

export const IconDelete: Story = {
    args: {
        variant: "icon",
        children: <TrashIcon />,
    },
};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button variant="primary">
                <PlusIcon />
            </Button>
            <Button variant="icon">
                <Pencil1Icon />
            </Button>
            <Button variant="icon">
                <TrashIcon />
            </Button>
        </div>
    ),
};
