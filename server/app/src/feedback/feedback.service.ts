import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import{Feedback} from './models/feedback.model';
import { CreateFeedback } from './dto/create-feedback.dto';
import { toUnicode } from 'punycode';
import { ChangeFeedback } from './dto/change-feedback.dto';

@Injectable()
export class FeedbackService{
    constructor(
        @InjectModel(Feedback)
        private feedbackModel:typeof Feedback
    ){}

    async findAll():Promise<Feedback[]>{
        return this.feedbackModel.findAll();
    }
    findOne(id:string):Promise<Feedback>{
        return this.feedbackModel.findOne({
            where:{
                id
            }
        })
    }
    create(createFeedback:CreateFeedback):Promise<Feedback>{
        const feedback = new Feedback();
        feedback.name = createFeedback.name;
        feedback.mail = createFeedback.mail;
        feedback.message = createFeedback.message;
        return feedback.save();
    }

    update(id:string,ChangeFeedback:ChangeFeedback):Promise<[affectedCount:number,affectedRows:Feedback[]]>{
        return this.feedbackModel.update(
            {...ChangeFeedback},
            {
            where:{
                id
            }, 
            returning:true
            })
        }

    async remove(id:string):Promise<void>{
        const feedback = await this.findOne(id);
        await feedback.destroy();
    }
}