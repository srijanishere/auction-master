package com.srijanbandyopadhyay.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srijanbandyopadhyay.backend.model.BigBulls;

@Repository
public interface BigBullsRepository extends JpaRepository<BigBulls, Integer>
{
    
}
