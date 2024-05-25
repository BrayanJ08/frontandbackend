package com.agenda.modelo.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agenda.modelo.entidad.Avion;

public interface AvionRepositorio extends JpaRepository<Avion, Integer> {
	List<Avion> findAll();
}