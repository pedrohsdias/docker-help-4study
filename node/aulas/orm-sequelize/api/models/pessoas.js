'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      types: DataTypes.STRING,
      validate:{
        funcaoVAlidadora: function(dado){
          if(dado.length <3) throw new Erro(' o CAmpo no me deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg:'dado email invalido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,
    defaltScope: {
      where:{ativo:true}
    },
    scope: {
      todos: {where:{}}
      //outro: {where:{}}
    }
  });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: {// tras o relacionamento com filtro
        status: 'confirmado',
        as:'aulasMatriculas'
      }
    })

  };
  return Pessoas;
};