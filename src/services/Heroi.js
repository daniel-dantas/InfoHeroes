import req from './config'

export default{
    search: (nome)=>{
        return req.get('search/'+nome)
    }
}