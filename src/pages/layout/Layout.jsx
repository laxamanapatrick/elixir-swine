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
            <VStack w='full' h='100vh' justifyContent='start' bgColor='black' px={2}>
                <Header setSidebarHandler={setSidebarHandler} />
                <ScrollFeature minHeight='60vh' maxHeight='95vh'>
                    <Outlet />
                </ScrollFeature>
            </VStack>
        </>
    )
}
