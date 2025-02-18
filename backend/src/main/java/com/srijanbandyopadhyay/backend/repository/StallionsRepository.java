package com.srijanbandyopadhyay.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srijanbandyopadhyay.backend.model.Stallions;

@Repository
public interface StallionsRepository extends JpaRepository<Stallions, Integer>
{
    
}
