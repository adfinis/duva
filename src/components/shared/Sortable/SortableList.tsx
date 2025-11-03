import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  type Modifier,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { ReactNode } from 'react';

interface SortableListProps<T> {
  items: T[];
  getItemId: (item: T) => string;
  onReorder: (items: T[]) => void;
  children: ReactNode;
  modifiers?: Modifier[];
}

export function SortableList<T>({
  items,
  getItemId,
  onReorder,
  children,
  modifiers,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const oldIndex = items.findIndex((item) => getItemId(item) === active.id);
    const newIndex = items.findIndex((item) => getItemId(item) === over.id);

    if (oldIndex === -1 || newIndex === -1) {
      return;
    }

    const newItems = [...items];
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);

    onReorder(newItems);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
    >
      <SortableContext
        items={items.map(getItemId)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
}
