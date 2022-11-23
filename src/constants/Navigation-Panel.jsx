import React, { useState } from 'react'
import { Navigation } from './mock-navigation'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Drawer, DrawerContent, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineBackspace } from 'react-icons/hi'

const DrawerHeader = ({ setSidebarHandler }) => {
    return (
        <Flex bgColor='myBlack' w='full' h='37.8px' alignItems='center' justifyContent='space-between' px={1} boxShadow='0px 3px 10px 0px rgba(40,40,43,1)'>
            <Text fontWeight='semibold'>Elixir Swine Modules</Text>
            <HiOutlineBackspace color='#e5e5e5' fontSize='32px' cursor='pointer' onClick={() => setSidebarHandler(prev => !prev)} />
        </Flex>
    )
}

const DrawerBody = ({ setSidebarHandler }) => {

    const [subData, setSubData] = useState([])
    const { pathname } = useLocation()

    return (
        <Accordion height='99vh' allowToggle w='full'>
            {
                Navigation?.map(sidebarMenu =>
                    <AccordionItem
                        key={sidebarMenu.path} border='none'
                        boxShadow={pathname.includes(sidebarMenu.path) ? '0px 3px 10px 0px rgba(40,40,43,1)' : 'none'}
                        bgColor={pathname.includes(sidebarMenu.path) ? 'accent' : ''}
                        fontWeight='semibold'
                    >
                        <Link to={sidebarMenu.path}>
                            <AccordionButton
                                onClick={() => setSubData(sidebarMenu.children)}
                                w='full' justifyContent='space-between'
                            >
                                <Text fontWeight='semibold' textAlign='start' color={pathname.includes(sidebarMenu.path) ? 'myBlack' : 'myWhite'}>{sidebarMenu.title}</Text>
                                <AccordionIcon color={pathname.includes(sidebarMenu.path) ? '#28282B' : '#e5e5e5'} />
                            </AccordionButton>
                        </Link>
                        <AccordionPanel boxShadow={pathname.includes(sidebarMenu.path) ? '0px 3px 10px 0px rgba(40,40,43,1)' : 'none'} bgColor='primary' p={4}>
                            {subData?.map((sub, i) =>
                                <Link to={sub.path} key={sub.path}>
                                    <Box w='full' justifyContent='start' cursor='pointer' onClick={() => setSidebarHandler(prev => !prev)}>
                                        <Text
                                            p={1} m={1} fontSize='sm' textAlign='center'
                                            color={pathname.includes(sidebarMenu.path) ? '#e5e5e5' : '#28282B'}
                                            border='1px' borderStyle='dashed'
                                            _hover={{ borderStyle: 'groove', boxShadow: '0px 3px 10px 0px rgba(40,40,43,1)', bgColor: 'accent', color: 'myBlack' }}
                                        >
                                            {sub.title}
                                        </Text>
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
        <Flex bgColor='transparent' w='full' h='120px'>{` `}</Flex>
    )
}

export const NavigationPanel = ({ sidebarHandler, setSidebarHandler }) => {

    return (
        <>
            <Drawer closeOnOverlayClick={false} placement='left' isOpen={sidebarHandler} onClose={() => setSidebarHandler(prev => !prev)}>
                <DrawerOverlay />
                <DrawerContent gap={2} bgColor='secondary'>
                    <DrawerHeader setSidebarHandler={setSidebarHandler} />
                    <DrawerBody setSidebarHandler={setSidebarHandler} />
                    <DrawerFooter />
                </DrawerContent>
                <Box>AYOO</Box>
            </Drawer>
        </>
    )
}
