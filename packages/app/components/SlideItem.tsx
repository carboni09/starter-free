
import {
    Anchor,
    Button,
    H1,
    H2,
    H4,
    Image,
    Paragraph,
    ScrollView,
    Separator,
    Sheet,
    useToastController,
    XStack,
    YStack,
    ZStack,
    MyComponent,
    H5,
    useWindowDimensions,
    AnimatePresence,
    H6,
    H3
} from '@my/ui'
import { ChevronDown, ChevronUp, PlayCircle } from '@tamagui/lucide-icons'
import { Suspense, useRef, useState, useEffect } from 'react'
import { useLink } from 'solito/link'
import { LinearGradient } from '@tamagui/linear-gradient'
//import { LinearGradient } from 'tamagui/linear-gradient'

import Video from 'next-video';
import useEmblaCarousel from 'embla-carousel-react'
import { useKeenSlider } from 'keen-slider/react'
import { Carousel, CarouselItem } from 'packages/ui/src/Carousel'
import { SectionList, Text, FlatList } from 'react-native-web'
import { StyleSheet } from 'react-native'
import Slider from "react-slick";
import { useRouter } from 'solito/router'

export const SlideItem = (props) => {
    const { width, height } = useWindowDimensions()
    const { push } = useRouter()

    return (
        <YStack h={650} w={width} >
            <ZStack>
                <YStack zi={3} top={"$20"} left={"$10"} mt={35} pos={"absolute"}>
                    <H3 fontSize={64} letterSpacing={-2} >{props.title || ""}</H3>
                    <Paragraph mt={"$6"} maw={450} lh={22}>
                        {props.description || ""}
                    </Paragraph>
                    <XStack mt={"$4"}>

                        <Button bg={"$red9"} px={"$9"} icon={PlayCircle} size="$4"
                            onPress={() => push({
                                pathname: "/player",
                                query: {
                                    video_url: props.video
                                }
                            })}
                        >Play</Button>
                        <Button px={"$9"} size="$4" variant="outlined" themeInverse outlineColor={"#FFF"} color={'white'} ml={"$3"}>View Info</Button>
                    </XStack>
                </YStack>
                <YStack zi={1} mih={650} w={width} bg={"pink"} opacity={0.43}>
                    <LinearGradient
                        f={1}
                        colors={['$purple4', '$blue6',]}
                        start={[0.4, 0]}
                        end={[0.4, 0]}
                    />

                </YStack>
                <Image resizeMode='cover' source={{ height: 650, width: width, uri: props.image }} />
            </ZStack>
        </YStack>
    )
}