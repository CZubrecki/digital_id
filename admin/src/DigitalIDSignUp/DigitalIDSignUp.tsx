import 'date-fns';
import React, { useState } from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Paper, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { PROVINCES } from '../Assets/Provinces';

export default function DigitalIDSignUp() {
    const classes = useStyles();
    const [customerNumber, setCustomerNumber] = useState<String>();
    const [givenName, setGivenName] = useState<String>();
    const [surname, setSurname] = useState<String>();
    const [eyes, setEyes] = useState<String>();
    const [height, setHeight] = useState<String>();
    const [sex, setSex] = useState<String>();
    const [address, setAddress] = useState<String>();
    const [city, setCity] = useState<String>();
    const [province, setProvince] = useState<String>('Unselected');
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );


    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProvince(event.target.value as string);
    };

    const submitForm = () => {
        console.log(customerNumber);
        console.log(givenName);
        console.log(surname);
        console.log(eyes);
        console.log(height);
        console.log(sex);
        console.log(address);
        console.log(city);
        console.log(province);
        console.log(selectedDate);
    }

    return (
        <>
            <div className={classes.root}>
                <Paper square elevation={3} className={classes.form}>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="customerNumber">Customer Number</InputLabel>
                            <Input id="customerNumber" onChange={(event) => setCustomerNumber(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="givenName">Given Name</InputLabel>
                            <Input id="givenName" onChange={(event) => setGivenName(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="surname">Surname</InputLabel>
                            <Input id="surname" onChange={(event) => setSurname(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.datePicker}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date of Birth"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
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
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="eyes">Eyes</InputLabel>
                            <Input id="eyes" onChange={(event) => setEyes(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="height">Height</InputLabel>
                            <Input id="height" onChange={(event) => setHeight(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="sex">Sex</InputLabel>
                            <Input id="sex" onChange={(event) => setSex(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="address">Address</InputLabel>
                            <Input id="address" onChange={(event) => setAddress(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="city">City</InputLabel>
                            <Input id="city" onChange={(event) => setCity(event.target.value)} />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="province">Province</InputLabel>
                            <Select value={province} id='province' onChange={handleChange}>
                                {PROVINCES && PROVINCES.map((value, key) => (
                                    <MenuItem id="province-label" key={key} value={value.value}>{value.value}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="postalCode">Postal Code</InputLabel>
                            <Input id="postalCode" />
                        </FormControl>
                    </div>
                    <div className={classes.submitButton}>
                        <Button variant="contained" color="primary" onClick={() => submitForm()}>Submit</Button>
                    </div>
                </Paper>
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