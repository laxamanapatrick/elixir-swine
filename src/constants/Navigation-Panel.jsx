import React, { useState } from 'react'
import { Navigation } from './mock-navigation'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Drawer, DrawerContent, DrawerOverlay, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const DrawerHeader = () => {
    return (
        'Hi'
    )
}

const DrawerBody = ({ setSidebarHandler }) => {

    const [subData, setSubData] = useState([])

    return (
        <Accordion height='99vh' allowToggle w='full'>
            {
                Navigation?.map(sidebarMenu =>
                    <AccordionItem key={sidebarMenu.path} border='none'>
                        <Link to={sidebarMenu.path}>
                            <AccordionButton w='full' gap={5} justifyContent='space-between' onClick={() => setSubData(sidebarMenu.children)}>
                                <Text textAlign='start'>{sidebarMenu.title}</Text>
                                <AccordionIcon />
                            </AccordionButton>
                        </Link>
                        <AccordionPanel border='none'>
                            {subData?.map(sub =>
                                <Link to={sub.path} key={sub.path}>
                                    <Box w='full' justifyContent='start' cursor='pointer' onClick={() => setSidebarHandler(prev => !prev)}>
                                        <Text pb={1}>{sub.title}</Text>
                                    </Box>
                                </Link>
                            )}
                        </AccordionPanel>
                    </AccordionItem>
                )
            }
        </Accordion>
    )
}

const DrawerFooter = () => {
    return (
        'Hello'
    )
}

export const NavigationPanel = ({ sidebarHandler, setSidebarHandler }) => {

    return (
        <Drawer placement='left' isOpen={sidebarHandler} onClose={() => setSidebarHandler(prev => !prev)}>
            <DrawerOverlay />
            <DrawerContent w='full' gap={2}>
                <DrawerHeader />
                <DrawerBody setSidebarHandler={setSidebarHandler} />
                <DrawerFooter />
            </DrawerContent>
        </Drawer>
    )
}
