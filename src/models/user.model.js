import { DataTypes } from "sequelize";
import { dbInstance } from "../database/config";

export const User = dbInstance
    .define(
        "users",
        {
            id_user: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            identification_type: DataTypes.BIGINT,
            identification_number: DataTypes.BIGINT,
            first_name: DataTypes.STRING,
            second_name: DataTypes.STRING,
            first_surname: DataTypes.STRING,
            second_surname: DataTypes.STRING,
            cellphone_number: DataTypes.BIGINT,
            email: { type: DataTypes.STRING, unique: true },
            username: { type: DataTypes.STRING, unique: true },
            password: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "users",
            timestamps: true,
        }
    );

