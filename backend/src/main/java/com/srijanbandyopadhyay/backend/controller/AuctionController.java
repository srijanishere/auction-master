package com.srijanbandyopadhyay.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srijanbandyopadhyay.backend.model.Bandits;
import com.srijanbandyopadhyay.backend.model.BigBulls;
import com.srijanbandyopadhyay.backend.model.Royals;
import com.srijanbandyopadhyay.backend.model.SpittingCobras;
import com.srijanbandyopadhyay.backend.model.Stallions;
import com.srijanbandyopadhyay.backend.service.AuctionService;

@RestController
@RequestMapping("/bcl")
public class AuctionController
{
    @Autowired
    private AuctionService service;   
    
    // Post mappings for all the teams to add a player
    @PostMapping("/bandits/add")
    public String addBanditsPlayer(@RequestBody Bandits bandit) {
        return service.addBandits(bandit);
    }
    
    @PostMapping("/bulls/add")
    public String addBullPlayer(@RequestBody BigBulls bull) {
        return service.addBigBulls(bull);
    }
    
    @PostMapping("/royals/add")
    public String addRoyalsPlayer(@RequestBody Royals royal) {
        return service.addRoyals(royal);
    }
    
    @PostMapping("/cobras/add")
    public String addCobrasPlayer(@RequestBody SpittingCobras cobra) {
        return service.addSpittingCobras(cobra);
    }
    
    @PostMapping("/stallions/add")
    public String addStallionsPlayer(@RequestBody Stallions stallion) {
        return service.addStallions(stallion);
    }
    
    // Get mapping for all teams to fetch all the players
    @GetMapping("/bandits/getAll")
    public List<Bandits> getAllBandits() {
        return service.getBandits();
    }
    
    @GetMapping("/bulls/getAll") 
    public List<BigBulls> getAllBulls() {
        return service.getBigBulls();
    }
    
    
    @GetMapping("/royals/getAll") 
    public List<Royals> getAllRoyals() {
        return service.getRoyals();
    }

    @GetMapping("/cobras/getAll") 
    public List<SpittingCobras> getAllCobras() {
        return service.geSpittingCobras();
    }

    @GetMapping("/stallions/getAll")
    public List<Stallions> getAllStallions() {
        return service.geStallions();
    }
    
}
