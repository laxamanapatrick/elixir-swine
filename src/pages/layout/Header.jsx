import React from 'react'
import { Box, Button, Flex, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, useColorMode, useDisclosure } from '@chakra-ui/react'
// import { useLocation } from 'react-router-dom'
import { AiOutlineMenuUnfold, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { FcSettings } from 'react-icons/fc'
import { FaUserCircle } from 'react-icons/fa'
import { MotionTag } from '../../utils/Page-Transition'

export const Header = ({ setSidebarHandler, selectedModule }) => {

    const { isOpen: isSettingsOpen, onClose: closeSettings, onOpen: openSettings } = useDisclosure()
    const { toggleColorMode } = useColorMode()

    return (
        <Flex bgColor='myBlack' w='full' p={1} justifyContent='space-between' alignItems='center' boxShadow='0px 3px 10px 0px rgba(40,40,43,1)'>
            <AiOutlineMenuUnfold color='#e5e5e5' fontSize='20px' cursor='pointer' onClick={() => setSidebarHandler(prev => !prev)} />
            <Text px={2} color='textColor'>{selectedModule && selectedModule}</Text>
            <Menu>
                {({ isOpen, onClose }) => (
                    <>
                        <MenuButton w='45px' h='24px' p={1} bg='primary' _hover={{ bg: 'primary' }} _active={{ bg: 'primary' }} borderRadius='17px' as={Button} rightIcon={!isOpen && <MotionTag><AiFillCaretDown color='#e5e5e5' /></MotionTag>}>
                            {
                                isOpen ? <MotionTag><Flex justifyContent='center'><AiFillCaretUp color='#e5e5e5' /></Flex></MotionTag>
                                    : <FaUserCircle color='#e5e5e5' fontSize='19px' />
                            }
                        </MenuButton>
                        <MenuList zIndex='modal' w={300} bgColor='primary' border='none' borderRadius='none' boxShadow='rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;'>
                            <MenuItem cursor='default' _hover={{ bg: 'none' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }}>
                                <HStack>
                                    <FaUserCircle color='#e5e5e5' fontSize='60px' />
                                    <Box justifyContent='start'>
                                        <Text textAlign='start'>Username</Text>
                                        <Text textAlign='start'>Mobile number</Text>
                                    </Box>
                                </HStack>
                            </MenuItem>
                            <MenuItem _hover={{ bg: 'secondary' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }} onClick={() => openSettings()}>
                                <HStack><Text>Settings</Text> <FcSettings fontSize='19px' /></HStack>
                            </MenuItem>
                            <MenuItem closeOnSelect={false}>
                                <HStack>
                                    <Text>Change Theme</Text>
                                    <Switch onChange={toggleColorMode} />
                                </HStack>
                            </MenuItem>
                            <MenuDivider color='myWhite' />
                            <MenuItem gap={1} flexDirection='row' borderRadius='none' as={Button} bg='none' _hover={{ bg: 'secondary' }} _active={{ bg: 'none' }} _focus={{ bg: 'none' }}>
                                <Text color='myWhite'>Log out </Text><RiLogoutBoxLine fontSize='24px' color="#f56565" />
                            </MenuItem>
                        </MenuList>
                    </>
                )}
            </Menu>

            {
                isSettingsOpen && (
                    <Settings
                        isOpen={isSettingsOpen}
                        onClose={closeSettings}
                    />
                )
            }

        </Flex >
    )

}


const Settings = ({ isOpen, onClose }) => {
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered size='2xl'>
            <ModalOverlay bg='blackAlpha.700' />
            <ModalContent h='60vh' bgColor='primary' borderRadius='none'>
                <ModalHeader></ModalHeader>
                <ModalCloseButton color='myWhite' />
                <ModalBody>content here</ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal >
    )
}