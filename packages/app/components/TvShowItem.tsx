import { useState } from 'react'
import { Card, CardProps, YStack, XStack, Button, Paragraph, Image, H2, AnimatePresence, Dialog, Adapt, Sheet, Unspaced, useWindowDimensions, ScrollView } from 'tamagui'
import { LinearGradient } from '@tamagui/linear-gradient'
import Video from 'next-video';
import { PlayCircle, X } from '@tamagui/lucide-icons';
import { useRouter } from 'solito/router';
import ReactPlayer from 'react-player';

export function ReactPlayerAsVideo(props) {
    let { asset, src, poster, blurDataURL, ...rest } = props;
    let config = { file: { attributes: { poster } } };

    return <ReactPlayer url={src} config={config} {...rest} />;
}

export const TvShow = (props) => {
    return (
        <AnimatePresence key={props.id}>
            <Card elevate zi={2} w={400} h={300} bordered animation={'lazy'} hoverStyle={{ "scale": 1.2, }} {...props}>
                <Card.Background br={"$0"}>
                    <Image
                        resizeMode="cover"
                        alignSelf="center"
                        f={1}
                        source={{
                            width: 400,
                            height: 300,
                            uri: `${props.image} || 'https://i.postimg.cc/wxLjPrMg/movie1.jpg'`,
                        }}
                    />
                </Card.Background>
            </Card>

            <Paragraph fontSize={20} mt={"$3"}>{props.name || ""}</Paragraph>
        </AnimatePresence>
    )
}



export const TvShowItem = (props) => {
    const { push } = useRouter()
    const [open, setOpen] = useState(false)
    const { width, height } = useWindowDimensions
    return (

        <Dialog
            modal
            onOpenChange={(open) => {
                setOpen(open)
            }}
        >

            <Dialog.Trigger asChild>
                <TvShow {...props} />
            </Dialog.Trigger>

            {/* <Adapt when="sm" platform="touch">
                <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame padding="$4" gap="$4">
                        <Adapt.Contents />
                    </Sheet.Frame>
                    <Sheet.Overlay
                        animation="lazy"
                        opacity={0.1}
                        bg={'white'}
                    // enterStyle={{ opacity: 0 }}
                    // exitStyle={{ opacity: 0 }}
                    />
                </Sheet>
            </Adapt> */}

            <Dialog.Portal>

                <Dialog.Overlay
                    key="overlay"
                    animation="quick"
                    bg={"rgba(0,0,0,0.65)"}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />


                <Dialog.Content
                    //bordered
                    elevate
                    key="content"
                    animateOnly={['transform', 'opacity']}
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    //enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    //exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    //gap="$4"
                    w={850}
                    mih={600}

                >

                    <Video autoplay as={ReactPlayerAsVideo} width={850} height={600} style={{ borderRadius: 200, position: "absolute", top: 0, left: 0 }} controls={false} src={props.trailer || props.video || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'} />


                    <YStack pos="relative" t={500}>
                        <Dialog.Title fontSize={40} letterSpacing={-2}>{props.name}</Dialog.Title>
                        <Dialog.Description lh={22}>

                        </Dialog.Description>
                        <XStack mt={"$4"}>

                            <Button bg={"$red9"} px={"$9"} icon={PlayCircle} size="$4" onPress={() => push({
                                pathname: "/player",
                                query: {
                                    video_url: props.video
                                }
                            })}>Watch Now</Button>
                        </XStack>
                    </YStack>





                    <Unspaced>
                        <Dialog.Close asChild>
                            <Button
                                position="absolute"
                                top="$3"
                                right="$3"
                                size="$2"
                                circular
                                icon={X}

                            />
                        </Dialog.Close>
                    </Unspaced>

                </Dialog.Content>

            </Dialog.Portal >

        </Dialog >

    )
}