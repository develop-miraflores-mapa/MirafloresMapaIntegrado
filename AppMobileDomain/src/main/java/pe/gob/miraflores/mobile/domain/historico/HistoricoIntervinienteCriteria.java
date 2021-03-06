package pe.gob.miraflores.mobile.domain.historico;

import java.util.ArrayList;
import java.util.List;

public class HistoricoIntervinienteCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public HistoricoIntervinienteCriteria() {
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

        public Criteria andIdHistIntervIsNull() {
            addCriterion("id_hist_interv is null");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervIsNotNull() {
            addCriterion("id_hist_interv is not null");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervEqualTo(Integer value) {
            addCriterion("id_hist_interv =", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervNotEqualTo(Integer value) {
            addCriterion("id_hist_interv <>", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervGreaterThan(Integer value) {
            addCriterion("id_hist_interv >", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_hist_interv >=", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervLessThan(Integer value) {
            addCriterion("id_hist_interv <", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervLessThanOrEqualTo(Integer value) {
            addCriterion("id_hist_interv <=", value, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervIn(List<Integer> values) {
            addCriterion("id_hist_interv in", values, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervNotIn(List<Integer> values) {
            addCriterion("id_hist_interv not in", values, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervBetween(Integer value1, Integer value2) {
            addCriterion("id_hist_interv between", value1, value2, "idHistInterv");
            return (Criteria) this;
        }

        public Criteria andIdHistIntervNotBetween(Integer value1, Integer value2) {
            addCriterion("id_hist_interv not between", value1, value2, "idHistInterv");
            return (Criteria) this;
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

        public Criteria andCodIntervIsNull() {
            addCriterion("cod_interv is null");
            return (Criteria) this;
        }

        public Criteria andCodIntervIsNotNull() {
            addCriterion("cod_interv is not null");
            return (Criteria) this;
        }

        public Criteria andCodIntervEqualTo(Integer value) {
            addCriterion("cod_interv =", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervNotEqualTo(Integer value) {
            addCriterion("cod_interv <>", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervGreaterThan(Integer value) {
            addCriterion("cod_interv >", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_interv >=", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervLessThan(Integer value) {
            addCriterion("cod_interv <", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervLessThanOrEqualTo(Integer value) {
            addCriterion("cod_interv <=", value, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervIn(List<Integer> values) {
            addCriterion("cod_interv in", values, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervNotIn(List<Integer> values) {
            addCriterion("cod_interv not in", values, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervBetween(Integer value1, Integer value2) {
            addCriterion("cod_interv between", value1, value2, "codInterv");
            return (Criteria) this;
        }

        public Criteria andCodIntervNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_interv not between", value1, value2, "codInterv");
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

        public Criteria andCodTpoIntervIsNull() {
            addCriterion("cod_tpo_interv is null");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervIsNotNull() {
            addCriterion("cod_tpo_interv is not null");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervEqualTo(Integer value) {
            addCriterion("cod_tpo_interv =", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervNotEqualTo(Integer value) {
            addCriterion("cod_tpo_interv <>", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervGreaterThan(Integer value) {
            addCriterion("cod_tpo_interv >", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_interv >=", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervLessThan(Integer value) {
            addCriterion("cod_tpo_interv <", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervLessThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_interv <=", value, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervIn(List<Integer> values) {
            addCriterion("cod_tpo_interv in", values, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervNotIn(List<Integer> values) {
            addCriterion("cod_tpo_interv not in", values, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_interv between", value1, value2, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoIntervNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_interv not between", value1, value2, "codTpoInterv");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoIsNull() {
            addCriterion("cod_tpo_puesto is null");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoIsNotNull() {
            addCriterion("cod_tpo_puesto is not null");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoEqualTo(Integer value) {
            addCriterion("cod_tpo_puesto =", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoNotEqualTo(Integer value) {
            addCriterion("cod_tpo_puesto <>", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoGreaterThan(Integer value) {
            addCriterion("cod_tpo_puesto >", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_puesto >=", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoLessThan(Integer value) {
            addCriterion("cod_tpo_puesto <", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoLessThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_puesto <=", value, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoIn(List<Integer> values) {
            addCriterion("cod_tpo_puesto in", values, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoNotIn(List<Integer> values) {
            addCriterion("cod_tpo_puesto not in", values, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_puesto between", value1, value2, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andCodTpoPuestoNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_puesto not between", value1, value2, "codTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervIsNull() {
            addCriterion("desc_tpo_interv is null");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervIsNotNull() {
            addCriterion("desc_tpo_interv is not null");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervEqualTo(String value) {
            addCriterion("desc_tpo_interv =", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervNotEqualTo(String value) {
            addCriterion("desc_tpo_interv <>", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervGreaterThan(String value) {
            addCriterion("desc_tpo_interv >", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervGreaterThanOrEqualTo(String value) {
            addCriterion("desc_tpo_interv >=", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervLessThan(String value) {
            addCriterion("desc_tpo_interv <", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervLessThanOrEqualTo(String value) {
            addCriterion("desc_tpo_interv <=", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervLike(String value) {
            addCriterion("desc_tpo_interv like", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervNotLike(String value) {
            addCriterion("desc_tpo_interv not like", value, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervIn(List<String> values) {
            addCriterion("desc_tpo_interv in", values, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervNotIn(List<String> values) {
            addCriterion("desc_tpo_interv not in", values, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervBetween(String value1, String value2) {
            addCriterion("desc_tpo_interv between", value1, value2, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervNotBetween(String value1, String value2) {
            addCriterion("desc_tpo_interv not between", value1, value2, "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoIsNull() {
            addCriterion("desc_tpo_puesto is null");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoIsNotNull() {
            addCriterion("desc_tpo_puesto is not null");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoEqualTo(String value) {
            addCriterion("desc_tpo_puesto =", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoNotEqualTo(String value) {
            addCriterion("desc_tpo_puesto <>", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoGreaterThan(String value) {
            addCriterion("desc_tpo_puesto >", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoGreaterThanOrEqualTo(String value) {
            addCriterion("desc_tpo_puesto >=", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoLessThan(String value) {
            addCriterion("desc_tpo_puesto <", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoLessThanOrEqualTo(String value) {
            addCriterion("desc_tpo_puesto <=", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoLike(String value) {
            addCriterion("desc_tpo_puesto like", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoNotLike(String value) {
            addCriterion("desc_tpo_puesto not like", value, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoIn(List<String> values) {
            addCriterion("desc_tpo_puesto in", values, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoNotIn(List<String> values) {
            addCriterion("desc_tpo_puesto not in", values, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoBetween(String value1, String value2) {
            addCriterion("desc_tpo_puesto between", value1, value2, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoNotBetween(String value1, String value2) {
            addCriterion("desc_tpo_puesto not between", value1, value2, "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andNombIntervIsNull() {
            addCriterion("nomb_interv is null");
            return (Criteria) this;
        }

        public Criteria andNombIntervIsNotNull() {
            addCriterion("nomb_interv is not null");
            return (Criteria) this;
        }

        public Criteria andNombIntervEqualTo(String value) {
            addCriterion("nomb_interv =", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervNotEqualTo(String value) {
            addCriterion("nomb_interv <>", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervGreaterThan(String value) {
            addCriterion("nomb_interv >", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervGreaterThanOrEqualTo(String value) {
            addCriterion("nomb_interv >=", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervLessThan(String value) {
            addCriterion("nomb_interv <", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervLessThanOrEqualTo(String value) {
            addCriterion("nomb_interv <=", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervLike(String value) {
            addCriterion("nomb_interv like", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervNotLike(String value) {
            addCriterion("nomb_interv not like", value, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervIn(List<String> values) {
            addCriterion("nomb_interv in", values, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervNotIn(List<String> values) {
            addCriterion("nomb_interv not in", values, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervBetween(String value1, String value2) {
            addCriterion("nomb_interv between", value1, value2, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andNombIntervNotBetween(String value1, String value2) {
            addCriterion("nomb_interv not between", value1, value2, "nombInterv");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialIsNull() {
            addCriterion("apoyo_policial is null");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialIsNotNull() {
            addCriterion("apoyo_policial is not null");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialEqualTo(String value) {
            addCriterion("apoyo_policial =", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialNotEqualTo(String value) {
            addCriterion("apoyo_policial <>", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialGreaterThan(String value) {
            addCriterion("apoyo_policial >", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialGreaterThanOrEqualTo(String value) {
            addCriterion("apoyo_policial >=", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialLessThan(String value) {
            addCriterion("apoyo_policial <", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialLessThanOrEqualTo(String value) {
            addCriterion("apoyo_policial <=", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialLike(String value) {
            addCriterion("apoyo_policial like", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialNotLike(String value) {
            addCriterion("apoyo_policial not like", value, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialIn(List<String> values) {
            addCriterion("apoyo_policial in", values, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialNotIn(List<String> values) {
            addCriterion("apoyo_policial not in", values, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialBetween(String value1, String value2) {
            addCriterion("apoyo_policial between", value1, value2, "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialNotBetween(String value1, String value2) {
            addCriterion("apoyo_policial not between", value1, value2, "apoyoPolicial");
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

        public Criteria andInfoIntervIsNull() {
            addCriterion("info_interv is null");
            return (Criteria) this;
        }

        public Criteria andInfoIntervIsNotNull() {
            addCriterion("info_interv is not null");
            return (Criteria) this;
        }

        public Criteria andInfoIntervEqualTo(String value) {
            addCriterion("info_interv =", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervNotEqualTo(String value) {
            addCriterion("info_interv <>", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervGreaterThan(String value) {
            addCriterion("info_interv >", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervGreaterThanOrEqualTo(String value) {
            addCriterion("info_interv >=", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervLessThan(String value) {
            addCriterion("info_interv <", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervLessThanOrEqualTo(String value) {
            addCriterion("info_interv <=", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervLike(String value) {
            addCriterion("info_interv like", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervNotLike(String value) {
            addCriterion("info_interv not like", value, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervIn(List<String> values) {
            addCriterion("info_interv in", values, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervNotIn(List<String> values) {
            addCriterion("info_interv not in", values, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervBetween(String value1, String value2) {
            addCriterion("info_interv between", value1, value2, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andInfoIntervNotBetween(String value1, String value2) {
            addCriterion("info_interv not between", value1, value2, "infoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoIntervLikeInsensitive(String value) {
            addCriterion("upper(desc_tpo_interv) like", value.toUpperCase(), "descTpoInterv");
            return (Criteria) this;
        }

        public Criteria andDescTpoPuestoLikeInsensitive(String value) {
            addCriterion("upper(desc_tpo_puesto) like", value.toUpperCase(), "descTpoPuesto");
            return (Criteria) this;
        }

        public Criteria andNombIntervLikeInsensitive(String value) {
            addCriterion("upper(nomb_interv) like", value.toUpperCase(), "nombInterv");
            return (Criteria) this;
        }

        public Criteria andApoyoPolicialLikeInsensitive(String value) {
            addCriterion("upper(apoyo_policial) like", value.toUpperCase(), "apoyoPolicial");
            return (Criteria) this;
        }

        public Criteria andEstRegLikeInsensitive(String value) {
            addCriterion("upper(est_reg) like", value.toUpperCase(), "estReg");
            return (Criteria) this;
        }

        public Criteria andInfoIntervLikeInsensitive(String value) {
            addCriterion("upper(info_interv) like", value.toUpperCase(), "infoInterv");
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