import reflex as rx
import datetime
import weblinks.constants as const
from weblinks.styles.styles import Size as Size
from weblinks.styles.colors import Color as Color
from weblinks.styles.colors import TextColor as TextColor

def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="logo.png",
            height=Size.VERY_BIG.value
        ),
        rx.link(           
            rx.box(
                f"© 2014-{datetime.date.today().year} ",
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
        spacing=Size.DEFAULT.value,
        color=TextColor.FOOTER.value
    )