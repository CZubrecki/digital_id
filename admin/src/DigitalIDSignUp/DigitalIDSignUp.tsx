import 'date-fns';
import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Paper, Button, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { PROVINCES } from '../Assets/Provinces';
import { DigitalID } from '../Models/DigitalID';

export default function DigitalIDSignUp() {
    const classes = useStyles();
    const [customerNumber, setCustomerNumber] = useState<string>();
    const [givenName, setGivenName] = useState<string>();
    const [surname, setSurname] = useState<string>();
    const [eyes, setEyes] = useState<string>();
    const [height, setHeight] = useState<string>();
    const [sex, setSex] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [city, setCity] = useState<string>();
    const [province, setProvince] = useState<string>('Unselected');
    const [dateOfBirth, setDateOfBirth] = useState<Date | null>(
        new Date(),
    );
    const [submitted, setSubmitted] = useState<Boolean>(false)


    const handleDateChange = (date: Date | null) => {
        setDateOfBirth(date);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProvince(event.target.value as string);
    };

    const submitForm = () => {
        const data: DigitalID = {
            customerNumber: customerNumber,
            givenName: givenName,
            surname: surname,
            eyes: eyes,
            height: height,
            sex: sex,
            address: address,
            city: city,
            province: province,
            dateOfBirth: dateOfBirth,
        }
        console.log(data);
        setSubmitted(true);
    }

    const newID = () => {
        setSubmitted(false);
    }

    return (
        <>
            <div className={classes.root}>
                {submitted ? (
                    <>
                        <Paper square elevation={3}>
                            <Typography>
                                Success
                            </Typography>
                            <div className={classes.submitButton}>
                                <Button variant="contained" color="primary" onClick={() => newID()}>Create New ID</Button>
                            </div>
                        </Paper>
                    </>
                ) : (
                        <>
                            <Paper square elevation={3} className={classes.form}>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="customerNumber">Customer Number</InputLabel>
                                        <Input id="customerNumber" onChange={(event) => setCustomerNumber(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="givenName">Given Name</InputLabel>
                                        <Input id="givenName" onChange={(event) => setGivenName(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="surname">Surname</InputLabel>
                                        <Input id="surname" onChange={(event) => setSurname(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.datePicker} required>
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <Grid container justify="space-around">
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Date of Birth"
                                                    format="MM/dd/yyyy"
                                                    value={dateOfBirth}
                                                    onChange={handleDateChange}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </Grid>
                                        </MuiPickersUtilsProvider>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="eyes">Eyes</InputLabel>
                                        <Input id="eyes" onChange={(event) => setEyes(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="height">Height</InputLabel>
                                        <Input id="height" onChange={(event) => setHeight(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="sex">Sex</InputLabel>
                                        <Input id="sex" onChange={(event) => setSex(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="address">Address</InputLabel>
                                        <Input id="address" onChange={(event) => setAddress(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="city">City</InputLabel>
                                        <Input id="city" onChange={(event) => setCity(event.target.value)} />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="province">Province</InputLabel>
                                        <Select value={province} id='province' onChange={handleChange}>
                                            {PROVINCES && PROVINCES.map((value, key) => (
                                                <MenuItem id="province-label" key={key} value={value}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={classes.formControl} required>
                                        <InputLabel htmlFor="postalCode">Postal Code</InputLabel>
                                        <Input id="postalCode" />
                                    </FormControl>
                                </div>
                                <div className={classes.submitButton}>
                                    <Button variant="contained" color="primary" onClick={() => submitForm()}>Submit</Button>
                                </div>
                            </Paper>
                        </>
                    )}
            </div>
        </>
    );
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
        },
        form: {
            padding: '50px',
        },
        submitButton: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '25px'
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 300,
        },
        datePicker: {
            margin: theme.spacing(1),
        }
    }),
);