import React from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { ShowElementNode } from './ShowElementNode';
import { getShowWidth, getShowNodeWidth } from './ShowWidths';

export const ShowNode = (props) => {
    return (
        <Paper style={{
            width: getShowWidth(props.data), backgroundColor: 'aqua',
            paddingTop: 2,
            paddingBottom: 2,
            textAlign: 'center',
            color: "#525e66",
        }}>
            <div>
                <Paper style={{
                    width: getShowNodeWidth(props.data), backgroundColor: 'tan',
                    //...theme.typography.body2,
                    paddingTop: 4,
                    paddingBottom: 4,
                    textAlign: 'center',
                    color: "#525e66",
                }}>
                    <strong>{props.data.event_data.event_id}</strong>
                    <Chip style={{ marginLeft: 5 }} label={props.data.event_data.start_mode} size="small" />
                </Paper>
            </div>
            <Divider />
            <Divider />
            <Grid container spacing={0} direction="row">
                {props.data.scheduled_elements.map((element) => (
                    <Grid item key={element.event_data.event_id}>
                        <ShowElementNode element={element} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
}

