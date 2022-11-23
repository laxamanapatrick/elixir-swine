import React, { useState } from 'react'
import { VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { NavigationPanel } from '../../constants/Navigation-Panel'
import { Header } from './Header'
import { ScrollFeature } from '../../utils/Scroll'

export const Layout = () => {

    const [sidebarHandler, setSidebarHandler] = useState(false)

    return (
        <>
            <NavigationPanel sidebarHandler={sidebarHandler} setSidebarHandler={setSidebarHandler} />
            <VStack w='full' h='100vh' justifyContent='start' bgColor='primary' p={5} spacing={1}>
                <Header setSidebarHandler={setSidebarHandler} />
                <ScrollFeature minHeight='91.5vh' maxHeight='91.5vh'>
                    <Outlet />
                </ScrollFeature>
            </VStack>
        </>
    )
}
