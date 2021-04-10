export class RestClient {

    static baseUrl = "https://localhost:44310"

    static async getEnvironments() : Promise<any> {
        const url = `${RestClient.baseUrl}/viewAppEnvironments`
        const response = await window.fetch(url)
        return await response.json()
    }

    static async getConfigurations() : Promise<any> {
        const url = `${RestClient.baseUrl}/viewconfigurations`
        const response = await window.fetch(url)
        return await response.json()
    }    
    
    static async getConfiguration(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/viewconfigurations/${id}`
        const response = await fetch(url)
        return await response.json()
    }
    
    /*       
    -- Raul prøver seg på en funksjon for henting av admin credentials --
        static async getCredentials() : Promise<any> {
        const url = `${RestClient.baseUrl}/administrators`
        const response = await fetch(url)
        return await response.json()
    }
    */

}