import React, { Fragment } from 'react';
import { css } from 'react-emotion';

const appFooter = css `
    padding: 0 32px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.26);
    background-color: #f3f3f3;
    color: #808080;
    min-height: 50px;
    height: 50px;
    max-height: 50px;
    @media screen and (max-width: 400px) {
        font-size: 12px;
        padding: 0 20px;
    }
`
const inlineBlock = css `
    font-family: Roboto;
    font-size: smaller;
    display: inline-block;
`

const Footer = props => {
   
    return (
        <Fragment>
            <footer className={appFooter}>
                <span className={inlineBlock}>Copyright Juan Valenzuela &copy; 2019</span>
            </footer>
        </Fragment>
    );
   
};
export default Footer;
