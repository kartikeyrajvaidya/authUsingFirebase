package authFirebase.authBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.Distance;
import org.springframework.data.geo.Metrics;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.geo.GeoJsonPoint;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import authFirebase.authBackend.model.ReciveShopesModel;
import authFirebase.authBackend.model.ShopesModel;
import authFirebase.authBackend.repository.ShopesRepository;

@RestController
@CrossOrigin("*")
public class ShopesDetailCotroller {

	@Autowired
	ShopesRepository shopesRepository;

	// @PostMapping("/store")
	// public ResponseEntity<String> storeDetail(@RequestBody ShopesModel
	// sopesModel) {
	//
	// shopesRepository.insert(sopesModel);
	// return new ResponseEntity<String>("OK", HttpStatus.OK);
	//
	// }

	@GetMapping("/shopes/{lat}/{long}/{dist}")
	public final List<ShopesModel> getLocations(@PathVariable("lat") String lat, @PathVariable("long") String longi,
			@PathVariable("dist") double distance) {

		return this.shopesRepository.findByLocationNear(

				new Point(Double.valueOf(longi), Double.valueOf(lat)), new Distance(distance, Metrics.KILOMETERS));
	}

	@PostMapping("/store")
	public final ResponseEntity<String> addLocations(@RequestBody ReciveShopesModel reciveShopesModel) {

		final GeoJsonPoint locationPoint = new GeoJsonPoint(Double.valueOf(reciveShopesModel.getLongitude()),
				Double.valueOf(reciveShopesModel.getLatitude()));
		
		ShopesModel shopesModel = new ShopesModel(reciveShopesModel.getName(),reciveShopesModel.getAddress(),locationPoint);
		
		System.out.println(reciveShopesModel);
		
		shopesRepository.save(shopesModel);
		
		return new ResponseEntity<String>("OK", HttpStatus.OK);
	}
}
