import { getResponseofUrl } from "./index";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("mocking api call", ()  => {
    it("should return success after the api call", async () => {
        const mockedResponse: any = {
            message: "image1",
            status: 200
        }
        mockedAxios.get.mockResolvedValue(mockedResponse)

        getResponseofUrl()

        expect(axios.get).toHaveBeenCalled()
        expect(axios.get).toHaveBeenCalledWith('https://dog.ceo/api/breeds/image/random')
    })
})