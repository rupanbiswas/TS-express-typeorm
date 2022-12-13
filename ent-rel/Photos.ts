import {Entity, Column ,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { Employee } from './Employee';

@Entity()
export class Photos{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'name',
        type:'text',
        nullable:true
    })
    url:string;

    @ManyToOne(()=>Employee,employee=>employee.photos)
    employee:Employee;

}
