import axios from "axios";

require('dotenv').config();

interface IDomainData {
    available: boolean
    definitive: boolean
    domain: string
}

class Checker {

    apiKey: string
    apiSecret: string

    constructor() {
        this.apiKey = process.env.GODADDY_KEY || ""
        this.apiSecret = process.env.GODADDY_SECRET || ""
    }

    check = async (domainName: string): Promise<IDomainData | null> => {
        return axios.get(`https://api.godaddy.com/v1/domains/available`, {
            headers: {
                Authorization: `sso-key ${this.apiKey}:${this.apiSecret}`,
            },
            params: {
                domain: domainName
            }
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error(error)
                return null
            })
    }

}

const checker = new Checker()

export default checker