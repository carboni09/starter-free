

import { MediaPlayer, Controls, MediaProvider, PlayButton } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout, } from '@vidstack/react/player/layouts/default';
import { Poster } from '@vidstack/react';
import { PauseIcon, PlayIcon } from '@vidstack/react/icons';
import { Image, View } from '@my/ui';

export const VideoPlayer = (props) => {
    return (
        <View zi={-1}>
            <MediaPlayer
                aspectRatio='16/9'
                style={{
                    width: "100",
                    height: 500
                }}
                autoplay={false}
                title="Sprite Fight"
                src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
                controls={false}
                poster='https://i.postimg.cc/wxLjPrMg/movie1.jpg'
            >
                <MediaProvider >

                </MediaProvider>

                <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
        </View>

    )
}