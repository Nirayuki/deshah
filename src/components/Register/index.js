import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import { useTheme } from '@material-ui/core/styles';
import RegisterController from '../../controllers/RegisterController';
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
}

export default function CustomRegister() {
    const router = useRouter();
    const theme = useTheme();
    
    const [formData, setFormData] = React.useState(initialValue);

    console.log(formData)

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setFormData({ ...formData, [name]: value });
        console.log()
    }

    function onSubmit(ev) {
        ev.preventDefault();

        axios.post('http://localhost:3001/registro', formData)
            .then((response) => {
                console.log(response)
                // router.push('/', response);
            });
    }

    return (
        <Container>
            <Grid item xs={12} sm={7}>
                <Typography component="h1" variant="h5" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                    Registrar
            </Typography>
                <form style={{width: '100%', marginTop: theme.spacing(1),}} onSubmit={onSubmit}>
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
                            helperText="No minimo 8 letras"
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
                            helperText="No minimo 8 letras"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{margin: theme.spacing(3, 0, 2), height: theme.spacing(6),}}
                        >
                            Registrar
                    </Button>
                    </Grid>
                </form>
            </Grid>
        </Container>

    )
}