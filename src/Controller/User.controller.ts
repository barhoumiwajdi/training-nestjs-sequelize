import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/Services/User.service';




@Controller('user')

export class UserController {
    constructor(private service: UserService) { }

    @Get()
    findAll() {
        return this.service.findAll();
    }

}