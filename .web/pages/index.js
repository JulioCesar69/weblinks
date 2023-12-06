import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import range from "/utils/helpers/range.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
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
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontWeight": "500", "fontSize": "1.5em"}}>
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
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Julio César`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@juliocesardev`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/juliocesar69`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`GITHUB`} src={`icons/github.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.threads.net/@julls.cesar.ls`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`Twitter/x`} src={`icons/x.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.instagram.com/julls.cesar.ls/`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`instagram`} src={`icons/instagram.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.facebook.com/profile.php?id=100068432691199`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`facebook`} src={`icons/facebook.png`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/user/7rpxoauon4a98upsqnpgmg18o?si=fded7a30c2f94d16`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`spotify`} src={`icons/spotify.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/julio-c%C3%A9sar-l%C3%B3pez-sanjuan-639753297/`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image alt={`linkedin`} src={`icons/linkedin.svg`} sx={{"width": "1.5em"}}/>
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
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Proyectos`}
</Heading>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Tienda virtual PC BOX`} src={`icons/tienda.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Tienda virtual PC BOX`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Sistema administrativo y tienda online`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitch.tv/mouredev`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Invenratio RMS`} src={`icons/inventario.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Invenratio RMS`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Sistema de inventario a través de código  QR`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://greenbull.netlify.app/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Menú digital Green Bull coffee & Pub`} src={`icons/menu.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Menú digital Green Bull coffee & Pub`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Página web para mostrar el menú y promociones`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins", "fontWeight": "500"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:juliocesarlpzsan@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "whiteSpace": "normal", "textAlign": "start", "Hover": {"backgroundColor": "#14A1F0"}}}>
  <HStack sx={{"width": "100%"}}>
  <Image alt={`Email`} src={`icons/email.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em", "paddingRight": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins", "fontWeight": "500", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontWeight": "300", "fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`juliocesarlpzsan@gmail.com`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "paddingX": "2em", "color": "#A3ABB2"}}>
  <Image alt={`Logotipo.`} src={`icons/logo.png`} sx={{"height": "4em", "weight": "4em"}}/>
  <Link as={NextLink} href={`https://github.com/juliocesar69`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "Hover": {}}}>
  <Box>
  {`© 2018-2023 `}
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
