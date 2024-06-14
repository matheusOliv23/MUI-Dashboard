import {
  Home,
  Settings,
  Notifications,
  Mail,
  Person,
  BarChart,
  PieChart,
  Checklist,
  CalendarMonth,
  Help,
  Logout,
  Group,
} from '@mui/icons-material';

export interface ItemList {
  id: number;
  label: string;
  route: string;
  icon: React.ReactNode;
}

export const itemList: ItemList[] = [
  { id: 1, label: 'Dashboard', route: '/dashboard', icon: <Home /> },
  { id: 2, label: 'Profile', route: '/profile', icon: <Person /> },
  { id: 3, label: 'Settings', route: '/settings', icon: <Settings /> },
  {
    id: 4,
    label: 'Notifications',
    route: '/notifications',
    icon: <Notifications />,
  },
  { id: 5, label: 'Messages', route: '/messages', icon: <Mail /> },
  { id: 6, label: 'Reports', route: '/reports', icon: <BarChart /> },
  { id: 7, label: 'Analytics', route: '/analytics', icon: <PieChart /> },
  { id: 8, label: 'Users', route: '/users', icon: <Group /> },
  { id: 9, label: 'Tasks', route: '/tasks', icon: <Checklist /> },
  { id: 10, label: 'Calendar', route: '/calendar', icon: <CalendarMonth /> },
  { id: 11, label: 'Help', route: '/help', icon: <Help /> },
  { id: 12, label: 'Logout', route: '/logout', icon: <Logout /> },
];
