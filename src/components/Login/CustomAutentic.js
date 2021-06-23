import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Container from '../Container';
import { useRouter } from 'next/router';


const initialValue = {
    resposta: '',
}

const CustomAutentic = ({ user }) => {

    const theme = useTheme();
    const router = useRouter();

    const [form, setForm] = React.useState(initialValue);
    const [error, setError] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [disabled, setDisabled] = React.useState(false);

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setForm({ ...form, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        if(user[0]?.RespostaPergunta !== form.resposta) {
            setError(true);
            setCount(count + 1)
            
        }
        if(user[0]?.RespostaPergunta === form.resposta){
            setError(false);
            router.push('/');
        }

        if (count == 3) {
            setError(false);
        }

    }

    console.log(count)

    return (
        <Container>
            <Grid item xs={12} sm={6}>
                <Typography component="h1" variant="h4" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                    Autenticação
                </Typography>
                <form style={{ width: '100%', marginTop: theme.spacing(1), }} onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        {count == 3 ? <Typography style={{width: '100%', display: 'flex', justifyContent: 'center', color: ''}}>Espere um pouco para tentar novamente</Typography> : <Typography style={{width: '100%', display: 'flex', justifyContent: 'center'}}>Resposta de segurança</Typography>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="resposta"
                            label="Resposta"
                            name="resposta"
                            error={error}
                            helperText={error ? "Reposta incorreta" : ""}
                            disabled={count == 3 ? true : false}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={count == 3 ? true : false}
                        >
                            verificação
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Container>
    )

}

const mapStateToProps = store => ({
    user: store.user.user && store.user.user.list,
});

export default connect(mapStateToProps)(CustomAutentic);
