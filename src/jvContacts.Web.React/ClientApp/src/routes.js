// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import ContactIcon from '@material-ui/icons/Contacts';
import LockIcon from '@material-ui/icons/Lock';

// Pages
import {
  Home,
  Contacts,
  Users
  } from './pages';

export default {
  items: [{
      path: '/',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },    
    {
      path: '/contacts',
      name: 'Contacts',
      type: 'link',
      icon: ContactIcon,
      component: Contacts
    },
    {
      name: 'Security',
      type: 'submenu',
      icon: LockIcon,
      children: [{
          path: '/users',
          name: 'Users',
          component: Users
        }
      ]
    },
  ]
}; 