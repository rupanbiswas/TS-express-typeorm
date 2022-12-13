import { EntitySchema } from "typeorm";
import { isNamedTupleMember } from "typescript";



export const CategoryEntity = new EntitySchema({
    name:'person',
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
    name:{
        type:String,
        length:20
    },
    age:{
        type:Number,
        nullable:false
    }},
    checks:[{expression:`"age">18`}]
    }
)