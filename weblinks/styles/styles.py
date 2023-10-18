import reflex as rx
from enum import Enum

#constantes
MAX_WIDTH = "560px"

#Tamaños
class Size(Enum):
    SMALL = "0.5em" 
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
    rx.link: {
        "text_decoration":"none",
        "_hover":{}
    }
}    