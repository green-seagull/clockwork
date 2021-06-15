import React from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';

const styles = {
    lcd: {
        background: 'linear-gradient(45deg, #618121 30%, #618141 90%)',
        margin: '1em',
        padding: '1em',
    },
    plastic: {
        backgroundColor: "rgb(34, 34, 36)",
        padding: '2em',
        border: 1,
        style: { width: '5rem', height: '5rem' },
    },
    time: {
    },
};

class DigitalClockface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    render() {
        const { classes } = this.props;

        const year = this.state.date.getFullYear();
        const month = this.padNumber(this.state.date.getMonth() + 1);
        const day = this.padNumber(this.state.date.getDate());

        const hour = this.padNumber(this.state.date.getHours());
        const minute = this.padNumber(this.state.date.getMinutes());
        const second = this.padNumber(this.state.date.getSeconds());

        const time = `${hour}:${minute}:${second}`;
        const date = `${year}-${month}-${day}`;

        return (
            <Container maxWidth="sm">
                <Grid container className={classes.root} justify="center" spacing={2}>
                    <Grid item xs={12}>
                        <Card className={classes.plastic}>
                            <Box borderColor="rgb(34, 96, 230)" border={5} borderRadius={16} m={1}>
                                <Paper className={classes.lcd} variant="outlined">
                                    <Typography variant="h6" align="right">{date}</Typography>
                                    <Typography variant="h1" align="right">{time}</Typography>
                                </Paper>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        );
    }

    padNumber(number) {
        return `${number}`.padStart(2, '0')
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

export default withStyles(styles)(DigitalClockface);