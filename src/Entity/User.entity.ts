import { Table, Column, Model, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';

import { InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';
import { Guest } from './Guest.Entity';


@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {

    @PrimaryKey
    @AutoIncrement
    @Column
    declare userId: number

    @Column
    declare firstname: string;

    @Column

    declare lastname: string;

    @Column({ unique: true })

    declare email: string;

    @Column

    declare password: string;

    @Column
    declare age: number;

}