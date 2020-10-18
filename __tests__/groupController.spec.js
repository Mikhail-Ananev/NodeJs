import { GroupController } from "../controllers/group";
import GROUPS from "./mockGroupData.json";

const mockGroupService = {
    getById: async (groupId) => {
        return GROUPS.filter((group) => group.id === groupId);
    },

    getList: async () => {
        return GROUPS;
    },

    create: async (groupData) => {
        return {
            ...groupData,
            id: 'new groudId value'
        };
    },

    edit: async (groupData) => {
        const group = GROUPS.filter((group) => group.id === groupData.id)[0];

        group.name = groupData.name;
        return { id: group.id, name: group.name };
    },

    delete: async (groupId) => {
        return GROUPS.filter((group) => group.id === groupId)[0];
    },
}

const groupController = new GroupController(mockGroupService);

describe("Check methods \'GroupController\' ", () => {
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

    it('GetGroups - should return all groups', async () => {
        await groupController.getGroups(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toBe(GROUPS);
    });

    it('GetGroup by ID - should return correct value', async () => {
        let group = GROUPS[0];
        reqMock.params.id = group.id;

        await groupController.getGroup(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0][0]).toBe(group);
    });

    it('GetGroup by ID - should return empty array', async () => {
        reqMock.params.id = "654813ad-c591-4a5f-b0cd-cabd1c93edd8"; // wrong Id

        await groupController.getGroup(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toEqual([]);
    });

    it('CreateGroup - should 200 and return group with any \'Id\' value', async () => {
        let group = {
            "name": "NewGroup",
        };
        reqMock.body = group;

        await groupController.createGroup(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0].id).toBeTruthy();
    });

    it('EditGroup - should return new name value', async () => {
        let oldGroup = {
            "id": "cf0cc123-8326-404b-800e-ac9ec616d9aa",
            "name": "OldGroup",
        };
        let newGroup = {
            "id": "cf0cc123-8326-404b-800e-ac9ec616d9aa",
            "name": "NewGroup",
        };

        reqMock.body = newGroup;

        await groupController.editGroup(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
        expect(jsonMock.mock.calls[0][0]).toMatchObject(newGroup);
        expect(jsonMock.mock.calls[0][0]).not.toMatchObject(oldGroup);
    });
    
    it('DeleteGroup - should be called', async () => {
        let groupId = "a38c810a-dad4-4c32-bc4f-0bb76fa25090";
        reqMock.params.id = groupId;

        await groupController.deleteGroup(reqMock, responseMock, nextMock);

        expect(statusMock.mock.calls[0][0]).toBe(200);
    });
});
