
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, HasMany } from 'sequelize-typescript';
import { CreationOptional, InferAttributes, InferCreationAttributes } from 'sequelize';



@Table
export class Guest extends Model<InferAttributes<Guest>, InferCreationAttributes<Guest>> {

    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: CreationOptional<number>;

    @Column

    declare firstName: string;

    @Column
    declare lastName: string | null;

    @Column
    declare email: string | null;

}