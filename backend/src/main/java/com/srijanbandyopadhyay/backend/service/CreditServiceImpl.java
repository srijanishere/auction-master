package com.srijanbandyopadhyay.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.srijanbandyopadhyay.backend.model.Credit;
import com.srijanbandyopadhyay.backend.repository.CreditRepository;

@Service
public class CreditServiceImpl implements CreditService
{

    @Autowired
    private CreditRepository repository;

    @Override
    @Transactional
    public void updateBalance(double balance, int id) {
        repository.updateBalanceById(balance, id);
    }

    @Override
    public Optional<Credit> findCreditById(int id) {
        return repository.findById(id);
    }
    
}
