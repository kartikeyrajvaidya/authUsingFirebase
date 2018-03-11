package authFirebase.authBackend.repository;

import java.util.List;

import org.springframework.data.geo.Distance;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import org.springframework.data.geo.Point;

import authFirebase.authBackend.model.ShopesModel;


@Repository
public interface ShopesRepository  extends MongoRepository<ShopesModel, String>{
	
	//List<ShopesModel> findByPincode(int pincode);
	List<ShopesModel> findByLocationNear(Point p, Distance d);
	


}
