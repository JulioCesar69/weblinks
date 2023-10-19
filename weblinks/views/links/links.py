import reflex as rx
from weblinks.components.link_button import link_button
from weblinks.components.title import title


def links() -> rx.Component:
    return rx.vstack(
        title("Enlaces"),
        link_button("Portafolio", 
        "Conoce los proyectos que he desarrollado y las tecnologías ",
        "https://twitch.tv/mouredev"),
        link_button("Github",
        "Un lugar para compartir nuestros proyectos", 
        "https://github.com/JulioCesar69"),
        link_button("Facebook", 
        "Red social preferida", 
        "https://www.facebook.com/profile.php?id=100068432691199"),
        link_button("Instagram", 
        "Experiencias y aventuras", 
        "https://www.instagram.com/julls.cesar.ls/"),
        title("Enlaces"),
        link_button("Portafolio", 
        "Conoce los proyectos que he desarrollado y las tecnologías ",
        "https://twitch.tv/mouredev"),
        link_button("Github",
        "Un lugar para compartir nuestros proyectos", 
        "https://github.com/JulioCesar69"),
        link_button("Facebook", 
        "Red social preferida", 
        "https://www.facebook.com/profile.php?id=100068432691199"),
        link_button("Instagram", 
        "Experiencias y aventuras", 
        "https://www.instagram.com/julls.cesar.ls/"),
        width="100%"
    )