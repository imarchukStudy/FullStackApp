import axios from 'axios'
import { IFeedback ,IFeedbackState} from '../types/types';
export class feedbackApi{
    static async createFeedback(feedback:IFeedback):Promise<IFeedbackState[]>{
        const res = await axios.post('http://localhost:3001/feedbacks',feedback);
        return res.data;
    }
    
}