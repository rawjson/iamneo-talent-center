import { StarIcon } from '../icons-dashboard/starIcon';
import { DotsVerticalIcon } from '../icons-sidebar/dotsVerticalIcon';
import { Draggable } from 'react-beautiful-dnd';

const Candidate = (props) => {
  return (
    <Draggable draggableId={props.candidate.id} index={props.index}>
      {(provided) => {
        return (
          <div
            className="bg-gray-50 my-4"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className="p-4 h-20 bg-white">
              <h3 className="text-sm font-bold text-cyan-700">
                {props.candidate.name}
              </h3>
              <p className="text-sm text-gray-500 rounded font-bold">
                {props.candidate.company}
              </p>
            </div>
            <div className="px-2 h-8 flex items-center justify-between">
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-gray-400" />
                  ))}
              </div>
              <DotsVerticalIcon className="w-4 h-4" />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Candidate;
