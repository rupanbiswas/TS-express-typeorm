import {Entity,TableInheritance,Column,PrimaryGeneratedColumn} from "typeorm"

@Entity()
@TableInheritance({column:{type:'varchar',name:'type'}})
export abstract class Content{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
  
    @Column()
    desc:string;

}