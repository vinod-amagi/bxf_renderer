import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import {connect} from "react-redux";
import Schedules from './Schedules'
//import FileLoader from "./FileLoader";
import { fetchSchedule, loadSchedule } from './actions/Schedule';

const styles = theme => ({
  root: {
  },
  paper:{
    width: "250vh",
    height: "60vh",
    backgroundColor: "#f0f0f0",
    padding: "40px 25px"
  },
});

class Schedule extends React.Component {
  onScheduleLoaded = (file) => {
    
  }

  render() {
    const {classes} = this.props;

    if (!this.props.schedule){
      return <Paper className={classes.paper}>
        No data
        <Divider/>
      </Paper>
    }

    return (
        <Paper className={classes.paper}>
        <Divider/>
        <Schedules schedule={this.props.schedule}/>
      </Paper>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    schedule: state.schedule ? state.schedule: null,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      loadSchedule: (payload) => dispatch(loadSchedule(payload)),
      fetchSchedule: () => dispatch(fetchSchedule()),
  }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Schedule));
