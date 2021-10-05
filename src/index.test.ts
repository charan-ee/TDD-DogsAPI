import { getResponseofUrl } from "./index";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("mocking api call", ()  => {
    it("should return success after the api call", async () => {
        const url: string = 'https://dog.ceo/api/breeds/image/random/'
        const mockedResponse = {
            data: {
                message: "image1",
                status: 'success'
            },
            status: 200
        }
        mockedAxios.get.mockResolvedValue(mockedResponse)
        var response = await getResponseofUrl(url)
        expect(response).toBe(mockedResponse.status)

        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledWith(url)
    })
})