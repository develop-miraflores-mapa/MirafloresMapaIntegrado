package pe.gob.miraflores.mobile.domain.waze.json;

import java.io.Serializable;
import java.util.List;

public class DataWaze implements Serializable{

	private static final long serialVersionUID = 747136379380653101L;

	private List<AlertWaze> alerts;
	
	private Long endTimeMillis;
	
	private Long startTimeMillis;
	
	private String startTime;
	
	private String endTime;
	
	private List<Jam> jams;

	public List<AlertWaze> getAlerts() {
		return alerts;
	}

	public void setAlerts(List<AlertWaze> alerts) {
		this.alerts = alerts;
	}

	public Long getEndTimeMillis() {
		return endTimeMillis;
	}

	public void setEndTimeMillis(Long endTimeMillis) {
		this.endTimeMillis = endTimeMillis;
	}

	public Long getStartTimeMillis() {
		return startTimeMillis;
	}

	public void setStartTimeMillis(Long startTimeMillis) {
		this.startTimeMillis = startTimeMillis;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public List<Jam> getJams() {
		return jams;
	}

	public void setJams(List<Jam> jams) {
		this.jams = jams;
	}

	
	
}
