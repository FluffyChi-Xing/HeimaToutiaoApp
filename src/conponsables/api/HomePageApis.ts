import {$request} from "@/conponsables/request";

const base = 'http://localhost:52801'
export function getArticleList(url: string, maxBehotTime: Date, minBehotTime: Date, size: number, tag: string ) {
    const requestUrl = base + url
    const data = {
        maxBehotTime,
        minBehotTime,
        size,
        tag
    }
    return $request(requestUrl, 'POST', null,  data);
}
