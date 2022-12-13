import {Entity, Column ,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Question } from './Question';

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'name',
        type:'text',
        nullable:true
    })
    name:string;

    @ManyToMany(()=>Question,question=>question.category)
    question:Question;

}
