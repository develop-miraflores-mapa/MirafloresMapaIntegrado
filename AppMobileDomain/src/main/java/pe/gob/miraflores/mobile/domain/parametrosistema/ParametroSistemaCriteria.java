package pe.gob.miraflores.mobile.domain.parametrosistema;

import java.util.ArrayList;
import java.util.List;

public class ParametroSistemaCriteria {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public ParametroSistemaCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
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
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
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

        public Criteria andIdparametrosistemaIsNull() {
            addCriterion("idparametrosistema is null");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaIsNotNull() {
            addCriterion("idparametrosistema is not null");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaEqualTo(String value) {
            addCriterion("idparametrosistema =", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaNotEqualTo(String value) {
            addCriterion("idparametrosistema <>", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaGreaterThan(String value) {
            addCriterion("idparametrosistema >", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaGreaterThanOrEqualTo(String value) {
            addCriterion("idparametrosistema >=", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaLessThan(String value) {
            addCriterion("idparametrosistema <", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaLessThanOrEqualTo(String value) {
            addCriterion("idparametrosistema <=", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaLike(String value) {
            addCriterion("idparametrosistema like", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaNotLike(String value) {
            addCriterion("idparametrosistema not like", value, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaIn(List<String> values) {
            addCriterion("idparametrosistema in", values, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaNotIn(List<String> values) {
            addCriterion("idparametrosistema not in", values, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaBetween(String value1, String value2) {
            addCriterion("idparametrosistema between", value1, value2, "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaNotBetween(String value1, String value2) {
            addCriterion("idparametrosistema not between", value1, value2, "idparametrosistema");
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

        public Criteria andCodaplicacionIsNull() {
            addCriterion("codaplicacion is null");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionIsNotNull() {
            addCriterion("codaplicacion is not null");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionEqualTo(String value) {
            addCriterion("codaplicacion =", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionNotEqualTo(String value) {
            addCriterion("codaplicacion <>", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionGreaterThan(String value) {
            addCriterion("codaplicacion >", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionGreaterThanOrEqualTo(String value) {
            addCriterion("codaplicacion >=", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionLessThan(String value) {
            addCriterion("codaplicacion <", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionLessThanOrEqualTo(String value) {
            addCriterion("codaplicacion <=", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionLike(String value) {
            addCriterion("codaplicacion like", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionNotLike(String value) {
            addCriterion("codaplicacion not like", value, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionIn(List<String> values) {
            addCriterion("codaplicacion in", values, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionNotIn(List<String> values) {
            addCriterion("codaplicacion not in", values, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionBetween(String value1, String value2) {
            addCriterion("codaplicacion between", value1, value2, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionNotBetween(String value1, String value2) {
            addCriterion("codaplicacion not between", value1, value2, "codaplicacion");
            return (Criteria) this;
        }

        public Criteria andIdparametrosistemaLikeInsensitive(String value) {
            addCriterion("upper(idparametrosistema) like", value.toUpperCase(), "idparametrosistema");
            return (Criteria) this;
        }

        public Criteria andValorLikeInsensitive(String value) {
            addCriterion("upper(valor) like", value.toUpperCase(), "valor");
            return (Criteria) this;
        }

        public Criteria andCodaplicacionLikeInsensitive(String value) {
            addCriterion("upper(codaplicacion) like", value.toUpperCase(), "codaplicacion");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated do_not_delete_during_merge Mon Jul 10 12:21:14 COT 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.parametro_sistema
     *
     * @mbg.generated Mon Jul 10 12:21:14 COT 2017
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