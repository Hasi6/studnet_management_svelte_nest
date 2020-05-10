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

});