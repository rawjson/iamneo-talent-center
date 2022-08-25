import Candidate from './candidate';
import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
  const theme = props.column.theme;

  const filterClasses = (...classes) => classes.filter(Boolean).join(' ');

  const applyBorder = () => {
    switch (theme) {
      case 'yellow':
        return 'border-yellow-500';
      case 'red':
        return 'border-red-500';
      default:
        return 'border-gray-500';
    }
  };

  return (
    <>
      <div className="w-80 text-cyan-900">
        {/* column type */}
        <div
          className={filterClasses(
            applyBorder(theme),
            'bg-white h-10 flex items-center rounded border-l-4'
          )}
        >
          <h2 className="px-4 space-x-2 text-sm font-bold">
            <span>{props.column.title}</span>
            <span>-</span>
            <span className="text-gray-400">{props.column.candIds.length}</span>
          </h2>
        </div>

        {/* candidates in column */}
        <Droppable droppableId={props.column.id}>
          {(provided) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {props.candidates.map((candidate, index) => (
                  <Candidate
                    key={candidate.id}
                    candidate={candidate}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </>
  );
};

export default Column;
