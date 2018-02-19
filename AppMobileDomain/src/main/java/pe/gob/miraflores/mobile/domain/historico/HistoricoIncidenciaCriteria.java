package pe.gob.miraflores.mobile.domain.historico;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class HistoricoIncidenciaCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public HistoricoIncidenciaCriteria() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

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

        public Criteria andIdHistIsNull() {
            addCriterion("id_hist is null");
            return (Criteria) this;
        }

        public Criteria andIdHistIsNotNull() {
            addCriterion("id_hist is not null");
            return (Criteria) this;
        }

        public Criteria andIdHistEqualTo(Integer value) {
            addCriterion("id_hist =", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistNotEqualTo(Integer value) {
            addCriterion("id_hist <>", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistGreaterThan(Integer value) {
            addCriterion("id_hist >", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_hist >=", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistLessThan(Integer value) {
            addCriterion("id_hist <", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistLessThanOrEqualTo(Integer value) {
            addCriterion("id_hist <=", value, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistIn(List<Integer> values) {
            addCriterion("id_hist in", values, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistNotIn(List<Integer> values) {
            addCriterion("id_hist not in", values, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistBetween(Integer value1, Integer value2) {
            addCriterion("id_hist between", value1, value2, "idHist");
            return (Criteria) this;
        }

        public Criteria andIdHistNotBetween(Integer value1, Integer value2) {
            addCriterion("id_hist not between", value1, value2, "idHist");
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

        public Criteria andCodUnidadIsNull() {
            addCriterion("cod_unidad is null");
            return (Criteria) this;
        }

        public Criteria andCodUnidadIsNotNull() {
            addCriterion("cod_unidad is not null");
            return (Criteria) this;
        }

        public Criteria andCodUnidadEqualTo(Integer value) {
            addCriterion("cod_unidad =", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadNotEqualTo(Integer value) {
            addCriterion("cod_unidad <>", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadGreaterThan(Integer value) {
            addCriterion("cod_unidad >", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_unidad >=", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadLessThan(Integer value) {
            addCriterion("cod_unidad <", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadLessThanOrEqualTo(Integer value) {
            addCriterion("cod_unidad <=", value, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadIn(List<Integer> values) {
            addCriterion("cod_unidad in", values, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadNotIn(List<Integer> values) {
            addCriterion("cod_unidad not in", values, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadBetween(Integer value1, Integer value2) {
            addCriterion("cod_unidad between", value1, value2, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodUnidadNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_unidad not between", value1, value2, "codUnidad");
            return (Criteria) this;
        }

        public Criteria andCodCasoIsNull() {
            addCriterion("cod_caso is null");
            return (Criteria) this;
        }

        public Criteria andCodCasoIsNotNull() {
            addCriterion("cod_caso is not null");
            return (Criteria) this;
        }

        public Criteria andCodCasoEqualTo(Integer value) {
            addCriterion("cod_caso =", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoNotEqualTo(Integer value) {
            addCriterion("cod_caso <>", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoGreaterThan(Integer value) {
            addCriterion("cod_caso >", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_caso >=", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoLessThan(Integer value) {
            addCriterion("cod_caso <", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_caso <=", value, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoIn(List<Integer> values) {
            addCriterion("cod_caso in", values, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoNotIn(List<Integer> values) {
            addCriterion("cod_caso not in", values, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoBetween(Integer value1, Integer value2) {
            addCriterion("cod_caso between", value1, value2, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodCasoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_caso not between", value1, value2, "codCaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoIsNull() {
            addCriterion("cod_subcaso is null");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoIsNotNull() {
            addCriterion("cod_subcaso is not null");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoEqualTo(Integer value) {
            addCriterion("cod_subcaso =", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoNotEqualTo(Integer value) {
            addCriterion("cod_subcaso <>", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoGreaterThan(Integer value) {
            addCriterion("cod_subcaso >", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_subcaso >=", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoLessThan(Integer value) {
            addCriterion("cod_subcaso <", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_subcaso <=", value, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoIn(List<Integer> values) {
            addCriterion("cod_subcaso in", values, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoNotIn(List<Integer> values) {
            addCriterion("cod_subcaso not in", values, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoBetween(Integer value1, Integer value2) {
            addCriterion("cod_subcaso between", value1, value2, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodSubcasoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_subcaso not between", value1, value2, "codSubcaso");
            return (Criteria) this;
        }

        public Criteria andCodMedioIsNull() {
            addCriterion("cod_medio is null");
            return (Criteria) this;
        }

        public Criteria andCodMedioIsNotNull() {
            addCriterion("cod_medio is not null");
            return (Criteria) this;
        }

        public Criteria andCodMedioEqualTo(Integer value) {
            addCriterion("cod_medio =", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioNotEqualTo(Integer value) {
            addCriterion("cod_medio <>", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioGreaterThan(Integer value) {
            addCriterion("cod_medio >", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_medio >=", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioLessThan(Integer value) {
            addCriterion("cod_medio <", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioLessThanOrEqualTo(Integer value) {
            addCriterion("cod_medio <=", value, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioIn(List<Integer> values) {
            addCriterion("cod_medio in", values, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioNotIn(List<Integer> values) {
            addCriterion("cod_medio not in", values, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioBetween(Integer value1, Integer value2) {
            addCriterion("cod_medio between", value1, value2, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodMedioNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_medio not between", value1, value2, "codMedio");
            return (Criteria) this;
        }

        public Criteria andCodSituacionIsNull() {
            addCriterion("cod_situacion is null");
            return (Criteria) this;
        }

        public Criteria andCodSituacionIsNotNull() {
            addCriterion("cod_situacion is not null");
            return (Criteria) this;
        }

        public Criteria andCodSituacionEqualTo(Integer value) {
            addCriterion("cod_situacion =", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionNotEqualTo(Integer value) {
            addCriterion("cod_situacion <>", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionGreaterThan(Integer value) {
            addCriterion("cod_situacion >", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_situacion >=", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionLessThan(Integer value) {
            addCriterion("cod_situacion <", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionLessThanOrEqualTo(Integer value) {
            addCriterion("cod_situacion <=", value, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionIn(List<Integer> values) {
            addCriterion("cod_situacion in", values, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionNotIn(List<Integer> values) {
            addCriterion("cod_situacion not in", values, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionBetween(Integer value1, Integer value2) {
            addCriterion("cod_situacion between", value1, value2, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andCodSituacionNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_situacion not between", value1, value2, "codSituacion");
            return (Criteria) this;
        }

        public Criteria andDescUnidadIsNull() {
            addCriterion("desc_unidad is null");
            return (Criteria) this;
        }

        public Criteria andDescUnidadIsNotNull() {
            addCriterion("desc_unidad is not null");
            return (Criteria) this;
        }

        public Criteria andDescUnidadEqualTo(String value) {
            addCriterion("desc_unidad =", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadNotEqualTo(String value) {
            addCriterion("desc_unidad <>", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadGreaterThan(String value) {
            addCriterion("desc_unidad >", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadGreaterThanOrEqualTo(String value) {
            addCriterion("desc_unidad >=", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadLessThan(String value) {
            addCriterion("desc_unidad <", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadLessThanOrEqualTo(String value) {
            addCriterion("desc_unidad <=", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadLike(String value) {
            addCriterion("desc_unidad like", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadNotLike(String value) {
            addCriterion("desc_unidad not like", value, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadIn(List<String> values) {
            addCriterion("desc_unidad in", values, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadNotIn(List<String> values) {
            addCriterion("desc_unidad not in", values, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadBetween(String value1, String value2) {
            addCriterion("desc_unidad between", value1, value2, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescUnidadNotBetween(String value1, String value2) {
            addCriterion("desc_unidad not between", value1, value2, "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescCasoIsNull() {
            addCriterion("desc_caso is null");
            return (Criteria) this;
        }

        public Criteria andDescCasoIsNotNull() {
            addCriterion("desc_caso is not null");
            return (Criteria) this;
        }

        public Criteria andDescCasoEqualTo(String value) {
            addCriterion("desc_caso =", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoNotEqualTo(String value) {
            addCriterion("desc_caso <>", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoGreaterThan(String value) {
            addCriterion("desc_caso >", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoGreaterThanOrEqualTo(String value) {
            addCriterion("desc_caso >=", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoLessThan(String value) {
            addCriterion("desc_caso <", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoLessThanOrEqualTo(String value) {
            addCriterion("desc_caso <=", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoLike(String value) {
            addCriterion("desc_caso like", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoNotLike(String value) {
            addCriterion("desc_caso not like", value, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoIn(List<String> values) {
            addCriterion("desc_caso in", values, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoNotIn(List<String> values) {
            addCriterion("desc_caso not in", values, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoBetween(String value1, String value2) {
            addCriterion("desc_caso between", value1, value2, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescCasoNotBetween(String value1, String value2) {
            addCriterion("desc_caso not between", value1, value2, "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoIsNull() {
            addCriterion("desc_subcaso is null");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoIsNotNull() {
            addCriterion("desc_subcaso is not null");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoEqualTo(String value) {
            addCriterion("desc_subcaso =", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoNotEqualTo(String value) {
            addCriterion("desc_subcaso <>", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoGreaterThan(String value) {
            addCriterion("desc_subcaso >", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoGreaterThanOrEqualTo(String value) {
            addCriterion("desc_subcaso >=", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoLessThan(String value) {
            addCriterion("desc_subcaso <", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoLessThanOrEqualTo(String value) {
            addCriterion("desc_subcaso <=", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoLike(String value) {
            addCriterion("desc_subcaso like", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoNotLike(String value) {
            addCriterion("desc_subcaso not like", value, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoIn(List<String> values) {
            addCriterion("desc_subcaso in", values, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoNotIn(List<String> values) {
            addCriterion("desc_subcaso not in", values, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoBetween(String value1, String value2) {
            addCriterion("desc_subcaso between", value1, value2, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoNotBetween(String value1, String value2) {
            addCriterion("desc_subcaso not between", value1, value2, "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescMedioIsNull() {
            addCriterion("desc_medio is null");
            return (Criteria) this;
        }

        public Criteria andDescMedioIsNotNull() {
            addCriterion("desc_medio is not null");
            return (Criteria) this;
        }

        public Criteria andDescMedioEqualTo(String value) {
            addCriterion("desc_medio =", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioNotEqualTo(String value) {
            addCriterion("desc_medio <>", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioGreaterThan(String value) {
            addCriterion("desc_medio >", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioGreaterThanOrEqualTo(String value) {
            addCriterion("desc_medio >=", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioLessThan(String value) {
            addCriterion("desc_medio <", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioLessThanOrEqualTo(String value) {
            addCriterion("desc_medio <=", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioLike(String value) {
            addCriterion("desc_medio like", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioNotLike(String value) {
            addCriterion("desc_medio not like", value, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioIn(List<String> values) {
            addCriterion("desc_medio in", values, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioNotIn(List<String> values) {
            addCriterion("desc_medio not in", values, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioBetween(String value1, String value2) {
            addCriterion("desc_medio between", value1, value2, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescMedioNotBetween(String value1, String value2) {
            addCriterion("desc_medio not between", value1, value2, "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescSituacionIsNull() {
            addCriterion("desc_situacion is null");
            return (Criteria) this;
        }

        public Criteria andDescSituacionIsNotNull() {
            addCriterion("desc_situacion is not null");
            return (Criteria) this;
        }

        public Criteria andDescSituacionEqualTo(String value) {
            addCriterion("desc_situacion =", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionNotEqualTo(String value) {
            addCriterion("desc_situacion <>", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionGreaterThan(String value) {
            addCriterion("desc_situacion >", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionGreaterThanOrEqualTo(String value) {
            addCriterion("desc_situacion >=", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionLessThan(String value) {
            addCriterion("desc_situacion <", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionLessThanOrEqualTo(String value) {
            addCriterion("desc_situacion <=", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionLike(String value) {
            addCriterion("desc_situacion like", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionNotLike(String value) {
            addCriterion("desc_situacion not like", value, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionIn(List<String> values) {
            addCriterion("desc_situacion in", values, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionNotIn(List<String> values) {
            addCriterion("desc_situacion not in", values, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionBetween(String value1, String value2) {
            addCriterion("desc_situacion between", value1, value2, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andDescSituacionNotBetween(String value1, String value2) {
            addCriterion("desc_situacion not between", value1, value2, "descSituacion");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportIsNull() {
            addCriterion("cod_unid_report is null");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportIsNotNull() {
            addCriterion("cod_unid_report is not null");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportEqualTo(Integer value) {
            addCriterion("cod_unid_report =", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportNotEqualTo(Integer value) {
            addCriterion("cod_unid_report <>", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportGreaterThan(Integer value) {
            addCriterion("cod_unid_report >", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_unid_report >=", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportLessThan(Integer value) {
            addCriterion("cod_unid_report <", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportLessThanOrEqualTo(Integer value) {
            addCriterion("cod_unid_report <=", value, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportIn(List<Integer> values) {
            addCriterion("cod_unid_report in", values, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportNotIn(List<Integer> values) {
            addCriterion("cod_unid_report not in", values, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportBetween(Integer value1, Integer value2) {
            addCriterion("cod_unid_report between", value1, value2, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andCodUnidReportNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_unid_report not between", value1, value2, "codUnidReport");
            return (Criteria) this;
        }

        public Criteria andNombReportIsNull() {
            addCriterion("nomb_report is null");
            return (Criteria) this;
        }

        public Criteria andNombReportIsNotNull() {
            addCriterion("nomb_report is not null");
            return (Criteria) this;
        }

        public Criteria andNombReportEqualTo(String value) {
            addCriterion("nomb_report =", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportNotEqualTo(String value) {
            addCriterion("nomb_report <>", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportGreaterThan(String value) {
            addCriterion("nomb_report >", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportGreaterThanOrEqualTo(String value) {
            addCriterion("nomb_report >=", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportLessThan(String value) {
            addCriterion("nomb_report <", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportLessThanOrEqualTo(String value) {
            addCriterion("nomb_report <=", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportLike(String value) {
            addCriterion("nomb_report like", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportNotLike(String value) {
            addCriterion("nomb_report not like", value, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportIn(List<String> values) {
            addCriterion("nomb_report in", values, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportNotIn(List<String> values) {
            addCriterion("nomb_report not in", values, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportBetween(String value1, String value2) {
            addCriterion("nomb_report between", value1, value2, "nombReport");
            return (Criteria) this;
        }

        public Criteria andNombReportNotBetween(String value1, String value2) {
            addCriterion("nomb_report not between", value1, value2, "nombReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportIsNull() {
            addCriterion("telf_report is null");
            return (Criteria) this;
        }

        public Criteria andTelfReportIsNotNull() {
            addCriterion("telf_report is not null");
            return (Criteria) this;
        }

        public Criteria andTelfReportEqualTo(String value) {
            addCriterion("telf_report =", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportNotEqualTo(String value) {
            addCriterion("telf_report <>", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportGreaterThan(String value) {
            addCriterion("telf_report >", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportGreaterThanOrEqualTo(String value) {
            addCriterion("telf_report >=", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportLessThan(String value) {
            addCriterion("telf_report <", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportLessThanOrEqualTo(String value) {
            addCriterion("telf_report <=", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportLike(String value) {
            addCriterion("telf_report like", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportNotLike(String value) {
            addCriterion("telf_report not like", value, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportIn(List<String> values) {
            addCriterion("telf_report in", values, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportNotIn(List<String> values) {
            addCriterion("telf_report not in", values, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportBetween(String value1, String value2) {
            addCriterion("telf_report between", value1, value2, "telfReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportNotBetween(String value1, String value2) {
            addCriterion("telf_report not between", value1, value2, "telfReport");
            return (Criteria) this;
        }

        public Criteria andDirReportIsNull() {
            addCriterion("dir_report is null");
            return (Criteria) this;
        }

        public Criteria andDirReportIsNotNull() {
            addCriterion("dir_report is not null");
            return (Criteria) this;
        }

        public Criteria andDirReportEqualTo(String value) {
            addCriterion("dir_report =", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportNotEqualTo(String value) {
            addCriterion("dir_report <>", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportGreaterThan(String value) {
            addCriterion("dir_report >", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportGreaterThanOrEqualTo(String value) {
            addCriterion("dir_report >=", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportLessThan(String value) {
            addCriterion("dir_report <", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportLessThanOrEqualTo(String value) {
            addCriterion("dir_report <=", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportLike(String value) {
            addCriterion("dir_report like", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportNotLike(String value) {
            addCriterion("dir_report not like", value, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportIn(List<String> values) {
            addCriterion("dir_report in", values, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportNotIn(List<String> values) {
            addCriterion("dir_report not in", values, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportBetween(String value1, String value2) {
            addCriterion("dir_report between", value1, value2, "dirReport");
            return (Criteria) this;
        }

        public Criteria andDirReportNotBetween(String value1, String value2) {
            addCriterion("dir_report not between", value1, value2, "dirReport");
            return (Criteria) this;
        }

        public Criteria andCextReportIsNull() {
            addCriterion("cext_report is null");
            return (Criteria) this;
        }

        public Criteria andCextReportIsNotNull() {
            addCriterion("cext_report is not null");
            return (Criteria) this;
        }

        public Criteria andCextReportEqualTo(String value) {
            addCriterion("cext_report =", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportNotEqualTo(String value) {
            addCriterion("cext_report <>", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportGreaterThan(String value) {
            addCriterion("cext_report >", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportGreaterThanOrEqualTo(String value) {
            addCriterion("cext_report >=", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportLessThan(String value) {
            addCriterion("cext_report <", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportLessThanOrEqualTo(String value) {
            addCriterion("cext_report <=", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportLike(String value) {
            addCriterion("cext_report like", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportNotLike(String value) {
            addCriterion("cext_report not like", value, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportIn(List<String> values) {
            addCriterion("cext_report in", values, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportNotIn(List<String> values) {
            addCriterion("cext_report not in", values, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportBetween(String value1, String value2) {
            addCriterion("cext_report between", value1, value2, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCextReportNotBetween(String value1, String value2) {
            addCriterion("cext_report not between", value1, value2, "cextReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportIsNull() {
            addCriterion("cod_nac_report is null");
            return (Criteria) this;
        }

        public Criteria andCodNacReportIsNotNull() {
            addCriterion("cod_nac_report is not null");
            return (Criteria) this;
        }

        public Criteria andCodNacReportEqualTo(Integer value) {
            addCriterion("cod_nac_report =", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportNotEqualTo(Integer value) {
            addCriterion("cod_nac_report <>", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportGreaterThan(Integer value) {
            addCriterion("cod_nac_report >", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_nac_report >=", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportLessThan(Integer value) {
            addCriterion("cod_nac_report <", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportLessThanOrEqualTo(Integer value) {
            addCriterion("cod_nac_report <=", value, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportIn(List<Integer> values) {
            addCriterion("cod_nac_report in", values, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportNotIn(List<Integer> values) {
            addCriterion("cod_nac_report not in", values, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportBetween(Integer value1, Integer value2) {
            addCriterion("cod_nac_report between", value1, value2, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodNacReportNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_nac_report not between", value1, value2, "codNacReport");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaIsNull() {
            addCriterion("cod_geometria is null");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaIsNotNull() {
            addCriterion("cod_geometria is not null");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaEqualTo(Integer value) {
            addCriterion("cod_geometria =", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaNotEqualTo(Integer value) {
            addCriterion("cod_geometria <>", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaGreaterThan(Integer value) {
            addCriterion("cod_geometria >", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_geometria >=", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaLessThan(Integer value) {
            addCriterion("cod_geometria <", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaLessThanOrEqualTo(Integer value) {
            addCriterion("cod_geometria <=", value, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaIn(List<Integer> values) {
            addCriterion("cod_geometria in", values, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaNotIn(List<Integer> values) {
            addCriterion("cod_geometria not in", values, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaBetween(Integer value1, Integer value2) {
            addCriterion("cod_geometria between", value1, value2, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCodGeometriaNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_geometria not between", value1, value2, "codGeometria");
            return (Criteria) this;
        }

        public Criteria andCoordenadasIsNull() {
            addCriterion("coordenadas is null");
            return (Criteria) this;
        }

        public Criteria andCoordenadasIsNotNull() {
            addCriterion("coordenadas is not null");
            return (Criteria) this;
        }

        public Criteria andCoordenadasEqualTo(String value) {
            addCriterion("coordenadas =", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasNotEqualTo(String value) {
            addCriterion("coordenadas <>", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasGreaterThan(String value) {
            addCriterion("coordenadas >", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasGreaterThanOrEqualTo(String value) {
            addCriterion("coordenadas >=", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasLessThan(String value) {
            addCriterion("coordenadas <", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasLessThanOrEqualTo(String value) {
            addCriterion("coordenadas <=", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasLike(String value) {
            addCriterion("coordenadas like", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasNotLike(String value) {
            addCriterion("coordenadas not like", value, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasIn(List<String> values) {
            addCriterion("coordenadas in", values, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasNotIn(List<String> values) {
            addCriterion("coordenadas not in", values, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasBetween(String value1, String value2) {
            addCriterion("coordenadas between", value1, value2, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCoordenadasNotBetween(String value1, String value2) {
            addCriterion("coordenadas not between", value1, value2, "coordenadas");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaIsNull() {
            addCriterion("cod_tpo_via is null");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaIsNotNull() {
            addCriterion("cod_tpo_via is not null");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaEqualTo(Integer value) {
            addCriterion("cod_tpo_via =", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaNotEqualTo(Integer value) {
            addCriterion("cod_tpo_via <>", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaGreaterThan(Integer value) {
            addCriterion("cod_tpo_via >", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_via >=", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaLessThan(Integer value) {
            addCriterion("cod_tpo_via <", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaLessThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_via <=", value, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaIn(List<Integer> values) {
            addCriterion("cod_tpo_via in", values, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaNotIn(List<Integer> values) {
            addCriterion("cod_tpo_via not in", values, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_via between", value1, value2, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andCodTpoViaNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_via not between", value1, value2, "codTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaIsNull() {
            addCriterion("desc_tpo_via is null");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaIsNotNull() {
            addCriterion("desc_tpo_via is not null");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaEqualTo(String value) {
            addCriterion("desc_tpo_via =", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaNotEqualTo(String value) {
            addCriterion("desc_tpo_via <>", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaGreaterThan(String value) {
            addCriterion("desc_tpo_via >", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaGreaterThanOrEqualTo(String value) {
            addCriterion("desc_tpo_via >=", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaLessThan(String value) {
            addCriterion("desc_tpo_via <", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaLessThanOrEqualTo(String value) {
            addCriterion("desc_tpo_via <=", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaLike(String value) {
            addCriterion("desc_tpo_via like", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaNotLike(String value) {
            addCriterion("desc_tpo_via not like", value, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaIn(List<String> values) {
            addCriterion("desc_tpo_via in", values, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaNotIn(List<String> values) {
            addCriterion("desc_tpo_via not in", values, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaBetween(String value1, String value2) {
            addCriterion("desc_tpo_via between", value1, value2, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaNotBetween(String value1, String value2) {
            addCriterion("desc_tpo_via not between", value1, value2, "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescViaIsNull() {
            addCriterion("desc_via is null");
            return (Criteria) this;
        }

        public Criteria andDescViaIsNotNull() {
            addCriterion("desc_via is not null");
            return (Criteria) this;
        }

        public Criteria andDescViaEqualTo(String value) {
            addCriterion("desc_via =", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaNotEqualTo(String value) {
            addCriterion("desc_via <>", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaGreaterThan(String value) {
            addCriterion("desc_via >", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaGreaterThanOrEqualTo(String value) {
            addCriterion("desc_via >=", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaLessThan(String value) {
            addCriterion("desc_via <", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaLessThanOrEqualTo(String value) {
            addCriterion("desc_via <=", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaLike(String value) {
            addCriterion("desc_via like", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaNotLike(String value) {
            addCriterion("desc_via not like", value, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaIn(List<String> values) {
            addCriterion("desc_via in", values, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaNotIn(List<String> values) {
            addCriterion("desc_via not in", values, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaBetween(String value1, String value2) {
            addCriterion("desc_via between", value1, value2, "descVia");
            return (Criteria) this;
        }

        public Criteria andDescViaNotBetween(String value1, String value2) {
            addCriterion("desc_via not between", value1, value2, "descVia");
            return (Criteria) this;
        }

        public Criteria andCdraIsNull() {
            addCriterion("cdra is null");
            return (Criteria) this;
        }

        public Criteria andCdraIsNotNull() {
            addCriterion("cdra is not null");
            return (Criteria) this;
        }

        public Criteria andCdraEqualTo(String value) {
            addCriterion("cdra =", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotEqualTo(String value) {
            addCriterion("cdra <>", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraGreaterThan(String value) {
            addCriterion("cdra >", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraGreaterThanOrEqualTo(String value) {
            addCriterion("cdra >=", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraLessThan(String value) {
            addCriterion("cdra <", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraLessThanOrEqualTo(String value) {
            addCriterion("cdra <=", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraLike(String value) {
            addCriterion("cdra like", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotLike(String value) {
            addCriterion("cdra not like", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraIn(List<String> values) {
            addCriterion("cdra in", values, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotIn(List<String> values) {
            addCriterion("cdra not in", values, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraBetween(String value1, String value2) {
            addCriterion("cdra between", value1, value2, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotBetween(String value1, String value2) {
            addCriterion("cdra not between", value1, value2, "cdra");
            return (Criteria) this;
        }

        public Criteria andDptoIsNull() {
            addCriterion("dpto is null");
            return (Criteria) this;
        }

        public Criteria andDptoIsNotNull() {
            addCriterion("dpto is not null");
            return (Criteria) this;
        }

        public Criteria andDptoEqualTo(String value) {
            addCriterion("dpto =", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoNotEqualTo(String value) {
            addCriterion("dpto <>", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoGreaterThan(String value) {
            addCriterion("dpto >", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoGreaterThanOrEqualTo(String value) {
            addCriterion("dpto >=", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoLessThan(String value) {
            addCriterion("dpto <", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoLessThanOrEqualTo(String value) {
            addCriterion("dpto <=", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoLike(String value) {
            addCriterion("dpto like", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoNotLike(String value) {
            addCriterion("dpto not like", value, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoIn(List<String> values) {
            addCriterion("dpto in", values, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoNotIn(List<String> values) {
            addCriterion("dpto not in", values, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoBetween(String value1, String value2) {
            addCriterion("dpto between", value1, value2, "dpto");
            return (Criteria) this;
        }

        public Criteria andDptoNotBetween(String value1, String value2) {
            addCriterion("dpto not between", value1, value2, "dpto");
            return (Criteria) this;
        }

        public Criteria andZonaIsNull() {
            addCriterion("zona is null");
            return (Criteria) this;
        }

        public Criteria andZonaIsNotNull() {
            addCriterion("zona is not null");
            return (Criteria) this;
        }

        public Criteria andZonaEqualTo(String value) {
            addCriterion("zona =", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaNotEqualTo(String value) {
            addCriterion("zona <>", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaGreaterThan(String value) {
            addCriterion("zona >", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaGreaterThanOrEqualTo(String value) {
            addCriterion("zona >=", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaLessThan(String value) {
            addCriterion("zona <", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaLessThanOrEqualTo(String value) {
            addCriterion("zona <=", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaLike(String value) {
            addCriterion("zona like", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaNotLike(String value) {
            addCriterion("zona not like", value, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaIn(List<String> values) {
            addCriterion("zona in", values, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaNotIn(List<String> values) {
            addCriterion("zona not in", values, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaBetween(String value1, String value2) {
            addCriterion("zona between", value1, value2, "zona");
            return (Criteria) this;
        }

        public Criteria andZonaNotBetween(String value1, String value2) {
            addCriterion("zona not between", value1, value2, "zona");
            return (Criteria) this;
        }

        public Criteria andSubzonaIsNull() {
            addCriterion("subzona is null");
            return (Criteria) this;
        }

        public Criteria andSubzonaIsNotNull() {
            addCriterion("subzona is not null");
            return (Criteria) this;
        }

        public Criteria andSubzonaEqualTo(String value) {
            addCriterion("subzona =", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaNotEqualTo(String value) {
            addCriterion("subzona <>", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaGreaterThan(String value) {
            addCriterion("subzona >", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaGreaterThanOrEqualTo(String value) {
            addCriterion("subzona >=", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaLessThan(String value) {
            addCriterion("subzona <", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaLessThanOrEqualTo(String value) {
            addCriterion("subzona <=", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaLike(String value) {
            addCriterion("subzona like", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaNotLike(String value) {
            addCriterion("subzona not like", value, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaIn(List<String> values) {
            addCriterion("subzona in", values, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaNotIn(List<String> values) {
            addCriterion("subzona not in", values, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaBetween(String value1, String value2) {
            addCriterion("subzona between", value1, value2, "subzona");
            return (Criteria) this;
        }

        public Criteria andSubzonaNotBetween(String value1, String value2) {
            addCriterion("subzona not between", value1, value2, "subzona");
            return (Criteria) this;
        }

        public Criteria andDescripcionIsNull() {
            addCriterion("descripcion is null");
            return (Criteria) this;
        }

        public Criteria andDescripcionIsNotNull() {
            addCriterion("descripcion is not null");
            return (Criteria) this;
        }

        public Criteria andDescripcionEqualTo(String value) {
            addCriterion("descripcion =", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionNotEqualTo(String value) {
            addCriterion("descripcion <>", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionGreaterThan(String value) {
            addCriterion("descripcion >", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionGreaterThanOrEqualTo(String value) {
            addCriterion("descripcion >=", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionLessThan(String value) {
            addCriterion("descripcion <", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionLessThanOrEqualTo(String value) {
            addCriterion("descripcion <=", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionLike(String value) {
            addCriterion("descripcion like", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionNotLike(String value) {
            addCriterion("descripcion not like", value, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionIn(List<String> values) {
            addCriterion("descripcion in", values, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionNotIn(List<String> values) {
            addCriterion("descripcion not in", values, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionBetween(String value1, String value2) {
            addCriterion("descripcion between", value1, value2, "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescripcionNotBetween(String value1, String value2) {
            addCriterion("descripcion not between", value1, value2, "descripcion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionIsNull() {
            addCriterion("fec_notificacion is null");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionIsNotNull() {
            addCriterion("fec_notificacion is not null");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionEqualTo(Date value) {
            addCriterion("fec_notificacion =", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionNotEqualTo(Date value) {
            addCriterion("fec_notificacion <>", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionGreaterThan(Date value) {
            addCriterion("fec_notificacion >", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_notificacion >=", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionLessThan(Date value) {
            addCriterion("fec_notificacion <", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionLessThanOrEqualTo(Date value) {
            addCriterion("fec_notificacion <=", value, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionIn(List<Date> values) {
            addCriterion("fec_notificacion in", values, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionNotIn(List<Date> values) {
            addCriterion("fec_notificacion not in", values, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionBetween(Date value1, Date value2) {
            addCriterion("fec_notificacion between", value1, value2, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecNotificacionNotBetween(Date value1, Date value2) {
            addCriterion("fec_notificacion not between", value1, value2, "fecNotificacion");
            return (Criteria) this;
        }

        public Criteria andFecEventoIsNull() {
            addCriterion("fec_evento is null");
            return (Criteria) this;
        }

        public Criteria andFecEventoIsNotNull() {
            addCriterion("fec_evento is not null");
            return (Criteria) this;
        }

        public Criteria andFecEventoEqualTo(Date value) {
            addCriterion("fec_evento =", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoNotEqualTo(Date value) {
            addCriterion("fec_evento <>", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoGreaterThan(Date value) {
            addCriterion("fec_evento >", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_evento >=", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoLessThan(Date value) {
            addCriterion("fec_evento <", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoLessThanOrEqualTo(Date value) {
            addCriterion("fec_evento <=", value, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoIn(List<Date> values) {
            addCriterion("fec_evento in", values, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoNotIn(List<Date> values) {
            addCriterion("fec_evento not in", values, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoBetween(Date value1, Date value2) {
            addCriterion("fec_evento between", value1, value2, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecEventoNotBetween(Date value1, Date value2) {
            addCriterion("fec_evento not between", value1, value2, "fecEvento");
            return (Criteria) this;
        }

        public Criteria andFecAtencionIsNull() {
            addCriterion("fec_atencion is null");
            return (Criteria) this;
        }

        public Criteria andFecAtencionIsNotNull() {
            addCriterion("fec_atencion is not null");
            return (Criteria) this;
        }

        public Criteria andFecAtencionEqualTo(Date value) {
            addCriterion("fec_atencion =", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionNotEqualTo(Date value) {
            addCriterion("fec_atencion <>", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionGreaterThan(Date value) {
            addCriterion("fec_atencion >", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_atencion >=", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionLessThan(Date value) {
            addCriterion("fec_atencion <", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionLessThanOrEqualTo(Date value) {
            addCriterion("fec_atencion <=", value, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionIn(List<Date> values) {
            addCriterion("fec_atencion in", values, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionNotIn(List<Date> values) {
            addCriterion("fec_atencion not in", values, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionBetween(Date value1, Date value2) {
            addCriterion("fec_atencion between", value1, value2, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecAtencionNotBetween(Date value1, Date value2) {
            addCriterion("fec_atencion not between", value1, value2, "fecAtencion");
            return (Criteria) this;
        }

        public Criteria andFecCierreIsNull() {
            addCriterion("fec_cierre is null");
            return (Criteria) this;
        }

        public Criteria andFecCierreIsNotNull() {
            addCriterion("fec_cierre is not null");
            return (Criteria) this;
        }

        public Criteria andFecCierreEqualTo(Date value) {
            addCriterion("fec_cierre =", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreNotEqualTo(Date value) {
            addCriterion("fec_cierre <>", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreGreaterThan(Date value) {
            addCriterion("fec_cierre >", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreGreaterThanOrEqualTo(Date value) {
            addCriterion("fec_cierre >=", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreLessThan(Date value) {
            addCriterion("fec_cierre <", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreLessThanOrEqualTo(Date value) {
            addCriterion("fec_cierre <=", value, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreIn(List<Date> values) {
            addCriterion("fec_cierre in", values, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreNotIn(List<Date> values) {
            addCriterion("fec_cierre not in", values, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreBetween(Date value1, Date value2) {
            addCriterion("fec_cierre between", value1, value2, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andFecCierreNotBetween(Date value1, Date value2) {
            addCriterion("fec_cierre not between", value1, value2, "fecCierre");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadIsNull() {
            addCriterion("cod_severidad is null");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadIsNotNull() {
            addCriterion("cod_severidad is not null");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadEqualTo(Integer value) {
            addCriterion("cod_severidad =", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadNotEqualTo(Integer value) {
            addCriterion("cod_severidad <>", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadGreaterThan(Integer value) {
            addCriterion("cod_severidad >", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_severidad >=", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadLessThan(Integer value) {
            addCriterion("cod_severidad <", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadLessThanOrEqualTo(Integer value) {
            addCriterion("cod_severidad <=", value, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadIn(List<Integer> values) {
            addCriterion("cod_severidad in", values, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadNotIn(List<Integer> values) {
            addCriterion("cod_severidad not in", values, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadBetween(Integer value1, Integer value2) {
            addCriterion("cod_severidad between", value1, value2, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodSeveridadNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_severidad not between", value1, value2, "codSeveridad");
            return (Criteria) this;
        }

        public Criteria andCodEstadoIsNull() {
            addCriterion("cod_estado is null");
            return (Criteria) this;
        }

        public Criteria andCodEstadoIsNotNull() {
            addCriterion("cod_estado is not null");
            return (Criteria) this;
        }

        public Criteria andCodEstadoEqualTo(Integer value) {
            addCriterion("cod_estado =", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoNotEqualTo(Integer value) {
            addCriterion("cod_estado <>", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoGreaterThan(Integer value) {
            addCriterion("cod_estado >", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_estado >=", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoLessThan(Integer value) {
            addCriterion("cod_estado <", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_estado <=", value, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoIn(List<Integer> values) {
            addCriterion("cod_estado in", values, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoNotIn(List<Integer> values) {
            addCriterion("cod_estado not in", values, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoBetween(Integer value1, Integer value2) {
            addCriterion("cod_estado between", value1, value2, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodEstadoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_estado not between", value1, value2, "codEstado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoIsNull() {
            addCriterion("cod_subestado is null");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoIsNotNull() {
            addCriterion("cod_subestado is not null");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoEqualTo(Integer value) {
            addCriterion("cod_subestado =", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoNotEqualTo(Integer value) {
            addCriterion("cod_subestado <>", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoGreaterThan(Integer value) {
            addCriterion("cod_subestado >", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_subestado >=", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoLessThan(Integer value) {
            addCriterion("cod_subestado <", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_subestado <=", value, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoIn(List<Integer> values) {
            addCriterion("cod_subestado in", values, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoNotIn(List<Integer> values) {
            addCriterion("cod_subestado not in", values, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoBetween(Integer value1, Integer value2) {
            addCriterion("cod_subestado between", value1, value2, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodSubestadoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_subestado not between", value1, value2, "codSubestado");
            return (Criteria) this;
        }

        public Criteria andCodModalidadIsNull() {
            addCriterion("cod_modalidad is null");
            return (Criteria) this;
        }

        public Criteria andCodModalidadIsNotNull() {
            addCriterion("cod_modalidad is not null");
            return (Criteria) this;
        }

        public Criteria andCodModalidadEqualTo(Integer value) {
            addCriterion("cod_modalidad =", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadNotEqualTo(Integer value) {
            addCriterion("cod_modalidad <>", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadGreaterThan(Integer value) {
            addCriterion("cod_modalidad >", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_modalidad >=", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadLessThan(Integer value) {
            addCriterion("cod_modalidad <", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadLessThanOrEqualTo(Integer value) {
            addCriterion("cod_modalidad <=", value, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadIn(List<Integer> values) {
            addCriterion("cod_modalidad in", values, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadNotIn(List<Integer> values) {
            addCriterion("cod_modalidad not in", values, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadBetween(Integer value1, Integer value2) {
            addCriterion("cod_modalidad between", value1, value2, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodModalidadNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_modalidad not between", value1, value2, "codModalidad");
            return (Criteria) this;
        }

        public Criteria andCodMotivoIsNull() {
            addCriterion("cod_motivo is null");
            return (Criteria) this;
        }

        public Criteria andCodMotivoIsNotNull() {
            addCriterion("cod_motivo is not null");
            return (Criteria) this;
        }

        public Criteria andCodMotivoEqualTo(Integer value) {
            addCriterion("cod_motivo =", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoNotEqualTo(Integer value) {
            addCriterion("cod_motivo <>", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoGreaterThan(Integer value) {
            addCriterion("cod_motivo >", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_motivo >=", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoLessThan(Integer value) {
            addCriterion("cod_motivo <", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_motivo <=", value, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoIn(List<Integer> values) {
            addCriterion("cod_motivo in", values, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoNotIn(List<Integer> values) {
            addCriterion("cod_motivo not in", values, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoBetween(Integer value1, Integer value2) {
            addCriterion("cod_motivo between", value1, value2, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andCodMotivoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_motivo not between", value1, value2, "codMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoIsNull() {
            addCriterion("desc_motivo is null");
            return (Criteria) this;
        }

        public Criteria andDescMotivoIsNotNull() {
            addCriterion("desc_motivo is not null");
            return (Criteria) this;
        }

        public Criteria andDescMotivoEqualTo(String value) {
            addCriterion("desc_motivo =", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoNotEqualTo(String value) {
            addCriterion("desc_motivo <>", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoGreaterThan(String value) {
            addCriterion("desc_motivo >", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoGreaterThanOrEqualTo(String value) {
            addCriterion("desc_motivo >=", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoLessThan(String value) {
            addCriterion("desc_motivo <", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoLessThanOrEqualTo(String value) {
            addCriterion("desc_motivo <=", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoLike(String value) {
            addCriterion("desc_motivo like", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoNotLike(String value) {
            addCriterion("desc_motivo not like", value, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoIn(List<String> values) {
            addCriterion("desc_motivo in", values, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoNotIn(List<String> values) {
            addCriterion("desc_motivo not in", values, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoBetween(String value1, String value2) {
            addCriterion("desc_motivo between", value1, value2, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andDescMotivoNotBetween(String value1, String value2) {
            addCriterion("desc_motivo not between", value1, value2, "descMotivo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoIsNull() {
            addCriterion("tpo_hallazgo is null");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoIsNotNull() {
            addCriterion("tpo_hallazgo is not null");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoEqualTo(String value) {
            addCriterion("tpo_hallazgo =", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoNotEqualTo(String value) {
            addCriterion("tpo_hallazgo <>", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoGreaterThan(String value) {
            addCriterion("tpo_hallazgo >", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoGreaterThanOrEqualTo(String value) {
            addCriterion("tpo_hallazgo >=", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoLessThan(String value) {
            addCriterion("tpo_hallazgo <", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoLessThanOrEqualTo(String value) {
            addCriterion("tpo_hallazgo <=", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoLike(String value) {
            addCriterion("tpo_hallazgo like", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoNotLike(String value) {
            addCriterion("tpo_hallazgo not like", value, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoIn(List<String> values) {
            addCriterion("tpo_hallazgo in", values, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoNotIn(List<String> values) {
            addCriterion("tpo_hallazgo not in", values, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoBetween(String value1, String value2) {
            addCriterion("tpo_hallazgo between", value1, value2, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoNotBetween(String value1, String value2) {
            addCriterion("tpo_hallazgo not between", value1, value2, "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoIsNull() {
            addCriterion("tpo_sexo is null");
            return (Criteria) this;
        }

        public Criteria andTpoSexoIsNotNull() {
            addCriterion("tpo_sexo is not null");
            return (Criteria) this;
        }

        public Criteria andTpoSexoEqualTo(String value) {
            addCriterion("tpo_sexo =", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoNotEqualTo(String value) {
            addCriterion("tpo_sexo <>", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoGreaterThan(String value) {
            addCriterion("tpo_sexo >", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoGreaterThanOrEqualTo(String value) {
            addCriterion("tpo_sexo >=", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoLessThan(String value) {
            addCriterion("tpo_sexo <", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoLessThanOrEqualTo(String value) {
            addCriterion("tpo_sexo <=", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoLike(String value) {
            addCriterion("tpo_sexo like", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoNotLike(String value) {
            addCriterion("tpo_sexo not like", value, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoIn(List<String> values) {
            addCriterion("tpo_sexo in", values, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoNotIn(List<String> values) {
            addCriterion("tpo_sexo not in", values, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoBetween(String value1, String value2) {
            addCriterion("tpo_sexo between", value1, value2, "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoNotBetween(String value1, String value2) {
            addCriterion("tpo_sexo not between", value1, value2, "tpoSexo");
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

        public Criteria andNroCasoVoxivaIsNull() {
            addCriterion("nro_caso_voxiva is null");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaIsNotNull() {
            addCriterion("nro_caso_voxiva is not null");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaEqualTo(Integer value) {
            addCriterion("nro_caso_voxiva =", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaNotEqualTo(Integer value) {
            addCriterion("nro_caso_voxiva <>", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaGreaterThan(Integer value) {
            addCriterion("nro_caso_voxiva >", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaGreaterThanOrEqualTo(Integer value) {
            addCriterion("nro_caso_voxiva >=", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaLessThan(Integer value) {
            addCriterion("nro_caso_voxiva <", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaLessThanOrEqualTo(Integer value) {
            addCriterion("nro_caso_voxiva <=", value, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaIn(List<Integer> values) {
            addCriterion("nro_caso_voxiva in", values, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaNotIn(List<Integer> values) {
            addCriterion("nro_caso_voxiva not in", values, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaBetween(Integer value1, Integer value2) {
            addCriterion("nro_caso_voxiva between", value1, value2, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andNroCasoVoxivaNotBetween(Integer value1, Integer value2) {
            addCriterion("nro_caso_voxiva not between", value1, value2, "nroCasoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaIsNull() {
            addCriterion("tipo_voxiva is null");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaIsNotNull() {
            addCriterion("tipo_voxiva is not null");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaEqualTo(String value) {
            addCriterion("tipo_voxiva =", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaNotEqualTo(String value) {
            addCriterion("tipo_voxiva <>", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaGreaterThan(String value) {
            addCriterion("tipo_voxiva >", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaGreaterThanOrEqualTo(String value) {
            addCriterion("tipo_voxiva >=", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaLessThan(String value) {
            addCriterion("tipo_voxiva <", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaLessThanOrEqualTo(String value) {
            addCriterion("tipo_voxiva <=", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaLike(String value) {
            addCriterion("tipo_voxiva like", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaNotLike(String value) {
            addCriterion("tipo_voxiva not like", value, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaIn(List<String> values) {
            addCriterion("tipo_voxiva in", values, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaNotIn(List<String> values) {
            addCriterion("tipo_voxiva not in", values, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaBetween(String value1, String value2) {
            addCriterion("tipo_voxiva between", value1, value2, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaNotBetween(String value1, String value2) {
            addCriterion("tipo_voxiva not between", value1, value2, "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaIsNull() {
            addCriterion("subtipo_voxiva is null");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaIsNotNull() {
            addCriterion("subtipo_voxiva is not null");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaEqualTo(String value) {
            addCriterion("subtipo_voxiva =", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaNotEqualTo(String value) {
            addCriterion("subtipo_voxiva <>", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaGreaterThan(String value) {
            addCriterion("subtipo_voxiva >", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaGreaterThanOrEqualTo(String value) {
            addCriterion("subtipo_voxiva >=", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaLessThan(String value) {
            addCriterion("subtipo_voxiva <", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaLessThanOrEqualTo(String value) {
            addCriterion("subtipo_voxiva <=", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaLike(String value) {
            addCriterion("subtipo_voxiva like", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaNotLike(String value) {
            addCriterion("subtipo_voxiva not like", value, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaIn(List<String> values) {
            addCriterion("subtipo_voxiva in", values, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaNotIn(List<String> values) {
            addCriterion("subtipo_voxiva not in", values, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaBetween(String value1, String value2) {
            addCriterion("subtipo_voxiva between", value1, value2, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaNotBetween(String value1, String value2) {
            addCriterion("subtipo_voxiva not between", value1, value2, "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreIsNull() {
            addCriterion("tiempo_cierre is null");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreIsNotNull() {
            addCriterion("tiempo_cierre is not null");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreEqualTo(String value) {
            addCriterion("tiempo_cierre =", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreNotEqualTo(String value) {
            addCriterion("tiempo_cierre <>", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreGreaterThan(String value) {
            addCriterion("tiempo_cierre >", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreGreaterThanOrEqualTo(String value) {
            addCriterion("tiempo_cierre >=", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreLessThan(String value) {
            addCriterion("tiempo_cierre <", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreLessThanOrEqualTo(String value) {
            addCriterion("tiempo_cierre <=", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreLike(String value) {
            addCriterion("tiempo_cierre like", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreNotLike(String value) {
            addCriterion("tiempo_cierre not like", value, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreIn(List<String> values) {
            addCriterion("tiempo_cierre in", values, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreNotIn(List<String> values) {
            addCriterion("tiempo_cierre not in", values, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreBetween(String value1, String value2) {
            addCriterion("tiempo_cierre between", value1, value2, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreNotBetween(String value1, String value2) {
            addCriterion("tiempo_cierre not between", value1, value2, "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andAreaIsNull() {
            addCriterion("area is null");
            return (Criteria) this;
        }

        public Criteria andAreaIsNotNull() {
            addCriterion("area is not null");
            return (Criteria) this;
        }

        public Criteria andAreaEqualTo(String value) {
            addCriterion("area =", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotEqualTo(String value) {
            addCriterion("area <>", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaGreaterThan(String value) {
            addCriterion("area >", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaGreaterThanOrEqualTo(String value) {
            addCriterion("area >=", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaLessThan(String value) {
            addCriterion("area <", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaLessThanOrEqualTo(String value) {
            addCriterion("area <=", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaLike(String value) {
            addCriterion("area like", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotLike(String value) {
            addCriterion("area not like", value, "area");
            return (Criteria) this;
        }

        public Criteria andAreaIn(List<String> values) {
            addCriterion("area in", values, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotIn(List<String> values) {
            addCriterion("area not in", values, "area");
            return (Criteria) this;
        }

        public Criteria andAreaBetween(String value1, String value2) {
            addCriterion("area between", value1, value2, "area");
            return (Criteria) this;
        }

        public Criteria andAreaNotBetween(String value1, String value2) {
            addCriterion("area not between", value1, value2, "area");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenIsNull() {
            addCriterion("cod_disp_origen is null");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenIsNotNull() {
            addCriterion("cod_disp_origen is not null");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenEqualTo(Integer value) {
            addCriterion("cod_disp_origen =", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenNotEqualTo(Integer value) {
            addCriterion("cod_disp_origen <>", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenGreaterThan(Integer value) {
            addCriterion("cod_disp_origen >", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_disp_origen >=", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenLessThan(Integer value) {
            addCriterion("cod_disp_origen <", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenLessThanOrEqualTo(Integer value) {
            addCriterion("cod_disp_origen <=", value, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenIn(List<Integer> values) {
            addCriterion("cod_disp_origen in", values, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenNotIn(List<Integer> values) {
            addCriterion("cod_disp_origen not in", values, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenBetween(Integer value1, Integer value2) {
            addCriterion("cod_disp_origen between", value1, value2, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andCodDispOrigenNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_disp_origen not between", value1, value2, "codDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenIsNull() {
            addCriterion("desc_disp_origen is null");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenIsNotNull() {
            addCriterion("desc_disp_origen is not null");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenEqualTo(String value) {
            addCriterion("desc_disp_origen =", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenNotEqualTo(String value) {
            addCriterion("desc_disp_origen <>", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenGreaterThan(String value) {
            addCriterion("desc_disp_origen >", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenGreaterThanOrEqualTo(String value) {
            addCriterion("desc_disp_origen >=", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenLessThan(String value) {
            addCriterion("desc_disp_origen <", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenLessThanOrEqualTo(String value) {
            addCriterion("desc_disp_origen <=", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenLike(String value) {
            addCriterion("desc_disp_origen like", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenNotLike(String value) {
            addCriterion("desc_disp_origen not like", value, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenIn(List<String> values) {
            addCriterion("desc_disp_origen in", values, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenNotIn(List<String> values) {
            addCriterion("desc_disp_origen not in", values, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenBetween(String value1, String value2) {
            addCriterion("desc_disp_origen between", value1, value2, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenNotBetween(String value1, String value2) {
            addCriterion("desc_disp_origen not between", value1, value2, "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosIsNull() {
            addCriterion("flg_heridos is null");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosIsNotNull() {
            addCriterion("flg_heridos is not null");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosEqualTo(String value) {
            addCriterion("flg_heridos =", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosNotEqualTo(String value) {
            addCriterion("flg_heridos <>", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosGreaterThan(String value) {
            addCriterion("flg_heridos >", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosGreaterThanOrEqualTo(String value) {
            addCriterion("flg_heridos >=", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosLessThan(String value) {
            addCriterion("flg_heridos <", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosLessThanOrEqualTo(String value) {
            addCriterion("flg_heridos <=", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosLike(String value) {
            addCriterion("flg_heridos like", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosNotLike(String value) {
            addCriterion("flg_heridos not like", value, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosIn(List<String> values) {
            addCriterion("flg_heridos in", values, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosNotIn(List<String> values) {
            addCriterion("flg_heridos not in", values, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosBetween(String value1, String value2) {
            addCriterion("flg_heridos between", value1, value2, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosNotBetween(String value1, String value2) {
            addCriterion("flg_heridos not between", value1, value2, "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackIsNull() {
            addCriterion("flg_callback is null");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackIsNotNull() {
            addCriterion("flg_callback is not null");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackEqualTo(String value) {
            addCriterion("flg_callback =", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackNotEqualTo(String value) {
            addCriterion("flg_callback <>", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackGreaterThan(String value) {
            addCriterion("flg_callback >", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackGreaterThanOrEqualTo(String value) {
            addCriterion("flg_callback >=", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackLessThan(String value) {
            addCriterion("flg_callback <", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackLessThanOrEqualTo(String value) {
            addCriterion("flg_callback <=", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackLike(String value) {
            addCriterion("flg_callback like", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackNotLike(String value) {
            addCriterion("flg_callback not like", value, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackIn(List<String> values) {
            addCriterion("flg_callback in", values, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackNotIn(List<String> values) {
            addCriterion("flg_callback not in", values, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackBetween(String value1, String value2) {
            addCriterion("flg_callback between", value1, value2, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackNotBetween(String value1, String value2) {
            addCriterion("flg_callback not between", value1, value2, "flgCallback");
            return (Criteria) this;
        }

        public Criteria andVisibleIsNull() {
            addCriterion("visible is null");
            return (Criteria) this;
        }

        public Criteria andVisibleIsNotNull() {
            addCriterion("visible is not null");
            return (Criteria) this;
        }

        public Criteria andVisibleEqualTo(String value) {
            addCriterion("visible =", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleNotEqualTo(String value) {
            addCriterion("visible <>", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleGreaterThan(String value) {
            addCriterion("visible >", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleGreaterThanOrEqualTo(String value) {
            addCriterion("visible >=", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleLessThan(String value) {
            addCriterion("visible <", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleLessThanOrEqualTo(String value) {
            addCriterion("visible <=", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleLike(String value) {
            addCriterion("visible like", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleNotLike(String value) {
            addCriterion("visible not like", value, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleIn(List<String> values) {
            addCriterion("visible in", values, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleNotIn(List<String> values) {
            addCriterion("visible not in", values, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleBetween(String value1, String value2) {
            addCriterion("visible between", value1, value2, "visible");
            return (Criteria) this;
        }

        public Criteria andVisibleNotBetween(String value1, String value2) {
            addCriterion("visible not between", value1, value2, "visible");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraIsNull() {
            addCriterion("usr_registra is null");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraIsNotNull() {
            addCriterion("usr_registra is not null");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraEqualTo(String value) {
            addCriterion("usr_registra =", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraNotEqualTo(String value) {
            addCriterion("usr_registra <>", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraGreaterThan(String value) {
            addCriterion("usr_registra >", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraGreaterThanOrEqualTo(String value) {
            addCriterion("usr_registra >=", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraLessThan(String value) {
            addCriterion("usr_registra <", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraLessThanOrEqualTo(String value) {
            addCriterion("usr_registra <=", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraLike(String value) {
            addCriterion("usr_registra like", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraNotLike(String value) {
            addCriterion("usr_registra not like", value, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraIn(List<String> values) {
            addCriterion("usr_registra in", values, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraNotIn(List<String> values) {
            addCriterion("usr_registra not in", values, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraBetween(String value1, String value2) {
            addCriterion("usr_registra between", value1, value2, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraNotBetween(String value1, String value2) {
            addCriterion("usr_registra not between", value1, value2, "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrModificaIsNull() {
            addCriterion("usr_modifica is null");
            return (Criteria) this;
        }

        public Criteria andUsrModificaIsNotNull() {
            addCriterion("usr_modifica is not null");
            return (Criteria) this;
        }

        public Criteria andUsrModificaEqualTo(String value) {
            addCriterion("usr_modifica =", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaNotEqualTo(String value) {
            addCriterion("usr_modifica <>", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaGreaterThan(String value) {
            addCriterion("usr_modifica >", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaGreaterThanOrEqualTo(String value) {
            addCriterion("usr_modifica >=", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaLessThan(String value) {
            addCriterion("usr_modifica <", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaLessThanOrEqualTo(String value) {
            addCriterion("usr_modifica <=", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaLike(String value) {
            addCriterion("usr_modifica like", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaNotLike(String value) {
            addCriterion("usr_modifica not like", value, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaIn(List<String> values) {
            addCriterion("usr_modifica in", values, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaNotIn(List<String> values) {
            addCriterion("usr_modifica not in", values, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaBetween(String value1, String value2) {
            addCriterion("usr_modifica between", value1, value2, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andUsrModificaNotBetween(String value1, String value2) {
            addCriterion("usr_modifica not between", value1, value2, "usrModifica");
            return (Criteria) this;
        }

        public Criteria andIndLeidoIsNull() {
            addCriterion("ind_leido is null");
            return (Criteria) this;
        }

        public Criteria andIndLeidoIsNotNull() {
            addCriterion("ind_leido is not null");
            return (Criteria) this;
        }

        public Criteria andIndLeidoEqualTo(String value) {
            addCriterion("ind_leido =", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoNotEqualTo(String value) {
            addCriterion("ind_leido <>", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoGreaterThan(String value) {
            addCriterion("ind_leido >", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoGreaterThanOrEqualTo(String value) {
            addCriterion("ind_leido >=", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoLessThan(String value) {
            addCriterion("ind_leido <", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoLessThanOrEqualTo(String value) {
            addCriterion("ind_leido <=", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoLike(String value) {
            addCriterion("ind_leido like", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoNotLike(String value) {
            addCriterion("ind_leido not like", value, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoIn(List<String> values) {
            addCriterion("ind_leido in", values, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoNotIn(List<String> values) {
            addCriterion("ind_leido not in", values, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoBetween(String value1, String value2) {
            addCriterion("ind_leido between", value1, value2, "indLeido");
            return (Criteria) this;
        }

        public Criteria andIndLeidoNotBetween(String value1, String value2) {
            addCriterion("ind_leido not between", value1, value2, "indLeido");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorIsNull() {
            addCriterion("tpo_operador is null");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorIsNotNull() {
            addCriterion("tpo_operador is not null");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorEqualTo(Integer value) {
            addCriterion("tpo_operador =", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorNotEqualTo(Integer value) {
            addCriterion("tpo_operador <>", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorGreaterThan(Integer value) {
            addCriterion("tpo_operador >", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorGreaterThanOrEqualTo(Integer value) {
            addCriterion("tpo_operador >=", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorLessThan(Integer value) {
            addCriterion("tpo_operador <", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorLessThanOrEqualTo(Integer value) {
            addCriterion("tpo_operador <=", value, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorIn(List<Integer> values) {
            addCriterion("tpo_operador in", values, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorNotIn(List<Integer> values) {
            addCriterion("tpo_operador not in", values, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorBetween(Integer value1, Integer value2) {
            addCriterion("tpo_operador between", value1, value2, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andTpoOperadorNotBetween(Integer value1, Integer value2) {
            addCriterion("tpo_operador not between", value1, value2, "tpoOperador");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoIsNull() {
            addCriterion("flg_reasignado is null");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoIsNotNull() {
            addCriterion("flg_reasignado is not null");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoEqualTo(String value) {
            addCriterion("flg_reasignado =", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoNotEqualTo(String value) {
            addCriterion("flg_reasignado <>", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoGreaterThan(String value) {
            addCriterion("flg_reasignado >", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoGreaterThanOrEqualTo(String value) {
            addCriterion("flg_reasignado >=", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoLessThan(String value) {
            addCriterion("flg_reasignado <", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoLessThanOrEqualTo(String value) {
            addCriterion("flg_reasignado <=", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoLike(String value) {
            addCriterion("flg_reasignado like", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoNotLike(String value) {
            addCriterion("flg_reasignado not like", value, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoIn(List<String> values) {
            addCriterion("flg_reasignado in", values, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoNotIn(List<String> values) {
            addCriterion("flg_reasignado not in", values, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoBetween(String value1, String value2) {
            addCriterion("flg_reasignado between", value1, value2, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoNotBetween(String value1, String value2) {
            addCriterion("flg_reasignado not between", value1, value2, "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andUrlAudioIsNull() {
            addCriterion("url_audio is null");
            return (Criteria) this;
        }

        public Criteria andUrlAudioIsNotNull() {
            addCriterion("url_audio is not null");
            return (Criteria) this;
        }

        public Criteria andUrlAudioEqualTo(String value) {
            addCriterion("url_audio =", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioNotEqualTo(String value) {
            addCriterion("url_audio <>", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioGreaterThan(String value) {
            addCriterion("url_audio >", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioGreaterThanOrEqualTo(String value) {
            addCriterion("url_audio >=", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioLessThan(String value) {
            addCriterion("url_audio <", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioLessThanOrEqualTo(String value) {
            addCriterion("url_audio <=", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioLike(String value) {
            addCriterion("url_audio like", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioNotLike(String value) {
            addCriterion("url_audio not like", value, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioIn(List<String> values) {
            addCriterion("url_audio in", values, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioNotIn(List<String> values) {
            addCriterion("url_audio not in", values, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioBetween(String value1, String value2) {
            addCriterion("url_audio between", value1, value2, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andUrlAudioNotBetween(String value1, String value2) {
            addCriterion("url_audio not between", value1, value2, "urlAudio");
            return (Criteria) this;
        }

        public Criteria andAux1IsNull() {
            addCriterion("aux1 is null");
            return (Criteria) this;
        }

        public Criteria andAux1IsNotNull() {
            addCriterion("aux1 is not null");
            return (Criteria) this;
        }

        public Criteria andAux1EqualTo(String value) {
            addCriterion("aux1 =", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1NotEqualTo(String value) {
            addCriterion("aux1 <>", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1GreaterThan(String value) {
            addCriterion("aux1 >", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1GreaterThanOrEqualTo(String value) {
            addCriterion("aux1 >=", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1LessThan(String value) {
            addCriterion("aux1 <", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1LessThanOrEqualTo(String value) {
            addCriterion("aux1 <=", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1Like(String value) {
            addCriterion("aux1 like", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1NotLike(String value) {
            addCriterion("aux1 not like", value, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1In(List<String> values) {
            addCriterion("aux1 in", values, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1NotIn(List<String> values) {
            addCriterion("aux1 not in", values, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1Between(String value1, String value2) {
            addCriterion("aux1 between", value1, value2, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux1NotBetween(String value1, String value2) {
            addCriterion("aux1 not between", value1, value2, "aux1");
            return (Criteria) this;
        }

        public Criteria andAux2IsNull() {
            addCriterion("aux2 is null");
            return (Criteria) this;
        }

        public Criteria andAux2IsNotNull() {
            addCriterion("aux2 is not null");
            return (Criteria) this;
        }

        public Criteria andAux2EqualTo(String value) {
            addCriterion("aux2 =", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2NotEqualTo(String value) {
            addCriterion("aux2 <>", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2GreaterThan(String value) {
            addCriterion("aux2 >", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2GreaterThanOrEqualTo(String value) {
            addCriterion("aux2 >=", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2LessThan(String value) {
            addCriterion("aux2 <", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2LessThanOrEqualTo(String value) {
            addCriterion("aux2 <=", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2Like(String value) {
            addCriterion("aux2 like", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2NotLike(String value) {
            addCriterion("aux2 not like", value, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2In(List<String> values) {
            addCriterion("aux2 in", values, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2NotIn(List<String> values) {
            addCriterion("aux2 not in", values, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2Between(String value1, String value2) {
            addCriterion("aux2 between", value1, value2, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux2NotBetween(String value1, String value2) {
            addCriterion("aux2 not between", value1, value2, "aux2");
            return (Criteria) this;
        }

        public Criteria andAux3IsNull() {
            addCriterion("aux3 is null");
            return (Criteria) this;
        }

        public Criteria andAux3IsNotNull() {
            addCriterion("aux3 is not null");
            return (Criteria) this;
        }

        public Criteria andAux3EqualTo(String value) {
            addCriterion("aux3 =", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3NotEqualTo(String value) {
            addCriterion("aux3 <>", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3GreaterThan(String value) {
            addCriterion("aux3 >", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3GreaterThanOrEqualTo(String value) {
            addCriterion("aux3 >=", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3LessThan(String value) {
            addCriterion("aux3 <", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3LessThanOrEqualTo(String value) {
            addCriterion("aux3 <=", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3Like(String value) {
            addCriterion("aux3 like", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3NotLike(String value) {
            addCriterion("aux3 not like", value, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3In(List<String> values) {
            addCriterion("aux3 in", values, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3NotIn(List<String> values) {
            addCriterion("aux3 not in", values, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3Between(String value1, String value2) {
            addCriterion("aux3 between", value1, value2, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux3NotBetween(String value1, String value2) {
            addCriterion("aux3 not between", value1, value2, "aux3");
            return (Criteria) this;
        }

        public Criteria andAux4IsNull() {
            addCriterion("aux4 is null");
            return (Criteria) this;
        }

        public Criteria andAux4IsNotNull() {
            addCriterion("aux4 is not null");
            return (Criteria) this;
        }

        public Criteria andAux4EqualTo(String value) {
            addCriterion("aux4 =", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4NotEqualTo(String value) {
            addCriterion("aux4 <>", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4GreaterThan(String value) {
            addCriterion("aux4 >", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4GreaterThanOrEqualTo(String value) {
            addCriterion("aux4 >=", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4LessThan(String value) {
            addCriterion("aux4 <", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4LessThanOrEqualTo(String value) {
            addCriterion("aux4 <=", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4Like(String value) {
            addCriterion("aux4 like", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4NotLike(String value) {
            addCriterion("aux4 not like", value, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4In(List<String> values) {
            addCriterion("aux4 in", values, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4NotIn(List<String> values) {
            addCriterion("aux4 not in", values, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4Between(String value1, String value2) {
            addCriterion("aux4 between", value1, value2, "aux4");
            return (Criteria) this;
        }

        public Criteria andAux4NotBetween(String value1, String value2) {
            addCriterion("aux4 not between", value1, value2, "aux4");
            return (Criteria) this;
        }

        public Criteria andDescUnidadLikeInsensitive(String value) {
            addCriterion("upper(desc_unidad) like", value.toUpperCase(), "descUnidad");
            return (Criteria) this;
        }

        public Criteria andDescCasoLikeInsensitive(String value) {
            addCriterion("upper(desc_caso) like", value.toUpperCase(), "descCaso");
            return (Criteria) this;
        }

        public Criteria andDescSubcasoLikeInsensitive(String value) {
            addCriterion("upper(desc_subcaso) like", value.toUpperCase(), "descSubcaso");
            return (Criteria) this;
        }

        public Criteria andDescMedioLikeInsensitive(String value) {
            addCriterion("upper(desc_medio) like", value.toUpperCase(), "descMedio");
            return (Criteria) this;
        }

        public Criteria andDescSituacionLikeInsensitive(String value) {
            addCriterion("upper(desc_situacion) like", value.toUpperCase(), "descSituacion");
            return (Criteria) this;
        }

        public Criteria andNombReportLikeInsensitive(String value) {
            addCriterion("upper(nomb_report) like", value.toUpperCase(), "nombReport");
            return (Criteria) this;
        }

        public Criteria andTelfReportLikeInsensitive(String value) {
            addCriterion("upper(telf_report) like", value.toUpperCase(), "telfReport");
            return (Criteria) this;
        }

        public Criteria andDirReportLikeInsensitive(String value) {
            addCriterion("upper(dir_report) like", value.toUpperCase(), "dirReport");
            return (Criteria) this;
        }

        public Criteria andCextReportLikeInsensitive(String value) {
            addCriterion("upper(cext_report) like", value.toUpperCase(), "cextReport");
            return (Criteria) this;
        }

        public Criteria andCoordenadasLikeInsensitive(String value) {
            addCriterion("upper(coordenadas) like", value.toUpperCase(), "coordenadas");
            return (Criteria) this;
        }

        public Criteria andDescTpoViaLikeInsensitive(String value) {
            addCriterion("upper(desc_tpo_via) like", value.toUpperCase(), "descTpoVia");
            return (Criteria) this;
        }

        public Criteria andDescViaLikeInsensitive(String value) {
            addCriterion("upper(desc_via) like", value.toUpperCase(), "descVia");
            return (Criteria) this;
        }

        public Criteria andCdraLikeInsensitive(String value) {
            addCriterion("upper(cdra) like", value.toUpperCase(), "cdra");
            return (Criteria) this;
        }

        public Criteria andDptoLikeInsensitive(String value) {
            addCriterion("upper(dpto) like", value.toUpperCase(), "dpto");
            return (Criteria) this;
        }

        public Criteria andZonaLikeInsensitive(String value) {
            addCriterion("upper(zona) like", value.toUpperCase(), "zona");
            return (Criteria) this;
        }

        public Criteria andSubzonaLikeInsensitive(String value) {
            addCriterion("upper(subzona) like", value.toUpperCase(), "subzona");
            return (Criteria) this;
        }

        public Criteria andDescripcionLikeInsensitive(String value) {
            addCriterion("upper(descripcion) like", value.toUpperCase(), "descripcion");
            return (Criteria) this;
        }

        public Criteria andDescMotivoLikeInsensitive(String value) {
            addCriterion("upper(desc_motivo) like", value.toUpperCase(), "descMotivo");
            return (Criteria) this;
        }

        public Criteria andTpoHallazgoLikeInsensitive(String value) {
            addCriterion("upper(tpo_hallazgo) like", value.toUpperCase(), "tpoHallazgo");
            return (Criteria) this;
        }

        public Criteria andTpoSexoLikeInsensitive(String value) {
            addCriterion("upper(tpo_sexo) like", value.toUpperCase(), "tpoSexo");
            return (Criteria) this;
        }

        public Criteria andEstRegLikeInsensitive(String value) {
            addCriterion("upper(est_reg) like", value.toUpperCase(), "estReg");
            return (Criteria) this;
        }

        public Criteria andTipoVoxivaLikeInsensitive(String value) {
            addCriterion("upper(tipo_voxiva) like", value.toUpperCase(), "tipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andSubtipoVoxivaLikeInsensitive(String value) {
            addCriterion("upper(subtipo_voxiva) like", value.toUpperCase(), "subtipoVoxiva");
            return (Criteria) this;
        }

        public Criteria andTiempoCierreLikeInsensitive(String value) {
            addCriterion("upper(tiempo_cierre) like", value.toUpperCase(), "tiempoCierre");
            return (Criteria) this;
        }

        public Criteria andAreaLikeInsensitive(String value) {
            addCriterion("upper(area) like", value.toUpperCase(), "area");
            return (Criteria) this;
        }

        public Criteria andDescDispOrigenLikeInsensitive(String value) {
            addCriterion("upper(desc_disp_origen) like", value.toUpperCase(), "descDispOrigen");
            return (Criteria) this;
        }

        public Criteria andFlgHeridosLikeInsensitive(String value) {
            addCriterion("upper(flg_heridos) like", value.toUpperCase(), "flgHeridos");
            return (Criteria) this;
        }

        public Criteria andFlgCallbackLikeInsensitive(String value) {
            addCriterion("upper(flg_callback) like", value.toUpperCase(), "flgCallback");
            return (Criteria) this;
        }

        public Criteria andVisibleLikeInsensitive(String value) {
            addCriterion("upper(visible) like", value.toUpperCase(), "visible");
            return (Criteria) this;
        }

        public Criteria andUsrRegistraLikeInsensitive(String value) {
            addCriterion("upper(usr_registra) like", value.toUpperCase(), "usrRegistra");
            return (Criteria) this;
        }

        public Criteria andUsrModificaLikeInsensitive(String value) {
            addCriterion("upper(usr_modifica) like", value.toUpperCase(), "usrModifica");
            return (Criteria) this;
        }

        public Criteria andIndLeidoLikeInsensitive(String value) {
            addCriterion("upper(ind_leido) like", value.toUpperCase(), "indLeido");
            return (Criteria) this;
        }

        public Criteria andFlgReasignadoLikeInsensitive(String value) {
            addCriterion("upper(flg_reasignado) like", value.toUpperCase(), "flgReasignado");
            return (Criteria) this;
        }

        public Criteria andUrlAudioLikeInsensitive(String value) {
            addCriterion("upper(url_audio) like", value.toUpperCase(), "urlAudio");
            return (Criteria) this;
        }

        public Criteria andAux1LikeInsensitive(String value) {
            addCriterion("upper(aux1) like", value.toUpperCase(), "aux1");
            return (Criteria) this;
        }

        public Criteria andAux2LikeInsensitive(String value) {
            addCriterion("upper(aux2) like", value.toUpperCase(), "aux2");
            return (Criteria) this;
        }

        public Criteria andAux3LikeInsensitive(String value) {
            addCriterion("upper(aux3) like", value.toUpperCase(), "aux3");
            return (Criteria) this;
        }

        public Criteria andAux4LikeInsensitive(String value) {
            addCriterion("upper(aux4) like", value.toUpperCase(), "aux4");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

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