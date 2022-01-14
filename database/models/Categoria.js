module.exports = (sequelize, DataTypes) => {

    const alias = 'Categoria'
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull:false
        }
    };

    let config = {
        tableName: "categorias",
        timestamps : false,
        underscored: true
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function (models) {
        Categoria.hasMany(models.Producto, {
            as: 'products',
            foreignKey: 'categoria_id'
        })
    }
    
return Categoria;
}