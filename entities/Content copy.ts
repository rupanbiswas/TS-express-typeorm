import {Column,PrimaryGeneratedColumn} from "typeorm"

export abstract class Content{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
  
    @Column()
    desc:string;
}