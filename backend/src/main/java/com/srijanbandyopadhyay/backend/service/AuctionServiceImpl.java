package com.srijanbandyopadhyay.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srijanbandyopadhyay.backend.model.Bandits;
import com.srijanbandyopadhyay.backend.model.BigBulls;
import com.srijanbandyopadhyay.backend.model.Royals;
import com.srijanbandyopadhyay.backend.model.SpittingCobras;
import com.srijanbandyopadhyay.backend.model.Stallions;
import com.srijanbandyopadhyay.backend.repository.BanditsRepository;
import com.srijanbandyopadhyay.backend.repository.BigBullsRepository;
import com.srijanbandyopadhyay.backend.repository.RoyalsRepository;
import com.srijanbandyopadhyay.backend.repository.SpittingCobrasRepository;
import com.srijanbandyopadhyay.backend.repository.StallionsRepository;

@Service
public class AuctionServiceImpl implements AuctionService
{
    
    @Autowired
    private BanditsRepository banditsRepo;
    
    @Autowired
    private BigBullsRepository bigBullsRepo;
    
    @Autowired
    private RoyalsRepository royalsRepo;
    
    @Autowired
    private SpittingCobrasRepository spittingCobrasRepo;
    
    @Autowired
    private StallionsRepository stallionsRepo;
    
    @Override
    public String addBandits(Bandits bandit) {
        banditsRepo.save(bandit);
        return "Added player successfully";
    }
    
    @Override
    public String addBigBulls(BigBulls bull) {
        bigBullsRepo.save(bull);
        return "Added player successfully";
    }
    
    @Override
    public String addRoyals(Royals royal) {
        royalsRepo.save(royal);
        return "Added player successfully";
    }
    
    @Override
    public String addStallions(Stallions stallion) {
        stallionsRepo.save(stallion);
        return "Added player successfully";
    }
    
    @Override
    public String addSpittingCobras(SpittingCobras cobra) {
        spittingCobrasRepo.save(cobra);
        return "Added player successfully";
    }
    
    @Override
    public List<Bandits> getBandits() {
        return banditsRepo.findAll();
    }
    
    @Override
    public List<BigBulls> getBigBulls() {
        return bigBullsRepo.findAll();
    }
    
    @Override
    public List<Royals> getRoyals() {
        return royalsRepo.findAll();
    }
    
    @Override
    public List<Stallions> geStallions() {
        return stallionsRepo.findAll();
    }
    
    @Override
    public List<SpittingCobras> geSpittingCobras() {
        return spittingCobrasRepo.findAll();
    }
    
}
