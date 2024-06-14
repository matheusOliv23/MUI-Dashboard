import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Home, Person, Settings } from '@mui/icons-material';
import DrawerList from '.';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

const itemListMock = [
  { id: 1, label: 'Dashboard', route: '/dashboard', icon: <Home /> },
  { id: 2, label: 'Profile', route: '/profile', icon: <Person /> },
  { id: 3, label: 'Settings', route: '/settings', icon: <Settings /> },
];

vi.mock('next/router', () => require('next-router-mock'));

describe('DrawerList', () => {
  beforeEach(() => {
    mockRouter.push('/');
  });

  it('renders by default', () => {
    const { getByText } = render(<DrawerList itemList={itemListMock} />);

    itemListMock.forEach((item) => {
      expect(getByText(item.label)).toBeInTheDocument();
    });
  });

  it('should navigate to respective route when clicked', () => {
    const { getByText } = render(<DrawerList itemList={itemListMock} />, {
      wrapper: MemoryRouterProvider,
    });

    const dashboard = getByText('Dashboard');
    fireEvent.click(dashboard);

    expect(mockRouter.asPath).to.equal('/dashboard');
  });
});
