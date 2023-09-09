import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { domain } = req.body;
    const response: null | { available: boolean, definitive: boolean, domain: string }
        = await axios.get(`https://api.godaddy.com/v1/domains/available`, {
        headers: {
            Authorization: `sso-key ${"dKP1Fg5ZiJPj_NzT2qz3PNC6pe7PAHGPP8J"}:${"JtLX72aiWvuzyLJWGinRks"}`,
        },
        params: {
            domain: domain,
        },
    })
        .then((response) => {
            return response.data
        })
        .catch((error) => {
            console.error(error)
            return null
        })
    res.status(200).json({ success: true });
}