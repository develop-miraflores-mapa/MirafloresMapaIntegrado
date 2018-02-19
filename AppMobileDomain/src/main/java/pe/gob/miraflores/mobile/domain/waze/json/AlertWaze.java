package pe.gob.miraflores.mobile.domain.waze.json;

import java.io.Serializable;

public class AlertWaze implements Serializable{


	private static final long serialVersionUID = 7544888394154316473L;

	private String country;
	
	private String city;
	
	private Integer  reportRating;
	
	private Integer  confidence;
	
	private Integer  reliability;
	
	private String type;
	
	private String uuid;
	
	private Integer  roadType;
	
	private Integer  magvar;
	
	private String  subtype;
	
	private String  street;
	
	private String  reportDescription;
	
	private Cordenada location;
	
	private Long pubMillis;

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getReportRating() {
		return reportRating;
	}

	public void setReportRating(Integer reportRating) {
		this.reportRating = reportRating;
	}

	public Integer getConfidence() {
		return confidence;
	}

	public void setConfidence(Integer confidence) {
		this.confidence = confidence;
	}

	public Integer getReliability() {
		return reliability;
	}

	public void setReliability(Integer reliability) {
		this.reliability = reliability;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public Integer getRoadType() {
		return roadType;
	}

	public void setRoadType(Integer roadType) {
		this.roadType = roadType;
	}

	public Integer getMagvar() {
		return magvar;
	}

	public void setMagvar(Integer magvar) {
		this.magvar = magvar;
	}

	public String getSubtype() {
		return subtype;
	}

	public void setSubtype(String subtype) {
		this.subtype = subtype;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getReportDescription() {
		return reportDescription;
	}

	public void setReportDescription(String reportDescription) {
		this.reportDescription = reportDescription;
	}

	public Cordenada getLocation() {
		return location;
	}

	public void setLocation(Cordenada location) {
		this.location = location;
	}

	public Long getPubMillis() {
		return pubMillis;
	}

	public void setPubMillis(Long pubMillis) {
		this.pubMillis = pubMillis;
	}
}
