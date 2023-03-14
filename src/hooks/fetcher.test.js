import fetcher from "./fetcher"

describe('fetcher', () => {
    afterAll(() => jest.clearAllMocks())
    
    it('should send the correct headers', async () => {
        const mockFetch = jest.fn(() => Promise.resolve({ 
            json: () => ({})
        }))
        global.fetch = mockFetch
        const url = 'https://example.com'
        const params = {
            foo: 'bar'
        }
        await fetcher(url, params)
        expect(mockFetch).toHaveBeenCalledWith(url, {
            params: {...params},
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        })
    })
    
    it('should return the expected JSON response', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(
                JSON.stringify({
                    message: 'success'
                })
            )
        })
        const url = 'https://example.com/api'
        const params = {
            foo: 'bar'
        }
        const response = await fetcher(url, params)

        expect(response).toBe(JSON.stringify({
            message: 'success'
        }))
    })
})