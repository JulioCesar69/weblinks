import reflex as rx
from weblinks.styles.styles import Size as Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text(
            "Julio's Dev",            
        ),
        position="sticky",
        bg="lightblue",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        z_index="999",
        top="0"
    )