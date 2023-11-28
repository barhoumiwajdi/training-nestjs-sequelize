import { Injectable, Inject, UnauthorizedException, BadRequestException, HttpException, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';

import { User } from 'src/Entity/User.entity';



@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async delete(id: number) {
        try {
            const data = await this.userRepository.findByPk(id);
            if (data) {
                return this.userRepository.destroy({
                    where: {
                        id: id
                    },
                })
            }
            else {
                throw new BadRequestException('User Nor Found',
                    {
                        cause: new Error(),
                        description: 'Some error description'
                    })
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'This is a custom message Internal Error',
            }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            });
        }
    }



    async findOne(id: any) {
        try {
            const data = await this.userRepository.findByPk(id);
            if (data) {
                return data
            }
            else {
                throw new BadRequestException('User Nor Found',
                    {
                        cause: new Error(),
                        description: 'Some error description'
                    })
            }
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'This is a custom message Internal Error',
            }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            });
        }
    }
    async finByName(name: any) {
        try {
            const data = await this.userRepository.findOne({
                where: { firstname: name }
            })
            if (data) {
                return data
            }
            else {
                throw new BadRequestException('User Not found',
                    {
                        cause: new Error(),
                        description: 'Some error description'
                    })
            }

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'This is a custom message Internal Error',
            }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            });
        }
    }

}