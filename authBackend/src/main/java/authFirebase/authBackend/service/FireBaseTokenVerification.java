package authFirebase.authBackend.service;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Repository;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;

@Repository
public class FireBaseTokenVerification {

	static String uid = "";

	public static String vrifyToken(String idToken) throws InterruptedException, ExecutionException {
		
		FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdTokenAsync(idToken).get();
		uid = decodedToken.getUid();

		System.out.println(uid);
		return uid;

	}

}
