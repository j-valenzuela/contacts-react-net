import React from 'react';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import WorkspaceStyles from '../../styles/Workspace';

const Workspace = (props) => {
  const { classes, children, opened } = props;

  return (
    <main
      data-testid="workspace"
      className={clsx(classes.content, classes[`content-left`], {
        [classes.contentShift]: opened,
        [classes[`contentShift-left`]]: opened,
      })}
    >
      { children }
    </main>
  );
}

Workspace.prototypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  opened: PropTypes.bool
};

export default withStyles(WorkspaceStyles)(Workspace);