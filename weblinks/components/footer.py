import reflex as rx
import datetime
import weblinks.constants as const
from weblinks.styles.styles import Size
from weblinks.styles.colors import Color, TextColor

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="icons/logo.png",
            width="180px", height="auto",
            #height=Size.VERY_BIG.value,
            #weight=Size.VERY_BIG.value,
            alt="Logotipo."
        ),
        rx.link(           
            rx.box(
                f"© 2018-{datetime.date.today().year} ",
                rx.span("Julio Cesar", color=Color.PRIMARY.value),
                " v3."
            ),
            href=const.GITHUB_URL,
            is_external=True,
            font_size=Size.MEDIUM.value
        ),
        rx.text(
            "BUILDING SOFTWARE WITH ♥ FROM TLAXIACO, OAXACA, MEXICO TO THE WORLD.",
            font_size=Size.MEDIUM.value,
            margin_top=Size.ZERO.value
        ),
        margin_bottom=Size.BIG.value,
        padding_bottom=Size.BIG.value,
        padding_x=Size.BIG.value,
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value
    )