package pe.gob.miraflores.mobile.domain.historico;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class EstadisticaBaseCriteria {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public EstadisticaBaseCriteria() {
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

        public Criteria andIdEstadIsNull() {
            addCriterion("id_estad is null");
            return (Criteria) this;
        }

        public Criteria andIdEstadIsNotNull() {
            addCriterion("id_estad is not null");
            return (Criteria) this;
        }

        public Criteria andIdEstadEqualTo(Long value) {
            addCriterion("id_estad =", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadNotEqualTo(Long value) {
            addCriterion("id_estad <>", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadGreaterThan(Long value) {
            addCriterion("id_estad >", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadGreaterThanOrEqualTo(Long value) {
            addCriterion("id_estad >=", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadLessThan(Long value) {
            addCriterion("id_estad <", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadLessThanOrEqualTo(Long value) {
            addCriterion("id_estad <=", value, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadIn(List<Long> values) {
            addCriterion("id_estad in", values, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadNotIn(List<Long> values) {
            addCriterion("id_estad not in", values, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadBetween(Long value1, Long value2) {
            addCriterion("id_estad between", value1, value2, "idEstad");
            return (Criteria) this;
        }

        public Criteria andIdEstadNotBetween(Long value1, Long value2) {
            addCriterion("id_estad not between", value1, value2, "idEstad");
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

        public Criteria andTipifIsNull() {
            addCriterion("tipif is null");
            return (Criteria) this;
        }

        public Criteria andTipifIsNotNull() {
            addCriterion("tipif is not null");
            return (Criteria) this;
        }

        public Criteria andTipifEqualTo(Integer value) {
            addCriterion("tipif =", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifNotEqualTo(Integer value) {
            addCriterion("tipif <>", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifGreaterThan(Integer value) {
            addCriterion("tipif >", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifGreaterThanOrEqualTo(Integer value) {
            addCriterion("tipif >=", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifLessThan(Integer value) {
            addCriterion("tipif <", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifLessThanOrEqualTo(Integer value) {
            addCriterion("tipif <=", value, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifIn(List<Integer> values) {
            addCriterion("tipif in", values, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifNotIn(List<Integer> values) {
            addCriterion("tipif not in", values, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifBetween(Integer value1, Integer value2) {
            addCriterion("tipif between", value1, value2, "tipif");
            return (Criteria) this;
        }

        public Criteria andTipifNotBetween(Integer value1, Integer value2) {
            addCriterion("tipif not between", value1, value2, "tipif");
            return (Criteria) this;
        }

        public Criteria andZonifIsNull() {
            addCriterion("zonif is null");
            return (Criteria) this;
        }

        public Criteria andZonifIsNotNull() {
            addCriterion("zonif is not null");
            return (Criteria) this;
        }

        public Criteria andZonifEqualTo(Integer value) {
            addCriterion("zonif =", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifNotEqualTo(Integer value) {
            addCriterion("zonif <>", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifGreaterThan(Integer value) {
            addCriterion("zonif >", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifGreaterThanOrEqualTo(Integer value) {
            addCriterion("zonif >=", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifLessThan(Integer value) {
            addCriterion("zonif <", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifLessThanOrEqualTo(Integer value) {
            addCriterion("zonif <=", value, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifIn(List<Integer> values) {
            addCriterion("zonif in", values, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifNotIn(List<Integer> values) {
            addCriterion("zonif not in", values, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifBetween(Integer value1, Integer value2) {
            addCriterion("zonif between", value1, value2, "zonif");
            return (Criteria) this;
        }

        public Criteria andZonifNotBetween(Integer value1, Integer value2) {
            addCriterion("zonif not between", value1, value2, "zonif");
            return (Criteria) this;
        }

        public Criteria andNumerIsNull() {
            addCriterion("numer is null");
            return (Criteria) this;
        }

        public Criteria andNumerIsNotNull() {
            addCriterion("numer is not null");
            return (Criteria) this;
        }

        public Criteria andNumerEqualTo(Integer value) {
            addCriterion("numer =", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerNotEqualTo(Integer value) {
            addCriterion("numer <>", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerGreaterThan(Integer value) {
            addCriterion("numer >", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerGreaterThanOrEqualTo(Integer value) {
            addCriterion("numer >=", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerLessThan(Integer value) {
            addCriterion("numer <", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerLessThanOrEqualTo(Integer value) {
            addCriterion("numer <=", value, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerIn(List<Integer> values) {
            addCriterion("numer in", values, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerNotIn(List<Integer> values) {
            addCriterion("numer not in", values, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerBetween(Integer value1, Integer value2) {
            addCriterion("numer between", value1, value2, "numer");
            return (Criteria) this;
        }

        public Criteria andNumerNotBetween(Integer value1, Integer value2) {
            addCriterion("numer not between", value1, value2, "numer");
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

        public Criteria andCdraEqualTo(Integer value) {
            addCriterion("cdra =", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotEqualTo(Integer value) {
            addCriterion("cdra <>", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraGreaterThan(Integer value) {
            addCriterion("cdra >", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraGreaterThanOrEqualTo(Integer value) {
            addCriterion("cdra >=", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraLessThan(Integer value) {
            addCriterion("cdra <", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraLessThanOrEqualTo(Integer value) {
            addCriterion("cdra <=", value, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraIn(List<Integer> values) {
            addCriterion("cdra in", values, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotIn(List<Integer> values) {
            addCriterion("cdra not in", values, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraBetween(Integer value1, Integer value2) {
            addCriterion("cdra between", value1, value2, "cdra");
            return (Criteria) this;
        }

        public Criteria andCdraNotBetween(Integer value1, Integer value2) {
            addCriterion("cdra not between", value1, value2, "cdra");
            return (Criteria) this;
        }

        public Criteria andHdiaIsNull() {
            addCriterion("hdia is null");
            return (Criteria) this;
        }

        public Criteria andHdiaIsNotNull() {
            addCriterion("hdia is not null");
            return (Criteria) this;
        }

        public Criteria andHdiaEqualTo(Integer value) {
            addCriterion("hdia =", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaNotEqualTo(Integer value) {
            addCriterion("hdia <>", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaGreaterThan(Integer value) {
            addCriterion("hdia >", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaGreaterThanOrEqualTo(Integer value) {
            addCriterion("hdia >=", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaLessThan(Integer value) {
            addCriterion("hdia <", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaLessThanOrEqualTo(Integer value) {
            addCriterion("hdia <=", value, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaIn(List<Integer> values) {
            addCriterion("hdia in", values, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaNotIn(List<Integer> values) {
            addCriterion("hdia not in", values, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaBetween(Integer value1, Integer value2) {
            addCriterion("hdia between", value1, value2, "hdia");
            return (Criteria) this;
        }

        public Criteria andHdiaNotBetween(Integer value1, Integer value2) {
            addCriterion("hdia not between", value1, value2, "hdia");
            return (Criteria) this;
        }

        public Criteria andCdiaIsNull() {
            addCriterion("cdia is null");
            return (Criteria) this;
        }

        public Criteria andCdiaIsNotNull() {
            addCriterion("cdia is not null");
            return (Criteria) this;
        }

        public Criteria andCdiaEqualTo(Integer value) {
            addCriterion("cdia =", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaNotEqualTo(Integer value) {
            addCriterion("cdia <>", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaGreaterThan(Integer value) {
            addCriterion("cdia >", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaGreaterThanOrEqualTo(Integer value) {
            addCriterion("cdia >=", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaLessThan(Integer value) {
            addCriterion("cdia <", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaLessThanOrEqualTo(Integer value) {
            addCriterion("cdia <=", value, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaIn(List<Integer> values) {
            addCriterion("cdia in", values, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaNotIn(List<Integer> values) {
            addCriterion("cdia not in", values, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaBetween(Integer value1, Integer value2) {
            addCriterion("cdia between", value1, value2, "cdia");
            return (Criteria) this;
        }

        public Criteria andCdiaNotBetween(Integer value1, Integer value2) {
            addCriterion("cdia not between", value1, value2, "cdia");
            return (Criteria) this;
        }

        public Criteria andNdiaIsNull() {
            addCriterion("ndia is null");
            return (Criteria) this;
        }

        public Criteria andNdiaIsNotNull() {
            addCriterion("ndia is not null");
            return (Criteria) this;
        }

        public Criteria andNdiaEqualTo(Integer value) {
            addCriterion("ndia =", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaNotEqualTo(Integer value) {
            addCriterion("ndia <>", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaGreaterThan(Integer value) {
            addCriterion("ndia >", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaGreaterThanOrEqualTo(Integer value) {
            addCriterion("ndia >=", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaLessThan(Integer value) {
            addCriterion("ndia <", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaLessThanOrEqualTo(Integer value) {
            addCriterion("ndia <=", value, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaIn(List<Integer> values) {
            addCriterion("ndia in", values, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaNotIn(List<Integer> values) {
            addCriterion("ndia not in", values, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaBetween(Integer value1, Integer value2) {
            addCriterion("ndia between", value1, value2, "ndia");
            return (Criteria) this;
        }

        public Criteria andNdiaNotBetween(Integer value1, Integer value2) {
            addCriterion("ndia not between", value1, value2, "ndia");
            return (Criteria) this;
        }

        public Criteria andCmesIsNull() {
            addCriterion("cmes is null");
            return (Criteria) this;
        }

        public Criteria andCmesIsNotNull() {
            addCriterion("cmes is not null");
            return (Criteria) this;
        }

        public Criteria andCmesEqualTo(Integer value) {
            addCriterion("cmes =", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesNotEqualTo(Integer value) {
            addCriterion("cmes <>", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesGreaterThan(Integer value) {
            addCriterion("cmes >", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesGreaterThanOrEqualTo(Integer value) {
            addCriterion("cmes >=", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesLessThan(Integer value) {
            addCriterion("cmes <", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesLessThanOrEqualTo(Integer value) {
            addCriterion("cmes <=", value, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesIn(List<Integer> values) {
            addCriterion("cmes in", values, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesNotIn(List<Integer> values) {
            addCriterion("cmes not in", values, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesBetween(Integer value1, Integer value2) {
            addCriterion("cmes between", value1, value2, "cmes");
            return (Criteria) this;
        }

        public Criteria andCmesNotBetween(Integer value1, Integer value2) {
            addCriterion("cmes not between", value1, value2, "cmes");
            return (Criteria) this;
        }

        public Criteria andAnioIsNull() {
            addCriterion("anio is null");
            return (Criteria) this;
        }

        public Criteria andAnioIsNotNull() {
            addCriterion("anio is not null");
            return (Criteria) this;
        }

        public Criteria andAnioEqualTo(Integer value) {
            addCriterion("anio =", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioNotEqualTo(Integer value) {
            addCriterion("anio <>", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioGreaterThan(Integer value) {
            addCriterion("anio >", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioGreaterThanOrEqualTo(Integer value) {
            addCriterion("anio >=", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioLessThan(Integer value) {
            addCriterion("anio <", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioLessThanOrEqualTo(Integer value) {
            addCriterion("anio <=", value, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioIn(List<Integer> values) {
            addCriterion("anio in", values, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioNotIn(List<Integer> values) {
            addCriterion("anio not in", values, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioBetween(Integer value1, Integer value2) {
            addCriterion("anio between", value1, value2, "anio");
            return (Criteria) this;
        }

        public Criteria andAnioNotBetween(Integer value1, Integer value2) {
            addCriterion("anio not between", value1, value2, "anio");
            return (Criteria) this;
        }

        public Criteria andCseverIsNull() {
            addCriterion("csever is null");
            return (Criteria) this;
        }

        public Criteria andCseverIsNotNull() {
            addCriterion("csever is not null");
            return (Criteria) this;
        }

        public Criteria andCseverEqualTo(Integer value) {
            addCriterion("csever =", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverNotEqualTo(Integer value) {
            addCriterion("csever <>", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverGreaterThan(Integer value) {
            addCriterion("csever >", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverGreaterThanOrEqualTo(Integer value) {
            addCriterion("csever >=", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverLessThan(Integer value) {
            addCriterion("csever <", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverLessThanOrEqualTo(Integer value) {
            addCriterion("csever <=", value, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverIn(List<Integer> values) {
            addCriterion("csever in", values, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverNotIn(List<Integer> values) {
            addCriterion("csever not in", values, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverBetween(Integer value1, Integer value2) {
            addCriterion("csever between", value1, value2, "csever");
            return (Criteria) this;
        }

        public Criteria andCseverNotBetween(Integer value1, Integer value2) {
            addCriterion("csever not between", value1, value2, "csever");
            return (Criteria) this;
        }

        public Criteria andCestadIsNull() {
            addCriterion("cestad is null");
            return (Criteria) this;
        }

        public Criteria andCestadIsNotNull() {
            addCriterion("cestad is not null");
            return (Criteria) this;
        }

        public Criteria andCestadEqualTo(Integer value) {
            addCriterion("cestad =", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadNotEqualTo(Integer value) {
            addCriterion("cestad <>", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadGreaterThan(Integer value) {
            addCriterion("cestad >", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadGreaterThanOrEqualTo(Integer value) {
            addCriterion("cestad >=", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadLessThan(Integer value) {
            addCriterion("cestad <", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadLessThanOrEqualTo(Integer value) {
            addCriterion("cestad <=", value, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadIn(List<Integer> values) {
            addCriterion("cestad in", values, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadNotIn(List<Integer> values) {
            addCriterion("cestad not in", values, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadBetween(Integer value1, Integer value2) {
            addCriterion("cestad between", value1, value2, "cestad");
            return (Criteria) this;
        }

        public Criteria andCestadNotBetween(Integer value1, Integer value2) {
            addCriterion("cestad not between", value1, value2, "cestad");
            return (Criteria) this;
        }

        public Criteria andCmodalIsNull() {
            addCriterion("cmodal is null");
            return (Criteria) this;
        }

        public Criteria andCmodalIsNotNull() {
            addCriterion("cmodal is not null");
            return (Criteria) this;
        }

        public Criteria andCmodalEqualTo(Integer value) {
            addCriterion("cmodal =", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalNotEqualTo(Integer value) {
            addCriterion("cmodal <>", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalGreaterThan(Integer value) {
            addCriterion("cmodal >", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalGreaterThanOrEqualTo(Integer value) {
            addCriterion("cmodal >=", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalLessThan(Integer value) {
            addCriterion("cmodal <", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalLessThanOrEqualTo(Integer value) {
            addCriterion("cmodal <=", value, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalIn(List<Integer> values) {
            addCriterion("cmodal in", values, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalNotIn(List<Integer> values) {
            addCriterion("cmodal not in", values, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalBetween(Integer value1, Integer value2) {
            addCriterion("cmodal between", value1, value2, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmodalNotBetween(Integer value1, Integer value2) {
            addCriterion("cmodal not between", value1, value2, "cmodal");
            return (Criteria) this;
        }

        public Criteria andCmotivIsNull() {
            addCriterion("cmotiv is null");
            return (Criteria) this;
        }

        public Criteria andCmotivIsNotNull() {
            addCriterion("cmotiv is not null");
            return (Criteria) this;
        }

        public Criteria andCmotivEqualTo(Integer value) {
            addCriterion("cmotiv =", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivNotEqualTo(Integer value) {
            addCriterion("cmotiv <>", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivGreaterThan(Integer value) {
            addCriterion("cmotiv >", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivGreaterThanOrEqualTo(Integer value) {
            addCriterion("cmotiv >=", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivLessThan(Integer value) {
            addCriterion("cmotiv <", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivLessThanOrEqualTo(Integer value) {
            addCriterion("cmotiv <=", value, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivIn(List<Integer> values) {
            addCriterion("cmotiv in", values, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivNotIn(List<Integer> values) {
            addCriterion("cmotiv not in", values, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivBetween(Integer value1, Integer value2) {
            addCriterion("cmotiv between", value1, value2, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andCmotivNotBetween(Integer value1, Integer value2) {
            addCriterion("cmotiv not between", value1, value2, "cmotiv");
            return (Criteria) this;
        }

        public Criteria andFlghallIsNull() {
            addCriterion("flghall is null");
            return (Criteria) this;
        }

        public Criteria andFlghallIsNotNull() {
            addCriterion("flghall is not null");
            return (Criteria) this;
        }

        public Criteria andFlghallEqualTo(Integer value) {
            addCriterion("flghall =", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallNotEqualTo(Integer value) {
            addCriterion("flghall <>", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallGreaterThan(Integer value) {
            addCriterion("flghall >", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallGreaterThanOrEqualTo(Integer value) {
            addCriterion("flghall >=", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallLessThan(Integer value) {
            addCriterion("flghall <", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallLessThanOrEqualTo(Integer value) {
            addCriterion("flghall <=", value, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallIn(List<Integer> values) {
            addCriterion("flghall in", values, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallNotIn(List<Integer> values) {
            addCriterion("flghall not in", values, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallBetween(Integer value1, Integer value2) {
            addCriterion("flghall between", value1, value2, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlghallNotBetween(Integer value1, Integer value2) {
            addCriterion("flghall not between", value1, value2, "flghall");
            return (Criteria) this;
        }

        public Criteria andFlgsexoIsNull() {
            addCriterion("flgsexo is null");
            return (Criteria) this;
        }

        public Criteria andFlgsexoIsNotNull() {
            addCriterion("flgsexo is not null");
            return (Criteria) this;
        }

        public Criteria andFlgsexoEqualTo(Integer value) {
            addCriterion("flgsexo =", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoNotEqualTo(Integer value) {
            addCriterion("flgsexo <>", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoGreaterThan(Integer value) {
            addCriterion("flgsexo >", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoGreaterThanOrEqualTo(Integer value) {
            addCriterion("flgsexo >=", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoLessThan(Integer value) {
            addCriterion("flgsexo <", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoLessThanOrEqualTo(Integer value) {
            addCriterion("flgsexo <=", value, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoIn(List<Integer> values) {
            addCriterion("flgsexo in", values, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoNotIn(List<Integer> values) {
            addCriterion("flgsexo not in", values, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoBetween(Integer value1, Integer value2) {
            addCriterion("flgsexo between", value1, value2, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andFlgsexoNotBetween(Integer value1, Integer value2) {
            addCriterion("flgsexo not between", value1, value2, "flgsexo");
            return (Criteria) this;
        }

        public Criteria andCmedIsNull() {
            addCriterion("cmed is null");
            return (Criteria) this;
        }

        public Criteria andCmedIsNotNull() {
            addCriterion("cmed is not null");
            return (Criteria) this;
        }

        public Criteria andCmedEqualTo(Integer value) {
            addCriterion("cmed =", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedNotEqualTo(Integer value) {
            addCriterion("cmed <>", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedGreaterThan(Integer value) {
            addCriterion("cmed >", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedGreaterThanOrEqualTo(Integer value) {
            addCriterion("cmed >=", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedLessThan(Integer value) {
            addCriterion("cmed <", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedLessThanOrEqualTo(Integer value) {
            addCriterion("cmed <=", value, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedIn(List<Integer> values) {
            addCriterion("cmed in", values, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedNotIn(List<Integer> values) {
            addCriterion("cmed not in", values, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedBetween(Integer value1, Integer value2) {
            addCriterion("cmed between", value1, value2, "cmed");
            return (Criteria) this;
        }

        public Criteria andCmedNotBetween(Integer value1, Integer value2) {
            addCriterion("cmed not between", value1, value2, "cmed");
            return (Criteria) this;
        }

        public Criteria andLatIsNull() {
            addCriterion("lat is null");
            return (Criteria) this;
        }

        public Criteria andLatIsNotNull() {
            addCriterion("lat is not null");
            return (Criteria) this;
        }

        public Criteria andLatEqualTo(Float value) {
            addCriterion("lat =", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatNotEqualTo(Float value) {
            addCriterion("lat <>", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatGreaterThan(Float value) {
            addCriterion("lat >", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatGreaterThanOrEqualTo(Float value) {
            addCriterion("lat >=", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatLessThan(Float value) {
            addCriterion("lat <", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatLessThanOrEqualTo(Float value) {
            addCriterion("lat <=", value, "lat");
            return (Criteria) this;
        }

        public Criteria andLatIn(List<Float> values) {
            addCriterion("lat in", values, "lat");
            return (Criteria) this;
        }

        public Criteria andLatNotIn(List<Float> values) {
            addCriterion("lat not in", values, "lat");
            return (Criteria) this;
        }

        public Criteria andLatBetween(Float value1, Float value2) {
            addCriterion("lat between", value1, value2, "lat");
            return (Criteria) this;
        }

        public Criteria andLatNotBetween(Float value1, Float value2) {
            addCriterion("lat not between", value1, value2, "lat");
            return (Criteria) this;
        }

        public Criteria andLngIsNull() {
            addCriterion("lng is null");
            return (Criteria) this;
        }

        public Criteria andLngIsNotNull() {
            addCriterion("lng is not null");
            return (Criteria) this;
        }

        public Criteria andLngEqualTo(Float value) {
            addCriterion("lng =", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngNotEqualTo(Float value) {
            addCriterion("lng <>", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngGreaterThan(Float value) {
            addCriterion("lng >", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngGreaterThanOrEqualTo(Float value) {
            addCriterion("lng >=", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngLessThan(Float value) {
            addCriterion("lng <", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngLessThanOrEqualTo(Float value) {
            addCriterion("lng <=", value, "lng");
            return (Criteria) this;
        }

        public Criteria andLngIn(List<Float> values) {
            addCriterion("lng in", values, "lng");
            return (Criteria) this;
        }

        public Criteria andLngNotIn(List<Float> values) {
            addCriterion("lng not in", values, "lng");
            return (Criteria) this;
        }

        public Criteria andLngBetween(Float value1, Float value2) {
            addCriterion("lng between", value1, value2, "lng");
            return (Criteria) this;
        }

        public Criteria andLngNotBetween(Float value1, Float value2) {
            addCriterion("lng not between", value1, value2, "lng");
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

        public Criteria andFregIsNull() {
            addCriterion("freg is null");
            return (Criteria) this;
        }

        public Criteria andFregIsNotNull() {
            addCriterion("freg is not null");
            return (Criteria) this;
        }

        public Criteria andFregEqualTo(Date value) {
            addCriterion("freg =", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregNotEqualTo(Date value) {
            addCriterion("freg <>", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregGreaterThan(Date value) {
            addCriterion("freg >", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregGreaterThanOrEqualTo(Date value) {
            addCriterion("freg >=", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregLessThan(Date value) {
            addCriterion("freg <", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregLessThanOrEqualTo(Date value) {
            addCriterion("freg <=", value, "freg");
            return (Criteria) this;
        }

        public Criteria andFregIn(List<Date> values) {
            addCriterion("freg in", values, "freg");
            return (Criteria) this;
        }

        public Criteria andFregNotIn(List<Date> values) {
            addCriterion("freg not in", values, "freg");
            return (Criteria) this;
        }

        public Criteria andFregBetween(Date value1, Date value2) {
            addCriterion("freg between", value1, value2, "freg");
            return (Criteria) this;
        }

        public Criteria andFregNotBetween(Date value1, Date value2) {
            addCriterion("freg not between", value1, value2, "freg");
            return (Criteria) this;
        }

        public Criteria andUnidadIsNull() {
            addCriterion("unidad is null");
            return (Criteria) this;
        }

        public Criteria andUnidadIsNotNull() {
            addCriterion("unidad is not null");
            return (Criteria) this;
        }

        public Criteria andUnidadEqualTo(String value) {
            addCriterion("unidad =", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadNotEqualTo(String value) {
            addCriterion("unidad <>", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadGreaterThan(String value) {
            addCriterion("unidad >", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadGreaterThanOrEqualTo(String value) {
            addCriterion("unidad >=", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadLessThan(String value) {
            addCriterion("unidad <", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadLessThanOrEqualTo(String value) {
            addCriterion("unidad <=", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadLike(String value) {
            addCriterion("unidad like", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadNotLike(String value) {
            addCriterion("unidad not like", value, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadIn(List<String> values) {
            addCriterion("unidad in", values, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadNotIn(List<String> values) {
            addCriterion("unidad not in", values, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadBetween(String value1, String value2) {
            addCriterion("unidad between", value1, value2, "unidad");
            return (Criteria) this;
        }

        public Criteria andUnidadNotBetween(String value1, String value2) {
            addCriterion("unidad not between", value1, value2, "unidad");
            return (Criteria) this;
        }

        public Criteria andCasoIsNull() {
            addCriterion("caso is null");
            return (Criteria) this;
        }

        public Criteria andCasoIsNotNull() {
            addCriterion("caso is not null");
            return (Criteria) this;
        }

        public Criteria andCasoEqualTo(String value) {
            addCriterion("caso =", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoNotEqualTo(String value) {
            addCriterion("caso <>", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoGreaterThan(String value) {
            addCriterion("caso >", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoGreaterThanOrEqualTo(String value) {
            addCriterion("caso >=", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoLessThan(String value) {
            addCriterion("caso <", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoLessThanOrEqualTo(String value) {
            addCriterion("caso <=", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoLike(String value) {
            addCriterion("caso like", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoNotLike(String value) {
            addCriterion("caso not like", value, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoIn(List<String> values) {
            addCriterion("caso in", values, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoNotIn(List<String> values) {
            addCriterion("caso not in", values, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoBetween(String value1, String value2) {
            addCriterion("caso between", value1, value2, "caso");
            return (Criteria) this;
        }

        public Criteria andCasoNotBetween(String value1, String value2) {
            addCriterion("caso not between", value1, value2, "caso");
            return (Criteria) this;
        }

        public Criteria andSubcasoIsNull() {
            addCriterion("subcaso is null");
            return (Criteria) this;
        }

        public Criteria andSubcasoIsNotNull() {
            addCriterion("subcaso is not null");
            return (Criteria) this;
        }

        public Criteria andSubcasoEqualTo(String value) {
            addCriterion("subcaso =", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoNotEqualTo(String value) {
            addCriterion("subcaso <>", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoGreaterThan(String value) {
            addCriterion("subcaso >", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoGreaterThanOrEqualTo(String value) {
            addCriterion("subcaso >=", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoLessThan(String value) {
            addCriterion("subcaso <", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoLessThanOrEqualTo(String value) {
            addCriterion("subcaso <=", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoLike(String value) {
            addCriterion("subcaso like", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoNotLike(String value) {
            addCriterion("subcaso not like", value, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoIn(List<String> values) {
            addCriterion("subcaso in", values, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoNotIn(List<String> values) {
            addCriterion("subcaso not in", values, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoBetween(String value1, String value2) {
            addCriterion("subcaso between", value1, value2, "subcaso");
            return (Criteria) this;
        }

        public Criteria andSubcasoNotBetween(String value1, String value2) {
            addCriterion("subcaso not between", value1, value2, "subcaso");
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

        public Criteria andSeveridadIsNull() {
            addCriterion("severidad is null");
            return (Criteria) this;
        }

        public Criteria andSeveridadIsNotNull() {
            addCriterion("severidad is not null");
            return (Criteria) this;
        }

        public Criteria andSeveridadEqualTo(String value) {
            addCriterion("severidad =", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadNotEqualTo(String value) {
            addCriterion("severidad <>", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadGreaterThan(String value) {
            addCriterion("severidad >", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadGreaterThanOrEqualTo(String value) {
            addCriterion("severidad >=", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadLessThan(String value) {
            addCriterion("severidad <", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadLessThanOrEqualTo(String value) {
            addCriterion("severidad <=", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadLike(String value) {
            addCriterion("severidad like", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadNotLike(String value) {
            addCriterion("severidad not like", value, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadIn(List<String> values) {
            addCriterion("severidad in", values, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadNotIn(List<String> values) {
            addCriterion("severidad not in", values, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadBetween(String value1, String value2) {
            addCriterion("severidad between", value1, value2, "severidad");
            return (Criteria) this;
        }

        public Criteria andSeveridadNotBetween(String value1, String value2) {
            addCriterion("severidad not between", value1, value2, "severidad");
            return (Criteria) this;
        }

        public Criteria andEstadoIsNull() {
            addCriterion("estado is null");
            return (Criteria) this;
        }

        public Criteria andEstadoIsNotNull() {
            addCriterion("estado is not null");
            return (Criteria) this;
        }

        public Criteria andEstadoEqualTo(String value) {
            addCriterion("estado =", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoNotEqualTo(String value) {
            addCriterion("estado <>", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoGreaterThan(String value) {
            addCriterion("estado >", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoGreaterThanOrEqualTo(String value) {
            addCriterion("estado >=", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoLessThan(String value) {
            addCriterion("estado <", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoLessThanOrEqualTo(String value) {
            addCriterion("estado <=", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoLike(String value) {
            addCriterion("estado like", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoNotLike(String value) {
            addCriterion("estado not like", value, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoIn(List<String> values) {
            addCriterion("estado in", values, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoNotIn(List<String> values) {
            addCriterion("estado not in", values, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoBetween(String value1, String value2) {
            addCriterion("estado between", value1, value2, "estado");
            return (Criteria) this;
        }

        public Criteria andEstadoNotBetween(String value1, String value2) {
            addCriterion("estado not between", value1, value2, "estado");
            return (Criteria) this;
        }

        public Criteria andSubestadoIsNull() {
            addCriterion("subestado is null");
            return (Criteria) this;
        }

        public Criteria andSubestadoIsNotNull() {
            addCriterion("subestado is not null");
            return (Criteria) this;
        }

        public Criteria andSubestadoEqualTo(String value) {
            addCriterion("subestado =", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoNotEqualTo(String value) {
            addCriterion("subestado <>", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoGreaterThan(String value) {
            addCriterion("subestado >", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoGreaterThanOrEqualTo(String value) {
            addCriterion("subestado >=", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoLessThan(String value) {
            addCriterion("subestado <", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoLessThanOrEqualTo(String value) {
            addCriterion("subestado <=", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoLike(String value) {
            addCriterion("subestado like", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoNotLike(String value) {
            addCriterion("subestado not like", value, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoIn(List<String> values) {
            addCriterion("subestado in", values, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoNotIn(List<String> values) {
            addCriterion("subestado not in", values, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoBetween(String value1, String value2) {
            addCriterion("subestado between", value1, value2, "subestado");
            return (Criteria) this;
        }

        public Criteria andSubestadoNotBetween(String value1, String value2) {
            addCriterion("subestado not between", value1, value2, "subestado");
            return (Criteria) this;
        }

        public Criteria andModalidadIsNull() {
            addCriterion("modalidad is null");
            return (Criteria) this;
        }

        public Criteria andModalidadIsNotNull() {
            addCriterion("modalidad is not null");
            return (Criteria) this;
        }

        public Criteria andModalidadEqualTo(String value) {
            addCriterion("modalidad =", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadNotEqualTo(String value) {
            addCriterion("modalidad <>", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadGreaterThan(String value) {
            addCriterion("modalidad >", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadGreaterThanOrEqualTo(String value) {
            addCriterion("modalidad >=", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadLessThan(String value) {
            addCriterion("modalidad <", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadLessThanOrEqualTo(String value) {
            addCriterion("modalidad <=", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadLike(String value) {
            addCriterion("modalidad like", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadNotLike(String value) {
            addCriterion("modalidad not like", value, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadIn(List<String> values) {
            addCriterion("modalidad in", values, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadNotIn(List<String> values) {
            addCriterion("modalidad not in", values, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadBetween(String value1, String value2) {
            addCriterion("modalidad between", value1, value2, "modalidad");
            return (Criteria) this;
        }

        public Criteria andModalidadNotBetween(String value1, String value2) {
            addCriterion("modalidad not between", value1, value2, "modalidad");
            return (Criteria) this;
        }

        public Criteria andViaIsNull() {
            addCriterion("via is null");
            return (Criteria) this;
        }

        public Criteria andViaIsNotNull() {
            addCriterion("via is not null");
            return (Criteria) this;
        }

        public Criteria andViaEqualTo(String value) {
            addCriterion("via =", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaNotEqualTo(String value) {
            addCriterion("via <>", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaGreaterThan(String value) {
            addCriterion("via >", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaGreaterThanOrEqualTo(String value) {
            addCriterion("via >=", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaLessThan(String value) {
            addCriterion("via <", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaLessThanOrEqualTo(String value) {
            addCriterion("via <=", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaLike(String value) {
            addCriterion("via like", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaNotLike(String value) {
            addCriterion("via not like", value, "via");
            return (Criteria) this;
        }

        public Criteria andViaIn(List<String> values) {
            addCriterion("via in", values, "via");
            return (Criteria) this;
        }

        public Criteria andViaNotIn(List<String> values) {
            addCriterion("via not in", values, "via");
            return (Criteria) this;
        }

        public Criteria andViaBetween(String value1, String value2) {
            addCriterion("via between", value1, value2, "via");
            return (Criteria) this;
        }

        public Criteria andViaNotBetween(String value1, String value2) {
            addCriterion("via not between", value1, value2, "via");
            return (Criteria) this;
        }

        public Criteria andDdiaIsNull() {
            addCriterion("ddia is null");
            return (Criteria) this;
        }

        public Criteria andDdiaIsNotNull() {
            addCriterion("ddia is not null");
            return (Criteria) this;
        }

        public Criteria andDdiaEqualTo(String value) {
            addCriterion("ddia =", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaNotEqualTo(String value) {
            addCriterion("ddia <>", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaGreaterThan(String value) {
            addCriterion("ddia >", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaGreaterThanOrEqualTo(String value) {
            addCriterion("ddia >=", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaLessThan(String value) {
            addCriterion("ddia <", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaLessThanOrEqualTo(String value) {
            addCriterion("ddia <=", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaLike(String value) {
            addCriterion("ddia like", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaNotLike(String value) {
            addCriterion("ddia not like", value, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaIn(List<String> values) {
            addCriterion("ddia in", values, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaNotIn(List<String> values) {
            addCriterion("ddia not in", values, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaBetween(String value1, String value2) {
            addCriterion("ddia between", value1, value2, "ddia");
            return (Criteria) this;
        }

        public Criteria andDdiaNotBetween(String value1, String value2) {
            addCriterion("ddia not between", value1, value2, "ddia");
            return (Criteria) this;
        }

        public Criteria andDmesIsNull() {
            addCriterion("dmes is null");
            return (Criteria) this;
        }

        public Criteria andDmesIsNotNull() {
            addCriterion("dmes is not null");
            return (Criteria) this;
        }

        public Criteria andDmesEqualTo(String value) {
            addCriterion("dmes =", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesNotEqualTo(String value) {
            addCriterion("dmes <>", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesGreaterThan(String value) {
            addCriterion("dmes >", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesGreaterThanOrEqualTo(String value) {
            addCriterion("dmes >=", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesLessThan(String value) {
            addCriterion("dmes <", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesLessThanOrEqualTo(String value) {
            addCriterion("dmes <=", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesLike(String value) {
            addCriterion("dmes like", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesNotLike(String value) {
            addCriterion("dmes not like", value, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesIn(List<String> values) {
            addCriterion("dmes in", values, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesNotIn(List<String> values) {
            addCriterion("dmes not in", values, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesBetween(String value1, String value2) {
            addCriterion("dmes between", value1, value2, "dmes");
            return (Criteria) this;
        }

        public Criteria andDmesNotBetween(String value1, String value2) {
            addCriterion("dmes not between", value1, value2, "dmes");
            return (Criteria) this;
        }

        public Criteria andMedioIsNull() {
            addCriterion("medio is null");
            return (Criteria) this;
        }

        public Criteria andMedioIsNotNull() {
            addCriterion("medio is not null");
            return (Criteria) this;
        }

        public Criteria andMedioEqualTo(String value) {
            addCriterion("medio =", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioNotEqualTo(String value) {
            addCriterion("medio <>", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioGreaterThan(String value) {
            addCriterion("medio >", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioGreaterThanOrEqualTo(String value) {
            addCriterion("medio >=", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioLessThan(String value) {
            addCriterion("medio <", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioLessThanOrEqualTo(String value) {
            addCriterion("medio <=", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioLike(String value) {
            addCriterion("medio like", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioNotLike(String value) {
            addCriterion("medio not like", value, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioIn(List<String> values) {
            addCriterion("medio in", values, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioNotIn(List<String> values) {
            addCriterion("medio not in", values, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioBetween(String value1, String value2) {
            addCriterion("medio between", value1, value2, "medio");
            return (Criteria) this;
        }

        public Criteria andMedioNotBetween(String value1, String value2) {
            addCriterion("medio not between", value1, value2, "medio");
            return (Criteria) this;
        }

        public Criteria andUnidadLikeInsensitive(String value) {
            addCriterion("upper(unidad) like", value.toUpperCase(), "unidad");
            return (Criteria) this;
        }

        public Criteria andCasoLikeInsensitive(String value) {
            addCriterion("upper(caso) like", value.toUpperCase(), "caso");
            return (Criteria) this;
        }

        public Criteria andSubcasoLikeInsensitive(String value) {
            addCriterion("upper(subcaso) like", value.toUpperCase(), "subcaso");
            return (Criteria) this;
        }

        public Criteria andAreaLikeInsensitive(String value) {
            addCriterion("upper(area) like", value.toUpperCase(), "area");
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

        public Criteria andSeveridadLikeInsensitive(String value) {
            addCriterion("upper(severidad) like", value.toUpperCase(), "severidad");
            return (Criteria) this;
        }

        public Criteria andEstadoLikeInsensitive(String value) {
            addCriterion("upper(estado) like", value.toUpperCase(), "estado");
            return (Criteria) this;
        }

        public Criteria andSubestadoLikeInsensitive(String value) {
            addCriterion("upper(subestado) like", value.toUpperCase(), "subestado");
            return (Criteria) this;
        }

        public Criteria andModalidadLikeInsensitive(String value) {
            addCriterion("upper(modalidad) like", value.toUpperCase(), "modalidad");
            return (Criteria) this;
        }

        public Criteria andViaLikeInsensitive(String value) {
            addCriterion("upper(via) like", value.toUpperCase(), "via");
            return (Criteria) this;
        }

        public Criteria andDdiaLikeInsensitive(String value) {
            addCriterion("upper(ddia) like", value.toUpperCase(), "ddia");
            return (Criteria) this;
        }

        public Criteria andDmesLikeInsensitive(String value) {
            addCriterion("upper(dmes) like", value.toUpperCase(), "dmes");
            return (Criteria) this;
        }

        public Criteria andMedioLikeInsensitive(String value) {
            addCriterion("upper(medio) like", value.toUpperCase(), "medio");
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