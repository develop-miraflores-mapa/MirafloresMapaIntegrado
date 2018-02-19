package pe.gob.miraflores.mobile.service.email;

import java.io.File;



import java.util.Date;
import java.util.Properties;
import java.util.Iterator;
import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.mail.javamail.JavaMailSenderImpl;

public class EmailManager extends JavaMailSenderImpl {
	
	private static final Log log = LogFactory.getLog(EmailManager.class);
	
	private String from;
	private String mailMasive;
	
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getMailMasive() {
		return mailMasive;
	}
	public void setMailMasive(String mailMasive) {
		this.mailMasive = mailMasive;
	}
	
	
	public void sendMail(MailBean bn) throws Exception {
		Properties prop = new Properties();
		prop.put("mail.smtp.host", this.getHost());
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.starttls.enable","true");
		
		MimeMessage message = this.createMimeMessage();
		message.setHeader("Content-Type", "text/html; charset=UTF-8");
		SMTPAuthentication auth = new SMTPAuthentication(this.getUsername(),this.getPassword());

		this.setJavaMailProperties(prop);
		
		message.setFrom(new InternetAddress(from));
		message.setSubject(bn.getSubject(), "UTF-8");
		
		MimeBodyPart mbp1 = new MimeBodyPart();
		mbp1.setContent(bn.getText(), "text/html");
		Multipart mp = new MimeMultipart();
		mp.addBodyPart(mbp1);
		MimeBodyPart mbp2 = null;
		FileDataSource fds = null;
		if (bn.getAttachFile()!=null && bn.getAttachFile().size()>0) {
			Iterator<?> it = bn.getAttachFile().keySet().iterator();
			while (it.hasNext()) {
				Object key = it.next();
				Object file = bn.getAttachFile().get(key);
				if (ClassUtils.isAssignable(file.getClass(), File.class)) {
					File attach = (File) file;
					mbp2 = new MimeBodyPart();
					fds = new FileDataSource(attach);
					mbp2.setDataHandler(new DataHandler(fds));
					mbp2.setFileName(fds.getName());
					mp.addBodyPart(mbp2);
				} else {
					if (ClassUtils.isAssignable(file.getClass(), String.class)) {
						File attach = new File((String) file);
						mbp2 = new MimeBodyPart();
						fds = new FileDataSource(attach);
						mbp2.setDataHandler(new DataHandler(fds));
						mbp2.setFileName(fds.getName());
						mp.addBodyPart(mbp2);
					} else {
					}
				}
			
			}
		}
		
		message.setContent(mp);
		message.setSentDate(new Date());
		
		if (bn.getTo() != null) {
			InternetAddress[] address = new InternetAddress[bn.getTo().length];
			for (int i = 0; i < bn.getTo().length; i++) {
				address[i] = new InternetAddress(bn.getTo()[i]);
			}
			message.setRecipients(Message.RecipientType.TO,address);
		}
		
		if (bn.getBcc() != null) {
			InternetAddress[] address = new InternetAddress[bn.getBcc().length];
			for (int i = 0; i < bn.getBcc().length; i++) {
				address[i] = new InternetAddress(bn.getBcc()[i]);
			}
			message.setRecipients(Message.RecipientType.BCC,address);
		}
		
		if(bn.getReplyto()!=null && bn.getReplyto().length>0){
			InternetAddress[] addressReply = new InternetAddress[1];
			addressReply[0] = new InternetAddress(bn.getReplyto()[0]);
			message.setReplyTo(addressReply);	
		}
		
		if(this.getMailMasive()!=null && !this.getMailMasive().equals("")){
			InternetAddress[] address = new InternetAddress[1];
			address[0] = new InternetAddress(this.getMailMasive());
			message.setRecipients(Message.RecipientType.TO,address);
		}
		
		this.send(message);
		log.info("[GenericMail :: Proccess] Mail sended");
	}

}

class SMTPAuthentication extends javax.mail.Authenticator {

	String user = null;
	String clave = null;

	public SMTPAuthentication(String usuario, String clave) {
		// TODO Auto-generated constructor stub
		this.user = usuario;
		this.clave = clave;
	}

	public PasswordAuthentication getPasswordAuthentication() {

		String username = user;
		String password = clave;
		return new PasswordAuthentication(username, password);
	}
}