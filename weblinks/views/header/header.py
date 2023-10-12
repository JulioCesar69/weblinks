import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Julio Cesar Dev", size="xl"),
        rx.text("@juliocesardev"),
        rx.text("HOLA 👋🏼 MI NOMBRE ES JULIO CESAR"),
        rx.text("""Soy ingeniero de sistemas.
                Actualmente trabajo como freelance full-stack developer web.
                Además creo contenido formativo sobre programación y tecnología en redes.
                Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!""")
    )