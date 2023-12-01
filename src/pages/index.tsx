import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Container, Button, Typography, Paper, Box } from '@mui/material';

import type { NextPage } from 'next';

import spin from '@/styles/spin.module.css';
import flex from '@/lib/flex';

const Home: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            router.replace('/signin');
        },
    });

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh' }}>
            {!session && <div className={spin.spin} />}
            {session && (
                <Container>
                    <Box
                        sx={{
                            height: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <img
                            src="https://2.bp.blogspot.com/-rXBto0Ejnhk/Um_Ki-EbAoI/AAAAAAAAINk/UaQ3IOFy3Bo/s1600/url.jpeg"
                            style={{
                                height: '80vh',
                            }}
                        />
                        <Typography
                            sx={{
                                mt: 12,
                                fontFamily: 'Comfortaa',
                                letterSpacing: '1px',
                                textAlign: 'center',
                                position: 'absolute',
                                color: 'white',
                            }}
                            variant="h1"
                        >
                            Wedding <br />
                            <br />
                            Monika & Ezra
                            <Typography
                                sx={{
                                    mt: 6,
                                    fontFamily: 'Comfortaa',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                    color: 'white',
                                }}
                                variant="h3"
                            >
                                27 July 2023
                            </Typography>
                        </Typography>

                        <Button
                            id="user-form-link"
                            onClick={() => router.push('/form')}
                            variant="contained"
                            sx={{ p: 3, m: 6, color: 'white' }}
                        >
                            R.S.V.P
                        </Button>
                    </Box>
                    <Container
                        maxWidth="lg"
                        disableGutters
                        sx={{
                            ...flex,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            mt: 2,
                            mb: 3,
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                flexGrow: 1,
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                pl: 0,
                                pr: 0,
                                backgroundColor: '#f8f8ff',
                            }}
                        >
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    width: '92%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',

                                    backgroundColor: '#f8f8ff',
                                    pl: 2,
                                    pr: 2,
                                }}
                            >
                                <Typography sx={{ m: 3, fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                    Hey, you!
                                </Typography>
                                <Box sx={{ m: 3, textAlign: 'center' }}>
                                    Thank you for being our close friend and/or relative.
                                </Box>

                                <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                    Venue
                                </Typography>
                                <Box sx={{ m: 3, textAlign: 'center' }}>
                                    <p>Ferme de Pignon.</p>
                                </Box>
                                <Typography sx={{ m: 3, fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                    Programme
                                </Typography>

                                <Typography sx={{ fontFamily: 'Comfortaa' }} variant="h3">
                                    Accomodation
                                </Typography>
                                <Box sx={{ m: 3, textAlign: 'center' }}>
                                    Do not worry - as our venue can accomodate all of you!
                                </Box>
                                <Typography sx={{ fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                    Gifts
                                </Typography>
                                <Box sx={{ mt: 3, mb: 6, textAlign: 'center' }}>
                                    <p>
                                        We would appreciate a contribution for the accomodation which can be done{' '}
                                        <a rel="noreferrer noopener" target="_blank" href="https://vercel.com">
                                            here
                                        </a>
                                        .
                                    </p>
                                </Box>
                            </Box>
                        </Paper>
                    </Container>
                </Container>
            )}
        </Container>
    );
};

export default Home;
