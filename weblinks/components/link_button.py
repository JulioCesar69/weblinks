import reflex as rx
import weblinks.styles.styles as styles


def link_button(title: str, body: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(
                    tag="arrow_right",
                    width=styles.Size.BIG.value,
                    height=styles.Size.BIG.value,
                    matgin=styles.Size.MEDIUM.value
                ),
                rx.vstack(
                    rx.text(title, style=styles.button_tittle_style),
                    rx.text(body, style=styles.button_body_style),
                    spacing=Size.SMALL.value,
                    align_items="start",
                    margin=Size.ZERO.value
                )            
            )
        ),
        href=url,
        is_external=True,
        width="100%"      
    )
    
    