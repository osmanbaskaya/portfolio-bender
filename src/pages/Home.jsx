import { Chip, Divider, Typography } from '@mui/material'
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
        nostrum neque architecto vero, in qui optio, nemo tempore minima
        accusantium voluptates ducimus cumque eius magni voluptatibus soluta
        aliquam odit reprehenderit reiciendis officia earum fuga dolores? Nisi
        qui ex quo vero. Doloremque error sit asperiores libero atque magni
        accusamus ex quam.
      </Typography>
      <HomeDivider
        id="work"
        label="Work @ Los Angeles
            County Department of Health Services"
      ></HomeDivider>
      <Work></Work>
      {/* <HomeDivider id="research" label="RESEARCH"></HomeDivider>
      <Articles /> */}
    </>
  )
}
