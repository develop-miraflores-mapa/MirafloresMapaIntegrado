package pe.gob.miraflores.mobile.exception;


public class NegocioException extends Exception {

	private static final long serialVersionUID = 8695063539221071817L;

	public NegocioException() {
	}

	public NegocioException(String message) {
		super(message);
	}

	public NegocioException(Throwable cause) {
		super(cause);
	}

	public NegocioException(String message, Throwable cause) {
		super(message, cause);
	}

}