package pe.gob.miraflores.mobile.service.email;

import java.util.HashMap;
import java.util.Map;
public class MailBean {
	
	private Map<String, Object> attachFile = new HashMap<String, Object>();
	private String[] to;
	private String[] bcc;  
	private String text;
    private String subject;
    private boolean textHtml = false;
    private String[] replyto;
    private Integer ideEmpresa;

	public Integer getIdeEmpresa() {
		return ideEmpresa;
	}

	public void setIdeEmpresa(Integer ideEmpresa) {
		this.ideEmpresa = ideEmpresa;
	}

	public String[] getReplyto() {
		return replyto;
	}

	public void setReplyto(String[] replyto) {
		this.replyto = replyto;
	}

	public String[] getBcc() {
  		return bcc;
  	}

  	public void setBcc(String[] bcc) {
  		this.bcc = bcc;
  	}

    
	public Map<String, Object> getAttachFile() {
		return attachFile;
	}
	
	public String[] getTo() {
		return to;		
	}

	public String getText() {
		return this.text;
	}

	public String getSubject() {
		return this.subject;
	}

	public boolean isTextHtml() {
		textHtml=true;
		return textHtml;
	}
    
    public void setAttachFile(Map<String, Object> attachFile) {
		this.attachFile = attachFile;
	}

	public void setTo(String[] to) {
		this.to = to;
	}

	public void setTo(String to) {
		this.to = new String[]{to};
	}
	
	
	public void setBcc(String bcc){
		this.bcc=new String[]{bcc};
	}

	public void setText(String text) {
		this.text = text;
	}

	public void setTextHtml(boolean textHtml) {
		this.textHtml = textHtml;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}
}
