package pe.gob.miraflores.mobile.domain.seguridad;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class RolHistoricoCriteria {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public RolHistoricoCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
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
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
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

        public Criteria andCodRolHistIsNull() {
            addCriterion("cod_rol_hist is null");
            return (Criteria) this;
        }

        public Criteria andCodRolHistIsNotNull() {
            addCriterion("cod_rol_hist is not null");
            return (Criteria) this;
        }

        public Criteria andCodRolHistEqualTo(Integer value) {
            addCriterion("cod_rol_hist =", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistNotEqualTo(Integer value) {
            addCriterion("cod_rol_hist <>", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistGreaterThan(Integer value) {
            addCriterion("cod_rol_hist >", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_rol_hist >=", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistLessThan(Integer value) {
            addCriterion("cod_rol_hist <", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistLessThanOrEqualTo(Integer value) {
            addCriterion("cod_rol_hist <=", value, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistIn(List<Integer> values) {
            addCriterion("cod_rol_hist in", values, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistNotIn(List<Integer> values) {
            addCriterion("cod_rol_hist not in", values, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistBetween(Integer value1, Integer value2) {
            addCriterion("cod_rol_hist between", value1, value2, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andCodRolHistNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_rol_hist not between", value1, value2, "codRolHist");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioIsNull() {
            addCriterion("ide_usuario is null");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioIsNotNull() {
            addCriterion("ide_usuario is not null");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioEqualTo(Integer value) {
            addCriterion("ide_usuario =", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioNotEqualTo(Integer value) {
            addCriterion("ide_usuario <>", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioGreaterThan(Integer value) {
            addCriterion("ide_usuario >", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioGreaterThanOrEqualTo(Integer value) {
            addCriterion("ide_usuario >=", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioLessThan(Integer value) {
            addCriterion("ide_usuario <", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioLessThanOrEqualTo(Integer value) {
            addCriterion("ide_usuario <=", value, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioIn(List<Integer> values) {
            addCriterion("ide_usuario in", values, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioNotIn(List<Integer> values) {
            addCriterion("ide_usuario not in", values, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioBetween(Integer value1, Integer value2) {
            addCriterion("ide_usuario between", value1, value2, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeUsuarioNotBetween(Integer value1, Integer value2) {
            addCriterion("ide_usuario not between", value1, value2, "ideUsuario");
            return (Criteria) this;
        }

        public Criteria andIdeRolIsNull() {
            addCriterion("ide_rol is null");
            return (Criteria) this;
        }

        public Criteria andIdeRolIsNotNull() {
            addCriterion("ide_rol is not null");
            return (Criteria) this;
        }

        public Criteria andIdeRolEqualTo(Integer value) {
            addCriterion("ide_rol =", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolNotEqualTo(Integer value) {
            addCriterion("ide_rol <>", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolGreaterThan(Integer value) {
            addCriterion("ide_rol >", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolGreaterThanOrEqualTo(Integer value) {
            addCriterion("ide_rol >=", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolLessThan(Integer value) {
            addCriterion("ide_rol <", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolLessThanOrEqualTo(Integer value) {
            addCriterion("ide_rol <=", value, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolIn(List<Integer> values) {
            addCriterion("ide_rol in", values, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolNotIn(List<Integer> values) {
            addCriterion("ide_rol not in", values, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolBetween(Integer value1, Integer value2) {
            addCriterion("ide_rol between", value1, value2, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolNotBetween(Integer value1, Integer value2) {
            addCriterion("ide_rol not between", value1, value2, "ideRol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolIsNull() {
            addCriterion("ide_rolrol is null");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolIsNotNull() {
            addCriterion("ide_rolrol is not null");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolEqualTo(Integer value) {
            addCriterion("ide_rolrol =", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolNotEqualTo(Integer value) {
            addCriterion("ide_rolrol <>", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolGreaterThan(Integer value) {
            addCriterion("ide_rolrol >", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolGreaterThanOrEqualTo(Integer value) {
            addCriterion("ide_rolrol >=", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolLessThan(Integer value) {
            addCriterion("ide_rolrol <", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolLessThanOrEqualTo(Integer value) {
            addCriterion("ide_rolrol <=", value, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolIn(List<Integer> values) {
            addCriterion("ide_rolrol in", values, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolNotIn(List<Integer> values) {
            addCriterion("ide_rolrol not in", values, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolBetween(Integer value1, Integer value2) {
            addCriterion("ide_rolrol between", value1, value2, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andIdeRolrolNotBetween(Integer value1, Integer value2) {
            addCriterion("ide_rolrol not between", value1, value2, "ideRolrol");
            return (Criteria) this;
        }

        public Criteria andFechaIsNull() {
            addCriterion("fecha is null");
            return (Criteria) this;
        }

        public Criteria andFechaIsNotNull() {
            addCriterion("fecha is not null");
            return (Criteria) this;
        }

        public Criteria andFechaEqualTo(Date value) {
            addCriterion("fecha =", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaNotEqualTo(Date value) {
            addCriterion("fecha <>", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaGreaterThan(Date value) {
            addCriterion("fecha >", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaGreaterThanOrEqualTo(Date value) {
            addCriterion("fecha >=", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaLessThan(Date value) {
            addCriterion("fecha <", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaLessThanOrEqualTo(Date value) {
            addCriterion("fecha <=", value, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaIn(List<Date> values) {
            addCriterion("fecha in", values, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaNotIn(List<Date> values) {
            addCriterion("fecha not in", values, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaBetween(Date value1, Date value2) {
            addCriterion("fecha between", value1, value2, "fecha");
            return (Criteria) this;
        }

        public Criteria andFechaNotBetween(Date value1, Date value2) {
            addCriterion("fecha not between", value1, value2, "fecha");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated do_not_delete_during_merge Fri Oct 27 11:46:54 COT 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_rol_hist
     *
     * @mbg.generated Fri Oct 27 11:46:54 COT 2017
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