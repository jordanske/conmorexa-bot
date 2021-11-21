import {
    DataTypes,
    Model,
    Optional
} from "sequelize";
import Client from '@client';

interface TagAttributes {
    id: number;
    name: string | null;
    description: string | null;
    username: string | null;
    usage_count: number;
}

interface TagCreationAttributes extends Optional<TagAttributes, 'id'> { }

class Tag extends Model<TagAttributes, TagCreationAttributes> implements TagAttributes {
    public id!: number;
    public name!: string | null;
    public description!: string | null;
    public username!: string | null;
    public usage_count!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        username: {
            type: DataTypes.STRING,
        },
        usage_count: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize: Client.sequelize,
        tableName: 'tags',
        underscored: true,
    }
);

export {
    TagAttributes,
    TagCreationAttributes,
    Tag
}