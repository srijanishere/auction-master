package com.srijanbandyopadhyay.backend.service;

import java.util.Optional;

import com.srijanbandyopadhyay.backend.model.Credit;

public interface CreditService
{
    public void updateBalance(double balance, int id);
    public Optional<Credit> findCreditById(int id);
}
