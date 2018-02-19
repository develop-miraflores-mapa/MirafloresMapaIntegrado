package pe.gob.miraflores.mobile.service.email;

import java.util.Date;
import java.util.List;
import java.util.Map;


public interface EmailService {
	public void sendMail(MailBean bn) throws Exception;
	public void enviarCorreo(String[] arrMails,String subject, String message)  throws Exception;
	public void enviarCorreo(String[] arrMails,String subject, String message,Map<String,Object> mFile)  throws Exception;
	public List<Map<String,Object>> processMail(Date fecEnvioMax,String dato1,String dato2) throws Exception;
}
