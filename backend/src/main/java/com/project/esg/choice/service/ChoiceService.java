package com.project.esg.choice.service;

import com.project.esg.choice.dao.ChoiceDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChoiceService {
    @Autowired
    private ChoiceDao choiceDao;


    public String select() {
        String result = choiceDao.select();
        return result;
    }
}
