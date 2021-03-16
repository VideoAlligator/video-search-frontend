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
import object from './assets/object_detection.jpg'
import natural from './assets/naturalscene.jpg'

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
      <Box mt={3} ml={13}>
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
            This website provides two search methods: keywords and video names.
            When the user needs to find a frame with a specific object or scene,
            the user can enter the desired keyword in the search bar. Our search
            bar will provide automatic completion. The effective search results
            will be sorted by quality score. If the user is interested in a
            certain result, the user can click into the result to view the
            specific information of the video, including the video introduction,
            release date, and all keywords with corresponding timestamps. If you
            have any questions about use, please feel free to contact us.
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
            This tool is powered by object detection and scene detection machine
            learning models. For object detection, three APIs are used.
          </Text>
          <Box pb={1} />
          <Text>
            TMDB API: Get movie tralier YouTube ids from TMDb API These files
            contain metadata for all 45,000 movies listed in the Full MovieLens
            Dataset.
          </Text>
          <Box pb={1} />
          <Text>
            Pafy: A Python library to download YouTube content and retrieve.
            metadata
          </Text>
          <Box pb={1} />
          <Text>
            Image AI: It provids very powerful but easy way to use classes and
            functions to perform Video Object Detection. It allows users to
            perform all of these with state-of-the-art deep learning algorithms
            like RetinaNet, YOLOv3 and TinyYOLOv3.
          </Text>
        </Box>
        <Box ml={3}>
          <img height={320} width={220} src={img4} alt="techonology" />
        </Box>
      </Box>
      <Box mt={3} ml={15}>
        <img height={320} width={830} src={object} alt="object_detection_api" />
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
          <Text>
            For the nature scene detection, the ML model is trained with an
            annotated dataset published by Intel, which contains 6 categories of
            scenes. The model performs two task: feature extraction and scene
            classification.
          </Text>
          <Box pb={2} />
          <Text>
            For the feature extraction part, we applied transfer learning. We
            choose to use the feature extractor of an existing pretrained image
            classification model called AlexNet. The features are then passed to
            a new classifier. The classifier performs “nature scene detection”
            task. The model’s output contains the prediction result and the
            model’s confidence.
          </Text>
          <Box pb={2} />
          <Text>
            All predicted results will be processed by algorithms together with
            the corresponding time and stored in the database.
          </Text>
        </Box>
      </Box>
      <Box mt={3} ml={38}>
        <img
          height={350}
          width={500}
          src={natural}
          alt="natural_scene_detection"
        />
      </Box>
    </ScreenContainer>
  )
}

export default IntroPage
