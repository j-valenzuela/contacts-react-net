// Icons
import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/Contacts';

// Pages
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';
    
export default {
  items: [{
      path: '/',
      name: 'Home',
      type: 'link',
      icon: HomeIcon,
      component: Home
    },    
    {
      path: '/contacts',
      name: 'Contacts',
      type: 'link',
      icon: ContactIcon,
      component: Contacts
    }    
  ]
}; 