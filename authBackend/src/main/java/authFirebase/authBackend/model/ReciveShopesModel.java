package authFirebase.authBackend.model;

public class ReciveShopesModel {

	String name;
	String address;
	double latitude;
	double longitude;
	

	public ReciveShopesModel() {
		
	}
	public ReciveShopesModel(String name, String address, double latitude, double longitude) {
		super();
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.name = name;
	}
	
	
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
	
	@Override
	public String toString() {
		return "ReciveShopesModel [address=" + address + ", latitude=" + latitude + ", longitude=" + longitude
				+ ", name=" + name + "]";
	}
	
}
