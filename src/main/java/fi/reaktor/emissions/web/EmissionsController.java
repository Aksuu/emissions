package fi.reaktor.emissions.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import fi.reaktor.emissions.domain.PopulationRepository;

@Controller
public class EmissionsController {
	
	@Autowired
	PopulationRepository repository;
	
	// Set the main page path, returns the index.html file at src/main/resources
	@GetMapping("/index")
	public String indexPage(Model model) {
		model.addAttribute("populations", repository.findAll());
		return "index";
	}

}
