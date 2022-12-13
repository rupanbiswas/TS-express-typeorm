// import { User } from './../entities/User';
import { Request,response,Response } from "express";
import { Employee } from "../ent-rel/Employee";
import { Photos } from "../ent-rel/Photos";
import { getManager,getRepository,getCustomRepository } from 'typeorm';
import { UserRepo } from '../customRepo/userRepo';

import { Profile } from '../ent-rel/Profile';
import {  User } from '../ent-rel/User';
import { Category } from "../ent-rel/Category";
import { Question } from "../ent-rel/Question";

//getmanager
const homeDetailOld = async(req:Request,resp:Response)=>{
    // insert
    const entityManager = getManager();
    // let data= await entityManager.insert(User,{
    //     name:'demo',
    //     phone:'456123789'
    // })

    //save
    // let user= new User();
    // user.name= "tup",
    // user.phone = "789456"
    // let data = await entityManager.save(user)

    //update
    // let data = await entityManager.update(User,2,{phone:'7894561237'})

    //delete
    // let data =await entityManager.delete(User,1)

    //find
    // let data = await entityManager.find(User)
    // let data =await entityManager.findOne(User,{where:{id:2}});

        //turncat
    let data = await entityManager.clear(User)
    resp.json({
        test:'ok',
        data:data
    })
}

//get reposotiory
const homeDetailold2 = async(req:Request,resp:Response)=>{
    // insert
    const repository = getRepository(User);
    // let data= await repository.insert({
    //     name:'demo',
    //     phone:'456123789'
    // })

    //save
    // let user= new User();
    // user.name= "tup",
    // user.phone = "789456"
    // let data = await repository.save(user)

    //update
    // let data = await repository.update(2,{phone:'7894561237'})

    //delete
    // let data =await repository.delete(1)

    //find
    // let data = await repository.find()
    // let data =await repository.findOne({where:{id:2}});

        //turncat
    let data = await repository.clear()
    resp.json({
        test:'ok',
        data:data
    })
}


//customSave
const homeDetailold3 = async(req:Request,resp:Response)=>{
    const UserRepository = getCustomRepository(UserRepo);
    // let data = await UserRepository.customSave("rupan","78287368726")
let data = await UserRepository.findByNameAndEmail("rupan","78287368726")

    resp.json({
        status:"ok",
        data:data
    })

}


//relation
const homeDetail = async(req:Request,resp:Response)=>{

    const entityManager = getManager();
    //  //save
    //  let profile= new Profile();
    //  profile.gender= "tup",
    //  profile.photo = "snjas"

    // await entityManager.save(profile)


    // let user= new User();
    // user.name= "tup",
    // user.profile = profile
    //  await entityManager.save(user)

    // let data = await entityManager.find(User)

  

    // let data =await entityManager.findOne(User,{where:{id:4}});
    // const employee = new Employee()
    // employee.name = 'test';
    // await entityManager.save(employee)

    // const p1 = new Photos();
    // p1.url = 'http://localhost:'
    // p1.employee = employee;
    // await entityManager.save(p1)

    
    // const p2 = new Photos();
    // p2.url = 'http://localhost:'
    // p2.employee = employee;
    // await entityManager.save(p2)



    // const p1 = new Photos();
    // p1.url = 'http://localhost:'
    // await entityManager.save(p1)

    
    // const p2 = new Photos();
    // p2.url = 'http://localhost:'
    // await entityManager.save(p2)

    // const employee = new Employee()
    // employee.name = 'test';
    // employee.photos = [p1,p2]
    // await entityManager.save(employee)


    const c1 = new Category();
    c1.name = 'c1';
   await entityManager.save(c1);


   const c2 = new Category();
   c2.name = 'c2';
  await entityManager.save(c2);

  const q1 = new Question();
  q1.title= 'title';
  q1.category= [c1,c2];
  await entityManager.save(q1);




    resp.json({
        status:"ok",
        data:q1
    })

}


//find relation and join

export {
    homeDetail
}