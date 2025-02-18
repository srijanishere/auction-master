package com.srijanbandyopadhyay.backend.service;

import java.util.List;

import com.srijanbandyopadhyay.backend.model.Bandits;
import com.srijanbandyopadhyay.backend.model.BigBulls;
import com.srijanbandyopadhyay.backend.model.Royals;
import com.srijanbandyopadhyay.backend.model.SpittingCobras;
import com.srijanbandyopadhyay.backend.model.Stallions;

public interface AuctionService
{
    // functions to add a player
    public String addBandits(Bandits bandit);
    public String addBigBulls(BigBulls bull);
    public String addRoyals(Royals royal);    
    public String addStallions(Stallions stallion);    
    public String addSpittingCobras(SpittingCobras cobra);    

    // functions to fetch all players
    public List<Bandits> getBandits();
    public List<BigBulls> getBigBulls();
    public List<Royals> getRoyals();
    public List<Stallions> geStallions();
    public List<SpittingCobras> geSpittingCobras();
}
