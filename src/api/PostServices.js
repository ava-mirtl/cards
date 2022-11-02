import axios from "axios";
import Error from "../components/error/error";

class PostServices {


    static async postWord(id, english,transcription,russian,tags) 
        {
        try{
           await axios.post('http://itgirlschool.justmakeit.ru/api/words/add',{
                id: id,
                english: english,
                transcription: transcription,
                russian: russian,
                tags: tags,
                tags_json: '[new]'
              })
              .then(function (response) {
                console.log(response);
              })}
              catch(e){
            return <>
            <div>Ошибка: {e.message}</div>
            <Error/> </>
        
    }
}}
export default PostServices

