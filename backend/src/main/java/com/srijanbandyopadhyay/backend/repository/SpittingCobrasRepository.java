package com.srijanbandyopadhyay.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srijanbandyopadhyay.backend.model.SpittingCobras;

@Repository
public interface SpittingCobrasRepository extends JpaRepository<SpittingCobras, Integer>
{
    
}
