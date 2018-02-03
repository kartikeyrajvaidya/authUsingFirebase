package authFirebase.authBackend;

import java.io.IOException;
import java.util.concurrent.ExecutionException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import authFirebase.authBackend.initializer.FirebaseInitilize;

@SpringBootApplication
public class AuthBackendApplication {

	public static void main(String[] args) throws IOException, InterruptedException, ExecutionException {
		SpringApplication.run(AuthBackendApplication.class, args);
		FirebaseInitilize.init();	
	}
}
