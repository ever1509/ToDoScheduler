import { CreateToDoDto } from './create-to-do-dto';

export class UpdateToDoDto extends CreateToDoDto {
  id: string;
  isDone: boolean;
}
