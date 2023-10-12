import reflex as rx


def navbar():
    return rx.box(
        rx.hstack(
            rx.image(src="favicon.ico"),
            rx.heading("My App"),
        ),
        rx.spacer(),
        rx.menu(
            rx.menu_button("Menu"),
        ),
        position="fixed",
        width="100%",
        top="0px",
        z_index="5",
    )