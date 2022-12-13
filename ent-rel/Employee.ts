import {Entity, Column ,PrimaryGeneratedColumn,OneToOne,JoinColumn, OneToMany } from 'typeorm';
import { Photos } from './Photos';

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'name',
        type:'text',
        nullable:true
    })
    name:string;

    @OneToMany(()=>Photos,photos=>photos.employee)
    photos:Photos[];

}
