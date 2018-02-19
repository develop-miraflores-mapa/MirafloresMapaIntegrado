package pe.gob.miraflores.mobile.util;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import javax.xml.bind.DatatypeConverter;

import com.fasterxml.jackson.databind.ObjectMapper;

public class CambistasUtil {

    private static final String GRANT_TYPE = "password";
    private static final String USER = "mmiraflores";
    private static final String PASSWORD = "45852122m";
    private static final String CLIENT_ID = "miraflores";
    private static final String CLIENT_SECRET = "cambistas";

    private static final String TOKEN_URL = "http://api.certisat.com:8087/oauth/token";
//    private static final String VEHICULOS_URL = "http://api.certisat.com:8087/api/me/vehiculo";
    private static final String VEHICULOS_URL = "http://api.certisat.com:8087/api/me/empresa/259/vehiculo";
    

    
    public static String getResponseUbicacionCambistas()  throws MalformedURLException, IOException {
    	
    	
    	 String urlParameters = "?grant_type=" + GRANT_TYPE + "&username=" + USER + "&password=" + PASSWORD;
         String userpass = CLIENT_ID + ":" + CLIENT_SECRET;
         String basicAuth = "Basic " + DatatypeConverter.printBase64Binary(userpass.getBytes());

         URL tokenURL = new URL(TOKEN_URL + urlParameters);
         HttpURLConnection conn = (HttpURLConnection) tokenURL.openConnection();
         conn.setRequestMethod("GET");
         conn.setRequestProperty("Authorization", basicAuth);

         int responseCode = conn.getResponseCode();
         String response = getString(conn);
//         System.out.println(response);

         ObjectMapper mapper = new ObjectMapper();
         AccessToken accessToken = mapper.readValue(response, AccessToken.class);
         urlParameters = "?access_token=" + accessToken.getAccessToken();

         URL vehiculosURL = new URL(VEHICULOS_URL + urlParameters);
         conn = (HttpURLConnection) vehiculosURL.openConnection();
         conn.setRequestMethod("GET");

         responseCode = conn.getResponseCode();
         response = getString(conn);
         return response;
    	
    }
    
    private static String getString(HttpURLConnection conn) throws IOException {
        String response;
        try (BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()))) {
            String inputLine;
            StringBuilder sb = new StringBuilder();
            while ((inputLine = in.readLine()) != null) {
                sb.append(inputLine);
            }
            response = sb.toString();
        }
        return response;
    }

    public static class AccessToken {

        @JsonProperty(value = "access_token")
        private String accessToken;
        @JsonProperty(value = "token_type")
        private String tokenType;
        @JsonProperty(value = "refresh_token")
        private String refreshToken;
        @JsonProperty(value = "expires_in")
        private int expiresIn;
        @JsonProperty(value = "scope")
        private String scope;

        public String getAccessToken() {
            return accessToken;
        }

        public void setAccessToken(String accessToken) {
            this.accessToken = accessToken;
        }

        public String getTokenType() {
            return tokenType;
        }

        public void setTokenType(String tokenType) {
            this.tokenType = tokenType;
        }

        public String getRefreshToken() {
            return refreshToken;
        }

        public void setRefreshToken(String refreshToken) {
            this.refreshToken = refreshToken;
        }

        public int getExpiresIn() {
            return expiresIn;
        }

        public void setExpiresIn(int expiresIn) {
            this.expiresIn = expiresIn;
        }

        public String getScope() {
            return scope;
        }

        public void setScope(String scope) {
            this.scope = scope;
        }

        @Override
        public String toString() {
            return "AccessToken[access_token: '" + accessToken + "'; token_type: '" + tokenType + "'; expires_in: " + expiresIn + "; scope: '" + scope + "']";
        }
    }

}
