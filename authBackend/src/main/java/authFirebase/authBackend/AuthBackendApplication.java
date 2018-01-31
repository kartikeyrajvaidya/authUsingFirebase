package authFirebase.authBackend;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseCredentials;

import authFirebase.authBackend.initializer.FirebaseInitilize;

@SpringBootApplication
public class AuthBackendApplication {

	public static void main(String[] args) throws IOException, InterruptedException, ExecutionException {
		SpringApplication.run(AuthBackendApplication.class, args);
		System.out.println("FireBase Initialized");
		FileInputStream serviceAccount = new FileInputStream(
				"/Users/kartikeyrajvaidya/Desktop/Git_Repo/authUsingFirebase/authBackend/src/main/resources/authentication-a5fcd-firebase-adminsdk-yq1y7-e0b070df76.json");

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredential(FirebaseCredentials.fromCertificate(serviceAccount))
				.setDatabaseUrl("https://authentication-a5fcd.firebaseio.com").build();

		FirebaseApp.initializeApp(options);
		FirebaseInitilize.verifyToken("lYHaBId64ZRlMl0mQDe2B6zftaX2");
	}
}
