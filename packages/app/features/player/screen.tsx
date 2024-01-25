import { Button, Paragraph, Text, YStack, useWindowDimensions } from '@my/ui'
import { ArrowLeft, ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'
import Video from 'next-video';
import ReactPlayer from 'react-player';
import { useRouter } from 'solito/router'

const { useParam } = createParam()

export const useVideoUrl = () => {
    const [video_url] = useParam('video_url')

    return video_url
}

export function ReactPlayerAsVideo(props) {
    let { asset, src, poster, blurDataURL, ...rest } = props;
    let config = { file: { attributes: { poster } } };

    return <ReactPlayer url={src} config={config} {...rest} />;
}

export function PlayerScreen() {
    const [video] = useParam('video_url')
    const router = useRouter()
    const link = useLink({
        href: '/',
    })

    const { width, height } = useWindowDimensions()

    return (
        <>
            <YStack w={width} h={height} f={1}>
                <Video autoplay as={ReactPlayerAsVideo} width={width} height={height} src={video || 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'} />
            </YStack>
            <Button
                position="absolute"
                top="$3"
                left="$3"
                size="$5"
                circular
                variant='chromeless'
                icon={ArrowLeft}
                onPress={() => router.back()}

            />

        </>
    )
}
