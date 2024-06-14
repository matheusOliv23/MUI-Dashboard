import {
  Divider,
  ListItem,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import React from 'react';
import { ItemList } from './item-list';
import Link from 'next/link';

export default function DrawerList({ itemList }: { itemList: ItemList[] }) {
  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {itemList.map((item) => (
          <Link key={item.id} href={item.route}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
