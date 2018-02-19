package pe.gob.miraflores.mobile.job;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import pe.gob.miraflores.mobile.service.mapaincidencias.MapaIncidenciasService;

//@Service("scheduledProcessor")
public class ScheduledProcessor {
	protected final Log log = LogFactory.getLog(getClass());
	
	@Autowired
	private MapaIncidenciasService mapaIncidenciasService; 
	
//	@Scheduled(fixedDelay = 120000)//en milisegundos
	public void scheduledGrabarJSONRadios() throws Exception{
		mapaIncidenciasService.buildJsonRestDolphinJob();
	}
	
}