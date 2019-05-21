const FooterStyles = theme => ({
    appFooter: {
        padding: '0 32px',
        display: 'flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 0px 5px 0 rgba(0, 0, 0, 0.26)',
        backgroundColor: '#f3f3f3',
        color: '#808080',
        minHeight: '50px',
        height: '50px',
        maxHeight: '50px',
        '@media screen and (max-width: 400px)': {
            fontSize: '12px',
            padding: '0 20px'
        }
    },
    inlineBlock: {        
        fontSize: 'smaller',
        display: 'inline-block'
    }
});

export default FooterStyles;