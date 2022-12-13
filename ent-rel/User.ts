import {Entity, Column ,PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        name:'name',
        type:'text',
        nullable:true
    })
    name:string;

    @OneToOne(()=>Profile)
    @JoinColumn( {name:'profile_id'})
    profile:Profile;

}
