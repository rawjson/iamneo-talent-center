import { initialData } from './Boards/initData';
import { useState } from 'react';
import Column from './Boards/column';
import { DragDropContext } from 'react-beautiful-dnd';
import { onDragEnd } from './onDragEnd';

const KanbanBoards = () => {
  const [data, setData] = useState(initialData);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd({ result, data, setData })}
    >
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const candidates = column.candIds.map(
          (candId) => data.candidates[candId]
        );
        return (
          <Column key={column.id} column={column} candidates={candidates} />
        );
      })}
    </DragDropContext>
  );
};

export default KanbanBoards;
