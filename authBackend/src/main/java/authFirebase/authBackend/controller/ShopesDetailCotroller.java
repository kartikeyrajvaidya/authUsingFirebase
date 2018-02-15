package authFirebase.authBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import authFirebase.authBackend.model.ShopesModel;
import authFirebase.authBackend.repository.ShopesRepository;

@RestController
@CrossOrigin("*")
public class ShopesDetailCotroller {

	
	@Autowired
	ShopesRepository shopesRepository ;
	
	@PostMapping("/store")
	public ResponseEntity<String> storeDetail(@RequestBody ShopesModel sopesModel) {
		
		shopesRepository.insert(sopesModel);
		return new ResponseEntity<String>("OK", HttpStatus.OK);
		
	}
	
	@GetMapping("/shopes/{pincode}")
	public List<ShopesModel> getDetail(@PathVariable("pincode") int pincode) {
		
		List<ShopesModel> shopes = shopesRepository.findByPincode(pincode);
		return shopes;
		
	}
}
