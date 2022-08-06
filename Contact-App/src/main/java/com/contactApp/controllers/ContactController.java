package com.contactApp.controllers;

import com.contactApp.models.Contact;
import com.contactApp.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ContactController {
    @Autowired
    ContactRepository repository;

    @GetMapping("/all")
    public List<Contact> getAllContact(){
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Contact findContact(@PathVariable Long id){
        return repository.findById(id).get();
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id){
        repository.deleteById(id);
    }

    @PostMapping("/")
    public Contact addContact(@RequestBody Contact contact){
        return repository.save(contact);
    }

    @PutMapping("/{id}")
    public Contact updateContact(@PathVariable Long id,@RequestBody Contact contact){
        contact.setSNo(id);
        return repository.save(contact);
    }
}
