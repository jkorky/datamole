import { Meta, StoryObj } from "@storybook/react-vite";

import { List } from "../List";
import { ListItem } from "../ListItem";

const meta = {
    title: "List",
    component: List,
} as Meta<typeof List>;
export default meta;

type Story = StoryObj<typeof List>;

export const WithItems: Story = {
    render: () => (
        <List>
            <ListItem
                label="Lorem ipsum dolor"
                isDone={false}
                onItemLabelEdit={() => {}}
                onItemDoneToggle={() => {}}
                onItemDelete={() => {}}
            />
            <ListItem
                label="Nullam Adipiscing Ridiculus Fusce"
                isDone={false}
                onItemLabelEdit={() => {}}
                onItemDoneToggle={() => {}}
                onItemDelete={() => {}}
            />
            <ListItem
                label="Mattis Tristique Parturient"
                isDone={true}
                onItemLabelEdit={() => {}}
                onItemDoneToggle={() => {}}
                onItemDelete={() => {}}
            />
        </List>
    ),
};
