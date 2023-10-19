import reflex as rx
from enum import Enum

#constantes
MAX_WIDTH = "560px"

#Tamaños
class Size(Enum):
    SMALL = "0.5em" 
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"

#estilos
BASE_STYLE = {
    rx.Button : {
        "width":"100%",
        "height":"100%",
        "display":"block",
        "padding":Size.SMALL.value,
        "border_radius":Size.DEFAULT.value
    },
    rx.Link: {
        "text_decoration":"none",
        "_hover":{}
    }
}    

title_style = dict(          
    width="100%",
    padding_top = Size.DEFAULT.value
)

button_tittle_style = dict(
    font_size = Size.DEFAULT.value
)

button_body_style = dict(
    font_size = Size.MEDIUM.value
)