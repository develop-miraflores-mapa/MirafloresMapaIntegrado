package pe.gob.miraflores.mobile.domain.waze.json;

import java.io.Serializable;
import java.util.List;

public class Jam implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1092626776031370329L;

	private String country;
	
	private String city;
	
	private Integer level;
	
	private List<Cordenada> line;
	
	private Integer length;
	
	private String turnType;
	
	private String type;
	
	private String uuid;
	
	private String endNode;
	
	private double speed;
	
	private Integer roadType;
	
	private Integer delay;
	
	private String street;
	
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

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public List<Cordenada> getLine() {
		return line;
	}

	public void setLine(List<Cordenada> line) {
		this.line = line;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}

	public String getTurnType() {
		return turnType;
	}

	public void setTurnType(String turnType) {
		this.turnType = turnType;
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

	public String getEndNode() {
		return endNode;
	}

	public void setEndNode(String endNode) {
		this.endNode = endNode;
	}

	public double getSpeed() {
		return speed;
	}

	public void setSpeed(double speed) {
		this.speed = speed;
	}

	public Integer getRoadType() {
		return roadType;
	}

	public void setRoadType(Integer roadType) {
		this.roadType = roadType;
	}

	public Integer getDelay() {
		return delay;
	}

	public void setDelay(Integer delay) {
		this.delay = delay;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public Long getPubMillis() {
		return pubMillis;
	}

	public void setPubMillis(Long pubMillis) {
		this.pubMillis = pubMillis;
	}
	
	
	
}
