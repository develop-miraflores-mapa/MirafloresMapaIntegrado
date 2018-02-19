package pe.gob.miraflores.mobile.domain.waze.json;

import java.io.Serializable;
import java.math.BigDecimal;

public class Cordenada implements Serializable {

	private static final long serialVersionUID = 8960565075039342020L;

	private BigDecimal x;
	
	private BigDecimal y;

	public BigDecimal getX() {
		return x;
	}

	public void setX(BigDecimal x) {
		this.x = x;
	}

	public BigDecimal getY() {
		return y;
	}

	public void setY(BigDecimal y) {
		this.y = y;
	}
	
}
