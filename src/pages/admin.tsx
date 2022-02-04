import { Box, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Container } from '@mui/material';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Guest } from '@/components/context/models';
import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';
import AdminSignIn from '@/components/AdminSignIn';
import UserCard from '@/components/UserCard';

interface ToggleValues {
    attending?: 'yes' | 'no' | 'maybe';
    partner?: 'true' | 'false';
    children?: 'true' | 'false';
}

const Admin: NextPage = () => {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [guests, setGuests] = useState<Guest[]>([]);
    const [values, setValues] = useState<ToggleValues>({});
    console.log('values: ', values);
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'attending' || e.target.name === 'partner' || e.target.name === 'children') {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            });
        }
    };

    const getAdminGuestList = async () => {
        const res = await fetch('/api/admin-guest-list');
        const data = await res.json();
        setGuests(data);
    };

    const checkAdminPassword = async () => {
        const res = await fetch('/api/check-password', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });
        const data = await res.json();
        if (data.admin) {
            setAdminAuthenticated(true);
            await getAdminGuestList();
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh', flexDirection: 'column' }}>
            <>
                {adminAuthenticated ||
                    (!session ? (
                        <div className={spin.spin} />
                    ) : (
                        <AdminSignIn error={error} checkAdminPassword={checkAdminPassword} setPassword={setPassword} />
                    ))}
            </>
            <>
                {adminAuthenticated && (
                    <Box sx={{ p: 4 }}>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl>
                                        <FormLabel id="attending">Attending:</FormLabel>
                                        <RadioGroup
                                            onChange={handleChange}
                                            aria-labelledby="rsvp-radio-buttons-group-label"
                                            defaultValue={false}
                                            name="attending"
                                            sx={{ flexDirection: 'row', verticalAlign: 'bottom' }}
                                        >
                                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="no" control={<Radio />} label="No" />
                                            <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            {/* <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl>
                                        <FormLabel id="partner">Bringing a partner:</FormLabel>
                                        <RadioGroup
                                            onChange={setToggleValues}
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
                            </Grid> */}
                        </Box>
                        {!Object.keys(values).length
                            ? guests.map((guest) => <UserCard key={guest._id} guest={guest} />)
                            : guests
                                  .filter((guest) => {
                                      console.log('guest, values: ', guest, values);
                                      return guest.attending === values.attending;
                                  })
                                  .map((guest) => <UserCard key={guest._id} guest={guest} />)}
                    </Box>
                )}
            </>
        </Container>
    );
};

export default Admin;
