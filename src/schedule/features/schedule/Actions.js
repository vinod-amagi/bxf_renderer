import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { getLengthForMilliseconds } from './ShowWidths';

const scheduleStartTime = (schedule) => {
    let scheduleStartTime = null;

    for (let i in schedule.shows) {
        const show = schedule.shows[i]

        let startTime = Date.parse(show.event_data.start_date_time)
        if (!scheduleStartTime) {
            scheduleStartTime = startTime
            break
        }
    }
    return scheduleStartTime
}


const actionTime = (action) => {
    return Date.parse(action.at)
}


export const Actions = (props) => {
    if (!props.schedule) {
        return <div></div>
    }

    const start = scheduleStartTime(props.schedule)
    console.log(JSON.stringify(props.schedule))
    const actions = props.schedule.state ? props.schedule.state.actions : props.schedule.actions
    if (!actions) {
        return <div/>
    }
    return <div>
        {actions.map((action) => (
            <Grid style={{ width: "max-content" }} container direction="column" spacing={0} key={action}>
                <Grid item style={{ marginLeft: getLengthForMilliseconds(actionTime(action) - start) }}>
                    <ArrowUpward />
                </Grid>
                <Grid item>
                    <Paper style={{
                        backgroundColor: 'tan',
                        padding: 10,
                        textAlign: 'center',
                        color: "#525e66",
                    }}>
                        <strong>{action.action_type}</strong>
                    </Paper>
                </Grid>
            </Grid>
        ))}
    </div>
}
