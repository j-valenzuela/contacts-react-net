const HeaderStyles = theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    position: 'relative',
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
    },
  },
  toolBar: {
    paddingLeft: theme.spacing.unit / 2,
    paddingRight: theme.spacing.unit / 2
  }
  
});

export default HeaderStyles;