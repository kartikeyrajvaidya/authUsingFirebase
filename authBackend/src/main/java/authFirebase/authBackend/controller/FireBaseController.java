package authFirebase.authBackend.controller;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import authFirebase.authBackend.model.TokenModel;
import authFirebase.authBackend.service.FireBaseTokenVerification;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class FireBaseController {

	@Autowired
	FireBaseTokenVerification fireBaseTokenVerification;

	@PostMapping("/verify")
	public ResponseEntity<String> postMail(@RequestBody TokenModel tokenModel)
			throws InterruptedException, ExecutionException, IOException {
		
		String token = tokenModel.getTokenId();
		
		String uid = fireBaseTokenVerification.vrifyToken(token);

		if (uid != "") {
			return new ResponseEntity<String>(uid, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>(uid, HttpStatus.FORBIDDEN);
		}
	}

}
