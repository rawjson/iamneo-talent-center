import { useContext } from 'react';
import Column from './Boards/column';
import { DragDropContext } from 'react-beautiful-dnd';
import { onDragEnd } from './onDragEnd';
import { DataContext } from './dataContext/dataContext';

const KanbanBoards = () => {
  const { data, setData } = useContext(DataContext);

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
