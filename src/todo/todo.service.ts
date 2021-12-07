import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do-dto';
import { ToDoItem } from './todo.model';
import { v4 as uuid } from 'uuid';
import { UpdateToDoDto } from './dto/update-to-do-dto';

@Injectable()
export class TodoService {
  private toDos: ToDoItem[] = [];

  allToDos(): ToDoItem[] {
    return this.toDos;
  }

  createToDo(createToDoDto: CreateToDoDto): ToDoItem {
    const { title, note, priorityLevel, reminderDate } = createToDoDto;
    const todo: ToDoItem = {
      id: uuid(),
      title,
      note,
      priorityLevel,
      reminderDate,
      isDone: false,
    };

    this.toDos.push(todo);

    return todo;
  }

  updateToDo(id: string, updateToDoDto: UpdateToDoDto): ToDoItem {
    const todo = this.toDos.find((todo) => todo.id === id);

    todo.isDone = updateToDoDto.isDone;
    todo.note = updateToDoDto.note;
    todo.priorityLevel = updateToDoDto.priorityLevel;
    todo.reminderDate = updateToDoDto.reminderDate;
    todo.title = updateToDoDto.title;

    return todo;
  }

  deleteToDo(id: string): void {
    this.toDos = this.toDos.filter((task) => task.id === id);
  }
}
