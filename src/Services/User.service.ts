import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/Entity/User.entity';



@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private catsRepository: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        return this.catsRepository.findAll<User>();
    }
}