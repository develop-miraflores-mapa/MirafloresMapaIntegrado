package pe.gob.miraflores.mobile.domain.mapaincidencias;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AuditoriaIncidenciaCriteria {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public AuditoriaIncidenciaCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andTipoIsNull() {
            addCriterion("tipo is null");
            return (Criteria) this;
        }

        public Criteria andTipoIsNotNull() {
            addCriterion("tipo is not null");
            return (Criteria) this;
        }

        public Criteria andTipoEqualTo(String value) {
            addCriterion("tipo =", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoNotEqualTo(String value) {
            addCriterion("tipo <>", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoGreaterThan(String value) {
            addCriterion("tipo >", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoGreaterThanOrEqualTo(String value) {
            addCriterion("tipo >=", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoLessThan(String value) {
            addCriterion("tipo <", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoLessThanOrEqualTo(String value) {
            addCriterion("tipo <=", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoLike(String value) {
            addCriterion("tipo like", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoNotLike(String value) {
            addCriterion("tipo not like", value, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoIn(List<String> values) {
            addCriterion("tipo in", values, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoNotIn(List<String> values) {
            addCriterion("tipo not in", values, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoBetween(String value1, String value2) {
            addCriterion("tipo between", value1, value2, "tipo");
            return (Criteria) this;
        }

        public Criteria andTipoNotBetween(String value1, String value2) {
            addCriterion("tipo not between", value1, value2, "tipo");
            return (Criteria) this;
        }

        public Criteria andValorIsNull() {
            addCriterion("valor is null");
            return (Criteria) this;
        }

        public Criteria andValorIsNotNull() {
            addCriterion("valor is not null");
            return (Criteria) this;
        }

        public Criteria andValorEqualTo(String value) {
            addCriterion("valor =", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorNotEqualTo(String value) {
            addCriterion("valor <>", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorGreaterThan(String value) {
            addCriterion("valor >", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorGreaterThanOrEqualTo(String value) {
            addCriterion("valor >=", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorLessThan(String value) {
            addCriterion("valor <", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorLessThanOrEqualTo(String value) {
            addCriterion("valor <=", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorLike(String value) {
            addCriterion("valor like", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorNotLike(String value) {
            addCriterion("valor not like", value, "valor");
            return (Criteria) this;
        }

        public Criteria andValorIn(List<String> values) {
            addCriterion("valor in", values, "valor");
            return (Criteria) this;
        }

        public Criteria andValorNotIn(List<String> values) {
            addCriterion("valor not in", values, "valor");
            return (Criteria) this;
        }

        public Criteria andValorBetween(String value1, String value2) {
            addCriterion("valor between", value1, value2, "valor");
            return (Criteria) this;
        }

        public Criteria andValorNotBetween(String value1, String value2) {
            addCriterion("valor not between", value1, value2, "valor");
            return (Criteria) this;
        }

        public Criteria andFecRegistraIsNull() {
            addCriterion("fec_registra is null");
            return (Criteria) this;
        }

        public Criteria andFecRegistraIsNotNull() {
            addCriterion("fec_registra is not null");
            return (Criteria) this;
        }

        public Criteria andFecRegistraEqualTo(Date value) {
            addCriterion("fec_registra =", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraNotEqualTo(Date value) {
            addCriterion("fec_registra <>", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraGreaterThan(Date value) {
            addCriterion("fec_registra >", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_registra >=", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraLessThan(Date value) {
            addCriterion("fec_registra <", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraLessThanOrEqualTo(Date value) {
            addCriterion("fec_registra <=", value, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraIn(List<Date> values) {
            addCriterion("fec_registra in", values, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraNotIn(List<Date> values) {
            addCriterion("fec_registra not in", values, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraBetween(Date value1, Date value2) {
            addCriterion("fec_registra between", value1, value2, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andFecRegistraNotBetween(Date value1, Date value2) {
            addCriterion("fec_registra not between", value1, value2, "fecRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraIsNull() {
            addCriterion("des_ip_registra is null");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraIsNotNull() {
            addCriterion("des_ip_registra is not null");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraEqualTo(String value) {
            addCriterion("des_ip_registra =", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraNotEqualTo(String value) {
            addCriterion("des_ip_registra <>", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraGreaterThan(String value) {
            addCriterion("des_ip_registra >", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraGreaterThanOrEqualTo(String value) {
            addCriterion("des_ip_registra >=", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraLessThan(String value) {
            addCriterion("des_ip_registra <", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraLessThanOrEqualTo(String value) {
            addCriterion("des_ip_registra <=", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraLike(String value) {
            addCriterion("des_ip_registra like", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraNotLike(String value) {
            addCriterion("des_ip_registra not like", value, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraIn(List<String> values) {
            addCriterion("des_ip_registra in", values, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraNotIn(List<String> values) {
            addCriterion("des_ip_registra not in", values, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraBetween(String value1, String value2) {
            addCriterion("des_ip_registra between", value1, value2, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraNotBetween(String value1, String value2) {
            addCriterion("des_ip_registra not between", value1, value2, "desIpRegistra");
            return (Criteria) this;
        }

        public Criteria andCodPerfilIsNull() {
            addCriterion("cod_perfil is null");
            return (Criteria) this;
        }

        public Criteria andCodPerfilIsNotNull() {
            addCriterion("cod_perfil is not null");
            return (Criteria) this;
        }

        public Criteria andCodPerfilEqualTo(Integer value) {
            addCriterion("cod_perfil =", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilNotEqualTo(Integer value) {
            addCriterion("cod_perfil <>", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilGreaterThan(Integer value) {
            addCriterion("cod_perfil >", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_perfil >=", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilLessThan(Integer value) {
            addCriterion("cod_perfil <", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilLessThanOrEqualTo(Integer value) {
            addCriterion("cod_perfil <=", value, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilIn(List<Integer> values) {
            addCriterion("cod_perfil in", values, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilNotIn(List<Integer> values) {
            addCriterion("cod_perfil not in", values, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilBetween(Integer value1, Integer value2) {
            addCriterion("cod_perfil between", value1, value2, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodPerfilNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_perfil not between", value1, value2, "codPerfil");
            return (Criteria) this;
        }

        public Criteria andCodRolIsNull() {
            addCriterion("cod_rol is null");
            return (Criteria) this;
        }

        public Criteria andCodRolIsNotNull() {
            addCriterion("cod_rol is not null");
            return (Criteria) this;
        }

        public Criteria andCodRolEqualTo(Integer value) {
            addCriterion("cod_rol =", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolNotEqualTo(Integer value) {
            addCriterion("cod_rol <>", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolGreaterThan(Integer value) {
            addCriterion("cod_rol >", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_rol >=", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolLessThan(Integer value) {
            addCriterion("cod_rol <", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolLessThanOrEqualTo(Integer value) {
            addCriterion("cod_rol <=", value, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolIn(List<Integer> values) {
            addCriterion("cod_rol in", values, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolNotIn(List<Integer> values) {
            addCriterion("cod_rol not in", values, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolBetween(Integer value1, Integer value2) {
            addCriterion("cod_rol between", value1, value2, "codRol");
            return (Criteria) this;
        }

        public Criteria andCodRolNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_rol not between", value1, value2, "codRol");
            return (Criteria) this;
        }

        public Criteria andTipoLikeInsensitive(String value) {
            addCriterion("upper(tipo) like", value.toUpperCase(), "tipo");
            return (Criteria) this;
        }

        public Criteria andValorLikeInsensitive(String value) {
            addCriterion("upper(valor) like", value.toUpperCase(), "valor");
            return (Criteria) this;
        }

        public Criteria andDesIpRegistraLikeInsensitive(String value) {
            addCriterion("upper(des_ip_registra) like", value.toUpperCase(), "desIpRegistra");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated do_not_delete_during_merge Fri Nov 03 10:32:59 COT 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_auditoria
     *
     * @mbg.generated Fri Nov 03 10:32:59 COT 2017
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}