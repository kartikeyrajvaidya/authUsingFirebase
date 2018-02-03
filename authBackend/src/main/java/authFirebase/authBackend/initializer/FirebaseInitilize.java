package authFirebase.authBackend.initializer;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.ExecutionException;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

public class FirebaseInitilize {

	public static void init() throws InterruptedException, ExecutionException, IOException {
		System.out.println("FireBase Initialized");

		FileInputStream serviceAccount = new FileInputStream(
				"/Users/kartikeyrajvaidya/Desktop/Git_Repo/authUsingFirebase/authBackend/src/main/resources/authentication-a5fcd-firebase-adminsdk-yq1y7-48c7984c03.json");

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl("https://authentication-a5fcd.firebaseio.com").build();

		FirebaseApp.initializeApp(options);

	}

}
