package com.srijanbandyopadhyay.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.srijanbandyopadhyay.backend.model.Credit;

@Repository
public interface CreditRepository extends JpaRepository<Credit, Integer>
{
    // Method to update balance
    @Modifying
    @Transactional
    @Query("UPDATE Credit k SET k.balance = ?1 WHERE k.id = ?2")
    public int updateBalanceById(double balance, int id);
    
    public Optional<Credit> findById(int id);
}
