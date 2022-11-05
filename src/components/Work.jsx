import { Fingerprint } from '@mui/icons-material'
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import HomeDivider from './HomeDivider'

function Section(props) {
  return (
    <Box width="100%">
      <Paper
        elevation={3}
        sx={{
          m: 0.5,
          marginBottom: 2,
          p: 1,
          margin: 'auto',
          //   flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }} width="100%">
              {/* <Box
                component="img"
                sx={{
                  height: '70px',
                  justifyContent: 'flex-end',
                }}
                alt="twilio"
                src="assets/img/twilio.png"
              ></Box> */}
              <Typography variant="h3">{props.title}</Typography>
            </Box>

            <Grid item>
              <Typography variant="body1" fontStyle="italic">
                {props.summary}
              </Typography>
              <Grid container flexDirection="column">
                <Grid item>
                  {props.roles.map((role, index) => (
                    <Chip
                      label={role}
                      color="primary"
                      sx={{
                        fontSize: 'medium',
                        margin: '3px',
                        // fontFamily: 'BIZ UDPMincho, serif',
                      }}
                      key={index}
                      // variant="outlined"
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}>
            {/* <Paper
            sx={{
              m: 0.5,
              p: 1,
              margin: 'auto',
              //   flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          > */}
            <Stack direction="column">
              <Typography
                variant="body1"
                fontSize="1.3rem"
                component="p"
                fontWeight="300"
                // fontFamily="BIZ UDPMincho, serif"
              >
                {props.description}
              </Typography>
              <IconButton
                aria-label="fingerprint"
                // color="secondary"
                sx={{
                  '&:hover': {
                    background: 'none',
                    color: '#b09191',
                    // opacity: [0.9],
                  },
                }}
              >
                <Fingerprint />

                <Typography
                  component="a"
                  href={props.url}
                  variant="h6"
                  sx={{ textDecoration: 'none' }}
                  color="blue"
                  // fontFamily="BIZ UDPMincho, serif"
                >
                  Learn More
                </Typography>
              </IconButton>
            </Stack>
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default function Work() {
  return (
    <Box>
      {/* <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider> */}
      <Section
        title="Project 1"
        short="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo numquam exercitationem recusandae iusto culpa?"
        url="https://www.jackiebender.com"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aspernatur optio dolorem dolores consequatur officia ducimus veritatis."
        roles={['Role', 'Role']}
        summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quod?"
      ></Section>
      <Section
        title="Project 2"
        short="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, aperiam!"
        url="https://www.jackiebender.com"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam veritatis magnam."
        roles={['Role', 'Role']}
        summary=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa dolor quaerat magnam officia possimus."
      ></Section>
    </Box>
  )
}
