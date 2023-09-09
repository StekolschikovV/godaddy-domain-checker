import axios from "axios";

require('dotenv').config();

const apiKey = process.env.GODADDY_KEY;
const apiSecret = process.env.GODADDY_SECRET;
const targets: string = process.env.TARGETS || ""


const run = async () => {
    let available: string[] = []
    for (const domainName of targets.split(", ")) {
        const response: null | { available: boolean, definitive: boolean, domain: string }
            = await axios.get(`https://api.godaddy.com/v1/domains/available`, {
            headers: {
                Authorization: `sso-key ${apiKey}:${apiSecret}`,
            },
            params: {
                domain: domainName,
            },
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.error(error)
                return null
            })
        await new Promise(resolve => setTimeout(resolve, 500))
        if (response && response.available) {
            console.log(response)

        }
    }
}

run()