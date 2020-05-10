import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepo } from './user.repo';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './user.schema';


describe('User Service', () => {

    let userRepo;
    let userService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                JwtModule.register({
                    secret: 'jwtSecret',
                    signOptions: {
                        expiresIn: 60 * 60 * 24 * 10
                    }
                }),
                MongooseModule.forRoot(process.env.NODE_ENV === 'production' ? "mongodb://localhost:27017/uni_event_creator" : "mongodb://localhost:27017/uni_event_creator", {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useFindAndModify: false,
                    useUnifiedTopology: true
                }),
                MongooseModule.forFeature([
                    { name: 'users', schema: UsersSchema }
                ]),
            ],
            providers: [
                UserService,
                UserRepo
            ]
        }).compile();

        userService = await module.get(UserService);
        userRepo = await module.get(UserRepo);
    })


    it('test', () => {

    })
})