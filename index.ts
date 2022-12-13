import { CategoryEntity } from './ent/Category';
// import { Question } from './entities/Question';
import { Photo } from './entities/Photo';
import { Post } from './entities/Post';
import { Card } from './entities/Card';
// import { User } from './entities/User';

import {createConnection} from "typeorm"
import express from "express"
import { Content } from './entities/Content';
import { router } from './routes/routes';
import { Profile } from './ent-rel/Profile';
import {  User } from './ent-rel/User';
import { Photos } from './ent-rel/Photos';
import { Employee } from './ent-rel/Employee';
import { Category } from './ent-rel/Category';
import { Question } from './ent-rel/Question';

const app = express();
const PORT = 3001

const main = async()=>{
    try {
         await createConnection({
            type : "mysql",
            host: "localhost",
            port :3306,
            username:'root',
            password:'',
            database:'typeorm',
            synchronize:true,
            // entities:['./entities/*.ts'],
            // entities:[CategoryEntity],
            entities:[Profile,User,Photos,Employee,Question,Category],

            logging:true,
            // entities:[User,Card,Post,Photo,Question,Content]

        })
        console.log('connected to mysql')
    } catch (error) {
        console.log('mysql error'+error)
    }

}

main()

// app.get('/',(req,res)=>{
//     res.send('hello there')
// })

app.use('/',router)

app.listen(PORT,()=>{
    console.log('server started on port 3001')
})