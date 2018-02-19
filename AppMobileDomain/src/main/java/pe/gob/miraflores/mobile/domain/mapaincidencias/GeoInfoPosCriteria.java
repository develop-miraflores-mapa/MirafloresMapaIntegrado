package pe.gob.miraflores.mobile.domain.mapaincidencias;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class GeoInfoPosCriteria {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public GeoInfoPosCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
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
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
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

        public Criteria andIdPosIsNull() {
            addCriterion("id_pos is null");
            return (Criteria) this;
        }

        public Criteria andIdPosIsNotNull() {
            addCriterion("id_pos is not null");
            return (Criteria) this;
        }

        public Criteria andIdPosEqualTo(Integer value) {
            addCriterion("id_pos =", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosNotEqualTo(Integer value) {
            addCriterion("id_pos <>", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosGreaterThan(Integer value) {
            addCriterion("id_pos >", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_pos >=", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosLessThan(Integer value) {
            addCriterion("id_pos <", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosLessThanOrEqualTo(Integer value) {
            addCriterion("id_pos <=", value, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosIn(List<Integer> values) {
            addCriterion("id_pos in", values, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosNotIn(List<Integer> values) {
            addCriterion("id_pos not in", values, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosBetween(Integer value1, Integer value2) {
            addCriterion("id_pos between", value1, value2, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdPosNotBetween(Integer value1, Integer value2) {
            addCriterion("id_pos not between", value1, value2, "idPos");
            return (Criteria) this;
        }

        public Criteria andIdDispIsNull() {
            addCriterion("id_disp is null");
            return (Criteria) this;
        }

        public Criteria andIdDispIsNotNull() {
            addCriterion("id_disp is not null");
            return (Criteria) this;
        }

        public Criteria andIdDispEqualTo(Integer value) {
            addCriterion("id_disp =", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispNotEqualTo(Integer value) {
            addCriterion("id_disp <>", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispGreaterThan(Integer value) {
            addCriterion("id_disp >", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_disp >=", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispLessThan(Integer value) {
            addCriterion("id_disp <", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispLessThanOrEqualTo(Integer value) {
            addCriterion("id_disp <=", value, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispIn(List<Integer> values) {
            addCriterion("id_disp in", values, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispNotIn(List<Integer> values) {
            addCriterion("id_disp not in", values, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispBetween(Integer value1, Integer value2) {
            addCriterion("id_disp between", value1, value2, "idDisp");
            return (Criteria) this;
        }

        public Criteria andIdDispNotBetween(Integer value1, Integer value2) {
            addCriterion("id_disp not between", value1, value2, "idDisp");
            return (Criteria) this;
        }

        public Criteria andCodComerIsNull() {
            addCriterion("cod_comer is null");
            return (Criteria) this;
        }

        public Criteria andCodComerIsNotNull() {
            addCriterion("cod_comer is not null");
            return (Criteria) this;
        }

        public Criteria andCodComerEqualTo(Integer value) {
            addCriterion("cod_comer =", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerNotEqualTo(Integer value) {
            addCriterion("cod_comer <>", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerGreaterThan(Integer value) {
            addCriterion("cod_comer >", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_comer >=", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerLessThan(Integer value) {
            addCriterion("cod_comer <", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerLessThanOrEqualTo(Integer value) {
            addCriterion("cod_comer <=", value, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerIn(List<Integer> values) {
            addCriterion("cod_comer in", values, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerNotIn(List<Integer> values) {
            addCriterion("cod_comer not in", values, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerBetween(Integer value1, Integer value2) {
            addCriterion("cod_comer between", value1, value2, "codComer");
            return (Criteria) this;
        }

        public Criteria andCodComerNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_comer not between", value1, value2, "codComer");
            return (Criteria) this;
        }

        public Criteria andNombComerIsNull() {
            addCriterion("nomb_comer is null");
            return (Criteria) this;
        }

        public Criteria andNombComerIsNotNull() {
            addCriterion("nomb_comer is not null");
            return (Criteria) this;
        }

        public Criteria andNombComerEqualTo(String value) {
            addCriterion("nomb_comer =", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerNotEqualTo(String value) {
            addCriterion("nomb_comer <>", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerGreaterThan(String value) {
            addCriterion("nomb_comer >", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerGreaterThanOrEqualTo(String value) {
            addCriterion("nomb_comer >=", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerLessThan(String value) {
            addCriterion("nomb_comer <", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerLessThanOrEqualTo(String value) {
            addCriterion("nomb_comer <=", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerLike(String value) {
            addCriterion("nomb_comer like", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerNotLike(String value) {
            addCriterion("nomb_comer not like", value, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerIn(List<String> values) {
            addCriterion("nomb_comer in", values, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerNotIn(List<String> values) {
            addCriterion("nomb_comer not in", values, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerBetween(String value1, String value2) {
            addCriterion("nomb_comer between", value1, value2, "nombComer");
            return (Criteria) this;
        }

        public Criteria andNombComerNotBetween(String value1, String value2) {
            addCriterion("nomb_comer not between", value1, value2, "nombComer");
            return (Criteria) this;
        }

        public Criteria andDescGiroIsNull() {
            addCriterion("desc_giro is null");
            return (Criteria) this;
        }

        public Criteria andDescGiroIsNotNull() {
            addCriterion("desc_giro is not null");
            return (Criteria) this;
        }

        public Criteria andDescGiroEqualTo(String value) {
            addCriterion("desc_giro =", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroNotEqualTo(String value) {
            addCriterion("desc_giro <>", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroGreaterThan(String value) {
            addCriterion("desc_giro >", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroGreaterThanOrEqualTo(String value) {
            addCriterion("desc_giro >=", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroLessThan(String value) {
            addCriterion("desc_giro <", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroLessThanOrEqualTo(String value) {
            addCriterion("desc_giro <=", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroLike(String value) {
            addCriterion("desc_giro like", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroNotLike(String value) {
            addCriterion("desc_giro not like", value, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroIn(List<String> values) {
            addCriterion("desc_giro in", values, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroNotIn(List<String> values) {
            addCriterion("desc_giro not in", values, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroBetween(String value1, String value2) {
            addCriterion("desc_giro between", value1, value2, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDescGiroNotBetween(String value1, String value2) {
            addCriterion("desc_giro not between", value1, value2, "descGiro");
            return (Criteria) this;
        }

        public Criteria andDirComerIsNull() {
            addCriterion("dir_comer is null");
            return (Criteria) this;
        }

        public Criteria andDirComerIsNotNull() {
            addCriterion("dir_comer is not null");
            return (Criteria) this;
        }

        public Criteria andDirComerEqualTo(String value) {
            addCriterion("dir_comer =", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerNotEqualTo(String value) {
            addCriterion("dir_comer <>", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerGreaterThan(String value) {
            addCriterion("dir_comer >", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerGreaterThanOrEqualTo(String value) {
            addCriterion("dir_comer >=", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerLessThan(String value) {
            addCriterion("dir_comer <", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerLessThanOrEqualTo(String value) {
            addCriterion("dir_comer <=", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerLike(String value) {
            addCriterion("dir_comer like", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerNotLike(String value) {
            addCriterion("dir_comer not like", value, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerIn(List<String> values) {
            addCriterion("dir_comer in", values, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerNotIn(List<String> values) {
            addCriterion("dir_comer not in", values, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerBetween(String value1, String value2) {
            addCriterion("dir_comer between", value1, value2, "dirComer");
            return (Criteria) this;
        }

        public Criteria andDirComerNotBetween(String value1, String value2) {
            addCriterion("dir_comer not between", value1, value2, "dirComer");
            return (Criteria) this;
        }

        public Criteria andLatitudIsNull() {
            addCriterion("latitud is null");
            return (Criteria) this;
        }

        public Criteria andLatitudIsNotNull() {
            addCriterion("latitud is not null");
            return (Criteria) this;
        }

        public Criteria andLatitudEqualTo(String value) {
            addCriterion("latitud =", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudNotEqualTo(String value) {
            addCriterion("latitud <>", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudGreaterThan(String value) {
            addCriterion("latitud >", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudGreaterThanOrEqualTo(String value) {
            addCriterion("latitud >=", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudLessThan(String value) {
            addCriterion("latitud <", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudLessThanOrEqualTo(String value) {
            addCriterion("latitud <=", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudLike(String value) {
            addCriterion("latitud like", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudNotLike(String value) {
            addCriterion("latitud not like", value, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudIn(List<String> values) {
            addCriterion("latitud in", values, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudNotIn(List<String> values) {
            addCriterion("latitud not in", values, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudBetween(String value1, String value2) {
            addCriterion("latitud between", value1, value2, "latitud");
            return (Criteria) this;
        }

        public Criteria andLatitudNotBetween(String value1, String value2) {
            addCriterion("latitud not between", value1, value2, "latitud");
            return (Criteria) this;
        }

        public Criteria andLongitudIsNull() {
            addCriterion("longitud is null");
            return (Criteria) this;
        }

        public Criteria andLongitudIsNotNull() {
            addCriterion("longitud is not null");
            return (Criteria) this;
        }

        public Criteria andLongitudEqualTo(String value) {
            addCriterion("longitud =", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudNotEqualTo(String value) {
            addCriterion("longitud <>", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudGreaterThan(String value) {
            addCriterion("longitud >", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudGreaterThanOrEqualTo(String value) {
            addCriterion("longitud >=", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudLessThan(String value) {
            addCriterion("longitud <", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudLessThanOrEqualTo(String value) {
            addCriterion("longitud <=", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudLike(String value) {
            addCriterion("longitud like", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudNotLike(String value) {
            addCriterion("longitud not like", value, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudIn(List<String> values) {
            addCriterion("longitud in", values, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudNotIn(List<String> values) {
            addCriterion("longitud not in", values, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudBetween(String value1, String value2) {
            addCriterion("longitud between", value1, value2, "longitud");
            return (Criteria) this;
        }

        public Criteria andLongitudNotBetween(String value1, String value2) {
            addCriterion("longitud not between", value1, value2, "longitud");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilIsNull() {
            addCriterion("flg_portatil is null");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilIsNotNull() {
            addCriterion("flg_portatil is not null");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilEqualTo(String value) {
            addCriterion("flg_portatil =", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilNotEqualTo(String value) {
            addCriterion("flg_portatil <>", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilGreaterThan(String value) {
            addCriterion("flg_portatil >", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilGreaterThanOrEqualTo(String value) {
            addCriterion("flg_portatil >=", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilLessThan(String value) {
            addCriterion("flg_portatil <", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilLessThanOrEqualTo(String value) {
            addCriterion("flg_portatil <=", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilLike(String value) {
            addCriterion("flg_portatil like", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilNotLike(String value) {
            addCriterion("flg_portatil not like", value, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilIn(List<String> values) {
            addCriterion("flg_portatil in", values, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilNotIn(List<String> values) {
            addCriterion("flg_portatil not in", values, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilBetween(String value1, String value2) {
            addCriterion("flg_portatil between", value1, value2, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilNotBetween(String value1, String value2) {
            addCriterion("flg_portatil not between", value1, value2, "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaIsNull() {
            addCriterion("flg_alerta is null");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaIsNotNull() {
            addCriterion("flg_alerta is not null");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaEqualTo(String value) {
            addCriterion("flg_alerta =", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaNotEqualTo(String value) {
            addCriterion("flg_alerta <>", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaGreaterThan(String value) {
            addCriterion("flg_alerta >", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaGreaterThanOrEqualTo(String value) {
            addCriterion("flg_alerta >=", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaLessThan(String value) {
            addCriterion("flg_alerta <", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaLessThanOrEqualTo(String value) {
            addCriterion("flg_alerta <=", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaLike(String value) {
            addCriterion("flg_alerta like", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaNotLike(String value) {
            addCriterion("flg_alerta not like", value, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaIn(List<String> values) {
            addCriterion("flg_alerta in", values, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaNotIn(List<String> values) {
            addCriterion("flg_alerta not in", values, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaBetween(String value1, String value2) {
            addCriterion("flg_alerta between", value1, value2, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaNotBetween(String value1, String value2) {
            addCriterion("flg_alerta not between", value1, value2, "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andFecUltimaIsNull() {
            addCriterion("fec_ultima is null");
            return (Criteria) this;
        }

        public Criteria andFecUltimaIsNotNull() {
            addCriterion("fec_ultima is not null");
            return (Criteria) this;
        }

        public Criteria andFecUltimaEqualTo(Date value) {
            addCriterion("fec_ultima =", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaNotEqualTo(Date value) {
            addCriterion("fec_ultima <>", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaGreaterThan(Date value) {
            addCriterion("fec_ultima >", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_ultima >=", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaLessThan(Date value) {
            addCriterion("fec_ultima <", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaLessThanOrEqualTo(Date value) {
            addCriterion("fec_ultima <=", value, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaIn(List<Date> values) {
            addCriterion("fec_ultima in", values, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaNotIn(List<Date> values) {
            addCriterion("fec_ultima not in", values, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaBetween(Date value1, Date value2) {
            addCriterion("fec_ultima between", value1, value2, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andFecUltimaNotBetween(Date value1, Date value2) {
            addCriterion("fec_ultima not between", value1, value2, "fecUltima");
            return (Criteria) this;
        }

        public Criteria andEstRegIsNull() {
            addCriterion("est_reg is null");
            return (Criteria) this;
        }

        public Criteria andEstRegIsNotNull() {
            addCriterion("est_reg is not null");
            return (Criteria) this;
        }

        public Criteria andEstRegEqualTo(String value) {
            addCriterion("est_reg =", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegNotEqualTo(String value) {
            addCriterion("est_reg <>", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegGreaterThan(String value) {
            addCriterion("est_reg >", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegGreaterThanOrEqualTo(String value) {
            addCriterion("est_reg >=", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegLessThan(String value) {
            addCriterion("est_reg <", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegLessThanOrEqualTo(String value) {
            addCriterion("est_reg <=", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegLike(String value) {
            addCriterion("est_reg like", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegNotLike(String value) {
            addCriterion("est_reg not like", value, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegIn(List<String> values) {
            addCriterion("est_reg in", values, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegNotIn(List<String> values) {
            addCriterion("est_reg not in", values, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegBetween(String value1, String value2) {
            addCriterion("est_reg between", value1, value2, "estReg");
            return (Criteria) this;
        }

        public Criteria andEstRegNotBetween(String value1, String value2) {
            addCriterion("est_reg not between", value1, value2, "estReg");
            return (Criteria) this;
        }

        public Criteria andNombComerLikeInsensitive(String value) {
            addCriterion("upper(nomb_comer) like", value.toUpperCase(), "nombComer");
            return (Criteria) this;
        }

        public Criteria andDescGiroLikeInsensitive(String value) {
            addCriterion("upper(desc_giro) like", value.toUpperCase(), "descGiro");
            return (Criteria) this;
        }

        public Criteria andDirComerLikeInsensitive(String value) {
            addCriterion("upper(dir_comer) like", value.toUpperCase(), "dirComer");
            return (Criteria) this;
        }

        public Criteria andLatitudLikeInsensitive(String value) {
            addCriterion("upper(latitud) like", value.toUpperCase(), "latitud");
            return (Criteria) this;
        }

        public Criteria andLongitudLikeInsensitive(String value) {
            addCriterion("upper(longitud) like", value.toUpperCase(), "longitud");
            return (Criteria) this;
        }

        public Criteria andFlgPortatilLikeInsensitive(String value) {
            addCriterion("upper(flg_portatil) like", value.toUpperCase(), "flgPortatil");
            return (Criteria) this;
        }

        public Criteria andFlgAlertaLikeInsensitive(String value) {
            addCriterion("upper(flg_alerta) like", value.toUpperCase(), "flgAlerta");
            return (Criteria) this;
        }

        public Criteria andEstRegLikeInsensitive(String value) {
            addCriterion("upper(est_reg) like", value.toUpperCase(), "estReg");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated do_not_delete_during_merge Mon Nov 20 21:08:58 COT 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table mapa.geo_info_pos
     *
     * @mbg.generated Mon Nov 20 21:08:58 COT 2017
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