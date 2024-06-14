import type { Meta, StoryObj } from '@storybook/react';
import DrawerList from '.';
import { Home, Person, Settings } from '@mui/icons-material';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export


const itemListMock = [
  { id: 1, label: 'Dashboard', route: '/dashboard', icon: <Home /> },
  { id: 2, label: 'Profile', route: '/profile', icon: < Person/> },
  { id: 3, label: 'Settings', route: '/settings', icon: <Settings /> },
];


const meta = {
  title: 'Components/DrawerList',
  component: DrawerList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    itemList: itemListMock
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {  },
} satisfies Meta<typeof DrawerList>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    itemList: itemListMock
  },
};


