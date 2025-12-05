
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Root = styled("div")({
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover svg": {
        color: "white",
        transform: "scale(1.5)"
    }
});

const BoxContent = styled("div")({
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
});


function DraggableColorbox({id, color, name, handleClick}){
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color
  };
    return (
        <Root ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <BoxContent>
                <span>{name}</span>
                <DeleteIcon
                  sx={{transition: "all 0.3s ease-in-out"}}
                  onClick={handleClick}
                  onPointerDown={(e) => e.stopPropagation()}
                />
            </BoxContent>
        </Root>
    );
}

export default DraggableColorbox;