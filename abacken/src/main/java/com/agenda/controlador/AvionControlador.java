package com.agenda.controlador;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.agenda.modelo.entidad.Avion;
import com.agenda.modelo.repositorio.AvionRepositorio;

@Controller
public class AvionControlador {

	@Autowired
	private AvionRepositorio avionRepositorio;

	@GetMapping("/")
	public String home(Model model) {
		List<Avion> aviones = avionRepositorio.findAll();
		model.addAttribute("aviones", aviones);
		return "index";
	}
}