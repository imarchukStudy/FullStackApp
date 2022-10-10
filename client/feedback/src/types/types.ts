export enum IFeedbackActionTypes{
    CREATE_FEEDBACK = 'CREATE_FEEDBACK'
}

export interface IFeedback{
    name:string;
    mail:string;
    message:string;
}

export interface IFeedbackState{
    feedbacks:IFeedback[]
}

export interface IFeedbackReducer{
    feedbackReducer:IFeedbackState;
}
export interface ICreateAction{
    type:IFeedbackActionTypes.CREATE_FEEDBACK;
    payload:object;
}

export type IFeedbackAction = ICreateAction;