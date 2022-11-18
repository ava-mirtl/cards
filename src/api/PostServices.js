import axios from "axios";
const corsUrl = 'https://cors-everywhere.herokuapp.com/';
class PostServices {
    static async postWord(param) 
        { 
        const baseUrlAdd = 'http://itgirlschool.justmakeit.ru/api/words/add';
        try{
           await axios.post(corsUrl + baseUrlAdd, param)
              .then(response => console.log(response.data))
            }
              catch(e){
               console.error(e.message)
    }
}
static async updateWords(id, param) {
    const baseUrlUpdate = `http://itgirlschool.justmakeit.ru/api/words/${id}/update`;
    axios.post(corsUrl + baseUrlUpdate, param)
        .then(response => console.log(response))
        .catch(error => console.error(error))
}

static async deleteWords(id) {
    const baseUrlDelete = `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`;

    axios.post(corsUrl + baseUrlDelete)
        .then(response => console.log(response.data))
        .catch(error => console.error(error))
}}

export default PostServices;

