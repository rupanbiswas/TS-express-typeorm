import {ChildEntity,Column} from "typeorm"
import { Content } from "./Content";

@ChildEntity()
export class Post extends Content{

    @Column()
    viewcount:string;
}