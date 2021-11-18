import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Container from '../Container';
import { useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Store from "../../store/index";
import { setUser } from '../../store/actions';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const initialValue = {
    email: '',
    senha: '',
    resposta: '',
}

export default function CustomLogin(props) {
    const { isAuthenticated, signIn } = useContext(AuthContext);
    const [error, setError] = React.useState();
    const [form, setForm] = React.useState(initialValue);
    const [data, setData] = React.useState();
    const [isLogin, setIsLogin] = React.useState(false);
    const theme = useTheme();
    const router = useRouter();
    


    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }


    async function onSubmit(ev) {
        ev.preventDefault();

        console.log('submit')

        await signIn(form);

    
        if(isAuthenticated === false) {
            setError(true);
            setIsLogin(false);
        }
    }

    

    return (
        <Container style={{...props.style}}>
         <Grid item xs={12} sm={4}>
            <Typography component="h1" variant="h5" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                Login
            </Typography>
           
            <form style={{ width: '100%', marginTop: theme.spacing(1), }} onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    {isLogin 
                        ? 
                        <>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="resposta"
                                label="Resposta"
                                name="resposta"
                                value={form.resposta}
                                onChange={handleChange}
                            />
    
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </>
                        : 
                        <>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                error={error}
                                helperText={error ? "Login incorreto" : ""}
                                onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="senha"
                                label="Senha"
                                type="password"
                                id="Senha"
                                autoComplete="current-password"
                                error={error} 
                                onChange={handleChange}
                                />

                            <Button
                                onClick={() => setIsLogin(true)}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Próximo
                            </Button>
                        </>
                    }
                   
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu a senha ?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Não tem uma conta ? Registre-se"}
                            </Link>
                        </Grid>
                    </Grid>
                 </Grid>
                </form>
            </Grid>
        </Container>
    )
}
