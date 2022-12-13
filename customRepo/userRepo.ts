import { EntityRepository,AbstractRepository, EntityManager } from "typeorm"

import {User} from "../entities/User"

@EntityRepository(User)

// export class UserRepo extends AbstractRepository<User>{
//     customSave(name:string,phone:string){
// const user = new User();
// user.name = name;
// user.phone = phone;
//  return this.manager.save(user);
//     }

//     findByNameAndEmail(name:string, phone:string){
//         return this.repository.findOneBy({name,phone})
//     }
// }

export class UserRepo {
    constructor(private manager: EntityManager){
        
    }

    customSave(name:string,phone:string){
const user = new User();
user.name = name;
user.phone = phone;
 return this.manager.save(user);
    }

    findByNameAndEmail(name:string, phone:string){
        return this.manager.findOneBy(User,{name,phone})
    }
}