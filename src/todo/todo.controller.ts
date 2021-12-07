import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do-dto';
import { UpdateToDoDto } from './dto/update-to-do-dto';
import { ToDoItem } from './todo.model';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private toDoService: TodoService) {}

  @Get()
  allToDos(): ToDoItem[] {
    return this.toDoService.allToDos();
  }

  @Post()
  createToDo(@Body() createToDoDto: CreateToDoDto): ToDoItem {
    return this.toDoService.createToDo(createToDoDto);
  }

  @Patch('/:id')
  updateToDo(
    @Param('id') id: string,
    @Body() updateToDoDto: UpdateToDoDto,
  ): ToDoItem {
    return this.toDoService.updateToDo(id, updateToDoDto);
  }

  @Delete('/:id')
  deleteToDo(@Param('id') id: string): void {
    this.toDoService.deleteToDo(id);
  }
}
