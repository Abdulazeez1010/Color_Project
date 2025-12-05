
import { 
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { 
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy 
} from '@dnd-kit/sortable';

import DraggableColorbox from "./DraggableColorBox"


function DraggableColorList({colors, removeColor, handleDragEnd}){

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        })
      );

    return(

        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={colors.map(c => c.name)}
                strategy={rectSortingStrategy}
            >
                {colors.map(color => (
                    <DraggableColorbox
                        key={color.name}
                        id={color.name}
                        color={color.color}
                        name={color.name}
                        handleClick={() => removeColor(color.name)}
                    />
                ))}
            
            </SortableContext>
        </DndContext>
        
    )
}

export default DraggableColorList;