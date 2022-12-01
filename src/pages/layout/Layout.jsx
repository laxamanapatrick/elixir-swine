import React, { useEffect, useState } from 'react'
import { HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { NavigationPanel } from '../../constants/Navigation-Panel'
import { NavigationPanelMobile } from '../../constants/Navigation-Panel-MobileMode'
import { ScrollFeature } from '../../utils/Scroll-Feature'

export const Layout = () => {

    const [sidebarHandler, setSidebarHandler] = useState(false)
    const [selectedModule, setSelectedModule] = useState('')
    const [subData, setSubData] = useState([])
    const [isMobile] = useMediaQuery('(max-width: 1240px)')

    useEffect(() => {
        setSidebarHandler(isMobile)
    }, [isMobile])

    return (
        <>
            {isMobile ?
                <>
                    <NavigationPanelMobile sidebarHandler={sidebarHandler} setSidebarHandler={setSidebarHandler} setSelectedModule={setSelectedModule} subData={subData} setSubData={setSubData} />
                    <VStack w='full' h='100vh' justifyContent='start' bgColor='primary' p={5} spacing={1}>
                        <Header setSidebarHandler={setSidebarHandler} selectedModule={selectedModule} />
                        <ScrollFeature minHeight='90vh' maxHeight='90.5vh'>
                            <Outlet />
                        </ScrollFeature>
                    </VStack>
                </>
                :
                <HStack w='full' bgColor='primary' p={5} h='100vh'>
                    {!sidebarHandler && (
                        <NavigationPanel sidebarHandler={sidebarHandler} setSidebarHandler={setSidebarHandler} setSelectedModule={setSelectedModule} subData={subData} setSubData={setSubData} />
                    )}
                    <VStack w='full' h='100vh' justifyContent='start' bgColor='primary' spacing={1} py={5}>
                        <Header setSidebarHandler={setSidebarHandler} selectedModule={selectedModule} />
                        <ScrollFeature minHeight='91.3vh' maxHeight='91.5vh'>
                            <Outlet />
                        </ScrollFeature>
                    </VStack>
                </HStack>
            }

        </>
    )
}
