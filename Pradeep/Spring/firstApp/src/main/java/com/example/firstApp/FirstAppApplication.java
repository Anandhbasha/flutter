package com.example.firstApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FirstAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstAppApplication.class, args);
	}

}


//Annotation
//->Four rest API-> GET,POST,PUT,DELETE
//router ->Path for API operation
//controller->Process of the API
//@RestController-> Create Rest API
//@RRequestMapping-> Define comman API routes
//@GetMapping->Retive data
//@PostMapping->Create data
//@PutMapping->update Data
//DeleteMapping->deletedata
//@PathVariable->read value from URL Params
//@RequestParam->read value from parameter
//@RequestBody->Accept the json
//@ResponseStatus->Set response status

//HTTP methods and status code
//JSON request and response
//ResponseEntity
//Postman
//Controller,Service,Repository architecture


//@Autowired
//@Component
//IOC->Inversion of Control
//DI->Dependency Injection
//@Primary and @Qualifier
//Bean scopes and lifecycle
