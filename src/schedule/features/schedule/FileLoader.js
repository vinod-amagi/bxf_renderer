import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';

import { FilePicker } from 'react-file-picker';
import { loadSchedule } from './actions/Schedule';

const styles = theme => ({
    root: {
        
    },
});

class FileLoader extends React.Component {

    onFileSelected = selectedFile => {
        //console.log(selectedFile)
        this.props.loadSchedule(selectedFile)
    }

    render() {
        const { classes } = this.props;

        return <FilePicker
            className={classes.root}
            onChange={(_file) => { this.onFileSelected(_file) }}
        >
            <Button variant="contained">
                Upload schedule
            </Button>
        </FilePicker>

    }
}

const mapStateToProps = (state) => {
    return {
        schedule: state.schedule.schedule,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        loadSchedule: (payload) => dispatch(loadSchedule(payload)),
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(FileLoader));
