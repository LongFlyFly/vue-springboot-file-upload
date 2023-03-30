import server from "./server";
export default{
    deleteimage(url){
        let params = new URLSearchParams();
        params.append('url',url)
        const req = server({
            url:'http://localhost:8081/api/delete',
            method:'POST',
            data:params
        })
        return req;
    },
    register(username,filename){
        let params = new URLSearchParams();
        params.append("username",username)
        params.append("filename",filename)
        const req = server({
            url:'http://localhost:8081/api/register',
            method:'POST',
            data:params
        })
        return req;
    }
}