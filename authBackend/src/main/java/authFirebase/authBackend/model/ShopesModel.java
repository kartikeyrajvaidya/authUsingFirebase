package authFirebase.authBackend.model;

import org.hibernate.validator.constraints.NotBlank;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "shopes")
public class ShopesModel {

	public ShopesModel(String bussinessName, String address, GeoJsonPoint location) {
		super();
		this.bussinessName = bussinessName;
		this.address = address;
		this.location = location;
	}
	@Id
	String id;
	@NotBlank
	private String bussinessName;
	@NotBlank
	private String address;
	@NotBlank
	private GeoJsonPoint location;


	public String getBussinessName() {
		return bussinessName;
	}

	public void setBussinessName(String bussinessName) {
		this.bussinessName = bussinessName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public GeoJsonPoint getLocation() {
		return location;
	}

	public void setLocation(GeoJsonPoint location) {
		this.location = location;
	}

	@Override
	public String toString() {
		return "ShopesModel [id=" + id + ", bussinessName=" + bussinessName + ", address=" + address + ", location="
				+ location + "]";
	}

}
