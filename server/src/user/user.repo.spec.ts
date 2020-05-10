import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from './user.schema';
import { UserRepo } from './user.repo';
describe('User Repo', () => {

    let userRepo;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [

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
                UserRepo
            ]
        }).compile();

        userRepo = await module.get<UserRepo>(UserRepo);
    })



    describe('Get Users', () => {
        describe('Get User By Email', () => {
            it('Get User By Email Success', async () => {
                await expect(userRepo.getUserByEmail('hasitha.chandula@gmail.com')).resolves.not.toBeUndefined()
            })

            it('Get User By Email Fail', async () => {
                await expect(userRepo.getUserByEmail('hasitha.chandulas@gmail.com')).resolves.toBeNull()
            })
        });

        describe('Get User By Id', () => {
            it('Get User By Id Success', async () => {
                await expect(userRepo.getUserById('5eac1d40790bac482cfbe39a')).resolves.not.toBeUndefined()
            })

            it('Get User By Id Fail', async () => {
                await expect(userRepo.getUserByEmail('5eac1d40790bac482cfbe49a')).resolves.toBeNull()
            })
        });

    })

})