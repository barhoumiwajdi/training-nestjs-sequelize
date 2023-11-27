import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {


    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column
    password: string;

    @Column
    age: number;

}