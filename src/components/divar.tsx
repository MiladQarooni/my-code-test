import { Box, Heading, Text  } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'


const Divar = () => {
    return(
        <Box w='350px' h='150px' mt={20} mr='auto' ml='auto' border='1px solid gray' display="flex" borderRadius='5'>
            <Box w='40%' p={4}>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius='5'/>
            </Box>
            <Box w='65%'>
            <Heading as='h2' size='sm' mt={5} align='right' pr={3}>
                سرویس خواب سلطنتی
            </Heading>
            <Text  mt={3} align='right' pr={3} color='#6c6b6b'>
                در حد نو
            </Text>

            <Text  mt={1} align='right' pr={3} color='#6c6b6b'>
                تومان 29.500.000
            </Text> 

            <Text  mt={1} align='right' pr={3} color='#6c6b6b'>
                لحظاتی پیش در خانی آباد
            </Text> 
            </Box>
        </Box>
    )
}
export default Divar