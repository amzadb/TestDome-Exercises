/*
Refactor the AlertService and MapAlertDAO classes:
    a) Create a new package-private interface, named AlertDAO 
       that contains the same methods as MapAlertDAO.
    b) MapAlertDAO should implement AlertDAO interface.
    c) AlertService should have a public constructor that accepts AlertDAO.
    d) The raiseAlert and getAlertTime methods should use the object
       passed through the constructor.
*/

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

class AlertService {
    private final AlertDAO storage; // = new MapAlertDAO();
		
    public AlertService(AlertDAO alertDAO) {
        this.storage = alertDAO;
    }
    
    public UUID raiseAlert() {
        return this.storage.addAlert(new Date());
    }
	
    public Date getAlertTime(UUID id) {
        return this.storage.getAlert(id);
    }	
}


interface AlertDAO {
    public UUID addAlert(Date time);
	
    public Date getAlert(UUID id);

    // default UUID addAlert(Date time) {
    //     return null;
    // }
	
    // default Date getAlert(UUID id) {       
    //     return null;
    // }
}

class MapAlertDAO implements AlertDAO {
    private final Map<UUID, Date> alerts = new HashMap<UUID, Date>();
	
    public UUID addAlert(Date time) {
    	UUID id = UUID.randomUUID();
        this.alerts.put(id, time);
        return id;
    }
	
    public Date getAlert(UUID id) {
        return this.alerts.get(id);
    }	
}