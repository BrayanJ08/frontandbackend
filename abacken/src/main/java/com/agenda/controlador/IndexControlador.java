package com.agenda.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexControlador {

	@GetMapping("/")
	public String home() {
		return "redirect:/vistas/aviones/";
	}
}