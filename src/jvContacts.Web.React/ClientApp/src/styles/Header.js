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
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5)
    },
    ellipseShape: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: -1,
      overflow: 'hidden',
      height: '100%',
      width: '560px',    
      '&:after': {
        content: '""',
        display: 'block',
        width: '870px',
        position: 'absolute',
        top: '-20px',
        right: '-300px',
        height: '280px',
        zIndex: 1,
        backgroundColor: 'rgba(255,255,255, 0.06)',
        borderRadius: '50% 0 0 50%'
      }
    }    
  });
  
  export default HeaderStyles;