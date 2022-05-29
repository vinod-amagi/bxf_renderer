import yaml from 'js-yaml';
import * as actionTypes from "./actionTypes";
import { schedule } from './sampleSchedule';

export const fetchScheduleFulfilled = schedule => {
    return {
        type: actionTypes.FETCH_SCHEDULE_FULFILLED,
        payload: { schedule }
    }
}

export const fetchScheduleRejected = error => ({
    type: actionTypes.FETCH_SCHEDULE_REJECTED,
    payload: { error }
});

export const fetchSchedule = () => {
    return dispatch => {

        try {
            const doc = yaml.load(schedule);

            dispatch(fetchScheduleFulfilled(doc))
        } catch (e) {
            console.log(e);
            dispatch(fetchScheduleRejected(e))
        }
        return null
    }
}

export const loadSchedule = (file) => {
    return dispatch => {

        try {
            const reader = new FileReader()
            reader.onload = async (e) => {
                const text = (e.target.result)
                //console.log(text)

                const doc = yaml.load(text);
                dispatch(fetchScheduleFulfilled(doc))
            };
            reader.readAsText(file)
        } catch (e) {
            console.log(e);
            dispatch(fetchScheduleRejected(e))
        }
        return null
    }
}
