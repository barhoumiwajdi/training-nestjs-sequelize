import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UserController } from 'src/Controller/User.controller';
import { UserService } from 'src/Services/User.service';
import { userProviders } from 'src/Providers/User.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        ...userProviders,
        UserService,

    ],
})
export class UserModule { }