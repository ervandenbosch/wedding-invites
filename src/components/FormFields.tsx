import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { Dispatch } from './context';

const AddressForm = () => {
    const dispatch = Dispatch();
    const [sliderValue, setSliderValue] = useState<{ numberOfChildren: number | number[] }>({ numberOfChildren: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_USER_VALUES',
            payload: {
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleSliderChange = (_: Event, value: number | number[]) => {
        if (value !== sliderValue.numberOfChildren) {
            setSliderValue({ numberOfChildren: value });
        }
    };

    const handleSliderSubmit = () => {
        dispatch({
            type: 'UPDATE_USER_VALUES',
            payload: sliderValue,
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <TextField
                    onChange={handleChange}
                    required
                    id="fullName"
                    name="fullName"
                    label="Full name"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    onChange={handleChange}
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl sx={{ transform: 'translateY(15px)' }}>
                    <FormLabel required id="demo-radio-buttons-group-label">
                        Are you able to attend?
                    </FormLabel>
                    <RadioGroup
                        onChange={handleChange}
                        aria-labelledby="rsvp-radio-buttons-group-label"
                        defaultValue="maybe"
                        name="attending"
                        sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes, definitely" />
                        <FormControlLabel value="no" control={<Radio />} label="No, I can't" />
                        <FormControlLabel value="maybe" control={<Radio />} label="It's a maybe for now" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl sx={{ transform: 'translateY(15px)' }}>
                    <FormLabel required id="demo-radio-buttons-group-label">
                        Are you bringing a partner or plus one?
                    </FormLabel>
                    <RadioGroup
                        onChange={handleChange}
                        aria-labelledby="rsvp-radio-buttons-group-label"
                        defaultValue={false}
                        name="partner"
                        sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                    >
                        <FormControlLabel value control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <TextField
                    onChange={handleChange}
                    id="partnerName"
                    name="partnerName"
                    label="If so, what is their name?"
                    fullWidth
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl sx={{ transform: 'translateY(5px)' }}>
                    <FormLabel required id="demo-radio-buttons-group-label">
                        Are you bringing children?
                    </FormLabel>
                    <RadioGroup
                        onChange={handleChange}
                        aria-labelledby="rsvp-radio-buttons-group-label"
                        defaultValue={false}
                        name="children"
                        sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                    >
                        <FormControlLabel value control={<Radio />} label="Yes" />
                        <FormControlLabel value={false} control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth>
                    <FormLabel id="demo-radio-buttons-group-label">If so how many?</FormLabel>
                    <Slider
                        onChange={handleSliderChange}
                        onMouseUp={handleSliderSubmit}
                        aria-label="Always visible"
                        defaultValue={0}
                        step={1}
                        id="numberOfChildren"
                        marks
                        min={0}
                        max={10}
                        valueLabelDisplay="auto"
                        sx={{ width: '98%', ml: '1%' }}
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default AddressForm;