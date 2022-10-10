import { IsNotEmpty} from 'class-validator'
export class ChangeFeedback{
    @IsNotEmpty()
    readonly name:string;
    @IsNotEmpty()
    readonly mail:string;
    @IsNotEmpty()
    readonly message:string;
}