import React from 'react'
import { Navigation } from './mock-navigation'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Text, VStack } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

export const NavigationPanel = ({ setSidebarHandler, setSelectedModule, subData, setSubData }) => {

    const { pathname } = useLocation()

    const mainHandler = (children, title) => {
        setSubData(children)
        // setSelectedModule(title)
    }

    const subHandler = (title) => {
        // setSidebarHandler(prev => !prev)
        setSelectedModule(title)
    }

    return (
        <Flex
            h='full' boxShadow='0px 3px 10px 0px rgba(40,40,43,1)'
            flexDirection='column' w='22%' bgColor='primary' justifyContent='space-between'
        >
            <VStack>
                <SidebarHeader />
                <Accordion allowToggle w='full'>
                    {
                        Navigation?.map(sidebarMenu =>
                            <AccordionItem
                                key={sidebarMenu.path} border='none'
                                boxShadow={pathname.includes(sidebarMenu.path) ? '0px 3px 10px 0px rgba(40,40,43,1)' : 'none'}
                                bgColor={pathname.includes(sidebarMenu.path) ? 'accent' : ''}
                                fontWeight='semibold'
                            >
                                {/* <Link to={sidebarMenu.path}> */}
                                <AccordionButton
                                    onClick={() => mainHandler(sidebarMenu.children, sidebarMenu.title)}
                                    w='full' justifyContent='space-between'
                                >
                                    <Text fontWeight='semibold' textAlign='start' color={pathname.includes(sidebarMenu.path) ? 'myBlack' : 'textColor'}>{sidebarMenu.title}</Text>
                                    <AccordionIcon color={pathname.includes(sidebarMenu.path) ? '#28282B' : '#e5e5e5'} />
                                </AccordionButton>
                                {/* </Link> */}
                                <AccordionPanel boxShadow={pathname.includes(sidebarMenu.path) ? '0px 3px 10px 0px rgba(40,40,43,1)' : 'none'} bgColor='secondary' p={4}>
                                    {subData?.map((sub, i) =>
                                        <Link to={sub.path} key={sub.path}>
                                            <Box w='full' justifyContent='start' cursor='pointer' onClick={() => subHandler(sub.title)}>
                                                <Text
                                                    p={1} m={1} fontSize='sm' textAlign='center'
                                                    color={pathname.includes(sub.path) ? 'myBlack' : 'myWhite'}
                                                    bgColor={pathname.includes(sub.path) ? 'accent' : 'none'}
                                                    border='1px' borderStyle={pathname.includes(sub.path) ? 'groove' : 'dashed'}
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
            </VStack>
            <SidebarFooter />
        </Flex >
    )
}

const SidebarHeader = () => {
    return (
        // <Flex w='full' bgColor='myBlack' p={1} boxShadow='0px 3px 10px 0px rgba(40,40,43,1)'>H</Flex>
        <Flex bgColor='myBlack' w='full' h='31.8px' alignItems='center' justifyContent='center' px={1} boxShadow='0px 3px 10px 0px rgba(40,40,43,1)'>
            <Text color='textColor' fontWeight='semibold' textAlign='center'>Elixir Swine Modules</Text>
        </Flex>
    )
}


const SidebarFooter = () => {
    return (
        <Flex justifyContent='center' alignItems='center' flexDirection='column' pb={2}>
            <Text color='textColor' fontSize='xs' textAlign='center'>© 2022, Elixir Swine Powered by MIS</Text>
        </Flex>
    )
}