import {$request} from "@/conponsables/request";

const base = 'http://localhost:52801'

enum requestEnums {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}
export function getArticleList(url: string, maxBehotTime: Date, minBehotTime: Date, size: number, tag: string ) {
    const requestUrl = base + url
    const data = {
        maxBehotTime,
        minBehotTime,
        size,
        tag
    }
    return $request(requestUrl, 'POST' as requestEnums, null,  data);
}
