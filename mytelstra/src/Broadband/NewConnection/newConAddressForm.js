import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Indexnavbar from 'Broadband/navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { useState, useEffect } from 'react';
import axios from 'axios';



function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          MyTelstra
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));

export default function AddressForm(props) {
    const inputRef = React.useRef(null)
    const classes = useStyles();
    const [available, setAvailable] = useState(true);
    const [resp, setResponse] = useState();
    const [validate, validatePin] = useState(false);
    const [send, setSendRequest] = useState(false);
    const [address, setState] = useState({
        address1: "",
        address2: "",
        city: "",
        firstName: "",
        lastName: "",
        state: "",
        zip: "",
        address: ""
    });
    useEffect( () => {
        if(validate){
            const finalAddress = {
                street: address.address + address.address2,
                city: address.city,
                state: address.state,
                pincode: address.zip
            }
            console.log(finalAddress);
            axios
            .post("http://localhost:8088/address", {
                    // address: finalAddress
                    street: address.address,
                    city: address.city,
                    state: address.state,
                    pincode: address.zip
            })
            .then(response => {
              console.log(response);
              setResponse(response.data);
            });
            console.log(resp);
            setSendRequest(true);
            validatePin(false);
        }
    }, [validate, address, resp]);
    useEffect(() => {
        if(send){
            console.log(resp);
            console.log("Inside SetSendRequest")
            setSendRequest(false)
        }
    },[send, resp]);

    useEffect(() => {
      console.log(resp);
      if(resp === false){
        setAvailable(false);
      }
      inputRef.current.click();
    },[resp]);

    const setAddress = (event) => {
        setState({
            ...address,
            [event.target.name]: event.target.value
        });
        address.address = address.address1 + " " + address.address2;
        console.log(address);
    }
  console.log(props.authenticated + "New Connection");
  console.log(props.user + "New Connection");
  return (
    <React.Fragment>
      <Indexnavbar authenticated = {props.authenticated} user = {props.user} />
      <Box m={1} p={1}></Box>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h3" variant="h5" align="center">
            New Connection Address
          </Typography>
          <React.Fragment>
            <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                    onChange={setAddress}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="family-name"
                    onChange={setAddress}

                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete="shipping address-line1"
                    onChange={setAddress}
                    
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="shipping address-line2"
                    onChange={setAddress}

                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level2"
                    onChange={setAddress}

                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField id="state" name="state" label="State/Province/Region" onChange={setAddress}  fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    fullWidth
                    autoComplete="shipping postal-code"
                    onChange={setAddress}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete="shipping country"
                    onChange={setAddress}

                />
                </Grid>
                <Grid item xs={12}>
                    <p>{available ? "" : "Adress not available"}</p>
                </Grid>
            </Grid>
                <div className={classes.buttons}>
                  <Button
                    ref={inputRef}
                    href={resp ? "/Broadband/viewPlans" : ""}
                    variant="contained"
                    color="primary"
                    disabled={validate}
                    className={classes.button}
                    onClick={() => {
                      console.log("hello");
                      validatePin(true)
                      }}
                  >Proceed
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}