package com.agenda.modelo.servicio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agenda.modelo.entidad.Avion;
import com.agenda.modelo.repositorio.AvionRepositorio;

@Service
public class AvionServicio implements IAvionServicio {
    //paea inyectar las dependencias 
	@Autowired
	private AvionRepositorio avionRepositorio;
	
	@Override
	public List<Avion> listaTodos() {
		return (List<Avion>)avionRepositorio.findAll();
	}

	@Override
	public void guardar(Avion avion) {
		avionRepositorio.save(avion);
	}

	@Override
	public Avion buscarPorId(Integer id) {
		
		return avionRepositorio.findById(id).orElse(null);
	}

	@Override
	public void eleminar(Integer id) {
		avionRepositorio.deleteById(id);

	}

}