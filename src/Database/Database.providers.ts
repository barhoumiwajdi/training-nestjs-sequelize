import { Sequelize } from 'sequelize-typescript';
import { Role } from 'src/Entity/Roles.Enum';
import { User } from 'src/Entity/User.entity';


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            try {
                const sequelize = new Sequelize({
                    dialect: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: null,
                    database: 'Nest-Training',
                });
                sequelize.addModels([User, Role]);

                await sequelize.sync();
                console.log('Connection has been established successfully.');

                return sequelize;
            } catch (error) {
                console.error('Unable to connect to the database:', error);
            }

        },
    },
];