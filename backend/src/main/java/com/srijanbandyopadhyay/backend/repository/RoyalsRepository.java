package com.srijanbandyopadhyay.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srijanbandyopadhyay.backend.model.Royals;

@Repository
public interface RoyalsRepository extends JpaRepository<Royals, Integer>
{
    
}
