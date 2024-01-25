
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
  H3,
  View
} from '@my/ui'
import { ChevronDown, ChevronUp, PlayCircle } from '@tamagui/lucide-icons'
import { FilmItem, ReactPlayerAsVideo, VideoPlayer, SlideItem, TvShowItem } from '../../components'
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

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    src: `https://picsum.photos/500?idx=${i}`
  }));

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    loop: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    useTransform: true
  };

  const { width, height } = useWindowDimensions()

  const categories = [


    'Documentaries',
    'News',
    'Talk Shows',
    'Comedy',
    'Dramas',
    'Sermons',
    'Inspirational Stories',
    'Music & Concerts',
    'Youth & Kids',
    'Holiday Specials'

  ];

  const data = [
    {
      "id": 1,
      "title": "New Arrivals",
      "innerArray": [{
        "id": 1,
        "name": "One Last Thing",
        "star": "150",
        "image": "https://i.ibb.co/PNKQ72R/one-last-thing.jpg",
        "video": "https://www.youtube.com/watch?v=QtvWaVOnpts"
      }, {
        "id": 2,
        "name": "Freedom",
        "star": "150",
        "image": "https://i.ibb.co/j5D62W2/freedom.jpg"
      },
      {
        "id": 4,
        "name": "Legion",
        "star": "150",
        "image": "https://i.ibb.co/QKGSmMY/legion.jpg",
        "trailer": "https://www.youtube.com/watch?v=GczT4zzBxHU",
        "video": "https://www.youtube.com/watch?v=zJFeVvwTsK0"
      },
      {
        "id": 444,
        "name": "The Shack",
        "star": "150",
        "image": "https://i.ibb.co/F53cG5d/5.jpg",
        "trailer": "https://www.youtube.com/watch?v=CL0yUbSS5Eg",
        "video": "https://www.youtube.com/watch?v=yStIeEwKAbw"
      },
      {
        "id": 555,
        "name": "God's Not Dead",
        "star": "150",
        "image": "https://i.ibb.co/86jW1qK/4.jpg",
        "trailer": "https://www.youtube.com/watch?v=j2KDj7qxnds",
        "video": "https://www.youtube.com/watch?v=01oZRcMAX4Q"
      },
      {
        "id": 6666,
        "name": "Never Heard",
        "star": "150",
        "image": "https://i.ibb.co/j6hmCM0/6.jpg"
      },
      ]
    },
    {
      "id": 2,
      "title": "Kids & Teens",
      "innerArray": [{
        "id": 5,
        "name": "Promise",
        "star": "15000",
        "image": "https://i.ibb.co/Kxrcdyw/promise.jpg"
      }, {
        "id": 6,
        "name": "Heidi",
        "star": "45",
        "image": "https://i.ibb.co/yF6WqTk/HEIDI.jpg"
      }, {
        "id": 7,
        "name": "The Prince of Egypt",
        "star": "55",
        "image": "https://i.ibb.co/52zHqWc/The-Prince-of-Egypt-1998.jpg",
        "trailer": "https://www.youtube.com/watch?v=N0Vh65UrBK4",
        "video": 'https://www.youtube.com/watch?v=N0Vh65UrBK4'
      },
      {
        "id": 8,
        "name": "The Star",
        "star": "90",
        "image": "https://i.ibb.co/QmGKm0T/The-Star.jpg",
        "poster": "https://www.youtube.com/watch?v=6E93eysqQLY",
        "video": "https://www.youtube.com/watch?v=6E93eysqQLY"
      },
      {
        "id": 99,
        "name": "Isaiah",
        "star": "90",
        "image": "https://i.ibb.co/Y760GRT/ISAIAH.jpg"
      },
      {
        "id": 999,
        "name": "Joseph",
        "star": "90",
        "image": "https://i.ibb.co/YTf9b4d/JOSEPH.jpg"
      },

      ]
    },
    // {
    //   "id": 3,
    //   "title": "LifeStyle",
    //   "innerArray": [{
    //     "id": 9898,
    //     "name": "Manoj Kumar Verma",
    //     "star": "20",
    //     "image": "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
    //   }, {
    //     "id": 10,
    //     "name": "Ashish",
    //     "star": "10",
    //     "image": "https://storage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg"
    //   }, {
    //     "id": 11,
    //     "name": "Balendu Tiwari",
    //     "star": "150",
    //     "image": "https://lh3.googleusercontent.com/-ja97CHMzpN4/Xe5DcMVro2I/AAAAAAAABDQ/Z0Tht5w0TIUw37t8newe5YF6RgZYayXFwCK8BGAsYHg/s0/2019-12-09.jpg"
    //   }, {
    //     "id": 12,
    //     "name": "Amit Kumar Singh",
    //     "star": "200",
    //     "image": "https://lh3.googleusercontent.com/-1NXIa1zFf7E/Xe5DyVxnkHI/AAAAAAAABDg/BTB_V4UtLNwQHqIrIXKl6cMKlutU7h3JACK8BGAsYHg/s0/2019-12-09.jpg"
    //   }]
    // }
  ]

  const tvshows = [
    {
      "id": 109,
      "title": "LifeStyle",
      "innerArray": [{
        "id": 1,
        "name": "Raising Rinah",
        "star": "150",
        "image": "https://i.ibb.co/s10TtMV/gabi-1.png"
      }, {
        "id": 209,
        "name": "Kitchen Mastery With Chef Gabi",
        "star": "150",
        "image": "https://i.ibb.co/bdgcgCG/W.png",
        "trailer": 'https://www.youtube.com/watch?v=_1K_WlNtzPw',
        "video": 'https://www.youtube.com/watch?v=_1K_WlNtzPw'
      },
      {
        "id": 409,
        "name": "Exploring the World - Episode 7 (Kenya)",
        "star": "150",
        "image": "https://i.ibb.co/VS2vq6f/travel-1.png"
      }

      ]
    },
  ]

  const slides = [
    {
      id: 1,
      title: "Abejoye 7",
      description: " With great power comes a greater responsibility. A new life in christ does not stop your old life from trying to slip back in. The arrival of light means darkness must depart; however,  Abejoye will come to learn that darkness is always lurking.",
      image: "https://i.ibb.co/tsxnbKk/abejoye.jpg",
      video: 'https://www.youtube.com/watch?v=9iw3yJy6f2A'
    },
    {
      id: 2,
      title: "Escape",
      description: " A grandfather, daughter-in-law, and grandson find themselves thrust into a mysterious and otherworldly scenario that challenges their Christian faith to its core. The three generations must decipher the path laid before them.",
      image: "https://i.ibb.co/vLjLFD8/image.jpg",
      //video: 'https://www.youtube.com/watch?v=9iw3yJy6f2A'
    },
    {
      id: 3,
      title: "The Outpouring",
      description: "Relive the memories of The Outpouring Lagos 2023, with earlier editions in Canada, London, Abuja and Ilorin, the ripple effects of Oyekan’s act of faith continue to inspire and ignite a flame of spiritual awakening across Lagos and beyond. ",
      image: "https://i.ibb.co/88QDGxF/outpouring.webp",
      video: 'https://www.youtube.com/watch?v=9xVh62JA3nk'
    },
  ]




  return (
    <ScrollView f={1} theme={"dark"}>
      <LinearGradient
        f={1}
        colors={['$purple2', '$blue1', '$purple2', '$purple4',]}
        start={[0, 0]}
        end={[1, 1]}
        locations={[0.2, 0.63, 0.83, 0.92]}
      >
        <>


          <YStack f={1}>
            <ZStack>

              <Slider {...settings}>
                {slides.map((slide, index) => <SlideItem {...slide} />)}
              </Slider>
            </ZStack>

            {/* <Carousel
    items={items}
    renderItem={({ item, isSnapPoint }) => (
      <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
        <img src={item.src} width="250" height="250" alt="" />
      </CarouselItem>
    )}
  /> */}


            {/* <Video autoplay controls={null} poster={"https://i.ibb.co/yYFcm4R/familee.png"} src={'https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4'} /> */}

            <YStack mt={height * 0.8} zi={100}>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item + index}
                style={{ flex: 1, }}


                renderItem={({ item }) => (
                  <>
                    <H4 px={"$8"}>{item.title}</H4>
                    <YStack px="$7" mb={"$2"} space>

                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={item.innerArray}

                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                          <YStack f={1} py="$6" px={"$2"} space>

                            <FilmItem pr={"$8"} zi={300} {...item} />

                          </YStack>
                        )}


                      />
                    </YStack>

                  </>

                )}
              />



              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                style={{ paddingHorizontal: 30, flexWrap: "wrap" }}
                keyExtractor={(item, index) => item + index}

                renderItem={({ item }) => (
                  <YStack f={1} fw={"wrap"} py="$6" px={"$2"} space>

                    <Button variant='outlined' size={"$5"} br={25} themeInverse outlineColor={'#FFF'} color={'#FFF'} hoverStyle={{ bg: "red1" }}>{item}</Button>

                  </YStack>
                )}


              />





              <FlatList
                data={tvshows}
                keyExtractor={(item, index) => item + index}
                style={{ flex: 1, marginTop: 24 }}


                renderItem={({ item }) => (
                  <>
                    <H4 px={"$8"}>{item.title}</H4>
                    <YStack px="$7" mb={"$2"} space>

                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={item.innerArray}

                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                          <YStack f={1} py="$6" px={"$2"} space>

                            <TvShowItem pr={"$8"} zi={300} {...item} />

                          </YStack>
                        )}


                      />
                    </YStack>

                  </>

                )}
              />


              <FlatList
                data={data}
                keyExtractor={(item, index) => item + index}
                style={{ flex: 1, }}


                renderItem={({ item }) => (
                  <>
                    <H4 px={"$8"}>{item.title}</H4>
                    <YStack px="$7" mb={"$2"} space>

                      <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={item.innerArray}

                        keyExtractor={(item, index) => item + index}

                        renderItem={({ item }) => (
                          <YStack f={1} py="$6" px={"$2"} space>

                            <FilmItem pr={"$8"} zi={300} {...item} />

                          </YStack>
                        )}


                      />
                    </YStack>

                  </>

                )}
              />
            </YStack>
          </YStack>

        </>
      </LinearGradient>
    </ScrollView>

  )
}


