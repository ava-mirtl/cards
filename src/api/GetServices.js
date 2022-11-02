import axios from "axios";
import Error from "../components/error/error";

class GetServices {


    static async getWord(){
        try{
            const responce = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
            return responce.data
        }
        catch(e){
            return <>
            <div>Ошибка: {e.message}</div>
            <Error/> </>
        }
    }
}
export default GetServices