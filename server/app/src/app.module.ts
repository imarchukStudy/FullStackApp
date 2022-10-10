import {Module} from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import {SequelizeModule} from '@nestjs/sequelize'
import {ConfigModule} from '@nestjs/config'
import { SequelizeConfigService } from './config/siquelizeConfig.service';
import { databaseConfig } from './config/configuration';

@Module({
    imports:[SequelizeModule.forRootAsync({
        imports:[ConfigModule],
        useClass:SequelizeConfigService,
    }),
    ConfigModule.forRoot({
        load:[databaseConfig]
    }),
    FeedbackModule]
})

export class AppModule{}