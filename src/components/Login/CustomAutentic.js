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
const initialValue = {
    resposta: ''

}

export default function CustomAutentic() {


    const classes = useStyles();
    const [formData, setFormData] = React.useState(initialValue);

    const handleChange = (ev) => {
        const { name, value } = ev.target

        setFormData({ ...formData, [name]: value });
    }


    console.log(formData)

    return (

        <Grid xs={12} sm={6} spacing={3}>
            <Typography component="h1" variant="h4" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '20px' }}>
                Autenticação
            </Typography>
            <p component="h2" variant="h2" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '0px' }}>
                preencha abaixo com sua
            </p>
            <p component="h2" variant="h3" style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '0px' }}>
                resposta de segurança
            </p>


            <form className={classes.form} noValidate>
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
                    className={classes.submit}
                >
                    verificação
                </Button>
            </form>
        </Grid>
    )
}