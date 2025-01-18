import { createClient } from "next-sanity"

const client = createClient({
    projectId: "db7tv9te",
    dataset: "production",
    useCdn: true,
    apiVersion: "2025-01-01"
})

export async function sanityFetch({query, params = {}}: {query : string, params?: any}){
    return await client.fetch(query, params)
}