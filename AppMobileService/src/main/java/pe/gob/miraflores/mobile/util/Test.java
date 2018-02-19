package pe.gob.miraflores.mobile.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

public class Test {

	public static void main(String[] args) {
		int a = new Integer(3);
		int b = new Integer(3);
		
		System.out.println(a==b);
		
		try {
			//Test.getMapFromUrl("https://world-georss.waze.com/rtserver/web/TGeoRSS?tk=ccp_partner&ccp_partner_name=Miraflores&polygon=-77.0558054864772,-12.1114653262786;-77.0527104959394,-12.1073087571928;-77.0467604513712,-12.1108914593412;-77.0404850016804,-12.1083396897846;-77.0369343206733,-12.1103330575014;-77.0273458261705,-12.1028371278904;-77.025884570622,-12.1191173588351;-77.0160033744081,-12.119314635385;-77.0107830978147,-12.1145912006012;-77.0010518424432,-12.1288449506841;-77.0196557834857,-12.130765790665;-77.021890372037,-12.1343203598824;-77.0257038558305,-12.1363168842732;-77.0281752593671,-12.1395592534648;-77.029624573848,-12.14019436017;-77.030537910879,-12.1340485248628;-77.0354498099025,-12.1306524325099;-77.036981471354,-12.1325612782214;-77.0388508265173,-12.1258944322622;-77.0558054864772,-12.1114653262786&format=JSON&types=traffic,alerts,irregularities");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static List<Map<String,Object>> getMapFromUrl(String url) throws Exception{
		String newCade = "";
		String theLine;
		List<Map<String,Object>> listResult = new ArrayList<Map<String,Object>>();
		try {
			URL u = new URL(url);
			InputStream is = u.openStream();
			InputStreamReader isr = new InputStreamReader(is);
			BufferedReader br = new BufferedReader(isr);
			JsonFactory factory = new JsonFactory(); 
			ObjectMapper mapper = new ObjectMapper(factory);

			while ((theLine = br.readLine()) != null) {
				//newCade = theLine.substring(theLine.indexOf("({")+1, theLine.indexOf("})")+1);
				newCade = theLine;
				TypeReference<HashMap<String,Object>> typeRef = new TypeReference<HashMap<String,Object>>(){}; 
				HashMap<String,Object> o = mapper.readValue(newCade, typeRef);
				List<Map> list = (List<Map>)o.get("alerts");
				if(list!=null)
					for(Map m :list){
						System.out.println(m.toString());
					}
			}

		}catch (MalformedURLException ex) {
			ex.printStackTrace();
		} 
		catch (IOException ex) {
			ex.printStackTrace();
		} 
		return listResult;
	}
	
}
