import axios from 'axios';
import http from '../services/api';

export default class RegisterController {

    async index(filters) {
        try {
            const responses = await axios.post(
                'http://localhost:3001/registro', {
                    usuario: "Teste2",
                    senha: 1234567,
                    email: "teste@gmail.com"
                }
            )
            return Promise.resolve(responses)
        }
        catch (err) {
            console.log(err)
            return Promise.reject(err)
        }
    }

}