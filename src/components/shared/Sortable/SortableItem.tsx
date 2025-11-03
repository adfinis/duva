import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import type { CSSProperties, ReactNode } from 'react';

interface DragHandleProps {
  ref: (element: HTMLElement | null) => void;
  listeners: DraggableSyntheticListeners;
}

interface SortableItemProps {
  id: string;
  children: (dragHandleProps: DragHandleProps) => ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function SortableItem({
  id,
  children,
  style,
  className,
}: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    isDragging,
  } = useSortable({
    id,
    transition: null,
  });

  const sortableStyle: CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    zIndex: isDragging ? 1000 : undefined,
    opacity: isDragging ? 0.8 : 1,
    ...style,
  };

  return (
    <div
      ref={setNodeRef}
      style={sortableStyle}
      className={className}
      {...attributes}
    >
      {children({
        ref: setActivatorNodeRef,
        listeners,
      })}
    </div>
  );
}
