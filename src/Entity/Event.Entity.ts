
import { Table, Column, Model, PrimaryKey, AutoIncrement, HasOne, HasMany } from 'sequelize-typescript';
import { CreationOptional, InferAttributes, InferCreationAttributes, NonAttribute } from 'sequelize';
import { Guest } from './Guest.Entity';



@Table
export class Event extends Model<InferAttributes<Event>, InferCreationAttributes<Event>> {

    @PrimaryKey
    @AutoIncrement
    @Column
    declare id: CreationOptional<number>;

    @Column

    declare Title: string;

    @Column
    declare Description: string | null;

    @Column
    declare Lieu: string | null;


    @Column
    declare Date: Date | null;


    @HasMany(() => Guest, /* foreign key */ 'guestId')
    declare guest?: NonAttribute<Guest[]>;

}