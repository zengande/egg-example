import { DataTypes } from 'sequelize';
import { Application } from 'egg'

export default function user(app: Application): any {
    const { INTEGER, STRING, DATE } = DataTypes;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        sex: STRING(10),
        created_at: DATE,
        updated_at: DATE,
    });

    return User;
}
