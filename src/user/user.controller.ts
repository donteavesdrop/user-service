import { Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Эндпоинт для обновления флага "problems" и подсчета пользователей с проблемами
  @Post('reset-problems')
  async resetProblemsFlag(): Promise<{ count: number }> {
    const count = await this.userService.resetProblemsFlag();
    return { count };
  }

  // Эндпоинт для подсчета количества пользователей с флагом "problems" равным true
  @Get('count-with-problems')
  async countUsersWithProblems(): Promise<{ count: number }> {
    const count = await this.userService.countUsersWithProblems();
    return { count };
  }
}
