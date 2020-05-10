import { Test } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepo } from './user.repo';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './user.schema';


describe('User Service', () => {

    let userRepo;
    let userService;


    const mockUserRepo = () => {
        getUsers: jest.fn()
    }


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

        userService = await module.get<UserService>(UserService);
        userRepo = await module.get<UserRepo>(UserRepo);
    })


    describe('Get Users', () => {
        it('Get User By Email', async () => {
            // userService.getUserByEmail = jest.fn();
            // expect(userService.getUserByEmail).not.toHaveBeenCalled()
            const user = await userService.getUserByEmail('hasitha.chandula@gmail.com');
            expect(user).not.toBeUndefined();
            // expect(userService.getUserByEmail).toHaveBeenCalled()

        });

        it('Get User By Email Throw Error', async () => {
            await expect(userService.getUserByEmail('hasitha.chandulas@gmail.com')).rejects.toThrow()
        })
    })
})