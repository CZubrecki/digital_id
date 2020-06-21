import 'date-fns';
import React from 'react';
import { FormControl, InputLabel, Input, Select, MenuItem, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default function DigitalIDSignUp() {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Paper square>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="customerNumber">Customer Number</InputLabel>
                            <Input id="customerNumber" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="givenName">Given Name</InputLabel>
                            <Input id="givenName" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="surname">Surname</InputLabel>
                            <Input id="surname" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
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
                        <FormControl>
                            <InputLabel htmlFor="eyes">Eyes</InputLabel>
                            <Input id="eyes" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="height">Height</InputLabel>
                            <Input id="height" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="sex">Sex</InputLabel>
                            <Input id="sex" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Address</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="my-input">City</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel id="label">Province</InputLabel>
                            <Select labelId="label" id="select" value="Manitoba">
                                <MenuItem value="Manitoba">Manitoba</MenuItem>
                                <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Postal Code</InputLabel>
                            <Input id="my-input" />
                        </FormControl>
                    </div>
                    <div>
                    </div>
                </Paper>
            </div>
        </>
    );
}