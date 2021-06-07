import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
    },
}));

export default function CustomLogin() {

    const classes = useStyles();

    return (
        <Grid xs={12} sm={6} spacing={3}>
            <Typography component="h1" variant="h5" style={{width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}>
                Login
            </Typography>
            <Grid xs={6} sm={12} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="https://cdn.discordapp.com/attachments/738560722564415563/846526210954756156/gmail-icopn.png" style={{width: '50px'}}/>
                <img src="https://cdn.discordapp.com/attachments/738560722564415563/846526218362552320/faceboook-icon.png" style={{width: '50px'}}/>
            </Grid>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Relembre-me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Logar
          </Button>
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
            </form>
        </Grid>
    )
}