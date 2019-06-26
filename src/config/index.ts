import DConfig from '@ctsy/config'
import * as process from 'process'
export default class Config extends DConfig {
    get AppDebug() { return true }
    get dbConfig(): any {
        return {
            database: process.env.DB_NAME || "test",
            username: process.env.DB_USER || "root",
            password: process.env.DB_PWD || '123456',
            options: {
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 3306,
                dialect: 'mysql',
                timezone: "+8:00",
                pool: { max: 150, min: 1, acquire: 3000, idle: 1000 }
            },
        };
    }
}