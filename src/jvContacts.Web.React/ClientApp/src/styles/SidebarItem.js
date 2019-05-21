const SidebarItemStyles = theme => ({
    badge: {
      width: '20px',
      height: '20px',
      display: 'flex',
      zIndex: 1,
      flexWrap: 'wrap',
      fontSize: '0.75rem',
      alignItems: 'center',
      borderRadius: '50%',
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    menuLink: {
      textDecoration: 'none',
      color: theme.palette.primary.main,
      position: 'relative',
      display: 'block'
    },
    menuItem: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    menuIcon: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    menuSubItem: {
      paddingLeft: '55px',
      paddingRight: '55px'
    },
    menuCollapsed: {
      backgroundColor: theme.palette.action.hover,
    },
    menuActive: {
      backgroundColor: theme.palette.action.hover,
    },
    menuClosed: {
      backgroundColor: 'transparent'
    },
    caret: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    error: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
    },
  });
  
  export default SidebarItemStyles;