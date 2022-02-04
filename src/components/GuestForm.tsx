import { Box, Container, Paper, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import validate from '@/lib/validate';
import FormFields from './FormFields';
import { useAppState } from './context';

const GuestForm = () => {
    const state = useAppState();
    const router = useRouter();
    const [error, setError] = useState<string>('');

    const formSubmitHandler = async () => {
        const validationError = validate(state);
        if (validationError) {
            setError(validationError);
        } else {
            const res = await fetch('/api/submit-guest', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
            });
            const data = await res.json();
            if (data.error) {
                setError(data.error);
            } else if (data) {
                router.push('/thanks');
            }
        }
    };

    return (
        <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper
                variant="elevation"
                elevation={3}
                sx={{ pt: '20px', pb: '20px', pl: 4, pr: 4, mt: '20px', backgroundColor: '#f8f8ff' }}
            >
                <Typography
                    sx={{ mt: 1, fontFamily: 'Seasons', letterSpacing: '1px' }}
                    variant={error ? 'h5' : 'h3'}
                    align="center"
                >
                    {error || 'R.S.V.P'}
                </Typography>
                <>
                    <FormFields />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            onClick={() => router.push('/')}
                            variant="contained"
                            sx={{ mt: 3, ml: 1, color: 'white' }}
                        >
                            Back
                        </Button>
                        <Button onClick={formSubmitHandler} variant="contained" sx={{ mt: 3, ml: 1, color: 'white' }}>
                            Send
                        </Button>
                    </Box>
                </>
            </Paper>
        </Container>
    );
};

export default GuestForm;
