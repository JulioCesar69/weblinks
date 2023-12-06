import reflex as rx
from weblinks.components.link_button import link_button
from weblinks.components.title import title
from weblinks.styles.styles import Size as Size
import weblinks.constants as const


def links() -> rx.Component:
    return rx.vstack(
        title("Proyectos"),
        link_button(
            "Tienda virtual PC BOX",
            "Sistema administrativo y tienda online",
            "icons/tienda.png",
            const.TWITCH_URL
        ),
        link_button(
            "Invenratio RMS",
            "Sistema de inventario a través de código  QR",
            "icons/inventario.png",
            const.TWITCH_URL
        ),
        link_button(
            "Menú digital Green Bull coffee & Pub",
            "Página web para mostrar el menú y promociones",
            "icons/menu.png",
            const.MENU_DIGITAL
        ),

        title("Contacto"),       
        link_button(
            "Email",
            const.EMAIL,
            "icons/email.svg",
            f"mailto:{const.EMAIL}"
        ),       
                
        width="100%",
        spacing=Size.DEFAULT.value,
    )