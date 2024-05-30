import { DataTypes } from "sequelize";
import { dbInstance } from "../database/config.js";

export const User = dbInstance
.define(
    "user",
    {
        id_user:{
            type: DataTypes.BIGINT,
            primaryKey:true,
            autoIncrement: true
        },

        name: DataTypes.STRING(255),
        lastname: DataTypes.STRING(255),
        username:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING
    },
    {
        tableName: "user",
        timestamps: true
    }
)