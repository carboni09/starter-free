import { Header } from 'app/components'
import { PlayerScreen } from 'app/features/player/screen'
import Head from 'next/head'
import { createParam } from 'solito'

const { useParam, useParams } = createParam<any>()

export default function Page() {
    const { params, setParams } = useParams()
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <PlayerScreen />
        </>
    )
}
