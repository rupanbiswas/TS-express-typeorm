import {ChildEntity,Column} from "typeorm"
import { Content } from "./Content";

@ChildEntity()
export class Question extends Content{

    @Column()
    questioncount:string;
}