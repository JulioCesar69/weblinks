import reflex as rx
from weblinks.components.link_icon import link_icon
from weblinks.components.info_text import info_text
from weblinks.styles.styles import Size as Size
from weblinks.styles.colors import Color as Color
from weblinks.styles.colors import TextColor as TextColor
import weblinks.constants as const
import datetime

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Julio Cesar", size="xl", src="avatar.jpg"),
            rx.vstack(
                rx.heading(
                    "Julio César",
                    size="lg",
                    color=TextColor.HEADER.value    
                ),
                rx.text(
                    "@juliocesardev",
                     margin_top="0px !important",
                     color.TextColor.BODY.value
                     ),                            
                rx.hstack(
                    link_icon("https://www.facebook.com/profile.php?id=100068432691199"),
                    link_icon("https://www.instagram.com/julls.cesar.ls/"),
                    link_icon("https://www.threads.net/@julls.cesar.ls")
                ),
                align_items="start"       
            ),  
               
            
            
        ),
        rx.flex(
            info_text("+13", " años de experiencia"),
            rx.spacer(),
            info_text("+13", " años de experiencia"),
            rx.spacer(),
            info_text("+13", " años de experiencia"),
            width="100%"
        ),
        rx.text(    
                    """Soy egresado de la carrera de Ingeniería en Sistemas Computacionales
                    en el Instituto Tecnológico de Tlaxiaco. Trabajo como freelance full-stack developer.
                    Estoy interesado en impulsar el desarrollo tecnológico en la región mixteca 
                    a través de la implementación de sistemas que ayuden al comercio local a tener un mayor impacto.
                    Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!""",
                    font_size=Size.DEFAULT.value,
                    color=TextColor.BODY.value
                ),
        spacing=Size.BIG.value,     
        align_items="start"                
    )