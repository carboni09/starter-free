
import { Button } from "@my/ui"
import { H5 } from "@my/ui"
import { ButtonIcon, ButtonText, Text, useWindowDimensions, View, XStack, YStack } from "@my/ui"
import { Menu, Search } from '@tamagui/lucide-icons'


export const Header = (props) => {
    const { width, height } = useWindowDimensions()
    return (
        <XStack fd={"row"} jc={"space-between"} f={1} w={width} px={"$8"} py={"$4"} h={70} bg={'rgba(0,0,0,0)'} pos={"absolute"} top={0} zi={1000} >
            <XStack>
                <Menu size={"$3"} mr={"$8"} />
                <XStack jc={"center"} ai={"center"} >

                    <Text pr={"$5"}>Movies</Text>
                    <Text pr={"$5"}>Live TV</Text>
                </XStack>
            </XStack>

            <XStack>
                <Search size={"$2"} mr={"$5"} />
                <XStack jc={"center"} ai={"center"} >
                    <Button circular mr={"$2"} fontSize={20}>C</Button>
                    <Text pr={"$1"}>Caleb</Text>
                </XStack>
            </XStack>


        </XStack>
    )
}