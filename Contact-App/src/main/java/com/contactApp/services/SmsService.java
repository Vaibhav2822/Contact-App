package com.contactApp.services;

import com.contactApp.models.Contact;
import com.contactApp.models.SMS;
import com.contactApp.repository.ContactRepository;
import com.contactApp.repository.SMSRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.HashSet;
import java.util.Optional;

@Component
public class SmsService{
    @Autowired
    SMSRepository smsRepository;

    @Autowired
    ContactRepository contactRepository;
    private final String ACCOUNT_SID = "ACf926b81b3923fd4fdd58cd79c6f3e769";
    private final String AUTH_TOKEN = "0ff7ef13286872ce1f254eb2793a6369";
    private final String FROM_NUMBER = "+16693221783";

    public void send(SMS sms) throws ParseException {

        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        String msg = (sms.getMsg()==null)? "Hi, Your OTP is -":sms.getMsg() ;
        System.out.println(sms.getPhoneNumber());
        Message message = Message.creator(new PhoneNumber(sms.getPhoneNumber()), new PhoneNumber(FROM_NUMBER), msg).create();


        smsRepository.save(sms);
    }

}
