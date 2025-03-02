interface SidebarSection {
    id: number;
    title: string;
    children: SidebarItem[];
}

interface SidebarItem {
    id: number;
    title: string;
    path?: string; // Optional for parent items
    children?: SidebarItem[]; // Optional for nested items
  }

export const sidebarContent: SidebarSection[] = [
  {
    id: 1,
    title: 'Workflows',
    children: [
      { id: 1, title: 'Create Workflow', path: '/workflows/create' },
      { id: 2, title: 'Manage Workflows', path: '/workflows/manage' },
    ],
  },
  {
    id: 2,
    title: 'Integrations',
    children: [
      { id: 3, title: 'Google Sheets', path: '/integrations/google-sheets' },
      { id: 4, title: 'Slack', path: '/integrations/slack' },
    ],
  },
];