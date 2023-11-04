import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`JulioCesar`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {`Dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Julio Cesar`} size={`xl`} src={`avatar.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Julio César`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@juliocesardev`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/juliocesar69`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/github.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.threads.net/@julls.cesar.ls`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/x.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/julls.cesar.ls/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/instagram.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.facebook.com/profile.php?id=100068432691199`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/x.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/user/7rpxoauon4a98upsqnpgmg18o?si=fded7a30c2f94d16`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/spotify.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/julio-c%C3%A9sar-l%C3%B3pez-sanjuan-639753297/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/linkedin.svg`} sx={{"width": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`4+`}
</Text>
  {`  años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`100+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`1M+`}
</Text>
  {` seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`Soy egresado de la carrera de Ingeniería en Sistemas Computacionales
                    en el Instituto Tecnológico de Tlaxiaco. Trabajo como freelance full-stack developer.
                    Estoy interesado en impulsar el desarrollo tecnológico en la región mixteca 
                    a través de la implementación de sistemas que ayuden al comercio local a tener un mayor impacto.
                    Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!`}
</Text>
</VStack>
  <VStack spacing={`1em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Proyectos`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/tienda.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Tienda virtual PC BOX`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Sistema administrativo y tienda online`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/inventario.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Invenratio RMS`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Sistema de inventario a través de código  QR`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.gg/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/menu.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Menú digital Green Bull coffee & Pub`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Página web para mostrar el menú y promociones`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Image src={`logo.png`} sx={{"height": "4em"}}/>
  <Link as={NextLink} href={`https://github.com/juliocesar69`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "_hover": {}}}>
  <Box>
  {`© 2014-2023 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Julio Cesar`}
</Text>
  {` v3.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`BUILDING SOFTWARE WITH ♥ FROM TLAXIACO, OAXACA, MEXICO TO THE WORLD.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`JulioCesar | Desarrollo aplicaciones web`}
</title>
  <meta content={`Hola, mi nombre es Julio Cesar. Soy ingeniero en sistemas computacionales y desarrollador freelance full-stack.`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
