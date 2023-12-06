import { Widget } from '@typeform/embed-react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const RSVP = () => {
    const router = useRouter();

    return (
        <>
            <Button
                onClick={() => router.push('/')}
                variant="contained"
                sx={{ width: '40px', ml: 4, mt: 4, color: 'white' }}
            >
                Back
            </Button>

            <Widget id="ULCDxC4s" style={{ height: '500px', width: '100%', margin: 'auto' }} className="rsvp-form" />
        </>
    );
};

export default RSVP;
