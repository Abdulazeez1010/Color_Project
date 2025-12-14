import DeleteIcon from '@mui/icons-material/Delete';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Root, BoxContent } from './styles/DraggabbleColorBoxStyles';
import sizes from './styles/sizes';

function DraggableColorbox({id, color, name, handleClick}){
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: color
  };
    return (
        <Root ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <BoxContent color={color}>
                <span>{name}</span>
                <DeleteIcon
                  sx={{
                    transition: "all 0.3s ease-in-out",
                    [sizes.down("xs")]: {
                      width: "1.3rem"
                    }
                  }}
                  onClick={handleClick}
                  onPointerDown={(e) => e.stopPropagation()}
                />
            </BoxContent>
        </Root>
    );
}

export default DraggableColorbox;