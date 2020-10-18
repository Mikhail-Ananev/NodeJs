import { UserController } from "../controllers/user";
import USERS from "./mockUserData.json";

const mockUserService = {
    getById: async (userId) => {
        return USERS.filter((user) => user.id === userId);
    },

    getList: async () => {
        return USERS;
    },

    create: async (userData) => {
        return {
            ...userData,
            isDeleted: false
        };
    },

    edit: async (userData) => {
        const user = USERS.filter((user) => user.id === userData.id)[0];

        user.login = userData.login;
        return { id: user.id, login: user.login };
    },

    delete: async (userId) => {
        return USERS.filter((user) => user.id === userId)[0];
    },
}

const userController = new UserController(mockUserService);

describe("Check methods \'UserController\' ", () => {
    let sendStatusMock;
    let jsonMock;
    let statusMock;
    let responseMock;
    let nextMock;
    let reqMock;

    beforeEach(() => {
        reqMock = {
            body: jest.fn(),
            query: jest.fn(),
            params: jest.fn(),
        };
        sendStatusMock = jest.fn();
        jsonMock = jest.fn();
        statusMock = jest.fn();
        responseMock = {
            sendStatus: sendStatusMock,
            json: jsonMock,
        };
        responseMock.status = statusMock.mockReturnValue(responseMock);
        nextMock = jest.fn();
    });

    it('GetUsers - should return all users', async () => {
        await userController.getUsers(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toBe(USERS);
    });

    it('GetUser by ID - should return correct value', async () => {
        let user = USERS[0];
        reqMock.params.id = user.id;

        await userController.getUser(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0][0]).toBe(user);
    });

    it('GetUser by ID - should return empty array', async () => {
        reqMock.params.id = "142813ad-c591-4a5f-b0cd-cabd1c93edd8"; // wrong Id

        await userController.getUser(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toEqual([]);
    });

    it('CreateUser - should 200 and return user with false \'isDeleted\' value', async () => {
        let user = {
            "login": "Victor",
            "password": "pass2",
            "age": 75,
        };
        reqMock.body = user;

        await userController.createUser(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toMatchObject({ ...user, isDeleted: false });
    });

    it('EditUser - should return new name value', async () => {
        let oldUser = {
            "id": "642813ad-c591-4a5f-b0cd-cabd1c93edd8",
            "login": "Vladimir",
        };
        let newUser = {
            "id": "642813ad-c591-4a5f-b0cd-cabd1c93edd8",
            "login": "Vlad",
        };

        reqMock.body = newUser;

        await userController.editUser(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toMatchObject(newUser);
        expect(jsonMock.mock.calls[0][0]).not.toMatchObject(oldUser);
    });
    
    it('DeleteUser - should be called', async () => {
        let userId = "1bdab053-9507-469d-9ac4-1a16f6712f08";
        reqMock.params.id = userId;

        await userController.deleteUser(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
    });
});
