import {Entity, Column ,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany, ManyToOne, ManyToMany ,JoinTable} from 'typeorm';
import { Category } from './Category';

@Entity()
export class Question{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'title',
        type:'text',
        nullable:true
    })
    title:string;

    @ManyToMany(()=>Category)
    @JoinTable()
    category:Category[];

}
