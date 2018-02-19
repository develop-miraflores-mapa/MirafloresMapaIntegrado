package pe.gob.miraflores.mobile.domain.mapaincidencias;

import java.util.ArrayList;
import java.util.List;

public class GeometriaLineaCriteria {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public GeometriaLineaCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
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
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
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

        public Criteria andIdLineaIsNull() {
            addCriterion("id_linea is null");
            return (Criteria) this;
        }

        public Criteria andIdLineaIsNotNull() {
            addCriterion("id_linea is not null");
            return (Criteria) this;
        }

        public Criteria andIdLineaEqualTo(Integer value) {
            addCriterion("id_linea =", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaNotEqualTo(Integer value) {
            addCriterion("id_linea <>", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaGreaterThan(Integer value) {
            addCriterion("id_linea >", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_linea >=", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaLessThan(Integer value) {
            addCriterion("id_linea <", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaLessThanOrEqualTo(Integer value) {
            addCriterion("id_linea <=", value, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaIn(List<Integer> values) {
            addCriterion("id_linea in", values, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaNotIn(List<Integer> values) {
            addCriterion("id_linea not in", values, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaBetween(Integer value1, Integer value2) {
            addCriterion("id_linea between", value1, value2, "idLinea");
            return (Criteria) this;
        }

        public Criteria andIdLineaNotBetween(Integer value1, Integer value2) {
            addCriterion("id_linea not between", value1, value2, "idLinea");
            return (Criteria) this;
        }

        public Criteria andPointIniIsNull() {
            addCriterion("point_ini is null");
            return (Criteria) this;
        }

        public Criteria andPointIniIsNotNull() {
            addCriterion("point_ini is not null");
            return (Criteria) this;
        }

        public Criteria andPointIniEqualTo(String value) {
            addCriterion("point_ini =", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniNotEqualTo(String value) {
            addCriterion("point_ini <>", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniGreaterThan(String value) {
            addCriterion("point_ini >", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniGreaterThanOrEqualTo(String value) {
            addCriterion("point_ini >=", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniLessThan(String value) {
            addCriterion("point_ini <", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniLessThanOrEqualTo(String value) {
            addCriterion("point_ini <=", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniLike(String value) {
            addCriterion("point_ini like", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniNotLike(String value) {
            addCriterion("point_ini not like", value, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniIn(List<String> values) {
            addCriterion("point_ini in", values, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniNotIn(List<String> values) {
            addCriterion("point_ini not in", values, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniBetween(String value1, String value2) {
            addCriterion("point_ini between", value1, value2, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointIniNotBetween(String value1, String value2) {
            addCriterion("point_ini not between", value1, value2, "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointFinIsNull() {
            addCriterion("point_fin is null");
            return (Criteria) this;
        }

        public Criteria andPointFinIsNotNull() {
            addCriterion("point_fin is not null");
            return (Criteria) this;
        }

        public Criteria andPointFinEqualTo(String value) {
            addCriterion("point_fin =", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinNotEqualTo(String value) {
            addCriterion("point_fin <>", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinGreaterThan(String value) {
            addCriterion("point_fin >", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinGreaterThanOrEqualTo(String value) {
            addCriterion("point_fin >=", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinLessThan(String value) {
            addCriterion("point_fin <", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinLessThanOrEqualTo(String value) {
            addCriterion("point_fin <=", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinLike(String value) {
            addCriterion("point_fin like", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinNotLike(String value) {
            addCriterion("point_fin not like", value, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinIn(List<String> values) {
            addCriterion("point_fin in", values, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinNotIn(List<String> values) {
            addCriterion("point_fin not in", values, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinBetween(String value1, String value2) {
            addCriterion("point_fin between", value1, value2, "pointFin");
            return (Criteria) this;
        }

        public Criteria andPointFinNotBetween(String value1, String value2) {
            addCriterion("point_fin not between", value1, value2, "pointFin");
            return (Criteria) this;
        }

        public Criteria andDesCalleIsNull() {
            addCriterion("des_calle is null");
            return (Criteria) this;
        }

        public Criteria andDesCalleIsNotNull() {
            addCriterion("des_calle is not null");
            return (Criteria) this;
        }

        public Criteria andDesCalleEqualTo(String value) {
            addCriterion("des_calle =", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleNotEqualTo(String value) {
            addCriterion("des_calle <>", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleGreaterThan(String value) {
            addCriterion("des_calle >", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleGreaterThanOrEqualTo(String value) {
            addCriterion("des_calle >=", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleLessThan(String value) {
            addCriterion("des_calle <", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleLessThanOrEqualTo(String value) {
            addCriterion("des_calle <=", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleLike(String value) {
            addCriterion("des_calle like", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleNotLike(String value) {
            addCriterion("des_calle not like", value, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleIn(List<String> values) {
            addCriterion("des_calle in", values, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleNotIn(List<String> values) {
            addCriterion("des_calle not in", values, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleBetween(String value1, String value2) {
            addCriterion("des_calle between", value1, value2, "desCalle");
            return (Criteria) this;
        }

        public Criteria andDesCalleNotBetween(String value1, String value2) {
            addCriterion("des_calle not between", value1, value2, "desCalle");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1IsNull() {
            addCriterion("intercepcion_1 is null");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1IsNotNull() {
            addCriterion("intercepcion_1 is not null");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1EqualTo(String value) {
            addCriterion("intercepcion_1 =", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1NotEqualTo(String value) {
            addCriterion("intercepcion_1 <>", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1GreaterThan(String value) {
            addCriterion("intercepcion_1 >", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1GreaterThanOrEqualTo(String value) {
            addCriterion("intercepcion_1 >=", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1LessThan(String value) {
            addCriterion("intercepcion_1 <", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1LessThanOrEqualTo(String value) {
            addCriterion("intercepcion_1 <=", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1Like(String value) {
            addCriterion("intercepcion_1 like", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1NotLike(String value) {
            addCriterion("intercepcion_1 not like", value, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1In(List<String> values) {
            addCriterion("intercepcion_1 in", values, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1NotIn(List<String> values) {
            addCriterion("intercepcion_1 not in", values, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1Between(String value1, String value2) {
            addCriterion("intercepcion_1 between", value1, value2, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1NotBetween(String value1, String value2) {
            addCriterion("intercepcion_1 not between", value1, value2, "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2IsNull() {
            addCriterion("intercepcion_2 is null");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2IsNotNull() {
            addCriterion("intercepcion_2 is not null");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2EqualTo(String value) {
            addCriterion("intercepcion_2 =", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2NotEqualTo(String value) {
            addCriterion("intercepcion_2 <>", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2GreaterThan(String value) {
            addCriterion("intercepcion_2 >", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2GreaterThanOrEqualTo(String value) {
            addCriterion("intercepcion_2 >=", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2LessThan(String value) {
            addCriterion("intercepcion_2 <", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2LessThanOrEqualTo(String value) {
            addCriterion("intercepcion_2 <=", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2Like(String value) {
            addCriterion("intercepcion_2 like", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2NotLike(String value) {
            addCriterion("intercepcion_2 not like", value, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2In(List<String> values) {
            addCriterion("intercepcion_2 in", values, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2NotIn(List<String> values) {
            addCriterion("intercepcion_2 not in", values, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2Between(String value1, String value2) {
            addCriterion("intercepcion_2 between", value1, value2, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2NotBetween(String value1, String value2) {
            addCriterion("intercepcion_2 not between", value1, value2, "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaIsNull() {
            addCriterion("id_incidencia is null");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaIsNotNull() {
            addCriterion("id_incidencia is not null");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaEqualTo(Integer value) {
            addCriterion("id_incidencia =", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaNotEqualTo(Integer value) {
            addCriterion("id_incidencia <>", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaGreaterThan(Integer value) {
            addCriterion("id_incidencia >", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_incidencia >=", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaLessThan(Integer value) {
            addCriterion("id_incidencia <", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaLessThanOrEqualTo(Integer value) {
            addCriterion("id_incidencia <=", value, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaIn(List<Integer> values) {
            addCriterion("id_incidencia in", values, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaNotIn(List<Integer> values) {
            addCriterion("id_incidencia not in", values, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaBetween(Integer value1, Integer value2) {
            addCriterion("id_incidencia between", value1, value2, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andIdIncidenciaNotBetween(Integer value1, Integer value2) {
            addCriterion("id_incidencia not between", value1, value2, "idIncidencia");
            return (Criteria) this;
        }

        public Criteria andDirCardinalIsNull() {
            addCriterion("dir_cardinal is null");
            return (Criteria) this;
        }

        public Criteria andDirCardinalIsNotNull() {
            addCriterion("dir_cardinal is not null");
            return (Criteria) this;
        }

        public Criteria andDirCardinalEqualTo(String value) {
            addCriterion("dir_cardinal =", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalNotEqualTo(String value) {
            addCriterion("dir_cardinal <>", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalGreaterThan(String value) {
            addCriterion("dir_cardinal >", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalGreaterThanOrEqualTo(String value) {
            addCriterion("dir_cardinal >=", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalLessThan(String value) {
            addCriterion("dir_cardinal <", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalLessThanOrEqualTo(String value) {
            addCriterion("dir_cardinal <=", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalLike(String value) {
            addCriterion("dir_cardinal like", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalNotLike(String value) {
            addCriterion("dir_cardinal not like", value, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalIn(List<String> values) {
            addCriterion("dir_cardinal in", values, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalNotIn(List<String> values) {
            addCriterion("dir_cardinal not in", values, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalBetween(String value1, String value2) {
            addCriterion("dir_cardinal between", value1, value2, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andDirCardinalNotBetween(String value1, String value2) {
            addCriterion("dir_cardinal not between", value1, value2, "dirCardinal");
            return (Criteria) this;
        }

        public Criteria andPointIniLikeInsensitive(String value) {
            addCriterion("upper(point_ini) like", value.toUpperCase(), "pointIni");
            return (Criteria) this;
        }

        public Criteria andPointFinLikeInsensitive(String value) {
            addCriterion("upper(point_fin) like", value.toUpperCase(), "pointFin");
            return (Criteria) this;
        }

        public Criteria andDesCalleLikeInsensitive(String value) {
            addCriterion("upper(des_calle) like", value.toUpperCase(), "desCalle");
            return (Criteria) this;
        }

        public Criteria andIntercepcion1LikeInsensitive(String value) {
            addCriterion("upper(intercepcion_1) like", value.toUpperCase(), "intercepcion1");
            return (Criteria) this;
        }

        public Criteria andIntercepcion2LikeInsensitive(String value) {
            addCriterion("upper(intercepcion_2) like", value.toUpperCase(), "intercepcion2");
            return (Criteria) this;
        }

        public Criteria andDirCardinalLikeInsensitive(String value) {
            addCriterion("upper(dir_cardinal) like", value.toUpperCase(), "dirCardinal");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated do_not_delete_during_merge Fri Jul 07 21:46:28 COT 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_map_inicidencia_linea
     *
     * @mbg.generated Fri Jul 07 21:46:28 COT 2017
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