import { Router } from 'express';
import  UserSchema from './schemas.js';

const router = Router();

//회원 전체 목록 조회
router.get('/', async (req, res, next) => {

    try{
        const userList = await UserSchema.find().select({ _id: 0, userId: '$_id', email: 1, name: 1, pw: 1 }).exec();
        return res.status(200).json(userList);
    }catch(err){
        console.log(err);

    }
});

//한 회원의 userId를 주었을때 회원 정보를 조회
router.get('/:userid', async (req, res, next) => {
    try{
        const user = await UserSchema.findById(req.params.userid).select({ _id: 0, userId: '$_id', email: 1, name: 1, pw: 1 }).exec();
        
        return res.status(200).json(user);

    }catch(err){
        console.log(err);
    }
})

export default router;