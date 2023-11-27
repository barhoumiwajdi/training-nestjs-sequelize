import { User } from 'src/Entity/User.entity';


export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useValue: User,
    },
];