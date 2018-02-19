package pe.gob.miraflores.mobile.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class conectionDB {
	public Connection conectionDB2() throws Exception{
		Connection connectionDB2 = null;
		try {  
			Class.forName("com.ibm.as400.access.AS400JDBCDriver");
			//connectionDB2 = DriverManager.getConnection("jdbc:as400://10.0.1.118/SMM;prompt=false;naming=system", "USERSMMREP", "MUNIREP11");
			connectionDB2 = DriverManager.getConnection("jdbc:as400://10.0.1.10/SMM;prompt=false;naming=system", "USERSMMREP", "MUNIREP11");			
        } catch (SQLException e) {
        	e.printStackTrace();
        	throw new Exception("Error de coneccion de Base de Datos");
        }
		return connectionDB2;
	}
} 