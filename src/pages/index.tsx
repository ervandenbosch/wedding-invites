import { useRouter } from 'next/router';
import { Container, Button, Typography, Paper, Box } from '@mui/material';
import type { NextPage } from 'next';
import flex from '@/lib/flex';

const Home: NextPage = () => {
    const router = useRouter();

    return (
        <Container component="main" sx={{ ...flex, minHeight: '90vh' }}>
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
                        variant="h3"
                    >
                        Wedding
                        <Typography
                            sx={{
                                fontFamily: 'Comfortaa',
                                letterSpacing: '1px',
                                textAlign: 'center',

                                color: 'white',
                            }}
                            variant="h1"
                        >
                            Monika & Ezra
                        </Typography>
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
                        onClick={() => router.push('/rsvp')}
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
                            <Typography sx={{ mt: 6, fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Hey, you!
                            </Typography>
                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                Thank you for being our close friend/relative! On this page you will find more
                                information about our wedding, for which you are invited!
                                <br /> <br />
                                Do not forgot to
                                <Button id="user-form-link" onClick={() => router.push('/rsvp')} sx={{ m: 0 }}>
                                    <a>RSVP</a>
                                </Button>{' '}
                                ! :)
                            </Box>

                            <Typography
                                sx={{
                                    mt: 4,
                                    fontFamily: 'Comfortaa',
                                    letterSpacing: '1px',
                                }}
                                variant="h3"
                            >
                                Venue
                            </Typography>
                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                <p style={{ marginBottom: '20px' }}>
                                    We're celebrating our wedding in the beautiful venue " Ferme de Pignon", located in
                                    France, a couple hours drive north of Paris.
                                </p>
                                Click{' '}
                                <a
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    href="http://domainedemonenfance.com/ferme-du-pignon/"
                                >
                                    {' '}
                                    here
                                </a>{' '}
                                to go to the website of our venue.
                            </Box>
                            <Typography sx={{ mt: 4, fontFamily: 'Comfortaa', letterSpacing: '1px' }} variant="h3">
                                Programme
                            </Typography>

                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                {' '}
                                The wedding will take place on Saturday 27 July. <br /> A detailed programme will be
                                sent to your email.
                            </Box>
                            <Typography
                                sx={{
                                    mt: 4,
                                    fontFamily: 'Comfortaa',
                                }}
                                variant="h3"
                            >
                                Accomodation
                            </Typography>
                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                Do not worry - as our venue can accomodate all of you from Saturday until Sunday.
                                <br />
                                <br />
                                You will get a room assigned after we have processed the RSVPs.
                            </Box>
                            <Typography
                                sx={{
                                    mt: 4,
                                    fontFamily: 'Comfortaa',
                                    letterSpacing: '1px',
                                }}
                                variant="h3"
                            >
                                Gifts
                            </Typography>
                            <Box sx={{ mt: 3, mb: 6, textAlign: 'center' }}>
                                <p>As a gift we would appreciate a monetarily contribution.</p>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
