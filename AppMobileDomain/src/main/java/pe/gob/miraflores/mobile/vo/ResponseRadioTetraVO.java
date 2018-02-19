package pe.gob.miraflores.mobile.vo;

import java.io.Serializable;
import java.util.List;

public class ResponseRadioTetraVO implements Serializable{

	private static final long serialVersionUID = 1L;

	private boolean status;
	
	private List<RadioTetraVO> items;

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public List<RadioTetraVO> getItems() {
		return items;
	}

	public void setItems(List<RadioTetraVO> items) {
		this.items = items;
	}
	
	
	
}
