import { Test } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema, userModel } from './user.schema';
import { UserRepo } from './user.repo';
import { connect, connection, disconnect } from 'mongoose';



describe('User Repo', () => {


    beforeEach(function (done) {
        /*
          Define clearDB function that will loop through all 
          the collections in our mongoose connection and drop them.
        */
        function clearDB() {
            for (const i in connection.collections) {
                connection.collections[i].remove(function () { console.log('') });
            }
            return done();
        }

        /*
          If the mongoose connection is closed, 
          start it up using the test url and database name
          provided by the node runtime ENV
        */
        if (connection.readyState === 0) {
            connect(
                `mongodb://localhost:27017/jest`, // <------- IMPORTANT
                function (err) {
                    if (err) {
                        throw err;
                    }
                    return clearDB();
                }
            );
        } else {
            return clearDB();
        }
    });

    afterEach(function (done) {
        disconnect();
        return done();
    });

    afterAll(done => {
        return done();
    });




    let userRepo;

    const userData = { username: "test", email: 'test', image: 'image', password: 'test' }




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
    });


    // it('create & save user successfully', async () => {
    //     const validUser = new userModel(userData);
    //     const savedUser = await validUser.save();
    //     console.log(savedUser);
    //     // Object Id should be defined when successfully saved to MongoDB.
    //     expect(savedUser._id).toBeDefined();
    //     expect(savedUser.username).toBe(userData.username);
    //     expect(savedUser.email).toBe(userData.email);
    //     expect(savedUser.image).toBe(userData.image);
    //     expect(savedUser.password).toBe(userData.password);
    // });

    it('should return user', async () => {
        const username = Math.random.toString()
        userData.username = username
        await new userModel(userData).save();
        const user = await userModel.findOne({ username: userData.username })
        expect(user.username).toEqual(username)
        expect(user.email).toEqual(userData.email)
        expect(user.password).toEqual(userData.password)
        expect(user.image).toEqual(userData.image)
        expect(user._id).not.toBeNull()
    });



    describe('Get Users', () => {
        describe('Get User By Email', () => {
            it('Get User By Email Success', async () => {
                // await expect(userRepo.getUserByEmail('hasitha.chandula@gmail.com')).resolves.not.toBeUndefined()
            })

            it('Get User By Email Fail', async () => {
                // await expect(userRepo.getUserByEmail('hasitha.chandulas@gmail.com')).resolves.toBeNull()
            })
        });

        describe('Get User By Id', () => {
            it('Get User By Id Success', async () => {
                // await expect(userRepo.getUserById('5eac1d40790bac482cfbe39a')).resolves.not.toBeUndefined()
            })

            it('Get User By Id Fail', async () => {
                // await expect(userRepo.getUserByEmail('5eac1d40790bac482cfbe49a')).resolves.toBeNull()
            })
        });



    })




})