import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { useTheme } from '@material-ui/core/styles';
import Container from '../Container';
import axios from 'axios';


const inputs = [
    { id: 0, label: "Nome de usuario", name: "usuario" },
    { id: 1, label: "Senha", name: "senha", type: "password" },
    { id: 2, label: "Email Adress", name: "email", type: "email" },
]

const initialValue = {
    usuario: '',
    senha: '',
    email: '',
    repetirEmail: '',
    repetirSenha: '',
    pergunta: '',
    resposta: ''
}

export default function CustomRegister() {
    const router = useRouter();
    const theme = useTheme();

    const [formData, setFormData] = React.useState(initialValue);
    const [errorRepetirSenha, setErrorRepetirSenha] = React.useState(false);
    const [errorSenha, setErrorSenha] = React.useState(false);
    const [errorEmail, setErrorEmail] = React.useState(false);
    const [perguntas, setPerguntas] = React.useState({});
    const [value, setValue] = React.useState();


    React.useEffect(() => {
        getPergunta();
    }, []);

    function getPergunta() {

        axios.get('http://localhost:3001/perguntas')
            .then((response) => {
                setPerguntas(response.data);
            })
    }

    console.log(formData);

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setFormData({ ...formData, [name]: value });
    }



    function onSubmit(ev) {
        ev.preventDefault();

        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')

        if (formData.senha !== formData.repetirSenha) {
            setErrorRepetirSenha(true);
        }

        if (formData.email !== formData.repetirEmail) {
            setErrorEmail(true);
        }

        if (!strongPassword.test(formData.senha)) {
            console.log('caiu aqui')
            setErrorSenha(true);
        }

        console.log(strongPassword.test(formData.senha))

        if (formData.senha === formData.repetirSenha && formData.email === formData.repetirEmail && strongPassword.test(formData.senha)) {
            console.log('caiu para o banco')
            setErrorSenha(false);
            setErrorEmail(false);
            setErrorRepetirSenha(false);
            let new_data = formatData(formData, value);
            console.log(new_data);
            axios.post('http://localhost:3001/registro', new_data)
                .then((response) => {
                    console.log(response)
                    // router.push('/', response);
                });
        }

    }

    function formatData(data, pergunta) {
        return {
            usuario: data.usuario,
            senha: data.senha,
            email: data.email,
            idPergunta: pergunta.id,
            resposta: data.resposta
        }
    }
    return (
        <Container>
            <Grid item xs={12} sm={7}>
                <Typography component="h1" variant="h5" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                    Registrar
                </Typography>
                <form style={{ width: '100%', marginTop: theme.spacing(1), }} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="usuario"
                            label="Nome de Usuario"
                            name="usuario"
                            onChange={handleChange}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="E-mail"
                            name="email"
                            type="email"
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="repetirEmail"
                            label="Repetir E-mail"
                            name="repetirEmail"
                            type="email"
                            error={errorEmail}
                            helperText={errorEmail === true ? "Email incorreto" : ""}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="senha"
                            label="Senha"
                            name="senha"
                            type="password"
                            error={errorSenha}
                            helperText={errorSenha ? "Incorreta, minimo 8 letras, caracteres Especiais e Letra maiuscula " : "Minimo 8, letra minuscula, numero, caracteres Especiais e Letra maiuscula"}
                            onChange={handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="repetirSenha"
                            label="Repetir Senha"
                            name="repetirSenha"
                            type="password"
                            error={errorRepetirSenha}
                            helperText={errorRepetirSenha ? "Senha incorreta" : "Minimo 8, letra minuscula, numero, caracteres Especiais e Letra maiuscula"}
                            onChange={handleChange}
                        />

                        <Autocomplete
                            id={perguntas.id}
                            name="pergunta"
                            style={{ width: '100%' }}
                            required
                            onChange={(event, newValue) => {
                                setValue(newValue)
                            }}
                            options={perguntas}
                            getOptionLabel={(option) => option.descricao}
                            renderInput={(params) => <TextField {...params} variant="outlined" label="Pergunta de Segurança" />}
                        />

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="resposta"
                            label="Resposta"
                            name="resposta"
                            onChange={handleChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ margin: theme.spacing(3, 0, 2), height: theme.spacing(6), }}
                        >
                            Registrar
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Container>

    )
}