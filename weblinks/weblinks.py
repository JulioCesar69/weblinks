import reflex as rx
from weblinks.Components.navbar import navbar
from weblinks.links.links import links

class State(rx.State):   
    pass

def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        links()
    )
    


# Add state and page to the app.
app = rx.App()
app.add_page(index)
app.compile()
