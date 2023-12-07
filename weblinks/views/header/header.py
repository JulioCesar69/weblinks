import reflex as rx
import datetime
import weblinks.constants as const
from weblinks.styles.styles import Size
from weblinks.styles.colors import Color, TextColor
from weblinks.components.link_icon import link_icon
from weblinks.components.info_text import info_text

def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Julio Cesar", 
                size="xl",
                src="avatar.jpg",
                color=TextColor.BODY.value,
                bg=Color.CONTENT.value,
                padding="2px",
                border="4px",
                border_color=Color.PRIMARY.value
            ),
            rx.vstack(
                rx.heading(
                    "Julio César",
                    size="lg",                      
                ),
                rx.text(
                    "@juliocesardev",
                    margin_top=Size.ZERO.value,
                    color=Color.PRIMARY.value
                ),                            
                rx.hstack(                    
                    link_icon(
                        "icons/github.svg",
                        const.GITHUB_URL,
                        "GITHUB"
                    ),
                    link_icon(
                        "icons/x.svg",
                        const.THREADS_URL,
                        "Twitter/x"
                    ),
                    link_icon(
                        "icons/instagram.svg",
                        const.INSTAGRAM_URL,
                        "instagram"
                    ),
                    link_icon(
                        "icons/facebook.png",
                        const.FACEBOOK_URL,
                        "facebook"
                    ),
                    link_icon(
                        "icons/spotify.svg",
                        const.SPOTIFY_URL,
                        "spotify"
                    ),
                    link_icon(
                        "icons/linkedin.svg",
                        const.LINKEDIN_URL,
                        "linkedin"
                    ),
                    spacing=Size.LARGE.value
                ),
                align_items="start"       
            ),  
            spacing=Size.DEFAULT.value                                       
        ),
        rx.flex(
            info_text(
               # f"{experience()}+",
                "4+"," años de experiencia"
            ),
#            rx.spacer(),            
            rx.spacer(),
            rx.link(
                "Descargar CV",
                href="files/cv.pdf",
                font_size=Size.MEDIUM.value,
                font_weight="bold",
                color=Color.PRIMARY.value
            ),
            width="100%"
        ),
        rx.text(    
                    f"""Soy egresado de la carrera de Ingeniería en Sistemas Computacionales
                    en el Instituto Tecnológico de Tlaxiaco. Trabajo como freelance full-stack developer.
                    Estoy interesado en impulsar el desarrollo tecnológico en la región mixteca 
                    a través de la implementación de sistemas que ayuden al comercio local a tener un mayor impacto.
                    Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!""",
                    font_size=Size.DEFAULT.value,
                    color=TextColor.BODY.value,
                    text_align="justify"
                ),
        spacing=Size.BIG.value,     
        align_items="start"                
    )

    #def experience() -> int:
     #   return datetime.date.today().year - 2018