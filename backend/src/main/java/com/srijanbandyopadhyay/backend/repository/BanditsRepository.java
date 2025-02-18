package com.srijanbandyopadhyay.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srijanbandyopadhyay.backend.model.Bandits;

@Repository
public interface BanditsRepository extends JpaRepository<Bandits, Integer>
{
    
}
