describe('my Test', () => {
    it('return true', () => {
        expect(true).toEqual(true)
    })
});

// Feature
class FriendsList {
    friends = [];

    public addFriend = (name: string): void => {
        this.friends = [...this.friends, name]
        this.friendCalled(name);
    }

    public friendCalled = (name: string): void => {
        global.console.log(`${name} is called`)
    }

    public removeFriend = (name: string) => {
        const index = this.friends.indexOf(name);
        if (index === -1) {
            throw new Error('Friend Not Found');
        }
        this.friends.splice(index, 1);
    }


}

// Tests
describe('FriendsList', () => {


    let friendsList;

    beforeEach(() => {
        friendsList = new FriendsList();
    })

    // Initial Friend List
    it('initializes friend list', () => {
        expect(friendsList.friends.length).toEqual(0)
    });

    it('adds a friend to a list', () => {
        friendsList.addFriend('Hasi')
        expect(friendsList.friends.length).toEqual(1)
    });


    it('see name', () => {
        friendsList.friendCalled = jest.fn();
        expect(friendsList.friendCalled).not.toHaveBeenCalled()
        friendsList.addFriend('Hasi')
        expect(friendsList.friendCalled).toHaveBeenCalledWith('Hasi')
    })


    describe('Remove Friend', () => {
        // Remove a Friend From a List
        it('Remove a Friend from a List', () => {
            friendsList.addFriend('Test1');
            friendsList.addFriend('Test2');
            expect(friendsList.friends[1]).toEqual('Test2')
            friendsList.removeFriend('Test2')
            expect(friendsList.friends[1]).toBeUndefined()
        });

        it('Throw an Error', () => {

            expect(() => friendsList.removeFriend('Test2')).toThrow()
        })
    })


});