import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterStyles from '../../styles/Footer';

const Footer = props => {
    const { classes } = props;
    return (
        <Fragment>
            <footer className={classes.appFooter} data-testid="footer">
                <span className={classes.inlineBlock}>Copyright Juan Valenzuela &copy; 2019</span>
            </footer>
        </Fragment>
    );
};

Footer.prototypes = {
    classes: PropTypes.object.isRequired
  };

export default withStyles(FooterStyles)(Footer);
