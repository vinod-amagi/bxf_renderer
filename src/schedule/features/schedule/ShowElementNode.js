import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { getShowElementNodeWidth } from './ShowWidths';


export const ShowElementNode = memo(({ element }) => {
  return (
    <>
      <Paper style={{
        width: getShowElementNodeWidth(element), backgroundColor: 'lightblue',
        //...theme.typography.body2,
        //paddingTop: theme.spacing(1),
        paddingTop: 4,
        //paddingBottom: theme.spacing(1),
        paddingBottom: 4,
        textAlign: 'center',
        color: "#525e66",
      }}>
        <strong>{element.event_data.event_id}</strong>
        <Chip style={{ marginLeft: 5 }} label={element.event_data.start_mode} size="small" />
      </Paper>
    </>
  );
});
