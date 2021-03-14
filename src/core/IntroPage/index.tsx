import React, { FC } from 'react'
import Box from '@material-ui/core/Box'
import { Divider } from '@material-ui/core'

import { ScreenContainer } from 'common/components/templates/ScreenContainer'
import { Text, TypographyStyles } from 'common/components/atoms/Typography'

import imghello from './assets/hello.jpg'
import img1 from './assets/1.jpg'
import imgpeople from './assets/people.jpg'
import img2 from './assets/2.jpg'
import imgflow from './assets/flow.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'

const IntroPage: FC = () => {
  return (
    <ScreenContainer center maxWidth={1100}>
      <img height={350} width={1100} src={imghello} alt="hello" />
      <Box
        display="flex"
        mt={3}
        style={{
          backgroundColor: '#E3E8E7',
          boxShadow: 'none',
        }}
      >
        <img height={290} width={220} src={img1} alt="motivation" />
        <Box p={3}>
          <Text type={TypographyStyles.sectionHeadline}>1. Motivation</Text>
          <Text>
            This project is about a video segment searching website. The idea
            comes from one of our friends, who loves to edit videos. Usually,
            people would be stuck on finding video clips including specific
            natural scenes, for example, the ocean before assembling pieces of
            footage. It’s time-consuming and frustrating to locate a certain
            frame from a at least 10-minute-long video. Therefore, it is
            necessary to find a solution that benefits video editors with a
            better searching experience.
          </Text>
        </Box>
        <Box ml={3} mt={8}>
          <img height={200} width={250} src={imgpeople} alt="people" />
        </Box>
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>
      <Box
        display="flex"
        mt={3}
        style={{
          backgroundColor: '#F4EFE7',
          boxShadow: 'none',
        }}
      >
        <Box p={3}>
          <Text type={TypographyStyles.sectionHeadline}>2. Our Goal</Text>
          <Text>
            After searching on the current solutions to video search engines, we
            noticed that existing tools, such as YOLOV3, are lacking functions
            of extracting timestamps on specific frames that contain keyword
            objects. Also, it does not support natural scene detection. Another
            drawback among existing solutions is the poorly designed user
            interface. As a consequence, our solution focuses on the object and
            natural scene detection and displaying results with the
            corresponding timestamps through a better accessible website.
          </Text>
          <Box pb={2} />
          <Text>
            We hope to help video editors quickly find the video segments they
            want. When the user queries a scene with the ocean. Our website can
            retrieve pre-processed and pre-store video data and return the
            desirable ocean scenes with the timestamp specified.
          </Text>
        </Box>
        <Box ml={3}>
          <img height={320} width={220} src={img2} alt="goal" />
        </Box>
      </Box>
      <Box mt={3} ml={15}>
        <img height={350} width={880} src={imgflow} alt="chart" />
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>
      <Box
        display="flex"
        mt={3}
        style={{
          backgroundColor: '#D7E2D7',
          boxShadow: 'none',
        }}
      >
        <img height={290} width={220} src={img3} alt="user manual" />
        <Box p={3}>
          <Text type={TypographyStyles.sectionHeadline}>3. User Manual</Text>
          <Text>
            This project is about a video segment searching website. The idea
            comes from one of our friends, who loves to edit videos. Usually,
            people would be stuck on finding video clips including specific
            natural scenes, for example, the ocean before assembling pieces of
            footage. It’s time-consuming and frustrating to locate a certain
            frame from a at least 10-minute-long video. Therefore, it is
            necessary to find a solution that benefits video editors with a
            better searching experience.
          </Text>
        </Box>
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>
      <Box
        display="flex"
        mt={3}
        style={{
          backgroundColor: '#E6EBF1',
          boxShadow: 'none',
        }}
      >
        <Box p={3}>
          <Text type={TypographyStyles.sectionHeadline}>
            4. Background Techonology
          </Text>
          <Text>
            After searching on the current solutions to video search engines, we
            noticed that existing tools, such as YOLOV3, are lacking functions
            of extracting timestamps on specific frames that contain keyword
            objects. Also, it does not support natural scene detection. Another
            drawback among existing solutions is the poorly designed user
            interface. As a consequence, our solution focuses on the object and
            natural scene detection and displaying results with the
            corresponding timestamps through a better accessible website.
          </Text>
          <Box pb={2} />
          <Text>
            We hope to help video editors quickly find the video segments they
            want. When the user queries a scene with the ocean. Our website can
            retrieve pre-processed and pre-store video data and return the
            desirable ocean scenes with the timestamp specified.
          </Text>
        </Box>
        <Box ml={3}>
          <img height={320} width={220} src={img4} alt="techonology" />
        </Box>
      </Box>
    </ScreenContainer>
  )
}

export default IntroPage