import { Meta, StoryObj } from "@storybook/react";

import { Layout } from "../Layout";
import { Header } from "../Header";
import { List } from "../List";
import { ListItem } from "../ListItem";
import { Footer } from "../Footer";

const meta = {
    title: "Layout",
    component: Layout,
} as Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;

export const Default: Story = {
    render: () => (
        <Layout>
            <Header onItemAdd={() => {}}>To Do app</Header>
            <List>
                <ListItem
                    label="Lorem ipsum dolor"
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
            <Footer todoItems={1} doneItems={1} />
        </Layout>
    ),
};

export const EmptyList: Story = {
    render: () => (
        <Layout>
            <Header onItemAdd={() => {}}>To Do app</Header>
            <List />
            <Footer />
        </Layout>
    ),
};
