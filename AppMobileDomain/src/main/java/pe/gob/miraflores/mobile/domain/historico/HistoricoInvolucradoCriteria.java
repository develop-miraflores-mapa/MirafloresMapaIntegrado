package pe.gob.miraflores.mobile.domain.historico;

import java.util.ArrayList;
import java.util.List;

public class HistoricoInvolucradoCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public HistoricoInvolucradoCriteria() {
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

        public Criteria andIdHistInvolucIsNull() {
            addCriterion("id_hist_involuc is null");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucIsNotNull() {
            addCriterion("id_hist_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucEqualTo(Integer value) {
            addCriterion("id_hist_involuc =", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucNotEqualTo(Integer value) {
            addCriterion("id_hist_involuc <>", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucGreaterThan(Integer value) {
            addCriterion("id_hist_involuc >", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucGreaterThanOrEqualTo(Integer value) {
            addCriterion("id_hist_involuc >=", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucLessThan(Integer value) {
            addCriterion("id_hist_involuc <", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucLessThanOrEqualTo(Integer value) {
            addCriterion("id_hist_involuc <=", value, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucIn(List<Integer> values) {
            addCriterion("id_hist_involuc in", values, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucNotIn(List<Integer> values) {
            addCriterion("id_hist_involuc not in", values, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucBetween(Integer value1, Integer value2) {
            addCriterion("id_hist_involuc between", value1, value2, "idHistInvoluc");
            return (Criteria) this;
        }

        public Criteria andIdHistInvolucNotBetween(Integer value1, Integer value2) {
            addCriterion("id_hist_involuc not between", value1, value2, "idHistInvoluc");
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

        public Criteria andCodInvolucIsNull() {
            addCriterion("cod_involuc is null");
            return (Criteria) this;
        }

        public Criteria andCodInvolucIsNotNull() {
            addCriterion("cod_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andCodInvolucEqualTo(Integer value) {
            addCriterion("cod_involuc =", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucNotEqualTo(Integer value) {
            addCriterion("cod_involuc <>", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucGreaterThan(Integer value) {
            addCriterion("cod_involuc >", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_involuc >=", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucLessThan(Integer value) {
            addCriterion("cod_involuc <", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucLessThanOrEqualTo(Integer value) {
            addCriterion("cod_involuc <=", value, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucIn(List<Integer> values) {
            addCriterion("cod_involuc in", values, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucNotIn(List<Integer> values) {
            addCriterion("cod_involuc not in", values, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucBetween(Integer value1, Integer value2) {
            addCriterion("cod_involuc between", value1, value2, "codInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodInvolucNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_involuc not between", value1, value2, "codInvoluc");
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

        public Criteria andCodTpoInvolucIsNull() {
            addCriterion("cod_tpo_involuc is null");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucIsNotNull() {
            addCriterion("cod_tpo_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucEqualTo(Integer value) {
            addCriterion("cod_tpo_involuc =", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucNotEqualTo(Integer value) {
            addCriterion("cod_tpo_involuc <>", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucGreaterThan(Integer value) {
            addCriterion("cod_tpo_involuc >", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_involuc >=", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucLessThan(Integer value) {
            addCriterion("cod_tpo_involuc <", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucLessThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_involuc <=", value, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucIn(List<Integer> values) {
            addCriterion("cod_tpo_involuc in", values, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucNotIn(List<Integer> values) {
            addCriterion("cod_tpo_involuc not in", values, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_involuc between", value1, value2, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoInvolucNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_involuc not between", value1, value2, "codTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocIsNull() {
            addCriterion("cod_tpo_doc is null");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocIsNotNull() {
            addCriterion("cod_tpo_doc is not null");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocEqualTo(Integer value) {
            addCriterion("cod_tpo_doc =", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocNotEqualTo(Integer value) {
            addCriterion("cod_tpo_doc <>", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocGreaterThan(Integer value) {
            addCriterion("cod_tpo_doc >", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_doc >=", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocLessThan(Integer value) {
            addCriterion("cod_tpo_doc <", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocLessThanOrEqualTo(Integer value) {
            addCriterion("cod_tpo_doc <=", value, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocIn(List<Integer> values) {
            addCriterion("cod_tpo_doc in", values, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocNotIn(List<Integer> values) {
            addCriterion("cod_tpo_doc not in", values, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_doc between", value1, value2, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andCodTpoDocNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_tpo_doc not between", value1, value2, "codTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucIsNull() {
            addCriterion("desc_tpo_involuc is null");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucIsNotNull() {
            addCriterion("desc_tpo_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucEqualTo(String value) {
            addCriterion("desc_tpo_involuc =", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucNotEqualTo(String value) {
            addCriterion("desc_tpo_involuc <>", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucGreaterThan(String value) {
            addCriterion("desc_tpo_involuc >", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucGreaterThanOrEqualTo(String value) {
            addCriterion("desc_tpo_involuc >=", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucLessThan(String value) {
            addCriterion("desc_tpo_involuc <", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucLessThanOrEqualTo(String value) {
            addCriterion("desc_tpo_involuc <=", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucLike(String value) {
            addCriterion("desc_tpo_involuc like", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucNotLike(String value) {
            addCriterion("desc_tpo_involuc not like", value, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucIn(List<String> values) {
            addCriterion("desc_tpo_involuc in", values, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucNotIn(List<String> values) {
            addCriterion("desc_tpo_involuc not in", values, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucBetween(String value1, String value2) {
            addCriterion("desc_tpo_involuc between", value1, value2, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoInvolucNotBetween(String value1, String value2) {
            addCriterion("desc_tpo_involuc not between", value1, value2, "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocIsNull() {
            addCriterion("desc_tpo_doc is null");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocIsNotNull() {
            addCriterion("desc_tpo_doc is not null");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocEqualTo(String value) {
            addCriterion("desc_tpo_doc =", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocNotEqualTo(String value) {
            addCriterion("desc_tpo_doc <>", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocGreaterThan(String value) {
            addCriterion("desc_tpo_doc >", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocGreaterThanOrEqualTo(String value) {
            addCriterion("desc_tpo_doc >=", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocLessThan(String value) {
            addCriterion("desc_tpo_doc <", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocLessThanOrEqualTo(String value) {
            addCriterion("desc_tpo_doc <=", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocLike(String value) {
            addCriterion("desc_tpo_doc like", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocNotLike(String value) {
            addCriterion("desc_tpo_doc not like", value, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocIn(List<String> values) {
            addCriterion("desc_tpo_doc in", values, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocNotIn(List<String> values) {
            addCriterion("desc_tpo_doc not in", values, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocBetween(String value1, String value2) {
            addCriterion("desc_tpo_doc between", value1, value2, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocNotBetween(String value1, String value2) {
            addCriterion("desc_tpo_doc not between", value1, value2, "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucIsNull() {
            addCriterion("nomb_involuc is null");
            return (Criteria) this;
        }

        public Criteria andNombInvolucIsNotNull() {
            addCriterion("nomb_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andNombInvolucEqualTo(String value) {
            addCriterion("nomb_involuc =", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucNotEqualTo(String value) {
            addCriterion("nomb_involuc <>", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucGreaterThan(String value) {
            addCriterion("nomb_involuc >", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucGreaterThanOrEqualTo(String value) {
            addCriterion("nomb_involuc >=", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucLessThan(String value) {
            addCriterion("nomb_involuc <", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucLessThanOrEqualTo(String value) {
            addCriterion("nomb_involuc <=", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucLike(String value) {
            addCriterion("nomb_involuc like", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucNotLike(String value) {
            addCriterion("nomb_involuc not like", value, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucIn(List<String> values) {
            addCriterion("nomb_involuc in", values, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucNotIn(List<String> values) {
            addCriterion("nomb_involuc not in", values, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucBetween(String value1, String value2) {
            addCriterion("nomb_involuc between", value1, value2, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucNotBetween(String value1, String value2) {
            addCriterion("nomb_involuc not between", value1, value2, "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucIsNull() {
            addCriterion("edad_involuc is null");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucIsNotNull() {
            addCriterion("edad_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucEqualTo(String value) {
            addCriterion("edad_involuc =", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucNotEqualTo(String value) {
            addCriterion("edad_involuc <>", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucGreaterThan(String value) {
            addCriterion("edad_involuc >", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucGreaterThanOrEqualTo(String value) {
            addCriterion("edad_involuc >=", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucLessThan(String value) {
            addCriterion("edad_involuc <", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucLessThanOrEqualTo(String value) {
            addCriterion("edad_involuc <=", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucLike(String value) {
            addCriterion("edad_involuc like", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucNotLike(String value) {
            addCriterion("edad_involuc not like", value, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucIn(List<String> values) {
            addCriterion("edad_involuc in", values, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucNotIn(List<String> values) {
            addCriterion("edad_involuc not in", values, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucBetween(String value1, String value2) {
            addCriterion("edad_involuc between", value1, value2, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucNotBetween(String value1, String value2) {
            addCriterion("edad_involuc not between", value1, value2, "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucIsNull() {
            addCriterion("num_doc_involuc is null");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucIsNotNull() {
            addCriterion("num_doc_involuc is not null");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucEqualTo(String value) {
            addCriterion("num_doc_involuc =", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucNotEqualTo(String value) {
            addCriterion("num_doc_involuc <>", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucGreaterThan(String value) {
            addCriterion("num_doc_involuc >", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucGreaterThanOrEqualTo(String value) {
            addCriterion("num_doc_involuc >=", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucLessThan(String value) {
            addCriterion("num_doc_involuc <", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucLessThanOrEqualTo(String value) {
            addCriterion("num_doc_involuc <=", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucLike(String value) {
            addCriterion("num_doc_involuc like", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucNotLike(String value) {
            addCriterion("num_doc_involuc not like", value, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucIn(List<String> values) {
            addCriterion("num_doc_involuc in", values, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucNotIn(List<String> values) {
            addCriterion("num_doc_involuc not in", values, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucBetween(String value1, String value2) {
            addCriterion("num_doc_involuc between", value1, value2, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucNotBetween(String value1, String value2) {
            addCriterion("num_doc_involuc not between", value1, value2, "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescObservIsNull() {
            addCriterion("desc_observ is null");
            return (Criteria) this;
        }

        public Criteria andDescObservIsNotNull() {
            addCriterion("desc_observ is not null");
            return (Criteria) this;
        }

        public Criteria andDescObservEqualTo(String value) {
            addCriterion("desc_observ =", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservNotEqualTo(String value) {
            addCriterion("desc_observ <>", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservGreaterThan(String value) {
            addCriterion("desc_observ >", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservGreaterThanOrEqualTo(String value) {
            addCriterion("desc_observ >=", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservLessThan(String value) {
            addCriterion("desc_observ <", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservLessThanOrEqualTo(String value) {
            addCriterion("desc_observ <=", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservLike(String value) {
            addCriterion("desc_observ like", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservNotLike(String value) {
            addCriterion("desc_observ not like", value, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservIn(List<String> values) {
            addCriterion("desc_observ in", values, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservNotIn(List<String> values) {
            addCriterion("desc_observ not in", values, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservBetween(String value1, String value2) {
            addCriterion("desc_observ between", value1, value2, "descObserv");
            return (Criteria) this;
        }

        public Criteria andDescObservNotBetween(String value1, String value2) {
            addCriterion("desc_observ not between", value1, value2, "descObserv");
            return (Criteria) this;
        }

        public Criteria andCodVehicIsNull() {
            addCriterion("cod_vehic is null");
            return (Criteria) this;
        }

        public Criteria andCodVehicIsNotNull() {
            addCriterion("cod_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andCodVehicEqualTo(Integer value) {
            addCriterion("cod_vehic =", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicNotEqualTo(Integer value) {
            addCriterion("cod_vehic <>", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicGreaterThan(Integer value) {
            addCriterion("cod_vehic >", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_vehic >=", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicLessThan(Integer value) {
            addCriterion("cod_vehic <", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicLessThanOrEqualTo(Integer value) {
            addCriterion("cod_vehic <=", value, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicIn(List<Integer> values) {
            addCriterion("cod_vehic in", values, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicNotIn(List<Integer> values) {
            addCriterion("cod_vehic not in", values, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicBetween(Integer value1, Integer value2) {
            addCriterion("cod_vehic between", value1, value2, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodVehicNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_vehic not between", value1, value2, "codVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicIsNull() {
            addCriterion("cod_clase_vehic is null");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicIsNotNull() {
            addCriterion("cod_clase_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicEqualTo(Integer value) {
            addCriterion("cod_clase_vehic =", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicNotEqualTo(Integer value) {
            addCriterion("cod_clase_vehic <>", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicGreaterThan(Integer value) {
            addCriterion("cod_clase_vehic >", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_clase_vehic >=", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicLessThan(Integer value) {
            addCriterion("cod_clase_vehic <", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicLessThanOrEqualTo(Integer value) {
            addCriterion("cod_clase_vehic <=", value, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicIn(List<Integer> values) {
            addCriterion("cod_clase_vehic in", values, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicNotIn(List<Integer> values) {
            addCriterion("cod_clase_vehic not in", values, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicBetween(Integer value1, Integer value2) {
            addCriterion("cod_clase_vehic between", value1, value2, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodClaseVehicNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_clase_vehic not between", value1, value2, "codClaseVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicIsNull() {
            addCriterion("cod_marca_vehic is null");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicIsNotNull() {
            addCriterion("cod_marca_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicEqualTo(Integer value) {
            addCriterion("cod_marca_vehic =", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicNotEqualTo(Integer value) {
            addCriterion("cod_marca_vehic <>", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicGreaterThan(Integer value) {
            addCriterion("cod_marca_vehic >", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_marca_vehic >=", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicLessThan(Integer value) {
            addCriterion("cod_marca_vehic <", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicLessThanOrEqualTo(Integer value) {
            addCriterion("cod_marca_vehic <=", value, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicIn(List<Integer> values) {
            addCriterion("cod_marca_vehic in", values, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicNotIn(List<Integer> values) {
            addCriterion("cod_marca_vehic not in", values, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicBetween(Integer value1, Integer value2) {
            addCriterion("cod_marca_vehic between", value1, value2, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodMarcaVehicNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_marca_vehic not between", value1, value2, "codMarcaVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicIsNull() {
            addCriterion("cod_color_vehic is null");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicIsNotNull() {
            addCriterion("cod_color_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicEqualTo(Integer value) {
            addCriterion("cod_color_vehic =", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicNotEqualTo(Integer value) {
            addCriterion("cod_color_vehic <>", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicGreaterThan(Integer value) {
            addCriterion("cod_color_vehic >", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicGreaterThanOrEqualTo(Integer value) {
            addCriterion("cod_color_vehic >=", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicLessThan(Integer value) {
            addCriterion("cod_color_vehic <", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicLessThanOrEqualTo(Integer value) {
            addCriterion("cod_color_vehic <=", value, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicIn(List<Integer> values) {
            addCriterion("cod_color_vehic in", values, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicNotIn(List<Integer> values) {
            addCriterion("cod_color_vehic not in", values, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicBetween(Integer value1, Integer value2) {
            addCriterion("cod_color_vehic between", value1, value2, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andCodColorVehicNotBetween(Integer value1, Integer value2) {
            addCriterion("cod_color_vehic not between", value1, value2, "codColorVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicIsNull() {
            addCriterion("clase_vehic is null");
            return (Criteria) this;
        }

        public Criteria andClaseVehicIsNotNull() {
            addCriterion("clase_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andClaseVehicEqualTo(String value) {
            addCriterion("clase_vehic =", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicNotEqualTo(String value) {
            addCriterion("clase_vehic <>", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicGreaterThan(String value) {
            addCriterion("clase_vehic >", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicGreaterThanOrEqualTo(String value) {
            addCriterion("clase_vehic >=", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicLessThan(String value) {
            addCriterion("clase_vehic <", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicLessThanOrEqualTo(String value) {
            addCriterion("clase_vehic <=", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicLike(String value) {
            addCriterion("clase_vehic like", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicNotLike(String value) {
            addCriterion("clase_vehic not like", value, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicIn(List<String> values) {
            addCriterion("clase_vehic in", values, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicNotIn(List<String> values) {
            addCriterion("clase_vehic not in", values, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicBetween(String value1, String value2) {
            addCriterion("clase_vehic between", value1, value2, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andClaseVehicNotBetween(String value1, String value2) {
            addCriterion("clase_vehic not between", value1, value2, "claseVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicIsNull() {
            addCriterion("marca_vehic is null");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicIsNotNull() {
            addCriterion("marca_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicEqualTo(String value) {
            addCriterion("marca_vehic =", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicNotEqualTo(String value) {
            addCriterion("marca_vehic <>", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicGreaterThan(String value) {
            addCriterion("marca_vehic >", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicGreaterThanOrEqualTo(String value) {
            addCriterion("marca_vehic >=", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicLessThan(String value) {
            addCriterion("marca_vehic <", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicLessThanOrEqualTo(String value) {
            addCriterion("marca_vehic <=", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicLike(String value) {
            addCriterion("marca_vehic like", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicNotLike(String value) {
            addCriterion("marca_vehic not like", value, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicIn(List<String> values) {
            addCriterion("marca_vehic in", values, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicNotIn(List<String> values) {
            addCriterion("marca_vehic not in", values, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicBetween(String value1, String value2) {
            addCriterion("marca_vehic between", value1, value2, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicNotBetween(String value1, String value2) {
            addCriterion("marca_vehic not between", value1, value2, "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicIsNull() {
            addCriterion("model_vehic is null");
            return (Criteria) this;
        }

        public Criteria andModelVehicIsNotNull() {
            addCriterion("model_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andModelVehicEqualTo(String value) {
            addCriterion("model_vehic =", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicNotEqualTo(String value) {
            addCriterion("model_vehic <>", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicGreaterThan(String value) {
            addCriterion("model_vehic >", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicGreaterThanOrEqualTo(String value) {
            addCriterion("model_vehic >=", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicLessThan(String value) {
            addCriterion("model_vehic <", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicLessThanOrEqualTo(String value) {
            addCriterion("model_vehic <=", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicLike(String value) {
            addCriterion("model_vehic like", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicNotLike(String value) {
            addCriterion("model_vehic not like", value, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicIn(List<String> values) {
            addCriterion("model_vehic in", values, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicNotIn(List<String> values) {
            addCriterion("model_vehic not in", values, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicBetween(String value1, String value2) {
            addCriterion("model_vehic between", value1, value2, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicNotBetween(String value1, String value2) {
            addCriterion("model_vehic not between", value1, value2, "modelVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicIsNull() {
            addCriterion("placa_vehic is null");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicIsNotNull() {
            addCriterion("placa_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicEqualTo(String value) {
            addCriterion("placa_vehic =", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicNotEqualTo(String value) {
            addCriterion("placa_vehic <>", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicGreaterThan(String value) {
            addCriterion("placa_vehic >", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicGreaterThanOrEqualTo(String value) {
            addCriterion("placa_vehic >=", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicLessThan(String value) {
            addCriterion("placa_vehic <", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicLessThanOrEqualTo(String value) {
            addCriterion("placa_vehic <=", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicLike(String value) {
            addCriterion("placa_vehic like", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicNotLike(String value) {
            addCriterion("placa_vehic not like", value, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicIn(List<String> values) {
            addCriterion("placa_vehic in", values, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicNotIn(List<String> values) {
            addCriterion("placa_vehic not in", values, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicBetween(String value1, String value2) {
            addCriterion("placa_vehic between", value1, value2, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicNotBetween(String value1, String value2) {
            addCriterion("placa_vehic not between", value1, value2, "placaVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicIsNull() {
            addCriterion("color_vehic is null");
            return (Criteria) this;
        }

        public Criteria andColorVehicIsNotNull() {
            addCriterion("color_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andColorVehicEqualTo(String value) {
            addCriterion("color_vehic =", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicNotEqualTo(String value) {
            addCriterion("color_vehic <>", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicGreaterThan(String value) {
            addCriterion("color_vehic >", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicGreaterThanOrEqualTo(String value) {
            addCriterion("color_vehic >=", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicLessThan(String value) {
            addCriterion("color_vehic <", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicLessThanOrEqualTo(String value) {
            addCriterion("color_vehic <=", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicLike(String value) {
            addCriterion("color_vehic like", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicNotLike(String value) {
            addCriterion("color_vehic not like", value, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicIn(List<String> values) {
            addCriterion("color_vehic in", values, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicNotIn(List<String> values) {
            addCriterion("color_vehic not in", values, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicBetween(String value1, String value2) {
            addCriterion("color_vehic between", value1, value2, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicNotBetween(String value1, String value2) {
            addCriterion("color_vehic not between", value1, value2, "colorVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicIsNull() {
            addCriterion("anio_vehic is null");
            return (Criteria) this;
        }

        public Criteria andAnioVehicIsNotNull() {
            addCriterion("anio_vehic is not null");
            return (Criteria) this;
        }

        public Criteria andAnioVehicEqualTo(String value) {
            addCriterion("anio_vehic =", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicNotEqualTo(String value) {
            addCriterion("anio_vehic <>", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicGreaterThan(String value) {
            addCriterion("anio_vehic >", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicGreaterThanOrEqualTo(String value) {
            addCriterion("anio_vehic >=", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicLessThan(String value) {
            addCriterion("anio_vehic <", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicLessThanOrEqualTo(String value) {
            addCriterion("anio_vehic <=", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicLike(String value) {
            addCriterion("anio_vehic like", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicNotLike(String value) {
            addCriterion("anio_vehic not like", value, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicIn(List<String> values) {
            addCriterion("anio_vehic in", values, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicNotIn(List<String> values) {
            addCriterion("anio_vehic not in", values, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicBetween(String value1, String value2) {
            addCriterion("anio_vehic between", value1, value2, "anioVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicNotBetween(String value1, String value2) {
            addCriterion("anio_vehic not between", value1, value2, "anioVehic");
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

        public Criteria andDescTpoInvolucLikeInsensitive(String value) {
            addCriterion("upper(desc_tpo_involuc) like", value.toUpperCase(), "descTpoInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescTpoDocLikeInsensitive(String value) {
            addCriterion("upper(desc_tpo_doc) like", value.toUpperCase(), "descTpoDoc");
            return (Criteria) this;
        }

        public Criteria andNombInvolucLikeInsensitive(String value) {
            addCriterion("upper(nomb_involuc) like", value.toUpperCase(), "nombInvoluc");
            return (Criteria) this;
        }

        public Criteria andEdadInvolucLikeInsensitive(String value) {
            addCriterion("upper(edad_involuc) like", value.toUpperCase(), "edadInvoluc");
            return (Criteria) this;
        }

        public Criteria andNumDocInvolucLikeInsensitive(String value) {
            addCriterion("upper(num_doc_involuc) like", value.toUpperCase(), "numDocInvoluc");
            return (Criteria) this;
        }

        public Criteria andDescObservLikeInsensitive(String value) {
            addCriterion("upper(desc_observ) like", value.toUpperCase(), "descObserv");
            return (Criteria) this;
        }

        public Criteria andClaseVehicLikeInsensitive(String value) {
            addCriterion("upper(clase_vehic) like", value.toUpperCase(), "claseVehic");
            return (Criteria) this;
        }

        public Criteria andMarcaVehicLikeInsensitive(String value) {
            addCriterion("upper(marca_vehic) like", value.toUpperCase(), "marcaVehic");
            return (Criteria) this;
        }

        public Criteria andModelVehicLikeInsensitive(String value) {
            addCriterion("upper(model_vehic) like", value.toUpperCase(), "modelVehic");
            return (Criteria) this;
        }

        public Criteria andPlacaVehicLikeInsensitive(String value) {
            addCriterion("upper(placa_vehic) like", value.toUpperCase(), "placaVehic");
            return (Criteria) this;
        }

        public Criteria andColorVehicLikeInsensitive(String value) {
            addCriterion("upper(color_vehic) like", value.toUpperCase(), "colorVehic");
            return (Criteria) this;
        }

        public Criteria andAnioVehicLikeInsensitive(String value) {
            addCriterion("upper(anio_vehic) like", value.toUpperCase(), "anioVehic");
            return (Criteria) this;
        }

        public Criteria andEstRegLikeInsensitive(String value) {
            addCriterion("upper(est_reg) like", value.toUpperCase(), "estReg");
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