package com.contactApp.controllers;

import com.contactApp.models.SMS;
import com.contactApp.repository.SMSRepository;
import com.contactApp.services.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/sms")
public class SMSController {
    @Autowired
    SMSRepository repository;
    @Autowired
    SmsService smsService;
    @PostMapping("/sendOTP")
    public ResponseEntity<Boolean> sendOTP(@RequestBody SMS sms) {
        try {
            smsService.send(sms);
        } catch (Exception e) {
            e.getMessage();
            e.printStackTrace();
            return new ResponseEntity<Boolean>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }
    @GetMapping("/all")
    public List<SMS> findAllSMS(){
        return repository.findAll();
    }

}