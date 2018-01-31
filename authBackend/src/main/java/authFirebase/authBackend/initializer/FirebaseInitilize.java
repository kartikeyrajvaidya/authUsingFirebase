package authFirebase.authBackend.initializer;

import java.util.concurrent.ExecutionException;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;

public class FirebaseInitilize {
	
	public static boolean verifyToken(String idToken) throws InterruptedException, ExecutionException {
		
		
		FirebaseToken decodedToken = FirebaseAuth.getInstance().verifyIdTokenAsync(idToken).get();
		String uid = decodedToken.getUid();
		System.out.println(uid);
		return true;
		
	} 


}
