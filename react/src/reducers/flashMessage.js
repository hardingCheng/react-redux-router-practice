import { ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE } from "../constants";
import shortid from 'shortid'
import _ from "lodash";
const flashMessages = (state = [], action={}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [...state,{
                id:shortid.generate(),
                type:action.message.type,
                text:action.message.text
            }]
        case DELETE_FLASH_MESSAGE:
            const index = _.findIndex(state,{ id:action.id  })
            if (index>=0){
                return [
                    ...state.slice(0, index),
                    ...state.slice(index+1)
                ]
            }
            return state
        default:
            return state
    }
}
export default flashMessages;
