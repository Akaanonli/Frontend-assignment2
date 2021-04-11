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
    
    static async getAdmins(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/admin`
        const response = await fetch(url)
        return await response.json()
    }



    static async getConfiguration(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/viewconfigurations/${id}`
        const response = await fetch(url)
        return await response.json()
    }


    static async getEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/viewAppEnvironments/${id}`
        const response = await fetch(url)
        return await response.json()
    }


    static async getAdmin(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/admin/${id}`
        const response = await fetch(url)
        return await response.json()
    }



    static addAdmin(admin: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/admin`
        return fetch(
                    url, 
                    { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(admin)
                    }
        )
    }

    static addConfiguration(envId: number, configuration: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/configurations/${envId}`
        return fetch(
                    url, 
                    { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(configuration)
                    }
        )
    }


    static addEnvironment(environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/appenvironments`
        return fetch(
                    url, 
                    { 
                        method: 'POST', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(environment)
                    }
        )
    }



    static changeAdmin(id: number, admin: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/admin/${id}`
        return fetch(
                    url, 
                    { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(admin)
                    }
        )
    }



    static changeConfiguration(id: number, configuration: any) : Promise<any> {
    const url = `${RestClient.baseUrl}/configurations/${id}`
    return fetch(
                url, 
                { 
                    method: 'PUT', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(configuration)
                }
        )
    }




    static changeAppEnvironment(id: number, environment: any) : Promise<any> {
        const url = `${RestClient.baseUrl}/appenvironments/${id}`
        return fetch(
                    url, 
                    { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(environment)
                    }
        )
    }


    static deleteAdmin(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/admin/${id}`
        return fetch(
                    url, 
                    { 
                        method: 'DELETE'
                    }
        )
    }

    static deleteConfiguration(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/configurations/${id}`
        return fetch(
                    url, 
                    { 
                        method: 'DELETE'
                    }
        )
    }



    static deleteAppEnvironment(id: number) : Promise<any> {
        const url = `${RestClient.baseUrl}/appenvironments/${id}`
        return fetch(
                    url, 
                    { 
                        method: 'DELETE'
                    }
        )
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