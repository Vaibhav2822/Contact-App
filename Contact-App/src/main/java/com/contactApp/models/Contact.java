package com.contactApp.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Contact {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private Long sNo;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String email;

}
