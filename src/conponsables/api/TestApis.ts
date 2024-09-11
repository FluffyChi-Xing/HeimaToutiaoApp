import {$request} from "@/conponsables/request";

export function testApis() {
    const url = 'https://api.gumengya.com/Api/YiYan'
    const method = 'GET'
    return $request(url, method);
}
