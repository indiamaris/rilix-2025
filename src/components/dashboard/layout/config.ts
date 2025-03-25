import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
   
  { key: 'overview', title: 'DashBoard', href: paths.dashboard.overview, icon: 'home' },

  { key: 'overview', title: 'Licenses', href: paths.dashboard.overview, icon: 'licenses' },

 
  { key: 'integrations', title: 'Analitics', href: paths.dashboard.integrations, icon: 'chart-pie' },

  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
   { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },

] satisfies NavItemConfig[];
/*  */