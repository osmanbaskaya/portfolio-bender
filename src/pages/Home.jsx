import { Chip, Divider, Typography } from '@mui/material'
import Articles from '../components/Articles'
import Hero from '../components/Hero'
import HomeDivider from '../components/HomeDivider'
import Work from '../components/Work'

export default function Home() {
  return (
    <>
      <Hero />
      <Divider
        sx={{
          borderWidth: '5',
          borderColor: 'black',
          marginTop: '2em',
          marginBottom: '1em',
        }}
      ></Divider>
      <Typography variant="h5" fontStyle="italic">
        Some text
      </Typography>
      <HomeDivider id="work" label="MY WORK @ TWILIO"></HomeDivider>
      <Work></Work>
      {/* <HomeDivider id="research" label="RESEARCH"></HomeDivider>
      <Articles /> */}
    </>
  )
}
