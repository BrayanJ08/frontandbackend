package com.agenda.modelo.servicio;

import java.util.List;

import com.agenda.modelo.entidad.Avion;

public interface IAvionServicio {
	// crear los métodos para los servicios CRUD
	public List<Avion> listaTodos();
	public void guardar(Avion avion);
	public Avion buscarPorId(Integer id);
	public void eleminar(Integer id);
}