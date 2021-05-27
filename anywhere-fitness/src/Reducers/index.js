import { 
    FETCH_START, 
    FETCH_SUCCESS, 
    FETCH_FAIL,
    ADD_CLASS 
} from '../Actions';

const initialState = {
    classes: { 
            Id: 8, 
            ClassId: 78, 
            Duration: "", 
            Attendees: 20, 
            IntensityLevel: "", 
            Location: "",
            MaxClassSize: 20,
            Name: "",
            StartTime: "",
            Type: ""
        },
    isFetching: false,
    error: ""
}

export const reducer = (state = initialState, action ) => {
    switch(action.type) {
        case FETCH_START:
            return ({
                ...state,
                isFetching: true
            });
        case FETCH_SUCCESS:
            return ({
                ...state,
                classes: action.payload,
                isFetching: false
            });
        case FETCH_FAIL: 
            return ({
                ...state,
                error: action.payload,
                isFetching: false
            });
        case ADD_CLASS: 
            const newClass = {
                Id: action.payload, 
                ClassId: action.payload, 
                Duration: action.payload, 
                Attendees: action.payload, 
                IntensityLevel: action.payload, 
                Location: action.payload,
                MaxClassSize: action.payload,
                Name: action.payload,
                StartTime: action.payload,
                Type: action.payload
            }
            return {
                ...state,
                classes: [...state, newClass]
            }; 

        default:
            return state;           
    }
}