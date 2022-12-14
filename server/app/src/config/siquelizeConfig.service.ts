import {SequelizeModuleOptions, SequelizeOptionsFactory} from "@nestjs/sequelize"
import {ConfigService} from "@nestjs/config"
import { EnumConfig } from "./enumConfig/enumConfig"
import { Feedback } from "src/feedback/models/feedback.model";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory{
    constructor(private readonly configService: ConfigService){}

    createSequelizeOptions(): SequelizeModuleOptions {
        const {
            pg:{dialect, logging,host,port,username,password,database},
        } = this.configService.get(EnumConfig.DATABASE);
        return {
            dialect, 
            logging,
            host,
            port,
            username,
            password,
            database,
            models:[Feedback],
            autoLoadModels:true,
            synchronize:true
        }
    }
}