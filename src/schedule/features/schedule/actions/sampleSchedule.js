export const schedule = `
shows:
- event_data:
    event_id: show-1
    start_mode: Fixed 
    start_date_time: "2022-05-02T10:00:00.000Z"
    end_mode: Duration 
    end_date_time: "2022-05-02T10:30:00.000Z"
    event_type: Non-Live
  scheduled_elements: 
    - event_data: 
        event_id: e-111
        start_mode: Fixed 
        start_date_time: "2022-05-02T10:00:00.000Z" 
        end_mode: Duration
        end_date_time: "2022-05-02T10:15:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent
        event_params: 
          event_type: Program 
    - event_data: 
        event_id: e-112
        start_mode: Follow 
        start_date_time: "2022-05-02T10:15:00.000Z"
        end_mode: Duration 
        end_date_time: "2022-05-02T10:30:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent 
        event_params: 
          event_type: Program 
- event_data: 
    event_id: show-2
    start_mode: Fixed 
    start_date_time: "2022-05-02T10:20:00.000Z"
    end_mode: Duration 
    end_date_time: "2022-05-02T10:45:00.000Z"
    event_type: Non-Live
  scheduled_elements:
    - event_data: 
        event_id: e-211
        start_mode: Fixed 
        start_date_time: "2022-05-02T10:20:00.000Z" 
        end_mode: Duration 
        end_date_time: "2022-05-02T10:45:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent 
        event_params: 
          event_type: Program
- event_data:
    event_id: show-3
    start_mode: Fixed 
    start_date_time: "2022-05-02T10:45:00.000Z"
    end_mode: Duration 
    end_date_time: "2022-05-02T11:30:00.000Z"
    event_type: Non-Live
  scheduled_elements: 
    - event_data: 
        event_id: e-113
        start_mode: Fixed 
        start_date_time: "2022-05-02T10:45:00.000Z" 
        end_mode: Duration
        end_date_time: "2022-05-02T11:00:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent
        event_params: 
          event_type: Program 
    - event_data: 
        event_id: e-114
        start_mode: Follow 
        start_date_time: "2022-05-02T11:00:00.000Z"
        end_mode: Duration 
        end_date_time: "2022-05-02T11:30:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent 
        event_params: 
          event_type: Program 
- event_data:
    event_id: show-5
    start_mode: Follow 
    start_date_time: "2022-05-02T11:15:00.000Z"
    end_mode: Duration 
    end_date_time: "2022-05-02T12:00:00.000Z"
    event_type: Non-Live
  scheduled_elements: 
    - event_data: 
        event_id: e-115
        start_mode: Fixed 
        start_date_time: "2022-05-02T11:15:00.000Z" 
        end_mode: Duration
        end_date_time: "2022-05-02T11:45:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent
        event_params: 
          event_type: Program 
    - event_data: 
        event_id: e-116
        start_mode: Follow 
        start_date_time: "2022-05-02T11:45:00.000Z"
        end_mode: Duration 
        end_date_time: "2022-05-02T12:30:00.000Z"
        event_type: Non-Live
        event_params_type: PrimaryEvent 
        event_params: 
          event_type: Program 

actions: 
- action_type: Edit:/show-2/start_mode->Follow 
  at: "2022-05-02T10:10:00.000Z"
`