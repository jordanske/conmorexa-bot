import {
    DataTypes,
    Model,
    Optional
} from "sequelize";
import Client from '@client';

interface CacheAttributes {
    id: number;
    name: string;
    data: string;
}

interface CacheCreationAttributes extends Optional<CacheAttributes, 'id'> { }

class Cache extends Model<CacheAttributes, CacheCreationAttributes> implements CacheAttributes {
    public id!: number;
    public name!: string | null;
    public data!: string | null;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;

    public static async getCached(name: string, defaultData: any) {
        const [cache] = await Cache.findOrCreate({
            where: { name: name },
            defaults: {
                name: name,
                data: JSON.stringify(defaultData)
            }
        });

        return JSON.parse(cache.data);
    }
}

Cache.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize: Client.sequelize,
        tableName: 'cache',
        underscored: true,
    }
);

export {
    CacheAttributes,
    CacheCreationAttributes,
    Cache
}