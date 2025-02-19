package com.srijanbandyopadhyay.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srijanbandyopadhyay.backend.model.Credit;
import com.srijanbandyopadhyay.backend.service.CreditService;

@RestController
@RequestMapping("/bcl")
@CrossOrigin
public class CreditController
{
    @Autowired
    private CreditService service;

    @PutMapping("/credit/update/{balance}/{id}")
    public String updateCredit(@PathVariable double balance, @PathVariable int id)
    {
        service.updateBalance(balance, id);
        return "Credit balance has been updated";
    }

    @GetMapping("/credit/get/{id}")
    public Optional<Credit> getCreditRecord(@PathVariable int id)
    {
        return service.findCreditById(id);
    }
}
