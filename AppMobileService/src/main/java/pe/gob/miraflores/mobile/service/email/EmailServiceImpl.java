package pe.gob.miraflores.mobile.service.email;


import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmailServiceImpl implements EmailService {

	protected final Log log = LogFactory.getLog(getClass());
	
	@Autowired
	private EmailManager emailManager;
	
	public void sendMail(MailBean bn) throws Exception {
		// TODO Auto-generated method stub
		
//		String[] cc = new String[1];
//		cc[0] = "jose.sanchez@miraflores.gob.pe";
//		bn.setTo(cc);
		
		emailManager.sendMail(bn);
	}

	public void enviarCorreo(String[] arrMails, String subject, String message)
			throws Exception {
		// TODO Auto-generated method stub
		try {
			MailBean email = new MailBean();
			email.setTo(arrMails);
			email.setSubject(subject);
			email.setTextHtml(true);
			email.setText(message);			
	    	this.sendMail(email);
		} catch (Exception sm) { 
			sm.printStackTrace();
		}
	}

	public void enviarCorreo(String[] arrMails, String subject, String message,
			Map<String, Object> mFile) throws Exception {
		// TODO Auto-generated method stub
		try {
			
			MailBean email = new MailBean();
			email.setTo(arrMails);
			email.setSubject(subject);
			email.setTextHtml(true);
			email.setText(message);
			email.setAttachFile(mFile);
			this.sendMail(email);
		} catch (Exception sm) {
			sm.printStackTrace();
		}
	}


	public List<Map<String, Object>> processMail(Date fecEnvioMax,
			String dato1, String dato2) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
