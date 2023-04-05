import axios from "axios";

/*
Rodar a API com o IPv4: json-server --watch -d 180 --host 192.168.15.3 db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.15.3:3000/'
})

export default api