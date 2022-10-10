import {Module} from "@nestjs/common"
import {SequelizeModule} from "@nestjs/sequelize"
import { FeedbackController } from "./feedback.controller";
import { FeedbackService } from "./feedback.service";
import { Feedback } from "./models/feedback.model";
@Module({
    imports: [SequelizeModule.forFeature([Feedback])],
    providers: [FeedbackService],
    controllers: [FeedbackController],
})

export class FeedbackModule{}