import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: theme.spacing(6),
    },
}));

export default function CustomRegister() {

    const classes = useStyles();

    return (
        <Grid xs={12} sm={7}>
            <Typography component="h1" variant="h5" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                Registrar
            </Typography>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    label="Nome de usuario"
                    name="usuario"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email Adress"
                    type="email"
                    id="email"
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="repetirEmail"
                    label="Repita Email"
                    type="email"
                    id="repetirEmail"
                    autoComplete="email"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                    autoComplete="current-password"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="repetirSenha"
                    label="Repetir a senha"
                    type="password"
                    id="repetirSenha"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Registrar
          </Button>
            </form>
        </Grid>
    )
}