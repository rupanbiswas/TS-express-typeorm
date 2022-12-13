import {Entity,Column,PrimaryGeneratedColumn,BaseEntity} from "typeorm"

@Entity()
export class Card extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    type:string;
  
    @Column()
    category:string;

}