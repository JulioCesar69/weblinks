import reflex as rx
from weblinks.components.navbar import navbar
from weblinks.components.footer import footer
from weblinks.views.header.header import header
from weblinks.views.links.links import links

class State(rx.State):   
    pass

def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        header(),
        links(),
        footer()
    )
    


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
