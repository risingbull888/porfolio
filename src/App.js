import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  extendTheme,
  Heading,
  Image, 
  Flex, 
  Button,  
  HStack, 
  chakra,
  Card, 
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CardBody, 
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Center,
  StackDivider,
} from '@chakra-ui/react';
import {ArrowForwardIcon,
        ExternalLinkIcon,
} from '@chakra-ui/icons'
import { ColorModeSwitcher } from './ColorModeSwitcher';


function App() {
  const colors = {
    brand: {
      900: '#FFFFFF',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
  
  const theme = extendTheme({ colors })
  
  const modal = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modalc = useDisclosure()
  const modala = useDisclosure()
  const modalm = useDisclosure()
 
  return (
    <ChakraProvider theme={theme}>
      <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Heading as = 'h1' size ='lg'>Rising Bull's Portfolio</Heading>
        <HStack as="nav" spacing="10">
          
            <Button variant="nav" onClick={modala.onOpen}> {"About Me"} </Button>

            <Modal onClose={modala.onClose} isOpen={modala.isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>About Me</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <b>I am Rising Bull 888.</b>
                  <br></br>
                  <br></br>
                  I am a Brown Student taking the esteemed UIUX course taught be legendary Professor Jeff Huang.
                  <br></br>
                  <br></br>
                  I think that speaks for itself.
                </ModalBody>
                <ModalFooter>
                  <Button onClick={modala.onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>



            <Button variant="nav" onClick={modalm.onOpen}> {"My CV"} </Button>

            <Modal onClose={modalm.onClose} isOpen={modalm.isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>My CV</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  BullTech UX Research Intern : <i>2019-2021</i>
                  <br></br>
                  <br></br>
                  Brown University CS Promoter : <i>2020-Present</i>
                  <br></br>
                  <br></br>
                  Rising Gaming Club President : <i>2018-Present</i>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={modalm.onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>


        </HStack>
        <HStack>
          <Button onClick={modalc.onOpen}>
            {"Contact Me"}
          </Button>

            <Modal onClose={modalc.onClose} isOpen={modalc.isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Contact Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <b>Thanks for reaching out! </b>
                  <br></br>
                  <br></br>
                  My email is risingbull888@brown.edu. 
                  <br></br>
                  Looking forward to our future collaboration!
                </ModalBody>
                <ModalFooter>
                  <Button onClick={modalc.onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
        
      </Flex>
    </chakra.header>
      <Box textAlign="center" fontSize="xl">
      <SimpleGrid minChildWidth='300px' spacing='10px'>
          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={require('./assets/RD.png')}
                alt='cs ipp redesigned website'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Responsive Redesign</Heading>
                <Text>
                  Complete Analysis and Redesign of the Brown CS IPP Website, implementing improved UX and optimized workflows for the intended functionality of the website.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  October 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
              <Button
                  rightIcon={<ArrowForwardIcon />} 
                  onClick={modal2.onOpen}
                  m={4}
                >{'View Details'}</Button>

                      <Modal onClose={modal2.onClose} size={'full'} isOpen={modal2.isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Responsive Redesign Project</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={2}
                            align='stretch'
                          >

                            <Center>
                                <Image 
                                maxWidth={'1000px'}
                                objectFit='cover'
                                src={require('./assets/RD.png')}
                                alt='cs ipp redesigned website'/>                    
                            </Center>
                          

                            
                            <Link href='https://risingbull888.github.io/redesign/' isExternal>
                              <i>View Reponsive Redesign Website</i> <ExternalLinkIcon mx='2px' my='10px' />
                            </Link>

                            
                          </VStack>
                          
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>About the Project</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                The responsive redesign project is where we chose a currently unresponsive or badly designed website and completed a thorough redesign, starting from lofi to hifi then html implementation.
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Characteristics</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                This project was completed on a 1-week period, using purely html and css. The project was completely individually with no collaboration.
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>

                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={modal2.onClose}>Back to Projects</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>
          
          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={require('./assets/Heatmap.png')}
                alt='egg2 heatmap'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>A/B Testing & Eye Tracking</Heading>
                <Text>
                  Through the Figma designs of two bakery pages, analyze the different eye movement of users to compare the efficiency of the different designs.
                  Data from multiple trials compiled into data files for further statistical analysis.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  October 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
              <Button
                  rightIcon={<ArrowForwardIcon />} 
                  onClick={modal3.onOpen}
                  key={'full'}
                  m={4}
                >{'View Details'}</Button>

                      <Modal onClose={modal3.onClose} size={'full'} isOpen={modal3.isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>A/B Testing & Eye Tracking Project</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={2}
                            align='stretch'
                          >

                            <Center>
                                <Image 
                                maxWidth={'1000px'}
                                objectFit='cover'
                                src={require('./assets/Heatmap.png')}
                                alt='egg2 heatmap'/>                    
                            </Center>
                          

                            
                            <Link href='https://www.figma.com/file/3KU2C9ZE4fRxi9QaoW2LEr/The-Nested-Bakery-Home-Page-Template-(Copy)?node-id=0%3A1&t=VnkaeiiinhHmj9G3-1' isExternal>
                              <i>View Figma Prototype</i> <ExternalLinkIcon mx='2px' my='10px' />
                            </Link>

                            
                          </VStack>
                          
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Description</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                In this project we collect and analyze user behavior through quantitative data in A/B Testing and qualitative data in Eye Tracking.
                                We invited two different participants to use and complete certain preset tasks on either version A or B of the bakery website, with a eye tracking monitoring where they were looking at.
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                  <b>Project Characteristics</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                The project was completed in a group of 4, completing the version A and B on figma then analyzing the eye tracking data.
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>

                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={modal3.onClose}>Back to Projects</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>

          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={require('./assets/HR1.png')}
                alt='Homeroom Main Page Figma'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Iterative Design</Heading>
                <Text>
                  Implementation of YCombinator Startup 'Homeroom' into a High-Fidelity prototype in Figma, undergoing rounds of review and comments with esteemed industry expert Gifford Cheung, Sr. UX Researcher at Nintendo.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  November 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>
              <Button
                  rightIcon={<ArrowForwardIcon />} 
                  onClick={modal4.onOpen}
                  key={'full'}
                  m={4}
                >{'View Details'}</Button>

                      <Modal onClose={modal4.onClose} size={'full'} isOpen={modal4.isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Iterative Design Project</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={2}
                            align='stretch'
                          >

                            <Center>
                                <Image 
                                maxWidth={'1000px'}
                                objectFit='cover'
                                src={require('./assets/HR1.png')}
                                alt='Homeroom homepage'/>                    
                            </Center>
                          
                            
                            
                            <Link href='https://coldfish777.github.io/iterative/' isExternal>
                             <i>View Iterative Design Website</i>  <ExternalLinkIcon mx='2px' my='10px' />
                            </Link>

                        
                          </VStack>
                          
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>High Fidelity Figma Prototype</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                
                          <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJi504TcgNiorWm3lZ5T2vu%2FHomeroom-Website%3Fnode-id%3D30%253A621%26starting-point-node-id%3D30%253A621%26scaling%3Dscale-down" allowfullscreen></iframe>

                                The above figma prototype shows complex navigation thorugh both the renter and investor modes of the website. If unsure what functions has been implemented click on the background and the highlighted blue areas are the target buttons to click.
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Description</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                 We first completed research on different startups in Ycombinator, then after discussion we finalized to complete the homeroom startup. We began from sketches to lofi to high prototypes and went through rounds of user testing and feedback most notably from Sr. UX Researcher Gifford Cheung at Nintendo.
                                 After the completion of the project we contacted the startup and they gave us some feedback on the page. For the more detailed description, check out the iterative design website linked above!
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Characteristics</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                              The Iterative Design Project was completed in a group of 4 team members over a two week period.
                              </AccordionPanel>
                            </AccordionItem>
                            
                          </Accordion>

                          

                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={modal4.onClose}>Back to Projects</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>

          <Box>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={require("./assets/Dev.png")}
                alt='react website'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Development</Heading>
                <Text>
                  React website made using component library 'Chakra UI' that has complex functionality of sorting, filtering, and 'add to cart'. Website is a niche website for exotic car collectors to choose supercars to be put on showcase on the upcoming autoshows.
                </Text>
                <Text as = 'b' color='gray.200' fontSize='2xl'>
                  November 2022
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify={'right'}>
              <ButtonGroup spacing='2' align={'center'}>

                <Button
                  rightIcon={<ArrowForwardIcon />} 
                  onClick={modal.onOpen}
                  key={'dev'}
                  m={4}
                >{'View Details'}</Button>

                      <Modal onClose={modal.onClose} size={'full'} isOpen={modal.isOpen}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Development Project</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={2}
                            align='stretch'
                          >

                            <Center>
                                <Image 
                                maxWidth={'1000px'}
                                objectFit='cover'
                                src={require("./assets/Dev.png")} 
                                alt='development website'/>                    
                            </Center>
                          

                            
                            <Link href='https://risingbull888.github.io/development/' isExternal>
                              <i>View Development Website</i> <ExternalLinkIcon mx='2px' my='10px' />
                            </Link>

                            
                          </VStack>
                          
                          <Accordion allowToggle>
                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Description</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                              The development project is where I develop an interactive interface, use interface components, and tie the components to an internal data state. Created using React by creating a list-based interface! 
                              Basically, an interface for users to select items out of a list, which then aggregates them.
                              For my specific implementation, I made a website for exotic car collectors to choose for their annual showcase events.
                              </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                              <h2>
                                <AccordionButton>
                                  <Box flex='1' textAlign='left'>
                                    <b>Project Characteristics</b>
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                              </h2>
                              <AccordionPanel pb={4}>
                                The project was completed over a course of 3 weeks, with use of component library Chakra UI. The project was completed individually.
                              </AccordionPanel>
                            </AccordionItem>
                          </Accordion>

                          </ModalBody>
                          <ModalFooter>
                            <Button onClick={modal.onClose}>Back to Projects</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
              </ButtonGroup>
            </CardFooter>
          </Card>
          </Box>
        
          
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}


export default App;
