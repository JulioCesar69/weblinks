import reflex as rx
from weblinks.components.navbar import navbar
from weblinks.components.footer import footer
from weblinks.views.header.header import header
from weblinks.views.links.links import links
import weblinks.styles.styles as styles
from weblinks.styles.styles import Size as Size

class State(rx.State):   
    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(            
                header(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                padding=Size.BIG.value
            )
        ),        
        footer()
    )
    
    


# Add state and page to the app.
app = rx.App(
    style=styles.BASE_STYLE
)
app.add_page(
    index,
    title="JulioCesar | Desarrollo aplicaciones web",
    description="Hola, mi nombre es Julio Cesar. Soy ingeniero en sistemas computacionales y desarrollador freelance full-stack.",
    image="avatar.jpg")
app.compile()
