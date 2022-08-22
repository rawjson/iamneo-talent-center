export const onDragEnd = (props) => {
  if (!props.result.destination) return;
  const { destination, source, draggableId } = props.result;

  if (destination.droppableId !== source.droppableId) {
    const srcCol = props.data.columns[source.droppableId];
    const destCol = props.data.columns[destination.droppableId];
    const srcCandIds = [...srcCol.candIds];
    const destCandIds = [...destCol.candIds];
    const [removed] = srcCandIds.splice(source.index, 1);
    destCandIds.splice(destination.index, 0, removed);

    // update the state with new data
    props.setData({
      ...props.data,
      columns: {
        ...props.data.columns,
        [srcCol.id]: {
          ...srcCol,
          candIds: srcCandIds,
        },
        [destCol.id]: {
          ...destCol,
          candIds: destCandIds,
        },
      },
    });
  } else {
    const column = props.data.columns[source.droppableId];
    const newCandIds = [...column.candIds];
    newCandIds.splice(source.index, 1);
    newCandIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      candIds: newCandIds,
    };

    props.setData({
      ...props.data,
      columns: {
        ...props.data.columns,
        [newColumn.id]: newColumn,
      },
    });
  }
};
