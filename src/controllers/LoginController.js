import axios from 'axios';
import { Store } from "../store";
import { setUser } from '../store/actions';

export default class LoginController {

    async index(data) {
        try {
            const responses = await axios.post(
                'http://localhost:3001/registro', {
                    email: data.email,
                    senha: data.senha
                }
            )

            this.setStores(...responses.map(res => res.data ? res.data : []))
            return Promise.resolve(responses)
        }
        catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }

    setStores(user){
        Store.dispatch(setUser({
            user: user
        }))
    }

}