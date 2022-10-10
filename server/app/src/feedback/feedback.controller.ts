import { FeedbackService } from "./feedback.service"

import{Get,Controller,Param,Post,Body,HttpCode,HttpStatus,Header,Patch,Delete} from "@nestjs/common"
import { CreateFeedback } from "./dto/create-feedback.dto";

@Controller('feedbacks')
export class FeedbackController{
    constructor(
        private readonly FeedbackService:FeedbackService
    ){}

    @Get()
    getAllFeedbacks(){
        return this.FeedbackService.findAll()
    }

    @Get(':id')
    getOneFeedback(@Param('id') id:string){
        return this.FeedbackService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type','application/json')
    CreateFeedback(@Body() CreateFeedback: CreateFeedback){
        return this.FeedbackService.create(CreateFeedback)
    }

    @Patch(':id')
    changeFeedback(@Body() changeFeedback:CreateFeedback, @Param('id') id:string){
        return this.FeedbackService.update(id,changeFeedback)
    }
    @Delete('id')
    deleteFeedback(@Param('id') id:string){
        return this.FeedbackService.remove(id)
    }
}