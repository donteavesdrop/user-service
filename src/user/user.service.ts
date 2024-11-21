import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Функция для проставления флага problems как false
  async resetProblemsFlag(): Promise<number> {
    const result = await this.userRepository.update(
      { problems: true },
      { problems: false },
    );
    return result.affected || 0;
  }

  // Функция для подсчета пользователей с проблемами
  async countUsersWithProblems(): Promise<number> {
    const count = await this.userRepository.count({
      where: { problems: true },
    });
    return count;
  }
}
