import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import Container from '../Container';


const CustomAutentic = ({ user }) => {

    const theme = useTheme();

    console.log(user);

    function onSubmit(ev) {
        ev.preventDefault();

        

    }

    return (
        <Container>
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

                <form style={{ width: '100%', marginTop: theme.spacing(1), }} onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="resposta"
                            label="Resposta"
                            name="resposta"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
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
