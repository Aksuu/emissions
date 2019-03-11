package fi.reaktor.emissions.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class EmissionsController {
	
	// Set the main page path, returns the index.html file at src/main/resources
	@GetMapping("/index")
	public String index() {
		return "index";
	}

}
