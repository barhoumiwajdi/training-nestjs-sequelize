import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, HasMany } from 'sequelize-typescript';
import { User } from './User.entity';
import { NonAttribute } from 'sequelize';


@Table
export class Role extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    Name: string;

    @Column
    Description: string;


    @HasMany(() => User, /* foreign key */ 'roleId')
    declare user?: NonAttribute<User[]>;
}

