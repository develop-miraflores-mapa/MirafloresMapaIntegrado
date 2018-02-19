package pe.gob.miraflores.mobile.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestContoller {

	protected final Log log = LogFactory.getLog(getClass());
	protected static final String BASE_URL_REST = "/rest-calles";
	
}
